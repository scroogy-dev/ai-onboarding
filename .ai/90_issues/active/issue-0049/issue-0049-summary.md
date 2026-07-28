# Issue #49 실행요약 — 2부(심화편) 신설: MCP 연결 교육 자료

> 스펙: [issue-0049-spec.md](./issue-0049-spec.md) | 계획: [issue-0049-plan.md](./issue-0049-plan.md)

## 다음 작업

> ▶️ 다음 작업: Task 7 — 1부 접합부 갱신 (`docs/basics.md`의 "본 강의의 범위 밖" 선언을 2부 포워드 링크로 전환, `docs/intro.md` MCP 서술 정합)

## 모델 기록

| 구분 | 모델 |
|------|------|
| 설계 모델 | Anthropic, Claude Fable 5 (claude-fable-5) |
| 구현 모델 | Anthropic, Claude Opus 5 (claude-opus-5) |
| audit 모델 | <!-- 구현 모델과 다른 벤더 모델. 형식: 벤더, 모델명. 마지막 교차모델 audit Task에서 사용자가 기록 --> |

---

## Task별 수행 결과

### Task 0 (고정): 구현 시작 게이트 — 전제·모호점 확인

- **결과**: 완료
- **수행 모델**: Anthropic, Claude Opus 5 (claude-opus-5)
- **audit 발견**: 0건
- **보정 반영**: 0건
- **재시도**: 0회
- **수행 내용 요약**: spec 전제의 작성자 제안 5건을 사용자에게 질의해 전부 확정하고, 확정 과정에서 파생된 결정 1건(1부 섹션 명칭)을 추가 확정했다. 6건 모두 spec `## 전제 (Assumptions)`에 반영 — ① 디렉토리·파일명 `docs/connect/` + `index.md`·`connectors.md`·`mcp-servers.md`(제안값 유지) ② 2부 명칭 "2부 — 도구·데이터 연결"(가칭 "외부 연결(심화)" 폐기, 난이도가 아니라 내용으로) ③ 1부 명칭 "1부 — AI 활용 기본"(nav 재편으로 새로 필요해진 결정) ④ nav 재편은 본문 3페이지를 1부로 묶고 2부를 그 아래, 홈·보안·운영 가이드는 부 공통이라 최상위 유지 ⑤ 보안은 양쪽 배치 — 정책 본문은 `security-guide.md` "외부 연결" 절 신설(SSoT), 2부에는 짧은 주의 박스 + 링크 ⑥ labs·slides 둘 다 후속 이슈로 분리. 확정값을 plan Task 1·2·6 작업 내용에도 반영했다.
- **특이 사항**: 구현 착수 전 사용자가 별도로 제기한 **도구 축 확장(ChatGPT/Codex) 순서 판단**을 함께 해소해 spec 전제에 기록했다 — 이 이슈(범위 축)를 먼저 하고 도구 다원화는 후속 이슈로 분리, ADR-0010에 도구 축 경계를 명시, 2부 본문은 개념·보안·선택 기준을 도구 중립으로 쓰되 도구별 탭·분기는 미리 만들지 않음. 이에 따라 plan Task 1에 경계 명시 항목이 1건 추가됐다.

---

### Task 1: ADR-0010 작성 — 2부 신설·범위 확장 결정

- **결과**: 완료
- **수행 모델**: Anthropic, Claude Opus 5 (claude-opus-5)
- **audit 발견**: 0건
- **보정 반영**: 0건
- **재시도**: 0회
- **수행 내용 요약**: `.ai/50_adr/active/adr-0010-part2-connection-scope-expansion.md` 신규 작성 후 `.ai/50_adr/index.md` Active ADR 표에 등재했다. 결정 6개 — ① ADR-0001 확장(대체 아님), 2부는 4단계가 아니라 축이 다른 확장(세로=활용 수준 / 가로=닿는 범위) ② 같은 repo·사이트에서 nav 부 구분, 부 이름은 난이도가 아니라 내용 ③ 범위 경계 "이용까지만"(MCP 서버 개발·RAG 내부는 범위 밖) ④ 연결 보안 본문 SSoT는 `security-guide.md` ⑤ 도구 축은 이 ADR의 결정 대상 아님(Task 0 확정 반영) ⑥ 1부 수정은 접합부 최소, MCP·RAG 정의 문장은 `basics.md`에 존치. 대안 4건(별도 사이트 분리·1부 통합·현행 유지·도구 축 동시 결정) 기각 사유 기록. 배경은 `docs/basics.md` 현행 문구를 직접 인용해 근거를 고정했다.
- **특이 사항**: 검증 명령 2건 통과 — ADR 파일 1개, 인덱스 등재 1행. `basics.md`에 "범위 밖" 표현이 두 군데(144행 외부 컨텍스트 = 제거 대상, 97행 애플리케이션 = 존치 대상)라는 것을 확인했다. Task 7 DoD의 `grep -c '본 강의의 범위 밖'`은 144행만 잡으므로 97행을 건드리지 않아도 통과한다.

---

### Task 2: 2부 골격 — docs/connect/ 3페이지 스텁 + nav 부 구분

- **결과**: 완료
- **수행 모델**: Anthropic, Claude Opus 5 (claude-opus-5)
- **audit 발견**: 0건
- **보정 반영**: 0건
- **재시도**: 0회
- **수행 내용 요약**: `docs/connect/` 신설하고 3페이지 스텁(H1 + 개요 2~3문단)을 작성했다 — `index.md`(2부 개요 — 연결이 왜 필요한가), `connectors.md`(기본 커넥터 — GitHub·Atlassian), `mcp-servers.md`(MCP 서버 이용하기). `mkdocs.yml` nav를 Task 0 확정대로 재편 — 기존 본문 3페이지를 `1부 — AI 활용 기본` 섹션으로 묶고 그 아래 `2부 — 도구·데이터 연결` 섹션에 2부 3페이지를 등재, 홈·보안 가이드·운영 가이드는 부 공통이라 최상위 유지. 스텁 단계에서 이미 `../basics.md#external-context` 재사용 링크(Task 3 완료 기준)와 `connectors.md` ↔ `mcp-servers.md` 상호 링크(Task 5 완료 기준)를 걸어 두었다.
- **특이 사항**: 검증 3건 통과 — H1 위반 0건, `grep -c 'connect/' mkdocs.yml` = 3(≥3), `mkdocs build` 종료 코드 0. `--strict` 빌드도 종료 코드 0이며 링크 경고 0건이라 스텁의 내부 링크가 전부 유효함을 함께 확인했다. 로컬에 `mkdocs` 명령이 PATH에 없어 repo의 `.venv/bin/mkdocs`로 실행했다(빌드 산출물 `site/`는 `.gitignore` 대상).

---

### Task 3: 2부 개요 페이지 본문 — 연결이 왜 필요한가

- **결과**: 완료
- **수행 모델**: Anthropic, Claude Opus 5 (claude-opus-5)
- **audit 발견**: 0건
- **보정 반영**: 0건
- **재시도**: 0회
- **수행 내용 요약**: `docs/connect/index.md`를 스텁에서 본문으로 확장했다. 절 구성 6개 — ① 1부의 도착점에서 이어짐(3단계 모델은 세로축=활용 수준, 연결은 가로축=닿는 범위, "4단계가 아니다"를 abstract 박스로 명시 → ADR-0010 결정 1 반영) ② 무엇이 달라지나(연결 전/후 grid 카드 대비 + 검토 의무가 오히려 더 중요해지는 이유) ③ 두 갈래 비교표(무엇인가·절차·폭·판단할 것·링크 5행)와 고르는 순서 ④ 준비물(플랜·서비스 계정·회사 관리자 정책) + 연결 보안 주의 ⑤ 다루는 선("이용까지, 개발은 제외") ⑥ 읽는 순서. 용어는 재정의하지 않고 `../basics.md#external-context`·`#model-harness`, `../index.md#stage-model`·`#preparation`·`#meta-principles`, `../intro.md#claude-comparison` 링크로 재사용했다.
- **특이 사항**: 검증 통과 — `grep -c 'basics.md' docs/connect/index.md` = 2(≥1), `--strict` 빌드 종료 코드 0·경고 0건. 참조한 앵커 6종이 1부 원본에 모두 실재함을 확인했다. 초안에 `!!! danger`를 썼다가 `warning`으로 교체 — 테마 CSS(`claude-theme.css`)가 info·tip·note·abstract·example 5종만 웜뮤트로 재조정하고 danger는 커스텀 대상이 아니며, 기존 docs 6개 파일에서 danger 사용 이력이 0건이라 강조 위계가 어긋난다. 준비물 박스도 1부 관례(정보성 목록은 info)에 맞춰 warning → info로 조정해 보안 주의 박스만 warning으로 남겼다. 플랜 금지 서술은 "무료·유료를 가리지 않고" 포괄 표현으로 썼다.

---

### Task 4: 기본 커넥터 페이지 본문 — GitHub·Atlassian

- **결과**: 완료
- **수행 모델**: Anthropic, Claude Opus 5 (claude-opus-5)
- **audit 발견**: 0건
- **보정 반영**: 0건
- **재시도**: 0회
- **수행 내용 요약**: `docs/connect/connectors.md`를 스텁(7행)에서 본문(152행)으로 확장했다. 절 구성 7개 — ① 커넥터는 새로 만드는 게 아님(`basics.md#model-harness`의 "고르고·연결만 하는 것" 칸 재사용, 재정의 없음) ② 연결하는 순서(대화 화면·설정 화면 두 경로를 grid 카드로 대비 + 공통 5단계) ③ 승인 화면에서 확인할 것(읽기/쓰기·범위·누구의 권한 3행 표 + "내 권한 그대로"가 안심이자 경고라는 warning) ④ GitHub(비개발자 시나리오 3건 + 프로젝트 지식 동기화 경로와의 구분) ⑤ Atlassian(Confluence·Jira 시나리오를 grid 카드로 + 쓰기 결과가 내 이름으로 남는다는 warning) ⑥ 연결 점검·해제(끊을 기준 3가지) ⑦ 회사 환경(관리자 선활성화·도구 권한). 마무리는 `mcp-servers.md`로 넘기는 다음 안내.
- **특이 사항**: 본문의 UI 절차·권한 서술은 공식 문서를 직접 대조해 고정했다 — 한국어 UI 용어("사용자 정의 → 커넥터", "커넥터 관리", "연결/설치", "도구 액세스 — 자동/필요할 때", 관리자 "항상 허용/승인 필요/차단")는 [커넥터를 사용하여 Claude의 기능 확장하기](https://support.claude.com/ko/articles/11176164), GitHub 두 경로의 차이(커넥터 = 저장소·이슈·PR 읽기·쓰기 / "GitHub에서 추가" = 지정 브랜치의 파일 이름·내용만, 커밋 이력·PR 제외)는 [GitHub 통합 사용하기](https://support.claude.com/ko/articles/10167454), Atlassian Rovo 커넥터의 읽기·쓰기 범위와 기존 Jira·Confluence 권한 상속은 커넥터 디렉토리 페이지에서 확인했다. 외부 링크는 `/ko/` 경로 2건이며 `curl`로 HTTP 200을 확인했다(WebFetch는 slug 없는 `/ko/` URL에서 리다이렉트 루프로 실패하지만 브라우저·curl에서는 정상 — 기존 `intro.md` 관례와 같은 짧은 형태를 유지). 검증 4건 통과 — `grep -ci 'github'` = 7(≥1), `grep -ciE 'atlassian|jira|confluence'` = 8(≥1), H1 1개, `--strict` 빌드 종료 코드 0(링크 경고 0건, 유일한 WARNING은 Material 팀의 MkDocs 2.0 안내 배너로 문서와 무관). admonition은 1부·2부 관례대로 info·note·tip·example·warning만 사용했다.

---

### Task 5: MCP 서버 페이지 본문 — 커넥터 너머

- **결과**: 완료
- **수행 모델**: Anthropic, Claude Opus 5 (claude-opus-5)
- **audit 발견**: 0건
- **보정 반영**: 0건
- **재시도**: 0회
- **수행 내용 요약**: `docs/connect/mcp-servers.md`를 스텁(7행)에서 본문(158행)으로 확장했다. 절 구성 8개 — ① 커넥터와의 차이(화면 메뉴 이름이 **사용자 정의 커넥터**라 "같은 문을 다른 방법으로 여는 것"임을 먼저 고정, 4행 대비표로 검증 주체와 판단의 몫이 옮겨 가는 지점을 명시, MCP 정의는 `basics.md#external-context` 링크로 재사용하고 재정의 없음) ② 원격 vs 로컬 두 갈래를 grid 카드로 대비하고 고르는 기준을 "자료가 어디에 있나" 하나로 환원 ③ 등록 절차를 원격(사용자 정의 → 커넥터 → `+` → 사용자 정의 커넥터 추가 → 주소 → 추가 → 연결 → 대화 토글 6단계)·로컬(설정 → 확장 프로그램 → 찾아보기 → 설치 5단계)로 분리, 회사 플랜의 소유자 선행 단계와 "수정 불가 → 제거 후 재추가"를 박스로 ④ 믿을 만한 서버 고르기 4행 체크표 + 프롬프트 주입 경고 + "항상 허용은 마지막에" ⑤ 연결 후 검토 의무(메타 원칙 ③가 가장 무거워지는 자리) ⑥ 증상별 트러블슈팅 5행 표 ⑦ 만드는 일은 범위 밖(`basics.md#three-forms` 기준 원용 + 개발자 문서 포인터 1건) ⑧ 다음으로. 승인 화면·연결 해제는 `connectors.md`의 해당 절로 앵커 링크해 서술 중복을 피했다.
- **특이 사항**: 절차·플랜 조건은 공식 문서를 직접 대조해 고정했다 — 한국어 UI 용어("사용자 정의 → 커넥터", "사용자 정의 커넥터 추가", "고급 설정", "조직 설정 → 커넥터", "설정 → 확장 프로그램", "확장 프로그램 찾아보기")와 Team·Enterprise 소유자 선행 단계·구성원 권한 상속·프롬프트 주입 경고·"항상 허용" 주의는 [원격 MCP를 사용하여 사용자 정의 커넥터 시작하기](https://support.claude.com/ko/articles/11175166), 원격/로컬 구분 기준과 데스크톱 확장 경로는 [데스크톱 및 웹 커넥터를 사용하는 시기](https://support.claude.com/ko/articles/11725091), 확장 프로그램 설치·재시작·필수 필드 트러블슈팅은 [Claude Desktop에서 로컬 MCP 서버 시작하기](https://support.claude.com/ko/articles/10949351)에서 확인했다. 사내망·VPN 서버가 연결되지 않는 이유(연결이 내 컴퓨터가 아니라 Anthropic 인프라에서 시작됨)도 같은 문서 근거로 트러블슈팅 표에 넣었다. `claude_desktop_config.json` 직접 편집 경로는 개발자 영역이라 언급하지 않았고, 로컬 방식의 제품 지원 범위는 공식 문서가 Claude Desktop만 명시하므로 "Claude Desktop에서만 쓰는 방식"으로 좁혀 쓰고 제품별 차이는 `intro.md#claude-comparison`으로 넘겼다. 검증 4건 통과 — 상호 링크 `connectors.md` 4건·`mcp-servers.md` 1건(각 ≥1), H1 위반 0건, `--strict` 빌드 종료 코드 0(링크 경고 0건, 유일한 WARNING은 Material 팀의 MkDocs 2.0 안내 배너로 문서와 무관), 외부 링크 4건 전부 HTTP 200. 링크 후보로 검토한 「디렉토리에서 도구 탐색 및 연결」(articles/11724452)은 현재 404라 채택하지 않고, 디렉토리 안내는 UI 경로 서술로만 남겼다. admonition은 1부·2부 관례대로 info·note·tip·abstract·warning만 사용했다(danger 미사용).

---

### Task 6: 연결 보안·주의사항 반영

- **결과**: 완료
- **수행 모델**: Anthropic, Claude Opus 5 (claude-opus-5)
- **audit 발견**: 0건
- **보정 반영**: 0건
- **재시도**: 0회
- **수행 내용 요약**: 정책 본문 SSoT를 `docs/security-guide.md`에 세우고 2부는 링크로 잇는 **양쪽 배치**(Task 0 확정)를 반영했다. ① `security-guide.md`에 `## 외부 연결 — 커넥터와 MCP 서버 { #external-connection }` 절을 신설 — 도입에서 기존 3개 절이 전부 *내가 무엇을 입력하는가*였음을 짚고 연결이 더하는 축(AI가 직접 가져오고 직접 남긴다)을 세운 뒤, 핵심 원칙 박스("연결은 '무엇을 넘길지'의 결정을 승인 화면 한 번으로 앞당긴다")를 기존 공통 원칙 박스와 같은 형식으로 두고, 하위 4항목으로 전개했다 — 1) 승인 범위 최소화(권한이 새로 생기지 않지만 내가 볼 수 있는 건 전부 대상, 읽기 우선, 범위 좁히기) 2) 회사 자료가 지나는 길(보안 등급 기준은 연결로 읽혀도 동일 적용, 엔터프라이즈 계약이 보호하는 것은 처리 방식이지 무엇을 넘길지의 판단이 아님, 쓰기는 내 이름으로 남음) 3) 회사 정책·승인 절차 우선(회사 계약 플랜에서만, 관리자 정책 우회 금지, MCP 서버는 확인 주체가 나로 이동) 4) 정기 점검·해제. ② `## 정리` 표에 3행 추가 — 공통 2행(연결 승인 범위 최소화, 안 쓰는 연결 점검·해제), 트랙 차이 1행(연결은 회사 계약 플랜에서만). ③ 2부 3페이지의 `security-guide.md` 링크 5건을 전부 `#external-connection` 앵커로 정밀화했다.
- **특이 사항**: 2부 페이지에는 주의 admonition을 **새로 추가하지 않았다** — Task 3~5에서 각 페이지에 이미 그 자리에 필요한 warning 박스(연결은 데이터 길을 새로 냄 / 「내 권한 그대로」 / 프롬프트 주입 / 「항상 허용」)가 있어, 여기에 보안 문단을 더하면 plan의 "본문 중복 금지"에 걸린다. 대신 링크를 파일 단위에서 절 앵커로 바꿔 상세 도착점을 정확히 했다. 역방향 링크도 걸어 `security-guide.md`가 2부의 절차 서술(`connect/connectors.md#approval-screen`)과 서버 선정 기준(`connect/mcp-servers.md#choosing`)으로 내려가게 했다 — 정책은 보안 가이드, 화면 절차는 2부로 역할을 갈랐다. 부수 정리 1건: `connectors.md#enterprise`의 플랜 문장 링크를 `index.md#preparation`(준비물 맥락)에서 연결 보안 기준으로 교체했다(정책 문장이므로 SSoT 쪽이 맞다). 금지 표현은 "무료·유료를 가리지 않고"·"개인 플랜"으로 포괄해 유지했다. 검증 통과 — `grep -rc 'security-guide.md' docs/connect/` 합계 5건(≥1), `grep -c 'connect/' docs/security-guide.md` = 3, 참조 앵커 3종 실재 확인, H1 1개, `--strict` 빌드 종료 코드 0(링크 경고 0건, 유일한 WARNING은 Material 팀의 MkDocs 2.0 안내 배너로 문서와 무관). `mkdocs.yml`에 `validation` 설정이 없어 `--strict`가 앵커까지 검사하지는 않으므로, 새로 건 앵커 3종은 `grep`으로 직접 실재를 확인했다.

---

### Task 7: 1부 접합부 갱신 — basics.md·intro.md

- **결과**: <!-- 완료 / 부분 완료 / 스킵 -->
- **수행 모델**: -
- **audit 발견**: 0건
- **보정 반영**: 0건
- **재시도**: 0회
- **수행 내용 요약**:
- **특이 사항**:

---

### Task 8: 사용자 점검·피드백 루프

- **결과**: <!-- 완료 / 부분 완료 / 스킵 -->
- **수행 모델**: -
- **audit 발견**: 0건
- **보정 반영**: 0건
- **재시도**: 0회
- **수행 내용 요약**:
- **특이 사항**:

---

### Task N (고정): 교차모델 issue-audit 검증 — 사용자 수동 수행

- **결과**: <!-- 완료 / 부분 완료 / 스킵 -->
- **수행 내용 요약**: <!-- audit 리포트 위치, 발견사항 건수, `--response` 검토 결과 -->
- **특이 사항**:
