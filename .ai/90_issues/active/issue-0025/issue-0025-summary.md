# Issue #25 실행요약 — 도입부 보완 (Claude 모델 설명 추가 등)

> 스펙: [issue-0025-spec.md](./issue-0025-spec.md) | 계획: [issue-0025-plan.md](./issue-0025-plan.md)

## 다음 작업

> ▶️ 다음 작업: Task 8 — docs 로컬 빌드 검증
>
> `mkdocs build --strict` 최종 통과 확인 (Task 6 커밋 시 1회 통과한 상태 — 이후 슬라이드만 변경되어 추가 영향 없음, 마지막 회 검증).

---

## Task별 수행 결과

### Task 1: 보완 항목 사전 조사

- **결과**: 부분 완료 (Google 가이드 확정, Claude 모델·사용량은 후속 Task 직전 수행)
- **수행 내용 요약**:
  - 사용자 제공 1차 출처([Google Cloud Blog](https://cloud.google.com/blog/topics/developers-practitioners/choosing-antigravity-or-gemini-cli?hl=en))를 인용해 Antigravity(IDE·에이전트 매니저) vs Gemini CLI(터미널·headless) 포지션을 표로 정리.
  - 본 교육에 쓸 한 줄 초안과 Claude 모델/사용량 조사 TODO를 `.ai/99_workspace/notes/issue-0025-research.md`에 메모.
- **특이 사항**: Google 라인업은 시장 좌표 차원의 안내로만 사용(본 교육 실습 도구는 Anthropic 짝 — ADR-0001 유지).

---

### Task 2: 용어 안내 한 번 결합 — AI 챗봇 / AI 에이전트

- **결과**: 완료
- **수행 내용 요약**: `docs/intro.md`의 `## 생성형 AI 소개` 진입 직후에 `!!! note "용어 안내"` admonition을 추가해 «챗봇» = AI 챗봇, «에이전트» = AI 에이전트로 1회 결합 정의. 본문 표기는 그대로 유지.
- **특이 사항**: 초기 접근(전체 문서의 모든 「챗봇/에이전트」 정정)은 사용자 피드백으로 폐기. *"처음 언급될때 안내 한번이면 되지 않을까"* — 일괄 정정은 문장 호흡을 깨므로 한 번 결합 안내 방식으로 전환. 피드백을 메모리 `feedback_terminology-prefix-once.md`로 정착.

---

### Task 3: Google AI 코딩 에이전트 표기 — Gemini CLI · Antigravity 병기

- **결과**: 완료
- **수행 내용 요약**: `docs/intro.md`의 회사별 코딩 에이전트 표 Google 행을 **Antigravity · Gemini CLI** 동등 병기로 수정. 표 아래에 한 줄 보강 — Antigravity(시각적 IDE·에이전트 매니저) vs Gemini CLI(터미널·헤드리스). [Google 공식 비교 블로그](https://cloud.google.com/blog/topics/developers-practitioners/choosing-antigravity-or-gemini-cli?hl=en) 인용.
- **특이 사항**: Anthropic Cowork 보충 문단은 그대로 유지 (Why·교육 도구 선택 narrative 연결).

---

### Task 4: Claude 모델 비교 섹션 신설

- **결과**: 완료
- **수행 내용 요약**: `docs/intro.md`의 「기능 비교 — 한눈에」와 「claude.ai (Chat)」 사이에 H3 「모델 비교 — Opus · Sonnet · Haiku」 추가. 라인업×포지션×어울리는 상황 3컬럼 표 + 「어느 모델을 쓸까?」 admonition. 결정 축은 **추론 vs 지시 이행** — Opus(본인도 잘 모르는 주제 의논·깊은 추론), Sonnet(검색·요약·찾아바꾸기 같은 지시 이행, 일상 기본값), Haiku(짧은 답·반복). 사전 조사 결과를 `.ai/99_workspace/notes/issue-0025-research.md`에 정리.
- **특이 사항**: API 가격(MTok)·context window·deprecated 모델은 비개발자 청중에 부적합하여 본문에서 생략 — 본문은 시그니처(Opus/Sonnet/Haiku) 중심, 최신 사양은 [공식 모델 안내](https://docs.claude.com/ko/docs/about-claude/models/overview) 링크로 위임. 사용자 첨언("추론 vs 단순 지시 이행 축으로 선택했다, 본인도 잘 모르는 주제 의논엔 Opus")을 결정 가이드의 핵심 축으로 채택, 메모리 `feedback_model-choice-reasoning-vs-execution.md`로 정착. 외부 docs 링크는 사용자 지시에 따라 ko 경로 사용 — 메모리 `feedback_korean-docs-url.md`로 정착.

---

### Task 5: 사용량 확인 방법 안내 추가

- **결과**: 완료
- **수행 내용 요약**: `docs/intro.md`의 「Claude Code — 3단계 보조 도구」와 「함께 읽어보세요」 사이에 H3 「사용량 확인 방법」(`{ #claude-usage }`) 추가. **Settings → Usage** 경로 + 화면 항목(현재 세션 / 주간 한도 초기화) 표 + Cowork 한도 소비 주의 admonition + 한도 초과 시 다음 행동(세션 대기 / 요금제 상향 / 추가 사용량 구매) + Claude Code `/cost` 옵션 admonition. 외부 링크 4건 모두 ko 경로.
- **특이 사항**: 사용자 우선순위 명시 — *"클로드 웹이나 Cowork에서 확인하는 방법이 더 중요해(클로드 코드의 경우는 옵션)"*. 이를 반영해 Web/Cowork은 본문, Code는 별도 admonition 옵션 박스로 시각 구분. ko URL은 ID 짧은 형태가 정식 ko slug로 자동 리다이렉트(200) — `curl -I -L`로 5건 확인. 사전 조사 결과는 `.ai/99_workspace/notes/issue-0025-research.md`의 「Claude 사용량 확인 방법 — 확정」 섹션에 정리. claude.ai · Cowork · Claude Code 한도가 동일 풀에서 합산되는 점도 본문에 명시(Pro/Max 합산 운영 안내).

---

### Task 6: Claude 공식 문서·참고 링크 모음 섹션 신설

- **결과**: 완료
- **수행 내용 요약**: `docs/intro.md`의 「함께 읽어보세요」 위에 H2 「공식 문서·참고 자료」(`{ #official-references }`) 신설. 3그룹·9링크 — 시작하기(모델 안내, Cowork 시작, Code 안내), 자산화·확장(Projects, Skills, MCP), 운영·지원(요금제, Support 홈, Status). 모든 외부 URL은 한국어 경로(/ko/) 우선이며 `curl -L`로 200 응답 검증. `python3 -m mkdocs build --strict` 경고/오류 없이 통과.
- **특이 사항**: Skills 링크는 사용자 의견에 따라 docs(빌더 톤)에서 support.claude.com(엔드유저 톤)으로 교체 — Projects 링크와 같은 페밀리(support 안내 페이지)로 일관성 확보. MCP는 비개발자용 support 안내가 없어 docs 유지(개발자용 링크임을 한 줄로 명시). 요금제는 한국어 페이지 부재로 영문 fallback(`*(영문만 제공)*` 표기).

---

### Task 7: 슬라이드 동기화 — `slides/slides.md` 도입 섹션

- **결과**: 완료
- **수행 내용 요약**:
  - 「챗봇은 다 아는데...」 슬라이드: 표 헤더를 「**AI 챗봇** / **AI 코딩 에이전트**」로 한 번 결합 (메모리 `feedback_terminology-prefix-once.md`). Google 행 코딩 에이전트 칸을 「**Antigravity · Gemini CLI**」 동등 병기로 수정. 보충 한 줄(시각적 IDE vs 터미널·헤드리스)은 발화로 위임 — 스피커 노트에만 추가.
  - 「본 교육의 도구 — Claude 3종」 다음에 신설 슬라이드 「모델은 어떤 걸 쓸까 — Opus · Sonnet · Haiku」 추가. 「추론 vs 지시 이행」 축으로 압축, 사용량 화면 안내는 footer 한 줄(설정 → 사용량)로 처리하고 자세한 내용은 docs로 위임.
  - 「감사합니다」 마지막 슬라이드에 「더 알아보기 → docs/intro.md」 한 줄 추가 — 공식 문서 모음 섹션은 슬라이드에 옮기지 않고 docs 위임.
  - `npm --prefix slides run build` (Slidev) 경고/오류 없이 통과.
- **특이 사항**: 「챗봇 vs 에이전트」, 「본 교육의 도구」, 「기능 비교」 등 후속 슬라이드의 본문 표기는 일괄 정정하지 않고 그대로 둠 — 첫 슬라이드의 표 헤더에서 이미 한 번 결합 안내됨. 모델 슬라이드의 버전 번호(Opus 4.7 등)는 본문 생략하고 docs로 위임 — 라인업은 안정, 버전은 자주 갱신되므로.

---

### Task 8: docs 로컬 빌드 검증

- **결과**: 미시작
- **수행 내용 요약**:
- **특이 사항**:

---

### Task 9: 이슈 완료 처리

- **결과**: 미시작
- **수행 내용 요약**:
- **특이 사항**:
