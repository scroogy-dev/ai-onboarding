# Issue #9 실행요약 발표 슬라이드 Slidev 마이그레이션 및 GitHub Pages 배포

> 스펙: [issue-0009-spec.md](./issue-0009-spec.md) | 계획: [issue-0009-plan.md](./issue-0009-plan.md)

## 다음 작업

> ▶️ 다음 작업: Task 6 — 자체 구현 슬라이드 모드 제거 (ADR-0003)

---

## Task별 수행 결과

### Task 0: 발행 구조·자체 구현 deprecation ADR 작성 (선행)

- **결과**: 완료
- **수행 내용 요약**:
  - **ADR-0002** 작성 (`docs/` SSoT 유지, `slides/` 파생, 단방향 동기화, 변형 금지 자산은 후행 추출)
  - **ADR-0003** 작성 (자체 구현 슬라이드 모드 한계 9가지 분석 후 Issue #9 완료 시점에 제거 결정)
  - `.ai/50_adr/index.md`에 ADR-0002·ADR-0003 등록
  - spec의 "연관 문서"·"범위 In"·"DoD"에 두 ADR 반영, 자체 구현 제거 항목 명시
- **특이 사항**:
  - ADR-0002 기각 대안: A(순수 md `source/` SSoT + 두 파생), B(slides SSoT 승격), C(자동 빌드 파이프라인). 향후 1인 운영을 벗어나거나 표면이 추가되면 대안 C 재평가 가치 있음.
  - ADR-0003 기각 대안: A(자체 구현 점진 개선 — 천장의 절반만 메울 수 있고 누적 비용으로 결국 Slidev 비용 따라잡음), B(자체 구현·Slidev 공존 — 단일 발표 표면 원칙 위배).
  - 자체 구현 제거(Task 6)는 Slidev 검증(Task 5) 통과 후에만 실행하도록 plan에 순서 고정.

---

### Task 1: Slidev 프로젝트 초기 세팅

- **결과**: 완료
- **수행 내용 요약**:
  - `slides/` 디렉토리 생성, `package.json`(`@slidev/cli` ^52.14.2, `@slidev/theme-seriph` ^0.25.0, `vue` ^3.5.0) 추가
  - `slides/slides.md` 초기 스캐폴드 작성 — cover / statement / 다음 단계 3슬라이드, ADR-0002 명시
  - `.gitignore`에 `slides/node_modules/`, `slides/dist/`, `slides/.slidev/` 추가
  - `npm install` 후 `npx slidev build` 성공 (5.44s, dist/ 생성) — 로컬 렌더링 확인
- **특이 사항**:
  - **테마 선정 — `seriph`**: Slidev 공식 기본 테마, 가장 활발한 유지보수, 빌트인 레이아웃(cover, two-cols, statement, quote, fact 등)이 풍부. 후속 Task 2(콘텐츠 이식)·Task 3(디자인)에서 옵션이 더 많음. 한국어 Noto Serif와 매칭이 자연스러워 교육 콘텐츠 톤에 적합. 기각: `apple-basic`(레이아웃·예제 적음, 후속 작업 비용 큼).
  - `npm install` 시 moderate 취약점 8건 보고 — Slidev 의존성 트리 내부 문제로 별도 대응은 추후 판단(현 시점 기능 영향 없음).
  - 초기 슬라이드 콘텐츠는 placeholder 수준 — 실제 Why/Who/What/How 이식은 Task 2에서 진행.

---

### Task 2: 기존 슬라이드 → Slidev 마크다운 변환

- **결과**: 완료
- **수행 내용 요약**:
  - `docs/index.md` SSoT의 Why/Who/What/How 흐름을 22슬라이드로 분할 (Cover · Section×4 · 콘텐츠 슬라이드 14 · Statement 2 · End)
  - mermaid 다이어그램 2개 이식: `AI 활용 3단계 모델`(ADR-0001 핵심)·`계획→실행 4단계` — `docs/`와 **완전히 동일한 구문** 유지(메시지 변형 금지)
  - 표는 셀 내 `<br/>`로 줄바꿈 정리, 4컬럼 3단계 표는 본 교육 컬럼 텍스트 단축으로 폭 맞춤
  - admonition 패턴은 Slidev에 직접 대응이 없어, 강조 박스 2개(학생 트랙 안내·Claude Pro 필수)는 `border-l-4` UnoCSS 컬러 박스로 시각 구분, 일반 안내는 blockquote(`>`)로 통일
  - `npx slidev build` 성공 (10.94s, 590 modules, 경고/오류 0)
- **특이 사항**:
  - **공통 자산(추후 추출 후보, ADR-0002 후행 추출 정책)**:
    1. 3단계 모델 mermaid — `docs/index.md` L52-61 ↔ `slides/slides.md` 동일 구문 (변형 금지 자산 — 향후 Slidev `src:` import 1순위)
    2. 계획→실행 4단계 mermaid — `docs/index.md` L145-153 ↔ slides 동일 구문 (변형 금지 자산 — 추출 후보)
    3. 3단계 비교 테이블 (4컬럼) — slides에서는 "본 교육에서" 컬럼 문구 단축, 향후 통일 시 추출 검토
  - admonition 등가물 부재가 디자인 부담을 키움 — Task 3에서 일관된 강조 컴포넌트(또는 layout) 정리 필요
  - 시각적 검증(가독성·여백·색상)은 Task 3에서 수행 — 본 Task는 콘텐츠 이식·구조 정합성에 집중

---

### Task 3: 디자인 검토 및 수정

- **결과**: 완료
- **수행 내용 요약**:
  - `playwright-chromium` devDependency 추가 → `slidev export --format png`으로 22슬라이드 PNG 추출하여 1회 풀 점검
  - **수정 1 — Slide 10 (3단계 상세 표) 단어 중간 줄바꿈 해소**: 4컬럼 표가 폭에 비해 텍스트가 빽빽해 "본 교육에/서", "2단계 실/습", "재활/용", "운/영", "기/초" 등이 발생. 단계 컬럼·도구 컬럼은 `<br/>`로 의도적 줄바꿈, 핵심 단어는 `&nbsp;`로 결합, 슬라이드 단위 `<style>`로 `font-size: 0.85em` 적용 → 모든 셀이 의도된 줄에서만 바뀜
  - **수정 2 — Slide 15 (교육 목표) 시각 위계 역전 해소**: `layout: statement`에서 H1 "교육 목표" + 본문 굵은 글씨로 출력했더니 가장 중요한 한 줄("1개라도 실제로...")이 부제처럼 작게 나옴. `layout: center`로 변경, "교육 목표"는 작은 라벨, 핵심 문장을 H1로 승격, 보조 문장은 opacity-75 보강 → 핵심이 가장 큰 폰트로 정렬
  - **수정 3 — 스피커 노트 4건 추가**: Cover(청중 호명·1단계 통과 가정 환기), Slide 9(3단계 모델·자가 평가 유도), Slide 15(목표 1개 약속 강조), Slide 22(Q&A 안내) — 발표 모드 노트로 작동
  - **유지 판정** — orange/red 강조 박스(학생 트랙·Claude Pro 필수), 2컬럼 grid(사전지식·준비물), 모든 mermaid 다이어그램·블록쿼트 패턴은 가독성 양호, 변경 없음
  - 재export(22 PNG)로 모든 수정 결과 시각 검증 통과
  - `slides/review/` 임시 디렉토리는 `.gitignore`에 추가하여 추적 제외
- **특이 사항**:
  - seriph 테마의 `statement` 레이아웃은 H1 외 본문이 부제처럼 작아짐 — 핵심 문장을 강조하려면 `layout: center`로 우회하는 것이 직관적이라는 점 확인
  - 4컬럼 dense 표는 슬라이드에서 본질적으로 어려운 패턴 — 향후 비슷한 표가 더 추가되면 카드 3개로 분해하는 옵션을 ADR-0002 후행 추출 정책과 함께 고려
  - admonition 등가물 부재라는 Task 2 특이 사항은 본 Task에서 강조 박스(border-l-4) + blockquote의 2단 패턴으로 충분히 정리되었다고 판단 — 별도 조치 불필요

---

### Task 4: GitHub Actions 배포 워크플로우 작성

- **결과**: 완료
- **수행 내용 요약**:
  - `.github/workflows/deploy.yml`을 단일 job 순차 실행으로 재작성: MkDocs 빌드(`site/`) → Slidev 빌드(`site/slides/`) → `peaceiris/actions-gh-pages@v4`로 `gh-pages` 브랜치에 합본 배포
  - Slidev base path는 `/ai-onboarding/slides/`로 지정 (`slidev build --base /ai-onboarding/slides/ --out ../site/slides`)
  - Node.js 20 + `npm ci` + `slides/package-lock.json` 캐시 적용
  - MkDocs는 `--strict` 플래그로 변경 (경고를 빌드 실패로 승격 — 향후 회귀 방지)
  - 로컬 검증: `mkdocs build --strict` 1.43초 통과, `npx slidev build --base ...` 11.41초 통과, `site/index.html`(MkDocs)·`site/slides/index.html`(Slidev) 공존, Slidev `index.html` asset 경로가 `/ai-onboarding/slides/assets/...`로 올바르게 prefix됨
- **특이 사항**:
  - **단일 job 순차 선택 근거**: ADR-0002의 단방향(`docs/`→`slides/`) 구조에서 두 빌드는 각 1.4–11초로 작아 병렬화 이득이 미미함. 합본 단계가 단순(같은 `site/` 디렉토리에 누적)해지고, 한쪽 실패 시 둘 다 배포되지 않는 안전판 효과도 큼 (1인 운영 규모에서 적합).
  - **`mkdocs gh-deploy → peaceiris/actions-gh-pages` 전환**: `gh-deploy`는 `site/`만 commit·push해서 Slidev 합본 배포가 어려움. 직접 `mkdocs build`로 산출물만 만들고 별도 액션으로 푸시하는 패턴이 두 산출물 합본에 더 단순함. `gh-pages` 브랜치 운영 방식은 그대로 유지되어 GitHub 저장소 Pages 설정 변경 불필요.
  - **`--strict` 도입**: 기존엔 `mkdocs gh-deploy --force`만 사용해 빌드 경고가 무시됐음. 빌드 단계가 분리된 김에 `--strict`를 켜서 누락 링크·잘못된 nav 등을 CI에서 잡도록 함.
  - 실제 Pages 배포 검증은 main 머지 후에만 가능 → Task 5에서 수행.

---

### Task 5: GitHub Pages 배포 확인 및 안내 문서 갱신

- **결과**: 완료
- **수행 내용 요약**:
  - **README.md 전면 확장** — 기존 3줄짜리 안내를 다음 6개 섹션으로 재작성:
    1. 발행 채널 표 (문서·슬라이드 URL, 빌더, 소스)
    2. 로컬 실행 (MkDocs `mkdocs serve`, Slidev `npm run dev`)
    3. 배포 (main push → CI 합본 배포 안내)
    4. **발표 직전 sync 체크리스트** — ADR-0002 단방향 원칙에 따른 7개 점검 항목
    5. 디렉토리 구조
    6. AI 컨텍스트 진입점 안내 (`.ai/AI-CONTEXT.md`)
  - sync 체크리스트는 별도 운영 문서 신설 대신 README에 인라인으로 게시 — 발표자가 단일 진입점에서 바로 따라할 수 있고, 콘텐츠 양이 적어 분리 비용이 이득보다 큼
  - sync 체크리스트 항목은 Task 2 변환·Task 3 디자인에서 식별한 "변형 금지 자산"(ADR-0001 3단계 모델 메시지·mermaid 2종·3단계 비교 표)을 직접 점검하도록 구성
  - ADR-0001·ADR-0002 링크를 README에서 직접 연결해 "왜 이 원칙인지"를 한 번의 클릭으로 추적 가능하게 함
- **특이 사항**:
  - sync 체크리스트의 위치 결정: `docs/`는 교육 콘텐츠 SSoT라 운영 문서가 들어갈 자리가 아니고, 별도 디렉토리(`.ai/40_domain/policies/local/`) 신설은 1인 운영 규모에서 과함. README가 진입점·운영문서 양쪽 역할을 하도록 통합. 향후 발표 운영자가 늘거나 체크리스트가 길어지면 별도 파일로 분리 검토 (ADR-0002의 후행 추출 정책과 동일 원리).
  - **머지 후 배포 검증 결과** (PR #10, run #24930295123 success / 1분 3초):
    - 5-1 문서 사이트(`/`) — HTTP 200, `<title>AI 활용 교육</title>` 확인
    - 5-2 슬라이드 사이트(`/slides/`) — HTTP 200, `<title>AI 활용 온보딩 - Slidev</title>` 확인, asset 경로가 `/ai-onboarding/slides/assets/...`로 정상 prefix, 사용자 시각 점검에서도 동작 양호 판정
    - 5-5 자체 구현 대체 가능 판정 — 통과 (콘텐츠 변형 없음·동작 양호). 단, 디자인/콘텐츠 보강 여지는 spec의 Out에 해당하므로 별도 이슈로 분리하기로 결정
  - **후속 이슈 후보 메모**: `.ai/99_workspace/notes/issue-0009-followups.md` — (1) 슬라이드 테마 재검토, (2) "보안 및 개인정보 가이드" 슬라이드 추가. 두 항목 모두 본 이슈 spec의 Out("슬라이드 콘텐츠 자체의 신규 작성")에 해당하여 새 이슈로 분리 예정.

---

### Task 6: 자체 구현 슬라이드 모드 제거 (ADR-0003)

- **결과**:
- **수행 내용 요약**:
- **특이 사항**:
