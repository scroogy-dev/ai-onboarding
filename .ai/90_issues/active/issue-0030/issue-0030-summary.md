# Issue #30 실행요약 — 실습 자료 생성

> 스펙: [issue-0030-spec.md](./issue-0030-spec.md) | 계획: [issue-0030-plan.md](./issue-0030-plan.md)

## 다음 작업

> ▶️ 다음 작업: Task 6 — step03-voca-quiz 본문 작성 (stage 1·2)

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
  - **각 step이 풀 코스(1·2·3)일 필요 없음** — step02·step03은 stage 1·2까지, step01·04는 풀 코스. 학습 목표에 맞춰 필요한 stage만 둔다.
  - step02(file-classifier)는 stage 1·2 모두 라벨이지만 실행 매체는 두 stage 모두 Cowork·Code 필요 — 라벨은 **학습 초점**(stage 1=즉석 지시, stage 2=Skill 정형화) 기준이며 실행 매체는 stage 3 영역임을 README에서 안내.
  - **Task 2 결정 후 Task 5 진행 중 변경**: 처음에는 step02를 "stage 2만"으로 결정했으나, "에이전트 실행 매체는 stage 3, Skill 정형화는 stage 2이므로 즉석 지시는 stage 1이 맞다"는 사용자 결정으로 stage 1을 신설(직접 prompt). ADR-0001의 stage 1 정의(자유응답·1회성 지시)와도 정합. labs-candidates.md / spec / plan / labs README / docs/labs.md 동기화 완료.

---

### Task 3: 디렉토리 골격·docs 인덱스 페이지 생성

- **결과**: 완료
- **수행 내용 요약**:
  - 루트 `labs/` 골격 생성 — 시리즈 README + 4개 step(weather·file-classifier·voca-quiz·wrong-answer-note) README + 9개 stage 디렉토리(.gitkeep). 이후 Task 5에서 step02에 stage 1 디렉토리가 추가되어 총 10개 stage가 됨.
  - `docs/labs.md` 인덱스 페이지 작성 — 단일 파일 형태, 시리즈 구성 표·GitHub 링크·zip 다운로드 안내·사전 준비 안내
  - `mkdocs.yml` nav에 "실습" 항목 등록 (도입과 보안 가이드 사이)
- **특이 사항**:
  - step별 README는 본문이 아니라 골격(주제·stage 구성·학습 포인트·선정 근거 표)으로 작성. 본문은 후속 Task 4~7.
  - `docs/labs.md`는 단일 파일(`docs/labs/index.md` 아님). 향후 본문 보강 시 디렉토리 구조로 전환 가능.
  - `labs/README.md`는 사이트 미노출 GitHub 페이지이므로 GitHub-flavored markdown만 사용. 사이트 향 페이지인 `docs/labs.md`는 Material admonition 사용.
  - **이슈 범위 확장**: Task 3 완료 후 사용자 결정으로 각 step의 가이드 본문 작성도 본 이슈로 흡수 (Task 4·5·6·7 신설). 후속 이슈로 미루지 않음.

---

### Task 4: step01-weather 본문 작성 (stage 1·2·3)

- **결과**: 완료
- **수행 내용 요약**:
  - stage 1 — 자유응답 비교 절차(같은 prompt 3회 반복·표 비교) + 관찰 포인트
  - stage 2 — Skill 생성·instructions 예시(고정 출력 템플릿)·stage 1과 결과 비교 표
  - stage 3 — HTML 템플릿(weather-template.html) 코드 블록·Cowork 절차(템플릿 읽기→슬롯 치환→파일 저장)·트러블슈팅
  - 각 stage README에 "다음 단계" 링크로 학습 흐름 연결
  - .gitkeep 정리 (README가 디렉토리 유지 역할)
- **특이 사항**:
  - stage 2의 "정보 부정확" 트러블슈팅에 모델이 실시간 날씨 API를 호출하지 않는다는 점 명시 — 학습 목표는 "형식 일관성"이지 정확한 실시간 값이 아님을 강조.
  - stage 3에서 Cowork이 stage 3의 표준 매체임을 명시 (Claude Code는 비개발자 진입 장벽으로 본 교육 비표준 — ADR-0001 정합).

---

### Task 5: step02-file-classifier 본문 작성 (stage 1·2)

- **결과**: 완료
- **수행 내용 요약**:
  - `stage1-file-classifier-prompt/README.md` 신설 — Cowork·Code에서 즉석 prompt로 파일 이동 시도. 같은 prompt를 새 대화에서 반복했을 때 흔들리는 항목(엑셀 정의·디렉토리 이름·보고 형식) 관찰 표 포함.
  - `stage2-file-classifier-skill/README.md` 작성 — 옵션(`excel`/`image`) 분기 instructions·호출 A/B/C 예시·옵션 비교 표·**stage 1↔2 비교 표**·트러블슈팅
  - 동작하는 참고 Skill `file-classifier/SKILL.md` 작성 (step01-stage2의 weather-summary와 동일 패턴)
  - **실습용 더미 파일 8개 생성** — `sample-files/` 디렉토리에 OOXML/PNG/GIF 등을 stdlib만으로 직접 생성. 재생성 스크립트는 `scripts/generate-samples.py`로 외부 의존성 없이 실행 가능. stage 1·2 공유.
  - 인덱스 동기화 — `labs/README.md`·`docs/labs.md`의 step02 stage 컬럼 `2` → `1·2`
  - 이슈 문서 동기화 — spec/plan/labs-candidates의 step02 stage 표기 업데이트
  - .gitkeep 정리 (README가 디렉토리 유지 역할)
- **특이 사항**:
  - **이슈 범위 변경**: Task 5 진행 중 사용자 결정으로 step02에 stage 1(직접 prompt) 신설 — 처음에는 "stage 2만"이었으나 "에이전트 = stage 3, Skill = stage 2이므로 즉석 지시는 stage 1"로 라벨 정합 정리. ADR-0001 stage 1 정의(자유응답·1회성 지시)와 정합.
  - 단, 본 step의 stage 1은 step01-weather와 달리 처음부터 Cowork·Code 매체 필요 — 라벨은 학습 초점(즉석 지시) 기준이고 실행 매체는 별 축임을 README에서 명시.
  - 옵션 추가 시 instructions의 "지원 옵션" 블록만 늘리면 된다는 점을 stage 2 본문에서 강조 — 새 Skill 양산 회피.

---

### Task 6: step03-voca-quiz 본문 작성 (stage 1·2)

- **결과**: <!-- 미시작 -->
- **수행 내용 요약**:
- **특이 사항**:

---

### Task 7: step04-wrong-answer-note 본문 작성 (stage 1·2·3)

- **결과**: <!-- 미시작 -->
- **수행 내용 요약**:
- **특이 사항**:

---

### Task 8: slides 실습 시리즈 섹션 추가

- **결과**: <!-- 미시작 -->
- **수행 내용 요약**:
- **특이 사항**:

---

### Task 9: ADR 작성

- **결과**: <!-- 미시작 -->
- **수행 내용 요약**:
- **특이 사항**:

---

### Task 10: 마무리·이관

- **결과**: <!-- 미시작 -->
- **수행 내용 요약**:
- **특이 사항**:
