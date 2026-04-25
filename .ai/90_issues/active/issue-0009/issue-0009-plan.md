# Issue #9 실행계획 발표 슬라이드 Slidev 마이그레이션 및 GitHub Pages 배포

> 스펙: [issue-0009-spec.md](./issue-0009-spec.md)

---

## Tasks

> AI가 순서대로 실행할 작업 단위를 정의합니다.
> 각 작업은 독립적으로 검증 가능해야 합니다.

### Task 0: 발행 구조·자체 구현 deprecation ADR 작성 (선행)

- [x] 완료
- **목표**: `docs/`(MkDocs Material) SSoT와 `slides/`(Slidev) 파생의 관계, 그리고 자체 구현 슬라이드 모드의 단계적 제거를 ADR로 고정하여 후속 Task의 판단 기준을 만든다.
- **작업 내용**:
  1. ADR-0002 작성 (`docs/` SSoT 유지, `slides/` 파생, 단방향 동기화, 변형 금지 자산은 후행 추출)
  2. ADR-0003 작성 (자체 구현 슬라이드 모드 한계 분석 및 Issue #9 완료 시점 제거 결정)
  3. `.ai/50_adr/index.md`에 ADR-0002·ADR-0003 등록
  4. spec의 "연관 문서"·"범위"·"DoD"에 ADR-0002·ADR-0003 반영
- **완료 기준**:
  - `.ai/50_adr/active/adr-0002-publishing-structure-docs-ssot-slides-derivative.md` 작성 및 인덱스 등록
  - `.ai/50_adr/active/adr-0003-deprecate-self-implemented-slide-mode.md` 작성 및 인덱스 등록

---

### Task 1: Slidev 프로젝트 초기 세팅

- [x] 완료
- **목표**: 레포 내에 Slidev 프로젝트를 추가하고 로컬에서 빈 슬라이드가 정상 렌더링되도록 한다. ADR-0002 결정대로 `slides/` 디렉토리에 둔다.
- **작업 내용**:
  1. `slides/` 디렉토리 생성 (ADR-0002 결정에 따라 위치 고정)
  2. `npm create slidev` 또는 동등 절차로 초기 세팅, package.json·의존성 추가
  3. 테마 후보(`seriph` / `apple-basic`) 비교 후 1개 선정 — 결정 근거를 plan summary 또는 별도 ADR에 짧게 기록
  4. `.gitignore`에 Slidev 빌드 산출물·캐시 경로 추가
- **완료 기준**: 로컬에서 `npx slidev`(또는 정의된 npm script) 실행 시 초기 슬라이드가 렌더링된다.

---

### Task 2: 기존 슬라이드 → Slidev 마크다운 변환

- [ ] 완료
- **목표**: `docs/`(SSoT)의 Why/Who/What/How 흐름을 Slidev 슬라이드로 발표 호흡에 맞춰 재구성한다. ADR-0002의 단방향 동기화 원칙을 준수한다.
- **작업 내용**:
  1. `docs/` 내 발표용 콘텐츠를 식별하고 슬라이드 단위로 분할 계획 수립
  2. Why / Who / What / How 섹션별로 Slidev 슬라이드 작성 (`---` 구분)
  3. Mermaid 다이어그램 이식 — Slidev `mermaid` 코드블록 문법으로 변환. 동일 다이어그램이 `docs/`에도 있으면 Slidev `src:` import로 끌어쓰기 시도(ADR-0002의 "변형 금지 자산" 후행 추출 정책)
  4. 표(table) 레이아웃이 슬라이드 폭에 맞게 보이도록 조정 (필요 시 분할 또는 폰트 축소)
  5. ADR-0001의 "AI 활용 3단계 모델" 메시지가 변형 없이 그대로 전달되는지 검증
  6. 변환 중 발견된 공통 자산(다이어그램·표) 후보를 summary에 기록 → 향후 추출 시 참조
- **완료 기준**: Slidev 슬라이드를 처음부터 끝까지 넘기며 Mermaid·표 깨짐 없이 모든 섹션이 표시되고, ADR-0001 메시지가 docs와 동일하게 전달된다.

---

### Task 3: 디자인 검토 및 수정

- [ ] 완료
- **목표**: 비개발자 청중이 가독성 있게 볼 수 있도록 슬라이드 디자인을 정돈한다.
- **작업 내용**:
  1. 헤딩 위계, 본문 폰트 크기, 여백, 색상 콘트라스트 점검
  2. 강조(카드형 layout) vs 단순 bullet 그룹핑 사용 기준 적용 — admonition 등 시각 구분 활용
  3. 발표 모드에서 노트(speaker notes) 필요 여부 판단 후 추가
- **완료 기준**: 데모용 1회 풀 슬라이드 점검을 통과하고, 가독성 문제로 식별된 항목이 모두 수정된다.

---

### Task 4: GitHub Actions 배포 워크플로우 작성

- [ ] 완료
- **목표**: main push 시 MkDocs와 Slidev 산출물이 함께 GitHub Pages로 배포되도록 한다.
- **작업 내용**:
  1. 기존 MkDocs 워크플로우 검토 후 Slidev 빌드 단계 추가 (병렬 job vs 단일 job 결정)
  2. Slidev `build --base /<repo>/slides/` 옵션으로 base path 지정
  3. MkDocs 산출물(`/`)과 Slidev 산출물(`/slides/`)이 같은 `gh-pages` 브랜치 또는 artifact에 합쳐지도록 구성
  4. 워크플로우 로컬 검증(act 또는 PR 미리보기 브랜치)을 통해 빌드 성공 확인
- **완료 기준**: GitHub Actions 실행 결과가 success이며 `gh-pages` 산출물에 두 결과물이 모두 포함된다.

---

### Task 5: GitHub Pages 배포 확인 및 안내 문서 갱신

- [ ] 완료
- **목표**: 배포된 사이트에서 문서·슬라이드 경로가 모두 정상 동작함을 확인하고 사용 방법·동기화 체크리스트를 안내한다. 이 시점까지 자체 구현 슬라이드 모드는 그대로 유지하여 Slidev 검증의 안전판으로 둔다.
- **작업 내용**:
  1. https://scroogy-dev.github.io/ai-onboarding/ 접속 — 기존 문서 사이트 정상 동작 확인
  2. 슬라이드 경로(예: `/slides/`) 접속 — 슬라이드 정상 렌더링·내비게이션 동작 확인
  3. README 또는 `docs/`에 Slidev 로컬 실행 명령, 슬라이드 URL 안내 추가
  4. ADR-0002의 단방향 동기화 원칙에 맞춘 **`docs/` → `slides/` sync 체크리스트** 작성·게시 (발표 마일스톤 직전 점검 항목)
  5. Slidev 슬라이드의 콘텐츠·내비게이션·디자인이 자체 구현 슬라이드를 충분히 대체하는지 최종 점검 — 통과해야 Task 6 진행
- **완료 기준**: 배포 URL 두 경로에서 콘텐츠가 깨짐 없이 노출되고, 사용자가 README만으로 로컬 실행 절차와 sync 체크리스트를 따라할 수 있으며, Slidev가 자체 구현 대체 가능 판정을 받음.

---

### Task 6: 자체 구현 슬라이드 모드 제거 (ADR-0003)

- [ ] 완료
- **목표**: ADR-0003 결정에 따라 자체 구현 슬라이드 모드를 제거하고, 진입점은 Slidev 슬라이드 URL로 가는 링크로 교체한다. **Task 5의 Slidev 검증 통과 이후에 실행**한다.
- **작업 내용**:
  1. `overrides/main.html`의 "슬라이드 모드" 버튼을 Slidev 슬라이드 URL로 가는 `<a>` 링크로 교체 (라벨·위치는 유지, 동작만 변경)
  2. `mkdocs.yml`에서 `extra_css: assets/css/reveal-override.css`, `extra_javascript: assets/js/reveal-toggle.js` 항목 제거
  3. `docs/assets/js/reveal-toggle.js` 삭제
  4. `docs/assets/css/reveal-override.css` 삭제
  5. `docs/` 본문 검토:
     - `<div class="slide-only" markdown>...</div>` 블록 — 의미 잃음, 삭제
     - `<div class="web-only" markdown>...</div>` 블록 — 래핑 해제, 안의 콘텐츠는 그대로 유지 (Mermaid는 MkDocs Material에서 정상 렌더됨)
  6. 로컬 빌드(`mkdocs serve`)로 페이지 동작 확인 — 콘솔 에러 없음, 콘텐츠 누락 없음, 슬라이드 버튼이 Slidev로 이동
  7. 배포 후 동일 검증
- **완료 기준**:
  - reveal-* 파일·참조가 모두 제거됨
  - "슬라이드 모드" 버튼 클릭 시 Slidev 슬라이드 페이지로 이동
  - `docs/` 본문 모든 섹션이 깨짐 없이 노출, `.slide-only`·`.web-only` 잔존 없음
  - 로컬·배포 양쪽에서 콘솔 에러 없이 정상 동작
