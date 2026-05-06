---
name: issue-0025-progress-task6-added
created: 2026-05-06
related-issue: 25
related-files:
  - docs/intro.md
  - .ai/90_issues/active/issue-0025/issue-0025-spec.md
  - .ai/90_issues/active/issue-0025/issue-0025-plan.md
  - .ai/90_issues/active/issue-0025/issue-0025-summary.md
  - .ai/99_workspace/notes/issue-0025-research.md
tags: [issue-0025, intro, claude-models, references, scope-expansion]
---

# Issue #25 진행 스냅샷 — Task 1~4 완료, Task 6(공식 문서 모음) 신설

## 배경 (Why)

이슈 #25 「도입부 보완 (Claude 모델 설명 추가 등)」 진행 중. 챗봇/에이전트 표기 정확화, Google 코딩 에이전트 동등 병기, Claude 모델 비교까지 마친 시점에 사용자가 「Claude 공식 문서·참고할 만한 페이지를 모은 섹션도 하나 있으면 좋을 것 같아」를 요청 — 스펙·실행계획 확장 후 다음 세션에서 이어가야 함. 또한 Task 5(사용량 안내) 미수행 상태로 컨텍스트 종료.

## 논의 요약

### 완료된 Task (1~4)

- **Task 1 (부분 완료)**: 사전 조사. Google AI 코딩 에이전트(Antigravity vs Gemini CLI) 포지션을 사용자 제공 [Google Cloud Blog](https://cloud.google.com/blog/topics/developers-practitioners/choosing-antigravity-or-gemini-cli?hl=en)로 확정. Claude 모델 라인업(Opus 4.7 / Sonnet 4.6 / Haiku 4.5)도 [Anthropic 공식 모델 안내](https://docs.claude.com/ko/docs/about-claude/models/overview)에서 확정. **Claude 사용량 확인 경로 조사는 Task 5 진입 직전에 수행 예정 (미완)**.
- **Task 2**: 「용어 안내」 admonition 1회 결합 — 일괄 정정 회피. 사용자 의도 *"처음 언급될때 안내 한번이면 되지 않을까"*. `## 생성형 AI 소개` 진입 직후에 «챗봇» = AI 챗봇, «에이전트» = AI 에이전트로 결합 정의.
- **Task 3**: 표 Google 행에 **Antigravity · Gemini CLI** 동등 병기 + 한 줄 보강. Anthropic Cowork narrative가 앞(Why·교육 도구 선택), Google 보충은 「참고로」 prefix로 뒤.
- **Task 4**: H3 「모델 비교 — Opus · Sonnet · Haiku」 신설 (`{ #claude-models }`). 결정 축은 **추론 vs 지시 이행** — Opus(본인도 잘 모르는 주제 의논·깊은 추론), Sonnet(글 다듬기·검색·요약·찾아바꾸기 같은 지시 이행, 일상 기본값), Haiku(짧은 답·동일 패턴 반복). API 가격·context window·deprecated 모델은 비개발자 청중에 부적합하여 본문 생략 — 공식 docs 링크로 위임.

### 신설된 Task 6 (사용자 요청)

- **Task 6**: Claude 공식 문서·참고 링크 모음 섹션 신설 — 본 교육 이후 Claude 학습·운영 시 참고할 공식 자료 큐레이션.
- **그룹핑 후보**: 시작·사용 안내 / 자산화·확장 / 운영·지원
- **링크 후보** (사용자 확인 필요): 모델 안내, Cowork 시작하기, Code 안내, 요금제, Projects, Agent Skills, MCP, 공식 Support, status(상태) 페이지 등.
- **위치**: 「함께 읽어보세요」(내부 링크) 인근에 H2 또는 H3로 신설 — 외부/내부 구분이 분명하도록.
- **링크 정책**: 한국어 경로(/ko/) 우선 (메모리 `feedback_korean-docs-url.md`).
- **슬라이드 동기화**: Task 7에서 공식 문서 모음 섹션은 슬라이드에 옮기지 않고 docs 위임으로 결정.
- **Plan renumbering 완료**: 6 (NEW) → 7(슬라이드) → 8(빌드) → 9(완료).

### 이번 세션에서 정착된 피드백 메모리 3건

- `feedback_terminology-prefix-once.md` — 교육 문서에서 «AI ~» 등 prefix는 첫 등장에서 한 번만 결합, 본문은 짧은 형태 유지.
- `feedback_model-choice-reasoning-vs-execution.md` — Claude 모델 선택은 「품질/속도」가 아니라 「추론 vs 지시 이행」 축으로 설명. 사용자 첨언 *"경험상으로는 추론이냐 아니면 단순 지시의 이행(검색이나 찾아바꾸기 같은)이냐에 따라서 다르게 선택"*에 근거.
- `feedback_korean-docs-url.md` — 다국어 docs 사이트는 `/ko/` 우선, `/en/`은 한국어 페이지 부재 시 fallback. 사용자 명시 *"출처는 한국 페이지로 해줘 en 대신 ko면 될거야"*.

## 결정사항

- [x] 「용어 안내」는 일괄 정정 대신 한 번 결합 안내 admonition으로 해결.
- [x] Google 보충은 Anthropic Cowork narrative 뒤로 — 중요한 메시지가 앞.
- [x] 모델 선택 가이드 축은 **추론 vs 지시 이행** — 「품질/속도」 추상 트레이드오프 폐기.
- [x] Anthropic docs 링크는 한국어 경로(/ko/) 우선.
- [x] Task 6 (Claude 공식 문서·참고 링크 모음 섹션) 신규 추가, 후속 Task renumber.
- [x] 공식 문서 모음 섹션은 슬라이드에 옮기지 않고 docs로 위임 — Task 7 작업 내용에 명시.

## 미결 / 열린 질문

- [ ] **Task 5 vs Task 6 진행 순서** — 스펙·실행계획 변경 직후, 사용자에게 다음 진행 의사 묻기 직전에 컨텍스트 종료. 어느 Task부터 진행할지 사용자 확인 필요.
- [ ] **Task 6 후보 페이지 선별** — 위 후보(모델 안내, Cowork 시작, Code 안내, 요금제, Projects, Skills, MCP, Support, status) 중 어느 것을 포함할지 사용자 확인 필요. 추가 후보가 있을 수도 있음.
- [ ] **Task 1의 Claude 사용량 조사** — Task 5 진입 직전 Anthropic Support 「사용량 확인」/「요금제 한도」 문서로 사전 조사 미완.

## 다음 액션

- 다음 세션 시작 시 사용자에게 「Task 5(사용량 안내) 또는 Task 6(공식 문서 모음) 어느 쪽 먼저?」 확인.
- 결정되면 해당 Task의 사전 조사부터 수행:
  - Task 5 → Anthropic Support 사용량/요금제 한도 페이지 조사 (한국어 경로 우선).
  - Task 6 → 후보 페이지 사용자 선별 후 URL 검증(/ko/ 우선).
- Task 5·6 완료 후 Task 7(슬라이드 동기화) → Task 8(빌드 검증) → Task 9(완료 처리) 순.

## 참조

- **이슈**: <https://github.com/scroogy-dev/ai-onboarding/issues/25>
- **브랜치**: `issue-0025`
- **최신 커밋**: `c60ed57` — docs: 도입 페이지 Claude 모델 비교 섹션 신설 — 추론 vs 지시 이행 축 (Task 4) (#25)
- **이번 세션 커밋 이력**:
  - `c145b18` — chore: 이슈 #25 작업 디렉토리 셋업·Google 가이드 사전 조사(Task 1) (#25)
  - `0a18b26` — docs: 도입 페이지 용어 안내 admonition 추가 (Task 2) (#25)
  - `ef33e38` — docs: 도입 페이지 Google 코딩 에이전트 표기 — Antigravity·Gemini CLI 병기 (Task 3) (#25)
  - `c60ed57` — docs: 도입 페이지 Claude 모델 비교 섹션 신설 — 추론 vs 지시 이행 축 (Task 4) (#25)
- **사전 조사 노트**: `.ai/99_workspace/notes/issue-0025-research.md`
- **외부 출처**:
  - Google Cloud Blog — [Choosing Antigravity or Gemini CLI](https://cloud.google.com/blog/topics/developers-practitioners/choosing-antigravity-or-gemini-cli?hl=en)
  - Anthropic 공식 모델 안내 — <https://docs.claude.com/ko/docs/about-claude/models/overview>
- **미커밋 변경**: 스펙·실행계획·요약 갱신 (Task 6 추가 + renumber + summary URL ko 정정) — 다음 커밋 대상.
