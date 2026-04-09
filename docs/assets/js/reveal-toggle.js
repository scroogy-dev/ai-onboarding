/**
 * reveal-toggle.js
 *
 * MkDocs Material 페이지를 reveal.js 슬라이드 모드로 전환한다.
 * - ## (h2) 단위로 슬라이드를 분리
 * - ESC 또는 닫기 버튼으로 문서 모드 복귀
 * - 좌/우 화살표, 스페이스바로 슬라이드 이동
 */

(function () {
  "use strict";

  /* ── 상태 ── */
  let slides = [];
  let currentIndex = 0;
  let overlay = null;
  let isActive = false;

  /* ── 슬라이드 파싱 ── */
  function parseSlides() {
    const article = document.querySelector("article.md-content__inner");
    if (!article) return [];

    const result = [];
    let currentSlide = null;

    for (const node of article.children) {
      // h1 → 타이틀 슬라이드
      if (node.tagName === "H1") {
        currentSlide = { title: node.innerHTML, content: [], level: "title" };
        result.push(currentSlide);
        continue;
      }
      // h2 → 새 슬라이드
      if (node.tagName === "H2") {
        currentSlide = { title: node.innerHTML, content: [], level: "section" };
        result.push(currentSlide);
        continue;
      }
      // 나머지 → 현재 슬라이드에 추가
      if (currentSlide) {
        currentSlide.content.push(node.outerHTML);
      }
    }

    // 콘텐츠가 너무 많은 슬라이드를 h3 기준으로 분할
    const split = [];
    for (const slide of result) {
      const chunks = splitByH3(slide);
      split.push(...chunks);
    }

    // 타이틀 슬라이드 다음에 목차 슬라이드 삽입
    const sectionTitles = result
      .filter(function (s) { return s.level === "section"; })
      .map(function (s) { return s.title; });

    if (sectionTitles.length >= 2) {
      var tocItems = sectionTitles
        .map(function (t, i) { return "<li>" + (i + 1) + ". " + t + "</li>"; })
        .join("");
      var tocSlide = {
        title: "목차",
        content: ['<ol class="rv-toc-list">' + tocItems + "</ol>"],
        level: "toc",
      };
      // 타이틀(인덱스 0) 바로 뒤에 삽입
      var insertAt = split.length > 0 && split[0].level === "title" ? 1 : 0;
      split.splice(insertAt, 0, tocSlide);
    }

    return split;
  }

  function splitByH3(slide) {
    // 타이틀 슬라이드이거나 h3가 없으면 그대로
    if (slide.level === "title") return [slide];

    const html = slide.content.join("");
    if (!html.includes("<h3")) return [slide];

    const container = document.createElement("div");
    container.innerHTML = html;

    const chunks = [];
    let current = {
      title: slide.title,
      content: [],
      level: slide.level,
    };

    for (const child of container.children) {
      if (child.tagName === "H3") {
        // 이전 청크에 내용이 있으면 저장
        if (current.content.length > 0) {
          chunks.push(current);
        }
        current = {
          title: slide.title,
          subtitle: child.innerHTML,
          content: [],
          level: "subsection",
        };
        continue;
      }
      current.content.push(child.outerHTML);
    }
    if (current.content.length > 0 || current.subtitle) {
      chunks.push(current);
    }

    return chunks.length > 0 ? chunks : [slide];
  }

  /* ── 슬라이드 렌더링 ── */
  function renderSlide(slide, index, total) {
    const titleHTML =
      slide.level === "title" || slide.level === "toc"
        ? '<h1 class="rv-slide__title">' + slide.title + "</h1>"
        : '<h2 class="rv-slide__title">' + slide.title + "</h2>";

    const subtitleHTML = slide.subtitle
      ? '<h3 class="rv-slide__subtitle">' + slide.subtitle + "</h3>"
      : "";

    const bodyHTML = slide.content.join("");

    return (
      '<div class="rv-slide__header">' +
      titleHTML +
      subtitleHTML +
      "</div>" +
      '<div class="rv-slide__body">' +
      bodyHTML +
      "</div>"
    );
  }

  /* ── 오버레이 생성 ── */
  function createOverlay() {
    const el = document.createElement("div");
    el.className = "rv-overlay";
    el.innerHTML =
      '<div class="rv-progress"></div>' +
      '<div class="rv-topbar">' +
        '<button class="rv-overlay__close" aria-label="슬라이드 모드 닫기" title="ESC로 닫기">&times;</button>' +
        '<div class="rv-pagebar"></div>' +
      '</div>' +
      '<div class="rv-slide"></div>' +
      '<div class="rv-bottombar">' +
        '<button class="rv-bottombar__btn rv-bottombar__btn--prev" aria-label="이전 슬라이드">&#8249; 이전</button>' +
        '<span class="rv-bottombar__counter"></span>' +
        '<button class="rv-bottombar__btn rv-bottombar__btn--next" aria-label="다음 슬라이드">다음 &#8250;</button>' +
      '</div>';

    el.querySelector(".rv-overlay__close").addEventListener("click", deactivate);
    el.querySelector(".rv-bottombar__btn--prev").addEventListener("click", prev);
    el.querySelector(".rv-bottombar__btn--next").addEventListener("click", next);

    document.body.appendChild(el);
    return el;
  }

  /* ── 페이지 점프 바 렌더링 ── */
  function renderPagebar() {
    var bar = overlay.querySelector(".rv-pagebar");
    if (!bar) return;

    var dots = [];
    for (var i = 0; i < slides.length; i++) {
      var label = (i + 1).toString();
      var cls = "rv-pagebar__dot";
      if (i === currentIndex) cls += " rv-pagebar__dot--active";
      dots.push(
        '<button class="' + cls + '" data-index="' + i + '" title="' + label + '">' +
          '<span class="rv-pagebar__dot-num">' + label + '</span>' +
        '</button>'
      );
    }
    bar.innerHTML = dots.join("");

    // 클릭 이벤트
    bar.querySelectorAll(".rv-pagebar__dot").forEach(function (dot) {
      dot.addEventListener("click", function () {
        goTo(parseInt(this.getAttribute("data-index"), 10));
      });
    });
  }

  /* ── 카드 레이아웃 변환 (지정 슬라이드만) ── */
  var cardGridSubtitles = ["소프트웨어가 만드는 가치"];
  var cardStepSubtitles = ["실습 접근법: 최소 플랜 → 실행"];

  function applyCardGrid(slideEl) {
    var subtitle = slideEl.querySelector(".rv-slide__subtitle");
    var subText = subtitle
      ? subtitle.textContent.replace(/\s+/g, " ").trim()
      : "";
    var title = slideEl.querySelector(".rv-slide__title");
    var titleText = title
      ? title.textContent.replace(/\s+/g, " ").trim()
      : "";
    var matchText = subText || titleText;

    var body = slideEl.querySelector(".rv-slide__body");
    if (!body) return;

    // 가로 카드 그리드
    var isGrid = cardGridSubtitles.some(function (t) {
      return matchText.indexOf(t) !== -1;
    });
    if (isGrid) {
      body.querySelectorAll("ul, ol").forEach(function (list) {
        var items = list.querySelectorAll(":scope > li");
        if (items.length >= 2 && items.length <= 4) {
          list.classList.add("rv-card-grid");
          items.forEach(function (li) {
            var s = li.querySelector("strong");
            if (s && s.nextSibling && s.nextSibling.nodeType === 3) {
              s.nextSibling.textContent = s.nextSibling.textContent.replace(/^:\s*/, "");
            }
          });
        }
      });
      return;
    }

    // 세로 스텝 카드
    var isStep = cardStepSubtitles.some(function (t) {
      return matchText.indexOf(t) !== -1;
    });
    if (isStep) {
      body.querySelectorAll("ol").forEach(function (list) {
        var items = list.querySelectorAll(":scope > li");
        if (items.length < 2) return;
        list.classList.add("rv-step-list");
        items.forEach(function (li, i) {
          li.setAttribute("data-step", i + 1);
          var s = li.querySelector("strong");
          if (s && s.nextSibling && s.nextSibling.nodeType === 3) {
            s.nextSibling.textContent = s.nextSibling.textContent.replace(/^:\s*/, "");
          }
        });
      });
    }

    // 체크리스트 변환: "[ ] 텍스트" → 체크박스 아이콘
    body.querySelectorAll("li").forEach(function (li) {
      var first = li.firstChild;
      if (first && first.nodeType === 3 && /^\s*\[ \]/.test(first.textContent)) {
        first.textContent = first.textContent.replace(/^\s*\[ \]\s*/, "");
        var icon = document.createElement("span");
        icon.className = "rv-check-icon";
        li.insertBefore(icon, li.firstChild);
        li.classList.add("rv-check-item");
      }
    });
  }

  /* ── 네비게이션 ── */
  function goTo(index) {
    if (index < 0 || index >= slides.length) return;
    currentIndex = index;
    var slideEl = overlay.querySelector(".rv-slide");

    // 슬라이드 레벨별 클래스 적용
    slideEl.className = "rv-slide";
    var level = slides[currentIndex].level;
    if (level === "title") {
      slideEl.classList.add("rv-slide--title");
    } else if (level === "toc") {
      slideEl.classList.add("rv-slide--toc");
    }

    // 페이드 애니메이션 재트리거
    slideEl.style.animation = "none";
    slideEl.offsetHeight; // reflow
    slideEl.style.animation = "";

    slideEl.innerHTML = renderSlide(slides[currentIndex], currentIndex, slides.length);

    // 짧은 리스트를 카드 그리드로 변환
    applyCardGrid(slideEl);

    // 프로그레스 바
    var progress = overlay.querySelector(".rv-progress");
    if (progress) {
      var pct = slides.length > 1 ? ((currentIndex) / (slides.length - 1)) * 100 : 100;
      progress.style.width = pct + "%";
    }

    // 하단 버튼 상태
    var prevBtn = overlay.querySelector(".rv-bottombar__btn--prev");
    var nextBtn = overlay.querySelector(".rv-bottombar__btn--next");
    if (prevBtn) prevBtn.style.visibility = currentIndex === 0 ? "hidden" : "visible";
    if (nextBtn) nextBtn.style.visibility = currentIndex === slides.length - 1 ? "hidden" : "visible";

    // 하단 카운터
    var counter = overlay.querySelector(".rv-bottombar__counter");
    if (counter) counter.textContent = (currentIndex + 1) + " / " + slides.length;

    // 페이지 점프 바
    renderPagebar();
  }

  function next() {
    goTo(currentIndex + 1);
  }
  function prev() {
    goTo(currentIndex - 1);
  }

  /* ── 키보드 핸들링 ── */
  function onKeyDown(e) {
    if (!isActive) return;
    switch (e.key) {
      case "Escape":
        deactivate();
        break;
      case "ArrowRight":
      case " ":
        e.preventDefault();
        next();
        break;
      case "ArrowLeft":
        e.preventDefault();
        prev();
        break;
      case "f":
        toggleFullscreen();
        break;
    }
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      overlay.requestFullscreen().catch(function () {});
    } else {
      document.exitFullscreen();
    }
  }

  /* ── 활성화 / 비활성화 ── */
  function activate() {
    slides = parseSlides();
    if (slides.length === 0) return;

    if (!overlay) {
      overlay = createOverlay();
    }

    currentIndex = 0;
    goTo(0);
    overlay.classList.add("rv-overlay--active");
    document.body.style.overflow = "hidden";
    isActive = true;
  }

  function deactivate() {
    if (!overlay) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    overlay.classList.remove("rv-overlay--active");
    document.body.style.overflow = "";
    isActive = false;
  }

  /* ── 초기화 ── */
  document.addEventListener("keydown", onKeyDown);

  // 버튼 이벤트 연결 (Material instant navigation 대응)
  function bindButton() {
    var btn = document.getElementById("slide-mode-btn");
    if (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        activate();
      });
    }
  }

  // 초기 로드
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindButton);
  } else {
    bindButton();
  }

  // instant navigation 시 재바인딩
  if (typeof document$ !== "undefined") {
    document$.subscribe(function () {
      // 기존 오버레이 정리
      if (overlay) {
        deactivate();
        overlay.remove();
        overlay = null;
      }
      bindButton();
    });
  }
})();
