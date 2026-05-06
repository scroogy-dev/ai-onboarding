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

## Claude 사용량 확인 방법 — 확정

**1차 출처 (한국어, 응답 200 확인 — `curl -I -L`)**

| 페이지 | URL |
|--------|-----|
| 사용량 및 길이 제한은 어떻게 작동하나요 | <https://support.claude.com/ko/articles/11647753> |
| Claude Cowork 시작하기 | <https://support.claude.com/ko/articles/13345190> |
| 사용 한도 모범 사례 | <https://support.claude.com/ko/articles/9797557> |
| 유료 Claude 플랜의 추가 사용량 관리 | <https://support.claude.com/ko/articles/12429409> |
| Pro 또는 Max 플랜으로 Claude Code 사용하기 | <https://support.claude.com/ko/articles/11145838> |

> 짧은 형태(ID만)는 브라우저에서 정식 ko slug로 자동 리다이렉트되어 200 응답. 본문에서는 ID 형태를 사용해도 무방.

### 확정된 사실

- **확인 경로**: claude.ai 웹 / Claude Desktop 모두 **Settings → Usage**.
  - 화면 항목: **Current session** (5시간 세션 한도 사용량 + 남은 시간), **Weekly usage limit reset** (Opus 전용/그 외 모델 별도 초기화 시점).
- **Cowork 한도 소비**: Cowork getting-started 공식 문구 — *"Working on tasks with Cowork consumes more of your usage allocation than chatting with Claude."* (멀티 스텝·도구 호출이 채팅보다 토큰 비용 큼)
- **한도 초과 시 동작**: *"wait for it to reset, upgrade your plan, or purchase extra usage."* 즉 (1) 5시간 세션 초기화 대기, (2) 요금제 상향, (3) 추가 사용량 구매.
- **요금제 간 한도 합산**: Pro·Max 요금제에서는 claude.ai · Cowork · Claude Code가 **동일 사용량 풀**을 공유. (Cowork 가이드 + Claude Code with Pro/Max 안내)
- **Claude Code에서 확인**: 터미널 세션 안에서 `/usage`(Pro·Max 한도 사용량 + 토큰 비용 — 기존 `/cost`가 `/usage`로 통합되어 UI에 `usage (cost)`로 표기), `/extra-usage`(추가 사용량 관리) 명령 사용.

### 본 교육에 반영할 톤

- 청중 우선순위: claude.ai 웹·Cowork (필수) > Claude Code (옵션, 짧게 한 줄)
- 표 + admonition으로 시각 구분 (메모리 `feedback_preserve-intentional-emphasis.md`)
- 한도 초과 대처(다음 행동)는 1~2줄로 간결하게
- 외부 링크는 ko 경로 사용 (메모리 `feedback_korean-docs-url.md`)
- 위치: 「Claude Code — 3단계 보조 도구」와 「함께 읽어보세요」 사이의 H3 신설 (`{ #claude-usage }`) — 「준비사항」(`docs/index.md#preparation`)은 설치·가입 단계, 본 섹션은 운영 중 모니터링으로 역할 분리
