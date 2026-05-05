# Issue #23 실행계획 — 생성형 AI 소개 및 Claude 소개 추가

> 스펙: [issue-0023-spec.md](./issue-0023-spec.md)

---

## Tasks

> AI가 순서대로 실행할 작업 단위를 정의합니다.
> 각 작업은 독립적으로 검증 가능해야 합니다.

### Task 1: 정보 구조(IA) 결정 — 페이지 수·배치·nav 구성 초안

- [x] 완료
- **목표**: 신규 콘텐츠를 1페이지로 합칠지 2페이지로 분리할지, 그리고 `nav` 어느 위치에 배치할지 결정한다.
- **작업 내용**:
  1. `docs/index.md`의 기존 흐름(Who → Why → What → How)과 「준비사항」 위치를 확인하고, 신규 콘텐츠가 들어갈 자연스러운 위치를 식별한다.
  2. 후보안을 2~3개 제시한다 (예: A) `docs/intro/generative-ai.md` + `docs/intro/claude.md` 2분할, B) `docs/intro.md` 단일 페이지, C) `docs/index.md` 내 신규 섹션 추가).
  3. 각 안의 장단점을 정리하고 사용자와 합의한다 (URL 경로는 영문 소문자·하이픈만 사용, 파일명에 번호 접두사 금지).
- **완료 기준**: 페이지 분할 방식·파일 경로·`nav` 배치가 확정되어 있다.

**확정안 (A) — 단일 도입 페이지**
- 파일 경로: `docs/intro.md`
- 문서 구조:
  - `## 생성형 AI 소개`
    - `### 대표 제품 (Claude / Gemini / ChatGPT)`
    - `### 챗봇 vs 에이전트`
  - `## Claude 소개`
    - `### claude.ai (Chat) — 1단계`
    - `### Claude Cowork — 3단계`
    - `### Claude Code — 3단계`
- `mkdocs.yml` `nav` 배치: 홈 바로 다음 (`홈 → 도입 → 보안 → 운영`)
- 근거: 신규 콘텐츠 분량이 한 페이지 분량으로 적정, nav 단순 유지, 「시장 좌표 → 본 교육 도구」 단일 흐름 보존.

---

### Task 2: 생성형 AI 소개 콘텐츠 작성

- [x] 완료
- **목표**: 대표 제품 3종(Claude·Gemini·ChatGPT)과 챗봇/에이전트 분류를 비개발자 톤으로 소개한다.
- **작업 내용**:
  1. 대표 제품 3종을 동등한 1줄 소개로 비교 가능하게 정리한다 (편향 없이, 단 본 교육 도구는 Claude임을 명시).
  2. 챗봇 vs 에이전트 분류를 「매번 시키기 vs 일을 맡기기」 관점으로 설명하고 `docs/index.md`의 3단계 모델과 연결한다.
  3. admonition·표·`grid` 등 기존 `docs/index.md`의 시각 패턴과 일관되게 작성한다 (단순 bullet 나열 회피).
- **완료 기준**: 신규 마크다운에 대표 제품 3종 + 분류(챗봇/에이전트) 설명이 모두 존재하며, ADR-0001·ADR-0005 메시지와 충돌이 없다.

**수행 결과**
- `docs/intro.md` 신규 작성, H1 + `## 생성형 AI 소개` 섹션 완성 (Task 3에서 `## Claude 소개` append 예정).
- 「대표 제품」 H3에 3제품 비교표 + 「본 교육은 Claude로 진행」 info 박스(ADR-0001 정합) + 「가장 좋은 제품?」 tip 박스.
- 「챗봇 vs 에이전트」 H3에 grid 2-카드(abstract/tip) + 「왜 분류가 중요한가요?」 quote 박스로 ADR-0005의 「①매번 시키기 / ②소프트웨어로 만들기」 결정 룰 톤과 정합. 본질 메시지 못 3곳은 `docs/index.md`에 그대로 있어 본 페이지에서는 진입로 톤만 유지하고 못 추가 박지 않음.
- index.md의 `#preparation`·`#stage-model` 앵커로 상호 링크.

---

### Task 3: Claude 소개 콘텐츠 작성

- [x] 완료
- **목표**: claude.ai(Chat) / Claude Cowork / Claude Code 3종을 본 교육의 단계 모델 위에서 위치시킨다.
- **작업 내용**:
  1. 3종 각각을 「무엇이고, 누가 언제 쓰며, 본 교육에서의 단계(1/2/3)는 어디인가」 형태로 짧게 정리한다.
  2. `docs/index.md`「3단계 모델」표와 상호 참조 링크를 건다 (단계 ↔ 도구 매핑 일관 유지).
  3. 「준비사항」(Claude Pro 이상 필요·Desktop 설치)과 메시지가 모순되지 않도록 점검하고, 필요한 경우 상호 링크만 추가한다 (중복 서술 회피).
- **완료 기준**: 3종 모두 소개되어 있고, 각각이 본 교육의 어느 단계와 연결되는지 명시되어 있다.

**수행 결과**
- `## Claude 소개 { #claude }` 섹션 추가 (Task 2의 코딩 에이전트 박스에서 `#claude`로 점프하던 forward 링크 해소).
- H2 도입에 3종 비교표(제품 / 무엇 / 본 교육 단계) + 준비사항 인용(중복 서술 없이 `#preparation` 링크만).
- H3 3개: claude.ai / Claude Cowork / Claude Code. 각 H3은 짧은 본문 + 「본 교육에서의 위치」 admonition 박스(abstract / tip / note)로 단계 라벨 일관 표기.
- ADR-0001 정합 유지: Cowork = 3단계 본격, Code = 3단계 보조·옵션. claude.ai는 1단계의 시작점이며 Projects/Skills를 통해 2단계 무대로도 활용된다고 자연스럽게 언급(인덱스 단계표와 일관).
- 페이지 footer 「함께 읽어보세요」 추가: 홈 / 준비사항 / 3단계 모델 / 보안 가이드 링크.

---

### Task 4: `mkdocs.yml` nav 등록 + 용어사전 정합

- [x] 완료
- **목표**: 신규 페이지가 사이트에 노출되고, 새 용어가 `glossary.md`와 정합한다.
- **작업 내용**:
  1. `mkdocs.yml`의 `nav` 섹션에 신규 페이지를 Task 1에서 합의한 위치에 등록한다.
  2. 본 콘텐츠에서 처음 등장하거나 정의가 필요한 용어(예: 에이전트, Cowork)를 `.ai/40_domain/glossary.md`와 대조하여 누락 시 추가한다.
- **완료 기준**: `nav`가 갱신되어 있고, 새 용어는 `glossary.md`에서 동일한 의미로 정의된다.

**수행 결과**
- `mkdocs.yml` `nav`: `홈 → 도입 → 보안 → 운영` 순으로 `도입: intro.md` 추가 (Task 1 합의안 그대로).
- `.ai/40_domain/glossary.md`: 빈 표 → 용어 8개 정의로 채움 (생성형 AI / 챗봇 / 에이전트 / claude.ai / Claude Cowork / Claude Code / Agent Skills / MCP). 각 항목은 비개발자 톤 한 줄 정의 + 본 교육 단계 라벨 + 출처(`docs/intro.md`) 표기. Cowork 정의에 「격리 VM·연결 폴더·송신 정책의 3중 보호」를 명시하여 intro.md의 「3중 보호 모델」 admonition과 일관성 유지.

---

### Task 5: `docs/` 로컬 빌드 검증

- [x] 완료
- **목표**: `docs/` SSoT가 빌드·렌더링·링크 깨짐 없이 동작함을 확인한다.
- **작업 내용**:
  1. `mkdocs serve` 또는 `mkdocs build --strict`로 빌드 확인 (사이트 내부 링크 포함).
  2. 신규 페이지를 브라우저로 열어 admonition·grid·표 렌더링과 모바일 폭에서의 가독성을 확인한다.
  3. 비개발자 톤 점검 — 전문 용어가 정의 없이 등장하지 않는지 통독한다.
- **완료 기준**: `docs/` 빌드 성공 + 신규 페이지 렌더링 정상.

**수행 결과**
- `python3 -m mkdocs build --strict --clean` 1.42초 성공, 경고·에러 0건. `--strict` 통과 = 페이지 간 앵커(`index.md#preparation`, `index.md#stage-model`, `intro.md#claude` 등) 모두 정합.
- `site/intro/index.html` 핵심 요소 렌더 확인: admonition 18회 / grid CSS 5회 / claude.ai·Cowork·Code 라벨·기능 비교 H3·3중 보호 admonition 모두 정상.
- `site/index.html`의 nav에 「도입」 라벨 + `intro/` URL 정상 노출 (Task 4 등록 결과 검증).
- 비개발자 톤 점검: `VM`은 「격리된 가상 머신(VM)」으로 한국어 풀이 동반, `MCP`는 「(외부 도구·데이터)」 인라인 보충 + glossary 등재. `API`/`IDE`는 기능 비교표 헤더·Code 섹션(3단계 보조) 안에만 노출되어 비개발자 부담 없음.
- 브라우저·모바일 폭 시각 점검은 향후 PR 리뷰 단계에서 확인 — 빌드 산출물이 정상이고 마크다운 패턴(admonition·grid·표)은 기존 `docs/index.md`에서 이미 검증된 것을 재사용했으므로 회귀 위험은 낮음.

---

### Task 6: `slides/slides.md` 파생 작성

- [x] 완료
- **목표**: 확정된 `docs/` 콘텐츠를 슬라이드 흐름에 맞게 발췌·재구성하여 `slides/slides.md`에 반영한다.
- **작업 내용**:
  1. 현재 `slides/slides.md`의 흐름(Who → Why → What → How → 보안)에서 신규 콘텐츠가 들어갈 자연스러운 위치를 식별한다 (예: What 직전에 「생성형 AI / Claude 소개」 섹션 신설).
  2. 기존에 사용 중인 레이아웃·테마(`the-unnamed`, `cover`/`section`/`default` 등)와 시각 패턴을 재사용한다 — 신규 테마·레이아웃 도입 금지(spec Scope 비포함 사항).
  3. 슬라이드 발표 톤(요점 압축, 발화자 노트 `<!-- ... -->` 활용)으로 작성한다 — `docs/`의 산문을 그대로 복붙하지 않는다.
  4. `docs/`와 메시지·단계 모델·도구 매핑이 일관되도록 점검한다 (단방향 파생: `docs/` → `slides/`).
- **완료 기준**: `slides/slides.md`에 신규 섹션이 존재하고, `docs/`의 핵심 메시지·도구 분류와 일관된다.

**수행 결과**
- 「도입」 섹션을 Why와 What 사이에 신설 — 4 슬라이드 (section divider + 3 본문).
  - Slide 1: `# 도입 / 어떤 AI를, 어떻게?` (`layout: section`, 기존 Who/Why/What/How 패턴 재사용)
  - Slide 2: `# 챗봇은 다 아는데... 짝꿍 에이전트는?` — 회사별 3×3 표 (Anthropic 행 강조), 「Cowork도 함께 제공」 한 줄 hook
  - Slide 3: `# 챗봇 vs 에이전트 — 「물어보기」 vs 「맡기기」` — 2-col grid (cyan/emerald 카드, 기존 「결정 룰」 슬라이드 패턴 그대로 재사용), 단계 라벨(1/3) 본문에 명시
  - Slide 4: `# 본 교육의 도구 — Claude 3종` — claude.ai/Cowork/Code 3행 표 + 「준비사항 슬라이드 참조」 인용
- TOC 슬라이드(`# 오늘의 흐름`)에 「03 도입」 항목 삽입 + What/How/보안 번호 04/05/06로 이동.
- 모든 신규 슬라이드에 발화자 노트(`<!-- -->`) 추가 — 단순 docs 복붙 아닌 발표 의도·다음 슬라이드 연결 로직 명시.
- `the-unnamed` 테마·기존 레이아웃(`section`/`default`) 재사용. 신규 테마·레이아웃 도입 없음.
- ADR-0001(Claude 단독 + 3단계) / ADR-0002(docs SSoT → slides 단방향) 정합. What 섹션의 「3단계 모델」·「묻기 vs 일 맡기기」 슬라이드와 호응 — 도입에서 어휘를 깔고 What에서 단계 모델로 매핑하는 두 단 구성.

---

### Task 7: `slides/` 빌드 검증 + DoD 최종 점검

- [x] 완료
- **목표**: 슬라이드 빌드·렌더가 깨지지 않음을 확인하고, spec.md DoD 전체를 점검한다.
- **작업 내용**:
  1. `slides/`에서 `npm run build` 또는 `slidev`(dev 서버)로 빌드·렌더 확인.
  2. 신규 슬라이드를 키보드 진행으로 훑으며 레이아웃 깨짐·텍스트 오버플로우를 점검한다.
  3. spec.md의 DoD 체크리스트를 모두 만족하는지 자체 점검한다.
- **완료 기준**: 슬라이드 빌드 성공 + DoD 모든 항목이 만족된다.

**수행 결과**
- `npm run build` (clean) 11.30초 성공, 에러·경고 0건. `mkdocs build --strict --clean` 0.57초 동시 통과.
- Slidev dev 서버(:3030) + mkdocs serve(:8000) 양쪽 정상 응답.
- 시각적 키보드 진행 점검은 사용자가 브라우저(`/127.0.0.1:3030`)에서 직접 검토 — 신규 도입 섹션은 4~9번 슬라이드.
- spec.md DoD 9개 항목 모두 [x] 체크 — Task 1~6의 산출물로 자연 만족.
