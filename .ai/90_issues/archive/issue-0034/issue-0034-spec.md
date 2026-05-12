# Issue #34 스펙 — 이론 보강 (기본 용어 해소·범위 밖 안내: 마크다운·바이브↔에이전틱·MCP)

> GitHub: https://github.com/scroogy-dev/ai-onboarding/issues/34
> 선례: PR #33 / 이슈 #32 — 이론 보강 (AI 활용 메타 원칙 5종 정착)

## 목표 (Goal)

비개발자 청중이 사이트 첫 진입부터 "마크다운", "바이브 코딩 vs 에이전틱 엔지니어링", "MCP/외부 컨텍스트"에 막히지 않도록, **기본 용어 해소 + 범위 밖 안내** 결의 짧은 보강을 docs에 신설 페이지로 추가하고 slides에 동기화한다.

---

## 범위 (Scope)

**포함 (In)**

- docs **신설 페이지** (예: `docs/basics.md`, 페이지 이름·제목·nav 라벨은 Task 1에서 확정) — 세 섹션 누적
  1. **11 마크다운** — 한 문단 + 한 줄 예시. "텍스트만으로 서식을 표현하는 가벼운 문서 형식, `.md`, AI가 가장 잘 다루는 출력 포맷 중 하나" 수준
  2. **10 바이브 코딩 ↔ 에이전틱 엔지니어링** — 두 활동의 차이 + 본 시리즈 위치(에이전틱 자체는 요구 X, 검수 자세로 연결 — 메타 원칙 ③의 짝)
  3. **5 외부 컨텍스트(MCP·RAG 용어 호명)** — MCP가 무엇·왜 필요한지 한 문단 + **RAG 용어 한 줄 호명**(검색 결과를 컨텍스트에 끼워 답하는 흐름, 본 강의는 내부 구조 미다룸). 설치 how-to·내부 구조 모두 미포함. ADR-0001의 Claude 단독 범위 경계 안내
- `mkdocs.yml` nav에 새 페이지 항목 추가 — 위치 1순위 추천 **`intro.md` 직후**(도입부 흐름 일부, 본문 어디서 만나도 한 번 본 상태). 최종 확정은 Task 1
- **본문 첫 등장 자리에 신설 페이지 링크 보완** — 특히 **마크다운**(메타 원칙 ② "뷰의 예시"·`docs/labs.md`·`labs/README.md`·`step04` 본문 등). 기존 본문에 호명 자리가 있는 경우만 링크 추가, 새 호명을 인위적으로 박지는 않음. 별 페이지가 본문에서 묻히지 않게 하는 보완 장치
- slides 동기화 (ADR-0002 단방향 파생) — 가벼운 1~2장 또는 한 장 압축, Task 1에서 결정
- 후속 후보 노트(`2026-05-08-followup-topic-candidates.md`) 항목 5·10·11 상태를 "이슈 #34 반영 완료"로 갱신
- ADR 신설 여부 결정 — 현 시점 추정은 **미신설** (메시지 무게 가벼움, 용어 해소 결). Task 7에서 확정

**비포함 (Out)**

- MCP 서버 설치·등록 how-to (Claude Desktop·CLI 어느 쪽도)
- 마크다운 문법 학습 (CommonMark·GFM·MkDocs admonition·표 문법 등)
- 에이전틱 엔지니어링 실습·도구 비교
- RAG **내부 구조·벤치마크·구현 패턴**(용어 한 줄 호명은 Task 5 포함 — 헷갈리지 말 것)
- 페르소나·메타 원칙처럼 시리즈 차원 원칙으로의 격상 — 본 이슈는 "용어 해소" 결

---

## 완료의 정의 (Definition of Done)

- [ ] 페이지 이름·제목·nav 라벨·섹션 admonition 패턴이 결정되어 spec/plan에 기록됨 (Task 1)
- [ ] 후속 후보 노트 5·10·11 상태가 "이슈 #34 작업 중 → 반영 완료"로 갱신됨
- [ ] docs 신설 페이지에 3종 섹션이 일관된 톤·구조로 반영됨 (의도적 강조 유지, bullet 나열 회피)
- [ ] `mkdocs.yml` nav에 신설 페이지 항목이 추가됨 (위치 1순위 추천: `intro.md` 직후)
- [ ] **본문 첫 등장 자리에 신설 페이지 링크가 적어도 1곳 박혔다** (특히 마크다운 — 메타 원칙 ② "뷰의 예시" 등)
- [ ] slides에 동기화됨 (한국어 sans-serif·발표 톤 유지, 가벼운 1~2장 또는 한 장 압축)
- [ ] ADR 신설 여부가 결정되어 plan/summary에 기록됨 (현 시점 추정 미신설)
- [ ] MkDocs `--strict` 빌드 정상
- [ ] (slides 변경 시) Slidev `npm run build` 정상
- [ ] 본 이슈가 archive로 이관됨 (PR 생성·머지는 본 이슈 작업 범위 외 — 별도 처리)

---

## 연관 문서

| 문서 | 역할 |
|------|------|
| [ADR-0001](../../../50_adr/active/adr-0001-practice-tool-scope-and-stage-model.md) | Claude 단독 범위·3단계 모델 — MCP/외부 컨텍스트 범위 밖 안내의 경계 |
| [ADR-0002](../../../50_adr/active/adr-0002-publishing-structure-docs-ssot-slides-derivative.md) | docs SSoT·slides 단방향 파생 — 본 이슈도 같은 흐름 |
| [ADR-0005](../../../50_adr/active/adr-0005-core-message-non-developers-make-software.md) | 본질 메시지 "비개발자도 소프트웨어를 만든다" — 본 이슈는 그 진입 보조 안내 층 |
| [ADR-0006](../../../50_adr/active/adr-0006-labs-structure-and-naming.md) | labs 진행 원칙(① 프롬프트로만 + ② 결과물 검수) — 항목 10에서 "에이전틱 입문 자세"로 호명 |
| [ADR-0007](../../../50_adr/active/adr-0007-data-view-separation.md) | 데이터·뷰 분리 — "뷰" 예시로 마크다운이 호명되는 자리 |
| `.ai/99_workspace/notes/2026-05-08-followup-topic-candidates.md` | 항목 5·10·11 출처 |
| 선례 PR #33 / 이슈 #32 (archive/issue-0032) | "이론 보강 — 메타 원칙 5종" 도입 섹션 박스 패턴 |
