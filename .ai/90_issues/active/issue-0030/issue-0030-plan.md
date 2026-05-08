# Issue #30 실행계획 — 실습 자료 생성

> 스펙: [issue-0030-spec.md](./issue-0030-spec.md)

---

## Tasks

### Task 1: 실습 위치·명명 규칙 의사결정

- [x] 완료
- **목표**: 실습 자료의 거주 위치, 디렉토리 명명 규칙, SSoT 위치를 합의해 확정한다.
- **결정 사항**:
  - **위치**: repo 루트 `labs/` (사이트 미노출, 본문 SSoT). zip 단일 다운로드 친화. ADR-0002의 "코드성 자산은 사이트 빌드와 분리" 컨셉과 정합.
  - **명명 규칙 (중첩)**: `labs/step<NN>-<topic>/stage<N>-<topic>-<설명>/`. step 번호 = 학습 순서, stage 번호 = ADR-0001 3단계 모델 매핑. 한 주제(step) 안에서 stage 1→2→3 진행으로 학습자가 단계 모델을 동일 콘텐츠로 직접 체감.
  - **SSoT 분리**: 가이드 본문은 `labs/step<NN>-<topic>/README.md`(루트). `docs/labs.md`는 인덱스+링크만(사이트 노출용).
  - **stage 1 해석**: ADR-0001은 "stage 1은 참가 전제(이미 경험)"로 정의. lab의 `stage1-` 디렉토리는 그 경험을 본 lab 맥락에서 입체화(예시 prompt·자유응답 캡처)하는 reference 자리 — ADR과 충돌 없음.
- **완료 기준**: 위 결정이 합의되어 본 plan에 명시되었다. ✅

---

### Task 2: 실습 후보 목록 선정 (step 단위)

- [x] 완료
- **목표**: ADR-0001의 3단계 모델에 매핑되는 실습 후보를 step 단위로 선정한다. 비개발자 청중 + Cowork 샌드박스 제약(외부 API 차단) 고려.
- **확정 후보** (총 4개 step, 학습 순서):
  - **step01-weather** (날씨, stage 1·2·3 풀 코스) — 자유응답 → 정형 텍스트 → HTML 리포트
  - **step02-file-classifier** (파일 분류, stage 1·2) — 즉석 prompt(stage 1)와 옵션(`excel`/`image`) 받는 Skill(stage 2)을 비교. 옵션 설계의 효익을 stage 1과의 대비로 보여줌. 실행 매체는 두 stage 모두 Cowork·Code 필요 (stage 라벨은 학습 초점 — 즉석 지시·정형 자산 — 기준)
  - **step03-voca-quiz** (영어 단어 출제기, stage 1·2만) — Skill 활용 다양화. ADR-0001 후속 이슈로 명시된 "자동 출제기 재설계"
  - **step04-wrong-answer-note** (오답노트, stage 1·2·3 풀 코스) — 학습 도구 활용 종합. ADR-0001 후속 이슈로 명시된 "AI 오답노트 재설계"
- **첫 작성 대상**: `step01-weather` (가장 단순한 1→2 전이부터 시작)
- **수행 결과**: `labs-candidates.md`에 step별 stage·학습 포인트·선정 근거 표 보관. 학습 순서 명시.
- **완료 기준**: 후보 파일이 작성되고 첫 step이 선정되었다. ✅

---

### Task 3: 디렉토리 골격·docs 인덱스 페이지 생성

- [x] 완료
- **목표**: Task 1·2의 결정을 적용해 루트 `labs/` 모든 step 골격과 `docs/labs.md` 인덱스 페이지를 생성한다. 본문 작성은 후속 이슈에서 진행하되, **디렉토리·파일 구조는 이번 이슈에서 4개 step 모두 잡는다**.
- **작업 내용**:
  1. 루트 `labs/README.md` (시리즈 전체 안내) 작성
  2. 4개 step 디렉토리·파일 골격 모두 생성 — `labs-candidates.md` 표대로
     - `labs/step01-weather/` + README + `stage1-weather-prompt/`, `stage2-weather-skill/`, `stage3-weather-report/`
     - `labs/step02-file-classifier/` + README + `stage1-file-classifier-prompt/`, `stage2-file-classifier-skill/`
     - `labs/step03-voca-quiz/` + README + `stage1-voca-quiz-prompt/`, `stage2-voca-quiz-skill/`
     - `labs/step04-wrong-answer-note/` + README + `stage1-wrong-answer-note-prompt/`, `stage2-wrong-answer-note-skill/`, `stage3-wrong-answer-note-report/`
     - 각 step README는 주제·stage 구성·학습 포인트 정도의 골격(본문은 후속 이슈)
     - 각 stage 디렉토리는 자리만 (`.gitkeep` 또는 placeholder README)
  3. `docs/labs.md` 인덱스 페이지 작성 — 단일 파일 형태(`docs/labs/index.md` 아님). 실습 시리즈 소개·3단계 모델 매핑·GitHub `labs/` 링크·zip 다운로드 안내
  4. `mkdocs.yml` nav에 "실습" 라벨로 실습 항목 등록
- **완료 기준**: 4개 step 골격·docs 인덱스 페이지가 생성되어 사이트 빌드 시 실습 항목이 노출되고, 후속 이슈가 본문만 채우면 되도록 준비되었다.

---

### Task 4: step01-weather 본문 작성 (stage 1·2·3)

- [x] 완료
- **목표**: step01-weather의 stage 1·2·3 가이드 본문을 작성해 학습자가 자유응답 → 정형 Skill → HTML 리포트까지 따라갈 수 있게 한다.
- **작업 내용**:
  1. `stage1-weather-prompt/README.md` — "오늘 날씨 어때?" 자유응답 reference·관찰 포인트(매번 형식이 흔들리는 것 체감)·예시 prompt
  2. `stage2-weather-skill/README.md` — Skill 구조(설명·instructions·고정 출력 템플릿: 온도·체감·날씨·우산 필요?)·호출 예시·1과 결과 비교
  3. `stage3-weather-report/README.md` — HTML 템플릿 구조 안내·Cowork 스킬 절차(템플릿 읽기 → 값 채우기 → 파일 저장)·산출 파일 위치
- **완료 기준**: 3개 stage README 본문이 작성되어 학습자가 step01을 끝까지 따라갈 수 있다.

---

### Task 5: step02-file-classifier 본문 작성 (stage 1·2)

- [x] 완료
- **목표**: step02-file-classifier의 stage 1·2 가이드 본문을 작성한다. **즉석 prompt vs Skill 정형화** 비교를 통해 옵션 설계 개념을 보여준다.
- **작업 내용**:
  1. `stage1-file-classifier-prompt/README.md` — Cowork·Code에서 즉석 prompt로 파일 이동 시도, 매번 흔들리는 점(확장자 정의·디렉토리 이름·보고 형식) 관찰
  2. `stage2-file-classifier-skill/README.md` — 옵션(`excel`/`image`) 받는 Skill 구조·instructions·호출 예시·옵션별 동작 차이·**stage 1과의 비교 표**
  3. **실행 매체 안내** — stage 1·2 모두 Cowork·Code가 필요. 라벨은 학습 초점(즉석 지시 vs 정형 자산) 기준이고 실행 매체는 stage 3 영역임을 명시
  4. **인덱스 동기화** — `labs/README.md`·`docs/labs.md`의 step02 stage 컬럼 `2` → `1·2`
- **완료 기준**: stage 1·2 README 본문이 작성되고 stage 1↔2 비교 표가 학습자에게 옵션 설계의 효익을 직관적으로 전달한다. ✅

---

### Task 6: step03-voca-quiz 본문 작성 (stage 1·2)

- [ ] 완료
- **목표**: step03-voca-quiz의 stage 1·2 가이드 본문을 작성한다. ADR-0001 후속 "Gems → Claude Skill 재설계" 흡수.
- **작업 내용**:
  1. `stage1-voca-quiz-prompt/README.md` — "영단어 문제 내줘" 자유응답 reference·형식·난이도 변동 관찰
  2. `stage2-voca-quiz-skill/README.md` — 입력값(단어 리스트·난이도·문제 유형: 객관식·빈칸·뜻 맞추기) 받는 Skill·정형 출력 예시·호출 예시
- **완료 기준**: 2개 stage README 본문이 작성되어 학습자가 step03을 끝까지 따라갈 수 있다.

---

### Task 7: step04-wrong-answer-note 본문 작성 (stage 1·2·3)

- [ ] 완료
- **목표**: step04-wrong-answer-note의 stage 1·2·3 가이드 본문을 작성한다. ADR-0001 후속 "AI 오답노트 재설계" 흡수, 학습 도구 종합.
- **작업 내용**:
  1. `stage1-wrong-answer-note-prompt/README.md` — "이 문제 틀렸는데 어떻게 정리?" 자유응답 reference
  2. `stage2-wrong-answer-note-skill/README.md` — 정형 형식(문제·정답·해설·핵심 개념·복습 시점) 출력 Skill·호출 예시
  3. `stage3-wrong-answer-note-report/README.md` — 누적 오답 HTML 리포트 절차(단원별 정리·통계 포함)·Cowork 스킬 안내
- **완료 기준**: 3개 stage README 본문이 작성되어 학습자가 step04를 끝까지 따라갈 수 있다.

---

### Task 8: slides 실습 시리즈 섹션 추가

- [ ] 완료
- **목표**: `slides/`에 실습 시리즈 소개 섹션을 추가해 docs와 동기화한다 (ADR-0002 단방향 파생).
- **작업 내용**:
  1. `slides/` 구조 확인 후 적절한 위치에 실습 섹션 슬라이드 추가
  2. 시리즈 소개 슬라이드 1장 + step01~04 안내 슬라이드 (간단한 한두 줄 + GitHub 링크)
  3. `docs/labs.md` 내용과 메시지·구조 정합 확인
- **완료 기준**: slides에 실습 섹션이 추가되어 `docs/labs.md`와 동기화되었다.

---

### Task 9: ADR 작성

- [ ] 완료
- **목표**: 본 이슈의 의사결정을 ADR로 기록한다.
- **작업 내용**:
  1. `.ai/50_adr/active/adr-0006-labs-structure-and-naming.md` 신설 (번호는 현재 active 최신 다음번)
  2. 결정 사항: 위치(루트 SSoT)·중첩 명명 규칙(step+stage)·docs 인덱스 정책·slides 동기화 원칙·ADR-0001과의 정합·stage 1 해석·ADR-0001 후속 항목(오답노트·자동 출제기) 흡수·**본 이슈에서 step별 가이드 본문까지 작성**한 범위 변경 기록
  3. `.ai/50_adr/index.md` Active ADR 표에 신규 행 추가
- **완료 기준**: 신규 ADR 파일이 active에 추가되고 index.md에 등재되었다.

---

### Task 10: 마무리·이관

- [ ] 완료
- **목표**: 변경사항을 커밋·PR로 정리하고 이슈를 종료한다.
- **작업 내용**:
  1. 변경 파일 정리 후 `/git-commit` 규칙에 따라 커밋
  2. PR 생성 (`/git-pr`) 및 이슈 #30 링크
  3. 본 이슈 디렉토리를 `archive/`로 이관
- **완료 기준**: PR이 머지 가능 상태이며 issue-0030 디렉토리가 archive로 이관되었다.
