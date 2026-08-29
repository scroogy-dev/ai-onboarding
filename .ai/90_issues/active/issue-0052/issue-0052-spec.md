# Issue #52 스펙 ― 2부(도구·데이터 연결) 슬라이드 신설

## 목표 (Goal)

#49로 신설된 2부(도구·데이터 연결) docs를 발표 호흡에 맞게 추려 슬라이드로 파생하고, 1부 슬라이드의 접합부를 docs와 정합하게 2부 안내로 전환한다.

---

## 범위 (Scope)

**포함 (In)**

- 2부 슬라이드 신설. 파생 원본은 docs 4곳이다 (ADR-0002 단방향 파생).
    - `docs/connect/index.md`: 개요(연결이 왜 필요한가)
    - `docs/connect/connectors.md`: 기본 커넥터(Atlassian·GitHub)
    - `docs/connect/mcp-servers.md`: MCP 서버 이용하기
    - `docs/security-guide.md`의 외부 연결 절(`#external-connection`): 보안 유의점 요약
- 1부 접합부 슬라이드 보정: 「그 밖의 기본 용어 ― 마크다운 · 외부 컨텍스트」 슬라이드의 「설치·내부 구조 모두 범위 밖.」 서술을 docs/basics.md와 같은 2부 안내로 전환한다. RAG 내부 구조가 범위 밖이라는 선언은 유지한다.
- 목차 반영: 「오늘의 흐름」에 2부 구간을 추가한다 (Task 0 확정: 기존 `slides/slides.md`에 2부 섹션으로 이어 붙이기)
- 1부 docs↔slides 동기화 점검(좁은 범위): #50이 docs에 반영한 변경 이력을 기준으로 슬라이드 반영 여부를 대조하고, 누락만 docs 기준으로 보정한다 (ADR-0002가 예정한 「발표 마일스톤 직전 docs 변경 이력 점검」)

**비포함 (Out)**

- `docs/` 본문 수정: ADR-0002 단방향 파생(슬라이드를 먼저 고치고 문서를 맞추는 방향 금지)이라 docs는 이 이슈에서 손대지 않는다. 접합부의 docs 쪽 전환은 #49에서 완료됐다. Task 6 점검과 audit 1차에서 사용자 승인으로 연 예외 6건(5파일)은 전제 10을 따른다.
- `labs/` 2부 실습 신설 (ADR-0010 후속 조치의 별도 이슈)
- 도구 축 다원화(ChatGPT 등), MCP 서버 개발, RAG 내부 구조 (ADR-0010 결정 3·5)
- 기존 1부 슬라이드의 내용 변경 중 접합부·목차 반영과 1부 동기화 점검(Task 5)의 누락 보정에 해당하지 않는 것. 1부 전수 재구성·전수 대조는 하지 않는다 (점검 기준은 #50 변경 이력으로 한정)
- 컨플루언스 동기화
- `.ai/` 워크스페이스 구조 변경: 이 이슈의 산출물이 아니다. 단 `c26aa33`(ai-workspace 구조 갱신, 원장 `70_ledger/` 신설)은 Task N `--response`의 이관 목적지를 마련하려고 사용자 승인으로 이 브랜치에 포함했다. 전제 11을 따른다.

---

## 완료의 정의 (Definition of Done)

> **검증 레벨** ― 낮을수록 좋다(자동 검증에 가까움). 기본은 L1, 한 레벨 내릴 때마다 강등 사유를 함께 적는다.
>
> - `[D]`  L1 결정적   ― 명령이 합/불을 판정, 사람 판단 없음
> - `[QD]` L2 준결정적 ― 다른 AI·기준 체크리스트가 채점
> - `[ND]` L3 비결정적 ― 사람이 직접 읽고 판단

- [ ] [D] 2부 슬라이드가 포함된 덱이 Slidev 빌드를 통과한다 (변경으로 덱이 깨지지 않음을 보장).
  <details>
  <summary>검증 명령 ― 출력 0건이면 통과</summary>

  ```bash
  ( cd slides && npm run build ) >/dev/null 2>&1 || echo '위반: Slidev 빌드 실패'
  ```

  - 설계 주의: 실패 시 리다이렉트를 떼고 재실행해 원인을 확인한다.
  </details>
- [ ] [D] 1부 접합부가 전환된다. 기존 문구 「설치·내부 구조 모두 범위 밖」이 `slides/slides.md`에서 0건이 되고, 덱에 2부 안내 표기가 존재한다. 착수 시점에는 첫 명령이 1건을 출력하는(미전환) 상태라 이 게이트는 실제로 실패하는 상태에서 시작한다.
  <details>
  <summary>검증 명령 ― 출력 0건이면 통과</summary>

  ```bash
  grep -n '설치·내부 구조 모두 범위 밖' slides/slides.md
  grep -q '2부' slides/slides.md || echo '위반: 1부 덱에 2부 안내 없음'
  ```

  - 설계 주의: 두 번째 검사는 덱 수준 존재 검사라 접합부 슬라이드 밖의 「2부」 표기로도 통과한다(과소 검출). 접합부 안 배치·문구 적정성은 아래 [QD] 항목과 Task 6 사용자 점검이 맡는다.
  </details>
- [ ] [D] 발행물(docs·labs·slides)과 이 이슈 작업 문서에서 U+2014가 0건으로 유지된다 (#50 게이트 승계. 남기는 줄표는 U+2015).
  <details>
  <summary>검증 명령 ― 출력 0건이면 통과</summary>

  ```bash
  BAD=$(printf '\xe2\x80\x94')
  git grep -In --untracked "$BAD" -- 'docs/*.md' 'labs/' 'slides/*.md' '.ai/90_issues/active/issue-0052/'
  ```

  - 설계 주의: U+2014를 리터럴로 담으면 이 문서 자신이 게이트 대상이라 명령이 스스로 위반을 만든다(#50에서 확인된 함정). printf 바이트 조립으로 우회한다. `git grep --untracked`는 gitignore된 `slides/node_modules/`·`dist/`·`review/`를 자동 제외한다. 대상은 #50 게이트 범위와 같은 발행물 문서(docs·slides 마크다운, labs 전체)와 이 이슈 작업 문서로 한정한다. `docs/assets/`의 CSS와 `slides/`의 TS·CSS 코드 주석에는 #44 시점의 U+2014가 남아 있으나 #50 게이트 범위 밖이었으므로 이 이슈에서도 대상이 아니다.
  </details>
- [ ] [D] 1부 동기화 점검표가 #50의 docs 변경 커밋 전부를 행으로 등재한다 (좁은 점검의 전수성 보장). 이 게이트는 행 수만 세므로 판정 내용의 품질은 보장하지 않으며, 그 판정은 아래 [QD] 항목이 맡는다.
  <details>
  <summary>검증 명령 ― 출력 0건이면 통과</summary>

  ```bash
  F=.ai/99_workspace/issue-0052-part1-sync-check.md
  C=$(git log --format=%h 0515ca3^1..0515ca3^2 -- docs | wc -l | tr -d ' ')
  R=$(grep -cE '^\| [0-9a-f]{7,} ' "$F" 2>/dev/null || true)
  { [ "$C" -gt 0 ] && [ "$C" -eq "${R:-0}" ]; } || echo "위반: docs 커밋 ${C}건 대비 점검표 행 ${R:-0}건"
  ```

  - 설계 주의: 열거 앵커는 PR #53 병합 커밋(`0515ca3`)의 두 부모 범위로 고정해 결정적이다(이력 재작성이 없는 한 불변, 착수 시점 실측 12건). 점검표 행은 `| <짧은 해시> | …` 형식을 지켜야 게이트가 센다. 파일 부재·행 0건도 위반으로 환원된다.
  </details>
- [ ] [QD] 1부 동기화 점검표의 각 행이 반영 / 해당 없음 / 누락 중 하나로 판정되고, 누락 판정 항목은 docs 기준 보정이 완료된다  (검증: 교차모델 audit이 점검표·슬라이드 대조 채점)  ← 강등 사유: 서술의 반영 여부는 의미 대조라 명령으로 환원 불가
- [ ] [QD] 2부 슬라이드의 내용이 docs 원본과 모순되지 않는다. 두 표면이 다르게 말하면 docs가 정답이다(ADR-0002 결정 5)  (검증: 교차모델 audit이 원본 대조 채점)  ← 강등 사유: 발표 호흡으로 추린 요약·재구성의 정합은 의미 대조라 명령으로 환원 불가
- [ ] [QD] MCP 서버 슬라이드가 ADR-0010 결정 3-1의 두 축(설정을 어디에 두나 / 서버가 어디에서 실행되나) 구도를 유지한다  (검증: 교차모델 audit이 ADR 대조 채점)  ← 강등 사유: 구도 유지 여부는 의미 판단이라 명령으로 환원 불가
- [ ] [ND] 발표 호흡(장수·밀도)이 적절하고 슬라이드 오버플로우가 없다  (검증: 사용자가 viewport로 직접 확인하며, AI는 사용자가 지정한 페이지만 분석·수정한다)  ← 강등 사유: 렌더링 결과는 시각 판단이라 명령으로 환원 불가

---

## 전제 (Assumptions)

1. 줄표 규칙은 #50에서 확정됐고 repo 안 정책 문서로는 존재하지 않는다: 발행물·이슈 작업 문서에서 U+2014 0건을 유지하고, 남기는 줄표는 U+2015이며 자리를 한정한다(제목 뒤 부제, admonition 제목, nav, 링크 라벨, 표의 기호 자리, 원문 인용). 산문의 「라벨 부연」 형태는 쌍점·문장 분리·괄호로 쓴다. 신설 슬라이드에도 그대로 적용한다.
2. 신설 슬라이드는 기존 덱의 관례를 따른다: ADR-0009 Claude 라이트 테마(default 테마 + `slides/style.css`), 카드형 시각 구분, 슬라이드마다 HTML 주석으로 발표자 노트와 설계 근거를 남긴다. 별도 덱으로 가더라도 테마·스타일은 공유한다.
3. 빌드 검증 명령은 `cd slides && npm run build`이고 엔트리는 Slidev 기본값 `slides.md`다.
4. `slides/review/`·`slides/dist/`·`slides/node_modules/`는 gitignore된 로컬 산출물이라 이 이슈의 변경·검증 대상이 아니다.
5. 이슈 본문 참고 3(slides/ 줄표 정리 포함 여부의 #50 결정 확인)은 해소됐다: #50이 slides 154곳 산문 정리와 U+2015 문자 통일을 이미 수행했다.
6. 접합부의 docs 쪽 현황: `docs/basics.md`는 「실제로 연결하는 방법은 2부에서 다룹니다」로 이미 전환됐고(#49), RAG 내부 구조 범위 밖 선언은 남아 있다. 슬라이드 보정도 같은 구도를 따른다.
7. 덱 구성(Task 0 확정, 2026-08-23): 기존 `slides/slides.md`에 2부 섹션으로 이어 붙인다. 별도 덱 분리는 2부를 독립 URL로 운영할 수 있으나 CI(`.github/workflows/deploy.yml`)에 빌드 스텝·출력 경로 추가가 필요해 채택하지 않았다. 세션 분리가 필요하면 한 덱 안에서 페이지 이동으로 운영한다. 목차는 「오늘의 흐름」에 2부 구간을 추가한다.
8. 분량 목표(Task 0 확정): 고정 상한을 두지 않는다. Task 1 구성안에서 원본 밀도를 기준으로 장수를 제안하고, 사용자가 승인 시 조정해 확정한다.
9. 1부 정합 점검의 범위(사용자 확정, 2026-08-23): #50 변경 이력 기준의 좁은 점검으로 한정하고 1부 전수 대조는 하지 않는다. 착수 전 표본 확인에서 모델 버전·컨텍스트 크기·제품 나열 순서·교육 범위 경계 4곳은 슬라이드 반영이 이미 확인됐다.
10. docs 수정 예외 6건(사용자 승인, 2026-08-29): Task 6 점검과 audit 1차에서 드러난 서술 결함이 슬라이드가 아니라 docs 본문 자체에 있어 docs를 먼저 고치고 슬라이드로 파생했다. 비포함의 금지 취지는 「슬라이드를 먼저 고치고 문서를 맞추는 방향」을 막는 것이라 이 건들은 그 방향에 해당하지 않는다. 예외 기록은 건별이 아니라 Task 6 종료 시 한 번에 남기기로 했다.
    - `docs/basics.md` #three-forms: 「두 끝점 사이」·「반대편 끝의」 공간 은유를 기준 직접 서술로 (슬라이드 19쪽)
    - `docs/connect/index.md` #from-part1: 연결하지 않는 쪽이 맞는 경우(공개된 자료·한 번 쓰고 마는 자료)와 연결이 필요한 조건(「로그인과 권한 확인이 필요한 일」) 두 문단 신설 (슬라이드 51쪽)
    - `docs/connect/connectors.md` #github: 학생·일반인 박스를 「읽기만이라면 연결하지 않아도 됩니다」로 전환하고, 임직원 박스의 GHE 판단 근거를 「로그인과 권한 확인이 필요한 일」 기준으로 교체 (슬라이드 63쪽)
    - `docs/security-guide.md` #external-connection: 소스코드 도구 항목의 「판단의 대상은 연결이지 도구가 아니다」 문장을 「이 절은 회사 자료를 소스코드 도구에서 다루게 될 때의 기준」으로 교체 (63쪽 연동)
    - `docs/connect/mcp-servers.md` #remote-vs-local: example 박스 첫 문단(「계정 등록으로 안 되는 자료는 인터넷에 공개되어 있지 않은 자료」·「사실상 하나」) 삭제. 51쪽이 고정한 「공개된 자료」 뜻과 충돌 (슬라이드 71쪽)
    - `docs/connect/mcp-servers.md` #vs-connector note·#choosing 표: 커넥터 검토 표시 서술을 「자동 검사만」·「검토 표시가 없으면」에서 공식 문서(Connector verification)의 체크 표시(Verified)·「Community」 라벨 구분으로 교체. 「보안·안정성까지 살펴본」도 「not a security audit」과 충돌해 함께 교체. `.ai/40_domain/glossary.md` 커넥터 행 동반 갱신 (슬라이드 66·73쪽, audit 1차 F-2, `--response` 승인)
11. 워크스페이스 구조 갱신 커밋 `c26aa33`(사용자 승인, 2026-08-29): ai-workspace 스킬 갱신분(`70_ledger/` 원장 골격 4파일, `writing-principles.md`·`writing-principles-local.md`, `AI-CONTEXT.md`, `context-loading.md`)을 audit 전에 이 브랜치에 넣었다. `--response`가 이관으로 정한 발견을 원장에 등재하려면 목적지가 먼저 있어야 하기 때문이다. 발행물(docs·slides·labs) 변경은 0건이고 커밋에 `(#52)` 접미사를 붙이지 않아 이력에서 구분된다. audit 1차 F-1이 스펙에 근거 없는 범위 확장으로 지적했고, `--response`에서 커밋 분리 대신 이 문서화로 확정했다(분리하면 이 브랜치에서 이관 목적지가 사라진다).

---

## 연관 문서

| 문서 | 역할 |
|------|------|
| [ADR-0002](../../../50_adr/active/adr-0002-publishing-structure-docs-ssot-slides-derivative.md) | docs SSoT·slides 단방향 파생 구조. 파생 방향과 「docs가 정답」 원칙의 근거 |
| [ADR-0010](../../../50_adr/active/adr-0010-part2-connection-scope-expansion.md) | 2부 신설 결정. 범위 경계(「이용까지만」)·두 축 구도·후속 조치(이 이슈)의 근거 |
| [ADR-0009](../../../50_adr/active/adr-0009-unified-ui-theme-claude-style.md) | 통합 UI 테마(Claude 라이트). 신설 슬라이드 스타일 기준 |
| [ADR-0005](../../../50_adr/active/adr-0005-core-message-non-developers-make-software.md) | 비개발자 경계. 「이용까지만」 선의 상위 근거 |
| [glossary](../../../40_domain/glossary.md) | 도메인 용어 사전. 커넥터·MCP 등 용어 표기 정합 확인 |
| `docs/connect/index.md` · `docs/connect/connectors.md` · `docs/connect/mcp-servers.md` | 파생 원본 (2부 본문) |
| `docs/security-guide.md` 외부 연결 절 | 파생 원본 (보안 유의점 요약의 SSoT) |
| `slides/slides.md` | 기존 1부 덱. 접합부 보정 대상이자 시각 관례의 기준 |
