---
name: step04-prep-handoff
created: 2026-05-08
related-issue: 30
related-files:
  - labs/README.md
  - docs/labs.md
  - .ai/90_issues/active/issue-0030/issue-0030-plan.md
  - .ai/90_issues/active/issue-0030/issue-0030-summary.md
  - .ai/99_workspace/notes/2026-05-08-followup-topic-candidates.md
tags: [issue-30, labs, step04, principle, handoff]
---

# Issue #30 Task 7 진입 직전 — 시리즈 원칙 신설·step04 시나리오 핸드오프

## 배경 (Why)

이슈 #30(실습 자료 생성) 컨텍스트를 `/issue-work --resume`으로 복구한 직후, 사용자가 두 가지 결정을 던졌고 그중 하나는 시리즈 전체에 적용되는 원칙(영속), 다른 하나는 Task 7(step04-wrong-answer-note 본문) 진행 방향을 잡는 입력이다. step04 본문은 사용자의 실제 운영 경험을 반영해 쓰기로 했고, 현재 운영 맥락 공유를 기다리는 상태로 세션을 마쳤다.

## 논의 요약

### 1. 시리즈 차원 원칙: "프롬프트로만 진행"

- 사용자 발의: "전체 실습에서 전제가 되도록 의도적으로 수련을 해야하기 때문에 직접 고치지 말고 프롬프트를 통해서만 모든 실습을 진행하는 것을 권장하고 싶다."
- 검토: 기존 step01~03 본문에 "직접 편집"을 권장하는 구절은 없음(grep 확인) — 충돌 없이 시리즈 차원에서 선언 가능.
- 채택 문안(A안 — 수련 프레이밍): "본 시리즈는 의도적으로 프롬프트만으로 진행하는 수련을 권장합니다. 막혔을 때도 해결을 프롬프트로 요청. 손으로 고치고 싶은 조바심이 바로 수련 지점."
- 적용 범위: `labs/README.md` 추가 / `docs/labs.md` Material `tip` admonition 미러 / 메모리 저장 / Task 7 step04 본문에 자연스럽게 반영.

### 2. step01-weather stage 3 보강 아이디어 (이미 완료된 Task 4 후속)

- 사용자 발의: stage 3에서 "Claude에게 HTML 디자인까지 맡길 수 있다"를 가볍게 시연 가능. 시연 결과가 좋으면 현재 `example-output.html` 교체 검토.
- 본 이슈 #30 범위 외로 분류 — 후속 노트(`2026-05-08-followup-topic-candidates.md`)에 항목 7로 추가.
- Task 4 본문(stage 1·2·3 README) 자체는 손대지 않음.

### 3. Task 7(step04-wrong-answer-note) 시나리오 방향

- 시나리오 라인: **자녀 학습 보조** (step03-voca-quiz 연계). 부모-자녀 학습 도메인을 step03·step04로 잇는다.
- 입력 형태: **문제 사진** (step03가 이미지 입력 패턴을 쓰므로 일관성). 텍스트 입력 옵션도 가능하나 기본은 사진.
- 사용자가 실제 운영 경험이 있다고 회신 → step03처럼 원본 prompt·운영 맥락을 받아 본문에 그대로 반영하기로 함. 현재 사용자 입력 대기 상태.

## 결정사항

- [x] 시리즈 진행 원칙 "프롬프트로만 진행"을 `labs/README.md`·`docs/labs.md`에 명시 (수련 프레이밍 — A안)
- [x] 동 원칙을 메모리에 `feedback_labs-prompt-only.md`로 저장 — 향후 lab 작업에 자동 적용
- [x] step01-weather stage 3 "Claude HTML 디자인 시연" 아이디어는 이슈 #30 범위 외, 후속 노트 항목 7로 보존
- [x] Task 7 step04 시나리오 라인: 자녀 학습 보조(step03 연계), 입력 = 문제 사진 기본
- [ ] step04 본문 작성 — 사용자의 실제 운영 맥락(원본 prompt·입력 흐름·출력 형식·stage 3 HTML 리포트 용도·흔들리는 부분) 수신 후 진행

## 미결 / 열린 질문

- 사용자가 자녀 오답노트로 운영하던 **원본 prompt 또는 instructions** 형태
- **입력 흐름** — 시험지 통째 / 틀린 문제만 잘라서 / 사진 + 자녀 풀이 동봉 중 어느 패턴
- **출력 형식 우선순위** — 문제·정답·해설·핵심 개념·복습 시점 등 항목 중 실제로 쓰는 것
- **stage 3 HTML 리포트 용도** — 누적 1페이지 / 단원별·주차별 분할 / 통계 포함 여부
- **운영 중 가장 흔들리던 지점** — step03의 "사진 뜻 그대로 안 나옴"에 대응되는 step04 고유 흔들림
- step04 stage 3에서 "프롬프트로만 진행" 원칙을 강하게 보여주는 자리로 활용할지(예: HTML 템플릿 자체를 Claude에게 디자인시키는 흐름) 결정 — 후속 노트 항목 7과 연계 가능

## 다음 액션

- 사용자: 위 미결 항목(운영 맥락) 공유
- AI(다음 세션): 사용자가 공유한 운영 맥락 기반으로 step04-wrong-answer-note 본문 작성. step03 패턴(시나리오 정의 → stage 1 자유응답 흔들림 관찰 → stage 2 Skill 정형화 → stage 3 HTML 리포트) 따르되, "프롬프트로만 진행" 원칙과 충돌하지 않도록 표현 점검. Task 7 완료 후 plan·summary 갱신.

## 참조

- 이슈: https://github.com/scroogy-dev/2026-ai-edu/issues/30
- 직전 커밋: `7f42394 chore: 이슈 #30 Task 6 완료·step03 시나리오 재정의 반영 (#30)`
- 이슈 plan/summary: `.ai/90_issues/active/issue-0030/issue-0030-plan.md`, `issue-0030-summary.md`
- 후속 이슈 후보 노트: `.ai/99_workspace/notes/2026-05-08-followup-topic-candidates.md` (항목 7 신규 추가)
- 메모리: `feedback_labs-prompt-only.md` (시리즈 원칙)
- 본 세션에서 변경된 파일: `labs/README.md`(진행 원칙 섹션), `docs/labs.md`(tip admonition), `.ai/99_workspace/notes/2026-05-08-followup-topic-candidates.md`(항목 7)
