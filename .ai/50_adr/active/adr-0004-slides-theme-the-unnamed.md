# ADR-0004: 발표 슬라이드 테마 — `slidev-theme-the-unnamed` 채택 + 다크 mermaid 셋업

- **상태**: Accepted
- **결정일**: 2026-04-27
- **연관 이슈**: [Issue #13](https://github.com/scroogy-dev/ai-onboarding/issues/13)
- **연관 ADR**: [ADR-0002](adr-0002-publishing-structure-docs-ssot-slides-derivative.md) — 콘텐츠 발행 구조 (변형 금지 자산 해석 보완 포함)
- **대체 대상**: 이슈 #9에서 도입한 `@slidev/theme-seriph` (`slides/package.json`)
- **영향 범위**: `slides/package.json`, `slides/slides.md`(frontmatter + mermaid `style` 라인), `slides/style.css`(신규), `slides/setup/mermaid.ts`(신규), ADR-0002 본문 보완

---

## 배경 (Context)

이슈 #9에서 발표 슬라이드를 Slidev로 마이그레이션하면서 `@slidev/theme-seriph`를 채택했다. 당시 비교 대상은 `seriph` vs `apple-basic` 두 공식 테마였고, 빌트인 레이아웃이 풍부하고 Noto Serif 매칭이 자연스럽다는 이유로 `seriph`가 선택됐다(기각: `apple-basic` — 레이아웃·예제 적음, 후속 작업 비용).

이후 발표 환경에서 디자인 개선 여지가 식별돼 본 이슈에서 테마를 재검토했다. 식별된 구체적 한계:

1. **한국어 본문 톤** — `seriph`는 serif 베이스라 한국어가 시스템 fallback 시 궁서체 톤으로 보이며, 비개발자 청중(임직원·학생) 대상 AI 교육의 친근·실용 톤과 어긋남.
2. **코드 블록 시각 품질** — Slidev 표준 prism 색조에 머물러 발표 임팩트 부족. 본 교육의 2·3단계 실습 슬라이드(프롬프트 예시·터미널 출력 등)에 코드 블록 도입이 예상되며, 코드 블록 시각이 발표 톤을 좌우하는 비중이 큼.
3. **변형 금지 자산 해석의 모호함** — ADR-0002가 mermaid·표 등을 "변형 금지 자산"으로 지정했으나, 색상·여백 같은 시각 표현이 보호 대상에 포함되는지가 불명확. 다크 톤 슬라이드 검토 시 이 해석이 결정적이 됨.

추가 정체성 고려: 본 자료는 **개발자가 비개발자에게 전달하는 가교**이며, 작성자(개발자)의 톤을 어색하게 비개발자에 맞추기보다 자신감 있는 개발자 개성을 유지하는 것이 자료의 일관성·신뢰감 측면에서 정합적이라는 판단.

---

## 후보 비교 (이슈 #13 Task 1·2 산출물 요약)

평가 기준 6개(1.1 가독성 / 1.2 빌트인 레이아웃 / 1.3 강조·admonition 등가물 / 1.4 한국어 폰트 / 1.5 유지보수 / 1.6 코드 블록 시각)를 A·B·C 3등급으로 측정. 1.6은 본 이슈에서 신설(이슈 본문 5개 + 1개).

별도 git worktree(`ai-onboarding-theme-trial/`)에서 동일 샘플 deck 13장을 6개 후보 테마로 PNG export하여 시각 검증.

| 기준 | seriph (현행) | default | apple-basic | academic | **the-unnamed** | neversink |
|------|-------|---------|-------------|----------|--------------|-----------|
| 1.1 가독성 | C | B | B | B | **A** | B |
| 1.2 빌트인 레이아웃 | A | A | B (cover 부재) | C | B | A |
| 1.3 강조 박스 | A | A | A | A | **A** (`dark:` variant) | A+ |
| 1.4 한국어 폰트 | C (궁서체) | B | B | B | **B** (sans 강제 시 A) | B |
| 1.5 유지보수 | C (2024-02) | C | C | B | **A** (2026-04) | A |
| 1.6 코드 블록 시각 | C | C | C (Apple풍 코드 아님) | B | **A+** | C |
| **종합** | C+ | C+ | C+ | C+ | **A** | B |

부수 발견:
- `apple-basic`의 "Apple 키노트풍 코드 블록" 인상은 실제 패키지에 없음. README/example.md/styles 모두 평이한 prism 처리. Apple 영감은 레이아웃·여백·큰 글씨에 한정.
- macOS 신호등 코드 컨테이너는 후보 6종 어디에도 빌트인 없음. baizeai 슬라이드(KubeCon HK 2025)에도 없음. 별도 ~30줄 CSS로만 자체 추가 가능.

---

## 결정 (Decision)

### 1. 베이스 테마 — `slidev-theme-the-unnamed` 채택

VS Code 테마 "The unnamed"(Elio Struyf) 기반 Slidev 커뮤니티 테마.

**채택 사유:**
- **코드 블록 시각 품질 압도적** — 자체 `code.css` + 자체 `setup/shiki.ts` + inline `code` 백틱·outline·rounded 처리. 시제품 PNG 비교에서 사용자가 "압도적"으로 평가.
- **다크 톤 + 노란 highlight 헤더** — 강한 시각 대비, 발표 환경에서 본문 가독성 ↑.
- **한국어 sans-serif 호환** — 자체 sans 폰트 + Noto Sans KR fallback 추가로 자연 적응.
- **강조 박스 `dark:` variant 자동** — 현행 `border-l-4 bg-{color}-50/40 dark:bg-{color}-900/15` 패턴이 다크 톤에서 어두운 색조로 자동 전환되어 무수정 호환.
- **유지보수 활성도 가장 높음** — npm `0.0.23`, 2026-04-16 릴리스.
- **자료의 정체성과 정합** — 개발자가 만드는 비개발자용 자료라는 본 프로젝트의 가교 정체성에서, 자신감 있는 개발자 톤 유지가 어설픈 비개발자 디자인 흉내보다 일관성 ↑ (사용자 명시적 표명).

### 2. 자체 자산 추가 (`slides/` 디렉토리에 ~15줄)

- **`slides/style.css`**: Google Fonts에서 Noto Sans KR @import + `.slidev-layout`에 한국어 sans 강제
- **`slides/setup/mermaid.ts`**: the-unnamed 디폴트 `theme: 'forest'`(라이트)를 `theme: 'dark'`로 override
- **`slides/slides.md` 보완**: frontmatter `theme: the-unnamed`로 변경, mermaid의 `style A fill:#e3f2fd...` 라이트 색 강제 라인 제거 (다크 mermaid 자동 적용)

### 3. ADR-0002 변형 금지 자산 해석 보완

ADR-0002에서 지정한 변형 금지 자산(mermaid·표·강조 박스 등)은 **메시지·구조 중심**의 보호 대상이며, 시각적 색상·여백 등 매체 적응 영역은 발표 표면(`slides/`)이 자체 톤(예: 다크)에 맞춰 자유롭게 조정 가능하다.

**근거:** 현행 `slides.md`의 mermaid `style A fill:#e3f2fd...` 라이트 색 강제 라인은 사용자가 자동 생성된 결과를 그대로 사용한 것으로, 의도적으로 선택된 색이 아님. 변형 금지의 본질은 "AI 활용 3단계 모델"의 메시지·명칭·흐름이지 픽셀 단위 색이 아님.

본 ADR 채택과 함께 ADR-0002에 본 해석을 반영하는 1줄 보완 PR을 후속으로 진행.

### 4. 본 이슈에서 적용 vs 후속 분리

테마 변경 적용 작업 자체(테마 의존성 교체, 자체 자산 3개 파일 추가, mermaid `style` 라인 제거)는 **본 이슈에서 진행**한다. ADR로 결정·근거를 명문화한 뒤 같은 PR(또는 후속 PR)에서 적용해 롤백 단위를 일치시킨다. 적용 시 PNG 시각 검증을 거친다.

---

## 고려한 대안 (Alternatives considered)

### 대안 A. 현행 `seriph` 유지 + 자체 `style.css` (baizeai 패턴)

**내용:** 라이트 슬라이드 + 13줄 자체 CSS(코드 블록 어두운 반투명 + DM Sans + Noto Sans KR + Fira Code).

**장점:**
- 보존 자산 100% 무수정 — mermaid·표·강조 박스 라이트 톤 그대로
- 변경 비용 최소 — 외부 의존성 추가 0, 자체 자산 13줄
- baizeai라는 검증된 레퍼런스가 같은 베이스에서 동작 입증

**기각 사유:** 코드 블록 시각 품질이 `the-unnamed` 대비 부족. 시제품 PNG 비교에서 사용자가 the-unnamed의 코드 가독성을 "압도적"이라 평하고 default/neversink/apple-basic의 코드 가독성을 "아쉽다"고 평한 것의 본질은 1.6 항목의 큰 격차. 본 발표에서 코드 블록(2·3단계 실습 프롬프트·예시)이 발표 임팩트의 핵심 도구가 될 예정이므로 1.6의 우위가 결정적.

### 대안 B. `default` / `apple-basic` / `academic` / `neversink`

각 후보별 기각 사유:

- **`default`**: seriph와 사실상 동일(layouts·styles 거의 같음, 타이포그래피만 sans 베이스). 베이스 변경 명분 없음.
- **`apple-basic`**: (a) cover 레이아웃 부재(intro로 대체) (b) "Apple 키노트풍 코드 블록"이라는 인상이 실제 패키지 내용과 불일치 — Apple 영감은 큰 글씨·여백 (c) 1.6에서 평이.
- **`academic`**: 학술 발표 톤(각주·인용 강세) — 비개발자 AI 교육 톤과 어긋남. statement 레이아웃 부재.
- **`neversink`**: 시각 자산 과도(SpeechBubble, StickyNote, vue3-kawaii 만화풍 아이콘 의존). 본 발표 톤 대비 화려하고 의존성 무거움.

### 대안 C. `slidev-theme-the-unnamed` 통째로 + ADR-0002 그대로 (mermaid 변형 금지 엄격 해석)

**내용:** the-unnamed 베이스를 채택하되, mermaid 색을 매체 적응이 아닌 변형 금지로 엄격 해석하여 라이트 색을 그대로 유지.

**기각 사유:** 다크 슬라이드에 라이트 mermaid 박스가 떠 있어 단계 텍스트가 묻히는 시각 충돌이 PNG 시제품에서 명확히 확인됨. 변형 금지의 본래 의도(메시지·구조 보호)에서 색은 부수적이며, 사용자가 mermaid 색이 의도적 선택이 아님을 직접 확인. 엄격 해석은 보호의 실익 없이 발표 가독성만 해침.

### 대안 D. 자체 테마 패키지 분리 (`slidev-theme-ai-onboarding`)

**내용:** 자체 Slidev 테마 패키지를 npm/모노레포로 분리해서 발표용·문서용 등 다중 표면에 재활용 가능하게 추출.

**기각 사유:** 운영자 1인의 콘텐츠 프로젝트 규모에서 자체 테마 패키지의 유지보수 비용이 정당화되지 않음. ADR-0002의 후속 조치(콘텐츠 다수 운영자/표면 확장 시 재검토) 시점에 다시 검토. 본 이슈 비범위.

### 대안 E. 자체 macOS 신호등 코드 컨테이너 추가 (Plan B 확장)

**내용:** 채택안에 추가로 `pre.shiki::before`에 색상 dot 3개를 ~30줄 CSS로 추가해 macOS 키노트 풍 신호등 컨테이너 구현.

**기각 사유 (현 시점):** baizeai 분석에서 신호등이 사용자가 본 인상의 본질이 아님이 확인됐고, 후보 어디에도 빌트인이 없어 모두 자체 구현 영역. 본 이슈에서 강행하지 않고 발표 후 청중 피드백을 보고 후속 이슈로 분리 결정하는 것이 비용·가치 측면에서 합리적.

---

## 결과 (Consequences)

### 긍정적 영향

- **코드 블록 시각 품질 ↑** — 2·3단계 실습 슬라이드에 코드 블록 도입 시 the-unnamed의 inline code 강조·문법 색조가 자연스럽게 활용됨. 발표 임팩트 강화.
- **한국어 가독성 ↑** — 궁서체 fallback 제거, Noto Sans KR 명시. 비개발자 청중과의 거리감 해소.
- **발표 톤 일관성** — "개발자가 만드는 비개발자용 자료"라는 본 프로젝트의 정체성에 톤 정합. 작성자 정체성과 자료 톤이 어긋나지 않음.
- **유지보수 면적 작음** — 자체 자산 ~15줄. 외부 의존성은 npm 활성도가 가장 높은 패키지 1종으로 교체.
- **변형 금지 자산의 해석 명확화** — ADR-0002 보완으로 향후 비슷한 해석 모호성 사전 차단.

### 부정적 영향·리스크

- **빌트인 레이아웃 일부 미지원** — the-unnamed는 `default/cover/center/section/two-cols/about-me` 6종. seriph에서 사용 중인 `statement` 등이 빌트인 미지원.
  - *완화*: Slidev core가 일부 기본 layout(`statement`, `end` 등)을 제공하므로 실사용에 큰 영향 없음. 부족 시 자체 layout vue 추가(~10줄 per layout).
- **다크 톤 일관성 유지 부담** — 새 슬라이드 추가 시 라이트 색 강제(예: mermaid `style ... fill:#e3f2fd`) 사용을 피해야 함.
  - *완화*: `slides/` 작성 가이드에 "다크 톤 + the-unnamed 베이스, mermaid 색 자동 적응 사용" 1줄 명시. 메모리에 본 결정 배경 저장됨.
- **ADR-0002 본문 보완 미작업 상태** — 본 ADR Decision 3번에 명시했으나 ADR-0002 본문 PR이 아직 별도 진행 필요.
  - *완화*: 후속 조치 항목으로 추적.
- **다크 톤이 청중 가독성을 해친다는 발표 후 피드백 가능성** — 현 시점 결정은 자신감 있는 톤 우선이지만, 발표 후 청중 반응이 부정적이면 재검토.
  - *완화*: 발표 후 피드백 수집을 후속 조치에 명시. 톤 재조정 비용은 자체 자산 ~15줄 수준이라 가역성 ↑.

### 후속 조치

- Issue #13 Task 4에서 본 결정을 `slides/`에 적용:
  - `slides/package.json`: `@slidev/theme-seriph` 제거, `slidev-theme-the-unnamed` 추가
  - `slides/slides.md`: frontmatter `theme:` 변경, mermaid `style` 라이트 색 강제 라인 제거
  - `slides/style.css` 신규(Korean sans 강제)
  - `slides/setup/mermaid.ts` 신규(dark theme override)
- ADR-0002 본문에 변형 금지 자산 해석 보완 1줄 추가 (별도 PR)
- `slides/` 작성 가이드 또는 README에 "다크 톤 + the-unnamed 운영 원칙 + mermaid 색 자동 적응" 명시
- 발표 후 청중 피드백 보고 macOS 신호등 추가(대안 E) 여부를 후속 이슈에서 검토
- 본 이슈에서 만든 git worktree(`ai-onboarding-theme-trial/`)는 비교 산출물이 보존되어 있으므로 결정 적용 후 정리(`git worktree remove`)
