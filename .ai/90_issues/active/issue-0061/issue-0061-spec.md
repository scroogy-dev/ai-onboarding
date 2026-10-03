# Issue #61 스펙 effort(생각 깊이) 개념 설명 추가와 최신 모델 버전 갱신

## 목표 (Goal)

비개발자가 「effort는 같은 모델이 얼마나 공들일지 정하는 조절 장치이고, 단계마다 대략 이 정도」라는 개념을 docs·slides에서 읽을 수 있게 하고, 모델 버전 표기를 Fable 5.1 · Opus 5.5 · Sonnet 5.5로 맞춘다.

---

## 요구사항 (Requirements)

**포함**

- R1: `docs/intro.md`「모델 비교」(`#claude-models`) 다음에 모델 비교와 같은 형식(표와 짧은 설명)으로 effort 절을 신설한다. 절은 effort를 「모델 선택(누가 하느냐)과 별개로, 같은 모델이 얼마나 공들이느냐를 정하는 조절 장치」로 정의한다. 참고 글의 의도(시간을 많이 주면 확인과 예외 상황 점검이 늘어난다)를 담는다.
- R2: 단계 표는 두 회사 공통 단계(low · medium · high · xhigh · max)만 다룬다. 단계 설명의 근거는 Claude 공식 표의 「설명」 열이며, 비개발자가 읽을 수 있는 말로 옮긴다. 옮긴 설명의 기준은 이슈 본문의 단계별 설명이다. 공식 표의 설명 열에 없는 low의 「쉬운 문제는 생각을 건너뛰기도 함」도 이 기준에 들어간다. OpenAI는 「이보다 낮은 단계(none · minimal)도 있다」 한 줄만 둔다.
  - low: 빠르고 간결하게. 아낀 만큼 품질이 조금 떨어질 수 있고, 쉬운 문제는 생각을 건너뛰기도 함
  - medium: 속도·사용량·품질의 균형
  - high: 필요한 만큼 충분히 생각하고 확인함
  - xhigh: 30분 이상 걸리는 긴 작업을 위해 더 늘린 단계
  - max: 사용량 제약 없이 최대로 공들임
- R3: 공식 문서 용어(토큰 예산, 에이전트, 서브에이전트, 코딩 작업 등)를 그대로 옮기지 않고 일상어로 풀어 쓴다. 공식 표의 「일반적인 사용 사례」 열은 인용하지 않는다.
- R4: 시간은 단계별 절대값으로 쓰지 않고 「같은 일이라도 단계를 올리면 더 오래 걸리고 사용량도 늘어난다」로 서술한다. 규모를 보여 주는 예시는 참고 글의 1건(같은 작업이 low 약 2분, 높은 단계(원문 「high-effort run」) 약 33분, Claude Code 기준)만 출처와 함께 둔다. (2026-10-03 Task 2 채점에서 원문이 33분 실행의 단계를 xhigh로 지정하지 않은 것을 확인해 「xhigh」를 「높은 단계」로 정정) xhigh 설명에는 공식 표현인 「30분 이상 걸리는 긴 작업」을 쓴다.
- R5: Claude 모델별 기본 effort를 적는다. Fable 5.1은 high, Opus 5.5는 medium, Sonnet 5.5는 high이고, Haiku 4.5는 effort를 지원하지 않는다. 주의 사항으로 「모델마다 지원 단계와 기본값이 다르고, 같은 이름이라도 생각하는 양이 다르며, effort는 정확한 상한이 아니라 공들이는 정도를 알리는 신호」라는 점을 함께 둔다.
- R6: 「높을수록 사용량과 시간이 늘어난다」는 사실을 `docs/intro.md` 사용량 확인 절(`#claude-usage`)과 연결한다. 연결 방식(링크만 둘지, 사용량 절 문구를 고칠지)은 Task 0에서 확정한다.
- R7: claude.ai · Cowork · Code 화면의 effort 표기(이름, 단계 수, 위치)와 앱 기본값, 플랜별 제공 여부를 확인한다. 확인한 것만 화면 표기 그대로 쓰고, 확인하지 못한 것은 공식 문서로 안내한다. 확인 수단(사용자 화면 확인 또는 공식 안내)은 Task 0에서 확정한다.
- R8: 모델 버전 표기를 최신으로 갱신한다. 대상은 `docs/intro.md:94` 버전 예시(Opus 5 · Sonnet 5)와 `docs/index.md:267` 컨텍스트 윈도우 안내이다. 컨텍스트 윈도우 안내는 버전 이름만 바꾸지 않고, Opus 5.5 · Sonnet 5.5 기준의 1M · 500K 서술을 공식 문서로 다시 확인한다.
- R9: slides가 docs 변경을 따라간다 (ADR-0002 단방향 파생). 대상은 모델 슬라이드 다음의 effort 슬라이드 신설, 모델 슬라이드 버전 표기(`slides/slides.md:758`), 컨텍스트 윈도우 슬라이드(`slides/slides.md:1350`), 발표자 메모의 「Fable 5」 잔존 표기(`slides/slides.md:772`)이다.
- R10: docs 반영은 초안, 사용자 점검, 승인 순서를 거친 뒤에 slides로 넘어가고, 수정한 슬라이드는 사용자가 화면에서 확인한다. (이슈 본문 근거 없음. #59 등 기존 이슈의 진행 방식을 따라 2026-10-03 spec 작성 시 제안, 같은 날 승인 게이트에서 포함 확정)
- R11: `.ai/40_domain/glossary.md`에 effort 용어 행을 추가한다. (이슈 본문 근거 없음. effort가 새 핵심 용어로 도입되므로 2026-10-03 spec 작성 시 제안, 같은 날 승인 게이트에서 포함 확정)

**제외**

- 작업 유형별 권장 effort 안내 (공식 표의 「일반적인 사용 사례」 열 인용 포함): 이 이슈의 목표는 개념 전달이며, 공식 문서도 모델별 권장이 일반 표보다 우선한다고 밝혀 공통 기준이 없다.
- 단계별 절대 소요 시간: 시간은 effort보다 작업 크기에 더 크게 좌우되어 기다리는 시간으로 오해할 수 있다.
- 벤치마크 성능 수치(정답률 등) 인용: 비개발자 개념 전달에 불필요하다.
- API 파라미터와 코드 예시: 교육 범위 밖이다.
- OpenAI 단계의 개별 설명(none · minimal)과 OpenAI 모델별 기본값: 공통 단계로만 개념을 설명하기로 했다.
- 「어느 모델을 쓸까?」 tip의 모델 선택 기준 변경: 모델 선택 기준(추론이 얼마나 필요한가)은 그대로 두고 effort는 별도 절로 다룬다.
- `labs/` 실습 변경: 실습 진행에 effort 조절이 필요하지 않다.

---

## 완료의 정의 (Definition of Done)

> **검증 레벨** — 낮을수록 좋다(자동 검증에 가까움). 기본은 L1, 한 레벨 내릴 때마다 강등 사유를 함께 적는다.
>
> - `[D]`  L1 결정적   — 명령이 합/불을 판정, 사람 판단 없음
> - `[QD]` L2 준결정적 — 다른 AI·기준 체크리스트가 채점
> - `[ND]` L3 비결정적 — 사람이 직접 읽고 판단
>
> 모든 명령은 repo 루트에서 실행한다. 「effort 절」은 `docs/intro.md`의 `### … { #claude-effort }` 행부터 다음 `### ` 행 전까지, 「effort 슬라이드」는 `slides/slides.md`의 `# …effort…` 제목 행부터 다음 `# ` 제목 행 전까지다 (전제 A1·A11).
>
> **선행 조건**: 절·슬라이드 범위를 잘라 보는 검증은 R1 첫 `[D]`(effort 절 존재)와 R9 첫 `[D]`(effort 슬라이드 존재)가 먼저 통과해야 의미가 있다. 범위가 비면 「0건이면 통과」 검증(R3 첫 `[D]`, R4 두 번째 `[D]`)은 검사 대상 없이 그대로 통과한다.

### R1: effort 절 신설

- [ ] [D] `### … { #claude-effort }` 제목이 `docs/intro.md`에 정확히 1개 있고, `#claude-models` 절과 `#claude-ai` 절 사이에 있다
  <details>
  <summary>검증 명령 — 출력 0건이면 통과</summary>

  ```bash
  awk '/\{ #claude-models \}/{m=NR} /^### .*\{ #claude-effort \}/{e=NR;c++} /\{ #claude-ai \}/{a=NR}
       END{ if(c!=1) print "위반: effort 앵커 " c+0 "개"; else if(!(m<e && e<a)) print "위반: 위치 models=" m " effort=" e " ai=" a }' docs/intro.md
  ```

  - 설계 주의: 제목 수준이 `### `가 아니면 개수 0으로 위반이 난다. 제목 문구는 자유이며 앵커만 고정한다.
  </details>
- [ ] [QD] effort 절이 effort를 「모델 선택과 별개로, 같은 모델이 얼마나 공들이느냐를 정하는 조절 장치」로 정의하고, 단계를 올리면 확인과 예외 상황 점검이 늘어난다는 참고 글의 의도를 담는다  (검증: 다른 AI가 채점, 별도 세션)  ← 강등 사유: 정의와 의도의 전달 여부는 의미 판단

### R2: 공통 5단계 표

- [ ] [D] effort 절의 단계 표가 첫 칸 기준으로 `low` · `medium` · `high` · `xhigh` · `max` 다섯 행을 이 순서로만 가지고, 다른 단계 행이 없다
  <details>
  <summary>검증 명령 — 출력 0건이면 통과</summary>

  ```bash
  awk '/^### .*\{ #claude-effort \}/{f=1;next} f&&/^### /{f=0}
       f&&/^\|/{ split($0,c,"|"); if (match(c[2], /`[^`]+`/)) s=s substr(c[2],RSTART+1,RLENGTH-2) " " }
       END{ if (s!="low medium high xhigh max ") print "위반: 단계 행 [" s "]" }' docs/intro.md
  ```

  - 설계 주의: 단계 이름은 백틱 소문자로 쓴다 (전제 A2). 첫 칸에 백틱 낱말이 있는 표 행을 모두 모으므로, 다섯 행 밖의 단계 행(예: `` `minimal` ``)이 끼면 실패한다. 모델별 기본값 표는 첫 칸이 모델 이름(백틱 없음)이라 대상에서 빠진다. effort 절의 다른 표 첫 칸에는 백틱을 쓰지 않는다.
  </details>
- [ ] [D] effort 절에서 `none`·`minimal`이 나오는 행은 정확히 1개이고, 그 한 행에 `none`·`minimal`·「OpenAI」가 모두 있다
  <details>
  <summary>검증 명령 — 출력 0건이면 통과</summary>

  ```bash
  awk '/^### .*\{ #claude-effort \}/{f=1;next} f&&/^### /{f=0}
       f&&/none|minimal/{n++; if(!(/none/ && /minimal/ && /OpenAI/)) b++}
       END{ if(n!=1||b) print "위반: none·minimal 행 " n+0 "개, 세 낱말 중 빠진 행 " b+0 "개" }' docs/intro.md
  ```

  - 설계 주의: 셋 중 어느 하나라도 빠지면 실패한다. 둘이 다른 행에 나뉘어도 행 수가 2가 되어 실패한다.
  </details>
- [ ] [QD] 단계 설명이 R2의 단계별 기준 설명(low의 「쉬운 문제는 생각을 건너뛰기도 함」 포함)과 뜻이 같고, Claude 공식 문서와 어긋나지 않으며, 비개발자가 읽을 수 있는 말이다. 작업 유형 추천은 없다  (검증: 다른 AI가 R2 기준 설명·공식 문서와 대조 채점, 별도 세션)  ← 강등 사유: 뜻의 일치와 쉬운 정도는 의미 판단

### R3: 비개발자 표현

- [ ] [D] effort 절과 effort 슬라이드 본문(발표자 노트 제외)에 「서브에이전트」「토큰 예산」「수백만」「코딩 문제」「사용 사례」가 0건이다
  <details>
  <summary>검증 명령 — 출력 0건이면 통과</summary>

  ```bash
  P='서브에이전트|토큰 예산|수백만|코딩 문제|사용 사례'
  awk '/^### .*\{ #claude-effort \}/{f=1;next} f&&/^### /{f=0} f' docs/intro.md | grep -nE "$P"
  awk '/^# .*[Ee]ffort/{f=1;next} f&&/^# /{f=0} f&&/<!--/{n=1} f&&!n{print} /-->/{n=0}' slides/slides.md | grep -nE "$P"
  ```

  - 설계 주의: 「에이전트」「토큰」은 본 교육이 이미 쓰는 용어라 금지하지 않는다. 금지 목록은 공식 표 「일반적인 사용 사례」 열에만 나오는 낱말이다. 슬라이드 노트는 출처 설명에 「사용 사례」를 쓸 수 있어 제외한다.
  </details>
- [ ] [QD] 공식 문서 용어를 그대로 옮긴 표현이 없고 일상어로 풀려 있다  (검증: 다른 AI가 채점, 별도 세션)  ← 강등 사유: 금지 목록 밖의 전문 용어는 열거할 수 없다

### R4: 시간 서술

- [ ] [D] effort 절에 「2분」「33분」「30분 이상」과 참고 글 주소가 각 1회 이상 있다
  <details>
  <summary>검증 명령 — 출력 0건이면 통과</summary>

  ```bash
  S=$(awk '/^### .*\{ #claude-effort \}/{f=1;next} f&&/^### /{f=0} f' docs/intro.md)
  for k in '2분' '33분' '30분 이상' 'claude.dev/blog/spending-your-effort'; do
    printf '%s' "$S" | grep -q "$k" || echo "위반: $k 없음"
  done
  ```

  </details>
- [ ] [D] 단계 표에서 `xhigh` 행을 뺀 단계 행에 시간값(숫자+분·시간)이 0건이다
  <details>
  <summary>검증 명령 — 출력 0건이면 통과</summary>

  ```bash
  awk '/^### .*\{ #claude-effort \}/{f=1;next} f&&/^### /{f=0}
       f&&/^\|/{ split($0,c,"|"); if (c[2]~/`(low|medium|high|max)`/ && $0~/[0-9]+ ?(분|시간)/) print "위반: " $0 }' docs/intro.md
  ```

  - 설계 주의: `xhigh` 행의 「30분 이상」은 공식 표현이라 허용한다. 정규식 `` `high` ``는 백틱 때문에 `xhigh`와 겹치지 않는다.
  </details>
- [ ] [QD] 시간 예시가 1건뿐이고, 단계별 소요 시간처럼 읽히는 문장이 없다  (검증: 다른 AI가 채점, 별도 세션)  ← 강등 사유: 「처럼 읽힌다」는 의미 판단

### R5: 모델별 기본 effort와 주의 사항

- [ ] [D] effort 절에 Fable 5.1·`high`, Opus 5.5·`medium`, Sonnet 5.5·`high`가 각각 같은 행에 있고, Haiku 4.5 행에 미지원 표기가 있다
  <details>
  <summary>검증 명령 — 출력 0건이면 통과</summary>

  ```bash
  awk '/^### .*\{ #claude-effort \}/{f=1;next} f&&/^### /{f=0}
       f&&/Fable 5\.1/&&/`high`/{a=1} f&&/Opus 5\.5/&&/`medium`/{b=1} f&&/Sonnet 5\.5/&&/`high`/{c=1}
       f&&/Haiku 4\.5/&&/(미지원|지원하지 않)/{d=1}
       END{ if(!a) print "위반: Fable"; if(!b) print "위반: Opus"; if(!c) print "위반: Sonnet"; if(!d) print "위반: Haiku" }' docs/intro.md
  ```

  - 설계 주의: 값은 Claude API 기준이다 (전제 A3). 앱 기본값이 다르게 확인되면 이 명령과 A3를 함께 갱신한다.
  </details>
- [ ] [QD] 주의 사항 세 가지(모델마다 지원 단계·기본값이 다름, 같은 이름이라도 생각하는 양이 다름, effort는 정확한 상한이 아니라 신호)가 모두 있다  (검증: 다른 AI가 채점, 별도 세션)  ← 강등 사유: 같은 뜻의 다른 표현을 명령으로 판정할 수 없다

### R6: 사용량 절과 연결

- [ ] [D] effort 절에 `#claude-usage` 링크가 있거나, 사용량 절(`#claude-usage`)에 `#claude-effort` 링크가 있다
  <details>
  <summary>검증 명령 — 출력 0건이면 통과</summary>

  ```bash
  awk '/^### .*\{ #claude-effort \}/{e=1;u=0;next} /^### .*\{ #claude-usage \}/{u=1;e=0;next} /^##+ /&&!/^####/{e=0;u=0}
       e&&/#claude-usage/{x=1} u&&/#claude-effort/{x=1} END{ if(!x) print "위반: 두 절 사이 링크 없음" }' docs/intro.md
  ```

  - 설계 주의: 사용량 절은 `####` 소제목을 가지므로 `####`에서는 절을 끝내지 않는다. 연결 방식은 Task 0에서 확정한다 (전제 A5).
  </details>

### R7: 화면 표기 확인

- [ ] [ND] claude.ai · Cowork · Code 화면의 effort 표기와 앱 기본값, 플랜별 제공 여부의 확인 결과가 summary Task 1에 기록되고, docs에 쓴 화면 표기가 그 결과와 일치한다  (검증: 사용자 확인)  ← 강등 사유: 앱 화면은 사용자만 볼 수 있다

### R8: 모델 버전 갱신

- [ ] [D] `docs/`와 `slides/slides.md`(발표자 노트 포함)에 소수점 없는 「Fable 5」「Opus 5」「Sonnet 5」 표기가 0건이다
  <details>
  <summary>검증 명령 — 출력 0건이면 통과</summary>

  ```bash
  grep -rnE '(Fable|Opus|Sonnet) (\*\*)?5(\*\*)?($|[^.0-9])' docs slides/slides.md --include='*.md'
  ```

  - 설계 주의: 기준선(커밋 2d6d823)에서 5건(`docs/intro.md:94`, `docs/index.md:267`, `slides/slides.md:758`·`772`·`1350`)이 걸린다. 이전 세대로 Opus 5·Sonnet 5를 꼭 언급해야 하면 제외 패턴을 추가하고 전제 A9에 적는다.
  </details>
- [ ] [D] 「Opus 5.5」와 「Sonnet 5.5」가 `docs/intro.md`와 `docs/index.md`에 각 1회 이상 있다
  <details>
  <summary>검증 명령 — 출력 0건이면 통과</summary>

  ```bash
  for f in docs/intro.md docs/index.md; do
    for m in 'Opus 5\.5' 'Sonnet 5\.5'; do grep -qE "$m" "$f" || echo "위반: $f $m 없음"; done
  done
  ```

  - 설계 주의: `docs/intro.md:94`는 `Opus **5**`처럼 숫자만 굵게 쓴다. 갱신 뒤에도 그 꼴을 유지하면 `Opus **5.5**`가 되어 이 명령이 실패한다. 굵게 표기를 버리거나 패턴에 `(\*\*)?`를 넣는다 (전제 A10).
  </details>
- [ ] [QD] 컨텍스트 윈도우 안내(docs `index.md`, slides 해당 장)의 1M·500K 서술이 Opus 5.5·Sonnet 5.5 기준 공식 문서와 일치한다  (검증: 다른 AI가 공식 문서와 대조 채점)  ← 강등 사유: 외부 문서와의 대조는 명령으로 고정할 수 없다

### R9: slides 파생

- [ ] [D] 제목에 effort가 들어간 슬라이드가 정확히 1장이고, 모델 슬라이드와 사용량 슬라이드 사이에 있다
  <details>
  <summary>검증 명령 — 출력 0건이면 통과</summary>

  ```bash
  awk '/^# 모델은 어떤 걸 쓸까/{m=NR} /^# .*[Ee]ffort/{e=NR;c++} /^# Claude 사용량 확인하기/{u=NR}
       END{ if(c!=1) print "위반: effort 슬라이드 " c+0 "장"; else if(!(m<e && e<u)) print "위반: 위치 model=" m " effort=" e " usage=" u }' slides/slides.md
  ```

  - 설계 주의: 모델·사용량 슬라이드 제목을 바꾸면 앵커가 사라져 위치 위반이 난다. 바꾸면 명령도 갱신한다.
  </details>
- [ ] [D] 슬라이드 구분선(`---` 행) 수가 main보다 1~2개 늘었다 (새 장 1장)
  <details>
  <summary>검증 명령 — 출력 0건이면 통과</summary>

  ```bash
  before=$(git show main:slides/slides.md | grep -c '^---$'); after=$(grep -c '^---$' slides/slides.md)
  d=$((after-before)); { [ "$d" -ge 1 ] && [ "$d" -le 2 ]; } || echo "위반: 구분선 $before → $after"
  ```

  - 설계 주의: 새 장에 `layout` 같은 머리말 블록을 두면 구분선이 2개 는다. 기준선은 109개다.
  </details>
- [ ] [D] effort 슬라이드 본문(발표자 노트 제외)에 다섯 단계 이름이 각각 독립된 낱말로 모두 있고, 발표자 노트에 출처 `#claude-effort`가 있다
  <details>
  <summary>검증 명령 — 출력 0건이면 통과</summary>

  ```bash
  B=$(awk '/^# .*[Ee]ffort/{f=1;next} f&&/^# /{f=0} f&&/<!--/{n=1} f&&!n{print} /-->/{n=0}' slides/slides.md)
  N=$(awk '/^# .*[Ee]ffort/{f=1;next} f&&/^# /{f=0} f&&/<!--/{n=1} f&&n{print} /-->/{n=0}' slides/slides.md)
  for k in low medium high xhigh max; do
    printf '%s\n' "$B" | grep -qE "(^|[^A-Za-z])$k([^A-Za-z]|$)" || echo "위반: 본문에 $k 없음"
  done
  printf '%s\n' "$N" | grep -q '#claude-effort' || echo '위반: 발표자 노트에 #claude-effort 없음'
  ```

  - 설계 주의: 앞뒤를 영문자가 아닌 경계로 찾으므로 `xhigh`만 있으면 `high`는 실패한다. 한국어 조사가 바로 붙어도(`high는`) 경계로 인정된다. 출처는 노트(`<!-- -->`) 안에서만 찾는다.
  </details>
- [ ] [QD] effort 슬라이드가 docs effort 절의 압축이며 docs에 없는 내용을 더하지 않는다 (ADR-0002)  (검증: 다른 AI가 채점, 별도 세션)  ← 강등 사유: 압축·파생 관계는 의미 판단

### R10: 점검 순서

- [ ] [ND] 사용자가 docs 초안을 승인했고, 그 사실과 날짜가 slides 작업 전에 summary Task 4에 기록된다  (검증: 사용자 확인)  ← 강등 사유: 승인은 사용자만 할 수 있다
- [ ] [ND] 사용자가 수정한 슬라이드를 화면에서 확인했고, 그 사실이 summary Task 6에 기록된다  (검증: 사용자 확인)  ← 강등 사유: 화면 확인은 사용자만 할 수 있다

### R11: 용어 사전

- [ ] [D] `.ai/40_domain/glossary.md`에 effort 행이 정확히 1개 있고, 그 행에 출처 `docs/intro.md`가 있다
  <details>
  <summary>검증 명령 — 출력 0건이면 통과</summary>

  ```bash
  n=$(grep -cE '^\| effort' .ai/40_domain/glossary.md); s=$(grep -E '^\| effort' .ai/40_domain/glossary.md | grep -c 'docs/intro.md')
  { [ "$n" = 1 ] && [ "$s" = 1 ]; } || echo "위반: effort 행 ${n}개, 출처 포함 ${s}개"
  ```

  </details>

### 공통

- [ ] [D] `mkdocs build --strict`가 통과한다 (회귀 방지 항목: 구현 전 기준선에서도 통과한다)
  <details>
  <summary>검증 명령 — 출력 0건이면 통과</summary>

  ```bash
  .venv/bin/mkdocs build --strict -q -d "$(mktemp -d)" >/dev/null 2>&1 || echo '위반: mkdocs strict 빌드 실패'
  ```

  </details>
- [ ] [D] Slidev 빌드가 통과한다 (회귀 방지 항목: 구현 전 기준선에서도 통과한다)
  <details>
  <summary>검증 명령 — 출력 0건이면 통과</summary>

  ```bash
  (cd slides && npx slidev build --out "$(mktemp -d)" >/dev/null 2>&1) || echo '위반: slidev 빌드 실패'
  ```

  - 설계 주의: macOS에는 `timeout` 명령이 없으므로 감싸지 않는다. 기준선에서 통과를 확인했다 (전제 A8).
  </details>
- [ ] [D] 이 브랜치에서 추가한 행에 U+2014(—)가 0건이다 (회귀 방지 항목: 추가 행이 없는 구현 전에도 통과한다)
  <details>
  <summary>검증 명령 — 출력 0건이면 통과</summary>

  ```bash
  git diff main -- docs slides/slides.md .ai/40_domain/glossary.md | grep '^+' | grep -n '—'
  ```

  - 설계 주의: 부제 자리의 줄표는 U+2015(―)를 쓴다. 기준선에서 docs·slides의 U+2014는 0건이다.
  </details>

---

## 전제 (Assumptions)

- A1 (effort 절 위치·앵커): `docs/intro.md`의 `#claude-models` 절 바로 다음, `#claude-ai` 절 앞에 둔다. 제목은 기존 절과 같은 꼴 `### <제목> { #claude-effort }`이고, 절 사이 `---` 구분선 관례를 따른다. 제목 문구는 docs 점검에서 조정할 수 있고 앵커만 고정한다.
- A2 (단계 이름 표기): 단계 이름은 공식 값 그대로 백틱 소문자(`` `low` `` 등)로 쓴다. 화면 표기가 다르게 확인되면(R7) 화면 표기를 함께 적는다. R2·R4 검증이 백틱 표기에 걸려 있다.
- A3 (기본 effort 값의 출처): Claude 공식 effort 문서(2026-10-03 확인)의 API 기본값이다. Fable 5.1 `high`, Opus 5.5 `medium`(이전 Opus는 `high`), Sonnet 5.5 `high`. Haiku 4.5는 문서의 지원 모델 목록에 없다. 앱 기본값이 API와 다르면 R7 확인 결과에 따라 구분해 적는다. Claude Code에서는 Opus 5.5·Sonnet 5.5 모두 `medium`으로 시작한다 (Claude Code 모델 구성 문서, 2026-10-03 확인). Task 1 결정(가1): 표는 API 값을 유지하고, 표 아래 한 줄로 Claude Code의 차이와 claude.ai 메뉴의 모델별 기본 단계 표시를 안내한다. R5 검증 명령은 바꾸지 않는다.
- A4 (참고 글 수치): 2분·33분은 참고 글의 HTML 필터링 작업 예시(Fable 5.1, Claude Code)다. 같은 예시의 성공 횟수(1/5 → 5/5)는 성능 수치라 쓰지 않는다.
- A5 (Task 0 확정, 2026-10-03): ① R6: effort 절에서 `#claude-usage`로 링크를 두고, 사용량 절의 「작업 성격에 맞춰 모델을 골라」 문구도 effort를 포함하게 고치며 그 자리에 `#claude-effort` 링크를 단다. ② R7: 앱 화면 확인 없이 공식 안내로 대신한다. docs에는 화면 표기(이름·단계 수·위치)를 쓰지 않고, 앱별 제공 여부·기본값은 공식 문서 링크로 안내한다. 공식 문서에서 확인되는 사실만 적는다. ③ 참고 글의 「12시간 / 1시간」 비유는 쓰지 않는다. 시간 수치가 늘어 단계별 소요 시간처럼 읽힐 수 있고, 의도(시간을 더 주면 확인과 예외 상황 점검이 는다)는 정의 문장으로 전할 수 있다. Task 1 결정(나1): 공식 도움말에 있는 바꾸는 위치는 일상어로 한 줄(「입력창 옆 모델 이름을 누르면 나오는 메뉴」 꼴) 쓰고 도움말 링크를 단다. 한국어 앱의 메뉴 이름은 확인하지 않았으므로 인용하지 않는다.
- A6 (브랜치·커밋): 작업 브랜치 `issue-0061`, PR 대상 `main`. 커밋 제목 끝에 `(#61)`을 붙인다 (git-commit 스킬 형식).
- A7 (줄 번호): 요구사항의 줄 번호는 커밋 2d6d823(main, #60 병합) 기준이다. 편집하면 어긋나므로 실제 위치는 앵커와 제목으로 찾는다.
- A8 (빌드 도구): `.venv/bin/mkdocs build --strict`와 `slides/`의 `npx slidev build` 둘 다 2026-10-03 기준선에서 통과했다.
- A9 (R8 예외): 이전 세대로 Opus 5·Sonnet 5를 꼭 언급해야 하면 R8 검증에 제외 패턴을 추가하고 여기에 적는다. 현재 예외 없음. Task 1 결정(다1): `docs/index.md`와 slides 컨텍스트 안내의 500K 이전 세대는 모델 이름을 나열하지 않고 「이전 세대 일부 모델」로 쓰고 도움말 링크를 단다. 예외 패턴은 추가하지 않는다.
- A10 (버전 굵게 표기): `docs/intro.md:94`의 `Opus **5**`처럼 숫자만 굵게 쓰는 꼴은 버전 갱신 때 정리한다. R8 두 번째 검증이 `Opus 5.5` 연속 문자열을 찾기 때문이다.
- A11 (슬라이드 제목): effort 슬라이드 제목에는 「effort」가 들어간다. R3·R9 검증이 `^# .*[Ee]ffort` 제목에 걸려 있다.
- A12 (검토 후 버린 대안): 모델 비교 표에 effort 열을 더하는 안은 모델 선택과 effort가 별개 조절 장치라는 개념을 흐려서 버렸다. 공식 표 「일반적인 사용 사례」 열을 옮기는 안은 추천 성격이고 개발자 용어 중심이라 버렸다 (R3). 단계별 절대 시간 표기는 기다리는 시간으로 오해할 수 있어 버렸다 (R4).
- A13 (승인 게이트): plan Task 1(화면 확인)·Task 4(docs 점검)·Task 6(slides 화면 확인)은 사용자 게이트다. AI가 대신 닫지 않는다.
- A14 (외부 링크): docs에 넣는 Claude 공식 문서 링크는 `/ko/` 경로를 쓴다. OpenAI 문서는 한국어 경로가 없어 영문 주소를 쓴다.
- A15 (용어 표기, Task 0 확정): Claude 한국어 공식 effort 문서(2026-10-03 확인)는 제목을 「노력 수준(Effort)」, 첫 문장을 "effort"(노력)로 쓰고 이후 본문은 effort로 쓴다. docs도 이를 따라 절 제목과 첫 등장에 「노력 수준(effort)」을 쓰고 이후 본문은 「effort」로 쓴다. slides 제목도 같은 꼴이다. glossary 용어 칸은 기존 행 관례(「MCP (Model Context Protocol)」)와 R11 검증(`^\| effort`)에 맞춰 「effort (노력 수준)」으로 쓴다. 이슈 제목의 「생각 깊이」는 공식 표기가 아니어서 docs·slides에 쓰지 않는다. R9·R11 검증이 effort 낱말에 걸려 있으므로 제목과 용어 칸에서 effort를 빼지 않는다.

---

## 연관 문서

| 문서 | 역할 |
|------|------|
| `.ai/50_adr/active/adr-0002-publishing-structure-docs-ssot-slides-derivative.md` | docs SSoT, slides 단방향 파생 (R9) |
| `.ai/40_domain/glossary.md` | 용어 사전, effort 행 추가 대상 (R11) |
| `.ai/10_rules/writing-principles.md` | 산출물 작성 원칙 |
| GitHub 이슈 #47 | 직전 모델 갱신 이슈 (Fable 5 반영) |

<details>
<summary>외부 근거</summary>

- https://claude.dev/blog/spending-your-effort/ (참고 글, 2026-09-25)
- https://platform.claude.com/docs/ko/build-with-claude/effort (단계 설명·모델별 기본값)
- https://developers.openai.com/api/docs/guides/reasoning?api-mode=responses (OpenAI 단계)
- https://docs.claude.com/ko/docs/about-claude/models/overview (모델 버전)

</details>
