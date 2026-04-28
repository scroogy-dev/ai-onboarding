# Issue #17 스펙 — 교육 자료 개선

> 원본 이슈: https://github.com/scroogy-dev/ai-onboarding/issues/17

## 목표 (Goal)

<!-- 이 이슈가 끝나면 무엇이 달라져야 하는지 한 줄로 작성하세요. -->

`docs/`를 먼저 개선하고, 그에 따라 변경되는 콘텐츠를 `slides/`에 동기화하면서 슬라이드도 함께 개선한다. (세부 개선 항목은 TBD)

---

## 범위 (Scope)

**포함 (In)**

- `docs/` 콘텐츠/구성 개선 (선행 작업)
- 위 변경에 동반되는 `slides/` 동기화 + 슬라이드 자체 개선 (후행 작업)

**비포함 (Out)**

- `docs/` 변경과 무관한 슬라이드 전용 단독 작업 (별도 이슈로 분리)
- **교육 운영 가이드** (`docs/operation-guide.md`) — `docs/`·`slides/` 양쪽 모두 이번 이슈 대상이 아님
- TBD

---

## 작업 순서

1. **Phase 1 — `docs/` 개선**: SSoT인 `docs/`에서 콘텐츠/구성 개선을 먼저 적용한다.
2. **Phase 2 — `slides/` 동기화 + 개선**: Phase 1에서 바뀐 메시지·다이어그램·표를 `slides/`에 반영하고, 슬라이드 전용 개선 사항도 함께 적용한다.

> ADR-0002의 단방향 동기화 원칙(`docs/` → `slides/`)에 따라 Phase 1이 Phase 2보다 선행한다.

---

## 완료의 정의 (Definition of Done)

<!-- AI가 완료 여부를 스스로 판정할 수 있는 체크리스트를 작성하세요. -->

- [ ] 사용자가 메시지로 전달한 모든 개선 항목이 `issue-0017-plan.md`에 Task로 등록되어 있고 전부 체크 완료
- [ ] Phase 1에서 변경된 `docs/` 콘텐츠가 Phase 2에서 `slides/`에 빠짐없이 반영됨 (README의 "발표 직전 sync 체크리스트" 통과)
- [ ] **로컬 확인 — 문서 사이트**: `mkdocs serve` 실행 후 변경된 페이지를 브라우저에서 직접 확인 (레이아웃·이미지·admonition 깨짐 없음)
- [ ] **로컬 확인 — 발표 슬라이드**: `cd slides && npm run dev` 실행 후 변경된 슬라이드를 처음부터 끝까지 1회 풀 점검 (Mermaid·표·강조 박스 깨짐 없음)

---

## 연관 문서

<!-- 이 이슈 작업 시 참고할 .ai 내 문서를 나열하세요. -->

- [ADR-0002](../../../50_adr/active/adr-0002-publishing-structure-docs-ssot-slides-derivative.md) — `docs/` SSoT / `slides/` 파생 발행 구조
- [ADR-0003](../../../50_adr/active/adr-0003-deprecate-self-implemented-slide-mode.md) — 자체 구현 슬라이드 모드 제거 및 Slidev 대체
- [ADR-0004](../../../50_adr/active/adr-0004-slides-theme-the-unnamed.md) — 발표 슬라이드 테마 `the-unnamed` 채택
