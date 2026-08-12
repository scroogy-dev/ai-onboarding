# stage 2 ― 옵션 있는 분류 Skill (파일 분류기)

> [stage 1](../stage1-file-classifier-prompt/)에서 즉석 prompt로 했던 작업을 **옵션 받는 Skill로 정형화**합니다. 옵션 한 글자 차이로 동작이 갈리는 패턴을 만듭니다.

---

## 학습 목표

- 하나의 Skill이 **옵션(파라미터)** 에 따라 다른 동작을 하도록 instructions를 작성합니다.
- "Skill을 매번 새로 만들 필요 없이, **하나로 여러 케이스를 커버**"하는 감각을 익힙니다.
- stage 1의 즉석 prompt와 비교해 **흔들림이 어떻게 잠기는지** 직접 확인합니다.

---

## 사전 조건

- [stage 1 ― 직접 prompt로 파일 이동](../stage1-file-classifier-prompt/) 수료 (즉석 지시의 흔들림을 직접 본 상태)
- [step01-weather stage 2](../../step01-weather/stage2-weather-skill/) 수료 (Skill을 만들어 호출해 본 상태)
- Claude Pro 이상 요금제, Claude Cowork 또는 Claude Code 환경 (실제 파일 이동 시)

> 본 stage는 Skill 출력만 보는 분류 보고는 Claude Desktop 일반 대화에서도 가능합니다. 다만 실제 파일 이동까지 보려면 stage 1과 동일하게 Cowork·Code 환경이 필요합니다.

---

## 왜 stage 2 라벨인가? (학습 초점 vs 실행 매체)

본 lab의 **학습 초점**은 "Skill에 옵션을 받게 만드는 instructions 설계" ― 본 교육 [3단계 모델](https://scroogy-dev.github.io/ai-onboarding/#stage-model)의 **stage 2(정형 응답 Skill)** 개념입니다.

다만 **실제로 파일을 이동**시키려면 모델이 파일시스템에 접근해야 하므로 **Claude Cowork** 또는 **Claude Code** 같은 stage 3 실행 매체가 필요합니다. Claude Desktop 일반 대화에서는 파일 이름 리스트를 prompt에 직접 붙여 **분류 결과만 텍스트로 받는** 형태로 따라할 수 있습니다.

| 매체 | 본 lab에서의 동작 범위 |
|------|---------------------|
| Claude Desktop (일반 대화) | 파일 이름 리스트 입력 → 옵션별 분류 결과 텍스트 출력 |
| Claude Cowork | 파일 업로드 + 옵션 → 매칭 파일 추출·이동까지 수행 |
| Claude Code | 로컬 디렉토리 경로 + 옵션 → 매칭 파일 추출·이동까지 수행 |

본문 절차는 **세 매체 모두에서 동작**하도록 설계되어 있습니다. 본인 환경에 맞춰 따라가면 됩니다.

---

## 절차

### 1. 새 Skill 생성

| 항목 | 예시 입력값 |
|------|-----------|
| 이름 | `파일 분류기` |
| 설명 | `사용자가 옵션(excel/image)을 지정하면 해당 확장자 파일을 추려 분류·보고한다` |

### 2. Instructions에 옵션 분기 넣기

다음 내용을 Instructions에 붙여넣습니다.

```
역할: 사용자가 분류 옵션을 지정하면, 그 옵션에 맞는 확장자의 파일만 추려서 결과를 보고한다.

지원 옵션:
- `excel` → 엑셀 계열 (.xls, .xlsx, .xlsm, .csv)
- `image` → 이미지 계열 (.jpg, .jpeg, .png, .gif, .webp, .heic)

확장자 비교는 대소문자를 구분하지 않는다.

입력 형태:
- 사용자가 옵션과 함께 파일 목록(또는 첨부 파일·디렉토리 경로)을 알려준다.
- 옵션이 누락되면 한 줄로 다시 묻는다 ― "어떤 종류로 분류할까요? (excel / image)".
- 지원하지 않는 옵션이면 한 줄로 답한다 ― "지원하는 옵션은 excel, image 입니다.".

처리:
1. 입력된 파일 중 옵션의 확장자 목록에 매칭되는 것만 추린다.
2. 매칭되지 않은 파일은 별도 묶음으로 모은다.
3. 파일시스템에 접근할 수 있는 환경이면, `<옵션>-files/` 디렉토리를 만들고 매칭 파일을 그 안으로 이동한다.
4. 아래 "출력 형식"으로 결과를 보고한다.

출력 형식 (이 형식만 사용, 다른 표현 금지):

📁 **옵션**: <excel | image>
🎯 **매칭 확장자**: <쉼표로 구분된 확장자 리스트>
✅ **매칭된 파일** (<개수>개):
- <파일명1>
- <파일명2>
⏭ **매칭되지 않은 파일** (<개수>개):
- <파일명1>
📦 **이동 결과**: <"이동 완료 → <옵션>-files/" | "분류만 수행 (파일시스템 미접근)">

각 묶음에 파일이 없으면 `(없음)`으로 표시한다.
인사말·부연 설명·항목 추가/삭제/순서 변경은 모두 금지한다.
```

> 이 instructions의 핵심은 **"지원 옵션" 블록의 분기**입니다. 새로운 옵션(예: `pdf`, `video`)을 추가하고 싶으면 이 블록만 늘리면 됩니다 ― Skill 자체를 새로 만들지 않습니다.

### 3. Skill 저장 후 호출

[`sample-files/`](../sample-files/)의 8개 더미 파일을 입력으로 사용합니다. **옵션만 바꿔** 두 번 호출해 보세요.

**호출 A ― `excel` 옵션**

```
excel
report-2025.xlsx
budget.xlsm
sales.csv
photo.png
diagram.png
icon.gif
notes.txt
README.md
```

**호출 B ― 같은 리스트, `image` 옵션**

```
image
report-2025.xlsx
budget.xlsm
sales.csv
photo.png
diagram.png
icon.gif
notes.txt
README.md
```

**호출 C ― 옵션 누락 케이스**

```
report-2025.xlsx
photo.png
```

(instructions의 "옵션 누락 시 다시 묻는다" 규칙이 동작하는지 확인)

### 4. 옵션을 바꿔 보며 비교

호출 A·B 결과를 늘어놓고 비교합니다.

| 비교 항목 | 호출 A (excel) | 호출 B (image) |
|---------|---------------|---------------|
| 매칭 확장자 | .xls, .xlsx, .xlsm, .csv | .jpg, .jpeg, .png, .gif, .webp, .heic |
| 매칭된 파일 | report-2025.xlsx, budget.xlsm, sales.csv | photo.png, diagram.png, icon.gif |
| 미매칭 파일 | photo.png, diagram.png, icon.gif, notes.txt, README.md | report-2025.xlsx, budget.xlsm, sales.csv, notes.txt, README.md |
| 출력 형식 | 동일 | 동일 |

**같은 Skill·같은 입력**인데 옵션 한 글자 차이로 결과가 갈리는 게 핵심입니다.

### 5. stage 1 즉석 prompt와 비교

[stage 1](../stage1-file-classifier-prompt/)에서 같은 작업을 즉석 prompt로 시도했던 결과와 본 stage Skill 호출 결과를 비교합니다.

| 비교 항목 | stage 1 (즉석 prompt) | stage 2 (옵션 Skill) |
|---------|---------------------|--------------------|
| "엑셀"의 정의 | 매번 흔들림 (.xlsm 누락 등) | 항상 같음 ― 4종 고정 |
| 디렉토리 이름 | `excel-files`/`엑셀_파일` 등 | `excel-files/` 고정 |
| 보고 형식 | 표/줄글/리스트 들쭉날쭉 | 항상 같은 6줄 |
| 같은 일 반복 호출 | 매번 prompt 다시 작성 | 옵션 한 단어만 던지면 됨 |

이 차이가 **"즉석 지시 → Skill로 정형화"의 효익**입니다. 학습 도구를 만들 때도 동일한 패턴이 통합니다.

---

## 관찰 포인트

- **하나의 Skill로 두 종류 케이스를 커버**합니다. excel 전용 Skill, image 전용 Skill을 따로 만들 필요가 없습니다.
- 옵션 추가는 **instructions의 "지원 옵션" 블록만 늘리면 끝** ― Skill 자체를 새로 만들지 않습니다.
- 학습 초점은 **"옵션을 받게 만드는 instructions 설계"** 자체이지, 파일 이동의 실제 수행 여부가 아닙니다. 그래서 Claude Desktop 일반 대화에서도 분류 보고까지는 따라할 수 있도록 만들었습니다.

---

## 트러블슈팅

| 증상 | 점검 |
|------|------|
| 옵션을 무시하고 모든 파일을 다 매칭한다 | Instructions의 "지원 옵션" 블록에 확장자 목록이 정확히 적혀있는지 확인 |
| 옵션 누락 prompt에 임의로 처리한다 | "옵션 누락 시 다시 묻는다" 규칙이 instructions에 있는지 확인 |
| Claude Desktop에서 "파일을 이동했다"고 답한다 | 일반 대화는 파일시스템 접근 권한이 없습니다. 출력 마지막의 "이동 결과"가 `분류만 수행`으로 나오는지 확인 ― 실제 이동을 원하면 Cowork 또는 Code로 옮겨야 합니다. |
| Cowork·Code에서 이동이 안 된다 | 파일이 정말 업로드(Cowork)되었는지, 디렉토리 경로가 맞는지(Code), 파일시스템 도구 권한이 켜져 있는지 확인 |

---

## 막혔다면 ― 동작 가능한 참고 Skill

본 stage의 동작하는 Skill은 [`file-classifier/SKILL.md`](./file-classifier/SKILL.md)에 그대로 들어 있습니다.

- 따라하다 막혔거나 출력 형식이 흔들릴 때, 위 파일의 instructions를 그대로 복사해 본인 Skill의 instructions에 붙여 넣어 비교해 볼 수 있습니다.
- Cowork·Code 환경이면 디렉토리를 그대로 등록해 직접 호출해 볼 수도 있습니다.

---

## 다음 단계

step02는 여기서 끝입니다 (stage 1·2 두 단계). 입력값을 더 다양하게 받는 Skill 패턴을 보고 싶다면:

▶️ [step03-voca-quiz](../../step03-voca-quiz/) ― 단어 리스트·난이도·문제 유형을 함께 받는 출제기 Skill
