# ADR-0009: docs·slides 통합 UI 테마 — Claude 스타일(라이트) 채택

- **상태**: Accepted
- **결정일**: 2026-06-04
- **연관 이슈**: [Issue #44](https://github.com/scroogy-dev/ai-onboarding/issues/44)
- **연관 ADR**: [ADR-0002](adr-0002-publishing-structure-docs-ssot-slides-derivative.md) — 발행 구조(docs SSoT / slides 파생). "변형 금지 자산은 메시지·구조 보호이며 색·여백은 매체 적응 가능"이라는 해석을 승계
- **대체 대상**: [ADR-0004](../superseded/adr-0004-slides-theme-the-unnamed.md) — 발표 슬라이드 the-unnamed 다크 테마
- **영향 범위**: `mkdocs.yml`, `docs/assets/css/claude-theme.css`(신규), `slides/slides.md`, `slides/style.css`, `slides/setup/mermaid.ts`, `slides/package.json`(+lock)

---

## 배경 (Context)

두 발행 표면의 톤이 어긋나 있었다. docs는 Material 기본 `indigo`(제너릭, 정체성 약함), slides는 ADR-0004의 `the-unnamed` 다크 톤. 같은 교육 자료인데 표면마다 첫인상이 달라 일관성이 약했다.

Issue #44에서 두 표면을 하나의 스타일로 통일하기로 했고, 후보는 **Claude 스타일**과 **GitHub 스타일**이었다. 사용자 확인으로 **Claude 스타일**(따뜻한 아이보리 + 코랄 액센트, 라이트 기본)을 채택했다.

**Claude 선택 근거:**
1. 본 자료의 주제가 'Claude 활용 교육'이라 주제와 톤이 정합한다.
2. 따뜻·친근한 톤이 비개발자 청중과의 거리감을 줄인다.
3. 작성자(개발자)의 톤을 유지하되, 과한 네온·제너릭 인디고를 피한다.

**ADR-0004(다크) 뒤집기:** ADR-0004는 "자신감 있는 개발자 톤 + 코드 블록 시각 품질"을 위해 다크 `the-unnamed`를 택했다. Issue #44는 **표면 간 톤 통일**과 **Claude 주제 정합**을 더 우선해 라이트 Claude 톤으로 전환한다. 코드 블록 시각 품질은 라이트 shiki(`vitesse-light`) + Claude 톤 코드 카드로 대체한다.

---

## 결정 (Decision)

### 1. 공통 디자인 토큰 (Claude 스타일)

- **색**: 배경 아이보리 `#FAF9F5`(보조 `#F0EEE6`), 제목 잉크 `#1F1E1D`·본문 `#3D3A34`, 액센트 코랄 `#D97757`(hover `#BD5D3A`), 인라인 코드 터라코타 `#B85C38`, 경계선 `#E3E0D6`. 다크 대응값은 `claude-theme.css`/`style.css` 참조.
- **폰트**: 제목·본문 `Inter` + `Noto Sans KR`(sans 통일, 한국어 궁서체 fallback 회피), 코드 `JetBrains Mono`.
- 토큰 SSoT는 `claude-theme.css`(docs)·`style.css`(slides)와 본 ADR.

### 2. docs (MkDocs Material)

- palette `indigo` → `custom`(라이트 `default` + 다크 `slate` **토글 유지**), `font.text=Inter` / `font.code=JetBrains Mono`.
- `docs/assets/css/claude-theme.css` 신규로 Material CSS 변수에 토큰 주입. 헤더는 코랄 바 대신 배경색 + 잉크 텍스트(Claude의 가벼운 톤).
- admonition: 의미·구분은 유지하되 쿨/네온 5종(`info`/`tip`/`note`/`abstract`/`example`)만 Claude 웜뮤트 톤으로 재조정. `warning`/`success`/`failure`/`quote`는 의미색 유지.

### 3. slides (Slidev)

- 테마 `the-unnamed`(다크) → `@slidev/theme-default`(라이트) + frontmatter `colorSchema: light`(**라이트 전용**).
- `style.css`: 공통 토큰 반영(아이보리 캔버스·잉크·코랄 링크·터라코타 인라인 코드·라이트 코드 카드). `setup/mermaid.ts`: `dark` → `neutral`.
- 색 카드: 헤더는 옅은 틴트 + 같은색 진한 글씨(`bg-{색}-100`/`text-{색}-800`), 본문은 풀 틴트(`bg-{색}-50`). 다크 전제의 `text-white` 헤더(라이트에서 흐려짐)는 제거. 강조 박스의 의미·구분은 보존.

### 4. 다크 모드 정책

- docs: 라이트 기본 + 다크 토글 유지(Claude 라이트/다크 모두 제공). slides: Slidev 특성상 한 톤 고정 → 라이트 전용.

### 5. ADR-0002 해석 승계

- ADR-0004가 명문화한 "변형 금지 자산은 메시지·구조 보호이며 색·여백은 매체 적응 가능"을 그대로 승계한다. 본 전환의 색·톤 조정은 이 해석 위에서 정당하다.

---

## 고려한 대안 (Alternatives considered)

### 대안 A. GitHub 스타일(중립 그레이 + 블루, 다크 옵션)

다크 옵션이 ADR-0004와 더 정합적이고 개발자 톤에 가깝다. **기각:** 주제(Claude 교육) 정합과 따뜻·비개발자 친화 측면에서 Claude 스타일을 우선(사용자 결정).

### 대안 B. ADR-0004 유지(slides만 다크) + docs만 라이트 손질

두 표면 톤 불일치를 그대로 둠 → Issue #44 목적(통일) 미달. **기각.**

### 대안 C. slides도 다크 Claude 톤

Slidev에서 다크를 유지하며 Claude 다크 팔레트 적용. **기각:** docs 기본이 라이트라 표면 간 메인 톤이 다시 어긋남. 메인 톤을 라이트로 맞추고 docs는 토글로 다크를 제공한다.

### 대안 D. `the-unnamed` 유지 + 라이트 강제

다크 전제 테마에 라이트를 강제하면 스타일이 충돌. **기각**, `default` 라이트 베이스로 교체.

---

## 결과 (Consequences)

### 긍정적 영향

- 두 표면 톤 일관(아이보리 + 코랄), 주제 정합, 비개발자 친화.
- docs admonition과 slides 색 카드가 같은 결(옅은 틴트 + 의미색)로 정렬.
- 자체 자산 면적 작음(docs CSS 1개, slides `style.css`/`mermaid.ts`).

### 부정적 영향·리스크

- **`the-unnamed`의 프리미엄 코드 블록(ADR-0004 채택의 핵심 사유) 상실.** *완화:* 라이트 shiki(`vitesse-light`) + Claude 코드 카드. 발표 코드 가독성은 발표 후 피드백으로 재평가.
- **slides 다크 옵션 포기(라이트 전용).** *완화:* 가역성 높음 — 테마·토큰 교체 비용이 작음.
- **색 토큰이 두 파일(`claude-theme.css`, `style.css`)에 중복 정의** → 변경 시 양쪽 동기화 필요. *완화:* 본 ADR과 spec에 토큰을 명시해 단일 기준 유지.

### 후속 조치

- 발표 후 청중 피드백으로 라이트 톤·코드 가독성 재평가.
- ADR-0004를 `superseded/`로 이관, `index.md` 갱신(본 이슈에서 수행).
- (선택) 토큰 중복이 부담되면 공용 토큰 추출을 재검토.
