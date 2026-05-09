# Issue #30 스펙 — 실습 자료 생성

> GitHub: https://github.com/scroogy-dev/2026-ai-edu/issues/30

## 목표 (Goal)

본 교육의 실습 자료(가이드 + 결과물 예시)가 거주할 **디렉토리 구조를 확정**하고, **실습 후보 목록을 step 단위로 선정**한 뒤 **각 step의 가이드 본문(README)까지 본 이슈에서 작성**한다. 동시에 **사이트(`docs/`)·슬라이드(`slides/`)에 실습 시리즈 안내 항목**을 추가한다.

---

## 범위 (Scope)

**포함 (In)**

- 실습 자료의 **위치 결정** — repo 루트 `labs/` (사이트 미노출, 본문 SSoT)
- **중첩 명명 규칙** — `step<NN>-<topic>/stage<N>-<topic>-<설명>/` (주제 단위 step 묶음 + 내부 stage 진행)
- ADR-0001의 **3단계 모델**에 매핑한 **실습 후보 목록 선정** (step 단위)
- **모든 step(step01~04)의 디렉토리·파일 골격** 생성
- **각 step·stage의 가이드 본문(README) 작성** — step01(stage 1·2·3) / step02(stage 1·2) / step03(stage 1·2) / step04(stage 1·2·3)
- **`docs/labs.md` 인덱스 페이지** 추가 — 실습 시리즈 개요·GitHub 링크·zip 다운로드 안내
- **`mkdocs.yml` nav** 갱신 — 실습 항목 등록
- **`slides/`에 실습 시리즈 섹션** 추가 — 시리즈 소개 + step별 안내 (Slidev, ADR-0002 단방향 파생)
- 위 결정에 따른 **ADR 작성** (실습 자료 구조·명명 규칙·SSoT 정책 결정 기록)

**비포함 (Out)**

- 사내용 실습 자료 — 회사 내부 repo로 분리(이미 결정됨)
- stage 디렉토리 안의 **실행 가능한 산출물**(동작하는 SKILL.md, 검증 스크립트, 실제 HTML 템플릿 파일 등) 구현 — 가이드 본문은 본 이슈, 동작물은 후속 이슈
- 슬라이드 본문 콘텐츠(상세 설명) — 시리즈 소개 슬라이드만, 각 lab의 상세 슬라이드는 후속 이슈

---

## 완료의 정의 (Definition of Done)

- [ ] 실습 자료의 **위치**(루트 `labs/` SSoT)와 **명명 규칙**(`step<NN>-<topic>/stage<N>-...` 중첩) 결정이 ADR로 기록되었다
- [ ] step 단위 **실습 후보 목록**이 작성되어 본 이슈 디렉토리 또는 ADR에 남았다
- [ ] 모든 step(step01~04)의 디렉토리·파일 골격이 생성되었다
- [ ] 각 step·stage의 가이드 본문(README)이 작성되었다 — step01(1·2·3)·step02(1·2)·step03(1·2)·step04(1·2·3)
- [ ] **각 step의 동작하는 SKILL과 stage 3 산출 자산(템플릿·예시 HTML)이 동봉되었다** — step01 weather-html-report·step02 file-classifier·step03 voca-quiz·step04 quiz-recognize/wrong-answer-note/wrong-answer-html-report
- [ ] **stage 3 자산은 "슬롯 템플릿 + 채워진 예시" 패턴으로 일관되게 동봉되었다** — step01(weather-template + example-output) / step04(wrong-answer-note-template + classical)
- [ ] `docs/labs.md` 인덱스 페이지가 작성되어 사이트에 노출되었다
- [ ] `mkdocs.yml` nav에 실습 항목이 등록되었다
- [ ] `slides/`에 실습 시리즈 소개 섹션이 추가되어 docs와 동기화되었다 (ADR-0002 단방향 파생 원칙)
- [ ] AI-CONTEXT.md 프로젝트 규칙(`docs/` 하위 영문 소문자·하이픈)과의 정합이 ADR에서 명시적으로 다뤄졌다
- [ ] **시리즈 진행 원칙("프롬프트로만 진행")이 labs/README·docs/labs에 명시되었다**
- [ ] **사용자 수작업 최종 점검 Task가 plan에 포함되어 실행되었다** — 사이트/슬라이드 빌드·HTML 톤·README 흐름·Skill 동작 등 자동 검증 어려운 항목

---

## 연관 문서

| 문서 | 역할 |
|------|------|
| [ADR-0001](../../../50_adr/active/adr-0001-practice-tool-scope-and-stage-model.md) | 실습 도구 범위(Claude 단독)·3단계 학습 사다리 — 실습 매핑의 상위 결정 |
| [ADR-0002](../../../50_adr/active/adr-0002-publishing-structure-docs-ssot-slides-derivative.md) | `docs/` SSoT·`slides/` 단방향 파생 — 본 이슈의 docs/slides 동기화 원칙 |
| [AI-CONTEXT.md](../../../AI-CONTEXT.md) | 프로젝트 규칙(영문 소문자·하이픈, nav는 mkdocs.yml에서 명시 제어) — 명명 규칙 정합 검토 대상 |
