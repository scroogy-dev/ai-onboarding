# Labs 후보 목록 — Issue #30

> 본 이슈에서 확정한 실습 시리즈의 step 단위 후보 목록.
> 개별 step·stage의 가이드 본문 작성은 후속 이슈에서 진행한다.

---

## 디렉토리 구조 (확정)

```
labs/
├── README.md                                    # 시리즈 전체 안내
├── step01-weather/                              # 첫 작성 대상 (풀 코스)
│   ├── README.md
│   ├── stage1-weather-prompt/
│   ├── stage2-weather-skill/
│   └── stage3-weather-report/
├── step02-file-classifier/                      # Skill 옵션 집중 (stage 2만)
│   ├── README.md
│   └── stage2-file-classifier-skill/
├── step03-voca-quiz/                            # Skill 활용 다양화 (stage 1·2)
│   ├── README.md
│   ├── stage1-voca-quiz-prompt/
│   └── stage2-voca-quiz-skill/
└── step04-wrong-answer-note/                    # 학습 도구 종합 (풀 코스)
    ├── README.md
    ├── stage1-wrong-answer-note-prompt/
    ├── stage2-wrong-answer-note-skill/
    └── stage3-wrong-answer-note-report/
```

`docs/labs.md`는 인덱스+GitHub `labs/` 링크+zip 다운로드 안내. 가이드 본문은 루트 `labs/` SSoT.

**각 step은 학습 목표에 맞춰 stage 1·2·3 중 필요한 것만 둔다** (모든 step이 풀 코스일 필요 없음).

**학습 순서**: weather(풀 코스 입문) → file-classifier(Skill 옵션 집중) → voca-quiz(Skill 활용 다양화) → wrong-answer-note(학습 도구 종합).

---

## step01-weather (첫 작성 대상)

**주제**: 날씨 — 자유 응답에서 출발해 정형 응답·HTML 리포트로 발전

| stage | 디렉토리 | 단계 | 학습 포인트 |
|-------|---------|------|------------|
| 1 | `stage1-weather-prompt/` | 챗봇 자유응답 reference | "오늘 날씨 어때?" 질문에 매번 다른 형식 답이 오는 것 체감 |
| 2 | `stage2-weather-skill/` | 정형 텍스트 응답 Skill | 같은 질문에 항상 동일 템플릿(온도·체감·날씨·우산 필요?)으로 답하는 Skill |
| 3 | `stage3-weather-report/` | HTML 리포트 파일 생성 | HTML 템플릿 파일을 읽어 결과를 채운 리포트를 자동 저장하는 Cowork 스킬 |

**선정 근거**: 누구나 매일 사용하는 보편 시나리오. 1→2 전이가 "텍스트 형식 통일"을, 2→3 전이가 "텍스트 응답 → 파일 산출물"의 단계 도약을 가장 직관적으로 보여줌.

---

## step02-file-classifier

**주제**: 파일 분류 — 옵션 있는 Skill 설계 경험 (stage 2만)

| stage | 디렉토리 | 단계 | 학습 포인트 |
|-------|---------|------|------------|
| 2 | `stage2-file-classifier-skill/` | 옵션 있는 분류 Skill | 옵션(`excel` 또는 `image`)을 받아 해당 확장자 파일만 별도 디렉토리 생성·이동. **Skill 파라미터(옵션) 설계** 경험에 집중 |

**선정 근거**: 짧고 집중적인 lab으로 **Skill 옵션** 개념을 보여줌. 단계 모델(1·2·3) 풀 코스가 아니어도 학습 목표에 맞춰 일부 stage만 두는 패턴 시연.

**짚어둘 점**: 실제 파일 이동은 Cowork(stage 3 매체) 또는 claude.ai Code 실행 모드에서 동작. **단계 라벨을 stage 2로 두는 이유는 교육 초점이 "Skill 옵션 설계"(stage 2 개념)이기 때문**이며, 실행 매체는 stage 3 영역임을 README에서 명확히 안내한다.

---

## step03-voca-quiz

**주제**: 영어 단어 문제 출제기 — Skill 활용 다양화 (stage 2까지)

| stage | 디렉토리 | 단계 | 학습 포인트 |
|-------|---------|------|------------|
| 1 | `stage1-voca-quiz-prompt/` | 챗봇 자유응답 reference | "영단어 문제 내줘" 자유응답 — 매번 다른 형식·난이도 체감 |
| 2 | `stage2-voca-quiz-skill/` | 정형 출제 Skill | 단어 리스트·난이도·문제 유형(객관식·빈칸·뜻 맞추기) 입력 → 정해진 형식으로 문제 출력 |

**선정 근거**: ADR-0001이 후속 이슈로 명시한 "Gems 기반 자동 출제기를 Claude Skill로 재설계" 항목. 출제 결과가 텍스트로 바로 사용 가능하므로 stage 3(파일 산출) 없이 stage 2까지로 충분.

---

## step04-wrong-answer-note

**주제**: 오답노트 — 학습 도구 활용 종합 (stage 1·2·3 풀 코스)

| stage | 디렉토리 | 단계 | 학습 포인트 |
|-------|---------|------|------------|
| 1 | `stage1-wrong-answer-note-prompt/` | 챗봇 자유응답 reference | "이 문제 틀렸는데 어떻게 정리?" 자유응답 — 매번 다른 형식 체감 |
| 2 | `stage2-wrong-answer-note-skill/` | 정형 텍스트 출력 Skill | 틀린 문제 입력 → 정해진 형식(문제·정답·해설·핵심 개념·복습 시점)으로 출력 |
| 3 | `stage3-wrong-answer-note-report/` | HTML 리포트 자동 생성 | 누적된 오답을 HTML 템플릿으로 리포트화 (단원별 정리·통계 포함 가능) |

**선정 근거**: ADR-0001이 후속 이슈로 명시한 "Gems 기반 AI 오답노트를 Claude Skill로 재설계" 항목. 학습 도구 활용을 stage 1→2→3 풀 코스로 종합.

---

## 후속 step queue

이슈 #30 범위 외. 본 이슈 완료 후 별도 이슈로 추진:

- 각 step의 README·stage별 가이드 본문 작성 (step 단위 이슈 분리 권장)
- 추가 step 후보(필요 시): 회의록·이메일·문서 요약 / 다른 파일 처리 시나리오 등

> **메모**: ADR-0001이 후속 이슈로 명시했던 "AI 오답노트, 자동 출제기" 두 항목은 본 이슈에서 step03·04로 모두 흡수됨.
