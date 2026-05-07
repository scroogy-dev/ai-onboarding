# Issue #30 실행요약 — 실습 자료 생성

> 스펙: [issue-0030-spec.md](./issue-0030-spec.md) | 계획: [issue-0030-plan.md](./issue-0030-plan.md)

## 다음 작업

> ▶️ 다음 작업: Task 3 — 디렉토리 골격·docs 인덱스 페이지 생성

---

## Task별 수행 결과

### Task 1: 실습 위치·명명 규칙 의사결정

- **결과**: 완료
- **수행 내용 요약**:
  - **위치**: 루트 `labs/` 확정 (본문 SSoT, zip 친화)
  - **명명 규칙**: 평면 → **중첩** (`step<NN>-<topic>/stage<N>-<topic>-<설명>/`)
  - **SSoT 분리**: 본문은 루트 `labs/`, `docs/labs.md`는 인덱스+링크만
- **특이 사항**: 명명 규칙은 메모리(`project_labs-terminology.md`)에 저장. stage 1 디렉토리는 ADR-0001 "참가 전제" 정의와 충돌 없도록 reference 자리로 해석.

---

### Task 2: 실습 후보 목록 선정 (step 단위)

- **결과**: 완료
- **수행 내용 요약**:
  - 총 4개 step 학습 순서대로 확정 — step01-weather, step02-file-classifier, step03-voca-quiz, step04-wrong-answer-note
  - 첫 작성 대상: `step01-weather` (풀 코스 입문)
  - `labs-candidates.md`에 step별 stage·학습 포인트·선정 근거 표 보관
- **특이 사항**:
  - ADR-0001이 후속 이슈로 명시했던 "AI 오답노트·자동 출제기" 두 항목 모두 본 이슈에서 step03·04로 흡수됨 → ADR 작성 시 명시 필요.
  - **각 step이 풀 코스(1·2·3)일 필요 없음** — step02는 stage 2만, step03은 stage 1·2까지, step01·04는 풀 코스. 학습 목표에 맞춰 필요한 stage만 둔다.
  - step02(file-classifier)는 stage 2 라벨이지만 실제 파일 이동은 Cowork·Code 실행 모드 필요 — 라벨은 **교육 초점**(Skill 옵션 설계 = stage 2 개념) 기준이며 실행 매체는 stage 3 영역임을 README에서 안내.

---

### Task 3: 디렉토리 골격·docs 인덱스 페이지 생성

- **결과**: <!-- 미시작 -->
- **수행 내용 요약**:
- **특이 사항**:

---

### Task 4: slides 실습 시리즈 섹션 추가

- **결과**: <!-- 미시작 -->
- **수행 내용 요약**:
- **특이 사항**:

---

### Task 5: ADR 작성

- **결과**: <!-- 미시작 -->
- **수행 내용 요약**:
- **특이 사항**:

---

### Task 6: 마무리·이관

- **결과**: <!-- 미시작 -->
- **수행 내용 요약**:
- **특이 사항**:
