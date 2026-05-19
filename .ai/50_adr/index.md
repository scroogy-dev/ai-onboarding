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
| [ADR-0004](active/adr-0004-slides-theme-the-unnamed.md) | 발표 슬라이드 테마 — `slidev-theme-the-unnamed` 채택 + 다크 mermaid 셋업 | 코드 블록 시각 품질·발표 톤 정합을 위해 `seriph`에서 `the-unnamed` 다크 톤으로 전환. 자체 자산 ~15줄(Korean sans + dark mermaid override). ADR-0002 변형 금지 자산을 메시지·구조 중심으로 해석 보완 |
| [ADR-0005](active/adr-0005-core-message-non-developers-make-software.md) | 본 강의의 본질 메시지 프레임 — "비개발자도 소프트웨어를 만든다" | "도구" 우회 대신 "소프트웨어" 명시. 결정성/비결정성 메커니즘은 "동일 품질로 반복 보장" 결과형으로 우회 전달. 메시지는 Why·결정 룰 등 핵심 3곳에만 박아 인지 부하 절제 |
| [ADR-0006](active/adr-0006-labs-structure-and-naming.md) | 실습 자료 구조 — `labs/` SSoT, 중첩 명명 규칙, stage 3 자산 패턴 | 실습 본문은 루트 `labs/`(zip 친화), `docs/labs.md`는 인덱스. 명명은 `step<NN>-<topic>/stage<N>-...` 중첩. stage 3 자산은 슬롯 템플릿 + 채워진 예시 두 벌, 데이터/뷰 분리(→ ADR-0007). 진행은 ① 프롬프트로만 진행 + ② 결과물 검토·이해 의무 두 원칙. ADR-0001 후속(오답노트·자동 출제기) 흡수 |
| [ADR-0007](active/adr-0007-data-view-separation.md) | 데이터와 뷰의 분리 — 시리즈 차원의 산출물 사고 원칙 | 산출물의 데이터(값)와 뷰(표현)를 평행 형제로 분리하는 사고를 시리즈 차원 원칙으로 둔다. ADR-0006 결정 5(stage 3 자산 패턴)의 "데이터/뷰 분리" 부속 메시지를 별 ADR로 분리해 격상. step01·step04 가시 사례 |
| [ADR-0008](active/adr-0008-determinism-explicit-visualization-comparison-table.md) | 결정성/비결정성 메커니즘의 명시적 가시화 — 비교표 형태로 도입 | 본문 기본은 ADR-0005 §3에 따라 결과형 유지, 메커니즘 단어 명시는 비교표 1곳(`docs/basics.md` 첫 H2 + 짝 슬라이드)에 한정. 1회성 프롬프트 · 에이전트 스킬 · 애플리케이션 3종 분류는 ADR-0001 3단계 모델과 다른 차원의 비교 분류. ADR-0005 §3와 짝으로 운용 |