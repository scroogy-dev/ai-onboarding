# Issue #9 스펙 발표 슬라이드 Slidev 마이그레이션 및 GitHub Pages 배포

> 원본 이슈: https://github.com/scroogy-dev/ai-onboarding/issues/9

## 목표 (Goal)

기존 자체 구현 슬라이드 모드(`reveal-toggle.js` + `reveal-override.css`, ~1,000줄)를 Slidev 기반 슬라이드로 마이그레이션하고, MkDocs 문서 사이트와 함께 GitHub Pages에서 함께 발행한다. 발행 구조는 ADR-0002에 따라 `docs/`를 콘텐츠 SSoT로, `slides/`를 그 파생 표면으로 둔다. 자체 구현은 ADR-0003에 따라 본 이슈 완료 시점에 제거한다.

---

## 범위 (Scope)

**포함 (In)**

- Slidev 프로젝트 초기 세팅 (테마 선정, `slides/` 디렉토리 신설)
- ADR-0002에 따른 발행 구조 적용: `docs/`(SSoT) → `slides/`(파생) 단방향 동기화 원칙 정착
- 기존 자체 구현 슬라이드의 Why/Who/What/How 섹션을 Slidev 마크다운으로 변환
- Mermaid 다이어그램·표 이식 및 레이아웃 조정 (변형 금지 자산은 가능하면 Slidev `src:` import 활용 검토)
- GitHub Actions 워크플로우 확장: MkDocs 빌드와 Slidev 빌드를 함께 처리하여 GitHub Pages에 배포
- 배포 후 문서 사이트와 슬라이드 경로가 충돌 없이 공존하는지 확인
- 발표 마일스톤용 `docs/` → `slides/` sync 체크리스트의 README/문서 안내
- ADR-0003에 따른 자체 구현 슬라이드 모드 제거:
  - `docs/assets/js/reveal-toggle.js`, `docs/assets/css/reveal-override.css` 삭제
  - `mkdocs.yml`의 `extra_css`·`extra_javascript`에서 reveal-* 참조 제거
  - `overrides/main.html`의 "슬라이드 모드" 버튼을 Slidev URL 링크로 교체
  - `docs/` 본문의 `.web-only` / `.slide-only` 이중 표현 패턴 정리

**비포함 (Out)**

- `docs/`의 콘텐츠 SSoT 위상 변경 (ADR-0002로 명시 유지)
- 공통 자산 디렉토리(`source/`, `shared/` 등) 신설 (ADR-0002의 "후행 추출" 원칙에 따라 실제 중복 발생 시점 이후로 보류)
- 슬라이드 콘텐츠 자체의 신규 작성 (이번 이슈에서는 마이그레이션·배포에 집중)
- Slidev 외 발표 도구 도입 검토
- 자동 빌드 파이프라인을 통한 docs↔slides 변환 (ADR-0002 대안 C — 현 규모에서 제외)

---

## 완료의 정의 (Definition of Done)

- [ ] ADR-0002(콘텐츠 발행 구조) 작성·인덱스 등록 완료
- [ ] ADR-0003(자체 구현 슬라이드 모드 제거) 작성·인덱스 등록 완료
- [ ] `slides/` 디렉토리에 Slidev 프로젝트가 초기화되어 로컬에서 `slidev` 실행 시 정상 렌더링됨
- [ ] 기존 슬라이드의 Why/Who/What/How 섹션이 Slidev 마크다운으로 모두 이식되고, Mermaid·표가 깨지지 않음
- [ ] GitHub Actions에서 MkDocs와 Slidev 빌드 산출물이 모두 GitHub Pages로 배포됨
- [ ] 배포된 사이트에서 문서 경로와 슬라이드 경로가 서로 충돌 없이 접근 가능 (예: `/` vs `/slides/`)
- [ ] `docs/assets/js/reveal-toggle.js`, `docs/assets/css/reveal-override.css` 삭제됨
- [ ] `mkdocs.yml`의 `extra_css`·`extra_javascript`에서 reveal-* 참조 제거됨
- [ ] `overrides/main.html`의 "슬라이드 모드" 버튼이 Slidev URL로 이동하도록 교체됨
- [ ] `docs/` 본문에서 `.slide-only` 사용 블록 제거, `.web-only` 래핑 해제 후 콘텐츠 누락 없음
- [ ] README 또는 문서에 Slidev 로컬 실행·배포 방법, `docs/`→`slides/` sync 체크리스트가 안내됨

---

## 연관 문서

| 문서 | 역할 |
|------|------|
| `.ai/50_adr/active/adr-0002-publishing-structure-docs-ssot-slides-derivative.md` | 본 이슈의 발행 구조 결정 — `docs/` SSoT, `slides/` 파생, 단방향 동기화 원칙 |
| `.ai/50_adr/active/adr-0003-deprecate-self-implemented-slide-mode.md` | 자체 구현 슬라이드 모드 제거 결정 및 한계 분석 — 본 이슈의 마지막 단계로 실행 |
| `.ai/50_adr/active/adr-0001-practice-tool-scope-and-stage-model.md` | 슬라이드 콘텐츠가 다루는 "AI 활용 3단계 모델"의 결정 근거 — 마이그레이션 시 메시지 변형 금지 |
| `mkdocs.yml` (프로젝트 루트) | 기존 GitHub Pages 배포 경로·네비게이션 — Slidev 경로 충돌 여부 판단 기준 |
| `overrides/main.html` | "슬라이드 모드" 버튼 — Slidev URL 링크로 교체 대상 |
| `docs/assets/js/reveal-toggle.js`, `docs/assets/css/reveal-override.css` | 자체 구현 슬라이드 모드 — 본 이슈 마지막 단계에서 삭제 |
| `.github/workflows/` | 현재 CI/CD 워크플로우 — Slidev 빌드 단계를 어디에 추가할지 결정 |
| `docs/` | 콘텐츠 SSoT — 슬라이드 변환 대상 원본 |
| `.ai/AI-CONTEXT.md` | "`docs/`가 콘텐츠 SSoT" 규칙의 명시 — ADR-0002와 정합 |
