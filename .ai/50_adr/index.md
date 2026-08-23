# 50_adr 인덱스

이 디렉토리는 프로젝트의 주요 의사결정 기록(Architecture Decision Records)을 보관합니다.
AI는 작업 시 이 파일을 먼저 읽고, 관련된 ADR만 선택적으로 읽어옵니다.

## 파일 목록

| 파일 | 설명 |
|------|------|
| `active/` | 현재 유효한 결정 |
| `superseded/` | 대체된 결정 (대체한 ADR 번호를 문서 내에 명시) |

## Active ADR

| 번호 | 제목 | 요약 |
|------|------|------|
| [ADR-0001](active/adr-0001-practice-tool-scope-and-stage-model.md) | 실습 도구 범위(Claude 단독) 및 AI 활용 3단계 모델 도입 | 실습 도구를 Claude로 통일하고, 1) 챗봇 → 2) 프롬프트 재활용 → 3) 에이전트 3단계 학습 사다리를 도입 |
| [ADR-0002](active/adr-0002-publishing-structure-docs-ssot-slides-derivative.md) | 콘텐츠 발행 구조 — `docs/`(MkDocs Material) SSoT, `slides/`(Slidev) 파생 | `docs/`를 콘텐츠 SSoT로 유지하고, `slides/`는 단방향 파생 표면. 매체별 전용 문법은 각자 자유 사용, 변형 금지 자산만 후행 추출 |
| [ADR-0003](active/adr-0003-deprecate-self-implemented-slide-mode.md) | 자체 구현 슬라이드 모드(`reveal-toggle.js`) 단계적 제거 및 Slidev로 대체 | 약 1,000줄의 자체 JS·CSS 슬라이드 모드를 Issue #9 완료 시점에 제거. `overrides/main.html`의 슬라이드 버튼은 Slidev URL 링크로 교체 |
| [ADR-0005](active/adr-0005-core-message-non-developers-make-software.md) | 본 강의의 본질 메시지 프레임 — "비개발자도 소프트웨어를 만든다" | "도구" 우회 대신 "소프트웨어" 명시. 결정성/비결정성 메커니즘은 "동일 품질로 반복 보장" 결과형으로 우회 전달. 메시지는 Why·결정 룰 등 핵심 3곳에만 박아 인지 부하 절제 |
| [ADR-0006](active/adr-0006-labs-structure-and-naming.md) | 실습 자료 구조 — `labs/` SSoT, 중첩 명명 규칙, stage 3 자산 패턴 | 실습 본문은 루트 `labs/`(zip 친화), `docs/labs.md`는 인덱스. 명명은 `step<NN>-<topic>/stage<N>-...` 중첩. stage 3 자산은 슬롯 템플릿 + 채워진 예시 두 벌, 데이터/뷰 분리(→ ADR-0007). 진행은 ① 프롬프트로만 진행 + ② 결과물 검토·이해 의무 두 원칙. ADR-0001 후속(오답노트·자동 출제기) 흡수 |
| [ADR-0007](active/adr-0007-data-view-separation.md) | 데이터와 뷰의 분리 — 시리즈 차원의 산출물 사고 원칙 | 산출물의 데이터(값)와 뷰(표현)를 평행 형제로 분리하는 사고를 시리즈 차원 원칙으로 둔다. ADR-0006 결정 5(stage 3 자산 패턴)의 "데이터/뷰 분리" 부속 메시지를 별 ADR로 분리해 격상. step01·step04 가시 사례 |
| [ADR-0008](active/adr-0008-determinism-explicit-visualization-comparison-table.md) | 결정성/비결정성 메커니즘의 명시적 가시화 — 비교표 형태로 도입 | 본문 기본은 ADR-0005 §3에 따라 결과형 유지, 메커니즘 단어 명시는 비교표 1곳(`docs/basics.md` 첫 H2 + 짝 슬라이드)에 한정. 1회성 프롬프트 · 에이전트 스킬 · 애플리케이션 3종 분류는 ADR-0001 3단계 모델과 다른 차원의 비교 분류. ADR-0005 §3와 짝으로 운용 |
| [ADR-0009](active/adr-0009-unified-ui-theme-claude-style.md) | docs·slides 통합 UI 테마 — Claude 스타일(라이트) 채택 | docs(indigo)·slides(the-unnamed 다크)의 톤 불일치를 Claude 스타일(아이보리+코랄, 라이트)로 통일. docs는 라이트/다크 토글 유지, slides는 default 테마로 라이트 전용. admonition·색 카드 정합, 토큰(색·폰트) 명시. ADR-0004 대체 |
| [ADR-0010](active/adr-0010-part2-connection-scope-expansion.md) | 2부(도구·데이터 연결) 신설 — 같은 사이트 안에서 범위 축 확장 | ADR-0001을 대체가 아니라 확장. 같은 repo·사이트에서 nav를 1부(AI 활용 기본)/2부(도구·데이터 연결)로 구분하고 가이드는 부 공통 유지. 커넥터·MCP는 "이용까지만", 개발·RAG 내부는 범위 밖. 연결 보안 본문은 security-guide.md가 SSoT. 도구 축(ChatGPT 등) 다원화는 이 ADR의 결정 대상 아님 |
| [ADR-0011](active/adr-0011-education-scope-personal-webapp.md) | 교육 범위 경계 이동 ― 개인용 로컬 HTML·자바스크립트 웹앱까지 확장 | ADR-0008이 애플리케이션 전체를 범위 밖 비교 기준으로 두던 배치를 갱신. 경계를 애플리케이션 안쪽으로 옮겨 개인용 HTML·자바스크립트 웹앱까지 범위 안, 다수 사용자·별도 서버나 설치·빌드 도구·웹사이트 배포는 범위 밖. 「퍼블리싱」 낱말 대신 로컬 사용과 배포의 대비로 서술. ADR-0001 3단계 모델은 불변 |

## Superseded ADR

| 번호 | 제목 | 대체 |
|------|------|------|
| [ADR-0004](superseded/adr-0004-slides-theme-the-unnamed.md) | 발표 슬라이드 테마 — `slidev-theme-the-unnamed` 채택 + 다크 mermaid 셋업 | → [ADR-0009](active/adr-0009-unified-ui-theme-claude-style.md) (Claude 라이트 테마로 통일) |