# 실습

> 본 교육의 hands-on 실습 자료입니다. 본문은 GitHub repo 루트의 `labs/` 디렉토리에 있으며, 본 페이지는 인덱스 역할만 합니다.

---

## 왜 사이트 안에 본문이 없나요?

실습 자료는 zip으로 한 번에 받아 **로컬에서 따라하기 좋도록** GitHub repo 루트의 `labs/` 디렉토리에 둡니다. 사이트는 시리즈 개요와 GitHub 링크만 안내합니다.

---

## 진행 원칙

본 시리즈에는 두 가지 진행 원칙이 있습니다. 둘은 짝입니다.

!!! tip "① 프롬프트로만 진행합니다"
    본 시리즈는 **프롬프트만으로** 모든 실습을 진행하는 수련을 권장합니다.

    - 파일·코드·템플릿을 에디터로 직접 고치지 않고, AI에게 프롬프트로 요청합니다.
    - 이유: AI에게 "말로 소프트웨어를 움직이는" 근육을 만드는 것이 본 시리즈의 목적입니다.
    - 막혔을 때도 해결을 프롬프트로 요청해 보세요 — 손으로 고치고 싶은 조바심이 바로 수련 지점입니다.

!!! tip "② 결과물은 반드시 읽고 이해합니다"
    손으로 쓰지 않더라도, AI가 만든 결과물은 **본인이 직접 읽고 이해한 상태**에서 사용·수정합니다.

    - 읽지 않은 결과물은 사용하지 않습니다 — [마크다운](basics.md#markdown)·HTML·엑셀·Skill 지시문 모두 마찬가지.
    - 이해가 부족하면 AI에게 "왜 이렇게 만들었는지·이 부분이 무슨 의미인지" 다시 물어 짚어 봅니다.
    - ①번이 검토를 면제해 주지 않습니다 — 손으로 쓰지 않는 만큼 이해의 깊이는 더 의식적으로 챙깁니다.
    - 단, **검토의 깊이는 결과물의 영향 범위에 비례합니다** — 한 번 쓰고 버리는 산출물은 가볍게, 반복하거나 공유할 산출물은 깊이 있게. 자세한 가이드는 [메타 원칙 ③](index.md#meta-principles) 참고.

---

## 시리즈 구성

각 step은 하나의 주제를 다루며, 그 안에서 [AI 활용 3단계 모델](index.md#stage-model)에 매핑된 stage들을 진행합니다. **각 step이 풀 코스(stage 1·2·3)일 필요는 없으며, 학습 목표에 맞춰 필요한 stage만 둡니다.**

| step | 주제 | stage 구성 | 핵심 학습 포인트 |
|------|------|-----------|----------------|
| **[step01-weather](https://github.com/scroogy-dev/ai-onboarding/tree/main/labs/step01-weather)** | 날씨 — 자유응답 → 정형 → 리포트 | 1·2·3 | 텍스트 형식 통일, 파일 산출물 도약 |
| **[step02-file-classifier](https://github.com/scroogy-dev/ai-onboarding/tree/main/labs/step02-file-classifier)** | 파일 분류 | 1·2 | Skill 옵션(파라미터) 설계 |
| **[step03-voca-quiz](https://github.com/scroogy-dev/ai-onboarding/tree/main/labs/step03-voca-quiz)** | 영어 단어 출제기 | 1·2 | Skill 활용 다양화 |
| **[step04-wrong-answer-note](https://github.com/scroogy-dev/ai-onboarding/tree/main/labs/step04-wrong-answer-note)** | 자녀 채점지 오답노트 | 1·2·3 | 다단계 파이프라인 + 검수 자리 + 데이터·뷰 분리 |

---

## 자료 받기

- **GitHub에서 보기**: [github.com/scroogy-dev/ai-onboarding/tree/main/labs](https://github.com/scroogy-dev/ai-onboarding/tree/main/labs)
- **zip 다운로드**: [main.zip](https://github.com/scroogy-dev/ai-onboarding/archive/refs/heads/main.zip) — 압축을 풀고 `labs/` 디렉토리만 열어 사용

---

## 사전 준비

실습 진행에 필요한 도구·계정은 [홈 페이지 안내](index.md#preparation)를 참고하세요. 핵심 준비물은 다음과 같습니다.

- Claude Pro 이상 유료 요금제
- Claude Desktop 설치 (stage 3 실습에 필요)
