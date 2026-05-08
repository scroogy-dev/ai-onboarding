# 실습 시리즈 (labs)

본 교육의 hands-on 실습 자료입니다. 비개발자도 본인의 업무·학습·일상에 쓸 작은 소프트웨어를 직접 만들어 볼 수 있도록 step 단위로 구성했습니다.

---

## 구성

각 step은 하나의 주제를 다루며, 그 안에서 [AI 활용 3단계 모델](https://scroogy-dev.github.io/ai-onboarding/#stage-model)에 매핑된 stage들을 진행합니다. **각 step이 풀 코스(stage 1·2·3)일 필요는 없으며, 학습 목표에 맞춰 필요한 stage만 둡니다.**

| step | 주제 | stage 구성 | 핵심 학습 포인트 |
|------|------|-----------|----------------|
| [step01-weather](./step01-weather/) | 날씨 — 자유응답 → 정형 → 리포트 | 1·2·3 | 텍스트 형식 통일, 파일 산출물 도약 |
| [step02-file-classifier](./step02-file-classifier/) | 파일 분류 | 2 | Skill 옵션(파라미터) 설계 |
| [step03-voca-quiz](./step03-voca-quiz/) | 영어 단어 출제기 | 1·2 | Skill 활용 다양화 |
| [step04-wrong-answer-note](./step04-wrong-answer-note/) | 오답노트 | 1·2·3 | 학습 도구 종합 |

---

## 디렉토리 명명 규칙

```
labs/step<NN>-<topic>/stage<N>-<topic>-<설명>/
```

- `step` 번호 = 학습 순서
- `stage` 번호 = [AI 활용 3단계 모델](https://scroogy-dev.github.io/ai-onboarding/#stage-model) 매핑
- 같은 step 안에서 stage 1→2→3 진행으로 단계 모델을 동일 콘텐츠로 직접 체감

---

## 사이트와의 관계

- **본 디렉토리(`labs/`)가 가이드 본문 SSoT**입니다.
- 사이트(`docs/labs.md`)는 인덱스+GitHub 링크만 노출합니다.
- 본 디렉토리 전체를 zip으로 받아 로컬에서 함께 보면서 따라할 수 있습니다.

---

## 사전 준비

- Claude Pro 이상 유료 요금제
- Claude Desktop 설치 (stage 3 실습에 필요)
- 자세한 준비물은 [사이트 안내](https://scroogy-dev.github.io/ai-onboarding/#preparation)를 참고하세요.
