---
name: docs-slides-overall-review
created: 2026-08-30
related-issue: 55 (A: docs 정리) · 56 (B: slides 동기화, #55 후속)
related-files:
  - docs/index.md
  - docs/basics.md
  - docs/intro.md
  - docs/labs.md
  - docs/connect/index.md
  - docs/connect/connectors.md
  - docs/connect/mcp-servers.md
  - docs/security-guide.md
  - docs/operation-guide.md
  - slides/slides.md
  - labs/README.md
  - labs/step03-voca-quiz/README.md
  - .ai/50_adr/active/adr-0002-publishing-structure-docs-ssot-slides-derivative.md
  - .ai/50_adr/active/adr-0005-core-message-non-developers-make-software.md
  - .ai/50_adr/active/adr-0009-unified-ui-theme-claude-style.md
tags: [docs, slides, review, dedup, admonition, sync, concise]
---

# docs·slides 전체 점검 ― 중복·카드 박스·정합·간결화

> 2026-08-30 논의 스냅샷. 이슈 2개(A: docs 정리 #55, B: slides 전수 동기화 #56)의 사전 분석과 결정을 담는다. 이슈 spec의 근거 자료로 쓴다.
> 기준 커밋: `3e57651` (main, #52 정리 직후). 아래 줄 번호는 모두 이 커밋 기준이다.
> 부록 B-2의 드리프트 중 6건(slides 677·705·922·1060·1764·2840행, docs/labs.md 42행)은 원문을 직접 대조해 확인했다. 나머지 항목은 분석 결과 그대로이며 이슈 Task 0에서 재확인한다.

## 배경 (Why)

<details>
<summary>상세 펼치기</summary>

- 이슈 #52에서 2부(도구·데이터 연결) 슬라이드를 신설하는 과정에서 네 가지 문제를 체감했다.
  1. 같은 내용이 여러 페이지에 반복된다.
  2. docs에 카드 박스(admonition)가 지나치게 많다.
  3. docs와 slides의 내용이 어긋난다 (슬라이드 특성상 요약은 허용).
  4. 설명이 길어 이해하기 어렵다.
- 실측 (기준 커밋):
  - docs 9개 파일 1,760줄·15,000단어. slides 3,206줄·16,000단어·93장. 파생물인 슬라이드가 원본보다 크다.
  - admonition 104개, 유형 9종 (info 22 · note 20 · tip 19 · warning 18 · abstract 9 · example 8 · success 5 · quote 2 · failure 1).
  - 파일별: `index.md` 26개/326줄, `mcp-servers.md` 22개/313줄, `connectors.md` 15개/193줄, `basics.md` 12개/153줄, `intro.md` 10개/219줄, `connect/index.md` 9개/99줄, `security-guide.md` 5개/209줄, `operation-guide.md` 3개/192줄, `labs.md` 2개/59줄.
  - 카드 안 본문 비율: `index.md` 32%, `basics.md` 28%, `mcp-servers.md` 27%, `connectors.md` 21%, `connect/index.md` 19%.
  - 카드 연속 배치(카드 바로 뒤에 카드): `index.md` 12곳, `mcp-servers.md` 11곳, `connectors.md` 5곳, `basics.md` 3곳, `connect/index.md` 3곳, `intro.md` 2곳, `labs.md` 1곳. 총 37곳.
  - 같은 라벨에 다른 유형: `intro.md` 「본 교육에서의 위치」가 abstract(109행)·tip(120행)·note(135행).
  - 슬라이드 색 카드 145개, 발표자 노트 257줄 (참고 수치, 이번 결정 범위에 포함할지는 미결).
- 선행 규칙:
  - ADR-0002: `docs/`가 SSoT, `slides/`는 단방향 파생. 동기화는 마일스톤 단위. 두 표면이 다르면 ADR이 정답.
  - ADR-0005: 본질 메시지는 핵심 3곳에만 박는다 (인지 부하 절제). 결정 룰 박스를 docs에도 둔다고 정했다.
  - ADR-0009: admonition의 의미·구분을 보존한다.
  - #52 Task 5의 1부 점검은 #50 커밋 축의 좁은 점검이었다. docs↔slides 전수 대조는 이번이 처음이다.

</details>

## 논의 요약

<details>
<summary>상세 펼치기</summary>

### 네 축에 대한 판단

- **중복**: 줄 수(상위 8개 테마 약 110줄, 전체의 6%)보다 같은 주제가 7~8개 파일에 흩어져 있어 한 곳을 고치면 나머지가 어긋나는 구조가 문제다. 실제로 중복이 낳은 불일치가 11건 나왔다 (부록 A-2). 이미 잘 관리되는 패턴이 있다. 데이터/뷰 분리·컨텍스트 관리·모델+하네스는 홈 1곳에만 본문이 있고 나머지는 한 줄 링크다. 이 패턴을 규칙으로 삼는다.
- **카드 박스**: 본문의 3분의 1이 카드 안에 있어 강조가 아니라 본문 서식이 되었다. 그래서 이전에 정한 「의도적 강조는 유지」 기준이 작동하지 않는다. 기준안은 아래와 같다.
  - 남김: 경고·금지 / 본문 흐름 밖의 부연(「지나쳐도 됩니다」 성격) / ADR-0005가 정한 강조 3곳 / 의도적 대비 쌍(요구·요구하지 않음)
  - 풀어냄: 절 본문 자체가 카드인 곳(메타 원칙 ①~⑤, 원격/로컬 2카드, 「본 교육에서의 위치」) / 정의·개념 설명 / 순서 절차
  - 유형 9종 → 4종 (warning 경고·금지 / tip 권장·요령 / note 부연·예외 / example 예시). abstract·info·success·failure·quote는 폐지
  - 이 기준이면 대략 절반 아래(40~50개) 예상
- **docs↔slides**: 전수 대조 결과 드리프트 9건, docs 쪽이 낡은 2건, 슬라이드에 없는 docs 절 9건, 용어 어긋남 9건, 허용 가능한 요약 생략 12건 (부록 B). 판정 기준은 세 가지면 충분하다. ① 요약·생략 허용 ② 다른 말 금지 ③ 슬라이드에만 있는 내용은 docs 편입 또는 삭제. docs 정리가 끝난 뒤에 수행한다. 먼저 맞추면 docs 정리 후 다시 맞춰야 한다.
- **간결화**: 중복·카드 정리는 정보를 보존하며 형태만 바꾸지만 간결화는 내용을 지운다. 기준 없이 시작하면 근거·caveat까지 잘려 「내용 있는 caveat는 유지」와 부딪힌다. 기준안: 학습자의 행동을 바꾸지 않는 배경·근거는 삭제, 근거가 필요하면 접기(`???`)로. 페이지 단위 초안 → 사용자 점검 → 피드백 루프로 진행한다.

### 이슈 구성 근거

- 순서: 불일치 확정 → docs 정리(페이지마다 중복·카드·간결화를 한 번에, 한 페이지를 세 번 열지 않음) → slides 동기화. 역순이면 슬라이드를 두 번 맞춘다.
- 둘로 나누는 이유: B는 A에 막혀 있다. 검증 방법이 다르다(docs는 본문 점검, slides는 사용자 viewport 확인). 한 이슈로 묶으면 9페이지 × 점검 루프 + 93장이라 audit 회차가 감당되지 않는다.
- docs가 낡은 2건(`labs.md` step03 학습 포인트, 결정 룰 부재)은 「docs가 정답」 원칙으로 못 고친다. docs를 먼저 손본다 (이슈 A).

</details>

## 결정사항

- [x] 범위는 전부 포함한다. docs 9개 파일 + `operation-guide.md`(강사용) + `labs/` README. 슬라이드는 이슈 B에서 다룬다.
- [x] 삭제를 허용한다. 정보를 홈으로 옮기고 링크로 대체하는 데 그치지 않고, 필요 없는 내용은 실제로 지운다.
- [x] 삭제·카드 정리·간결화 결과는 페이지 단위로 사용자가 확인한 뒤 명시적으로 승인한다. 승인 전에 다음 페이지로 넘어가지 않는다.
- [x] 이슈는 2개로 간다. A(docs 정리) → B(slides 전수 동기화). B는 A 완료 후 착수한다.
- [x] 이슈 A의 작업 순서: Task 0 불일치·기준 확정 → 페이지별 처리(초안 → 사용자 점검 → 승인) → 재실행 가능한 게이트(카드 수·유형 목록·중복 문장 검색).

## 미결 / 열린 질문

이슈 A Task 0에서 확정할 것:

- [ ] 「주제마다 홈 1곳, 다른 곳은 한 줄 링크」 규칙 채택 여부와 주제별 홈 배정표 (제안: 부록 A-1의 홈 열)
- [ ] 카드 기준안·유형 4종 통일 채택 여부. 수치 목표(절반 이하)를 같이 둘지 여부
- [ ] 삭제 기준 문구(「학습자의 행동을 바꾸지 않는 배경·근거는 삭제, 근거가 필요하면 접기」) 채택 여부
- [ ] 사용자 판단이 필요한 불일치 (부록 A-2·B-4 참조)
  1. 유료 플랜이 필요한 이유: Cowork·Code 때문(`index.md` 58행) vs 세 제품 모두(`intro.md` 53행)
  2. 운영 완료율 목표: 80%(`operation-guide.md` 104행) vs 60%(162행)
  3. step01이 데이터/뷰 분리 사례인지 (`index.md` 254행 예 / `labs.md` 40행 아니오)
  4. 결과물 검토 강도: 영향 범위 비례(`index.md` 264행) vs 무조건(`security-guide.md` 34행)
  5. 2단계 대표 도구: Agent Skills(`index.md`) vs Claude Projects(`operation-guide.md` 44행)
  6. Claude Desktop 필요 시점: stage 3 한정(`labs.md` 59행) vs Cowork·Code·로컬 연결(`index.md` 71행, `intro.md` 118행, `mcp-servers.md` 187~203행)
  7. 재사용 자산 명칭: `에이전트 스킬`·`Agent Skills`·`Skill` 3종 → 하나로
  8. 플랜 링크: `claude.com/pricing` vs `anthropic.com/pricing` → 하나로. 모델 문서 링크도 `platform.claude.com` vs `docs.claude.com` 두 종류
  9. 기능 비교표 claude.ai 열의 로컬 표기: △(`intro.md` 68행) vs 본문은 Desktop 전용이라 ✗가 맞음(76행)
- [ ] 결정 룰(slides 853행)의 docs 편입. ADR-0005 결정 2는 docs에도 두라고 했으나 docs에 「결정 룰」이 없다 (검색 0건)

이슈 B Task 0에서 확정할 것:

- [ ] 보안 정리표: 슬라이드(3123~3132행)에 외부 연결 5행을 추가할지, 표 제목을 1부로 한정할지
- [ ] 슬라이드에 없는 docs 절 9건(부록 B-3) 중 편입할 것
- [ ] 슬라이드 색 카드(145개) 정리를 B 범위에 넣을지

## 다음 액션

- 이슈 등록 완료 (2026-08-30): A = #55, B = #56. 두 이슈 본문에 이 노트 경로를 적었다.
- 다음 세션: `/issue-work`로 #55 spec을 쓸 때 이 노트의 결정사항·미결·부록을 근거로 쓴다. 미결 항목은 Task 0 확정 목록으로 올린다.
- #56은 #55 병합 후 착수한다. 부록 B-1 매핑표를 spec 근거로 쓴다. 착수 시 줄 번호를 A 병합 후 커밋 기준으로 다시 잡는다.

## 참조

<details>
<summary>상세 펼치기</summary>

- 기준 커밋 `3e57651` (main). 직전 이슈 #52 (PR #54), #50 (PR #53)
- `.ai/90_issues/archive/issue-0052/issue-0052-part1-sync-check.md` (좁은 점검 선례. 판정 「반영/해당 없음/누락」 형식)
- `.ai/50_adr/active/adr-0002-publishing-structure-docs-ssot-slides-derivative.md` (docs SSoT, 단방향 파생)
- `.ai/50_adr/active/adr-0005-core-message-non-developers-make-software.md` (메시지 3곳 한정, 결정 룰 박스)
- `.ai/50_adr/active/adr-0009-unified-ui-theme-claude-style.md` (admonition 의미·구분 보존)
- `.ai/70_ledger/active/K-0001-connector-custom-label-omitted.md` (`mcp-servers.md` `#vs-connector`·`#choosing` 손볼 때 재검토 조건)

</details>

---

## 부록 A ― docs 중복 분석

### A-1. 중복 테마 15건

| # | 테마 | 등장 위치 (파일 · 절 · 줄) | 홈 후보 | 낭비(줄) | 조치안 |
|---|------|---------------------------|---------|---------|--------|
| D1 | 유료 플랜 필수 · 개인 플랜 금지 · 준비물 | `index.md` 준비사항 53~81 / `intro.md` 53 (링크형) / `labs.md` 사전 준비 54~59 / `connect/index.md` 시작하기 전에 73~76 / `connectors.md` 회사 환경 185 / `security-guide.md` 86·165 / `operation-guide.md` 교육 전 58~60 | `index.md#preparation` | 18~20 | `labs.md` 57~59, `connect/index.md` 74, `operation-guide.md` 59~60을 링크로 |
| D2 | AI 결과물 검토·이해 의무 / 틀릴 수 있다 | `index.md` 메타 원칙 ③ 256~266 / `labs.md` 진행 원칙 ② 24~30 (259~264와 문장 단위 복붙) / `basics.md` 오해 박스 72~81, 비결정성 41·99~101 / `security-guide.md` 32~38 / `connect/index.md` 42 (링크형) / `connectors.md` 117~120 / `mcp-servers.md` 275~278 / `operation-guide.md` 72 | `index.md#meta-principles` ③ | 15~18 | `labs.md` 27~30 → 링크. connectors·mcp-servers 박스는 「연결 이후 더 중요」 각도가 있어 유지 |
| D3 | 권한 최소화 · 「내 권한 그대로」 · 승인 범위 | `security-guide.md` 134~143 (원칙) / `connectors.md` 승인 화면 79~93 (화면) / `connectors.md` 122·179 / `connect/index.md` 78~79 / `mcp-servers.md` 토큰 213~222 / `mcp-servers.md` 245~246 / `security-guide.md` 119~122 | 원칙은 security-guide, 화면은 connectors (이원화 자체는 타당하나 본문 3중 재서술) | 14~16 | `security-guide.md` 138~140 ≈ `connectors.md` 81~88 → 한쪽을 링크로. `mcp-servers.md` 218~220 중 「기간」만 고유 |
| D4 | 커넥터 vs MCP 서버 비교표 · 선택 순서 | `connect/index.md` 표 53~61 / `mcp-servers.md` 표 22~29 / `connectors.md` 5·191 / `mcp-servers.md` 309~310 | `mcp-servers.md#vs-connector` (검토 표시 행이 있어 더 완전) | 12~14 | `connect/index.md` 표를 2행으로 축약. 「목록에 있으면 커넥터, 없을 때만 MCP」 4곳 → 2곳 |
| D5 | 3단계 모델 · 「3단계 ≠ 결과물 세 형태」 | `index.md` 129~172 / `index.md` 172 인용문 / `basics.md` 87~97 (172와 같은 논지) / `basics.md` 9·32 / `intro.md` 표 45~51 + 제품별 110·121·136 (파일 내부 반복) / `connect/index.md` 9·13~16 / `operation-guide.md` 21·44 / `labs.md` 36 | `index.md#stage-model` | 12~14 | `index.md` 172 ↔ `basics.md` 87~97 통합. `intro.md` 제품별 반복 정리 |
| D6 | 실습 결과물 예시 · step 매핑 | `index.md` 어떤 결과물 174~179 / `index.md` 대상별 실행 계획 303~318 (같은 예시 재서술) / `labs.md` 시리즈 구성 38~43 | `labs.md` 시리즈 구성 | 10~12 | `index.md` 174~179 표 삭제 또는 303~318 삭제 |
| D7 | 원격 vs 로컬 (설정을 어디에 두느냐) | `intro.md` 73~83 / `mcp-servers.md` 40~68 | `mcp-servers.md#remote-vs-local` | 10~11 | `intro.md` 78~82 삭제, 83 링크만 유지 |
| D8 | 계획 → 실행 분리 | `index.md` 실습 접근법 + 왜 계획부터 185~206 / `index.md` 메타 원칙 ① 228~244 / `index.md` 276 / `basics.md` 57 (링크형) | `index.md` 메타 원칙 ① | 8~10 | 199~206을 ①로 흡수 |
| D9 | 연결 점검·해제 3개 불릿 | `connectors.md` 159~167 / `security-guide.md` 145~151 (거의 verbatim) / `mcp-servers.md` 273 (링크형) | `connectors.md#manage-disconnect` | 7 | security-guide 쪽을 링크로 |
| D10 | 회사 관리자 정책 · 「목록에 없으면 권한 문제, 담당 부서 문의」 | `connect/index.md` 76 / `connectors.md` 173~176 / `mcp-servers.md` 177~180·287 / `security-guide.md` 166 | `connectors.md#enterprise` | 7~8 | 5곳 → 홈 1곳 + 링크 |
| D11 | 「연결이 필요해지는 것은 로그인·권한 확인이 필요한 일」 | `connect/index.md` 20 / `connectors.md` 133·142 / `security-guide.md` 175 | `connect/index.md` | 4 | 4회 → 1~2회 |
| D12 | GitHub Enterprise 라이선스·로그인 문단 | `connectors.md` 140 / `security-guide.md` 176 (거의 verbatim) | `connectors.md#github` | 3 | security-guide 쪽을 링크로 |
| D13 | 절대 입력하면 안 되는 정보 (파일 내부 3중) | `security-guide.md` 표 23~30 / 학생 트랙 90~103 / 정리 표 197~200 / 126~132. 외부는 `mcp-servers.md` 224~225 (링크형)만 | `security-guide.md#never-input` | 10 | 학생 트랙 90~103은 톤(예시)이 달라 교육 가치는 있으나 표와 1:1 |
| D14 | 커넥터/MCP 토글을 켜야 대화에서 쓰인다 | `connectors.md` 51·60·87 (파일 내부 3회) / `mcp-servers.md` 169·286 | `connectors.md` 연결하는 순서 5단계 | 5 | 파일 내부 3회 → 1회 |
| D15 | 챗봇 vs 에이전트 정의 | `basics.md` 7~32 (완전) / `intro.md` 10~11 (링크형) / `intro.md` 116 (`basics.md` 21과 동일 문구) / `index.md` 136·151~153 | `basics.md#chatbot-vs-agent` | 2~3 | 관리 양호 |

잘 관리되어 중복이 거의 없는 주제 (규칙의 모범): 데이터/뷰 분리(`index.md` 246~254 단독), 컨텍스트 관리(`index.md` 268~289 단독), 모델+하네스(`basics.md` 36~81 단독. `connectors.md` 13~18은 「커넥터 = 그 칸의 실물」로 각도가 다름), 프롬프트 주입·검토 표시(`mcp-servers.md` 단독), 트랙 구분(`index.md` 11~16 홈).

### A-2. 중복이 낳은 불일치 11건

| # | 주제 | 한쪽 | 다른 쪽 | 판단 |
|---|------|------|---------|------|
| X1 | 2단계 대표 도구 | `index.md` 152 「Agent Skills 기초, Claude Projects」, 309·314 Agent Skills | `operation-guide.md` 44 「2단계(Claude Projects) 실습」 | 사용자 판단. 강사가 Projects로 준비할 위험 |
| X2 | 유료 플랜 필요 이유 | `index.md` 58 「Cowork·Code 사용을 위해」 | `intro.md` 53 「세 제품 모두 유료 플랜 필요」 | 사용자 판단. claude.ai 무료 티어가 있어 intro가 과잉 진술로 보임 |
| X3 | 결과물 검토 강도 | `index.md` 264 「검토 깊이는 영향 범위에 비례」, `labs.md` 30 동일 | `security-guide.md` 34·37 무조건 규칙 | 사용자 판단. 보안 문서 성격상 의도일 수 있으나 단서 한 줄 필요 |
| X4 | 커넥터 연결 절차 단계 수 | `connect/index.md` 56 4단계 (서비스 선택 → 로그인 → 권한 확인 → 승인) | `connectors.md` 56~60 5단계 (5. 대화에서 켜기) | 5단계가 맞음. 「왜 안 되지」 1순위 원인(`mcp-servers.md` 286)이 빠짐 |
| X5 | 커넥터 vs MCP 비교표 행 구성 | `connect/index.md` 53~59: 무엇인가 / 연결 절차 / 폭 / 내가 판단할 것 | `mcp-servers.md` 22~27: 어떻게 연결하나 / 누가 확인했나 / 폭 / 내 판단의 몫 | D4 조치로 해소 |
| X6 | 플랜 비교 링크 | `index.md` 63 `claude.com/pricing` 「Claude 플랜」 | `intro.md` 207 `anthropic.com/pricing` 「Anthropic 플랜」. 모델 문서도 `intro.md` 99·101 `platform.claude.com` vs 194 `docs.claude.com` | 사용자 판단 (하나로) |
| X7 | Claude Desktop 필요 시점 | `index.md` 71 「Cowork·Code 실습」, `intro.md` 118 「파일 다루기 + 내 컴퓨터에 설정하는 연결」 | `labs.md` 59 「stage 3 실습」 | labs가 좁음. 2부 로컬 MCP도 Desktop 필요 |
| X8 | 운영 완료율 목표 | `operation-guide.md` 104 「80% 이상」 | `operation-guide.md` 162 「60% 이상」 | 사용자 판단. 파일럿·본교육 구분 설명이 없어 모순으로 읽힘 |
| X9 | 링크 타깃 부정확 | `mcp-servers.md` 140 「[폴더 연결](../intro.md#claude-cowork)」 | `intro.md` 114~127에 「폴더 연결」 개념·절차 없음 (127 「연결한 폴더의 파일만」뿐) | intro에 정의 추가 또는 링크 문구 수정 |
| X10 | claude.ai 로컬 MCP 표기 | `intro.md` 68 표 claude.ai 열 「✓ 원격 · △ 로컬」 | `intro.md` 76 「Desktop 앱에서만 동작해 △」 | 웹 사용자에게는 ✗. 사용자 판단 |
| X11 | step01의 데이터/뷰 분리 태깅 | `index.md` 254 step01·step04 둘 다 사례 | `labs.md` 40·43 step04만 | 사용자 판단 |

## 부록 B ― docs↔slides 정합 분석

### B-1. 슬라이드 → docs 매핑 (93장)

| # | 슬라이드 제목 | 행 | docs 출처 |
|---|------|----|-----------|
| 1 | AI 활용 온보딩 (표지) | 17 | 발표 전용 |
| 2 | 오늘의 흐름 | 37 | docs 대응 없음 (덱 목차) |
| 3 | Who (구분) | 103 | `index.md` `## Who` |
| 4 | 교육 대상 | 109 | `index.md` 13~16 |
| 5 | 공통 전제 + 자가 진단 | 122 | `index.md` 18~25 |
| 6 | 학생 트랙 범위 안내 | 158 | `index.md` 27~28 |
| 7 | 본 교육이 강화하는 역량 ― 개인 | 170 | `index.md` 30~37 |
| 8 | 사전지식 | 186 | `index.md` 39~51 |
| 9 | 준비사항 ― 유료 플랜 필수 | 216 | `index.md` 57~63 |
| 10 | 준비물 분담 | 256 | `index.md` 65~78 |
| 11 | Why (구분) | 289 | `index.md` `## Why` |
| 12 | 시간 절약 | 300 | `index.md` 89~94 |
| 13 | 직업적 생존 | 332 | `index.md` 96~99 |
| 14 | 능력의 확장 | 358 | `index.md` 101~104 |
| 15 | 소프트웨어가 만드는 가치 | 381 | `index.md` 106~114 |
| 16 | 기본 용어와 범위 (구분) | 443 | `basics.md` |
| 17 | 챗봇 vs 에이전트 | 456 | `basics.md` 7~32 |
| 18 | 에이전트 = 모델 + 하네스 | 500 | `basics.md` 36~81 (46~70 하네스 3분류는 없음) |
| 19 | 결과물의 성격 | 546 | `basics.md` 85~126 |
| 20 | 그 밖의 기본 용어 | 584 | `basics.md` 130~154 |
| 21 | 도구와 제품 (구분) | 638 | `intro.md` |
| 22 | 챗봇은 다 아는데... 짝꿍 에이전트는? | 650 | `intro.md` 29~39 |
| 23 | 본 교육의 도구 ― Claude 3종 | 672 | `intro.md` 47~53 |
| 24 | 기능 비교 ― 분기선 | 696 | `intro.md` 61~71 |
| 25 | 모델은 어떤 걸 쓸까 | 731 | `intro.md` 91~101 |
| 26 | Claude 사용량 확인하기 | 765 | `intro.md` 140~184 |
| 27 | What (구분) | 818 | `index.md` `## What` |
| 28 | 반복해서 쓸 수 있는 것을 스스로 만들 수 있게 된다 | 829 | `index.md` 120~127 |
| 29 | 어떤 접근을 쓸까요? ― 결정 룰 | 853 | docs 대응 없음 (B-5) |
| 30 | 매번 시키기 vs 소프트웨어로 만들기 | 896 | `index.md` 131 |
| 31 | 핵심: 비개발자도 소프트웨어를 만든다 | 941 | `index.md` 133~134 |
| 32 | AI 활용 3단계와 내 위치 | 957 | `index.md` 138~147·172 |
| 33 | 3단계 상세 | 1002 | `index.md` 149~153·169~170 |
| 34 | 1단계 vs 2단계 | 1018 | `index.md` 155~167 |
| 35 | 어떤 결과물을 만들 수 있나요? | 1055 | `index.md` 174~179 (드리프트 ①) |
| 36 | How (구분) | 1066 | `index.md` `## How` |
| 37 | 실습 접근법: 계획 → 실행 | 1072 | `index.md` 185~197 |
| 38 | 왜 계획부터 세우나요? | 1088 | `index.md` 199~206 |
| 39 | 막연한 vs 구조화된 프롬프트 | 1133 | `index.md` 208~220 (드리프트 ④) |
| 40 | AI 활용 메타 원칙 (표지) | 1172 | `index.md` 224~226 |
| 41 | 메타 원칙 ① 계획과 실행의 분리 | 1218 | `index.md` 228~244 |
| 42 | 메타 원칙 ② 데이터와 뷰의 분리 | 1267 | `index.md` 246~254 |
| 43 | 메타 원칙 ③ 결과물 검토·이해 의무 | 1310 | `index.md` 256~266 |
| 44 | 메타 원칙 ④ 컨텍스트(대화방) 관리 | 1347 | `index.md` 268~289 |
| 45 | 메타 원칙 ⑤ 페르소나 부여 | 1400 | `index.md` 291~301 |
| 46 | 임직원 (비개발자) 실습 | 1449 | `index.md` 307~310 |
| 47 | 비개발자 학생·일반인 실습 | 1465 | `index.md` 312~315 |
| 48 | 2부 ― 도구·데이터 연결 (구분) | 1483 | `connect/index.md` 리드 |
| 49 | 2부의 흐름 | 1498 | docs 대응 없음 (덱 목차) |
| 50 | 1부에 이어서 | 1537 | `connect/index.md` 9~11 |
| 51 | 연결은 단계가 아니라 선택입니다 | 1578 | `connect/index.md` 13~20 |
| 52 | 무엇이 달라지나 | 1634 | `connect/index.md` 24~42 |
| 53 | 연결하는 방법은 두 가지 | 1683 | `connect/index.md` 46~61 |
| 54 | 시작하기 전에 ― 준비물과 범위 | 1717 | `connect/index.md` 71~90 |
| 55 | 기본 커넥터 (구분) | 1748 | `connectors.md` 리드 |
| 56 | 커넥터는 새로 만드는 게 아닙니다 | 1760 | `connectors.md` 11~18 (드리프트 ⑥) |
| 57 | 연결하는 순서 | 1803 | `connectors.md` 22~61 |
| 58 | 쓸 만큼만 켜 두세요 | 1849 | `connectors.md` 62~69 |
| 59 | 승인 화면에서 확인할 것 | 1906 | `connectors.md` 75~85 |
| 60 | 「내 권한 그대로」는 안심과 경고 | 1935 | `connectors.md` 90~93 |
| 61 | 권한이 넓다면 이렇게 줄입니다 | 1978 | `connectors.md` 87~88 |
| 62 | Atlassian ― Jira와 Confluence | 2011 | `connectors.md` 97~122 |
| 63 | GitHub ― 연결할지부터 판단이 갈립니다 | 2062 | `connectors.md` 126~142 |
| 64 | 점검하고 끊기 · 회사 환경이라면 | 2113 | `connectors.md` 159~185 |
| 65 | MCP 서버 이용하기 (구분) | 2161 | `mcp-servers.md` 리드 |
| 66 | 커넥터와 무엇이 다른가 | 2173 | `mcp-servers.md` 11~36 |
| 67 | 갈림길 ① ― 설정을 어디에 두나 | 2208 | `mcp-servers.md` 44~60·146~147 |
| 68 | 갈림길 ② ― 서버가 어디에서 실행되나 | 2257 | `mcp-servers.md` 62~68·149 |
| 69 | 내 계정에 등록했을 때 | 2300 | `mcp-servers.md` mermaid 74~96 |
| 70 | 내 컴퓨터에 설정했을 때 | 2342 | `mcp-servers.md` mermaid 100~125 |
| 71 | 내 컴퓨터에 설정해야 하는 때 | 2386 | `mcp-servers.md` 127~154 |
| 72 | 등록하는 순서 | 2437 | `mcp-servers.md` 162~232 |
| 73 | 믿을 만한 서버 고르기 | 2502 | `mcp-servers.md` 236~263 |
| 74 | 열쇠 값은 필요한 만큼만 · 「항상 허용」 | 2539 | `mcp-servers.md` 213~225·253~256 |
| 75 | 연결한 뒤에 할 일 · 잘 안 될 때 | 2586 | `mcp-servers.md` 267~290 |
| 76 | 연결의 보안 ― 판단 시점이 앞당겨집니다 | 2629 | `security-guide.md` 115~122 |
| 77 | 공통 ― 트랙과 관계없이 | 2678 | `security-guide.md` 124~151 |
| 78 | 트랙별로 한 가지씩 | 2734 | `security-guide.md` 153~187 |
| 79 | 2부 정리 | 2783 | `mcp-servers.md` `#out-of-scope`·`#next` + `connect/index.md` `#reading-order` |
| 80 | 실습 (구분) | 2838 | `labs.md` (드리프트 ⑦) |
| 81 | 실습 시리즈 ― 4개 step | 2851 | `labs.md` 시리즈 구성·자료 받기·진행 원칙 ① (드리프트 ⑤) |
| 82 | step별 학습 포인트 | 2884 | `docs/labs.md`에 없음. `labs/*/README.md`가 SSoT |
| 83 | 보안 및 개인정보 (구분) | 2949 | `security-guide.md` |
| 84 | 공통 원칙 ― 트랙 무관 동일 | 2961 | `security-guide.md` 14~21 |
| 85 | 절대 입력하면 안 되는 정보 | 2976 | `security-guide.md` 23~30 |
| 86 | 결과물 검증 · 문제 발생 시 | 2989 | `security-guide.md` 32~45 |
| 87 | 임직원 ― 엔터프라이즈 AI는 안전한가? | 3018 | `security-guide.md` 51~59 |
| 88 | 임직원 ― 그래도 지켜야 할 것 | 3035 | `security-guide.md` 61~72 |
| 89 | 학생·일반인 ― 무료 AI 도구의 특성 | 3060 | `security-guide.md` 78~86 |
| 90 | 학생·일반인 ― 꼭 지켜야 할 4가지 | 3077 | `security-guide.md` 88~111 |
| 91 | 정리 ― 트랙별 적용 | 3121 | `security-guide.md` 191~209 (드리프트 ⑨) |
| 92 | 공식 문서·참고 자료 | 3144 | `intro.md` 188~209 |
| 93 | 감사합니다 | 3201 | 발표 전용 |

### B-2. 내용이 다른 곳 9건 (수정 대상)

| # | 자리 | slides | docs | 비고 |
|---|------|--------|------|------|
| ① | 학생·일반인 결과물 예시 | 1060 「AI 오답노트, 자동 문제 출제기, 엑셀 데이터 관리 템플릿 / 학습 자료를 로컬 폴더 단위로 정리·요약하는 에이전트」 | `index.md` 179 「영어 단어 출제기, 자녀 채점지 답안 인식·채점, 파일 분류·정리 / 자녀용 학습 리포트(마크다운·HTML)」 | 같은 덱 47번(1469~1477)은 docs와 일치. 35번만 구버전 |
| ② | 기능 비교표 외부 연결 행 | 705 「MCP 연동 (외부 도구·데이터) \| △ Connectors \| ✓ \| ✓ 전체」 | `intro.md` 68 「외부 도구·데이터 연결 (커넥터·MCP 서버) \| ✓ 원격 · △ 로컬 \| ✓ 원격 · △ 로컬 \| ✓ 전체」 | 영향 최대. 2부 전체가 원격/로컬 구분 위에 있음. 항목명도 다름 |
| ③ | Cowork 한 줄 정의 | 677 「데스크톱 범용 에이전트」 | `intro.md` 50 「파일·도구를 직접 다루는 범용 에이전트」, 118 「웹·데스크톱·모바일 어디서나」 | 2부 슬라이드 2223이 「어디서나」를 말해 덱 내부 충돌 |
| ④ | 막연 vs 구조화 프롬프트 예시 | 1141·1153~1155 보고서 3줄 요약 예시 | `index.md` 211·216 서울 날씨 예시 | 요지는 같음. docs 날씨 예시는 `step01-weather`와 연결되는 자리 |
| ⑤ | step03 핵심 학습 포인트 | 2859 「사진 입력·출처 충실성·외부 도구 연결」 | `labs.md` 42 「Skill 활용 다양화」 | `labs/step03-voca-quiz/README.md` 학습 목표와 대조하면 **slides가 맞고 docs가 낡음**. docs 수정 (이슈 A) |
| ⑥ | 덱 내부 참조 | 1764 「1부에서 하네스의 출처를 셋으로 나눴고, 그중 「고르고·연결만 하는 것」 칸에」 | `basics.md` 46~70에만 3분류 존재 | 슬라이드 18(500~532)은 모델/하네스 2카드뿐. 존재하지 않는 슬라이드를 되짚음 |
| ⑦ | 실습 섹션 부제 | 2840 「손으로 따라가는 4개 step」 | `labs.md` 20·22 프롬프트로만 진행 | 같은 덱 2864가 「프롬프트로만 진행」을 말해 부제와 상충 |
| ⑧ | 수치 | 922 「한 번 만들고 100번 쓰는」 | `index.md` 131 「한 번 만들고 여러 번 쓰는」 | 근거 없는 숫자 |
| ⑨ | 보안 정리표 | 3123~3132 8행 | `security-guide.md` 195~209 13행 (외부 연결 5행 포함) | 슬라이드 78이 별도로 다루나 같은 이름·형식의 표가 다른 목록. 트랙 열 라벨도 축약 |

### B-3. 슬라이드에 없는 docs 절

의도적으로 보이는 것 (제외): `operation-guide.md` 전체(강사용), `index.md`·`intro.md` 「함께 읽어보세요」, `labs.md` 「왜 사이트 안에 본문이 없나요?」.

검토 대상 9건:

| 파일 · 절 · 줄 | 비고 |
|---|---|
| `intro.md` 대표 제품 ― Claude·ChatGPT·Gemini 13~27 (표 + 「본 교육은 Claude로 진행」 + 「어느 제품이 가장 좋나요?」) | 「왜 Claude 단독인가」 근거가 덱에서 빠짐. 슬라이드 22는 그 아래 코딩 에이전트 표만 옮김 |
| `intro.md` claude.ai ― 1단계의 시작점 105~110 | 「Projects·Skills가 2단계 무대」 서술 없음 |
| `intro.md` Claude Cowork ― 3단계 본격 무대 114~127, 특히 「Cowork의 보호 모델」 | 슬라이드 24 표의 △에만 암시. 근거는 발표자 노트 722에만 |
| `basics.md` 하네스는 결국 「내가 세팅하는 것들」 46~70 | 슬라이드 없음인데 1764가 참조 (드리프트 ⑥) |
| `labs.md` 진행 원칙 ② 결과물은 반드시 읽고 이해 24~30 | 실습 슬라이드 81에는 ①만. 15행이 「둘은 짝」이라 명시한 것과 어긋남 |
| `connect/index.md` 명령줄 도구 미취급 63~64, 제품별 지원 범위 66~67 | |
| `connectors.md` GitHub 지원 범위 144, 저장소 프로젝트 첨부 150~153, SSO 승인 155 | 발표자 노트 2105에 생략 의도 기록 |
| `mcp-servers.md` 설치 형태 두 가지(MCPB) 205~208, 「확장 프로그램은 내 컴퓨터에서 실행되는 프로그램」 210~211 | 후자는 보안 성격이라 누락 영향 큼 |
| `security-guide.md` 업무 자료는 업무용 도구에서 170~176 | 슬라이드 63이 일부만 흡수 |

### B-4. 용어 어긋남 9건

| 개념 | docs | slides | 비고 |
|---|---|---|---|
| 외부 연결 기능 (기능 비교표 행) | 「외부 도구·데이터 연결 (커넥터·MCP 서버)」 `intro.md` 68 | 「MCP 연동 (외부 도구·데이터)」 705 | 2부는 커넥터 ≠ MCP 서버로 나누는데 1부 표만 합침 |
| 커넥터 메뉴 표기 | `mcp-servers.md` 165 「커스텀 커넥터 추가」, `connectors.md` 49 「connector 추가」(영문 소문자) | 2446 「커스텀 커넥터 추가」 | docs 내부 불일치. 실제 화면 표기 확인 후 통일 (UI 라벨은 화면 그대로) |
| 트랙명 | 「임직원(비개발자)」「비개발자 학생·일반인」 | 표지·표는 유지, 보안 정리표 3123·2부 2739·2752는 「임직원」「학생·일반인」 | 표 머리글에서만 축약 |
| 메타 원칙 총칭 | 「공통 원칙」 `index.md` 226 | 「시리즈 차원의 자세 5종」 1174 | ①~⑤ 순서·번호는 동일 |
| 재사용 자산 | `에이전트 스킬`(`basics.md` 104) / `Agent Skills`(`index.md` 152) / `Skill`(`index.md` 163) | 같은 3종 혼용 (872·1007·1037) | SSoT에서 먼저 통일 |
| step / stage / 단계 | `step`·`stage`(`labs.md`) vs `1·2·3단계`(`index.md`) | 동일 규칙 | 2840 「4개 step」과 3단계가 청중에게 설명 없이 병치 |
| 플랜 명칭·링크 | 「Claude 플랜」 `claude.com/pricing` (`index.md` 63) / 「Anthropic 플랜」 `anthropic.com/pricing` (`intro.md` 207) | docs를 그대로 따름 (246·3173) | docs 내부 2종이 원인 |
| 회사 플랜 구분자 | 「회사 Team·Enterprise」 | 「Team / Enterprise」(238), 「Team·Enterprise」(266) | 슬라이드 내부 혼용 |
| 폴더 접근 | 「폴더 연결」 미정의. `mcp-servers.md` 140이 링크로 사용 | 「폴더 연결」 2407 | docs에 정의 필요 (A-2 X9) |

### B-5. 슬라이드 전용 콘텐츠

| 슬라이드 | 행 | 판단 |
|---|---|---|
| 오늘의 흐름 / 2부의 흐름 / 구분 슬라이드 11장 / 감사합니다 | 37·1498·(103·289·443·638·818·1066·1483·1748·2161·2838·2949)·3201 | 발표 전용. docs 불필요 |
| 어떤 접근을 쓸까요? ― 결정 룰 | 853 | 내용 있음. ①직접 지시 / ②소프트웨어로 만들기 2분기 결정 룰. docs에 대응 절 없음. ADR-0005 결정 2는 docs에도 요구. **docs 편입 후보** (`index.md` `## What` 또는 `basics.md` `#three-forms` 앞) |
| 매번 시키기 vs 소프트웨어로 만들기 [1]~[4] 사다리 | 896 | `index.md` 131을 4단으로 재구성. [1] 「처음부터 본인의 챗봇이나 자동화 도구를 만드는 사람은 없습니다」(903)는 docs에 없는 문장. 발표용 완충으로 유지 가능 |
| step별 학습 포인트 | 2884 | `docs/labs.md`에 없고 `labs/*/README.md`에 있음. ADR-0006상 `labs/`가 SSoT라 정당. 다만 `docs/labs.md` 시리즈 구성 표가 `labs/` 실물보다 낡음 (B-2 ⑤) |
| 기능 비교표 「굵은 행 = 분기선」 범례 | 710 | 발표 전용 강조 |
| 모델 슬라이드 「헷갈리면 Sonnet → Opus → Fable」 | 740 | `intro.md` 99와 같은 취지, 문장 재작성 |

### B-6. 요약이라 허용한 생략 12건

슬라이드 9·10(보안 백참조·사용량 tip은 26으로 이동), 24(원격/로컬 4문단은 2부 67로 이연), 25(버전 번호 생략), 26(플랜·Cowork 한도 tip·이미지 위임), 19(「3단계와 별개」 note를 32에서 한 줄로), 44(모델명·플랜 조건 생략), 54(유료 플랜·warning을 1부 9·10과 중복 회피), 62(예시 3→2), 73(사내 서버 주소 확인 생략), 74(범위 예시 축약), 75(트러블슈팅 5→4행), 86(학생 「기관·학교 지침」 생략), 6·7(표현 강화, 무해).

## 부록 C ― 카드 박스 실측 상세

파일별 admonition 라벨 (기준 커밋):

- `index.md` (26): 공통 전제 + 자가 진단(info 18) · 학생 트랙 범위 안내(warning 27) · 강화하는 역량(info 30) · 요구합니다(success 43) · 요구하지 않습니다(failure 48) · 필수 유료 플랜(warning 57) · 참가자가 준비(info 67) · 강사가 준비(note 74) · 사용량·한도 확인(tip 80) · ① 시간 절약(tip 89) · ② 직업적 생존(warning 96) · ③ 능력의 확장(success 101) · 출발점 예시(example 126) · 핵심: 비개발자도 소프트웨어를(quote 133) · 1단계 매번 새로 묻기(example 157) · 2단계 Skill로 묶어(success 162) · 왜 단계가 이어지나요(tip 169) · 왜 계획부터(info 199) · 막연한 프롬프트(example 210) · 구조화된 프롬프트(success 215) · 메타 원칙 ①~④(abstract 228·246·256·268) · ⑤ 페르소나(note 291) · 실습 상세 가이드 안내(info 317)
- `mcp-servers.md` (22): 13 info · 31 note · 46 note · 53 note · 62 info · 127 info · 137 example · 146 tip · 153 warning · 177 info · 182 note · 191 note · 205 note · 210 warning · 213 tip · 224 warning · 227 tip · 248 warning · 253 warning · 258 warning · 275 abstract · 296 note
- `connectors.md` (15): 13 info · 28 note · 31 note · 44 tip · 62 tip · 90 warning · 103 example · 108 example · 117 warning · 130 info · 137 warning · 146 example · 150 note · 173 info · 178 warning
- `basics.md` (12): 13 abstract · 20 tip · 29 quote · 40 abstract · 52 note · 60 note · 72 warning · 87 note · 99 warning · 119 note · 132 info · 145 info
- `intro.md` (10): 10 note · 23 info · 26 tip · 98 tip · 109 abstract · 120 tip · 123 info · 135 note · 173 tip · 178 info
- `connect/index.md` (9), `security-guide.md` (5), `operation-guide.md` (3), `labs.md` (2)

유형 의미가 흐려진 사례: 같은 「본 교육에서의 위치」가 abstract·tip·note. info와 note가 구분 없이 섞임(「참가자가 준비」 info vs 「강사가 준비」 note). 메타 원칙 ①~④는 abstract인데 ⑤만 note.
