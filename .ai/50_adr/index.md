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