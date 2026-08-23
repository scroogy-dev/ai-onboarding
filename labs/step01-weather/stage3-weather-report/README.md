# stage 3 ― HTML 리포트 파일 생성 (날씨)

> stage 2의 텍스트 응답을 한 단계 더 나아가 **HTML 리포트 파일**로 자동 저장합니다. "텍스트 답" → "파일 산출물"의 도약이 이 stage의 핵심입니다.

---

## 학습 목표

- 같은 작업도 **텍스트 답**과 **파일 산출물**의 가치는 다르다는 점을 체감합니다.
- Claude Cowork에서 **파일 입출력을 동반하는 Skill**의 기본 패턴(템플릿 읽기 → 값 채우기 → 새 파일 저장)을 익힙니다.

---

## 사전 조건

- [stage 2](../stage2-weather-skill/) 수료 (정형 텍스트 출력 Skill 동작 확인)
- **Claude Desktop 설치** + **Claude Cowork** 사용 가능 환경 ([홈 페이지 준비물](https://scroogy-dev.github.io/ai-onboarding/#preparation) 참조)
- HTML 파일: 본 stage에서 사용할 **템플릿 파일**을 준비해 둡니다 (아래 절차에서 안내)

> stage 1·2와 달리 stage 3부터는 **로컬 파일을 다루는 매체**가 필요합니다. 본 교육은 그 매체로 **Claude Cowork**(Claude Desktop의 작업공간)을 표준으로 씁니다.

---

## 준비 ― HTML 슬롯 템플릿 파일

본 stage 디렉토리의 [`weather-html-report/weather-template.html`](./weather-html-report/weather-template.html)을 작업공간에 복사합니다. iPhone mockup 톤의 디자인에 **`{{...}}` 슬롯과 `data-weather`·`data-grade`·`data-need` 속성**이 박혀 있어, 정확한 텍스트만 채우면 그라데이션·아이콘·배지 색이 자동으로 결정됩니다.

| 슬롯 카테고리 | 슬롯 이름 |
|------------|----------|
| 위치·시간 | `{{location}}`·`{{date}}`·`{{hour}}` |
| 온도·체감 | `{{temperature}}`·`{{feels_like}}`·`{{high}}`·`{{low}}` |
| 한 줄 묘사·코멘트 | `{{desc}}`·`{{comment}}` |
| 옷차림·우산 | `{{outfit}}`·`{{outfit_detail}}`·`{{umbrella}}`·`{{umbrella_detail}}` |
| 날씨 정보 | `{{humidity}}`·`{{wind}}`·`{{wind_dir}}`·`{{rain_prob}}`·`{{uv_label}}`·`{{uv}}` |
| 대기질 | `{{pm10}}`·`{{pm10_value}}`·`{{pm25}}`·`{{pm25_value}}` |
| 자동 매핑 | `{{weather_state}}` (9가지 weather 단어 중 하나이며 그라데이션·아이콘을 자동 결정) |

전체 슬롯 매핑 표·기본값·자동 매핑 동작은 [`weather-html-report/SKILL.md`](./weather-html-report/SKILL.md)의 "슬롯 치환" 섹션을 참조하세요.

> **자동 매핑이 동작하는 텍스트 토큰**: `{{weather_state}}`는 `맑음·구름조금·구름많음·흐림·비·소나기·천둥번개·눈·안개` 9가지 중 하나, `{{pm10}}`·`{{pm25}}`는 `좋음·보통·나쁨·매우 나쁨` 4가지 중 하나, `{{umbrella}}`는 `필요해요`/`필요없음` 두 단어 중 하나여야 합니다. 이 외 표현은 자동 매핑이 깨집니다.

> **디자인 톤 미리보기**: [`example-output.html`](./example-output.html)을 브라우저에서 먼저 열어 슬롯이 모두 채워졌을 때의 결과를 확인할 수 있습니다.

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

[`weather-html-report/SKILL.md`](./weather-html-report/SKILL.md)의 본문(frontmatter 제외)을 그대로 붙여넣습니다. 핵심은 다음 5단계입니다.

1. **오늘 날씨 정리**: stage 2와 동일한 9개 항목 + stage 3 자체 보강 항목(시각·최고/최저·한 줄 설명·풍향·강수확률·자외선·미세먼지 농도·옷차림 부연·우산 부연·외출 코멘트)을 함께 산출
2. **슬롯 템플릿 읽기**: Skill 리소스에서 `weather-template.html` 로드
3. **슬롯 치환**: 위 표의 슬롯들을 정확한 텍스트로 치환 (`{{weather_state}}`·`{{pm10}}`·`{{pm25}}`·`{{umbrella}}`는 자동 매핑되는 토큰만 사용)
4. **저장**: `weather-report-<도시>-<YYYY-MM-DD>.html`로 작업공간에 저장
5. **안내**: 저장 경로 한 줄

도시 미지정 시 한 줄로 다시 묻습니다. 자세한 슬롯 매핑·기본값·자동 매핑 토큰 목록은 SKILL.md의 표를 참고하세요.

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
- 텍스트 답은 화면에서 사라지지만, **파일 산출물은 남습니다**. 이메일 첨부, 폴더 누적, 다른 도구로 후처리가 가능해집니다.
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

## 막혔다면 ― 동작 가능한 참고 Skill

본 stage의 동작하는 Skill 패키지는 [`weather-html-report/`](./weather-html-report/)에 들어 있습니다.

- [`weather-html-report/SKILL.md`](./weather-html-report/SKILL.md): instructions 전문 (슬롯 매핑 표 포함)
- [`weather-html-report/weather-template.html`](./weather-html-report/weather-template.html): iPhone mockup 톤·9가지 weather state별 hero 그라데이션·9가지 SVG 아이콘·4가지 미세먼지 등급 배지·우산 강조 색이 모두 내장된 슬롯 템플릿

따라하다 막혔거나 결과가 깨질 때:
- SKILL.md의 instructions를 본인 Skill에 그대로 복사해 비교
- Claude Desktop의 Skills에서 `weather-html-report/` 디렉토리를 그대로 등록해 직접 호출

## 시각 미리보기

- [`example-output.html`](./example-output.html): 슬롯이 모두 채워진 결과의 예시 (서울특별시 강남구 역삼동·2026-05-09·맑음)
- [`preview-icons.html`](./preview-icons.html): 9가지 weather state별 그라데이션·아이콘 갤러리

---

## 정리 ― step01에서 얻은 것

- **stage 1**: 매번 흔들리는 자유응답을 직접 봤다.
- **stage 2**: Skill로 **형식**을 잠갔다.
- **stage 3**: 같은 작업을 **파일 산출물**로 만들었다.

세 stage가 같은 주제(날씨)를 따라가며 [3단계 모델](https://scroogy-dev.github.io/ai-onboarding/#stage-model) 전체를 동일 콘텐츠로 체감했습니다. 다음 step부터는 같은 패턴을 다른 주제·다른 학습 포인트에 적용해 봅니다.

---

## 다음 단계

▶️ [step02 ― 파일 분류 (Skill 옵션 설계)](../../step02-file-classifier/)
