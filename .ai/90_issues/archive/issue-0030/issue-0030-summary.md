# Issue #30 실행요약 — 실습 자료 생성

> 스펙: [issue-0030-spec.md](./issue-0030-spec.md) | 계획: [issue-0030-plan.md](./issue-0030-plan.md)

## 다음 작업

> ✅ 모든 작업이 완료되었습니다.

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

- **결과**: 완료
- **수행 내용 요약**:
  - 상위 `step03-voca-quiz/README.md` 갱신 — 시나리오를 **부모-자녀 영어 단어 숙제 보조 도구**(단어장 사진 기반 랜덤 출제)로 재정의. 기존 방식의 어려움(순서 까먹음·발음 스트레스·채점 부담·숙어 혼재) → Skill로 해결 매핑 표 추가.
  - `stage1-voca-quiz-prompt/README.md` 재작성 — 단어장 사진 업로드 + 자유응답 출제 시도. 핵심 흔들림 = **사진의 뜻이 그대로 안 나옴**(AI가 임의로 일반 뜻으로 변환), 숙어 옵션 무시, 출제 개수 흔들림, 발음 도움 누락. 매체는 이미지 업로드 가능한 환경 필요.
  - `stage2-voca-quiz-skill/README.md` 재작성 — 사진 + 숙어 옵션 + 출제 개수 받는 Skill. 사용자가 운영하던 원본 prompt 골격을 instructions에 옮기면서 **단어별 네이버 영어사전 직접 링크**(`https://en.dict.naver.com/#/search?query=<단어>`) 출력 규칙 추가. 호출 A·B·C(옵션·개수 변경) + D(사진 누락) + E(개수 누락) + stage 1 비교 표.
  - `voca-quiz/SKILL.md` 재작성 — 사용자 원본 prompt 기반 처리 단계(0~2단계) + 출력 형식. 단어별 링크 query 인코딩 규칙 명시.
  - `labs-candidates.md` step03 항목 갱신 — 학습 포인트와 짚어둘 점을 새 시나리오로 갱신.
  - `stage2-voca-quiz-skill/README.md`에 **"Project로도 운영하기"** 섹션 추가 — Skill instructions가 Claude Project custom instructions 영역에 그대로 적용 가능함을 안내. Skill vs Project 동선 비교 표 + 4단계 운영 방법(생성·instruction 붙이기·지식 등록 옵션·모바일 진입). Google Gems 사용 경험에서 Claude로 옮길 때 가장 자연스러운 1:1 대응 안내.
- **특이 사항**:
  - **시나리오 전면 변경**: 1차 작성에서는 객관식/빈칸/뜻 분기형 출제기로 잡았으나, 사용자가 실제 운영하던 시나리오(부모-자녀 단어 숙제, 단어장 사진 기반 랜덤 출제, 사진의 뜻 그대로 보존)를 공유받아 전면 재작성. 1차 작성분은 폐기.
  - **step02와의 차별 메시지 재정의**: step02가 "텍스트 옵션 1축"이라면 step03은 **"이미지 입력 + 출처 충실성 강제(AI 환각 차단) + 외부 도구 직접 링크"**. 더 풍부한 Skill 설계 패턴.
  - **단어별 발음 링크 처리 결정**: 사용자 원본 prompt에서는 `개별 단어마다 발음 링크를 붙이지 않는다`였으나, 사용자 결정으로 본 lab에서는 **단어 줄마다 직접 링크 부착**으로 진화. instructions의 마지막 규칙을 의도적으로 뒤집고, 그 메시지(Skill은 점진적으로 진화시킬 수 있음)를 본문에서 자연스럽게 전달.
  - **매체 안내**: stage 1·2 모두 이미지 업로드 가능한 환경 필요(claude.ai 웹·Claude Desktop 모두 OK). step02 stage 1처럼 "라벨 vs 매체" 분리 강조까지는 불필요 — 두 stage 모두 동일 매체.

---

### Task 7: step04-wrong-answer-note 본문 작성 (stage 1·2·3)

- **결과**: 완료
- **수행 내용 요약**:
  - 상위 `step04-wrong-answer-note/README.md` 갱신 — 자녀 채점지 시나리오·기존 방식의 어려움 → Skill 파이프라인으로 해결 매핑·step01~03과 Skill 설계 패턴 차이 표·stage별 매체 안내
  - `stage1-wrong-answer-note-prompt/README.md` 신설 — 채점된 학습지 사진 한 장으로 자유응답 시도. 새 대화 3회 반복 + 인식 오류 시 "다시 인식" 시뮬레이션으로 **재인식 비용** 직접 체감. 관찰 항목 8개(연필 답안·줄 그음·자체 표시·자동 채점·정답 출처·해설 깊이·출력 구조·학년 톤)
  - `stage2-wrong-answer-note-skill/README.md` 신설 — 2단계 파이프라인 다이어그램·step01~04 Skill 설계 패턴 비교 표·절차 7단계(작업공간 → Skill ① 생성 → 호출 → ★검수★ → Skill ② 생성 → 호출 → 호출 변형)·stage 1↔2 비교 표·Project 운영 3가지 패턴 표·트러블슈팅 6항목
  - `stage2-wrong-answer-note-skill/quiz-recognize/SKILL.md` 신설 — Skill ①. 입력값(사진+학년+과목+단원+문제집 단축명), 1단계 인식 규칙(정오 판정 절대 금지), 2단계 엑셀 저장(메타데이터+9컬럼), 한 줄 재인식 호출 예시, 채점 요청 거절 응답
  - `stage2-wrong-answer-note-skill/wrong-answer-note/SKILL.md` 신설 — Skill ②. 1단계 정오 판정(검수 엑셀 + 정답 표 기반)→2단계 처리 범위(`정오:false` ∪ `학생표시:1`)→3단계 자녀용 마크다운 생성(문제·내가 쓴 답·맞는 답·왜 헷갈렸을까·이렇게 풀어 보자·기억 포인트 + 오늘의 복습 포인트). 사용자 운영 자산(`Step 2. 오답노트.md`)의 말투·구조 그대로 흡수
  - `stage3-wrong-answer-note-report/README.md` 신설(이후 디자인 샘플 흡수 흐름으로 재작성) — step01 stage 3와의 차이 표(슬롯 채우기 vs 디자인 샘플 톤 보존+데이터 매핑)·**데이터(마크다운)와 디자인(HTML 샘플)의 분리** 메시지·길 A(샘플 그대로 매주 사용) / 길 B(`02-...` 새 톤 prompt로 추가)·시리즈 마무리 정리
  - **stage 3 자산 step01 패턴 정렬** — 사용자가 워크스페이스에 올린 학원 워크북 톤 디자인을 슬롯 템플릿과 예시로 분리:
    - `wrong-answer-html-report/wrong-answer-note-template.html` — 스칼라 슬롯(`{{academy_name}}`·`{{student_name}}`·`{{exec_summary_html}}` 등 30+) + `<!-- PROBLEMS:START/END -->`·`<!-- SELF_CHECK:START/END -->` 블록 반복 마커. step01 weather-template.html 패턴 따라 SKILL 디렉토리 안에 위치
    - `classical.html` — 채워진 결과 예시(stage 디렉토리 루트, step01의 `example-output.html`과 같은 위치). Cormorant Garamond + Noto Serif KR + 버건디·골드 배색·내장 CSS·인쇄 친화 `@media print`
  - `wrong-answer-html-report/SKILL.md` 신설 — 슬롯 템플릿 읽기 → 마크다운 파싱 → 스칼라 슬롯 채우기 → PROBLEMS 블록 반복 → SELF_CHECK 블록 반복/제거 → 태그 HTML 생성 → 저장 → 응답 8단계. **마크다운 출력 구조는 변경하지 않고**, 마크다운에 없는 필드(학생 이름·튜터·학원 브랜드·총문항수)는 호출 입력 또는 SKILL.md 기본값. `{{exec_summary_html}}` 총평만 마크다운 본문 요약으로 자동 생성, 그 외 정보는 창작하지 않음(빈 `<b></b>`).
  - 인덱스 동기화 — `labs/README.md`·`docs/labs.md`·`labs-candidates.md`의 step04 행을 "다단계 파이프라인 + 검수 자리, 디자인까지 프롬프트로"로 갱신
  - .gitkeep 정리 (3개 stage 디렉토리)
- **특이 사항**:
  - **시나리오 입력**: 사용자가 워크스페이스에 둔 운영 자산 3개(`Step 1. 문제분석.md`, `Step 2. 오답노트.md`, `리포팅 프롬프트.md`)를 그대로 흡수. step03와 마찬가지로 사용자가 실제로 운영하던 흐름 → 본 lab의 본문이 됨.
  - **JSON → 엑셀 전환**: 운영 자산은 JSON을 중간 산출물로 쓰지만, 비개발자 학습자 친화성을 위해 lab에선 엑셀(또는 CSV)로 옮김. SKILL.md에서 `.xlsx` ↔ `.csv` 전환 가능을 명시.
  - **2단계 분리의 학습 메시지**: 사용자 운영 의도("채점까지 가면 재인식 비용이 커지거든")를 lab의 핵심 메시지로 격상 — "정형화의 진짜 가치는 형식 일관성 너머 **워크플로우 분할**". stage 2 README와 step04 README 모두에 명시.
  - **stage 3 디자인 샘플 흡수로 전환**: 처음에는 "HTML 템플릿 사전 동봉 없음, prompt로 매번 생성"으로 작성했으나, 사용자가 직접 만든 학원 워크북 톤 디자인 샘플을 워크스페이스에 올리면서 stage 3 자산(`classical.html`)으로 흡수하도록 전환. 디자인 샘플 자체가 **사용자의 디자인 prompt 결과물**이므로 "프롬프트로만 진행" 원칙은 살아있고, 학습자는 같은 패턴으로 `minimal.html`·`modern.html` 등 형제 톤을 추가 가능.
  - **데이터 구조 보존 원칙**: 사용자 결정으로 "데이터 구조는 html이 아니라 기존 프롬프트 내용 기준" — stage 2 마크다운 출력은 그대로 두고, HTML 샘플이 더 풍부한 영역(학생 이름·튜터·학원 브랜드·정답률·다음 학습 권장)을 가져도 마크다운에 끌어올리지 않는다. **데이터(마크다운)와 디자인(HTML 샘플)의 분리**가 stage 3의 학습 메시지로 추가됨.
  - **step01 stage 3와 같은 패턴(슬롯 템플릿 + 예시)으로 정렬**: 사용자 결정으로 step01의 `weather-html-report/weather-template.html` + `example-output.html` 구조와 동일하게 stage 3 자산을 분리. step04 차별점은 **블록 반복 마커**(가변 문항 수 처리). step01이 고정 슬롯이라면 step04는 슬롯 + PROBLEMS·SELF_CHECK 블록 반복.
  - **파일 이동 이력**: 처음에는 `wrong-answer-html-report/01-classical.html`(샘플)만 동봉했다가, 사용자가 step01 패턴 정렬을 요청 → ① `01-classical.html` → `classical.html` 이름 정리(번호 prefix 제거) → ② classical.html을 stage 디렉토리 루트로 이동(예시 자리) + 슬롯 박힌 `wrong-answer-note-template.html`을 SKILL 디렉토리 안에 신설 → ③ SKILL.md를 슬롯 채우기 + 블록 반복 8단계로 재작성.
  - **Skill 2개 nesting**: `stage2-.../quiz-recognize/SKILL.md` + `stage2-.../wrong-answer-note/SKILL.md` (Skill ② 이름이 step 이름과 동일 — step02의 `file-classifier/SKILL.md` 패턴 동일 적용).
  - 매체 요건이 stage별로 갈리는 첫 step (1: 일반 챗봇 / 2·3: Cowork) — README에 명시.
  - **stage 3 입력 보정 (Task 7 완료 후 사용자 피드백)**: stage 3 Skill의 입력을 자녀용 마크다운 → **검수된 엑셀**로 변경. 이유 — 마크다운은 평문 뷰의 한 형태일 뿐이고, 데이터·뷰 분리 원칙상 엑셀이 데이터의 단일 출처. 마크다운(평문 뷰)과 HTML(인쇄 뷰)은 같은 엑셀에서 갈라지는 **평행 형제 뷰**여야 함. 변경: `wrong-answer-html-report/SKILL.md` 10단계로 재작성(엑셀 컬럼·메타 매핑·PROBLEMS/SELF_CHECK 분기·**자녀 친화 해설을 본 Skill 자체 생성** 단계 신설) + stage 3 README 데이터 구조 원칙·다이어그램·호출 변형 갱신 + stage 2 README 파이프라인 다이어그램을 직렬에서 평행 분기로 + step04 README 표 정리. `wrong-answer-note` 마크다운 Skill은 그대로 유지(평행 평문 뷰). 두 뷰는 서로를 참조하지 않고 각자 엑셀에서 직접 만들어진다는 사실이 학습 메시지의 핵심으로 격상됨.

---

### Task 4 후속 보강: step01 stage 3 디자인 갱신 (사용자 자산 흡수)

- **결과**: 완료 (Task 7 이후 진행. 본 보강은 Task 4 완료 처리에 영향 없음)
- **수행 내용 요약**:
  - 사용자가 워크스페이스에 올린 `날씨 템플릿.html`(iPhone mockup·Pretendard·hero 그라데이션·옷차림+우산 row·날씨 정보+대기질 카테고리)을 step01 stage 3 자산으로 흡수
  - `weather-html-report/weather-template.html` **덮어쓰기**(파일명 유지) — 슬롯 + `data-weather`/`data-grade`/`data-need` 속성으로 9가지 weather state·4가지 미세먼지 등급·우산 강조 색이 자동 매핑되도록 통합
  - 새 슬롯 추가: `{{location}}`·`{{hour}}`·`{{high}}`·`{{low}}`·`{{desc}}`·`{{comment}}`·`{{outfit_detail}}`·`{{umbrella_detail}}`·`{{wind_dir}}`·`{{rain_prob}}`·`{{uv_label}}`·`{{uv}}`·`{{pm10_value}}`·`{{pm25_value}}`·`{{weather_state}}` (총 15개 신규)
  - `weather-html-report/SKILL.md` 갱신 — 1단계를 "stage 2 9개 항목 + stage 3 자체 보강 항목"으로 분리, 슬롯 매핑 표 26행, 자동 매핑 토큰(9가지 weather·4가지 등급·필요해요/필요없음) 명시
  - `example-output.html` 새 디자인의 채워진 예시(서울특별시 강남구 역삼동·2026-05-09·맑음)로 갱신
  - `preview-icons.html` 9가지 weather state별 hero 그라데이션 + 새 SVG 아이콘 갤러리로 갱신
  - `stage3-weather-report/README.md`·`step01-weather/README.md` stage 3 학습 포인트·HTML 코드 블록 인용 정리
  - 워크스페이스의 `날씨 템플릿.html` 임시 자료 삭제 (lab으로 흡수 완료)
- **특이 사항**:
  - **stage 2 SKILL은 그대로 유지** — stage 2 학습 목표(텍스트 형식 통일) 보존을 위해 stage 2 출력 형식을 변경하지 않고, stage 3가 추가 항목(시각·최고/최저·풍향·강수확률·자외선·코멘트·옷차림 부연 등)을 자체 보강.
  - **파일명 유지 원칙** — 사용자 결정으로 `weather-template.html`·`example-output.html`·`preview-icons.html` 모두 기존 파일명 그대로 덮어쓰기. step01 patron(SKILL 디렉토리 안 템플릿 + 디렉토리 루트 예시·미리보기)이 그대로 살아있음.
  - **자동 매핑 통합** — 기존 weather-template.html은 인라인 JS로 텍스트를 읽어 클래스를 추가했으나, 새 디자인에서는 슬롯 텍스트가 직접 `data-weather`/`data-grade`/`data-need` attribute에 박히고 CSS attribute selector로 그라데이션·아이콘·배지 색이 결정됨 — JS 의존 제거.
  - 디자인 톤 변경(작은 카드 → iPhone mockup)에 따라 step01 README의 stage 3 행 학습 포인트 문구도 갱신.

---

### Task 8: slides 실습 시리즈 섹션 추가

- **결과**: 완료
- **수행 내용 요약**:
  - `slides/slides.md` How 섹션 끝의 placeholder 슬라이드 "실행 안내"를 갈음 위치로 식별 (시리즈 자료가 별도 페이지로 제공될 예정이라는 안내가 박혀 있던 자리)
  - **두 장으로 확장**:
    - ① **"실습 시리즈 — 4개 step"** — `docs/labs.md`의 시리즈 구성 표(step·주제·stage·핵심 학습 포인트) 슬라이드 압축 + "프롬프트로만 진행" admonition + GitHub `labs/`·zip 다운로드·docs 안내 한 줄
    - ② **"step별 학습 포인트"** — 2x2 카드 그리드(step01 blue → step02 cyan → step03 purple → step04 orange로 학습 단계 톤 변화), 카드별 한두 줄 핵심 메시지(파라미터 설계·사진 출처 충실성·검수 자리·데이터/뷰 분리), 하단에 "강사가 실습 경로를 안내" 한 줄로 이전 placeholder 메시지 흡수
  - **`docs/labs.md`와의 정합** — 표 4행 동일, stage·핵심 학습 포인트 동일, "프롬프트로만 진행" 원칙 메시지 동일, GitHub `labs/` 링크 동일
- **특이 사항**:
  - **임직원/학생 실습 슬라이드는 그대로 유지** — 카테고리별 결과물 예시(보고서·엑셀·오답노트 등)와 labs 시리즈는 수준이 다름. 임직원/학생 슬라이드는 "어떤 결과물을 만들 수 있나" 카테고리 안내, labs 슬라이드는 "공통으로 진행하는 4개 hands-on" 안내. 자연스럽게 흐름이 이어짐(예시 → 공통 시리즈).
  - **step별 4개 링크 나열 회피** — 메모리(`feedback_preserve-intentional-emphasis`)에 따라 단순 bullet 나열 회피 + GitHub 링크는 시리즈 단위로 한 번만(`labs/` 디렉토리 링크). 학습자는 GitHub에서 step별 디렉토리로 자연 진입.
  - **색상 사다리** — 카드 색상 4단계(blue → cyan → purple → orange)가 학습 사다리 톤을 시각화. 기존 슬라이드의 stage1/stage3 강조 글로우 패턴(linkStyle·drop-shadow)과 정합.
  - **slidev 빌드는 사용자 수작업(Task 9)** — Task 9 체크리스트 4번(slides Slidev dev/build 한 번 실행)에 명시되어 있어 본 Task에서는 마크다운 구조 정합까지만 확인.
  - **사용자 피드백 후속 보정 — `# 실습` 독립 섹션화**: Task 8 1차 작업에서는 labs 두 장을 How 섹션 끝에 두었으나(How의 placeholder "실행 안내"를 갈음), 사용자 지적으로 docs nav 정합 위배 발견. `mkdocs.yml`의 top-level은 「홈 / 도입 / 실습 / 보안 / 운영」으로 **실습이 도입·보안과 동급 형제**인데 슬라이드는 How 하위처럼 보였음. 보정 — `layout: section` 디바이더 + "# 실습" + "손으로 따라가는 4개 step" 한 줄을 학생 실습 슬라이드 다음에 삽입해 labs 두 장을 독립 섹션으로 분리. 흐름: Who → Why → 도입 → What → How → **실습** → 보안. 보안 섹션 디바이더 패턴(질문/선언 한 줄 lead) 모방.
  - **사용자 질문 응답 — labs README의 docs/slides 통합 보류**: README가 사실상 학습 가이드 본문(narrative·트러블슈팅·비교 표)이지만 자산 상대 경로 참조(`SKILL.md`·템플릿·예시 HTML)가 박혀 있어 사이트로 옮기면 깨짐. 현 결정(`labs/` SSoT, `docs/labs.md` 인덱스)을 유지하고 `99_workspace/notes/2026-05-08-followup-topic-candidates.md`에 항목 9로 후속 검토 후보로 등록 — 학습자 피드백 기반 결정으로 미룸.
  - **사용자 질문 응답 — slides 파일 분리 비권장 아님**: Slidev `src:` 디렉티브로 다중 파일 지원. 현 ~1260줄 단일 파일은 유지 권장(전역 검색·치환·diff 용이). 분리는 ① 동시 편집 충돌 ② 섹션 재사용 ③ 빌드 체감 저하 — 셋 중 하나가 와닿을 때 가치.

---

### Task 9: 최종 점검 (사용자 수작업 확인)

- **결과**: 완료 (사용자 수작업)
- **수행 내용 요약**: plan의 8개 체크리스트 항목(사이트 빌드·step01 stage 3 HTML·step별 README 흐름·slides Slidev 빌드·Skill 동작·링크 깨짐·운영 자료 보존 여부)을 사용자가 직접 점검 완료. 점검 중 발견된 보정 사항(Q&A 응답 — labs README의 docs 통합 보류·slides How 섹션 분리)은 Task 8 후속 보정과 후속 이슈 후보 항목 9로 처리됨.
- **특이 사항**: AI 자동 검증 영역 밖이라 본 Task에서는 결과만 기록.

---

### Task 10: ADR 작성

- **결과**: 완료
- **수행 내용 요약**:
  - `.ai/50_adr/active/adr-0006-labs-structure-and-naming.md` 신설 — ADR-0001 형식(상태·결정일·연관 이슈·영향 범위·배경·결정·고려한 대안·결과·후속 조치) 따름
  - **결정 8개**:
    1. 위치 — 루트 `labs/` SSoT, `docs/labs.md`는 단일 인덱스 페이지(top-level nav). zip 친화 + 사이트 빌드 의존성 없음
    2. 중첩 명명 — `labs/step<NN>-<topic>/stage<N>-<topic>-<설명>/`. step = 학습 순서, stage = ADR-0001 단계. 영문 소문자·하이픈
    3. stage 구성은 학습 목표에 맞춰 선택 — step01/04 풀 코스, step02/03 stage 1·2까지. 본 시리즈 4개 step 매핑 표 포함
    4. stage 1 해석 — ADR-0001 "참가 전제"의 입체화 reference. step02 stage 1처럼 매체 필요한 경우 라벨/매체 분리 명시
    5. stage 3 자산 패턴 — 슬롯 템플릿(`*-template.html`, Skill 디렉토리 안) + 채워진 예시(stage 디렉토리 루트). step04는 블록 반복 마커로 가변 항목 처리. **데이터/뷰 분리**(엑셀 = 데이터, 마크다운/HTML = 평행 형제 뷰)
    6. 진행 원칙 — 프롬프트로만 진행. labs/README + docs/labs + slides 실습 섹션 세 표면에 명시
    7. 본 이슈 범위 변경 기록 — 1차 골격만 → 사용자 결정으로 step 본문까지 흡수. 이유: 공통 구조 결정의 일관성 확보
    8. ADR-0001 후속 흡수 — 자동 출제기 → step03-voca-quiz, AI 오답노트 → step04-wrong-answer-note. 단순 1:1 이전 X, 운영 자산 + 디자인 prompt까지 흡수해 종합 step으로 확장
  - **고려한 대안 4개** 기각 사유 기록 — A(docs 통합), B(평면 명명), C(step 본문 후속 이슈 분할), D(stage 3 동봉 없음)
  - **결과·리스크 명시** — zip 친화·단계 모델 가시화·자산 패턴 재사용 (긍정), 사이트 방문자 동선 분리·자산 두 벌 관리·이슈 규모 확대 (리스크) + 각각 완화책
  - `.ai/50_adr/index.md` Active ADR 표에 ADR-0006 행 추가
- **특이 사항**:
  - **본 ADR이 `99_workspace/notes/2026-05-08-followup-topic-candidates.md` 항목 9(labs README → docs 통합)와 명시적으로 상호 참조** — 사이트 통합은 보류 결정이지만 후속 검토 trigger를 ADR과 후속 이슈 노트 양쪽에 박아두어 학습자 피드백 시 길을 잃지 않도록 함.
  - **ADR-0001 후속 항목 흡수 처리는 후속 조치에 명시** — ADR-0001 본문은 본 이슈에서 손대지 않고, 본 ADR로 흡수 사실을 기록 + 향후 ADR-0001 변경 이력 갱신 가능성을 후속 조치로 남겨둠.
  - **step별 stage 매핑 표를 ADR 본문에 직접 포함** — 결정 3의 "각 step의 stage 구성은 학습 목표에 맞춰 선택"이 추상 원칙으로만 남으면 후속 step 추가 시 기준이 흔들리므로 본 시리즈 4개 step 매핑을 표로 명시해 기준점 보존.
  - **사용자 피드백 후속 보정 — ADR-0001 변경 이력 갱신**: ADR-0006 후속 조치에 "ADR-0001 변경 이력에 추가하거나 본 ADR로의 참조로 정합화"로 두루뭉술하게 미뤄뒀던 항목을, 사용자 지적으로 본 Task에서 바로 닫음. ADR-0001에 2026-05-09 변경 이력 항목 신설 — 후속 조치 항목("Gems 기반 실습 재설계") 두 가지가 Issue #30 step03·step04로 흡수 처리됐고 본문 결정은 변경 없음을 기록 + ADR-0006으로의 상호 참조 추가. ADR-0006 후속 조치도 "추가하거나 정합화" → "완료 — 본 이슈에서 처리"로 상태 명시. 두 ADR이 양방향으로 정합화됨.

---

### Task 11: 마무리·이관

- **결과**: 완료
- **수행 내용 요약**:
  - 변경 파일 의미별로 4개 commit 분할:
    1. `docs(slides):` Task 8 — slides 실습 시리즈 섹션·step별 카드 추가 (slides/slides.md)
    2. `docs(adr):` Task 10 — ADR-0006 신설 + ADR-0001 변경 이력 갱신 (3 파일)
    3. `chore:` Task 8·10 이슈 문서·후속 후보 9 추가 (3 파일)
    4. `chore:` 본 Task — Task 9·11 closure + archive 이관 (이슈 디렉토리 이동)
  - PR 생성(`/git-pr` 규칙) — Issue #30 링크 + 변경 요약·테스트 플랜
  - `active/issue-0030/` → `archive/issue-0030/` 디렉토리 단위 이관
- **특이 사항**:
  - 이전 Task별 commit 패턴 유지 — `docs(...)` 콘텐츠 변경과 `chore` 이슈 housekeeping 분리. 이슈 #30의 모든 commit이 `(#30)`으로 끝나는 형식 정합.
  - archive 이관도 본 PR에 포함 — 머지 후 별도 정리 단계 없도록 closure 한 번에 묶음.
