# Issue #44 스펙 — docs 및 slide UI 테마 변경

> GitHub Issue: https://github.com/scroogy-dev/ai-onboarding/issues/44

## 목표 (Goal)

docs(MkDocs Material)와 slides(Slidev) 양쪽의 UI 테마를 **Claude 스타일**(따뜻한 크림/아이보리 배경 + 코랄·터라코타 액센트, 라이트 기본)로 통일한다.

> 스타일 방향은 Task 1에서 사용자 확인으로 **Claude 스타일** 확정 (2026-06-04). GitHub 스타일은 기각.

---

## 범위 (Scope)

**포함 (In)**

- 적용할 스타일 방향 결정 (Claude 스타일 ↔ GitHub 스타일 중 택1)
- docs 테마 변경 — `mkdocs.yml`(palette/font/features), `overrides/`, `docs/assets/`(css)
- slides 테마 변경 — `slides/`의 Slidev 테마·스타일 (현재 `slidev-theme-the-unnamed`)
- 기존 자산 정합 유지: 다크/라이트 모드, 한국어 sans-serif(Noto Sans KR), mermaid 톤
- 테마 변경이 ADR-0004를 대체하므로 관련 ADR 갱신

**비포함 (Out)**

- 콘텐츠 본문(텍스트·구조) 변경
- 발행 구조 변경 — docs(SSoT)/slides(파생) 관계는 ADR-0002 유지
- nav 순서·정보 구조(IA) 변경

---

## 변경 대상 파일 (Task 1 조사)

**docs (MkDocs Material)**

| 파일 | 현재 | 변경 방향 |
|------|------|----------|
| `mkdocs.yml` | palette `indigo` + 라이트/다크 토글 | Claude 코랄/크림 팔레트로 교체, font 지정 |
| `docs/assets/css/` | `slide-link.css`(버튼만) | Claude 색 토큰 CSS 신규 추가 |
| `overrides/main.html` | 슬라이드 버튼 주입 | 구조 변경 불필요(버튼은 `--md-primary-*` 변수 자동 추종) |

**slides (Slidev)**

| 파일 | 현재 | 변경 방향 |
|------|------|----------|
| `slides/slides.md` frontmatter | `theme: the-unnamed`(다크) | Claude 톤 라이트 테마로 교체 |
| `slides/style.css` | Noto Sans KR 강제 + blockquote 여백 | Claude 색·폰트 토큰 반영 |
| `slides/setup/mermaid.ts` | mermaid `dark` override | 라이트/Claude 톤으로 조정 |
| `slides/package.json` | `slidev-theme-the-unnamed` | 베이스 테마 교체 가능성 |

> ⚠️ Claude 스타일(라이트·웜)은 ADR-0004(다크 the-unnamed)를 사실상 대체 → Task 4에서 ADR-0004 supersede 처리 필요.

---

## 디자인 토큰 (확정 — Task 2·3 공통 계약)

> 2026-06-04 사용자 확인. 액센트 = 코랄 `#D97757`. 다크 모드 = docs 라이트/다크 토글 유지, slides 라이트 전용.

**색**

| 역할 | 라이트(기본) | 다크 |
|------|------|------|
| 페이지 배경 | `#FAF9F5` | `#262624` |
| 보조 surface | `#F0EEE6` | `#30302D` |
| 제목(잉크) | `#1F1E1D` | `#ECEAE1` |
| 본문 | `#3D3A34` | `#C9C6BC` |
| 흐린 텍스트 | `#73706B` | `#A6A39B` |
| 액센트(코랄) | `#D97757` | `#E0875F` |
| 액센트 hover | `#BD5D3A` | `#D97757` |
| 경계선 | `#E3E0D6` | `#3E3D38` |
| 인라인 코드 | `#B85C38` | `#E0875F` |

**폰트**

- 제목·본문: `Inter`(라틴) + `Noto Sans KR`(한국어), sans 통일
- 코드: `JetBrains Mono`
- 라틴 대제목 serif 디스플레이는 보류(한국어 serif fallback 위험) — 기본 sans

---

## 완료의 정의 (Definition of Done)

- [x] 적용할 스타일 방향 = **Claude 스타일**로 결정됨 (Task 1)
- [ ] docs 테마가 선택된 스타일로 변경되고 `mkdocs build`(또는 serve)로 렌더 확인됨
- [ ] slides 테마가 선택된 스타일로 변경되고 Slidev 렌더 확인됨
- [ ] 다크/라이트 모드·한국어 sans-serif 폰트가 새 테마에서 깨지지 않음
- [ ] 영향받는 ADR(특히 ADR-0004)이 갱신되거나 supersede 처리됨

---

## 연관 문서

| 문서 | 역할 |
|------|------|
| [ADR-0002](../../../50_adr/active/adr-0002-publishing-structure-docs-ssot-slides-derivative.md) | 발행 구조 — docs(SSoT)/slides(파생). 두 표면을 모두 손대므로 경계 확인 |
| [ADR-0004](../../../50_adr/active/adr-0004-slides-theme-the-unnamed.md) | 현재 슬라이드 테마(`the-unnamed`) 결정 — 이 이슈가 변경/대체할 대상 |
