---
name: labs-structure-design
created: 2026-05-07
related-issue: 30
related-files:
  - .ai/90_issues/active/issue-0030/issue-0030-spec.md
  - .ai/90_issues/active/issue-0030/issue-0030-plan.md
  - .ai/90_issues/active/issue-0030/issue-0030-summary.md
  - .ai/90_issues/active/issue-0030/labs-candidates.md
  - .ai/50_adr/active/adr-0001-practice-tool-scope-and-stage-model.md
  - .ai/50_adr/active/adr-0002-publishing-structure-docs-ssot-slides-derivative.md
tags: [labs, issue-30, structure, naming, curriculum]
---

# 실습(labs) 디렉토리 구조·명명 규칙·후보 설계

## 배경 (Why)

Issue #30 "실습 자료 생성"에서 본 교육(비개발자 대상 AI 활용)의 실습 자료 골격을 잡는 작업. 이전 결정으로 사내용 실습은 회사 내부 repo로 분리됐고, 본 세션은 공개 가능한 실습 자료의 위치·명명 규칙·후보 목록·사이트(docs)·슬라이드(slides) 통합을 모두 결정.

## 논의 요약

### 용어 진화
- `exercises` → `practice` → **`labs`**. 최종 채택 이유: "단원 끝 연습문제(exercises)"도 "정형 절차 반복(practice)"도 아닌, **학습자가 자유롭게 실험하며 본인 산출물을 만드는 hands-on 성격**. ADR-0001의 "산출물 완성률" KPI와 정합.

### 명명 규칙
- 평면(`stage<N>-<2자리>-<설명>`) → **중첩**(`step<NN>-<topic>/stage<N>-<topic>-<설명>/`).
- 채택 이유: 한 주제를 stage 1→2→3으로 발전시키며 학습자가 ADR-0001의 3단계 모델을 동일 콘텐츠로 직접 체감. `step` 번호 = 학습 순서, `stage` 번호 = 단계 모델 매핑.
- 모든 구분자 하이픈, 영문 소문자. `docs/` 외부라 프로젝트 규칙(영문 소문자·하이픈)이 강제 적용은 아니지만 일관성 위해 동일 적용.

### 위치·SSoT
- 위치: 루트 `labs/` (사이트 미노출).
- SSoT: 가이드 본문은 `labs/step<NN>-<topic>/README.md`(루트). `docs/labs.md`는 인덱스+링크만(사이트 노출용).
- zip 단일 다운로드 친화 + ADR-0002의 "코드성 자산은 사이트 빌드와 분리" 컨셉과 정합.

### stage 1 해석
- ADR-0001은 stage 1을 "참가 전제(이미 경험)"로 정의. lab의 `stage1-` 디렉토리는 그 경험을 본 lab 맥락에서 입체화(예시 prompt·자유응답 캡처)하는 reference 자리로 해석 — ADR과 충돌 없음.

### 풀 코스 강제 폐기
- 초기에는 모든 step에 stage 1·2·3을 두는 일관성을 검토했으나, **학습 목표에 따라 필요한 stage만 둔다**로 정리. 모든 step이 풀 코스일 필요 없음.

### 후보 목록 (4 steps, 학습 순서)

| # | step | stage 구성 | 비고 |
|---|------|-----------|------|
| 1 | step01-weather | 1·2·3 | 풀 코스 입문, 첫 작성 대상 |
| 2 | step02-file-classifier | 2만 | Skill 옵션 설계 집중 |
| 3 | step03-voca-quiz | 1·2 | 자동 출제기 재설계 (ADR-0001 후속) |
| 4 | step04-wrong-answer-note | 1·2·3 | AI 오답노트 재설계 (ADR-0001 후속) |

- ADR-0001이 후속 이슈로 명시했던 "AI 오답노트, 자동 출제기" 두 항목 모두 본 이슈에서 step03·04로 흡수.
- step02-file-classifier 라벨은 stage 2지만 실제 파일 이동은 Cowork·claude.ai Code 실행 매체 필요. 라벨은 **교육 초점**(Skill 옵션 설계 = stage 2 개념) 기준.

### docs·slides 통합 결정
- `docs/labs.md` 인덱스 페이지 추가 (시리즈 소개·3단계 모델 매핑·GitHub 링크·zip 다운로드 안내).
- `mkdocs.yml` nav에 실습 항목 등록.
- `slides/`에 실습 시리즈 섹션 추가 (ADR-0002 단방향 파생 원칙).

## 결정사항

- [x] 위치: 루트 `labs/` (사이트 미노출, 본문 SSoT)
- [x] 명명 규칙: `labs/step<NN>-<topic>/stage<N>-<topic>-<설명>/` 중첩 구조
- [x] SSoT 분리: 본문은 루트 `labs/`, `docs/labs.md`는 인덱스+링크만
- [x] 각 step이 풀 코스(1·2·3)일 필요 없음 — 학습 목표에 따라 필요한 stage만
- [x] 4개 step 확정 (위 표대로): weather(풀) / file-classifier(2만) / voca-quiz(1·2) / wrong-answer-note(풀)
- [x] 첫 작성 대상: `step01-weather`
- [x] docs/labs.md 인덱스 추가 + mkdocs nav 등록 + slides 섹션 추가 (Task 3·4)
- [x] Task 1·2 완료 + 커밋 (`6a883ba`)
- [x] 메모리 갱신: `project_labs-terminology.md`에 새 명명 규칙 + 풀 코스 비강제 원칙 반영

## 미결 / 열린 질문

- [ ] `step02-file-classifier`의 실행 매체(Cowork vs claude.ai Code 모드) — 후속 이슈에서 본문 작성 시 README에서 명확히 안내
- [ ] `docs/labs.md` 정확한 위치 — 단일 파일 `docs/labs.md` vs 디렉토리 인덱스 `docs/labs/index.md` (Task 3에서 확정)
- [ ] mkdocs nav 라벨 — 한국어 "실습" vs 영문 "Labs" (기존 nav가 한국어니 "실습" 유력)
- [ ] slides 시리즈 섹션 위치·구성 — 시리즈 소개 슬라이드 1장 + step별 슬라이드 분량 (Task 4)
- [ ] 후속 step용 템플릿 디렉토리 형태 — `labs/_template-step/` 디렉토리 vs 시리즈 README의 패턴 명시 (Task 3)

## 다음 액션

- Task 3: 루트 `labs/` 골격(시리즈 README + step01-weather 골격) + 후속 step용 템플릿 + `docs/labs.md` 인덱스 + `mkdocs.yml` nav 갱신
- Task 4: `slides/`에 실습 시리즈 섹션 추가 (ADR-0002 단방향 파생)
- Task 5: ADR-0006 신설 (`adr-0006-labs-structure-and-naming.md`) + ADR index 등재
- Task 6: 커밋·PR·archive 이관

## 참조

- Issue: https://github.com/scroogy-dev/ai-onboarding/issues/30
- 커밋: `6da404f` (이슈 구조 추가), `6a883ba` (Task 1·2 완료 — 디자인 갱신·후보 확정)
- 브랜치: `issue-0030`
- 후보 목록 표: `.ai/90_issues/active/issue-0030/labs-candidates.md`
- 명명 규칙 메모리: `~/.claude/projects/-Users-user-Dev-git-repository-ai-onboarding/memory/project_labs-terminology.md`
