# Issue #19 스펙 — 비개발자 대상 교육과정 보완 (교수법 보완)

> GitHub: https://github.com/scroogy-dev/issues/19
> 진단 노트: [.ai/99_workspace/notes/issue-0019-pedagogy-diagnosis.md](../../../99_workspace/notes/issue-0019-pedagogy-diagnosis.md)

## 목표 (Goal)

비개발자 대상 90분 실습강의의 **이론 부분**(본 리포 SSoT)에서 학습자 능동성과 추상 개념 체감을 끌어올린다. 단원·페이지를 새로 만들지 않고 **기존 본문·슬라이드에 4가지 보완(W1'·W2·W3·~~W4 폐기~~)을 가볍게 추가**하는 방식.

---

## 범위 (Scope)

**관점 (렌즈)**
- **실용주의·실습강의·간결성** — 새 프레임워크·새 단원 페이지 도입 X.
- **단원 = 90분 강의 전체** (학교 수업 비유). 슬라이드 섹션 5개는 단원 내부 흐름일 뿐.
- **본 리포 = 이론 전용**. 실습은 별도 리포 책임이라 본 이슈에서 다루지 않음.

**포함 (In)**
- W1': 슬라이드 cover 직후 **agenda(목차) 1장** 추가
- W2: `index.md` Who의 "공통 전제" → **"공통 전제 + 자가 진단" 결합**. yes/no 3문항. 슬라이드 동기화.
- W3: **before/after 비교 박스 4개** (A·B·C·D) — Why/Who/What/How 적정 위치에 배치. 슬라이드 동기화.
- 본문(`docs/`) 변경에 따른 슬라이드(`slides/`) 동기화 (ADR-0002).

**비포함 (Out)**
- `docs/operation-guide.md` 수정 (발표 무관·운영자용)
- 실습 콘텐츠·실습 페이지·실습 리포 핸드오프 (별 리포 책임, 사내·사외 공용으로 의존 안 엮음)
- 단원 단위 분리·새 단원 페이지 생성
- 단계 모델 용어 변경(G8) — 과거 정의 유지
- 보안 가이드 본문 강조(W4) — 좌측 nav·슬라이드 본 흐름 통합으로 충분
- ADR-0002·0004 변경 (슬라이드 테마·SSoT 구조 유지)
- 새 도구·플랫폼 도입 (ADR-0001 실습 도구 범위 유지)

---

## 완료의 정의 (Definition of Done)

- [ ] W1' agenda 슬라이드 1장이 `slides/slides.md` cover 직후에 추가되어 있다
- [ ] W2 "공통 전제 + 자가 진단" 결합 형태가 `docs/index.md` Who 섹션과 `slides/slides.md`에 반영되어 있다
- [ ] W3 A·B·C·D 4개 박스가 `docs/index.md`의 적정 위치(B=Why, A=Who/What, D=What, C=How)와 `slides/slides.md`에 반영되어 있다
- [ ] 비개발자 톤(전문 용어 최소화)·SSoT 동기화(ADR-0002)와 충돌하지 않는다
- [ ] MkDocs / Slidev 빌드가 정상이다
- [ ] PR 머지 및 GitHub Pages 배포 확인 완료

---

## 부산물 (별건)

본 이슈 진행 중 처리:
- **ADR-0001 동기화 갱신** (2026-05-01 완료) — 진단 과정에서 ADR과 현행 docs 간 불일치 발견. 단계 표·Claude Code 입장·재설계 표현을 docs와 정합. 하단에 변경 이력 추가.

---

## 연관 문서

| 문서 | 역할 |
|------|------|
| [ADR-0001](../../../50_adr/active/adr-0001-practice-tool-scope-and-stage-model.md) | 실습 도구 범위·3단계 모델 — W3 박스의 단계 비교 메시지 기반 |
| [ADR-0002](../../../50_adr/active/adr-0002-publishing-structure-docs-ssot-slides-derivative.md) | `docs/` SSoT / `slides/` 파생 — 본문·슬라이드 동기화 원칙 |
| [ADR-0004](../../../50_adr/active/adr-0004-slides-theme-the-unnamed.md) | 슬라이드 테마·톤 — 발표 톤 정합성 |
| [`.ai/AI-CONTEXT.md`](../../../AI-CONTEXT.md) | 프로젝트 규칙 — 비개발자 톤·SSoT 위치 |
| [`.ai/40_domain/glossary.md`](../../../40_domain/glossary.md) | 도메인 용어 |
