# Issue #25 스펙 — 도입부 보완 (Claude 모델 설명 추가 등)

> 출처: [GitHub Issue #25](https://github.com/scroogy-dev/ai-onboarding/issues/25)

## 목표 (Goal)

도입부(`docs/intro.md` 및 `slides/slides.md` 도입 섹션)의 정확성을 끌어올린다 — 용어 표기를 「AI 챗봇·AI 코딩 에이전트」로 통일하고, Google의 AI 코딩 에이전트 표기를 Gemini CLI·Antigravity 동등 병기로 바로잡으며, Claude 모델 비교 및 사용량 확인 방법을 새로 추가한다.

---

## 범위 (Scope)

**포함 (In)**

- `docs/intro.md`의 도입 콘텐츠 보완
  - 「챗봇 / 코딩 에이전트」 표기를 「**AI 챗봇 / AI 코딩 에이전트**」로 일관되게 정정
  - Google 행의 코딩 에이전트 칸에 **Gemini CLI**와 **Antigravity** 동등 병기 (둘이 다른 포지션이라는 점도 한 줄 보강)
  - **Claude 모델 비교** 섹션 신설 (Opus / Sonnet / Haiku 등 라인업의 비개발자 친화 비교 — 강점·비용·속도 톤)
  - **사용량 확인 방법** 안내 추가 (Pro 이상 요금제 기준에서 사용량/한도를 어디서 확인하는지 — 비개발자 사용자가 막히지 않도록)
- `slides/slides.md` 도입 섹션 동기화 — 위 docs 변경분 중 슬라이드에 반영해야 할 항목 일괄 정렬
- docs 로컬 빌드 통과 (`mkdocs build` 무경고/무오류)

**비포함 (Out)**

- 도입부 외 본문(`docs/index.md`, `operation-guide.md`, `security-guide.md`)의 구조 개편
- 3단계 모델 / Claude Cowork · Code 위치 정의 등 기존 메시지 프레임 변경 (ADR-0001/0002/0004/0005 유지)
- Slidev 테마·레이아웃 변경
- Confluence 동기화(별도 워크플로우)

---

## 완료의 정의 (Definition of Done)

- [ ] `docs/intro.md` 진입 직후 「용어 안내」가 1회 노출되어 «챗봇» = AI 챗봇, «에이전트» = AI 에이전트임을 결합 안내하고, 본문은 자연스러운 짧은 형태를 유지한다 (일괄 정정 회피 — 메모리 `feedback_terminology-prefix-once.md`)
- [ ] Google 회사 행의 코딩 에이전트 칸에 **Gemini CLI**와 **Antigravity** 가 함께 표기되어 있고, 둘의 위치 차이가 한 줄로 안내된다
- [ ] Claude 모델 라인업(Opus / Sonnet / Haiku 등)을 비교하는 섹션이 신설되어 있고, 비개발자가 어떤 상황에 어느 모델을 쓰면 되는지 한눈에 짚을 수 있다
- [ ] Claude 사용량 확인 방법(예: Pro 요금제 한도, claude.ai/Desktop의 사용량 화면 등)이 도입부 내 적절한 위치에 추가되었다
- [ ] `slides/slides.md` 도입 섹션이 위 변경과 정합한다 (표기·표·신설 섹션의 핵심 메시지 반영)
- [ ] `mkdocs build`가 경고/오류 없이 통과한다
- [ ] 한국어 톤과 비개발자 평이성 원칙(전문 용어 최소화)이 유지된다

---

## 연관 문서

| 문서 | 역할 |
|------|------|
| `.ai/50_adr/active/adr-0001-practice-tool-scope-and-stage-model.md` | 실습 도구 = Claude 단독, 3단계 모델의 근거 — 모델 비교/사용량 안내가 이 결정과 충돌하지 않도록 |
| `.ai/50_adr/active/adr-0004-slides-theme-the-unnamed.md` | 슬라이드 톤·자체 자산 최소화 원칙 — 슬라이드 동기화 시 변형 금지 자산 범위 확인 |
| `.ai/50_adr/active/adr-0005-core-message-non-developers-make-software.md` | "비개발자도 소프트웨어를 만든다" 메시지 프레임 — 모델 비교 등 신설 콘텐츠가 메시지 인지 부하를 키우지 않도록 |
| `docs/intro.md` | 보완 대상 SSoT |
| `slides/slides.md` | 도입 섹션 파생 표면 (ADR-0002에 따라 단방향 파생) |
| 메모리: `reference_claude-cowork-sandbox.md` | Cowork 보호 모델 공식 표현 — 모델/사용량 설명에 영향 |
| 메모리: `reference_anthropic-agent-skills.md` | Skills 표면별 지원 — Claude 라인업 비교 보강 시 참고 |
| [Google Cloud Blog — Choosing Antigravity or Gemini CLI](https://cloud.google.com/blog/topics/developers-practitioners/choosing-antigravity-or-gemini-cli?hl=en) | Google 공식 — Antigravity(IDE·에이전트 매니저) vs Gemini CLI(터미널·headless) 포지션 가이드. Task 3 본문 한 줄의 1차 근거 |
| `.ai/99_workspace/notes/issue-0025-research.md` | Task 1 사전 조사 노트 (Google 가이드 인용·요약 + Claude 모델/사용량 조사 메모) |
