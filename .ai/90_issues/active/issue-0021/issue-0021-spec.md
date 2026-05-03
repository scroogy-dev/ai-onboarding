# Issue #21 스펙 — 교육자료 추가 개선

> 원본 이슈: https://github.com/scroogy-dev/ai-onboarding/issues/21

## 목표 (Goal)

비개발자 학습자가 교육자료를 읽었을 때 "왜 배워야 하는지"가 더 설득력 있게 와닿고, "무엇을 어떻게 하라는지"가 더 알기 쉽게 정리되도록 `docs/`(SSoT)와 `slides/`(Slidev 파생) 양쪽을 일관되게 보완한다.

---

## 범위 (Scope)

**포함 (In)**

- `docs/` 하위 마크다운 콘텐츠의 설득력·이해도 보완 (ADR-0005 본질 메시지 프레임과 정렬)
- 비개발자 관점에서 모호하거나 비약이 있는 문장·구조 다듬기
- 필요 시 admonition·비교 박스·자가 진단 등 시각 장치 추가 (의도적 강조는 카드 유지)
- `docs/` 변경의 메시지·구조를 `slides/`(Slidev) 파생본에 반영 — 매체별 전용 문법은 자유 사용 (ADR-0002)

**비포함 (Out)**

- 새로운 챕터·주제 신설 (구조 개편이 아니라 기존 자료의 다듬기)
- MkDocs 테마·플러그인 변경
- 슬라이드 테마(`the-unnamed`) 교체 (ADR-0004 범위)
- 본질 메시지 프레임 재정의 (ADR-0005 유지)

---

## 완료의 정의 (Definition of Done)

- [ ] `docs/`·`slides/` 내 개선 대상을 식별하고, 항목별로 "현재의 약점 → 개선 방향"을 한 줄씩 정리한 진단 노트가 있다
- [ ] 진단 노트에서 합의된 항목이 모두 `docs/` 본문에 반영되어 있다
- [ ] 같은 항목이 `slides/`(Slidev) 파생본에도 메시지·구조 차원에서 일관되게 반영되어 있다
- [ ] 변경된 페이지·슬라이드가 ADR-0005 본질 메시지 프레임과 충돌하지 않는다 (도구 우회 표현·결정성/비결정성 노출 등 회피)
- [ ] 변경된 본문이 비개발자 톤 규칙(전문 용어 최소화, 평이한 톤)을 따른다
- [ ] `mkdocs build`와 `slides/`의 Slidev 빌드(또는 동등한 검증)가 경고 없이 통과한다
- [ ] 변경 요지를 한국어로 정리한 PR 메시지가 준비되어 있다 (`/git-pr` 정책)

---

## 연관 문서

| 문서 | 역할 |
|------|------|
| `.ai/50_adr/active/adr-0005-core-message-non-developers-make-software.md` | 본질 메시지 프레임 — 표현 다듬을 때 정렬 기준 |
| `.ai/50_adr/active/adr-0001-practice-tool-scope-and-stage-model.md` | 3단계 학습 사다리 — 비개발자 진입 동선 일관성 점검 |
| `.ai/50_adr/active/adr-0002-publishing-structure-docs-ssot-slides-derivative.md` | `docs/` SSoT, `slides/` 파생 — 양쪽 반영 시 매체별 문법 자유, 메시지·구조 정합 유지 |
| `.ai/50_adr/active/adr-0004-slides-theme-the-unnamed.md` | Slidev 테마/한국어 sans·다크 mermaid 셋업 — 슬라이드 본문 다듬을 때 톤 기준 |
| `.ai/40_domain/glossary.md` | 비개발자 톤·용어 일관성 점검 |
| `.ai/AI-CONTEXT.md` | 프로젝트 규칙(비개발자 톤, 마크다운 SSoT) |
