# Issue #25 사전 조사 노트

> Task 1(사전 조사) 산출물. 후속 Task에서 인용.

---

## Google AI 코딩 에이전트 — Antigravity vs Gemini CLI

**1차 출처**: [Choosing Antigravity or Gemini CLI — Google Cloud Blog](https://cloud.google.com/blog/topics/developers-practitioners/choosing-antigravity-or-gemini-cli?hl=en)

### Google 공식 한 줄 가이드 (인용)

> "**Antigravity** if you want a complete agent manager and IDE experience"
>
> "**Gemini CLI** if you want a terminal CLI or need headless execution"

### 포지셔닝 요약

| 항목 | Antigravity | Gemini CLI |
|------|-------------|------------|
| 표면 | 시각적 IDE + Agent Manager (대시보드형) | 터미널 CLI |
| 타깃 | 누구나 — 그래픽 인터페이스 선호자 | 터미널 친화 기술자, 자동화/CI 사용자 |
| 강점 | 멀티 에이전트 관리, 통합 브라우저 시각 피드백, 가이드형 spec-driven 워크플로우 | Headless 모드(파이핑·CI/CD·자동화 스크립트), 로컬 도구 직접 호출(`gh`, `gcloud`) |
| 설치 | 그래픽 설치(전제 없음) | `npm i -g @google/gemini-cli` (Node 필요) |
| 공통 | Open VSX/MCP/Agent Skills 지원, 무료 티어 제공 | (좌동) |

### 본 교육에 쓸 한 줄(초안)

> Google은 AI 코딩 에이전트를 두 갈래로 제공합니다 — **Antigravity**(시각적 IDE·에이전트 매니저)와 **Gemini CLI**(터미널 CLI·헤드리스 자동화). 비개발자에게 친숙한 쪽은 Antigravity 계열, 자동화 친화는 CLI 쪽입니다.

(본 교육은 Anthropic 짝을 사용하므로 Google 라인업 자체는 시장 좌표 차원의 안내로만 사용)

---

## Claude 모델 라인업 — 확정

**1차 출처**: [Anthropic 공식 모델 안내](https://docs.claude.com/en/docs/about-claude/models/overview) (조사 시점 기준)

### 현행 라인업

| 라인업 | 최신 버전 | Anthropic 한 줄 설명 (인용) | 속도 | API 가격 (input/output MTok) | Context |
|--------|-----------|-----------------------------|------|--------------------------------|---------|
| **Opus** | 4.7 | "Our most capable generally available model for complex reasoning and agentic coding" | Moderate | $5 / $25 | 1M tokens |
| **Sonnet** | 4.6 | "The best combination of speed and intelligence" | Fast | $3 / $15 | 1M tokens |
| **Haiku** | 4.5 | "The fastest model with near-frontier intelligence" | Fastest | $1 / $5 | 200k tokens |

### Anthropic 공식 가이드 (인용)

> "If you're unsure which model to use, consider starting with **Claude Opus 4.7** for the most complex tasks. It is our most capable generally available model, with a step-change improvement in agentic coding over Claude Opus 4.6."

### 본 교육에 반영할 톤

- 비개발자 청중 — API 가격(MTok)·context window·deprecated 모델은 본문에서 생략
- 라인업 시그니처(Opus/Sonnet/Haiku)는 안정, 버전 번호는 자주 갱신 → 본문은 시그니처 중심, 최신 사양은 공식 docs 링크
- 기본값 권장: Sonnet (속도·지능 균형, 일상 업무 베이스). 복잡 작업 → Opus, 속도/반복 → Haiku
- Anthropic 공식 가이드 인용은 한 줄 톤으로 자연스럽게 포함

---

## Claude 사용량 확인 방법 — (조사 예정)

- 출처 후보: Anthropic Support 「사용량 확인」/「요금제 한도」 문서, claude.ai 설정 화면
- 정리할 항목: claude.ai에서 사용량 확인 경로, Pro/Max 한도 차이, 한도 초과 시 동작과 다음 행동
