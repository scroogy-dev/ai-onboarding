# step02-file-classifier ― 파일 분류

> 옵션(파라미터) 있는 Skill 설계 경험에 집중하는 실습. **Skill 없이 즉석 prompt(stage 1) → Skill로 정형화(stage 2)** 두 단계를 비교합니다.

---

## 학습 목표

옵션(`excel` 또는 `image`)을 받아 해당 확장자 파일만 별도 디렉토리로 분류·이동하는 작업을 두 방식으로 시도해 봅니다.

1. **즉석 prompt**: Skill 없이 한 줄 지시로 처리 (반복·흔들림 체감)
2. **옵션 받는 Skill**: 같은 작업을 정형화 (재사용·일관성 확보)

핵심 학습은 **Skill 파라미터(옵션) 설계** 개념입니다.

---

## stage 구성

| stage | 디렉토리 | 단계 | 학습 포인트 |
|-------|---------|------|------------|
| 1 | [stage1-file-classifier-prompt/](./stage1-file-classifier-prompt/) | 즉석 prompt 지시 | Skill 없이 직접 지시했을 때의 가능성·한계(매번 흔들림) |
| 2 | [stage2-file-classifier-skill/](./stage2-file-classifier-skill/) | 옵션 있는 분류 Skill | 옵션을 받아 동작이 달라지는 Skill의 구조와 호출 방식 |

---

## 선정 근거

**Skill 옵션** 개념을 가장 짧게 보여주는 시나리오입니다. stage 1·2 두 단계를 두어 "즉석 지시 vs 정형 자산"의 효익을 직접 비교하게 합니다. stage 3(파일 산출 리포트)은 step01·step04에서 다루므로 본 step에서는 두지 않습니다.

---

## 짚어둘 점

본 step은 **stage 1부터** 파일시스템 접근이 가능한 **Claude Cowork** 또는 **Claude Code** 환경이 필요합니다. step01-weather와 달리 Claude Desktop 일반 대화로는 그대로 따라가기 어렵습니다.

**단계 라벨**(stage 1·2)은 **학습 초점** 기준입니다. stage 1은 "즉석 자유응답·1회성 지시", stage 2는 "정형 응답 Skill 자산". 둘 다 실행 매체 자체는 stage 3 영역(에이전트·파일시스템)임을 본문에서 안내합니다.

---

## 실습 자료

- **[sample-files/](./sample-files/)**: stage 1·2 공용 더미 파일 8개 (엑셀 3 + 이미지 3 + 매칭 없음 2)
- **[scripts/generate-samples.py](./scripts/generate-samples.py)**: Python stdlib만으로 샘플 파일을 재생성하는 스크립트 (외부 의존성 없음)
