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
- **후속 보강 (Task 7 이후)**: 사용자가 워크스페이스에 올린 새 디자인(`날씨 템플릿.html` — iPhone mockup·Pretendard·hero 그라데이션·옷차림+우산 row·날씨 정보+대기질 카테고리)을 stage 3 자산으로 흡수.
  - `weather-template.html` 덮어쓰기(파일명 유지) — 슬롯 + `data-weather`/`data-grade`/`data-need` 속성으로 9가지 weather state·4가지 미세먼지 등급·우산 강조 색 자동 매핑
  - 새 슬롯 추가: `{{location}}`·`{{hour}}`·`{{high}}`·`{{low}}`·`{{desc}}`·`{{comment}}`·`{{outfit_detail}}`·`{{umbrella_detail}}`·`{{wind_dir}}`·`{{rain_prob}}`·`{{uv_label}}`·`{{uv}}`·`{{pm10_value}}`·`{{pm25_value}}`·`{{weather_state}}`
  - `SKILL.md` 갱신 — stage 2 9개 항목 + stage 3 자체 보강 항목 + 슬롯 매핑 표·자동 매핑 토큰 명시
  - `example-output.html` 갱신 — 새 디자인의 채워진 예시(서울특별시 강남구 역삼동·맑음)
  - `preview-icons.html` 갱신 — 9가지 weather state별 hero 그라데이션 + 새 SVG 아이콘 갤러리
  - `stage3-weather-report/README.md`·`step01-weather/README.md` 동기화
  - **stage 2 SKILL은 그대로 유지** — 학습 목표(텍스트 형식 통일) 보존, stage 3가 추가 항목을 자체 보강

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

- [x] 완료
- **목표**: step03-voca-quiz의 stage 1·2 가이드 본문을 작성한다. ADR-0001 후속 "Gems → Claude Skill 재설계" 흡수.
- **작업 내용**:
  1. `stage1-voca-quiz-prompt/README.md` — "영단어 문제 내줘" 자유응답 reference·형식·난이도 변동 관찰
  2. `stage2-voca-quiz-skill/README.md` — 입력값(단어 리스트·난이도·문제 유형: 객관식·빈칸·뜻 맞추기) 받는 Skill·정형 출력 예시·호출 예시
- **완료 기준**: 2개 stage README 본문이 작성되어 학습자가 step03을 끝까지 따라갈 수 있다. ✅

---

### Task 7: step04-wrong-answer-note 본문 작성 (stage 1·2·3)

- [x] 완료
- **목표**: step04-wrong-answer-note의 stage 1·2·3 가이드 본문을 작성한다. ADR-0001 후속 "AI 오답노트 재설계" 흡수, 학습 도구 종합. 사용자의 실제 운영 자산(3-Gem: 문제분석·오답노트·리포팅)을 Skill 파이프라인 + 디자인 prompt로 옮긴다.
- **작업 내용**:
  1. `step04-wrong-answer-note/README.md` 갱신 — 자녀 채점지 시나리오·다단계 파이프라인·검수 자리 메시지·step01~03과의 차이·stage별 매체 요건
  2. `stage1-wrong-answer-note-prompt/README.md` — 채점 사진 한 장 + 자유응답 시도. OCR 오인식(연필 답안·줄 그음·자체 표시)·재인식 비용 누적 관찰
  3. `stage2-wrong-answer-note-skill/README.md` — 2단계 파이프라인 (Skill ① quiz-recognize 사진→엑셀 + 부모 검수 + Skill ② wrong-answer-note 엑셀→자녀용 마크다운). 두 SKILL.md 동봉
  4. `stage3-wrong-answer-note-report/README.md` — 검수된 엑셀 → 인쇄용 HTML. step01 stage 3와 같은 **슬롯 템플릿 + 예시** 구조로 동봉: `wrong-answer-html-report/wrong-answer-note-template.html`(슬롯 + PROBLEMS·SELF_CHECK 블록 반복 마커) + `classical.html`(채워진 예시). `wrong-answer-html-report/SKILL.md` 10단계 instructions(슬롯 템플릿 읽기 → 엑셀 컬럼·메타 매핑 → PROBLEMS/SELF_CHECK 분기 → 자녀 친화 해설 자체 생성 → 스칼라 슬롯 채우기 → PROBLEMS 블록 반복 → SELF_CHECK 블록 반복/제거 → 태그 HTML 생성 → 저장 → 응답). 길 A(템플릿 그대로 매주) / 길 B(`minimal-template.html` 등 새 톤 형제 추가, 슬롯 이름·마커 유지)
  5. 인덱스 동기화 — `labs/README.md`·`docs/labs.md`·`labs-candidates.md`의 step04 줄을 새 시나리오로 갱신
  6. .gitkeep 정리 (3개 stage 디렉토리)
- **완료 기준**: 3개 stage README 본문이 작성되고 stage 2의 두 SKILL 인스트럭션·stage 3의 디자인 prompt가 학습자가 그대로 따라갈 수 있는 형태로 들어 있다. ✅
- **후속 보정 (Task 7 이후)**: stage 3 Skill의 입력을 마크다운 → **검수된 엑셀**로 보정. 이유 — 마크다운은 평문 뷰의 한 형태이고, 데이터·뷰 분리 원칙에 따르면 엑셀이 데이터의 단일 출처이며 마크다운/HTML은 같은 엑셀에서 갈라지는 평행 뷰여야 함. 변경 대상: `wrong-answer-html-report/SKILL.md`(처리 단계 재작성·자녀 친화 해설 생성을 본 Skill 자체 책임으로) + `stage3 README`(데이터 구조 원칙·다이어그램·호출 변형) + `stage2 README`(파이프라인 다이어그램이 마크다운 → HTML 직렬에서 엑셀 → 두 뷰 평행 분기로) + `step04 README`(stage 구성 표·기존 어려움 표·차이 표). stage 2의 `wrong-answer-note` Skill(엑셀 → 마크다운)은 평문 뷰로 유지(평행 형제).

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

### Task 9: 최종 점검 (사용자 수작업 확인)

- [ ] 완료
- **목표**: 자동화로 검증하기 어려운 항목을 사용자가 직접 수작업으로 점검한다. 본 Task는 AI가 진행하지 않고 사용자가 결과를 확인한 뒤 다음 Task로 넘어간다.
- **수작업 점검 체크리스트**:
  1. **사이트 빌드** — `mkdocs serve`로 로컬 빌드 후 `/labs` 페이지가 nav에 노출되고 표·admonition이 의도대로 렌더링되는지 브라우저로 확인
  2. **step01 stage 3 HTML** — `labs/step01-weather/stage3-weather-report/example-output.html`을 브라우저에서 열어 디자인 톤 확인. 9가지 weather state별 톤은 `preview-icons.html`로 확인
  3. **각 step·stage README 흐름** — step01·02·03·04를 학습자 시점에서 한 번씩 따라 읽으며 stage 간 링크·"다음 단계" 동선이 깨지지 않는지 확인
  4. **slides 빌드** — `slides/`에서 Slidev dev/build 한 번 실행. 실습 시리즈 섹션이 docs/labs.md와 톤·구조가 정합한지 확인
  5. **Skill 동작 — step01 stage 3** — Claude Desktop에 `weather-html-report/` Skill 등록 후 호출, 결과 HTML이 `example-output.html`과 비슷한 톤으로 나오는지 확인 (선택)
  6. **Skill 동작 — step04 stage 2·3** — 가능하면 자녀 채점지 사진으로 quiz-recognize → wrong-answer-note → wrong-answer-html-report 파이프라인 한 번 호출
  7. **링크·이미지 깨짐** — `mkdocs build`의 strict 모드(또는 `--strict`)로 깨진 내부 링크 점검
  8. **운영 자료 보존 여부** — `.ai/99_workspace/`의 `리포팅 프롬프트.md`·`자녀 맞춤형 문제 분석 및 튜터링 템플릿 (Step 1·2).md`가 lab으로 흡수된 부분과 워크스페이스 잔존 사이의 차이를 확인 후 어느 쪽으로 정리할지 결정
- **완료 기준**: 위 체크리스트의 모든 항목을 사용자가 점검·수정 완료한 상태.

---

### Task 10: ADR 작성

- [ ] 완료
- **목표**: 본 이슈의 의사결정을 ADR로 기록한다.
- **작업 내용**:
  1. `.ai/50_adr/active/adr-0006-labs-structure-and-naming.md` 신설 (번호는 현재 active 최신 다음번)
  2. 결정 사항: 위치(루트 SSoT)·중첩 명명 규칙(step+stage)·docs 인덱스 정책·slides 동기화 원칙·ADR-0001과의 정합·stage 1 해석·ADR-0001 후속 항목(오답노트·자동 출제기) 흡수·**본 이슈에서 step별 가이드 본문까지 작성**한 범위 변경 기록·**stage 3 자산 패턴(슬롯 템플릿 + 채워진 예시 + 데이터·뷰 분리)**·진행 원칙(프롬프트로만 진행)
  3. `.ai/50_adr/index.md` Active ADR 표에 신규 행 추가
- **완료 기준**: 신규 ADR 파일이 active에 추가되고 index.md에 등재되었다.

---

### Task 11: 마무리·이관

- [ ] 완료
- **목표**: 변경사항을 커밋·PR로 정리하고 이슈를 종료한다.
- **작업 내용**:
  1. 변경 파일 정리 후 `/git-commit` 규칙에 따라 커밋
  2. PR 생성 (`/git-pr`) 및 이슈 #30 링크
  3. 본 이슈 디렉토리를 `archive/`로 이관
- **완료 기준**: PR이 머지 가능 상태이며 issue-0030 디렉토리가 archive로 이관되었다.
