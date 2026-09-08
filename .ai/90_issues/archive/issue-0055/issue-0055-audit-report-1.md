# Issue #55 감사 리포트 ― docs 중복 제거·카드 박스 축소·간결화

> 감사 일시: 2026-09-07 (Asia/Seoul)
> 감사 모델: OpenAI, GPT-6
> 감사 회차: 1차 (이전 리포트 없음, 번호 헬퍼 산출: 1)
> 감사 대상 브랜치: `issue-0055`
> 감사 대상 HEAD: `4537214948991bb7f999a4c30cbcbb2ce31bae6b`
> 비교 기준: `main` = `3e57651`, 콘텐츠 착수 기준 `6bad27c`
> 스펙 출처: [issue-0055-spec.md](./issue-0055-spec.md)
> 계획·승인 기록: [plan](./issue-0055-plan.md) · [summary](./issue-0055-summary.md)

## 종합 의견

🔴 부적합(FAIL)

<details>
<summary>종합 의견 펼치기</summary>

- 자동 게이트 8종은 통과했으나, 실제 zip에서 실습 본문 16개와 샘플 생성 스크립트가 빠져 배포 목적이 성립하지 않는다.
- 홈 배정표의 미완료 항목과 제품 설명·참조 링크의 회귀도 확인했다.
- F-1·F-2는 보정 필수 기본값, F-3·F-4는 사용자 판단 기본값으로 `/issue-work --response`에서 검토하며, 이 감사는 구현을 보정하지 않는다.

</details>

## 요약

- 1단계 적합성: 🔴 미충족(FAIL) · 충족(PASS) 20건 / 미충족(FAIL) 1건 / 부분 충족(PARTIAL) 4건 / 판정 불가(N/A) 0건
- 2단계 위험도: 🔴 보완 필요(FAIL) · 높음(HIGH) 2건 / 중간(MEDIUM) 2건 / 낮음(LOW) 0건 / 정보(INFO) 0건
- 기등재 참조: 1건 (K-0001, 위험도·카테고리 집계 제외)
- 이전 발견: 해당 없음

| 카테고리 | 건수 |
|----------|------|
| 기능 | 높음(HIGH) 1 · 중간(MEDIUM) 2 |
| 아키텍처 | 0 |
| 버그 | 높음(HIGH) 1 |
| 보안 | 0 |
| 코드품질 | 0 |
| 성능 | 0 |
| 테스트 | 0 |

## 1단계: 적합성 검증 (Compliance Check)

### 요구사항 대조

스펙에는 별도 R 번호가 없어 `범위 > 포함`의 11개 항목을 순서대로 R1~R11로 식별했다. 아래 요약 건수는 이 11개와 DoD 14개만 합산하며, 부록의 세부 대조를 중복 집계하지 않는다.

| # | 요구사항 | 판정 | 근거 |
|---|----------|------|------|
| R1 | 대상 9개 파일 정리 | 🟢 충족(PASS) | 9개 모두 변경·페이지별 커밋 보유. 최종 1,488행·카드 39개를 재측정했다. |
| R2 | 운영 가이드와 nav·홈 링크 삭제 | 🟢 충족(PASS) | 파일 부재, `docs/`·`mkdocs.yml`의 `operation-guide` 참조 0건. |
| R3 | 주제별 홈 1곳, 다른 곳은 한 줄 링크 | 🟡 부분 충족(PARTIAL) | D1·D3·D4·D7·D10에 잔여 본문이 있다. D2·D13의 명시적 유지 결정은 제외했다(F-2). |
| R4 | 사용자 선별에 따른 카드 정리·4유형 통일 | 🟢 충족(PASS) | 허용 유형 밖 0건, 동일 라벨 유형 충돌 0건. 카드별 사용자 지목 방식은 summary의 승인 기록으로 대조했다. |
| R5 | 사용자 선별 후 삭제·간결화·필요한 접기 | 🟢 충족(PASS) | 원본 대비 342행 감소. 경고 본문화와 삭제 항목은 기록된 사용자 선택에 부합하며, 주요 금지·검토 기준은 본문에 남는다. |
| R6 | 불일치 11건 및 낡은 실습 서술·결정 룰 정정 | 🟡 부분 충족(PARTIAL) | X5 비교표 정리가 남았고, X10의 웹 표기는 고쳤으나 Code 설명에 새 불일치가 생겼다(F-2·F-3). |
| R7 | 용어·외부 URL·트랙명·폴더 연결 통일 | 🟢 충족(PASS) | 플랜·모델 URL 각 1종, 폴더 연결 정의 실재. Skill 표기 예외 2파일은 summary Task 2에 기록돼 있다. |
| R8 | mkdocs.yml·용어 사전 동반 갱신 | 🟢 충족(PASS) | 앵커 검증 설정, nav 삭제, Agent Skills·1회성 결과물 정의와 출처 갱신 확인. |
| R9 | 페이지 단위 점검·명시 승인·커밋 | 🟢 충족(PASS) | summary Task 3~7의 승인 날짜와 Git 커밋을 대조했다. 실제 대화 로그를 독립 재현한 판정은 아니다. |
| R10 | zip에서 제작용 파일을 빼고 labs를 온전히 배포 | 🔴 미충족(FAIL) | 로컬 archive·현재 HEAD의 GitHub zip 모두 labs 36파일 중 19파일만 포함. README 16개와 생성 스크립트 1개 누락(F-1). |
| R11 | 재실행 가능한 게이트와 카드 수 기록 | 🟢 충족(PASS) | 스펙 자동 명령 8종, 운영 가이드 부재·참조 검사 통과. zip 완전성은 기존 게이트가 검사하지 않는다(F-1). |

### 완료의 정의(DoD) 대조

| # | DoD 항목 | 판정 | 근거 |
|---|----------|------|------|
| DoD1 | [D] MkDocs strict 빌드·앵커 검증 | 🟢 충족(PASS) | `.venv/bin/mkdocs build --strict -d /private/tmp/issue-0055-audit-site` 종료 0. |
| DoD2 | [D] 허용 4종 밖 admonition 0건 | 🟢 충족(PASS) | G2 출력 0건. |
| DoD3 | [D] 동일 라벨의 유형 충돌 0건 | 🟢 충족(PASS) | G3 출력 0건. |
| DoD4 | [D] 60자 이상 동일 산문 행 0건 | 🟢 충족(PASS) | G4 출력 0건. 승인된 이미지 캡션 제외 규칙을 적용했다. |
| DoD5 | [D] 지정 범위 U+2014 0건 | 🟢 충족(PASS) | G5 출력 0건. |
| DoD6 | [D] 플랜·모델 외부 URL 각각 1종 이하 | 🟢 충족(PASS) | G6 통과, 실제 각 1종. |
| DoD7 | [D] 낡은 실습 문구 0건 | 🟢 충족(PASS) | G7 출력 0건. step03 README의 학습 목표와 인덱스도 대조했다. |
| DoD8 | [D] 대상 10파일의 (#55) 커밋 이력 | 🟢 충족(PASS) | G8 위반 0건. 삭제 파일도 삭제 커밋 보유. |
| DoD9 | [QD] 홈 배정표 주제의 외부 본문 재서술 0건 | 🟡 부분 충족(PARTIAL) | D1·D3·D4·D7·D10 잔여(F-2). |
| DoD10 | [QD] 불일치 11건 정정·동일 주제 불일치 0건 | 🟡 부분 충족(PARTIAL) | X5 미완료와 Code의 표·해설 불일치(F-2·F-3). |
| DoD11 | [QD] 삭제 기준·경고·금지·내용 있는 단서 보존 | 🟢 충족(PASS) | 소스 diff에서 토큰 입력 금지, 설치 권한, 프롬프트 주입, 회사 정책, 검토 깊이, 범위 경계 유지 확인. zip에서 이 내용을 잃는 문제는 R10에 결속했다. |
| DoD12 | [QD] ADR-0001·0005·0008·0010·0011 정합 | 🟢 충족(PASS) | 3단계·두 분류 구분·핵심 메시지·결정 룰·연결의 범위·개인용 웹앱 경계 유지. 아래 ADR 대조 참조. |
| DoD13 | [ND] 대상 10파일의 사용자 승인 기록 | 🟢 충족(PASS) | summary에 페이지별 승인·운영 가이드 삭제 결정 존재. 기록에 근거한 판정. |
| DoD14 | [ND] 이전보다 짧고 이해하기 쉬움 | 🟢 충족(PASS) | summary Task 8의 사용자 통독 종료·미해소 피드백 0건 기록. 분량 감소는 별도 실측했다. |

### 경계 검증

- `slides/slides.md`, `labs/step*/`, `overrides/`, `scripts/` 소스 변경은 없다. 슬라이드 차이는 #56으로 넘긴 승인 범위다.
- `.gitattributes` 신설은 spec에 반영된 추가 범위다. 다만 파일 제외가 `labs/` 안까지 침범한 결과는 F-1이다.
- CSS 9행 추가는 summary Task 4에 명시된 사용자 요청으로 허용했다. `row-accent`가 실제 HTML의 `strong`에 생성되는 것을 확인했으며, 팔레트·테마 전환 변경은 없다.
- 카드 전수 표 대신 사용자가 대상을 직접 지목한 절차, D2 하위 목록 유지, D13 표와 수칙 역할 분리 등 기록된 변경 결정을 새 위반으로 세지 않았다.

### 도메인/계약/ADR 정합성

- 계약·코드베이스 색인은 빈 목록이다. 별도 계약 충돌이나 코드맵 갱신 대상은 확인되지 않았다.
- 용어 사전의 Agent Skills·1회성 결과물 정의는 현재 본문과 맞는다. ADR-0008의 개명 노트·ADR-0001의 운영 가이드 삭제 노트는 결정 이력을 보존한다.
- ADR-0006의 labs 본문 보관 구조는 소스에서 유지되지만, zip으로 실습 본문을 배포하려는 결정은 F-1 때문에 충족하지 못한다.

<details>
<summary>ADR별 대조 근거 펼치기</summary>

| ADR | 대조 결과 |
|-----|-----------|
| 0001 | `docs/index.md:123` 그림·`:134` 표의 3단계 유지, Cowork 실습·Code 옵션은 `docs/intro.md:125`에 명시. |
| 0002 | 콘텐츠는 docs에서 변경, slides는 무변경. 후속 #56 동기화와 양립. |
| 0005 | `docs/index.md:87` 비개발자 개인용 자동화, `:113` 두 접근 분기, `:118` 핵심 메시지, `:160` 계획 이유 유지. 카드 해체·위치 조정은 summary Task 3의 확정값으로 대조. |
| 0006·0007 | labs 소스·stage 구조·프롬프트와 검토 원칙·step01 데이터/뷰 사례 유지. 배포 누락은 F-1. |
| 0008 | `docs/basics.md:83` 비교표·`:91` 비결정성 경고 유지. 상세 매핑 카드 삭제 후에도 `docs/index.md:140`에 두 분류가 별개라는 문장이 남아 있어, 분류 자체가 사라졌다는 판정은 하지 않았다. |
| 0009 | 기존 코랄 색을 이용한 비교표 강조만 추가. 카드 색의 의미는 허용 4종으로 정리. |
| 0010 | `docs/connect/index.md:13` 활용 수준과 자료 범위 구분, `:81` 이용까지의 경계, MCP 문서의 설정·서버 위치 구분 유지. 정책 본문 중복은 F-2에 별도 결속. |
| 0011 | `docs/basics.md:101` 개인용 로컬 HTML·자바스크립트 범위와 제외 3종 유지, `:107` 검토 책임 유지. |

</details>

## 2단계: 비판적 검증 (Critical Review)

### 발견 사항

| # | 위험도 | 영향 | 발생확률 | 카테고리 | 계보 | 설명 | 관련 파일 |
|---|--------|------|----------|----------|------|------|-----------|
| F-1 | 🔴 높음(HIGH) | 스펙·기능 달성 차단 | 통상 사용 | 버그 | 신규 | zip에 실습 README 16개와 생성 스크립트가 빠짐 | `.gitattributes:8`, `:13` |
| F-2 | 🔴 높음(HIGH) | 스펙·기능 달성 차단 | 통상 사용 | 기능 | 신규 | 홈으로 모을 5개 주제가 여러 곳의 본문으로 남음 | `docs/connect/index.md:51`, `:70`, `docs/intro.md:76`, `docs/connect/mcp-servers.md:188` |
| F-3 | 🟡 중간(MEDIUM) | 기능 저하 | 통상 사용 | 기능 | 신규 | 로컬 MCP가 Desktop 전용이라는 해설이 Code 지원 표와 충돌 | `docs/intro.md:74` |
| F-4 | 🟡 중간(MEDIUM) | 기능 저하 | 통상 사용 | 기능 | 신규 | Projects 설명을 지운 뒤 그 설명을 가리키는 링크가 남음 | `docs/connect/connectors.md:140`, `docs/intro.md:103` |

### 상세 분석

#### F-1: 최상위 제외 규칙이 labs 내부에도 적용되어 실습 본문이 zip에서 사라진다

- **위험도**: 🔴 높음(HIGH)
- **영향 축**: 스펙·기능 달성 차단
- **발생확률 축**: 통상 사용
- **카테고리**: 버그
- **관점**: 부작용·암묵적 가정·누락된 검증
- **계보**: 신규
- **스펙 결속**: R10, spec 전제 3의 「labs를 뺀 모든 최상위 항목」·전제 11의 zip 자기완결, plan Task 5.
- **권장 조치**: 제외 패턴을 루트 경로로 한정하고, zip 게이트를 파일 집합·내용 대조까지 강화한다. 디렉터리 엔트리 수와 실제 파일 수를 구분해 summary의 검증 기록도 바로잡는다.
- **완료 기준**:
  - [ ] 루트 제작용 항목만 제외하며 `labs/README.md`, 모든 step·stage README, `labs/step02-file-classifier/scripts/generate-samples.py`를 보존한다.
  - [ ] 로컬 archive의 파일 목록이 `git ls-tree -r --name-only HEAD -- labs/`와 일치하고 파일 내용도 일치한다. 현재 HEAD 기준 기대 파일은 36개다.
  - [ ] GitHub 브랜치 zip에서도 같은 검사를 수행하고 대상 커밋 식별자를 기록한다.
  - [ ] 기존 「최상위 labs만」 검사에 완전성 검사를 추가해 현재 결함에서는 실패하고 보정 뒤에는 통과하게 한다.

<details>
<summary>재현 명령·실물 대조 펼치기</summary>

- `README.md export-ignore`는 루트 README만 고르지 않는다. `scripts export-ignore`도 labs의 샘플 생성 스크립트 디렉터리에 적용된다. Git의 속성 패턴과 archive 제외 동작은 [공식 gitattributes 문서](https://git-scm.com/docs/gitattributes)에 명시돼 있다.
- 원인 확인:

  ```bash
  git check-attr export-ignore -- README.md labs/README.md labs/step01-weather/README.md labs/step02-file-classifier/scripts
  ```

  모두 `export-ignore: set`이 나온다. `/README.md`, `/scripts`처럼 루트에 고정하는 수정이 필요하다.

- 로컬 `git archive --format=tar HEAD`의 일반 파일은 **19개**다. `git ls-files labs/`의 **36개**와 비교하면 **README 16개 + generate-samples.py 1개**가 빠진다.
- GitHub `archive/refs/heads/issue-0055.zip`도 직접 내려받아 확인했다. zip comment는 `4537214948991bb7f999a4c30cbcbb2ce31bae6b`로 감사 HEAD와 같고, 포함된 19파일의 경로·바이트가 로컬 archive와 전부 일치한다.
- GitHub zip은 디렉터리를 포함해 43엔트리이며 README는 0개다. summary Task 5의 「파일 42개」는 현재 실제 파일 수와 다르다.
- 실물 SHA-256: `7f9bfa92494f59e070834196a014a7218932ea204378060c63c82ca5d7c9e544`.
- main.zip은 아직 이 브랜치 병합 전 상태다. 이 발견은 브랜치 배포물에서 재현했으며, 병합하면 학습자가 받는 main.zip에도 같은 제외 규칙이 적용된다.

누락 전체:

```text
labs/README.md
labs/step01-weather/README.md
labs/step01-weather/stage1-weather-prompt/README.md
labs/step01-weather/stage2-weather-skill/README.md
labs/step01-weather/stage3-weather-report/README.md
labs/step02-file-classifier/README.md
labs/step02-file-classifier/sample-files/README.md
labs/step02-file-classifier/scripts/generate-samples.py
labs/step02-file-classifier/stage1-file-classifier-prompt/README.md
labs/step02-file-classifier/stage2-file-classifier-skill/README.md
labs/step03-voca-quiz/README.md
labs/step03-voca-quiz/stage1-voca-quiz-prompt/README.md
labs/step03-voca-quiz/stage2-voca-quiz-skill/README.md
labs/step04-wrong-answer-note/README.md
labs/step04-wrong-answer-note/stage1-wrong-answer-note-prompt/README.md
labs/step04-wrong-answer-note/stage2-wrong-answer-note-skill/README.md
labs/step04-wrong-answer-note/stage3-wrong-answer-note-report/README.md
```

</details>

#### F-2: 홈 배정표의 링크 전환이 D1·D3·D4·D7·D10에서 끝나지 않았다

- **위험도**: 🔴 높음(HIGH)
- **영향 축**: 스펙·기능 달성 차단
- **발생확률 축**: 통상 사용
- **카테고리**: 기능
- **관점**: 암묵적 가정·누락된 검증
- **계보**: 신규
- **스펙 결속**: R3·R6, DoD9·DoD10의 X5, plan 부록 A.
- **권장 조치**: 아래 5개 주제의 본문을 배정된 홈으로 모으고 다른 위치는 한 문장과 링크로 정리한다. 유지하기로 바뀐 항목이 있다면 그 항목의 변경 결정과 배정표를 함께 맞춘다.
- **완료 기준**:
  - [ ] D1: `docs/connect/index.md:70`의 트랙별 플랜·보안 정책 재설명을 줄이고 `index.md#preparation`으로 안내한다.
  - [ ] D3: `docs/connect/mcp-servers.md:188`~`:194`의 범위·권한 재설명을 홈 링크로 모으고 토큰의 고유 설명·기간·폐기 단서는 보존한다. `connectors.md:88`의 일반 권한 경고도 원칙 홈과 대조해 한 문장 참조로 줄인다.
  - [ ] D4/X5: `docs/connect/index.md:51` 비교표를 계획대로 2개 본문 행으로 줄이고, 상세 비교는 `mcp-servers.md#vs-connector` 한 곳에서 관리한다.
  - [ ] D7: `docs/intro.md:76`~`:79`의 계정 등록·컴퓨터 설정 설명을 한 문장과 `mcp-servers.md#remote-vs-local` 링크로 바꾼다.
  - [ ] D10: `docs/connect/index.md:72`의 정책·목록 누락·문의 절차를 `connectors.md#enterprise` 링크로 모은다. 커스텀 등록의 조직 소유자 조건 등 고유 설명은 유지한다.

<details>
<summary>홈과 잔여 본문 대조 펼치기</summary>

| 주제 | 홈 | 남아 있는 사본 | 판단 근거 |
|------|----|----------------|-----------|
| D1 | `docs/index.md:51` | `docs/connect/index.md:70` | 유료 플랜 이유·개인/임직원 플랜·개인 플랜 금지를 한 문단에서 다시 설명한다. |
| D3 | `docs/security-guide.md:130`, 화면은 `connectors.md:73` | `mcp-servers.md:188`~`:194`, `connectors.md:88`~`:91` | 필요한 저장소·읽기만·넓은 계정 권한을 원칙과 별도로 다시 유지한다. plan은 토큰 절에 기간만 고유 항목으로 남기도록 지정했다. |
| D4 | `docs/connect/mcp-servers.md:21` | `docs/connect/index.md:51`~`:57` | 개요 표는 여전히 본문 5행이고, 폭·판단 부담 등의 상세 비교가 두 곳에 있다. 선택 순서 문장 4→2건만으로 표 정리 완료를 대신할 수 없다. |
| D7 | `docs/connect/mcp-servers.md:39` | `docs/intro.md:76`~`:79` | 설정 위치 두 가지·접속 주체·인터넷/사내망 조건을 본문 불릿 두 개로 반복한다. baseline 이후 해당 불릿은 삭제되지 않았다. |
| D10 | `docs/connect/connectors.md:158` | `docs/connect/index.md:72` | 정책·목록 누락·담당 부서 문의를 세 문장으로 반복하며 홈 링크도 없다. |

- 이 이슈의 목표는 표현만 바꾸는 것이 아니라 주제별 수정 위치를 한 곳으로 모으는 것이다. 위 다섯 항목은 그대로 남아 한 곳을 고칠 때 다른 사본도 고쳐야 한다.
- G4는 동일한 **행 문자열**만 검사하고 표도 제외하므로 이 문제를 검출하지 않는다. 스펙의 별도 의미 대조 DoD가 필요한 사례다.
- 명시적 사용자 유지 결정이 있는 D2(실습 원칙 하위 목록)·D13(수칙과 요약표)은 이 발견에서 제외했다. D8 계획의 이유와 실행 절차도 서로 다른 역할로 보았다.

</details>

#### F-3: X10 정정 문장이 Claude Code의 로컬 MCP 지원과 모순된다

- **위험도**: 🟡 중간(MEDIUM)
- **영향 축**: 기능 저하
- **발생확률 축**: 통상 사용
- **카테고리**: 기능
- **관점**: 부작용
- **계보**: 신규
- **스펙 결속**: R6, DoD10. claude.ai 웹의 ✗ 정정 자체는 충족했다.
- **권장 조치**: Desktop/Cowork 조건과 Code CLI의 지원을 분리해 표와 해설을 일치시킨다.
- **완료 기준**:
  - [ ] `docs/intro.md:74`가 로컬 MCP 전체를 「Claude Desktop 앱에서만」으로 제한하지 않는다.
  - [ ] Code를 `✓ 전체`로 둔 표와 본문의 지원 표기가 일치한다.
  - [ ] claude.ai 웹의 로컬 ✗ 및 Cowork의 조건부 표기는 정확한 적용 범위를 유지한다.

<details>
<summary>변경 전후·공식 문서 대조 펼치기</summary>

- `docs/intro.md:66`의 Code 열은 `✓ 전체`다. 그러나 `:74`는 Desktop에서만 동작한다고 한 뒤 Cowork와 **Code 모두 △**라고 설명한다.
- baseline에는 Desktop 전용이라는 과잉 일반화가 있었지만, 이번 변경은 Code까지 △라고 명시해 표와의 모순을 추가했다.
- [Claude Code 공식 MCP 문서의 로컬 stdio 서버 안내](https://code.claude.com/docs/ko/mcp)는 CLI가 컴퓨터에서 서버 프로세스를 직접 실행하는 절차를 제공한다. Desktop 앱 설치를 공통 조건으로 안내하면 Code 이용자가 잘못된 준비물을 갖추게 된다.
- Code는 이 교육의 옵션이므로 핵심 Cowork 실습 전체를 차단하는 문제로 보지 않고, 제품 비교의 사용성을 떨어뜨리는 것으로 분류했다.

</details>

#### F-4: Projects 설명을 지웠는데 설명으로 향하는 링크가 남아 있다

- **위험도**: 🟡 중간(MEDIUM)
- **영향 축**: 기능 저하
- **발생확률 축**: 통상 사용
- **카테고리**: 기능
- **관점**: 부작용·누락된 검증
- **계보**: 신규
- **스펙 결속**: 직접 결속 없음. 특정 프로젝트 설명 유지 요구는 없으므로 이 발견으로 1단계 판정을 낮추지 않았다.
- **권장 조치**: GitHub 별도 통합의 「프로젝트」 링크를 실제 개념을 설명하는 곳으로 바꾸거나, 해당 경로를 유지할지 함께 정리한다.
- **완료 기준**:
  - [ ] `docs/connect/connectors.md:140`의 「프로젝트」 링크가 실제 프로젝트 설명을 보여 주거나, 불필요한 링크를 제거하고 문장 자체로 뜻을 이해할 수 있게 한다.
  - [ ] summary Task 4의 「docs에서 Projects 언급이 사라졌다」 기록은 영문 검색과 한글 개념 참조를 구분해 현재 상태와 맞춘다.

<details>
<summary>앵커는 존재하지만 설명이 없는 근거 펼치기</summary>

- `docs/connect/connectors.md:140`의 `[프로젝트](../intro.md#claude-ai)`는 보존됐다.
- 그 도착 절인 `docs/intro.md:103`~`:105`에서는 Projects·Skills 본문을 지워 챗봇 소개와 참가 전제만 남겼다. 같은 페이지의 Projects 공식 참고 링크도 함께 삭제했다.
- 따라서 프로젝트라는 낯선 개념을 확인하려고 눌러도 설명을 얻지 못한다. 앵커 자체는 존재해 strict 빌드가 성공하는 의미상 참조 회귀다.
- Projects를 교육 대표 도구에서 제외한 사용자 결정을 되돌릴 필요는 없다. 남겨 둔 GitHub 별도 경로의 설명과 링크만 일치시키면 된다.

</details>

### 기등재 참조 항목

<details>
<summary>기등재 참조 표 펼치기</summary>

| 원장 항목 | 상태 | 대조한 발견 내용 | 재검토 조건 충족 | 처리 |
|-----------|------|------------------|------------------|------|
| K-0001 | 수용 | 직접 등록 커넥터의 Custom 명칭을 교육 자료에서 생략 | 미충족 | 기등재 K-0001 참조. 새 F 번호·위험도 집계 제외. |

- 검토 표시 note의 본문·유형과 `#choosing` 표 5행은 baseline 대비 동일하다.
- [공식 Connector verification](https://claude.com/docs/connectors/verification)은 Custom을 설명하지만 화면 표시 방식은 명시하지 않는다. 이번 감사에서 화면상 새 Custom 표시를 확인한 증거도 없다.
- 원장의 2026-09-06 재검토와 좁혀진 조건을 적용했으며, 절 제목·소제목 이동만으로 다시 제기하지 않았다.

</details>

### 이전 발견 추적

해당 없음. workspace와 이슈 디렉터리에 보존된 이전 #0055 감사 리포트가 없다.

## 검증 부록

<details>
<summary>홈 배정표 15행 대조 펼치기</summary>

| 주제 | 결과·근거 |
|------|-----------|
| D1 | 잔여. F-2. labs 사전 준비는 링크로 축약됐다. |
| D2 | 명시적 유지 예외. summary Task 5가 하위 목록 보존을 기록한다. 소스 README의 자기완결은 유지, zip 누락은 F-1. |
| D3 | 잔여. F-2. security-guide의 화면 절차 중복은 줄었으나 토큰·권한 원칙 사본이 남는다. |
| D4 | 부분 완료. 선택 문장 2건은 통과, 개요 상세 표는 잔여(F-2). |
| D5 | 기본 분류 구분은 홈 `index.md:140`에 남았다. 제품별 카드 삭제 후 남은 참가 조건·제목은 summary Task 4의 확정 결과로 인정. |
| D6 | 완료. 홈의 트랙별 실습 표·계획 삭제, `labs.md#series` 신설·홈 링크 갱신. 데이터/뷰·검토 원칙의 사례 언급은 역할이 다르다. |
| D7 | 잔여. F-2. |
| D8 | 사용자 확정 결과 수용. Why 계획은 이유, 메타 원칙 ①은 절차다. 카드 본문화·구체성 예시 교체는 Task 3 승인 기록 존재. |
| D9 | 완료. 보안 문서에서 불릿 3개를 관리·해제 홈 링크로 정리. |
| D10 | 잔여. F-2. 커스텀 등록 주체가 조직 소유자라는 조건은 고유 정보로 인정. |
| D11 | 완료. connect 개요 원칙과 GitHub 적용 사례 1회, 보안 결론의 한 문장 참조로 정리. |
| D12 | 완료. GHE 상세 조건은 connectors에, 보안 문서에는 조건 존재와 정책 확인 결론만 유지. |
| D13 | 명시적 변경 결정 수용. 표는 금지 대상, 수칙은 상황·이유, 마지막 표는 트랙 비교 역할. |
| D14 | 메뉴 토글 항목은 「아래 5번」으로 연결. 승인 범위 축소·원격 등록 완료·문제 해결에서의 재언급은 각 절의 행동 조건으로 보아 신규 위반으로 세지 않았다. |
| D15 | 기본 정의는 basics, 나머지는 정의 링크·제품 설명의 한 문장 수준. |

</details>

<details>
<summary>불일치 11건 대조 펼치기</summary>

| 항목 | 결과·근거 |
|------|-----------|
| X1 | 운영 가이드 삭제, `index.md:137` Skill 기초로 통일. |
| X2 | `intro.md:51` Cowork·Code 실습의 유료 플랜 필요로 정정. |
| X3 | `security-guide.md:33` 영향 범위 비례와 외부 영향 영역의 깊은 검토를 연결. |
| X4 | `connect/index.md:54` 양쪽 절차에 대화에서 켜기 포함. |
| X5 | 상세 비교표가 두 곳에 남음. F-2. |
| X6 | 플랜·모델 URL 각 1종, 모델 링크는 한국어 공식 경로로 연결. |
| X7 | 준비물 안내는 모든 실습에 Desktop 필요로 통일. Task 2의 준비물·환경 한정 결정을 적용. |
| X8 | 운영 가이드 삭제로 두 완료율 기준 함께 제거. |
| X9 | `intro.md:115` 폴더 연결 정의, `mcp-servers.md:125` 연결 링크 실재. |
| X10 | claude.ai 웹 ✗는 완료. Code 표·본문의 새 충돌은 F-3. |
| X11 | docs/labs와 labs/README 모두 step01 데이터·뷰 분리 추가. 실제 슬롯 템플릿 참조와 일치. |

</details>

<details>
<summary>명령 실행·한계·교차 벤더 기록 펼치기</summary>

- 스펙의 `[D]` 명령 8종을 재실행했다. G2·G5·G7의 종료 1은 검색 결과 없음이며 스펙의 「출력 0건」 기준으로 통과다.
- strict 빌드는 종료 0이며 사이트·내부 앵커 경고가 없었다. 설치된 Material의 MkDocs 2.0 일반 안내 배너는 변경에 따른 빌드 경고가 아니다.
- `git diff --check main...HEAD` 통과. 실측은 docs 8파일 + labs README 1파일 = 1,488행·일반 카드 39개이며 접기 1개는 별도다.
- GitHub zip을 실제로 조회했고, 그 commit comment와 파일 바이트를 HEAD의 로컬 archive와 대조했다. 최초 sandbox DNS 실패 뒤 읽기 전용 네트워크 실행으로 다운로드를 완료했다.
- 조회한 모델 문서의 한국어 URL은 공식 한국어 경로로 리다이렉트되지만 브라우징 응답 본문은 Loading 상태였다. 최신 모델별 사양 전수 검증으로 확대 해석하지 않는다.
- 승인·가독성 DoD는 저장된 사용자 승인 기록을 근거로 판정했다. 당시 대화 전체를 독립 확인하지는 않았다.
- summary의 일반 Task 0~8은 모두 완료·수행 모델 기입 상태이며, 기록된 구현 벤더는 Anthropic이다. 다만 Task 6은 `connect/index.md` 커밋 `db0134a`의 별도 세션 모델이 미확인이라고 명시하므로, **모든 구현 참여 벤더와의 독립성은 확인 대기**다. 사용자에게 해당 모델을 질문했으며, 답변 없이 Anthropic으로 확정하지 않았다.
- 이 제한은 콘텐츠·archive 재현 결과를 무효화하지 않는다. Task N의 최종 완료는 모델 확인과 감사 대응 뒤에 판단한다.

</details>
