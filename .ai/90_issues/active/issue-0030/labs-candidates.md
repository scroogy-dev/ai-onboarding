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
├── step02-file-classifier/                      # Skill 옵션 집중 (stage 1·2)
│   ├── README.md
│   ├── stage1-file-classifier-prompt/
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

**주제**: 파일 분류 — 즉석 prompt vs 옵션 있는 Skill 비교 (stage 1·2)

| stage | 디렉토리 | 단계 | 학습 포인트 |
|-------|---------|------|------------|
| 1 | `stage1-file-classifier-prompt/` | 즉석 prompt 지시 | Cowork·Code에서 Skill 없이 직접 prompt로 파일 이동. 같은 작업을 반복했을 때 흔들리는 점(엑셀 정의·디렉토리 이름·보고 형식) 체감 |
| 2 | `stage2-file-classifier-skill/` | 옵션 있는 분류 Skill | 옵션(`excel` 또는 `image`)을 받아 해당 확장자 파일만 별도 디렉토리 생성·이동. **Skill 파라미터(옵션) 설계** 경험에 집중. stage 1과의 비교로 정형화의 효익 확인 |

**선정 근거**: **Skill 옵션** 개념을 가장 짧게 보여주는 시나리오. stage 1·2 두 단계를 두어 "즉석 지시 vs 정형 자산"의 효익을 직접 비교. stage 3(파일 산출 리포트)은 step01·step04에서 다루므로 본 step에서는 두지 않음.

**짚어둘 점**:
- 실제 파일 이동은 stage 1·2 모두 Cowork(stage 3 매체) 또는 claude.ai Code 실행 모드에서 동작. **단계 라벨은 학습 초점(stage 1=즉석 지시, stage 2=Skill 정형화) 기준**이며 실행 매체는 stage 3 영역임을 README에서 명확히 안내한다.
- step01-weather의 stage 1(어디서나 가능한 챗봇 자유응답)과 달리 본 step의 stage 1은 처음부터 매체 필요 — 학습자에게 "라벨 = 학습 초점, 매체 = 실행 환경, 둘은 분리된 축"이라는 메시지를 한 번 더 강조하는 자리.

---

## step03-voca-quiz

**주제**: 단어장 사진 기반 영단어 출제기 — 멀티모달 입력 + 출처 충실성 + 단어별 발음 링크 (stage 2까지)

| stage | 디렉토리 | 단계 | 학습 포인트 |
|-------|---------|------|------------|
| 1 | `stage1-voca-quiz-prompt/` | 챗봇 자유응답 reference | 단어장 사진 업로드 + "랜덤 출제해줘" 자유응답 — 사진의 뜻이 매번 변경되고(AI가 일반 뜻으로 바꿈) 숙어·개수 처리가 흔들리는 점 체감 |
| 2 | `stage2-voca-quiz-skill/` | 정형 출제 Skill | 사진 + 옵션(숙어 포함/제외) + 출제 개수 입력 → 사진의 뜻 그대로 보존 + 단어마다 네이버 영어사전 직접 링크 부착 |

**선정 근거**: ADR-0001이 후속 이슈로 명시한 "Gems 기반 자동 출제기를 Claude Skill로 재설계" 항목. 부모가 자녀의 영어 단어 숙제를 도울 때 쓰던 Google Gems 기반 보조 도구를 Claude Skill로 옮기면서 단어별 발음 링크 출력까지 한 단계 진화시킨다. 출제 결과가 텍스트로 바로 사용 가능하므로 stage 3(파일 산출) 없이 stage 2까지로 충분.

**짚어둘 점**:
- step02와의 차별 메시지는 "텍스트 옵션 vs **이미지 입력 + 출처 충실성(AI 환각 차단) + 외부 도구 직접 연결**". 단순 옵션 분기에서 한 단계 더 풍부한 Skill 설계.
- 핵심 instructions 제약은 "사진의 뜻을 절대 수정하지 않는다" — 자유응답이 가장 자주 깨는 부분이고, 자녀 채점 기준 일치를 위해 결정적.
- 실행 매체는 stage 1·2 모두 이미지 업로드 가능한 환경 필요(claude.ai 웹·Claude Desktop 모두 OK).

---

## step04-wrong-answer-note

**주제**: 자녀 채점지 오답노트 — 다단계 파이프라인 + 검수 자리 + 디자인까지 프롬프트 (stage 1·2·3 풀 코스)

| stage | 디렉토리 | 단계 | 학습 포인트 |
|-------|---------|------|------------|
| 1 | `stage1-wrong-answer-note-prompt/` | 챗봇 자유응답 reference | 채점된 학습지 사진 한 장 + "오답노트 만들어줘" 자유응답 — OCR 오인식(연필 답안·줄 그음·자체 표시), 한 번에 채점·해설까지 가버려서 **재인식 비용**이 누적되는 점 체감 |
| 2 | `stage2-wrong-answer-note-skill/` | 2단계 파이프라인 Skill | Skill ① `quiz-recognize`(사진 → 인식 결과 엑셀, 채점 X) → 부모 검수 → Skill ② `wrong-answer-note`(검수된 엑셀 → 자녀용 마크다운). **검수 자리를 일부러 둔다**는 메시지 |
| 3 | `stage3-wrong-answer-note-report/` | 인쇄용 HTML 리포트 | 검수된 엑셀 → 학원 워크북 톤 인쇄용 HTML 1페이지. **슬롯 템플릿(`wrong-answer-note-template.html`) + 채워진 예시(`classical.html`)** 동봉(step01 stage 3 패턴). Skill이 스칼라 슬롯 채우기 + PROBLEMS·SELF_CHECK 블록 반복 마커로 가변 문항 처리 + 자녀 친화 해설 자체 생성. 엑셀이 데이터, 마크다운(stage 2 출력)·HTML(stage 3 출력)는 평행 뷰 — 데이터·뷰 분리 |

**선정 근거**: ADR-0001이 후속 이슈로 명시한 "Gems 기반 AI 오답노트를 Claude Skill로 재설계" 항목. 사용자가 운영하던 3-Gem 흐름(문제분석 → 오답노트 → 리포팅)을 Claude Skill 파이프라인 + 디자인 프롬프트로 옮기면서 **검수 자리**라는 학습 메시지를 시리즈의 마지막 step에서 정면으로 드러낸다.

**짚어둘 점**:
- step01~03이 "Skill 하나의 완성도"였다면 step04는 **여러 Skill을 잇고 검수 자리를 두는** 한 단계 위 설계 패턴. 시리즈를 마무리짓는 메시지.
- 매체 요건이 stage별로 갈림 — stage 1만 일반 챗봇 가능, stage 2·3은 Cowork 필요. 비개발자에게 "Skill 가치가 커질수록 매체 요건도 함께 올라간다"는 신호.
- stage 3는 step01 stage 3와 **같은 패턴(슬롯 템플릿 + 예시)** 으로 정렬되되, **블록 반복 마커**(`<!-- PROBLEMS:START/END -->`·`<!-- SELF_CHECK:START/END -->`)를 추가해 가변 문항 수를 다룸 — step01이 고정 슬롯이라면 step04는 슬롯 + 블록 반복. 채워진 예시(`classical.html`)는 사용자의 디자인 prompt 결과물이라 "프롬프트로만 진행" 원칙과 정합 — 학습자도 본인 prompt로 `minimal-template.html` 등 새 톤(같은 슬롯 이름·블록 마커 유지)을 형제로 추가 가능.
- 본 step의 원형은 사용자가 운영하던 자녀 학습지 채점 + 자녀용 오답노트 + 인쇄용 리포트 3-Gem 흐름. 운영 자산 3개(`Step 1. 문제분석.md`, `Step 2. 오답노트.md`, `리포팅 프롬프트.md`)를 Skill·prompt에 그대로 흡수.

---

## 후속 step queue

이슈 #30 범위 외. 본 이슈 완료 후 별도 이슈로 추진:

- 각 step의 README·stage별 가이드 본문 작성 (step 단위 이슈 분리 권장)
- 추가 step 후보(필요 시): 회의록·이메일·문서 요약 / 다른 파일 처리 시나리오 등

> **메모**: ADR-0001이 후속 이슈로 명시했던 "AI 오답노트, 자동 출제기" 두 항목은 본 이슈에서 step03·04로 모두 흡수됨.
