# step01-weather — 날씨

> 자유 응답에서 출발해 정형 텍스트 응답·HTML 리포트로 발전하는 풀 코스 실습.

---

## 학습 목표

같은 질문("오늘 날씨 어때?")을 출발점으로 삼아, 챗봇 자유 응답 → 정형 텍스트 응답 Skill → HTML 리포트 파일까지의 단계 도약을 직접 체감합니다.

---

## stage 구성

| stage | 디렉토리 | 단계 | 학습 포인트 |
|-------|---------|------|------------|
| 1 | [stage1-weather-prompt/](./stage1-weather-prompt/) | 챗봇 자유응답 reference | "오늘 날씨 어때?" 질문에 매번 다른 형식의 답이 오는 것을 체감 |
| 2 | [stage2-weather-skill/](./stage2-weather-skill/) | 정형 텍스트 응답 Skill | 같은 질문에 항상 동일 9개 항목(온도·체감·날씨·바람·습도·PM10·PM2.5·우산·옷차림)으로 답하는 Skill |
| 3 | [stage3-weather-report/](./stage3-weather-report/) | HTML 리포트 파일 생성 | iPhone mockup 톤의 슬롯 템플릿(9가지 weather state·4가지 미세먼지 등급 자동 매핑)에 stage 2 결과 + 보강 항목을 채워 단일 HTML 리포트를 자동 저장 |

---

## 선정 근거

누구나 매일 사용하는 보편 시나리오. 1→2 전이가 "텍스트 형식 통일"을, 2→3 전이가 "텍스트 응답 → 파일 산출물"의 단계 도약을 가장 직관적으로 보여줍니다.
