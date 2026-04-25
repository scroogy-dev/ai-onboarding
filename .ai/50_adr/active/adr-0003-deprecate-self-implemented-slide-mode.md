# ADR-0003: 자체 구현 슬라이드 모드(`reveal-toggle.js`) 단계적 제거 및 Slidev로 대체

- **상태**: Accepted
- **결정일**: 2026-04-25
- **연관 이슈**: [Issue #9](https://github.com/scroogy-dev/ai-onboarding/issues/9)
- **연관 ADR**: [ADR-0002](adr-0002-publishing-structure-docs-ssot-slides-derivative.md) — 콘텐츠 발행 구조
- **영향 범위**: `docs/assets/js/reveal-toggle.js`, `docs/assets/css/reveal-override.css`, `overrides/main.html`, `mkdocs.yml`의 `extra_css`·`extra_javascript`, `docs/` 내 `.web-only`·`.slide-only` 사용처

---

## 배경 (Context)

현재 본 사이트는 MkDocs Material 위에 **자체 구현 슬라이드 모드**를 운영 중이다. 파일명에 `reveal`이 들어가지만 실제 reveal.js 라이브러리는 사용하지 않으며, 영감만 받은 vanilla JavaScript·CSS 자체 구현이다.

### 현 구현 구성

| 파일 | 줄 수 | 역할 |
|------|------|------|
| `docs/assets/js/reveal-toggle.js` | ~407줄 | 슬라이드 모드 활성화·DOM 파싱·렌더링·네비게이션 |
| `docs/assets/css/reveal-override.css` | ~602줄 | 다크 오버레이·카드 그리드·스텝 카드·타이포그래피 |
| `overrides/main.html` | ~14줄 | 우측 상단 "슬라이드 모드" 버튼 삽입 |

### 작동 방식

1. MkDocs가 렌더한 HTML을 DOM에서 그대로 받음
2. `<h1>`/`<h2>`/`<h3>` 단위로 자동 분할 (h1=타이틀, h2=섹션, h3=서브섹션)
3. h2 제목 모음으로 목차 슬라이드 자동 생성
4. 분할된 슬라이드를 풀스크린 오버레이 div에 다시 렌더링
5. 특정 subtitle 문자열 매칭(`cardGridSubtitles`, `cardStepSubtitles` 배열에 하드코딩)으로 카드 그리드·스텝 카드 자동 변환
6. `.web-only` / `.slide-only` 클래스로 매체별 이중 표현 (예: Mermaid는 web에서, fallback 리스트는 슬라이드에서)

### 잘 챙겨둔 디테일

- 키보드 단축키 (← → Space ESC F)
- 프로그레스 바 + 페이지 점프 dot 바 + `현재/전체` 카운터
- 페이드 인 애니메이션
- Material **instant navigation** 대응 (재바인딩 처리)
- 다크 베이스 + indigo 그라디언트로 일관된 비주얼

---

## 자체 구현의 천장 (Limits)

다음 9가지 한계가 식별되었다. 모두 **자체 구현 모델 자체의 한계**이며, 해당 코드 품질의 문제가 아니다.

1. **레이아웃이 단 한 종류** — 모든 슬라이드가 "제목 헤더 + 본문" 동일 구조. cover, two-column, image-right, full-image, quote 단독 등 발표 슬라이드의 핵심 무기인 레이아웃 다양성이 표현 불가능.

2. **Progressive disclosure 부재** — 한 슬라이드 콘텐츠가 한 번에 모두 노출됨. 청중이 발표자 설명보다 먼저 다 읽고 집중을 잃는 가장 흔한 원인.

3. **카드 변환 규칙이 JS에 하드코딩** — `cardGridSubtitles = ["소프트웨어가 만드는 가치"]` 등 subtitle 문자열로 매칭. 콘텐츠 추가·수정·리네임 시 JS 코드도 함께 손대야 함. **콘텐츠와 표현이 결합**된 상태.

4. **슬라이드 호흡을 의도적으로 끊을 수 없음** — h2/h3 단위 기계적 분할이라 "여기서 끊고 싶다"는 의도가 들어갈 자리가 없음. 한 h2 아래 콘텐츠가 너무 많으면 한 슬라이드에 쏟아지고, 너무 적으면 빈 슬라이드.

5. **Speaker notes 미지원** — 발표자가 화면 외에 볼 수 있는 노트 영역 없음. 발표자가 화면을 외워야 함.

6. **시각 자산이 제한적** — 큰 이미지·아이콘·일러스트 배치 어려움, 배경 이미지·그라디언트 오버레이 없음, 데이터 시각화는 정적 Mermaid에 의존하여 발표 임팩트 약함.

7. **PDF export 표준 경로 없음** — 브라우저 인쇄로는 가능하나 레이아웃 보장 안 됨. 발표 자료 사후 공유 시 마찰.

8. **네이밍 혼란 위험** — `rv-` prefix와 `reveal-` 파일명이 있지만 reveal.js를 실제로 사용하지 않음. 향후 reveal.js 도입이나 신규 인원 합류 시 혼란 가능.

9. **Material 내부 selector 의존** — `article.md-content__inner` 등 Material 내부 DOM 구조에 의존. Material 버전 업그레이드 시 깨질 가능성 있음.

---

## 결정 (Decision)

1. **ADR-0002의 결정에 따라 Slidev를 발표 표면의 표준 도구로 채택**한다. 본 ADR은 ADR-0002의 후속 조치로서 자체 구현 제거를 명시한다.

2. **자체 구현 슬라이드 모드는 Issue #9 완료 시점에 제거**한다.
   - `docs/assets/js/reveal-toggle.js` 삭제
   - `docs/assets/css/reveal-override.css` 삭제
   - `mkdocs.yml`의 `extra_css` / `extra_javascript`에서 reveal-* 참조 제거

3. **`overrides/main.html`의 "슬라이드 모드" 버튼은 Slidev 슬라이드 URL로 가는 링크로 대체**한다. 사용자 진입점은 유지하되, 클릭 시 동작이 오버레이 활성화에서 Slidev 페이지 이동으로 바뀐다.

4. **`docs/` 본문의 `.web-only` / `.slide-only` 이중 표현 패턴은 정리**한다.
   - `.slide-only` 블록은 자체 구현 제거와 함께 의미를 잃으므로 삭제
   - Mermaid 다이어그램은 `.web-only` 래핑 없이 직접 노출 (MkDocs Material에서 정상 렌더됨)
   - Slidev 측에서는 자기 슬라이드 호흡에 맞춰 별도 표현

5. **제거 시점은 Slidev 배포가 검증된 이후**로 한다. 즉 자체 구현 제거 Task는 본 이슈의 마지막 단계이며, Slidev가 GitHub Pages에서 정상 동작함이 확인된 다음에 실행한다.

---

## 고려한 대안 (Alternatives considered)

### 대안 A. 자체 구현을 점진 개선

- **내용**:
  - 카드 변환 규칙을 JS 하드코딩에서 마크다운 `attr_list`로 외부화 (`{: .card-grid }`)
  - 레이아웃 hint를 자체 admonition 타입으로 표현 (`!!! slide-cover` 등)
  - HTML 주석을 speaker notes로 활용 (`<!-- notes: ... -->`)
  - `{: .reveal-step }` 클래스로 progressive disclosure 추가
  - `reveal-` → `slide-` 네이밍 정리
- **장점**:
  - 마이그레이션 비용 없음, 콘텐츠 SSoT 단일 유지
  - 즉시 적용 가능한 저비용 개선들로 디자인 격차의 30~50% 메울 수 있음
- **단점**:
  - 천장 9가지 중 절반 정도만 메울 수 있음 (레이아웃 다양성·PDF export·Material selector 의존성 등은 본질적 한계)
  - 약 1000줄의 자체 코드 유지보수 부담 지속
  - Material 버전업 취약성 그대로
  - 결국 "준 Slidev 같은 것"을 자체 구현으로 만드는 길이 됨
- **기각 사유**: 디자인 천장이 명확하고, ADR-0002에서 이미 발표 표면을 별도 디렉토리·도구로 운영하기로 결정했으므로 자체 구현을 유지할 명분이 약하다. 점진 개선의 비용이 누적되면 Slidev 도입 비용을 곧 따라잡는다.

### 대안 B. 자체 구현과 Slidev 공존

- **내용**: `docs/`에는 자체 구현 슬라이드 모드를 그대로 두고, `slides/`에는 Slidev를 별도로 운영하여 두 가지 슬라이드 경험을 모두 제공.
- **장점**: 사용자가 선호하는 경험 선택 가능.
- **단점**:
  - 발표 표면이 두 갈래가 되어 메시지 정합성 검증 비용 증가
  - 자체 구현 유지보수 부담 그대로
  - "어느 쪽이 표준인가"가 불명확하여 운영 혼란
- **기각 사유**: ADR-0002의 단일 발표 표면 원칙과 충돌. 두 표면을 동시에 유지할 콘텐츠 운영 자원이 부족.

---

## 결과 (Consequences)

### 긍정적 영향

- **발표 디자인 자유도 큰 폭 상승** — 레이아웃 다양성, progressive disclosure, speaker notes, PDF export 등 자체 구현으로는 메우기 어려웠던 기능들이 Slidev에서 기본 제공.
- **유지보수 면적 감소** — 약 1000줄의 자체 JS·CSS 제거로 코드 베이스 단순화, Material 내부 selector 의존성 해소.
- **네이밍 혼란 제거** — `reveal-*` prefix가 사라지면서 미래 인원 진입 시 혼동 요소 제거.
- **콘텐츠와 표현 분리** — 카드 변환 같은 표현 규칙이 JS 하드코딩에서 Slidev의 마크다운·layout 메타데이터로 이동하여 콘텐츠 운영자가 코드를 손대지 않아도 됨.

### 부정적 영향·리스크

- **Issue #9 범위 확장** — 자체 구현 제거 Task가 추가되어 작업량 증가.
    - *완화*: 마지막 Task로 위치시켜 Slidev 검증 후 안전하게 제거.
- **사용자 워크플로우 변경** — 기존 "슬라이드 모드" 버튼 클릭이 오버레이 활성화에서 페이지 이동으로 바뀜.
    - *완화*: 동일 위치·동일 라벨의 버튼을 유지하되 동작만 교체. README에도 새 진입점 안내.
- **`.slide-only` 콘텐츠 손실 가능성** — `docs/index.md`에 슬라이드 전용으로 작성된 fallback 리스트 등이 있을 수 있음 (예: Mermaid 대체 텍스트 리스트).
    - *완화*: 제거 작업 시 `.slide-only` 사용처를 모두 검토하여 손실 콘텐츠가 없는지 확인. Mermaid는 MkDocs Material에서 그대로 렌더되므로 fallback이 필요 없다.

### 후속 조치

- Issue #9 plan에 자체 구현 제거 Task(Task 6 "자체 구현 슬라이드 모드 제거") 신설.
- Issue #9 spec의 범위·DoD에 자체 구현 제거 항목 명시.
- Slidev 배포 검증 완료 후 Task 6 실행.
- README·`docs/` 안내에서 "슬라이드 모드" 진입점 설명을 Slidev 링크 기준으로 갱신.
