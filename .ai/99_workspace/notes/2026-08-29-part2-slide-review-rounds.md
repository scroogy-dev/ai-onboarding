---
name: part2-slide-review-rounds
created: 2026-08-29
related-issue: 52
related-files:
  - slides/slides.md
  - docs/basics.md
  - docs/connect/index.md
  - docs/connect/connectors.md
  - docs/security-guide.md
  - docs/connect/mcp-servers.md
  - .ai/90_issues/active/issue-0052/issue-0052-plan.md
  - .ai/90_issues/active/issue-0052/issue-0052-spec.md
tags: [issue-0052, task6, slides, docs]
---

# 2부 슬라이드 사용자 점검 라운드 (issue #52 Task 6)

## 배경 (Why)

<details>
<summary>상세 펼치기</summary>

issue #52의 Task 0~5는 완료 상태이고 Task 6(사용자 점검·피드백 루프)이 진행 중이다.
MkDocs(`127.0.0.1:8000`)와 Slidev(`localhost:3030`) dev 서버를 띄워 사용자가 viewport로 직접 점검하고,
지정한 쪽만 AI가 분석·수정하는 방식으로 진행한다 (라인 수 기반 후보 스캔은 하지 않는다).

점검 도중 시각 문제(오버플로우·빈 공간)뿐 아니라 **서술의 논리 결함**이 여러 건 드러났고,
그 대부분이 `docs/`(SSoT)에서 온 것이라 docs를 먼저 고치고 슬라이드로 파생하는 순서로 처리했다.

</details>

## 논의 요약

<details>
<summary>상세 펼치기</summary>

### 처리한 라운드 (쪽 번호는 보정 후 기준, 덱 총 93장)

| 쪽 | 지적 | 처리 |
|----|------|------|
| 19 | 「두 끝점 사이」 공간 은유가 어색, 「반복 일관성 보장」이 결정적 동작 오해를 줌 | 기준을 직접 서술로. 2회차에 「비개발자도 만들 수 있고, 한 번 만들어 두면 반복 작업을 크게 줄여 줍니다」로 확정. `docs/basics.md` #three-forms 동반 수정 |
| 29 | ① 카드 하단이 빔 | 원인은 ② 카드 본문의 줄바꿈. 괄호를 「에이전트 스킬」로 줄여 한 줄에 맞춤. 중간에 「Skill·에이전트」로 줄였다가 에이전트가 만드는 대상으로 읽혀 되돌림 |
| 44 | 하단 참고 문단 나열이 읽기 어려움 | 네 줄로 분리(라벨 / claude.ai 수치 / Claude Code 수치 / 링크), `leading-relaxed` |
| 49 | 하단 보조 설명 불필요 | 제거. 2쪽 「오늘의 흐름」 라벨과 54쪽 범위 블록이 이미 담당. 2쪽 노트의 낡은 상호 참조도 정정 |
| 54 | 잘림 + 9·10쪽과 중복 | 유료 플랜 항목·개인 플랜 금지 경고 제거(백참조 없이). 잘림도 해소되어 분할 불필요 |
| 60 | 너무 꽉 참 | 두 장으로 분할. 60쪽(안심·경고 사실) + 61쪽 신설 「권한이 넓다면 이렇게 줄입니다」 |
| 63 | GHE 해석 모순, 이후 표현·기준까지 3회 재보정 | 아래 「연결 필요 조건」 참조 |
| 51 | 연결이 필요 없는 경우가 어디에도 없음 | 기준 블록 신설 |
| 71 | 도입 두 줄(「계정 등록으로 안 되는 자료는 공개되지 않은 자료」·「사실상 하나」)이 의미 없음 | 삭제(B안). 조건은 69쪽이 이미 말했고, 「공개되지 않은 자료」가 51쪽의 「공개된 자료」 뜻과 부딪혀 Jira·Confluence도 계정 등록이 안 되는 것으로 읽힘. 「사실상 하나」는 사실이 아니라 범위 선언. `docs/connect/mcp-servers.md` example 박스 첫 문단 동반 삭제 |

### 연결 필요 조건이 확정되기까지 (3회 수정)

1. **「도구가 아니라 연결이 문제」** (원본): 사내 GHE는 도구 선택이 곧 회사 자료 연결이라 이분법이 깨진다.
2. **「사내 자료라서 정책 확인이 먼저」** (1차 보정): 사내 자료인 것은 Jira·Confluence도 같아서, Atlassian은 정책 확인이 불필요하다는 뜻이 된다.
3. **「내 계정의 자료를 반복해서 쓸 때」** (2차 보정): 반복은 편익이지 필요 조건이 아니다.
4. **「내 계정이라야 되는 일」** (3차 보정): 공용 계정 케이스를 놓쳐 소유자를 특정하면 좁아진다.
5. **「로그인과 권한 확인이 필요한 일」** (확정): 인증·인가를 비개발자 어휘로 푼 것. 읽기·쓰기 양쪽을 한 기준으로 덮는다.

### 관련해서 뒤집힌 판단

`docs/connect/connectors.md`의 학생·일반인 박스가 「계정 없이 읽을 수 있어 문턱이 낮다」를
**연결을 권하는 근거**로 쓰고 있었다. 같은 사실은 오히려 **연결이 필요 없다**는 근거다.
공개 저장소는 웹으로 그대로 읽히므로 커넥터·MCP가 필요 없다.

</details>

## 결정사항

- [x] **연결이 필요한 조건**은 「로그인과 권한 확인이 필요한 일」. 로그인해야 볼 수 있는 자료를 읽는 것도, 공개된 자료를 고치거나 남기는 것도 여기 해당한다. 반복 사용은 편익이지 필요 조건이 아니다
- [x] **연결이 필요 없는 경우**는 누구나 볼 수 있게 공개된 자료, 그리고 한 번 쓰고 마는 자료. `docs/connect/index.md` #from-part1과 슬라이드 51쪽에 명문화
- [x] GitHub 학생·일반인 트랙 권고를 「관심 있다면 연결」에서 **「읽기만이면 연결 없이」**로 전환
- [x] GHE 보류 근거는 사내 자료 여부가 아니라 ① 연결할 이유가 적음 ② 계정 발급이 회사 판단
- [x] docs 수정은 spec 비포함 항목이나 **사용자 승인 예외**로 진행. 대상 5파일: `basics.md`·`connect/index.md`·`connect/connectors.md`·`connect/mcp-servers.md`·`security-guide.md`
- [x] 예외 기록은 건별로 spec에 적지 않고 **Task 6 종료 시 한 번에** 정리 (2026-08-29 사용자 확정)
- [x] 54쪽은 분할하지 않고 중복 제거로 처리하며 백참조 줄도 두지 않음
- [x] 2부 장수 31 → 32장. plan Task 2 게이트 `head -16` → `head -17`, Task 3 게이트 31장 → 32장으로 갱신 완료

## 미결 / 열린 질문

- [x] Task 6 종료(2026-08-29 사용자 선언) 시 `issue-0052-summary.md` Task 6 블록과 `issue-0052-spec.md` 전제 10을 일괄 갱신 완료 (docs 수정 예외 5파일 포함)
- [x] 64~93쪽은 71쪽만 지정·점검. 69·70쪽 mermaid 2장은 사용자가 별도 지적 없이 종료 선언
- [ ] 작업 트리의 미커밋 `.ai` 구조 갱신분(`10_rules/writing-principles.md`·`writing-principles-local.md`·`70_ledger/`·`AI-CONTEXT.md`·`context-loading.md`)을 이슈 커밋에 포함할지 별도로 뺄지 미정
- [ ] Task N 교차모델 audit은 사용자가 직접 수행 (구현 모델은 Anthropic, Claude Opus 5)

## 다음 액션

- Task 6 산출물 커밋 (`.ai` 구조 갱신분 포함 여부는 위 미결 참조)
- Task N: 사용자가 타벤더 모델로 `issue-audit` 수행 → 리포트를 issue-work `--response`로 검토

## 참조

<details>
<summary>상세 펼치기</summary>

- 이슈 문서: `.ai/90_issues/active/issue-0052/` (spec·plan·summary)
- 구성안: `.ai/99_workspace/issue-0052-storyboard.md`
- 1부 동기화 점검표: `.ai/99_workspace/issue-0052-part1-sync-check.md`
- 브랜치 `issue-0052`의 기존 커밋 4건: `bc1c437`·`96c59dc`·`7b1a262`·`f4561d3`
- 점검 기준 커밋(#50 병합): `0515ca3`
- 근거 ADR: ADR-0002(docs SSoT·slides 단방향 파생), ADR-0010(2부 범위·두 갈래 구도), ADR-0009(테마), ADR-0005(비개발자 경계)
- `[D]` 게이트 현황(2026-08-29 기준): 2부 앞 17장 · 32장 전수 · 실습 앞 배치 · 접합부 문자열 · U+2014 0건 · Slidev 빌드 모두 통과
- dev 서버: MkDocs `http://127.0.0.1:8000/`, Slidev `http://localhost:3030/`

</details>
