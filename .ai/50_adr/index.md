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