# Issue #61 실행요약 effort(생각 깊이) 개념 설명 추가와 최신 모델 버전 갱신

> 스펙: [issue-0061-spec.md](./issue-0061-spec.md) | 계획: [issue-0061-plan.md](./issue-0061-plan.md)

## 다음 작업

> ▶️ 다음 작업: Task 8 (번외): 이모지 정리

## 모델 기록

| 구분 | 모델 | effort |
|------|------|--------|
| 계획 모델 | Anthropic, Claude Opus 5.5 (claude-opus-5-5) | high |
| 계획 audit 모델 | OpenAI, GPT-6.1 Sol (gpt-6.1-sol) | high |
| 구현 모델 | Anthropic, Claude Opus 5.5 (claude-opus-5-5) | high |
| 최종 audit 모델 |  |  |

- **계획 감사**: 수행 · 발견 3건 · 보정 3건

---

## Task별 수행 결과

### Task 0 (고정): 구현 시작 게이트 (전제·모호점 확인)

- **결과**: 완료
- **수행 모델**: claude-opus-5-5
- **수행 effort**: high
- **audit 발견**: 0건
- **보정 반영**: 0건
- **재시도**: 0회
- **수행 내용 요약**: 전제·모호점 4건을 사용자에게 질의해 확정하고 spec 전제에 반영했다 (2026-10-03).
  - R6 연결: effort 절 → 사용량 절 링크, 사용량 절 「모델을 골라」 문구에 effort 포함 + `#claude-effort` 링크 (A5 ①)
  - R7 확인 수단: 앱 화면 확인 없이 공식 안내로 대신, docs에 화면 표기 미기재 (A5 ②). plan Task 1 작업 내용 1을 이에 맞춰 고침
  - 「12시간 / 1시간」 비유: 쓰지 않음 (A5 ③)
  - 용어 표기: 한국어 공식 문서 꼴을 따라 첫 등장 「노력 수준(effort)」, 이후 「effort」. 「생각 깊이」는 쓰지 않음 (A15 신설)
- **특이 사항**: 용어 표기는 사용자가 「노력」을 제안했고, 공식 문서 확인 결과(제목 「노력 수준(Effort)」, 본문 effort)에 맞춰 정했다.

---

### Task 1: 화면·사실 확인

- **결과**: 완료
- **수행 모델**: claude-opus-5-5
- **수행 effort**: high
- **audit 발견**: 0건
- **보정 반영**: 0건
- **재시도**: 0회
- **수행 내용 요약**: A5 ②에 따라 앱 화면 대신 공식 문서로 확인했다 (2026-10-03).

  **effort**

  | 항목 | 확인 결과 | 출처 |
  |------|-----------|------|
  | 한국어 공식 표기 | 제목 「노력 수준(Effort)」, 본문 effort | platform effort 문서 (ko) |
  | API 기본값 | Fable 5.1 `high` · Opus 5.5 `medium` · Sonnet 5.5 `high` · Haiku 4.5 미지원 | platform effort 문서·모델 개요 (ko) |
  | claude.ai 웹·데스크톱·모바일 | 전송 버튼 옆 모델 이름 → Effort → 단계 선택. 단계는 Low · Medium · High · Extra high(xhigh) · Max. 모델마다 권장값이 메뉴에 「Default」로 표시되며, 값 자체는 도움말에 적혀 있지 않음 | 도움말 8664678 (en) |
  | claude.ai 지원 모델 | Sonnet 5.5, Opus 5.5, Fable 5.1, Opus 5, Sonnet 5, Fable 5, Opus 4.7, Opus 4.6, Sonnet 4.6 | 도움말 8664678 |
  | claude.ai 플랜별 제공 여부 | 미확인, 공식 문서로 안내 (도움말에 언급 없음. Enterprise는 관리자가 역할별로 끌 수 있음) | 도움말 8664678 |
  | Claude Code | `/effort`로 변경. 기본값은 effort 지원 모델 전부 `high`, 단 **Opus 5.5·Sonnet 5.5는 `medium`**, Opus 4.7은 `xhigh`. 세션 헤더에 현재 수준 표시 | Claude Code 모델 구성 문서 (ko) |
  | Cowork | 별도 언급 없음. 미확인, 공식 문서로 안내 | - |

  **컨텍스트**

  | 구분 | 1M | 500K | 200K | 조건 |
  |------|----|------|------|------|
  | API | Fable 5.1 · Opus 5.5 · Sonnet 5.5 (및 이전 세대 Fable 5 · Opus 5 · Sonnet 5 · Opus 4.8~4.6 · Sonnet 4.6) | - | Haiku 4.5 등 그 밖의 모델 | 없음 |
  | claude.ai 챗 | Fable 5.1 · Opus 5.5 · Opus 5 · Sonnet 5.5 · Sonnet 5 | Fable 5 · Opus 4.8 · 4.7 · 4.6 · Sonnet 4.6 | 그 밖의 모델 | 유료 플랜, 최신 모델은 사용 크레딧 조건 없음 |
  | Claude Code | Fable 5.1 · Fable 5 · Opus 계열 · Sonnet 5.5 · Sonnet 5 | - | - | Opus 4.6·Sonnet 4.6의 1M은 Pro에서 사용 크레딧 필요 |
  | Cowork | Fable 5.1 · Fable 5 · Opus 5.5 · Opus 5 · Opus 4.8 · 4.7 · Sonnet 5.5 · Sonnet 5 | - | - | 언급 없음 |

  출처: 모델 개요·컨텍스트 윈도우 문서 (platform, ko), 도움말 8606394 (en, "Updated this week")
- **특이 사항**:
  - A3과 다른 점: Claude Code에서는 Sonnet 5.5 기본값이 `medium`이다 (API는 `high`). 사용자 결정(가1): 표는 API 값 유지, 표 아래 한 줄로 차이 안내 (A3 갱신)
  - 기존 docs/index.md note의 「Opus 5·Sonnet 5가 유료 플랜 전부에서 1M」은 최신 모델 기준으로 바뀌어야 한다. 500K 이전 세대에 Fable 5가 들어 있어, 이름을 나열하면 R8 첫 검증에 걸린다 (A9). 사용자 결정(다1): 이름 나열 없이 「이전 세대 일부 모델」로 쓴다 (A9 갱신)
  - 바꾸는 위치 안내: 사용자 결정(나1): 일상어 한 줄 + 도움말 링크, 메뉴 이름은 인용하지 않음 (A5 ② 보완)
  - 확인 결과를 사용자가 확인하고 Task 1 종료를 승인했다 (2026-10-03)

---

### Task 2: docs effort 절 작성

- **결과**: 완료
- **수행 모델**: claude-opus-5-5
- **수행 effort**: high
- **audit 발견**: 0건
- **보정 반영**: 0건
- **재시도**: 0회
- **수행 내용 요약**: `docs/intro.md`에 `### 노력 수준(effort) ― 같은 모델이 얼마나 공들일지 { #claude-effort }` 절을 `#claude-models`와 `#claude-ai` 사이에 신설했다. 정의 문단, 다섯 단계 표, OpenAI 한 줄, 시간 서술(예시 1건 + 출처), 모델별 기본 단계 표, Claude Code·claude.ai 기본값 차이, 바꾸는 위치 안내(도움말 링크), 주의 사항 note 카드, 사용량 절 링크로 구성했다. 사용량 절 문구를 「모델과 effort를 골라」로 고치고 `#claude-effort` 링크를 달았다 (A5 ①).
  - D 검증: R1·R2(2건)·R3(docs)·R4(2건)·R5·R6, 공통 mkdocs strict·U+2014 전부 출력 0건
  - QD 검증: 별도 컨텍스트 에이전트가 R1~R5 QD를 채점해 5건 모두 PASS
- **특이 사항**:
  - QD 채점의 부가 지적 2건을 반영했다: 블로그 출처 표기(「Claude Code 팀 블로그」 → 「Claude 블로그에 실린 글」), 근거 없는 단정(「시간은 단계보다 작업 크기에 더 좌우」 → 「작업에 따라 크게 달라지므로」)
  - 참고 글 원문은 33분 실행을 「A high-effort run」으로 적고 단계를 `xhigh`로 지정하지 않았다. docs는 「높은 단계에서는 약 33분」으로 쓰고, spec R4 본문과 plan Task 2.5의 「xhigh 약 33분」을 「높은 단계 약 33분」으로 정정했다 (요구사항 문구 변경이라 사용자 재승인 대상)
  - 굵게 표기 `**노력 수준(effort)**은`이 CommonMark 규칙상 렌더링되지 않아 `**노력 수준**(effort)은`으로 고쳤다

---

### Task 3: docs 버전 갱신과 용어 사전

- **결과**: 완료
- **수행 모델**: claude-opus-5-5
- **수행 effort**: high
- **audit 발견**: 0건
- **보정 반영**: 0건
- **재시도**: 0회
- **수행 내용 요약**: `docs/intro.md` 버전 예시를 Fable 5.1 · Opus 5.5 · Sonnet 5.5 · Haiku 4.5로 바꾸고 숫자만 굵게 쓰던 꼴을 정리했다 (A10). `docs/index.md` 컨텍스트 크기 note를 Task 1 확인 결과에 맞춰 고쳤다: 최신 모델 1M, 챗 유료 플랜 전부 1M, 이전 세대 일부 500K(이름 나열 없음, A9), Claude Code 조건부 1M. glossary에 `effort (노력 수준)` 행을 추가했다 (A15 보완: 용어 칸은 기존 관례와 R11 검증에 맞춘 꼴).
  - D 검증: R8 두 건(docs 범위), R11, 공통 mkdocs strict·U+2014 전부 출력 0건
  - QD 검증: 별도 컨텍스트 에이전트가 R8 QD(docs 부분)를 채점. 첫 회 FAIL 1건(「Claude Code에서는 이전 세대 Opus도 1M」이 Opus 4.6·4.5까지 포함해 과대)을 보정해 반영
- **특이 사항**: 보정한 문장은 「Claude Code에서는 챗에서 500K인 이전 세대 모델 중 일부도 1M을 쓸 수 있고, 모델과 플랜에 따라 조건이 붙기도 합니다」

---

### Task 4: docs 사용자 점검·승인

- **결과**: 완료
- **수행 모델**: claude-opus-5-5
- **수행 effort**: high
- **audit 발견**: 0건
- **보정 반영**: 0건
- **재시도**: 0회
- **수행 내용 요약**: Task 2·3 변경을 절별로 제시하고 확인 방법(`mkdocs serve`, `git diff main -- docs .ai/40_domain/glossary.md`)을 안내했다. 사용자가 수정 요청 없이 docs를 승인했다 (2026-10-03). docs·glossary·이슈 문서를 커밋했다.
- **특이 사항**: spec R4 문구 정정(「xhigh 약 33분」 → 「높은 단계 약 33분」)도 같은 때 사용자 재승인을 받았다.

---

### Task 5: slides 파생 반영

- **결과**: 완료
- **수행 모델**: claude-opus-5-5
- **수행 effort**: high
- **audit 발견**: 0건
- **보정 반영**: 0건
- **재시도**: 0회
- **수행 내용 요약**: 승인된 docs를 따라 `slides/slides.md`를 고쳤다 (ADR-0002).

  | 대상 | 결과 | 내용 |
  |------|------|------|
  | effort 슬라이드 신설 (26장) | 반영 | 모델(25장)과 사용량(27장) 사이. 정의 한 줄, 다섯 단계 표, 기본 단계 표 + Claude Code 차이, 시간 서술 한 줄. 노트에 출처 `#claude-effort`와 말할 거리 |
  | 모델 슬라이드 하단·노트 (25장) | 반영 | 버전 예시 Fable 5.1·Opus 5.5로 갱신, 「다음 슬라이드」 안내를 effort로 변경, 노트 순서 설명 갱신 |
  | 사용량 슬라이드 (27장) | 반영 | docs와 같이 「모델과 effort를 골라」로 변경, 노트의 nav 위치 설명 갱신 |
  | 컨텍스트 크기 문단 (43장) | 반영 | docs/index.md note와 같게: 최신 모델 1M, 챗 이전 세대 일부 500K, Claude Code 조건부 1M |
  | 기능 비교 슬라이드 노트 | 반영 | docs intro 순서 설명에 effort 추가 |
  | OpenAI none · minimal | 해당 없음 | docs 한 줄 내용이라 슬라이드 본문에 넣지 않고 노트에서 말로 보충 |
  | 주의 사항 카드·바꾸는 위치 | 해당 없음 | 장 분량 때문에 본문 생략, 노트에서 말로 보충 |
  | 누락 | 없음 | - |

  - D 검증: R3·R8 두 건(slides 포함 전체)·R9 세 건, Task 5 「다음 슬라이드」 검사, 공통 mkdocs strict·Slidev 빌드·U+2014 전부 출력 0건 (bash에서 실행)
  - QD 검증: 별도 컨텍스트 에이전트가 R9·R8(slides)·R3을 채점. R9는 노트 한 구절(「두 회사 공통 다섯 단계」가 docs에 없는 주장)로 FAIL이어서 「Claude 기준 다섯 단계」로 보정. 나머지 PASS
- **특이 사항**:
  - 에이전트 셸(zsh)의 `grep`이 셸 함수로 덮여 있어 R9 셋째 검증이 `high`를 못 찾는 거짓 위반을 냈다. 실제 grep(bash)으로 grep을 쓰는 검증 전부를 다시 실행했고, 검출력 확인(위반 표본 검출)까지 해서 통과를 확인했다. Task N 재실행도 bash에서 해야 한다
  - 모델 슬라이드 노트의 「버전 번호는 본문 생략」이 하단 예시와 맞지 않아 「하단 작은 글씨 예시로만」으로 함께 고쳤다

---

### Task 6: slides 사용자 화면 확인

- **결과**: 완료
- **수행 모델**: claude-opus-5-5
- **수행 effort**: high
- **audit 발견**: 0건
- **보정 반영**: 1건
- **재시도**: 1회
- **수행 내용 요약**: Slidev 서버(`localhost:3030`)를 띄우고 25·26·27·43장 주소를 안내했다. 화면 확인 중 사용자가 이모지를 지적해 26장 ⏱️(이번에 추가)와 27장 🛠️(기존)를 지웠고, 사용자가 확인했다 (2026-10-03). slides 변경을 커밋했다.
- **특이 사항**:
  - 이모지 금지는 이슈 #17 archive 기록에만 있어 참조하지 못했다. 메모리에 규칙을 저장했고, 기존 이모지 정리는 번외 요구사항 R12(Task 8)로 추가했다
  - 화면 확인 중 사용자가 「헷갈리면 Sonnet으로 시작」 문구의 근거를 물었다. 근거 기록이 없고 공식 권장(대부분의 작업은 Opus 5.5로 시작)과 어긋나 번외 요구사항 R13(Task 7)으로 추가했다
  - 완료 기준 `[D]` `git status --porcelain`은 `.ai/99_workspace/`의 계획 감사 리포트 2개(미추적)로 출력이 남는다. docs·slides는 깨끗하다 (`git status --porcelain -- docs slides` 출력 0건)

---

### Task 7 (번외): 시작 모델 안내 정정

- **결과**: 완료
- **수행 모델**: claude-opus-5-5
- **수행 effort**: high
- **audit 발견**: 0건
- **보정 반영**: 0건
- **재시도**: 1회
- **수행 내용 요약**: `docs/intro.md` 「어느 모델을 쓸까?」 tip의 시작 모델 안내를 「헷갈리면 Opus로 시작」과 공식 권장 인용(대부분의 작업은 Opus 5.5로 시작)으로 고치고, 링크를 `platform.claude.com/docs/ko/models/overview`로 바꿨다. 선택 기준 문장과 Sonnet·Opus·Fable 구분은 그대로 두었다. slides 25장 인용문과 노트를 docs와 같은 뜻으로 맞췄다. 사용자가 25장 화면을 확인했다 (2026-10-03).
  - D 검증: R13, 공통 mkdocs strict·Slidev 빌드·U+2014 전부 출력 0건 (bash에서 실행)
  - QD 검증: 별도 컨텍스트 에이전트가 공식 모델 안내 페이지와 대조해 R13 QD PASS. 공식 문장 「어떤 모델을 사용해야 할지 확실하지 않다면, 대부분의 워크로드에는 Claude Opus 5.5로 시작하세요」
- **특이 사항**:
  - QD 채점의 부가 지적 3건을 사용자 승인으로 반영했다 (재시도 1회): 슬라이드 인용문에 「대부분」 추가, 발표자 노트의 내부 작업 메모 삭제, `docs/intro.md` 버전 안내 인용문의 「Anthropic 공식 모델 안내」 링크도 새 주소로 변경

---

### Task 8 (번외): 이모지 정리

- **결과**:
- **수행 모델**: -
- **수행 effort**: -
- **audit 발견**: 0건
- **보정 반영**: 0건
- **재시도**: 0회
- **수행 내용 요약**:
- **특이 사항**:

---

### Task N (고정): 교차모델 issue-audit 검증 (사용자 수동 수행)

- **결과**:
- **수행 내용 요약**:
- **특이 사항**:
