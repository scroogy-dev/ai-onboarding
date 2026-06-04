# Issue #44 스펙 — docs 및 slide UI 테마 변경

> GitHub Issue: https://github.com/scroogy-dev/ai-onboarding/issues/44

## 목표 (Goal)

docs(MkDocs Material)와 slides(Slidev) 양쪽의 UI 테마를 하나의 일관된 스타일(Claude 스타일 또는 GitHub 스타일)로 통일한다.

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

## 완료의 정의 (Definition of Done)

- [ ] 적용할 스타일 방향(Claude/GitHub)이 결정되어 spec에 명시됨
- [ ] docs 테마가 선택된 스타일로 변경되고 `mkdocs build`(또는 serve)로 렌더 확인됨
- [ ] slides 테마가 선택된 스타일로 변경되고 Slidev 렌더 확인됨
- [ ] 다크/라이트 모드·한국어 sans-serif 폰트가 새 테마에서 깨지지 않음
- [ ] 영향받는 ADR(특히 ADR-0004)이 갱신되거나 supersede 처리됨

---

## 연관 문서

| 문서 | 역할 |
|------|------|
| [ADR-0002](../../50_adr/active/adr-0002-publishing-structure-docs-ssot-slides-derivative.md) | 발행 구조 — docs(SSoT)/slides(파생). 두 표면을 모두 손대므로 경계 확인 |
| [ADR-0004](../../50_adr/active/adr-0004-slides-theme-the-unnamed.md) | 현재 슬라이드 테마(`the-unnamed`) 결정 — 이 이슈가 변경/대체할 대상 |
