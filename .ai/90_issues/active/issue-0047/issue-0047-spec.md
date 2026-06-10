# Issue #47 스펙 — 클로드 신규 모델 반영(Claude Fable 5)

> GitHub: https://github.com/scroogy-dev/ai-onboarding/issues/47
> 근거: [Anthropic 발표 — Claude Fable 5 & Mythos 5](https://www.anthropic.com/news/claude-fable-5-mythos-5)

## 목표 (Goal)

docs·slides의 Claude 모델 안내에 신규 모델 **Fable 5**를 반영하여, 교육 자료가 최신 모델 라인업과 정합하도록 한다.

---

## 배경 (발표문 핵심 사실)

- **Fable 5**: Mythos급 모델을 일반 사용자용으로 안전화한 버전. Opus **위**의 새 계층으로 **추가**되는 모델 — 기존 Opus·Sonnet·Haiku 라인업은 유지된다 (대체 아님).
- 포지셔닝: 고도의 추론, 장시간 자율 작업. 안전장치 작동 시 Opus 4.8로 자동 폴백.
- 가용성: 구독 플랜에는 2026-06-22까지 포함, 이후 사용 크레딧 필요.
- **Mythos 5**: 동일 기반 모델의 제한 접근 버전(정부·생물의학 연구자 한정) — 일반 임직원 교육 대상이 아님.

---

## 범위 (Scope)

**포함 (In)**

- `docs/intro.md` — 모델 비교 섹션(`#claude-models`)에 Fable 5 추가, 버전 안내 박스·사용량/한도 서술의 모델 열거 정합
- `docs/basics.md` — "제품·모델 고르기"의 모델 열거(Opus·Sonnet·Haiku) 갱신
- `slides/slides.md` — 모델 슬라이드 및 사용량 슬라이드의 짝 내용 정합 (docs 반영 후 파생)

**비포함 (Out)**

- Mythos 5 상세 안내 (제한 접근 모델 — 필요 시 한 줄 언급 수준까지만)
- 가격·API 상세 (비개발자 교육 범위 밖)
- `labs/` 실습 자료 변경

---

## 완료의 정의 (Definition of Done)

- [ ] docs의 모델 비교에 Fable 5가 포함되고, 기존 "추론 필요 vs 단순 지시 이행" 실용 축이 유지된다
- [ ] Fable 5가 기존 라인업의 **추가**(대체 아님)임이 서술에서 드러난다
- [ ] 모델을 열거하는 모든 위치(`docs/intro.md`, `docs/basics.md`, `slides/slides.md`)가 서로 정합한다
- [ ] slides는 docs 반영 내용의 파생으로 갱신된다 (ADR-0002 단방향 파생 원칙)
- [ ] 외부 docs 링크는 `/ko/` 경로를 사용한다
- [ ] `mkdocs build`와 Slidev 빌드가 깨지지 않는다
- [ ] 사용자 직접 점검 후 피드백 반영까지 완료된다

---

## 연관 문서

| 문서 | 역할 |
|------|------|
| `.ai/50_adr/active/adr-0002-publishing-structure-docs-ssot-slides-derivative.md` | docs SSoT → slides 파생 — 수정 순서·정합 기준 |
| `.ai/50_adr/active/adr-0001-practice-tool-scope-and-stage-model.md` | 실습 도구 Claude 단독 — 모델 안내의 전제 맥락 |
| `.ai/40_domain/glossary.md` | 도메인 용어 사전 — 모델 관련 용어 표기 확인 |
