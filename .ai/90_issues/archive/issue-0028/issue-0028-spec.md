# Issue #28 스펙 — 이론 부분 보강

> 원본 이슈: https://github.com/scroogy-dev/ai-onboarding/issues/28

## 목표 (Goal)

비개발자 학습자가 "AI를 어떻게/어디까지 활용할지" 스스로 판단할 수 있도록, 도입(이론) 섹션에 활용 모드·역량 강화 범위를 분별하는 개념을 보강한다.

---

## 범위 (Scope)

**포함 (In)**

- 후보 1: AI로 일을 직접 처리 vs AI로 도구(소프트웨어)를 만들어 처리 — 비교와 선택 기준
- 후보 2: 개인 / 조직 / 제품·서비스 역량 강화 3축 — 본 교육은 "개인 역량 강화"에 초점이라는 범위 명시
- 추가 후보 발굴 및 채택 여부 결정 (필요 시)
- 채택된 콘셉트의 `docs/` 반영 위치(기존 `intro.md` 보강 또는 신규 페이지)
- 슬라이드(`slides/`) 동기화

**비포함 (Out)**

- 실습 도구 범위 변경 (ADR-0001 유지)
- 운영 가이드·보안 가이드 변경
- 본질 메시지 프레임 변경 (ADR-0005 유지)

---

## 완료의 정의 (Definition of Done)

- [ ] 보강 후보 1·2 각각 채택/보류/통합 여부가 결정되어 plan에 반영됨
- [ ] 채택된 콘셉트가 `docs/` 내 적절한 위치에 작성되어 mkdocs 빌드가 깨지지 않음
- [ ] 도입 섹션 내 톤(비개발자 대상, 평이한 톤)·기존 메시지 프레임(ADR-0005)과 충돌 없음
- [ ] `mkdocs.yml`의 nav가 새 페이지 추가 시 갱신됨
- [ ] `slides/` 동기화가 필요하면 반영되었거나, 불필요한 경우 그 근거가 summary에 기록됨

---

## 연관 문서

| 문서 | 역할 |
|------|------|
| `.ai/50_adr/active/adr-0001-practice-tool-scope-and-stage-model.md` | AI 활용 3단계 모델(챗봇 → 프롬프트 재활용 → 에이전트). 후보 1(직접 처리 vs 도구 제작)이 3단계와 어떻게 맞물리는지 정합성 확인 |
| `.ai/50_adr/active/adr-0005-core-message-non-developers-make-software.md` | "비개발자도 소프트웨어를 만든다" 본질 메시지. 후보 1·2의 어휘·프레임이 본질 메시지와 일관되게 표현되는지 확인 |
| `.ai/50_adr/active/adr-0002-publishing-structure-docs-ssot-slides-derivative.md` | `docs/` SSoT, `slides/` 단방향 파생 원칙. 슬라이드 동기화 범위 판단 기준 |
| `docs/intro.md` | 현재 도입(이론) 페이지. 보강 위치 후보 |
