# Issue #59 스펙 회사 환경의 커넥터·MCP 사용 기준을 「회사 정책 확인 후 허용된 것만」으로 통일

## 목표 (Goal)

임직원·회사 환경 서술에서 「담당 부서」 지목과 문의 유도를 없애고, 커넥터·MCP 서버 모두 「회사 정책을 확인하고 허용된 것만 쓴다」 한 메시지로 docs와 slides가 같은 말을 하게 한다.

---

## 요구사항 (Requirements)

**포함**

- R1: 핵심 문장 1개를 확정하고 홈을 `docs/security-guide.md#external-connection` 임직원 절 「회사 정책과 승인 절차가 먼저입니다」에 둔다. 2부 각 페이지는 한 줄 요약과 홈 링크만 둔다 (ADR-0010 결정 4).
- R2: docs·slides에서 「담당 부서」 표현이 사라진다. 문의 유도 문장은 「회사 정책을 확인하고 허용된 것만 씁니다」로, 절차 준수 문장은 「회사가 정한 방법을 그대로 따릅니다」로 주체를 바꾼다. 「연결이 되지 않을 때도 … 먼저 문의하는 편이 빠릅니다」는 삭제하거나 「회사가 안내한 방법 밖에서 설정을 바꾸지 않습니다」로 교체한다.
  <details>
  <summary>대상 위치 (줄 번호는 커밋 e7c4825 기준)</summary>

  | 위치 | 현재 문구 | 처리 |
  |------|-----------|------|
  | `docs/connect/connectors.md:160` (`#enterprise`) | 담당 부서에 문의하세요 | 문의 유도 → 허용된 것만 |
  | `docs/connect/mcp-servers.md:132` (`#remote-vs-local`) | 담당 부서 안내를 그대로 따르세요 / 먼저 문의하는 편이 빠릅니다 | 절차 준수 주체 교체 / 삭제 또는 교체 |
  | `docs/connect/mcp-servers.md:161` (회사 플랜 note) | 담당 부서에 문의하세요 | 문의 유도 → 허용된 것만 |
  | `docs/connect/mcp-servers.md:211` (`#choosing` 표 행) | 담당 부서가 안내한 주소인가 | 회사가 안내한 주소인가 (→ R8) |
  | `docs/connect/mcp-servers.md:219` (`#choosing-caveats`) | 담당 부서에 확인하세요 | 문의 유도 → 허용된 것만 |
  | `docs/security-guide.md:159` (`#external-connection`) | 담당 부서 안내를 그대로 따릅니다 | 절차 준수 주체 교체 |
  | `slides/slides.md:2076` (점검하고 끊기 · 회사 환경이라면) | 담당 부서에 문의하세요 | 문의 유도 → 허용된 것만 |
  | `slides/slides.md:2358` (MCP 어디에 설정하느냐 하단 박스) | 담당 부서 안내를 그대로 따르세요 | 절차 준수 주체 교체 |

  </details>
- R3: 「목록에 없으면 요청하면 열린다」는 뜻으로 읽히는 문장이 사라진다. 대상은 「권한 문제일 수 있습니다」(`docs/connect/connectors.md:160`, `slides/slides.md:1661`), 「어디에 문의하는지는」(`docs/connect/index.md:69`), 「내 문제가 아니라 조직 정책」(`connectors.md:160`, `slides/slides.md:2076`), 「아직 조직에 추가되지 않은 것」(`mcp-servers.md:161`)이다.
- R4: 정책을 부르는 이름을 「회사 정책」으로 통일한다. 대상은 「관리자 정책」(`docs/connect/index.md:69`, `slides/slides.md:1661`, `slides/slides.md:2036`), 「조직 정책」(`connectors.md:160`, `slides/slides.md:2076`), 「사내 정책」(`docs/connect/index.md:72`)이다. 「조직 관리자가 커넥터를 켜 준다」「서비스별로 항상 허용 / 승인 필요 / 차단」 같은 제품 사실 서술은 유지하고 「막아 두었을 수 있다」의 근거로 쓴다. 통일 범위는 Task 0에서 확정한다.
- R5: 커넥터 절(`connectors.md#enterprise`)과 MCP 서버 절(`mcp-servers.md` 회사 플랜 note·`#choosing-caveats`)의 회사 환경 문장이 같은 구조를 따른다. 순서는 회사 정책 확인 → 허용된 것만 → 허용되지 않은 것은 쓰지 않음 → 연결 방법은 회사가 정한 대로.
- R6: 정책 위치·문의 창구를 자료에 적지 않는다. 필요하면 1부 준비물의 「교육 시작 전에 강사가 안내합니다」(`docs/index.md:67`) 선례를 따라 강사 안내로 넘긴다. 강사 안내로 넘길지 아예 언급하지 않을지는 Task 0에서 확정한다.
- R7: `docs/security-guide.md` 정리표에 임직원 행 「회사가 허용한 연결만 사용」을 추가할지 Task 0에서 확정하고, 추가하면 짝 슬라이드 정리표(`slides/slides.md:3081`)에도 반영한다.
- R8: `mcp-servers.md#choosing` 표 행을 손보므로 원장 K-0001의 재검토 이력에 이번 판단을 기록한다. 「Custom」 명칭과 무관한 변경이라 계속 수용이 예상되며, 새 K 번호를 따지 않는다.
- R9: slides가 docs 변경을 따라간다 (ADR-0002 단방향 파생). 대상은 7장 준비물(`1661`), 「점검하고 끊기 · 회사 환경이라면」(`2054~2095`), MCP 「어디에 설정하느냐」 하단 박스(`2358`), 커넥터 공통 기준 문장(`2036`), 보안 정리표(`3081`, R7 확정 시)이며, 발표자 노트의 출처 표기를 갱신한다.
- R10: docs 반영은 초안 → 사용자 점검 → 승인을 거친 뒤에 slides로 넘어가고, 수정한 슬라이드는 사용자가 화면에서 확인한다.
- R11: 「담당 부서를 지목하지 않고 회사 정책으로 표현한다」는 서술 원칙을 `.ai/40_domain/policies/local/`에 로컬 정책 문서로 남겨 이후 이슈·감사가 참조하게 한다. (이슈 본문 근거 없음. 2026-09-10 spec 작성 시 제안, 같은 날 승인 게이트에서 포함 확정)

**제외**

- 정책 문서의 위치·문의 창구 안내: 회사마다 다르고, 창구를 적으면 다시 특정 부서를 지목하게 된다 (R6과 짝).
- 「조직 관리자가 먼저 커넥터를 켜 주어야」 등 제품 역할 사실 서술의 변경: 관리자는 부서가 아니라 제품 역할이며 「막아 두었을 수 있다」의 근거로 필요하다 (유지).
- `mcp-servers.md#choosing` 표의 「주소가 공식인가」 행 이외의 행과 검토 표시 note 카드: 손대면 K-0001 재검토 범위가 넓어진다 (불필요).
- `labs/` 자료: 「담당 부서」·문의 유도 표현이 없다 (커밋 e7c4825 기준 검색 0건, 불필요).
- 슬라이드 카드·레이아웃 구성 변경: 이 이슈는 문구만 다룬다 (불필요).
- slides를 별도 이슈로 분리: 대상이 다섯 장이라 한 이슈에서 처리한다 (Task 0에서 확정, 대체).
- 「목록에 없음」을 「회사가 허용하지 않은 것」으로 단정할지 여부는 요구사항이 아니라 문구 결정이다 (Task 0으로 보류).

---

## 완료의 정의 (Definition of Done)

> **검증 레벨** — 낮을수록 좋다(자동 검증에 가까움). 기본은 L1, 한 레벨 내릴 때마다 강등 사유를 함께 적는다.
>
> - `[D]`  L1 결정적   — 명령이 합/불을 판정, 사람 판단 없음
> - `[QD]` L2 준결정적 — 다른 AI·기준 체크리스트가 채점
> - `[ND]` L3 비결정적 — 사람이 직접 읽고 판단
>
> 모든 명령은 repo 루트에서 실행한다.

### R1: 핵심 문장·홈

- [ ] [D] `docs/security-guide.md`의 소제목 「회사 정책과 승인 절차가 먼저입니다」가 정확히 1개 있고, 그 소제목부터 다음 소제목 전까지 「회사 정책」과 「허용」이 각 1회 이상 나온다
  <details>
  <summary>검증 명령 — 출력 0건이면 통과</summary>

  ```bash
  awk '/^#### 회사 정책과 승인 절차가 먼저입니다/{f=1;c++;next} f&&/^####/{f=0} f{b=b $0}
       END{ if(c!=1) print "위반: 소제목 " c+0 "개"; if(b!~/회사 정책/) print "위반: 회사 정책 없음"; if(b!~/허용/) print "위반: 허용 없음" }' docs/security-guide.md
  ```

  - 설계 주의: 핵심 문장 전문은 Task 0에서 확정되므로 문장 자체가 아니라 홈 절의 구조와 필수 낱말을 판정한다. 소제목을 바꾸면 이 앵커도 갱신한다.
  </details>
- [ ] [D] 2부 세 페이지(`docs/connect/index.md`·`connectors.md`·`mcp-servers.md`)에 홈 링크 `security-guide.md#external-connection`이 각 1회 이상 있다
  <details>
  <summary>검증 명령 — 출력 0건이면 통과</summary>

  ```bash
  for f in docs/connect/index.md docs/connect/connectors.md docs/connect/mcp-servers.md; do
    grep -q 'security-guide.md#external-connection' "$f" || echo "위반: $f 홈 링크 없음"
  done
  ```

  </details>
- [ ] [QD] 핵심 문장 전문은 홈에만 있고, 2부 페이지는 한 줄 요약과 링크로 그친다  (검증: 다른 AI가 채점, 별도 세션)  ← 강등 사유: 「한 줄 요약」과 「전문 반복」의 구분은 의미 판단이라 명령으로 환원 불가

### R2: 담당 부서 제거

- [ ] [D] `docs/`·`slides/slides.md`(발표자 노트 포함)·`labs/`에 「담당 부서」「담당부서」가 0건이다
  <details>
  <summary>검증 명령 — 출력 0건이면 통과</summary>

  ```bash
  grep -rnE '담당 ?부서' docs slides/slides.md labs --include='*.md'
  ```

  - 설계 주의: 발표자 노트도 대상이다. 변경 표기에 이 낱말을 쓰지 않는다 (전제 A4).
  </details>
- [ ] [D] 문의 유도 동사 「문의하」가 같은 범위에서 0건이다
  <details>
  <summary>검증 명령 — 출력 0건이면 통과</summary>

  ```bash
  grep -rn '문의하' docs slides/slides.md labs --include='*.md'
  ```

  - 설계 주의: 「문의」만 잡으면 「원문의」 같은 낱말 안 일치가 발표자 노트(`slides.md` 1362행 부근)에서 오탐을 낸다. 동사 어간 「문의하」로 잡는다.
  </details>
- [ ] [D] 절차 준수 문장이 주체 교체 후 남아 있다. 「회사가 정한 방법」이 `docs/security-guide.md`·`docs/connect/mcp-servers.md`·`slides/slides.md`에 각 1회 이상 있다
  <details>
  <summary>검증 명령 — 출력 0건이면 통과</summary>

  ```bash
  for f in docs/security-guide.md docs/connect/mcp-servers.md slides/slides.md; do
    grep -q '회사가 정한 방법' "$f" || echo "위반: $f 절차 준수 문장 없음"
  done
  ```

  </details>

### R3: 요청하면 열린다는 문장 제거

- [ ] [D] 네 문구 「권한 문제일 수」「어디에 문의」「내 문제가 아니라」「아직 조직에 추가되지 않은」이 `docs/`·`slides/slides.md`에 0건이다
  <details>
  <summary>검증 명령 — 출력 0건이면 통과</summary>

  ```bash
  grep -rnE '권한 문제일 수|어디에 문의|내 문제가 아니라|아직 조직에 추가되지 않은' docs slides/slides.md
  ```

  </details>

### R4: 회사 정책으로 통일

- [ ] [D] 「관리자 정책」「조직 정책」「사내 정책」이 `docs/`·`slides/slides.md`에 0건이다. Task 0에서 통일 범위를 좁혀 남기기로 한 표현이 있으면 그 표현을 제외 패턴으로 추가하고 전제에 적는다
  <details>
  <summary>검증 명령 — 출력 0건이면 통과</summary>

  ```bash
  grep -rnE '관리자 정책|조직 정책|사내 정책' docs slides/slides.md
  ```

  </details>
- [ ] [D] 제품 사실 서술이 유지된다. 「조직 관리자가 먼저 커넥터를 켜 주어야」가 `docs/connect/connectors.md`·`slides/slides.md`에 각 1회 이상, 「항상 허용 / 승인 필요 / 차단」이 `docs/connect/connectors.md`에 1회 이상 있다
  <details>
  <summary>검증 명령 — 출력 0건이면 통과</summary>

  ```bash
  for f in docs/connect/connectors.md slides/slides.md; do
    grep -q '조직 관리자가 먼저 커넥터를 켜 주어야' "$f" || echo "위반: $f 관리자 서술 없음"
  done
  grep -q '항상 허용 / 승인 필요 / 차단' docs/connect/connectors.md || echo '위반: 도구 권한 서술 없음'
  ```

  </details>

### R5: 커넥터·MCP 같은 구조

- [ ] [D] 커넥터 `#enterprise` 절, MCP 회사 플랜 note 카드, MCP `#choosing-caveats` 절 세 곳 모두에 「회사 정책」과 「허용」이 있다
  <details>
  <summary>검증 명령 — 출력 0건이면 통과</summary>

  ```bash
  awk '/^## 회사 환경이라면/{f=1;next} f&&/^## /{f=0} f{b=b $0}
       END{ if(b!~/회사 정책/||b!~/허용/) print "위반: connectors #enterprise" }' docs/connect/connectors.md
  awk '/^!!! note "회사 플랜이라면/{f=1;next} f&&/^[^ ]/{f=0} f{b=b $0}
       END{ if(b!~/회사 정책/||b!~/허용/) print "위반: mcp-servers 회사 플랜 note" }' docs/connect/mcp-servers.md
  awk '/^### 상황에 따라 더 봐야 할 것/{f=1;next} f&&/^#/{f=0} f{b=b $0}
       END{ if(b!~/회사 정책/||b!~/허용/) print "위반: mcp-servers #choosing-caveats" }' docs/connect/mcp-servers.md
  ```

  - 설계 주의: 앵커(절 제목·note 라벨)가 사라지면 본문이 비어 위반으로 나온다. 조용히 통과하지 않으므로 라벨을 바꾸면 명령도 함께 갱신한다 (전제 A11).
  </details>
- [ ] [QD] 세 곳의 문장 순서가 「회사 정책 확인 → 허용된 것만 → 허용되지 않은 것은 쓰지 않음 → 연결 방법은 회사가 정한 대로」를 따른다  (검증: 다른 AI가 채점, 별도 세션)  ← 강등 사유: 순서와 의미 대응은 명령으로 환원 불가

### R6: 정책 위치·창구 미기재

- [ ] [D] 「창구」가 `docs/`·`slides/slides.md`에 0건이다 (「어디에 문의」는 R3에서 판정)
  <details>
  <summary>검증 명령 — 출력 0건이면 통과</summary>

  ```bash
  grep -rn '창구' docs slides/slides.md
  ```

  </details>
- [ ] [ND] 정책 문서의 위치나 문의 상대를 가리키는 문장이 없다. Task 0에서 강사 안내로 넘기기로 했으면 그 문장이 1부 준비물 선례와 같은 자리·어투다  (검증: 사람 리뷰)  ← 강등 사유: 「가리킨다」의 판정은 의미 판단

### R7: 정리표 행 (Task 0 조건부)

- [ ] [D] docs 정리표와 slides 정리표에 임직원 행 「연결은 회사가 허용한 것만」이 각 1개 있다 (Task 0에서 추가로 확정, A13)
  <details>
  <summary>검증 명령 — 출력 0건이면 통과</summary>

  ```bash
  ROW='연결은 회사가 허용한 것만'   # 2026-09-10 Task 0 확정 라벨 (전제 A13)
  a=$(grep -cE "^\| $ROW" docs/security-guide.md); b=$(grep -cE "^\| $ROW" slides/slides.md)
  { [ "$a" = 1 ] && [ "$b" = 1 ]; } || echo "위반: docs=$a slides=$b"
  ```

  - 설계 주의: 라벨이 다르면 둘 다 0으로 통과한다. Task 0에서 추가로 확정했으므로 `a`·`b`가 모두 1이어야 실제 통과다.
  </details>

### R8: K-0001 재검토 기록

- [ ] [D] K-0001 파일의 `## 재검토 이력`에 「이슈 #59」를 담은 항목이 정확히 1개 있고, 상태가 `수용`으로 남아 있으며, 원장 index의 K-0001 행에 `#59` 재검토 표기가 있다
  <details>
  <summary>검증 명령 — 출력 0건이면 통과</summary>

  ```bash
  K=.ai/70_ledger/active/K-0001-connector-custom-label-omitted.md
  awk '/^## 재검토 이력/{f=1;next} f&&/^## /{f=0} f&&/이슈 #59/{c++} END{ if(c!=1) print "위반: #59 재검토 항목 " c+0 "개" }' "$K"
  grep -qE '^- \*\*상태\*\*: 수용' "$K" || echo '위반: 상태가 수용이 아님'
  grep -E '^\| K-0001 ' .ai/70_ledger/index.md | grep -q '#59' || echo '위반: index 행에 #59 표기 없음'
  ```

  </details>

### R9: slides 파생

- [ ] [D] `slides/slides.md`에 `#59` 표기가 4행 이상 있다 (7장 준비물, 점검하고 끊기, MCP 어디에 설정하느냐, 커넥터 공통 기준. 정리표 행을 추가하면 5행)
  <details>
  <summary>검증 명령 — 출력 0건이면 통과</summary>

  ```bash
  n=$(grep -c '#59' slides/slides.md); [ "$n" -ge 4 ] || echo "위반: #59 표기 ${n}행"
  ```

  </details>
- [ ] [D] Slidev 빌드가 통과한다
  <details>
  <summary>검증 명령 — 출력 0건이면 통과 (약 15초)</summary>

  ```bash
  (cd slides && npx slidev build --out "$(mktemp -d)" >/dev/null 2>&1) || echo '위반: slidev build 실패'
  ```

  </details>
- [ ] [ND] 수정한 슬라이드가 docs의 요약이며 docs와 다른 말을 하지 않는다  (검증: 사용자가 화면에서 확인, plan Task 7)  ← 강등 사유: 요약 허용과 다른 말 금지의 경계는 의미 판단

> R2·R3·R4·R6의 검증 명령은 `slides/slides.md`를 포함하므로 slides 본문의 문구 제거는 그 항목이 함께 판정한다.

### R10: 점검·승인 순서

- [ ] [ND] docs 초안의 사용자 점검·승인 사실(plan Task 3)과 슬라이드 화면 확인 사실(plan Task 7)이 summary에 남아 있고, Task 3 승인 전에 slides를 고치지 않았다  (검증: 사람 리뷰)  ← 강등 사유: 승인 사실과 선후는 사용자만 확인할 수 있다

### R11: 로컬 정책 등재

- [ ] [D] `.ai/40_domain/policies/local/`에 md 파일이 1개 이상 있고, `.ai/40_domain/index.md`에 그 파일명이 있다
  <details>
  <summary>검증 명령 — 출력 0건이면 통과</summary>

  ```bash
  f=$(ls .ai/40_domain/policies/local/*.md 2>/dev/null | head -1)
  [ -n "$f" ] || echo '위반: 로컬 정책 파일 없음'
  [ -n "$f" ] && { grep -q "$(basename "$f")" .ai/40_domain/index.md || echo '위반: index 미등재'; }
  ```

  - 설계 주의: 정책 파일 본문은 「담당 부서」를 예시로 인용한다. R2 검증 범위(`docs`·`slides`·`labs`)에 `.ai/`가 없어 충돌하지 않는다.
  </details>
- [ ] [QD] 정책 내용이 이 이슈의 원칙 네 가지(부서 지목 금지, 회사 정책 표현, 제품 역할 서술 유지, 창구 미기재)를 빠짐없이 담는다  (검증: 다른 AI가 채점, 별도 세션)  ← 강등 사유: 원칙의 포함 여부는 의미 판단

### 공통

- [ ] [D] `mkdocs build --strict`가 통과한다
  <details>
  <summary>검증 명령 — 출력 0건이면 통과</summary>

  ```bash
  .venv/bin/mkdocs build --strict -q -d "$(mktemp -d)" >/dev/null 2>&1 || echo '위반: mkdocs strict 빌드 실패'
  ```

  - 설계 주의: Material 팀의 mkdocs 2.0 안내가 stderr에 나오지만 종료 코드는 0이다 (2026-09-10 기준선 확인).
  </details>
- [ ] [D] 이 브랜치에서 추가한 행에 U+2014(—)가 0건이다
  <details>
  <summary>검증 명령 — 출력 0건이면 통과</summary>

  ```bash
  git diff main -- docs slides/slides.md | grep '^+' | grep -n '—'
  ```

  - 설계 주의: 부제 자리의 줄표는 U+2015(―)를 쓴다. 기준선(커밋 e7c4825)에서 docs·slides의 U+2014는 0건이다.
  </details>

---

## 전제 (Assumptions)

- A1 (핵심 문장, 2026-09-10 Task 0 확정): 「회사 환경에서는 커넥터든 MCP 서버든 회사 정책을 먼저 확인하고, 회사가 허용한 것만 씁니다. 허용되지 않은 것은 쓰지 않고, 연결 방법도 회사가 정한 대로 따릅니다.」 홈 절 첫 문단에 굵게 두고, 바로 뒤에 「회사는 보안 정책에 따라 커넥터·MCP 서버를 막아 두었을 수 있습니다」라는 사실 문장을 잇는다.
- A2 (제거·유지 구분 기준): 「담당 부서」는 조직 단위라 제거하고, 「관리자」「조직 소유자」는 Team·Enterprise 조직 설정 화면에 있는 제품 역할이라 유지한다. 기준은 「화면에 존재하는 역할인가」다.
- A3 (허용·금지 표현 원칙, 2026-09-10 사용자 확정): 허용 쪽은 구체(관리자가 켜 둔 목록)로 적어도 되지만, 금지 쪽은 「허용되지 않은 것」처럼 포괄어로 쓴다. 「목록에 없는 것은 쓰지 않는다」처럼 금지를 열거로 좁히지 않는다.
- A4 (발표자 노트 표기): 노트에도 「담당 부서」「문의하」 낱말을 쓰지 않는다. R2 검증이 노트까지 훑기 때문이다. 변경 표기는 「#59: 부서 지목·문의 유도 문구 제거, 회사 정책으로 통일」 형식으로 적는다.
- A5 (줄 번호): 요구사항의 줄 번호는 커밋 e7c4825(main, #58 병합) 기준이다. 편집하면 어긋나므로 실제 위치는 절 제목·note 라벨 앵커로 찾는다.
- A6 (브랜치·커밋): 작업 브랜치 `issue-0059`, PR 대상 `main`. 커밋 제목 끝에 `(#59)`를 붙인다 (git-commit 스킬 형식).
- A7 (검토 후 버린 대안): slides를 별도 이슈로 분리(#55/#56 방식)는 대상이 다섯 장이라 버렸다. 「담당 부서」를 「관리자」로 치환하는 안은 관리자도 사람을 가리켜 문의 유도가 남으므로 버렸다.
- A8 (빌드 도구): `.venv/bin/mkdocs build --strict`와 `slides/`의 `npx slidev build`(node_modules 설치됨, 약 15초) 둘 다 2026-09-10 기준선에서 통과했다.
- A9 (승인 게이트): plan Task 3(docs 점검)·Task 7(slides 화면 확인)은 사용자 승인 게이트다. AI가 대신 닫지 않는다.
- A10 (한 줄 요약 규칙의 출처): 2부 페이지의 「한 줄 요약 + 홈 링크」는 #55가 정한 「주제마다 홈 1곳, 다른 곳은 한 줄 링크」 규칙의 적용이다.
- A11 (note 라벨): MCP 회사 플랜 note 카드의 라벨 「회사 플랜이라면 관리자가 먼저 열어 줘야 합니다」는 A2에 따라 유지한다. R5 검증 명령의 앵커가 이 라벨에 걸려 있으므로 바꾸면 명령도 갱신한다.
- A12 (대체 문장, 2026-09-10 Task 0 확정: 교체): 「연결이 되지 않을 때도 … 먼저 문의하는 편이 빠릅니다」는 「연결이 되지 않아도 회사가 안내한 방법 밖에서 설정을 바꾸지 않습니다」로 바꾼다. 「혼자 손대지 말라」는 주의는 살리고 문의 유도만 뺀다.
- A13 (정리표 행, 2026-09-10 Task 0 확정: 추가): 라벨은 기존 행과 같은 꼴인 「연결은 회사가 허용한 것만」. 임직원 열 `✅ (사내 자료)`, 학생·일반인 열 `―`. 「연결은 회사 계약 플랜에서만」 행 바로 아래에 둔다. docs·slides 둘 다 1행이어야 R7을 통과한다.
- A14 (「목록에 없음」 서술, 2026-09-10 Task 0 확정): 「목록에 없으면 허용 범위 밖입니다」처럼 사실만 적고, 회사의 의도(막았다·아직 켜지 않았다)는 단정하지 않는다.
- A15 (R4 통일 범위, 2026-09-10 Task 0 확정): 「관리자 정책」「조직 정책」「사내 정책」 전부 「회사 정책」으로 바꾼다. 제외 패턴 없음. 「보안 정책 위반」의 「보안 정책」은 정책의 종류를 말하는 표현이라 대상이 아니다.
- A16 (R6, 2026-09-10 Task 0 확정): 정책 위치·문의 창구는 아예 언급하지 않는다. 강사 안내 문장도 두지 않는다.
- A17 (slides 범위, 2026-09-10 Task 0 확정): slides는 이 이슈의 Task 6·7에서 처리한다.

---

## 연관 문서

| 문서 | 역할 |
|------|------|
| `.ai/50_adr/active/adr-0010-part2-connection-scope-expansion.md` | 결정 4: 연결 보안 서술의 SSoT는 `security-guide.md` (R1 홈 배치 근거). 결정 3-1: 임직원 확장 깊이는 「회사가 안내한 대로 등록」까지 |
| `.ai/50_adr/active/adr-0002-publishing-structure-docs-ssot-slides-derivative.md` | docs SSoT, slides 단방향 파생 (R9·R10 순서 근거) |
| `.ai/50_adr/active/adr-0005-core-message-non-developers-make-software.md` | 핵심 메시지는 자리를 절제해 박는다 (R1 한 문장·한 홈 근거) |
| `.ai/50_adr/active/adr-0009-unified-ui-theme-claude-style.md` | admonition 의미 보존 (회사 플랜 note 카드 본문을 고칠 때) |
| `.ai/70_ledger/active/K-0001-connector-custom-label-omitted.md` | 재검토 조건이 `#choosing` 표 행 변경에 걸린다 (R8) |
| `.ai/70_ledger/ledger-entry-template.md` | 재검토 이력 표기 형식 (R8) |
| `.ai/40_domain/glossary.md` | 커넥터·MCP 서버 정의. 두 절의 문장을 맞출 때 용어 일관성 기준 (R5) |
| `.ai/40_domain/index.md` | 로컬 정책 등재 시 파일 목록 갱신 (R11) |
| `.ai/90_issues/archive/issue-0056/` | slides 전수 동기화 선례. 반영 / 해당 없음 / 누락 기록 형식 (R9) |
