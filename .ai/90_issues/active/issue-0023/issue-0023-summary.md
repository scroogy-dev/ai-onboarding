# Issue #23 실행요약 — 생성형 AI 소개 및 Claude 소개 추가

> 스펙: [issue-0023-spec.md](./issue-0023-spec.md) | 계획: [issue-0023-plan.md](./issue-0023-plan.md)

## 다음 작업

> ▶️ 다음 작업: Task 6 — `slides/slides.md` 파생 작성 (ADR-0002 단방향 파생)

---

## Task별 수행 결과

### Task 1: 정보 구조(IA) 결정 — 페이지 수·배치·nav 구성 초안

- **결과**: 완료
- **수행 내용 요약**:
  - 후보 3안(A: 단일 도입 페이지 / B: 2-page 분할 / C: index.md 내 섹션 추가)을 장단점과 함께 제시.
  - 사용자와 합의하여 **A안 + 홈 바로 다음 nav 배치**로 확정.
  - 파일: `docs/intro.md` (`## 생성형 AI 소개` → `## Claude 소개` 2섹션 구조).
  - `mkdocs.yml` `nav`: `홈 → 도입 → 보안 → 운영`.
- **특이 사항**:
  - Claude 3종 각각에 본 교육의 단계(1단계 / 3단계 / 3단계)를 라벨로 명시하기로 합의 → Task 3에서 `docs/index.md`「3단계 모델」과 상호 링크 필요.

---

### Task 2: 생성형 AI 소개 콘텐츠 작성

- **결과**: 완료
- **수행 내용 요약**:
  - `docs/intro.md` 신규 생성. H1(도입) + `## 생성형 AI 소개`(H3 2개: 대표 제품 / 챗봇 vs 에이전트) 작성.
  - 대표 제품: Claude/ChatGPT/Gemini 3제품 비교표 + 「Claude로 진행」 info 박스 + 「정답 하나는 없다」 tip 박스.
  - 챗봇 vs 에이전트: grid 2-카드(물어보기/맡기기) + 본 교육 단계(1/3) 라벨 + 「왜 분류가 중요한가요?」 quote 박스.
- **특이 사항**:
  - ADR-0005의 본질 메시지 못 3곳(결정 룰·N-2 사다리·왜 계획?)은 모두 `docs/index.md`에 있음 → 본 도입 페이지는 진입로 역할만 하도록 메시지 강도 조절. 새 못 추가하지 않음.
  - mermaid 다이어그램은 의도적으로 생략 — `docs/index.md` 「3단계 모델」의 다이어그램과 중복되므로 텍스트 링크로 대체.
  - 아직 `mkdocs.yml` `nav`에 등록되지 않은 상태(Task 4 범위) — 사이트에서는 직접 URL(`/intro/`)로만 접근 가능.

---

### Task 3: Claude 소개 콘텐츠 작성

- **결과**: 완료
- **수행 내용 요약**:
  - `docs/intro.md`에 `## Claude 소개 { #claude }` 섹션 + H3 4개(기능 비교 / claude.ai / Cowork / Code) + 「함께 읽어보세요」 footer 추가.
  - H2 도입: 3종 비교표(제품/무엇/단계) + 준비사항 링크(중복 서술 없이 `#preparation` 참조만).
  - **기능 비교 H3** (사용자 피드백 반영 추가): 6행 표 — 웹 검색·파일 업로드·로컬 파일 R/W·터미널 명령·MCP 연동·외부 API. ✓/△/✗ 범례. 「로컬 환경 접근 = 챗봇/에이전트 분기선」 메시지로 3단계 모델과 연결.
  - 각 H3: 짧은 본문 + 「본 교육에서의 위치」 admonition 박스로 단계 라벨 통일.
- **특이 사항**:
  - claude.ai는 1단계로 라벨하되, Projects/Skills로 2단계 무대도 됨을 본문에서 자연스럽게 언급 — `docs/index.md` 단계표(2단계 도구 = Agent Skills·Projects)와 정합.
  - Code 섹션에서 Task 2의 `#products` 앵커(코딩 에이전트 표)로 역참조 링크 → 페이지 내 흐름 상호 보강.
  - footer는 `docs/index.md`의 「함께 읽어보세요」 패턴을 그대로 따라 일관성 유지.
  - **Cowork 샌드박스 사실 확정** (사용자 확인): 내부 도구(파일·터미널·curl)는 폭넓게 쓰되 외부 인터넷·API 호출은 보안 정책상 차단. 비교표 4행(파일·터미널·MCP·외부 API) 모두 「△ 샌드박스」로 일관 표기, 마무리 문장에도 반영. 공식 docs는 `support.claude.com/ko/articles/13345190` (reference memory에 저장).
  - 남은 검증 권장 항목: claude.ai의 △ (Connectors) 표기 — 요금제·기능 정책 변동 잦으므로 운영 전 한 번 더 확인.
  - **Agent Skills 행 추가** + 「웹만 안 됨」 추정 검증 결과 정정: 공식 docs(`platform.claude.com/.../agent-skills/overview`) 「Where Skills work」 섹션 기준 claude.ai는 사전 제작 + 커스텀 모두 지원(커스텀은 Pro+ Settings 업로드). 세 제품 모두 ✓. 단 cross-surface 동기화 불가는 마무리 문장에 명시. reference memory(`reference_anthropic-agent-skills.md`) 추가.
  - **Cowork 3중 보호 모델 반영** (사용자가 공식 문서 인용 제공): 단순 「샌드박스」 표기에서 보호 메커니즘별 정확한 라벨로 분리. 표 셀: 파일 → △ 연결 폴더만 / 터미널 → △ 격리 VM / 외부 API → △ 송신 정책. Cowork H3에 「3중 보호 모델」 info admonition 추가(코드 실행 격리·제어된 파일·제어된 네트워크 3개 항목 + 비교표 Cowork △와의 연결). 마무리 문장의 「샌드박스」 → 「3중 보호」 모델 표현으로 교체. reference memory도 「항상 차단」 표현을 「default vs 구성에 따라 가변」으로 정정.

---

### Task 4: `mkdocs.yml` nav 등록 + 용어사전 정합

- **결과**: 완료
- **수행 내용 요약**:
  - `mkdocs.yml` `nav`에 `도입: intro.md`를 「홈」 바로 다음, 「보안 및 개인정보 가이드」 앞에 등록 (Task 1 확정안 그대로).
  - `.ai/40_domain/glossary.md`(기존: 빈 표)에 `docs/intro.md`에서 도입한 용어 8개 정의 추가 — 생성형 AI / 챗봇 / 에이전트 / claude.ai / Claude Cowork / Claude Code / Agent Skills / MCP.
  - 각 항목은 비개발자 톤 한 줄 정의 + 본 교육 단계 라벨(해당 시) + 출처(`docs/intro.md`) 표기.
- **특이 사항**:
  - Cowork 정의에 「격리 VM·연결 폴더·송신 정책의 3중 보호」를 명시 → intro.md의 「3중 보호 모델」 admonition·기능 비교표와 일관 유지.
  - Agent Skills·MCP는 도메인 정의 + 상호 관계(MCP는 claude.ai에서 Connectors로 제한 지원)까지 한 줄에 압축.
  - 빌드 검증은 Task 5에서 수행 — 본 작업은 정적 변경(YAML·MD)만 수행했으므로 사이트에서의 nav 노출·용어 링크 정상 여부는 다음 단계에서 함께 확인한다.

---

### Task 5: `docs/` 로컬 빌드 검증

- **결과**: 완료
- **수행 내용 요약**:
  - `python3 -m mkdocs build --strict --clean` 1.42초 성공, 경고·에러 0건.
  - `--strict` 통과로 `index.md ↔ intro.md` 양방향 앵커(`#preparation`, `#stage-model`, `#claude`, `#products`, `#chatbot-vs-agent` 등) 정합 자동 검증.
  - 생성된 `site/intro/index.html`에서 핵심 요소 렌더 확인 — admonition 18회 / grid CSS 5회 / claude.ai·Cowork·Code 라벨 / 「3중 보호」 admonition / 「기능 비교」 표 모두 정상.
  - `site/index.html` nav에 「도입」 라벨 + `intro/` URL 노출 = Task 4 nav 등록 결과 사이트에 반영 확인.
- **특이 사항**:
  - 비개발자 톤 통독 결과: `VM`은 「격리된 가상 머신(VM)」 풀이 동반, `MCP`는 인라인 「(외부 도구·데이터)」 + glossary 등재로 보강됨. `API`/`IDE`는 기능 비교표 헤더·Code 섹션(3단계 보조 안내) 한정 등장 — 컨텍스트상 비개발자 부담 낮음.
  - 브라우저·모바일 폭 시각 점검은 PR 리뷰 단계로 연기 (빌드 산출물 정상 + 사용 패턴은 기존 `index.md`에서 이미 검증된 것 재사용 → 회귀 위험 낮음).

---

### Task 6: `slides/slides.md` 파생 작성

- **결과**: 미시작
- **수행 내용 요약**:
- **특이 사항**:

---

### Task 7: `slides/` 빌드 검증 + DoD 최종 점검

- **결과**: 미시작
- **수행 내용 요약**:
- **특이 사항**:
