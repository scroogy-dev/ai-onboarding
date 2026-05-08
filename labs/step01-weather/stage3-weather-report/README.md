# stage 3 — HTML 리포트 파일 생성 (날씨)

> stage 2의 텍스트 응답을 한 단계 더 — **HTML 리포트 파일**로 자동 저장합니다. "텍스트 답" → "파일 산출물"의 도약이 이 stage의 핵심입니다.

---

## 학습 목표

- 같은 작업도 **텍스트 답**과 **파일 산출물**의 가치는 다르다는 점을 체감합니다.
- Claude Cowork에서 **파일 입출력을 동반하는 Skill**의 기본 패턴(템플릿 읽기 → 값 채우기 → 새 파일 저장)을 익힙니다.

---

## 사전 조건

- [stage 2](../stage2-weather-skill/) 수료 (정형 텍스트 출력 Skill 동작 확인)
- **Claude Desktop 설치** + **Claude Cowork** 사용 가능 환경 ([홈 페이지 준비물](https://scroogy-dev.github.io/ai-onboarding/#preparation) 참조)
- HTML 파일 — 본 stage에서 사용할 **템플릿 파일**을 준비해 둡니다 (아래 절차에서 안내)

> stage 1·2와 달리 stage 3부터는 **로컬 파일을 다루는 매체**가 필요합니다. 본 교육은 그 매체로 **Claude Cowork**(Claude Desktop의 작업공간)을 표준으로 씁니다.

---

## 준비 — HTML 템플릿 파일

본 stage 디렉토리의 [`weather-html-report/weather-template.html`](./weather-html-report/weather-template.html)을 작업공간에 복사합니다 (또는 아래 코드를 그대로 새 파일로 저장). **`{{...}}` 자리는 Skill이 채워 넣을 슬롯**입니다 — 학습자가 직접 손댈 부분은 없습니다.

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <title>오늘의 날씨 — {{city}}</title>
  <style>
    body { font-family: sans-serif; max-width: 480px; margin: 2rem auto; padding: 0 1rem; }
    h1 { border-bottom: 2px solid #4f46e5; padding-bottom: .3rem; }
    table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
    th, td { padding: .5rem; border-bottom: 1px solid #eee; text-align: left; }
    th { width: 40%; color: #6b7280; }
  </style>
</head>
<body>
  <h1>오늘의 날씨 — {{city}}</h1>
  <p style="color:#6b7280">{{date}}</p>
  <table>
    <tr><th>온도</th><td>{{temperature}}</td></tr>
    <tr><th>체감</th><td>{{feels_like}}</td></tr>
    <tr><th>날씨</th><td>{{weather}}</td></tr>
    <tr><th>바람</th><td>{{wind}}</td></tr>
    <tr><th>습도</th><td>{{humidity}}</td></tr>
    <tr><th>미세먼지(PM10)</th><td>{{pm10}}</td></tr>
    <tr><th>초미세먼지(PM2.5)</th><td>{{pm25}}</td></tr>
    <tr><th>우산 필요?</th><td>{{umbrella}}</td></tr>
    <tr><th>옷차림</th><td>{{clothing}}</td></tr>
  </table>
  <p style="margin-top:1.5rem">{{summary}}</p>
</body>
</html>
```

---

## 절차

### 1. Cowork 작업공간 열기

Claude Desktop을 실행하고 새 작업공간(프로젝트)을 만든 뒤, 위에서 만든 `weather-template.html`을 작업공간에 둡니다.

### 2. 새 Skill 생성 (또는 stage 2 Skill 확장)

stage 2의 텍스트 출력 Skill을 그대로 두고, 다음 내용으로 **새 Skill**을 추가하는 방식이 명료합니다.

| 항목 | 예시 입력값 |
|------|-----------|
| 이름 | `날씨 HTML 리포트` |
| 설명 | `도시 이름을 받아 오늘 날씨를 HTML 리포트 파일로 저장한다` |

### 3. Instructions 입력

```
역할: 사용자가 도시 이름을 알려주면, 그 도시의 오늘 날씨를 HTML 리포트 파일로 저장한다.

순서:
1. 도시의 오늘 날씨를 다음 항목으로 정리한다 (stage 2 Skill의 출력 형식과 동일).
   - 온도 (예: 18°C)
   - 체감 (한 단어: 추움/선선/쾌적/더움/매우 더움)
   - 날씨 (다음 중 하나: 맑음/구름조금/구름많음/흐림/비/소나기/천둥번개/눈/안개)
   - 바람 (약함/보통/강함 + m/s 또는 km/h 수치)
   - 습도 (숫자% + 건조/적정/높음 중 한 단어)
   - 미세먼지 PM10 (좋음/보통/나쁨/매우 나쁨)
   - 초미세먼지 PM2.5 (좋음/보통/나쁨/매우 나쁨)
   - 우산 필요? (예/아니오 + 짧은 이유)
   - 옷차림 (한 줄 권고)
   - 한 줄 총평
2. 작업공간의 `weather-template.html` 파일을 읽는다.
3. 템플릿의 다음 슬롯을 위에서 정리한 값으로 치환한다.
   - `{{city}}` `{{date}}` — 도시·오늘 날짜(YYYY-MM-DD)
   - `{{temperature}}` `{{feels_like}}` `{{weather}}` `{{wind}}` `{{humidity}}` `{{pm10}}` `{{pm25}}` `{{umbrella}}` `{{clothing}}` — 위 항목들
   - `{{summary}}` — 한 줄 총평
4. 결과를 `weather-report-<도시>-<YYYY-MM-DD>.html` 파일명으로 작업공간에 새로 저장한다.
5. 사용자에게 저장된 파일 경로를 알려준다.

도시를 명시하지 않으면 사용자에게 한 줄로 다시 묻는다.
```

### 4. Skill 호출

```
서울
```

호출이 끝나면 작업공간에 **`weather-report-서울-2026-MM-DD.html`** 같은 파일이 새로 생긴 것을 확인합니다.

### 5. 결과 확인

생성된 HTML 파일을 운영체제의 파일 탐색기에서 더블클릭(또는 우클릭 → 열기)해 **브라우저로 엽니다**. 표 모양 리포트가 보이면 성공입니다.

---

## 관찰 포인트

- **같은 정보**(stage 2의 텍스트 출력)가 **다른 매체**(HTML 파일)로 자동 변환되는 것을 확인합니다.
- 텍스트 답은 화면에서 사라지지만, **파일 산출물은 남습니다** — 이메일 첨부, 폴더 누적, 다른 도구로 후처리가 가능해집니다.
- 비개발자에게 "소프트웨어를 만든다"는 감각이 가장 직관적으로 드러나는 stage입니다.

---

## 트러블슈팅

| 증상 | 점검 |
|------|------|
| Skill이 템플릿 파일을 못 찾는다 | `weather-template.html`이 **현재 작업공간**에 있는지 확인 (다른 폴더에 있으면 인식 안 됨) |
| 슬롯이 그대로 `{{...}}` 로 남는다 | Instructions의 "치환한다" 단계가 빠지지 않았는지·슬롯 이름이 정확히 매칭되는지 |
| HTML이 깨져 보인다 | 브라우저에서 페이지 소스를 보고 슬롯 치환이 끝났는지 확인. 슬롯이 남아 있다면 Instructions 점검 |
| 파일이 생성되지 않는다 | Cowork 환경의 파일 쓰기 권한과 사용 중인 Claude 요금제(Pro 이상)를 확인 |

---

## 막혔다면 — 동작 가능한 참고 Skill

본 stage의 동작하는 Skill 패키지는 [`weather-html-report/`](./weather-html-report/)에 들어 있습니다.

- [`weather-html-report/SKILL.md`](./weather-html-report/SKILL.md) — instructions 전문
- [`weather-html-report/weather-template.html`](./weather-html-report/weather-template.html) — 9가지 날씨 아이콘·미세먼지 색상 자동 매핑이 내장된 HTML 템플릿

따라하다 막혔거나 결과가 깨질 때:
- SKILL.md의 instructions를 본인 Skill에 그대로 복사해 비교
- Claude Desktop의 Skills에서 `weather-html-report/` 디렉토리를 그대로 등록해 직접 호출

## 시각 미리보기

- [`example-output.html`](./example-output.html) — 슬롯이 채워진 결과의 예시 (서울·2026-05-08·맑음)
- [`preview-icons.html`](./preview-icons.html) — 9가지 날씨 아이콘 갤러리

---

## 정리 — step01에서 얻은 것

- **stage 1** — 매번 흔들리는 자유응답을 직접 봤다.
- **stage 2** — Skill로 **형식**을 잠갔다.
- **stage 3** — 같은 작업을 **파일 산출물**로 만들었다.

세 stage가 같은 주제(날씨)를 따라가며 [3단계 모델](https://scroogy-dev.github.io/ai-onboarding/#stage-model) 전체를 동일 콘텐츠로 체감했습니다. 다음 step부터는 같은 패턴을 다른 주제·다른 학습 포인트에 적용해 봅니다.

---

## 다음 단계

▶️ [step02 — 파일 분류 (Skill 옵션 설계)](../../step02-file-classifier/)
