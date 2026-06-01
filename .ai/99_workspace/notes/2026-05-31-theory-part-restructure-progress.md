---
name: theory-part-restructure-progress
created: 2026-05-31
related-issue: 0042
related-files:
  - docs/index.md
  - docs/intro.md
  - docs/basics.md
  - .ai/40_domain/glossary.md
  - .ai/99_workspace/issue-0042-task6-restructure-design.md
tags: [restructure, theory-part, model-harness, dedup, issue-0042]
---

# 이론 파트 전체 재배치 — 진행 스냅샷 (S3까지 반영, S4 대기)

## 배경 (Why)

이슈 #42는 본래 *'에이전트 = 모델 + 하네스'* 멘탈모델 정립이 목표였다. 모델+하네스 섹션 초안 반영 후 점검(Task 5)에서 사용자가 **핵심 대비가 이론 파트 앞뒤로 중복된다**고 지적 → 범위를 **이론 파트 3개 문서(index·intro·basics) 전체 재배치**로 확장(옵션 C). 스펙·plan을 broaden하고 Task 6~8을 추가했다.

## 논의 요약

- **중복 진단**: 핵심 대비("매번 한 번 쓰기 vs 만들어 재사용/맡기기")가 5곳에서 다른 라벨로 재설명됨. before/after 2카드 grid가 5세트, 그중 3세트가 index What 한 섹션에 몰려 있던 게 '겹침'의 핵심. 사용량 확인은 index 준비사항 + intro 두 곳 중복.
- **설계 원칙**: "한 축에 한 집(home), 나머지는 교차링크". 각 spine 섹션 머리에 '이 페이지가 보는 축' 한 줄.
- **축 배정**: 정의=intro §챗봇vs에이전트 / 동기=index What 도입 / 학습 사다리=index §3단계 / 결과물 형태=basics §세 형태 / 해부=basics §모델+하네스 / 프롬프트 품질(별축)=index §실습 접근법.
- **단계 분할(S1~S4)**: S1 index What 정리 → S2 사용량 de-dup → S3 교차링크·축 라벨 → S4 모델+하네스 도입부 손질. 매 단계 빌드·렌더링 점검(MkDocs `.venv/bin/mkdocs serve`, 127.0.0.1:8000).

## 결정사항

- [x] 옵션 C(전체 재배치) 채택. 스펙·plan broaden, Task 6~8 추가. nav는 **홈-first 유지**.
- [x] 사용자 확정: 사용량은 **도입으로 통합**, What은 **적극 정리**(D1 병합+카드 삭제, D3 카드 삭제).
- [x] basics: `바이브 코딩과 에이전틱 엔지니어링` 섹션 제거 / `에이전트=모델+하네스` 섹션 신설 / glossary 하네스 추가. (커밋 57cdf9c)
- [x] **S1 완료**: index What — §매번시키기(D1) 동기를 §3단계 도입부로 병합, ①②카드 삭제, §어떤 결과물(D3) 폴더정리 카드 삭제. before/after 카드 3→1세트. `#manual-vs-software` 제거 → basics.md 참조 1곳 `#stage-model`로 갱신. (커밋 57cdf9c)
- [x] **S2 완료**: 사용량 스크린샷 3장 index→intro 이동, intro §사용량을 ①한도 숫자(설정→사용량)/②누적 사용량(Code 탭→사용량 링) 두 갈래로 재구성, index 준비사항은 도입 링크 한 줄. (커밋 57cdf9c)
- [x] 추가 소수정(**커밋 `e6642ff`**, docs/index.md): ① Who '본 교육이 강화하는 역량' 박스 마무리 문장을 사람(수강생) 기준으로 / ② 사전지식 '요구하지 않습니다'를 "프롬프트·컨텍스트·하네스 엔지니어링 이론"으로 / ③ 교육 목표를 '결과물 1개 만들기'→'스스로 만들 수 있는 능력 갖추기'로(슬로건+문장) / ④ 출발점 예시 "30분짜리"→"30분 ~ 1시간짜리".
- [x] **S1·S2 점검 피드백 반영(미커밋, 2026-06-01)**: ① index:129 줄표→마침표 / ② 이론 3문서 *설명문* 줄표 21곳 일괄 마침표화(제목·표·라벨·링크·인용 줄표는 유지; 일부는 `입니다`/`죠`·괄호로 완성) / ③ index §실습 접근법 막연/구조화 예시를 step01-weather 날씨로 교체(분량 아닌 *출력 항목 템플릿화*·구어체) / ④ index "시리즈 차원의 자세"→"공통 원칙" / ⑤ intro **Gemini CLI 제거**(Antigravity만, 안내 문장 삭제·공식비교 링크 제거) / ⑥ intro **Opus 4.7→4.8**. 매 편집 후 strict 빌드 정상.
- [x] **슬라이드 이슈 범위 편입(2026-06-01)**: 사용자 결정으로 비포함→포함. 문서 확정 후 반영하도록 **Task 9 추가**, Task 8은 docs 확정으로 한정. 스펙·plan·summary 갱신 완료.
- [x] **S1·S2 점검 피드백 반영 커밋 완료**(커밋 `8b661a5`): 줄표 정리 21곳·날씨 예시·공통 원칙·Gemini CLI 제거·Opus 4.8. (앞선 노트의 "미커밋"은 해소됨)
- [x] **S3 반영(커밋 `baa17e5`, 2026-06-01)** — 축 라벨·교차링크 패스. ① intro §챗봇vs에이전트 도입부를 *정의의 집* 선언으로 강화(다른 페이지는 여기 정의를 가리킴) ② intro "왜 이 분류가 중요한가" quote에서 동기 재서술(매주 비용 구조 문단)을 index §3단계로 deferral, 비용 차이/단계 위치는 거기서 다룬다고 링크 ③ index §3단계 도입부에 "1·3단계 챗봇/에이전트 정의는 intro" 역링크(재정의 안 함) ④ index §실습 접근법(막연/구조화) 뒤에 *프롬프트 품질은 챗봇/에이전트와 다른 결*임을 밝히는 한 줄 + intro 링크. basics §세형태는 이미 축 선언(L12)+index deferral(L24) 갖춰 무수정. strict 빌드 정상.

## 미결 / 열린 질문

- [ ] **S3 사용자 점검 피드백 대기** (점검 포인트: intro §챗봇vs에이전트가 "정의의 집"으로 읽히나, quote 축약 후에도 흐름 자연스러운가, index §3단계·§실습 접근법의 두 링크/구분 문구가 군더더기 없이 도움 되나).
- [ ] **S4 미착수** — basics §모델+하네스 도입부, 바이브 제거 후 연결 미세 손질.
- [ ] **슬라이드 미반영분(이제 이슈 범위 — Task 9, docs 확정 후)**: 바이브/에이전틱 슬라이드 1장 잔존 / `slides.md:446` 표 `Antigravity · Gemini CLI` + `457` "두 갈래" 노트 / `slides.md:558` "Opus 4.7 등" / S1·S2 재배치 중 슬라이드에 의미 있는 것. `slides/dist/`는 빌드 산출물이라 직접 편집 금지(Slidev 재빌드로 갱신).

## 다음 액션

- S4 → Task 8(docs 확정) → **Task 9(슬라이드 반영 + DoD 마감)** 순으로 진행. (S3 커밋 `baa17e5` 완료 — 점검 피드백 시 후속 반영)
- S3 docs는 커밋 `baa17e5`로 반영. 이슈 트래킹/워크스페이스 정리(중간 작업 파일 task1/2/3 삭제·참조 정리 + 진행노트/이슈파일 갱신)는 후속 chore 커밋으로 묶음(이슈 #42).

## 참조

- 커밋: `57cdf9c`(모델+하네스 추가·재배치 S1/S2) · `8b661a5`(S1·S2 점검 피드백) · `baa17e5`(S3 교차링크 정리)
- 설계 산출물: `.ai/99_workspace/issue-0042-task6-restructure-design.md`(전체 재배치 — Task 7 진행 입력). Task 1·2·3 작업 파일은 정리됨(결론은 `docs/` 반영, 상세는 git 이력)
- 이슈 파일: `.ai/90_issues/active/issue-0042/` (spec·plan·summary)
- 후속 노트 #10(바이브/에이전틱 제거 이력): `.ai/99_workspace/notes/2026-05-08-followup-topic-candidates.md`
- 로컬 미리보기: `.venv/bin/mkdocs serve` → http://127.0.0.1:8000
