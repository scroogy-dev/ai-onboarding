# Issue #49 스펙 — 2부(심화편) 신설: MCP 연결 교육 자료

## 목표 (Goal)

같은 repo·같은 MkDocs 사이트 안에 **2부(외부 연결·심화)** 를 신설하여, 기본 커넥터(GitHub·Atlassian)와 MCP 서버 이용 방법을 안내하는 페이지를 발행하고, 1부는 접합부만 최소 수정한다.

---

## 범위 (Scope)

**포함 (In)**

- 2부 신설 결정의 ADR 기록 (ADR-0001의 "Claude 단독·MCP 범위 밖" 선언을 확장하는 결정)
- 2부 골격: `docs/connect/` 디렉토리 + `mkdocs.yml` nav 부(部) 구분
- 2부 본문 3페이지:
  - 개요 — 연결이 왜 필요한가, 1부 3단계 모델과의 관계
  - 기본 커넥터 사용법 — GitHub, Atlassian(Jira·Confluence 등)
  - MCP 서버 이용 방법 — 기본 커넥터에 없는 도구·데이터 연결
- 외부 연결에 따른 보안·주의사항 안내
- 1부 접합부 최소 수정: `docs/basics.md`의 "MCP·RAG는 범위 밖" 박스 → 2부 포워드 링크, `docs/intro.md` 관련 행 정합

**비포함 (Out)**

- `slides/` 파생 슬라이드 — ADR-0002 구조상 docs 확정 후 후행 파생, 후속 이슈로 분리
- `labs/` 2부 실습 신설 — 이 이슈는 docs 본문까지, 실습 설계는 후속 이슈로 분리
- MCP 서버 직접 개발·구현 — 개발자 영역(ADR-0005 경계 유지), 2부에서도 "이용"까지만
- RAG 내부 구조·구현 패턴 — 기존 범위 밖 선언 유지
- 1부 콘텐츠 전면 개편 — 접합부 최소 수정만
- 컨플루언스 발행·동기화 절차 변경 — 기존 운영 흐름 그대로

---

## 완료의 정의 (Definition of Done)

> **검증 레벨** — 낮을수록 좋다(자동 검증에 가까움). 기본은 L1, 한 레벨 내릴 때마다 강등 사유를 함께 적는다.
>
> - `[D]`  L1 결정적   — 명령이 합/불을 판정, 사람 판단 없음
> - `[QD]` L2 준결정적 — 다른 AI·기준 체크리스트가 채점
> - `[ND]` L3 비결정적 — 사람이 직접 읽고 판단

- [ ] [D] 2부 페이지 3종이 존재하고 각 파일의 H1이 정확히 1개  (검증: repo 루트에서 `for f in docs/connect/index.md docs/connect/connectors.md docs/connect/mcp-servers.md; do test -f "$f" && test "$(grep -c '^# ' "$f")" -eq 1 || echo "위반: $f"; done` 출력 0건)
- [ ] [D] nav에 2부 페이지 3종 등재  (검증: `grep -c 'connect/' mkdocs.yml` ≥ 3)
- [ ] [D] 사이트 빌드 통과  (검증: `mkdocs build` 종료 코드 0)
- [ ] [D] 2부 신설 ADR이 존재하고 인덱스에 등재  (검증: `ls .ai/50_adr/active/adr-0010-*.md | wc -l` = 1, `grep -c 'ADR-0010' .ai/50_adr/index.md` ≥ 1)
- [ ] [D] 1부 접합부: `docs/basics.md`에 2부 링크가 있고 "본 강의의 범위 밖" 선언이 제거됨  (검증: `grep -c 'connect/' docs/basics.md` ≥ 1 그리고 `grep -c '본 강의의 범위 밖' docs/basics.md` = 0)
- [ ] [QD] 신규 페이지 전부가 비개발자 톤(전문 용어 최소화)과 1부 용어 정의(`basics.md`)에 정합  (검증: 다른 AI가 채점, 별도 세션)  ← 강등 사유: 톤·용어 정합은 의미 판단이라 명령으로 환원 불가
- [ ] [ND] 사용자가 2부 3페이지와 1부 접합부를 직접 점검하고 피드백 반영까지 승인  (검증: 사람 리뷰)  ← 강등 사유: 교육 콘텐츠 적합성은 최종적으로 저자(사용자) 판단

---

## 전제 (Assumptions)

- **사용자 합의(이 대화에서 확정)**: 기존 1부에 통합하지 않고 별도 2부로 신설한다. repo·MkDocs 사이트는 지금 것을 공유하고 nav에서 부를 구분한다. 1부 수정은 접합부 최소화.
- **사용자 지정 내용 축**: ① 기본 커넥터(GitHub, Atlassian — Jira·Confluence 등) 사용법 ② MCP 서버를 이용하는 방법. 두 갈래가 2부의 뼈대다.
- **검토 후 버린 대안**: (a) 별도 repo/사이트 분리 — 용어 정의·테마·CI·컨플루언스 동기화 재사용을 위해 기각. (b) 1부 본문에 통합 — 1부의 "Claude 단독" 범위 선언(ADR-0001, `basics.md`)과 충돌하고 온보딩 필수 분량이 늘어 기각.
- **Task 0 확정(2026-07-28, 사용자 확인 완료)** — 작성자 제안 5건의 확정값:
  - **디렉토리·파일명**: `docs/connect/` + `index.md`·`connectors.md`·`mcp-servers.md` (제안값 그대로)
  - **부 명칭**: 1부는 "1부 — AI 활용 기본", 2부는 "2부 — 도구·데이터 연결". 부 이름은 난이도가 아니라 **내용**을 말한다 (가칭 "외부 연결(심화)"는 폐기).
  - **nav 재편**: 기존 본문 3페이지(`basics.md`·`intro.md`·`labs.md`)를 1부 섹션으로 묶고 2부 섹션을 그 아래에 둔다. 홈(`index.md`)·`security-guide.md`·`operation-guide.md`는 부 공통이라 최상위 유지.
  - **보안 배치**: 양쪽. 2부 각 페이지에는 그 자리에서 필요한 주의 박스만 짧게 두고, **정책 본문은 `docs/security-guide.md`에 "외부 연결" 절을 신설**한다. 보안 서술의 SSoT는 `security-guide.md`.
  - **labs·slides**: 둘 다 이번 이슈 비포함, 후속 이슈로 분리 (제안값 유지).

- **도구 축 확장(ChatGPT/Codex)과의 관계 — 이 대화에서 확정**:
  - 이 이슈는 **범위 축**(Claude의 손이 닿는 범위) 확장이고 도구 다원화는 **도구 축** 확장이라, 별개 이슈로 분리하고 **이 이슈를 먼저** 진행한다. 도구 축은 ADR-0001의 핵심 결정("실습 도구 Claude 단독")을 뒤집는 일이라 1부·labs·slides 전반을 흔든다.
  - ADR-0010에 경계를 명시한다 — 2부는 ADR-0001의 도구 범위를 **유지한 채 범위만 확장**하며, 도구 다원화는 이 ADR의 결정 대상이 아니다.
  - 2부 본문은 개념·보안·선택 기준을 특정 도구 이름에 묶이지 않게 쓰고 화면 절차만 Claude 기준으로 쓴다. 다만 도구별 탭·분기 구조를 **미리 만들지 않는다** — 도구가 하나뿐인 시점에 빈 칸을 보여주는 손해가 더 크다.
  - 후속 이슈 설계 시 ChatGPT(챗봇·커넥터 축)와 Codex(개발자 코딩 에이전트 축)는 성격이 달라 분리 검토한다 — Codex는 ADR-0005와 ADR-0001의 비개발자 경계에 걸린다.
- **도구 기준**: 교육 대상이 비개발자이므로 커넥터·MCP 서버 안내는 claude.ai Connectors와 Claude Desktop(Cowork) UI 기준으로 다룬다. Claude Code의 MCP 설정(JSON·CLI)은 다루지 않거나 보조 언급에 그친다.
- **외부 문서 링크 규칙**: docs.claude.com 링크는 `/ko/` 경로 우선 (청중이 한국어 사용자).

---

## 연관 문서

| 문서 | 역할 |
|------|------|
| `.ai/50_adr/active/adr-0001-practice-tool-scope-and-stage-model.md` | 1부 범위(Claude 단독)·3단계 모델 — 2부가 확장하는 대상 선언 |
| `.ai/50_adr/active/adr-0002-publishing-structure-docs-ssot-slides-derivative.md` | docs SSoT·slides 파생 구조 — 2부도 동일 구조 적용, slides 후속 근거 |
| `.ai/50_adr/active/adr-0006-labs-structure-and-naming.md` | labs 구조·명명 — 후속 실습 이슈 설계 시 참조 |
| `.ai/50_adr/active/adr-0009-unified-ui-theme-claude-style.md` | 통합 UI 테마 — 2부 페이지도 동일 테마·admonition 관례 |
| `.ai/40_domain/glossary.md` | 도메인 용어 사전 — 신규 용어(커넥터·MCP 서버) 정합 확인 |
| `docs/basics.md` · `docs/intro.md` | (repo 문서) 1부 접합부 — 외부 컨텍스트·MCP 정의와 범위 선언의 현재 위치 |
