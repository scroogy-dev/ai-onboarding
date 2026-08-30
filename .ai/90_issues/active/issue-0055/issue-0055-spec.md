# Issue #55 스펙 ― docs 중복 제거·카드 박스 축소·간결화 전체 정리

## 목표 (Goal)

docs 9개 파일과 `labs/README.md`에서 같은 주제의 본문을 홈 1곳으로 모으고, 카드 박스를 경고·부연·의도적 강조 자리로만 되돌리며, 학습자의 행동과 무관한 설명을 걷어내, 한 곳을 고치면 다른 곳이 어긋나는 구조를 없앤다. 그 결과가 #56(slides 전수 동기화)의 확정 원본이 된다.

---

## 범위 (Scope)

**포함 (In)**

- 정리 대상 파일 9개: `docs/index.md`, `docs/basics.md`, `docs/intro.md`, `docs/labs.md`, `docs/connect/index.md`, `docs/connect/connectors.md`, `docs/connect/mcp-servers.md`, `docs/security-guide.md`, `labs/README.md`
- 삭제 대상 파일 1개: `docs/operation-guide.md` (Task 0 확정). `mkdocs.yml` nav 항목과 `docs/index.md`의 「함께 읽어보세요」 링크 줄을 함께 지운다 (Task 3 정리 후 311행. 착수 시점 325행)
- 중복 제거: 주제마다 홈 1곳, 다른 곳은 한 줄 링크. 사전 분석 노트 부록 A-1의 15건이 출발점이다
- 카드 박스(admonition) 정리와 유형 통일. 페이지마다 카드를 전수 표로 제시하고 사용자가 항목별로 유지·풀기를 정한다. 허용 유형은 4종(warning·tip·note·example)이고 예외는 없으며, 개수 상한은 두지 않는다 (Task 0 확정)
- 간결화: 삭제를 허용한다. 페이지마다 삭제 후보를 표로 제시하고 사용자가 직접 선별한 뒤, 남은 내용을 간결화한다 (Task 0 확정). 근거를 남길 필요가 있으면 `???` 접기로 내린다
- 불일치 정정: 노트 부록 A-2의 11건과 docs가 낡은 2건(`docs/labs.md`·`labs/README.md`의 step03 학습 포인트, 결정 룰 부재). 사용자 판단이 필요했던 항목의 확정 방향은 전제 4에 있고, 그중 X1·X8은 운영 가이드 삭제로 해소된다
- 용어·링크 통일: 재사용 자산 명칭 3종 혼용, 플랜 비교 URL 2종, 모델 문서 URL 2종, 트랙명 축약, 「폴더 연결」 미정의
- 동반 갱신: `mkdocs.yml` (운영 가이드 nav 항목 제거, `validation: anchors: warn` 추가, 페이지 제목이 바뀌면 nav 라벨), `.ai/40_domain/glossary.md`(용어 정의가 바뀔 때만)
- 진행 방식: 페이지 단위로 초안 → 사용자 점검 → 명시적 승인 → 커밋. 승인 전에는 다음 페이지로 넘어가지 않는다
- 재실행 가능한 게이트: 카드 유형·라벨 일관성, 교차 파일 동일 산문 행, U+2014, 링크 URL 종류, 운영 가이드 잔존 참조, MkDocs strict 빌드(앵커 검증 포함). 카드 총수는 게이트가 아니라 기록 대상이다

**비포함 (Out)**

- `slides/slides.md`: #56에서 이 이슈 완료 후 전수 동기화한다. 이 이슈의 페이지별 docs 커밋 이력이 #56의 입력이다
- `labs/step*/` 하위 README·자산: ADR-0006상 실습 본문의 SSoT라 참조만 한다 (step03 학습 포인트의 정답 출처)
- ADR이 정한 결정의 변경: 교육 범위(ADR-0011), 3단계 모델(ADR-0001), 메시지 프레임(ADR-0005), 결정성 비교표 배치(ADR-0008), 두 축 구도(ADR-0010)는 서술만 정리하고 결정은 바꾸지 않는다
- 새 페이지 신설. 결정 룰은 `docs/index.md`의 `### AI 활용 3단계와 내 위치` 첫 부분에 편입한다 (Task 3에서 확정값 변경). nav 구조도 바꾸지 않되, 운영 가이드 삭제에 따른 항목 제거는 예외다
- 테마·CSS 변경(ADR-0009), 슬라이드 색 카드, 컨플루언스 동기화, `docs/assets/`·`overrides/`·`scripts/`

---

## 완료의 정의 (Definition of Done)

> **검증 레벨** ― 낮을수록 좋다(자동 검증에 가까움). 기본은 L1, 한 레벨 내릴 때마다 강등 사유를 함께 적는다.
>
> - `[D]`  L1 결정적   ― 명령이 합/불을 판정, 사람 판단 없음
> - `[QD]` L2 준결정적 ― 다른 AI·기준 체크리스트가 채점
> - `[ND]` L3 비결정적 ― 사람이 직접 읽고 판단

- [ ] [D] MkDocs strict 빌드를 통과한다 (변경으로 사이트·내부 링크·앵커가 깨지지 않음을 보장). Task 1에서 `validation: anchors: warn`을 넣어 앵커 깨짐도 이 게이트가 잡는다. 착수 시점에 통과 상태라 회귀 방지 게이트다.
  <details>
  <summary>검증 명령 ― 출력 0건이면 통과</summary>

  ```bash
  .venv/bin/mkdocs build --strict -d "${TMPDIR:-/tmp}/issue-55-site" >/dev/null 2>&1 || echo '위반: MkDocs strict 빌드 실패'
  ```

  - 설계 주의: 실패 시 리다이렉트를 떼고 재실행해 원인을 확인한다. `mkdocs`는 repo의 `.venv`에만 있다 (전역 설치 없음).
  </details>
- [ ] [D] admonition 유형이 Task 0 확정 허용 목록(warning·tip·note·example) 밖에서 0건이다. 예외는 두지 않는다. 착수 시점 위반 39건(info 22·abstract 9·success 5·quote 2·failure 1)이라 실제로 실패하는 상태에서 시작한다.
  <details>
  <summary>검증 명령 ― 출력 0건이면 통과</summary>

  ```bash
  grep -nE '^\s*(!!!|\?\?\?\+?) +[a-z]+' docs/*.md docs/connect/*.md \
    | grep -vE '^[^:]+:[0-9]+:\s*(!!!|\?\?\?\+?) +(warning|tip|note|example)\b'
  ```

  - 설계 주의: Task 0에서 허용 목록이 바뀌면 두 번째 grep의 대안 목록을 함께 고친다. `???` 접기도 유형 검사 대상이다(접기라고 임의 유형을 쓰지 않게).
  </details>
- [ ] [D] 같은 라벨의 admonition이 서로 다른 유형으로 쓰인 곳이 0건이다. 착수 시점 1건(「본 교육에서의 위치」 abstract·tip·note).
  <details>
  <summary>검증 명령 ― 출력 0건이면 통과</summary>

  ```bash
  grep -hoE '^\s*!!! [a-z]+ "[^"]+"' docs/*.md docs/connect/*.md \
    | sed -E 's/^ *!!! ([a-z]+) "(.*)"/\2|\1/' | sort -u | cut -d'|' -f1 | uniq -d
  ```

  </details>
- [ ] [D] 대상 파일 10개 사이에 60자 이상 동일한 산문 행이 0건이다 (복붙 중복 차단). 착수 시점 8건(`docs/labs.md`↔`labs/README.md` 6건, `connectors.md`↔`mcp-servers.md` 2건)이라 실제로 실패하는 상태에서 시작한다.
  <details>
  <summary>검증 명령 ― 출력 0건이면 통과</summary>

  ```bash
  for f in docs/*.md docs/connect/*.md labs/README.md; do
    sed 's/^[[:space:]]*//' "$f" | grep -vE '^(\||#|<|!!!|\?\?\?|```|>|---|$)' | awk 'length($0)>=60' | sort -u | sed "s|$|\t$f|"
  done | sort | awk -F'\t' '{c[$1]++; f[$1]=f[$1]" "$2} END{for(k in c) if(c[k]>1) print c[k]"x\t"k"\t"f[k]}'
  ```

  - 설계 주의: 표·제목·카드 헤더·HTML·인용은 제외해 산문만 센다. 임계 60자는 착수 시점 실측에서 관용구 오탐이 없는 값이다. `labs/README.md`는 zip 동봉 자료라 자기완결이 필요하므로, 그 쌍의 중복은 README 원문을 남기고 `docs/labs.md` 쪽을 링크로 바꿔 해소한다.
  </details>
- [ ] [D] 발행물(docs·labs·slides)과 이 이슈 작업 문서에서 U+2014가 0건으로 유지된다 (#50·#52 게이트 승계. 남기는 줄표는 U+2015).
  <details>
  <summary>검증 명령 ― 출력 0건이면 통과</summary>

  ```bash
  BAD=$(printf '\xe2\x80\x94')
  git grep -In --untracked "$BAD" -- 'docs/*.md' 'docs/connect/*.md' 'labs/' 'slides/*.md' '.ai/90_issues/active/issue-0055/' '.ai/99_workspace/notes/'
  ```

  - 설계 주의: U+2014를 리터럴로 담으면 이 문서가 스스로 위반을 만든다. printf 바이트 조립으로 우회한다.
  </details>
- [ ] [D] 같은 목적의 외부 링크가 한 종류다. 플랜 비교 URL과 모델 문서 URL이 각각 1종 이하. 착수 시점 각 2종이라 실제로 실패하는 상태에서 시작한다.
  <details>
  <summary>검증 명령 ― 출력 0건이면 통과</summary>

  ```bash
  for p in 'pricing' 'about-claude/models/overview'; do
    n=$(grep -ohE "https://[a-z./]*${p}[^ )]*" docs/*.md docs/connect/*.md | sort -u | wc -l | tr -d ' ')
    [ "$n" -le 1 ] || echo "위반: ${p} URL ${n}종"
  done
  ```

  </details>
- [ ] [D] 낡은 실습 서술이 0건이다. step03 학습 포인트 「Skill 활용 다양화」와 공간 은유 「검수 자리」가 `docs/labs.md`·`labs/README.md`에 남지 않는다 (정답 출처는 `labs/step03-voca-quiz/README.md` 학습 목표와 #49의 「검수 단계」 교체).
  <details>
  <summary>검증 명령 ― 출력 0건이면 통과</summary>

  ```bash
  grep -nE 'Skill 활용 다양화|검수 자리' docs/labs.md labs/README.md
  ```

  </details>
- [ ] [D] 대상 파일 10개 모두 이 브랜치에 `(#55)` 커밋 이력이 있다 (#56이 커밋 단위로 대조할 수 있게 페이지별 이력을 남김).
  <details>
  <summary>검증 명령 ― 출력 0건이면 통과</summary>

  ```bash
  for f in docs/index.md docs/basics.md docs/intro.md docs/labs.md docs/connect/index.md docs/connect/connectors.md docs/connect/mcp-servers.md docs/security-guide.md docs/operation-guide.md labs/README.md; do
    git log --format=%s main..HEAD -- "$f" | grep -q '(#55)' || echo "위반: $f 에 (#55) 커밋 없음"
  done
  ```

  - 설계 주의: `main..HEAD`는 작업 브랜치에서 실행한다. 머지 후에는 범위를 PR 병합 커밋의 두 부모로 바꿔 재실행한다.
  </details>
- [ ] [QD] 홈 배정표(plan 부록)의 각 주제가 홈 파일 밖에서 본문으로 재서술되지 않는다 (한 줄 링크·한 문장 언급은 허용)  (검증: 교차모델 audit이 배정표 대 본문 대조 채점)  ← 강등 사유: 재서술과 각도가 다른 언급의 구분은 의미 판단이라 명령으로 환원 불가
- [ ] [QD] 노트 부록 A-2의 불일치 11건이 각각 Task 0 확정 방향으로 정정되어, docs 안에서 같은 주제를 다르게 말하는 곳이 0건이다  (검증: 교차모델 audit이 spec 전제의 확정 방향 대 본문 대조 채점)  ← 강등 사유: 「다르게 말한다」는 의미 대조라 명령으로 환원 불가
- [ ] [QD] 삭제·접기한 내용이 Task 0 확정 삭제 기준에 맞고, 결정사항·경고·금지·내용 있는 caveat는 삭제되지 않았다  (검증: 교차모델 audit이 착수 커밋 대 최종 diff를 기준으로 채점)  ← 강등 사유: 「행동을 바꾸는 내용인가」는 의미 판단이라 명령으로 환원 불가
- [ ] [QD] ADR-0001·0005·0008·0010·0011의 결정과 서술이 모순되지 않는다. 특히 ADR-0005의 메시지 3곳과 결정 룰이 docs에 있다  (검증: 교차모델 audit이 ADR 대조 채점)  ← 강등 사유: 구도 유지 여부는 의미 판단이라 명령으로 환원 불가
- [ ] [ND] 대상 파일 10개 각각에 사용자의 명시적 승인이 있고 summary에 승인 기록이 남는다  (검증: 사람 리뷰)  ← 강등 사유: 승인은 사용자 행위라 명령으로 환원 불가
- [ ] [ND] 비개발자가 읽었을 때 이전보다 짧고 이해하기 쉽다  (검증: 사용자 통독)  ← 강등 사유: 가독성은 사람 판단

---

## 전제 (Assumptions)

1. 사전 분석 노트: `.ai/99_workspace/notes/2026-08-30-docs-slides-overall-review.md` (커밋 `6bad27c`). 중복 15건·불일치 11건·카드 실측·슬라이드 매핑이 부록에 있다. 노트의 줄 번호는 커밋 `3e57651` 기준이며, 이 이슈가 진행되면 어긋나므로 페이지 착수 시 다시 잰다.
2. 사용자 확정값(2026-08-30): 범위는 `labs/README.md`를 포함한 대상 파일 전부다. 강사용 `docs/operation-guide.md`는 Task 0에서 페이지째 삭제로 확정되어 정리 대상이 아니라 삭제 대상이 되었고, 정리 대상 파일은 9개다. 삭제를 허용한다. 삭제·카드·간결화 결과는 페이지 단위로 사용자가 확인한 뒤 명시적으로 승인한다. 이슈는 둘로 나눠 이 이슈(docs) 완료 후 #56(slides)을 착수한다.
3. Task 0 확정값 (2026-08-30 사용자 확정. 이 목록에 없는 전제로 구현 방향을 바꾸지 않는다):
    - **홈 배정표**: 지금 확정하지 않는다. Task 1에서 15행 초안을 제시하고 행 단위로 승인받아 확정한다.
    - **카드 판단 방식**: 개수 상한을 게이트로 두지 않는다. 페이지마다 카드를 전수 표로 제시하고(줄번호·현재 유형·라벨·담긴 내용 한 줄·유지/풀기 제안과 근거) 사용자가 항목별로 정한다. 결과 카드 수는 게이트가 아니라 기록 대상이다. 근거: 목표는 개수가 아니라 그 내용이 카드일 이유가 있는지다.
    - **카드 유형**: 9종을 4종으로 통일한다 (warning 경고·금지 / tip 권장·요령 / note 부연·예외 / example 예시). abstract·info·success·failure·quote는 폐지하고, 같은 라벨이 다른 유형으로 쓰인 곳도 맞춘다. 근거: 같은 성격의 내용이 다른 색으로 보이면 독자가 의미를 오해한다.
        - **예외 없음 (2026-08-30 Task 3에서 두 차례 변경된 끝의 확정값)**: `docs/index.md`의 「요구합니다」·「요구하지 않습니다」를 `success`·`failure` 예외 1쌍으로 두기로 했다가, 사용자가 두 카드를 카드째 풀어 나열식 본문으로 바꾸기로 정해 예외 자체가 사라졌다. 허용 4종에 예외를 두지 않는다.
    - **삭제 선별 방식**: AI가 기준만 들고 자동 판단하지 않는다. 페이지 Task마다 삭제 후보를 표로 제시하고(줄범위·내용 요약·제안 사유) 사용자가 직접 선별한 뒤, 남은 내용을 간결화한다.
    - **앵커 검증**: `mkdocs.yml`에 `validation: anchors: warn`을 추가한다. strict 빌드에서 경고가 오류로 승격되므로, 기존에 깨져 있던 앵커도 이 이슈에서 함께 고친다.
    - **결정 룰 편입 위치**: `docs/index.md`의 `### AI 활용 3단계와 내 위치` 첫 부분(사다리 문단 직전).
        - **2026-08-30 Task 3에서 사용자가 확정값 변경**: 원래 확정값은 「메타 원칙 근처」였다. ADR-0005의 후속 변경 노트가 결정 룰 박스를 「N-2 H3 첫 부분으로 통합 ― 두 접근을 사다리 진입 직전에 비교 카드로 먼저 노출」로 정하고 있어, 메타 원칙(How 섹션) 자리는 그 결정과 어긋난다. ADR 쪽으로 맞췄다.
    - **진행 순서·커밋 단위**: plan의 Task 순서 그대로 간다. 페이지 승인마다 `docs: <페이지> 정리 (#55)`로 커밋한다.
    - **운영 가이드 삭제**: `docs/operation-guide.md`를 페이지째 삭제한다. `mkdocs.yml` nav 항목과 `docs/index.md` 325행의 링크 줄도 함께 지운다. 발행물 참조는 그 두 곳뿐이며(Task 1 실측), 그 밖에 ADR-0001의 「영향 범위」와 「후속 조치」 두 줄이 이 파일을 이력으로 언급한다. ADR 처리 방향은 Task 7 착수 시 사용자에게 묻는다. 삭제로 X1(운영 가이드 쪽 「2단계(Claude Projects) 실습」)과 X8(완료율 80·60)은 자동 해소되므로 별도 정정 대상에서 뺀다.
4. 사용자 판단이 필요했던 불일치의 확정 방향 (2026-08-30):
    - **X2 유료 플랜 필요 이유**: 「Cowork·Code 실습에 유료 플랜이 필요」로 통일한다. `intro.md` 53행의 「세 제품 모두」를 이 문장으로 고친다. claude.ai에 무료 플랜이 있는 사실과 어긋나지 않게 하기 위함이다.
    - **X3 결과물 검토 강도**: 「검토 깊이는 영향 범위에 비례」를 기본 원칙으로 두고, `security-guide.md`가 다루는 외부 공유·개인정보·사실 확인 영역은 「영향이 밖으로 나가므로 항상 깊게 본다」는 예외로 이어지게 한 줄 단서를 붙인다. 두 서술이 같은 원칙의 적용이 되게 만든다.
    - **X6 외부 링크**: 한국어 페이지를 우선하고, 한국어 페이지가 없을 때만 영문을 쓴다. 플랜 비교는 `claude.com/pricing`, 모델 문서는 `docs.claude.com`을 기준 도메인으로 하되, 한국어 경로(`/ko/`) 존재 여부는 Task 2에서 실제로 확인해 확정한다.
    - **X7 Claude Desktop 필요 시점**: 모든 실습을 Claude Desktop의 Claude Cowork에서 진행한다. 준비물·실습 안내를 이 기준으로 통일하며, `labs.md` 59행의 「stage 3 실습」 한정 서술도 여기에 맞춘다. 이 전제는 현재 docs의 제품별 실습 안내와 충돌할 수 있으므로, Task 2에서 영향 위치를 먼저 목록으로 제시한 뒤 고친다.
    - **X10 claude.ai 로컬 MCP 표기**: `intro.md` 68행 표의 △를 ✗로 고치고 「로컬 연결은 Desktop 열을 보세요」 한 줄을 붙인다. 바로 아래 76행 본문(「Desktop 앱에서만 동작」)과 맞춘다.
    - **X11 step01 데이터·뷰 분리**: `index.md` 254행의 step01 사례를 유지하고, `docs/labs.md` 40행 학습 포인트에 데이터·뷰 분리를 추가한다. step01 stage 3이 슬롯 템플릿(뷰)에 날씨 값(데이터)을 채우는 구조라 사례가 성립한다.
    - **2단계 대표 도구**: Agent Skills로 통일한다. 실제 실습(step02·step03)이 전부 Skill 기반이다.
    - **재사용 자산 명칭**: 페이지마다 첫 등장은 「Agent Skills」, 이후 본문은 「Skill」로 쓴다. 한글 음차 「에이전트 스킬」은 쓰지 않는다.
5. 줄표 규칙(#50 확정, repo 정책 문서 없음): 발행물·이슈 작업 문서에서 U+2014 0건. 남기는 줄표는 U+2015이며 제목 뒤 부제·admonition 제목·nav·링크 라벨·표 기호 자리에만 쓴다. 산문의 「라벨 부연」은 쌍점·문장 분리·괄호로 쓴다.
6. 콘텐츠 서술 규칙(이전 이슈에서 사용자가 확정, repo 정책 문서 없음. 이 이슈의 재작성에 그대로 적용):
    - 의도적 강조 카드는 유지하고, 그룹핑은 표·admonition 같은 시각 구분으로. 단순 bullet 나열로 평탄화하지 않는다.
    - 오개념은 「X는 마법이 아니다」식 부인이 아니라 사실을 직접 보여주는 긍정 서술로 깬다. 내용 있는 caveat는 유지한다.
    - AI 오류는 「틀릴 수 있다」 가능성형으로 쓴다.
    - 금지·제약은 예시 열거가 아니라 포괄어로(「개인 플랜 전부」). 구독 제약의 대상은 「계정」이 아니라 「플랜」이며 「요금제」는 쓰지 않는다.
    - UI 라벨은 실제 화면 표기 그대로(번역 누락으로 영문인 메뉴명도 유지). `connectors.md`의 「connector 추가」는 실제 화면을 확인한 뒤 통일한다.
    - 흔치 않은 공간 은유(도착점·축·닿다·자리)는 기준을 직접 서술한다. 구어체 동사(도느냐·굴린)는 격식체(실행되다)로. 단 문단의 대화 톤 어미(-죠/-요)는 대상이 아니다.
    - 용어 prefix(«AI ~»)는 첫 등장에서 한 번만 결합한다. 내부 메모의 압축 표현은 docs에 그대로 가져오지 않는다.
    - 하네스는 「모델+하네스」 멘탈모델로 설명하고 엔지니어링 3분과 비교를 하지 않는다. 비개발자 콘텐츠는 데이터/뷰·계획/실행·결과물 검토까지만 분리하고 MVC·OOP 같은 개발자 패러다임으로 격상하지 않는다.
    - 외부 docs 링크는 한국어 페이지(`/ko/`)를 우선한다. 교육 박스는 외부 권위 인용보다 단정적 핵심 메시지를 우선한다.
7. 기술 전제: MkDocs 1.6.1(`.venv/bin/mkdocs`), `pymdownx.details`가 켜져 있어 `???` 접기를 쓸 수 있다. admonition 유형별 색은 ADR-0009의 `docs/assets/` CSS가 맡고 있어 유형을 4종으로 줄여도 CSS 변경은 필요 없다. 착수 시점 `mkdocs.yml`에는 `validation:` 블록이 없어 앵커 깨짐을 strict 빌드가 잡지 못했다. Task 1에서 `validation: anchors: warn`을 추가했고, 고의로 깬 앵커가 strict 빌드를 중단시키는 것까지 확인했다. baseline은 앵커 깨짐 0건이라 이 게이트는 회귀 방지용이다. 노트 X9(「폴더 연결」 링크)는 앵커 자체는 존재하고 가리키는 곳에 내용이 없는 의미 불일치라 이 게이트가 아니라 Task 2가 처리한다.
8. 검토 후 버린 대안: (a) docs·slides를 한 이슈로 묶기는 9페이지 점검 루프 + 93장이라 audit 회차가 감당되지 않아 버렸다. (b) 슬라이드를 먼저 맞추기는 docs 정리 후 다시 맞춰야 해 버렸다. (c) 공유 `source/` 디렉토리 도입은 ADR-0002 대안 A로 이미 기각됐다. (d) 카드 정리를 AI 재량으로 페이지마다 판단하는 방식은 이전 「의도적 강조 유지」 기준이 104개 앞에서 작동하지 않았던 원인이라 버렸다. Task 0에서 그 자리를 개수 상한이 아니라 전수 목록 제시 후 사용자 선별로 채웠다. (e) 카드 개수 상한(52·40)을 게이트로 두는 안은 Task 0에서 기각됐다. 개수를 맞추려다 남겨야 할 경고까지 풀게 되고, 판단 기준이 내용이 아니라 수치가 된다.
9. 작업 순서의 근거: `index.md`가 홈이 가장 많은 페이지(D1·D2·D5·D6·D8)라 먼저 확정해야 다른 페이지가 링크할 대상이 생긴다. 불일치·용어 정정(Task 2)은 페이지 정리보다 먼저 한다. 어느 사본을 남길지 정하려면 무엇이 정답인지가 먼저 있어야 한다.
10. 커밋 단위: 페이지 승인마다 `docs: <페이지> 정리 (#55)` 형식으로 커밋한다. #56이 커밋 단위로 대조하기 위해서다. 브랜치는 `issue-0055`이고 노트 커밋 `6bad27c`가 이미 들어 있다.
11. `labs/README.md`는 zip 동봉 자료라 자기완결을 유지한다(ADR-0006). `docs/labs.md`와의 중복은 docs 쪽을 링크로 바꿔 푼다. 그 외 주제의 홈은 docs에 둔다.

---

## 연관 문서

| 문서 | 역할 |
|------|------|
| [사전 분석 노트](../../../99_workspace/notes/2026-08-30-docs-slides-overall-review.md) | 중복 15건·불일치 11건·카드 실측·슬라이드 매핑. 결정사항과 Task 0 확정 대상의 출처 |
| [ADR-0002](../../../50_adr/active/adr-0002-publishing-structure-docs-ssot-slides-derivative.md) | docs SSoT·slides 단방향 파생. 이 이슈가 docs를 먼저 확정하는 근거 |
| [ADR-0005](../../../50_adr/active/adr-0005-core-message-non-developers-make-software.md) | 본질 메시지 3곳 한정과 결정 룰 박스. 카드 「남김」 기준과 결정 룰 편입의 근거 |
| [ADR-0006](../../../50_adr/active/adr-0006-labs-structure-and-naming.md) | `labs/` SSoT·`docs/labs.md` 인덱스 관계. README 자기완결 전제의 근거 |
| [ADR-0009](../../../50_adr/active/adr-0009-unified-ui-theme-claude-style.md) | admonition 의미·구분 보존. 유형 통일 시 CSS 영향 없음의 근거 |
| [ADR-0011](../../../50_adr/active/adr-0011-education-scope-personal-webapp.md) | 교육 범위 경계. 간결화 중 범위 서술을 바꾸지 않는 근거 |
| [용어 사전](../../../40_domain/glossary.md) | 용어 통일 시 동반 갱신 대상 |
| [K-0001](../../../70_ledger/active/K-0001-connector-custom-label-omitted.md) | `mcp-servers.md` `#vs-connector`·`#choosing`을 손볼 때 재검토 조건 |
