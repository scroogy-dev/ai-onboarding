# Issue #44 실행요약 — docs 및 slide UI 테마 변경

> 스펙: [issue-0044-spec.md](./issue-0044-spec.md) | 계획: [issue-0044-plan.md](./issue-0044-plan.md)

## 다음 작업

> ✅ 모든 작업이 완료되었습니다.

---

## Task별 수행 결과

### Task 1: 스타일 방향 결정 및 현황 조사

- **결과**: 완료
- **수행 내용 요약**:
  - 현황 조사: docs는 `mkdocs.yml` palette `indigo` + 라이트/다크 토글, 자체 자산은 `slide-link.css`·`overrides/main.html` 2개로 면적 작음. slides는 `the-unnamed` 다크 테마(ADR-0004) + `style.css`(Noto Sans KR)·`setup/mermaid.ts`(dark).
  - 핵심 발견: 두 표면 톤이 이미 어긋남(docs=라이트 indigo / slides=다크 the-unnamed).
  - 사용자 확인으로 **Claude 스타일**(크림/아이보리 + 코랄 액센트, 라이트 기본) 확정. GitHub 스타일 기각.
  - 변경 대상 파일 목록을 spec에 정리.
- **특이 사항**: Claude 스타일(라이트·웜)은 ADR-0004(다크 the-unnamed)를 사실상 대체 → Task 4에서 ADR-0004 supersede 처리 필요.

---

### Task 2: docs 테마 적용

- **결과**: 초안 적용 (시각 점검 대기)
- **수행 내용 요약**:
  - `mkdocs.yml`: palette `indigo` → `custom`(라이트/다크 토글 유지), `font.text=Inter`·`font.code=JetBrains Mono` 추가, `extra_css`에 `claude-theme.css` 등록.
  - `docs/assets/css/claude-theme.css` 신규: 확정 토큰을 Material CSS 변수에 주입(라이트/다크 스킴별 배경·텍스트·코드·푸터, 코랄 액센트, Noto Sans KR @import).
  - `python3 -m mkdocs build --strict` 통과, 산출물에 CSS·custom 속성·폰트 로드 확인.
- **특이 사항**:
  - 헤더를 Material 기본 "코랄 바" 대신 **배경색(아이보리/다크) + 잉크 텍스트**로 처리(Claude의 가벼운 톤). 코랄 바를 원하면 되돌리기 쉬움.
  - **admonition 색 검토(사용자 요청)**: 쿨/네온 5종(info/tip/note/abstract/example)을 Claude 웜뮤트 톤(더스티블루/세이지/토프/슬레이트/플럼)으로 재조정. warning/success/failure/quote는 의미색 유지. `claude-theme.css`에 border·title·아이콘 색만 덮어씀(아이콘 모양은 Material 기본). docs 빌드 `--strict` 통과.

---

### Task 3: slides 테마 적용

- **결과**: 초안 적용 (시각 점검 대기)
- **수행 내용 요약**:
  - `slides.md` frontmatter: `theme: the-unnamed` → `theme: default`, `colorSchema: light` 추가(라이트 강제).
  - `package.json`: `slidev-theme-the-unnamed` 제거 → `@slidev/theme-default` 추가(`npm install`로 lock·node_modules 반영, 124개 패키지 정리).
  - `style.css` 전면 재작성: 아이보리 배경·잉크 텍스트·코랄 링크·터라코타 인라인 코드·라이트 코드카드·Inter/Noto Sans KR/JetBrains Mono. 강조 박스(`bg-*-50` 등)는 콘텐츠 강조라 미변경(라이트 변형 자동 적용).
  - `setup/mermaid.ts`: `dark` → `neutral`(라이트).
  - `slidev build` 통과(✓ 10.98s), 번들에 Claude 토큰·폰트 반영 확인, the-unnamed 잔존 없음.
- **특이 사항**:
  - default 테마는 Slidev 52에서 별도 패키지라 신규 설치 필요했음. the-unnamed의 프리미엄 코드블록(ADR-0004 채택 사유)은 포기 — Claude 라이트 톤 전환이 ADR-0004를 대체하므로 Task 4에서 명문화.
  - **박스/카드 색 정합 검토(사용자 요청)**: 다크→라이트 전환으로 `text-white` 헤더 바 34개가 아이보리 위에서 흐려지는 문제 발견. docs admonition과 동일 결로 `bg-{색}-500/40 text-white` → `bg-{색}-100 text-{색}-800`(옅은 틴트 + 같은색 진한 글씨) 일괄 변환.
  - **카드 본문 투명도 보정(사용자 요청)**: 본문/박스 틴트가 `bg-{색}-50/40·/30`(40·30% 불투명)이라 아이보리 위에서 흐려 58건을 `bg-{색}-50` 풀 틴트로. 헤더(-100) > 본문(-50) 위계 유지. (이 투명도는 본래 다크 the-unnamed 톤에 맞춰 사용자가 설정했던 값.)
  - **하단 프로그래스바 색 보정(사용자 요청)**: `global-bottom.vue`가 다크용(`bg-cyan-400/70` 채움 + `bg-white/5` 트랙)이라 라이트에서 안 보임 → 채움 `bg-[#D97757]`(코랄), 트랙 `bg-[#1F1E1D]/10`(옅은 잉크)로 변경.

---

### Task 4: ADR 갱신

- **결과**: 완료
- **수행 내용 요약**:
  - 신규 [ADR-0009](../../../50_adr/active/adr-0009-unified-ui-theme-claude-style.md) 작성: docs·slides 통합 Claude 스타일(라이트) 결정 — 배경·토큰·표면별 결정·대안(GitHub 등)·결과 명문화.
  - ADR-0004를 `active/` → `superseded/`로 `git mv`, 상태 `Superseded`로 변경 + 상단 대체 안내 + 내부 ADR-0002 링크 경로 보정.
  - `50_adr/index.md`: Active 표에서 ADR-0004 제거 + ADR-0009 추가, `## Superseded ADR` 섹션 신설.
  - `issue-0044-spec.md` 연관 문서 링크 갱신(ADR-0004→superseded, ADR-0009 추가).
- **특이 사항**: ADR-0004를 참조하는 `archive/` 이슈 문서들은 역사 스냅샷이라 미수정(당시 `active/` 경로 링크는 보존). ADR-0002의 변형 금지 자산 해석은 ADR-0009가 승계.
