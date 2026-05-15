# Issue #36 스펙 사이트 안내 강화 — labs 본문 진입 경로 + Claude Desktop 사용량 화면 안내

> GitHub: [#36](https://github.com/scroogy-dev/ai-onboarding/issues/36)
> 출처 후보: `.ai/99_workspace/notes/2026-05-08-followup-topic-candidates.md` 항목 #9(메인)·#6(부속)

## 목표 (Goal)

사이트(`docs/`)로 진입한 학습자가 labs 본문 narrative와 Claude Desktop 사용량 화면 안내를 한 자리에서 받을 수 있도록 사이트 안내 경로를 보강한다.

---

## 범위 (Scope)

**포함 (In)**

- 후속 후보 #9 — labs 본문 진입 경로 결정 + 결정에 따른 docs/slides 반영
  - 선택지 (a) 유지 / (b) per-step 요약 narrative 페이지 신설 / (c) README→docs 이전
  - 선택지 비교(자산 경로 충돌·두 벌 관리 부담·ADR-0006 영향) 후 결정
  - **결정 결과 (a) 유지** — 본문은 `labs/` SSoT 유지. 사이트 진입 동선만 가볍게 보강:
    - `docs/labs.md` 시리즈 구성 표의 step 4개 셀에 각자의 GitHub README 직링크
    - `slides/slides.md` "실습 시리즈 — 4개 step" 슬라이드 표의 step 셀에 같은 직링크 (ADR-0002 단방향 파생)
    - "step별 학습 포인트" 카드 슬라이드는 메시지 카드 시각 일관성 유지 위해 손대지 않음
    - 기존 footer/"자료 받기" 섹션의 전체 `labs/`·zip 링크는 그대로 유지
- 후속 후보 #6 — Claude Desktop "Code" 탭 사용량 화면 안내
  - 사이트 안내 페이지 짧은 섹션 (스크린샷 1~2장 + 갱신 정책)
  - 자리 후보: `docs/index.md` 도입부 또는 별도 가이드 페이지
- slides 동기화 — #9 진입 링크 반영 + #6 필요 시 1장 추가
- followup 노트(`2026-05-08-followup-topic-candidates.md`)의 #9·#6 상태 갱신
- ADR-0006 결정 재방문이 필요한 경우 ADR 업데이트 또는 신규 ADR — **본질 유지, 변경 이력 1줄 추가로 처리**

**비포함 (Out)**

- `labs/` 디렉토리 본문 구조 변경 (zip 친화 유지가 본 이슈의 전제)
- README 본문 전면 재작성 (현 narrative는 유지)
- 사이트 내비게이션 구조 전면 개편
- 후속 후보 #7(step01 stage 3 HTML 디자인 시연·에셋 재생산) — 별 이슈
- Claude Desktop 사용량 화면 외 다른 표면(`claude.ai`·Cowork·API)의 사용량 안내

---

## 완료의 정의 (Definition of Done)

- [x] #9 선택지 (a)/(b)/(c) 중 하나를 명시적으로 결정하고 근거를 spec/summary에 기록 — **(a) 유지 결정**
- [x] (a) 결정에 따른 docs/slides 진입 링크 보강 완료 — `docs/labs.md` 시리즈 구성 표·`slides/slides.md` "실습 시리즈" 표 step 셀에 GitHub README 직링크
- [x] #6 Claude Desktop 사용량 화면 안내 섹션이 사이트 어딘가에 추가됨 — `docs/index.md` 「준비사항」 직후 admonition + 스크린샷 3장 + 갱신 정책
- [x] slides 동기화 — #9 진입 링크 반영 + #6 슬라이드 1장 추가
- [x] followup 노트의 #9·#6 상태 라인이 "이슈 #36 반영 완료"로 갱신됨
- [x] ADR-0006 영향 평가 — 본질 유지, 변경 이력 1줄 추가 완료

---

## 연관 문서

| 문서 | 역할 |
|------|------|
| `.ai/50_adr/active/adr-0001-practice-tool-scope-and-stage-model.md` | Claude 단독 범위 — 사용량 화면 안내의 컨텍스트 |
| `.ai/50_adr/active/adr-0002-publishing-structure-docs-ssot-slides-derivative.md` | docs SSoT·slides 단방향 — #9 결정의 큰 전제 |
| `.ai/50_adr/active/adr-0006-labs-structure-and-naming.md` | labs SSoT·zip 친화 — #9 결정이 직접 닿는 ADR |
| `.ai/99_workspace/notes/2026-05-08-followup-topic-candidates.md` | 후속 후보 #9·#6 원본 컨텍스트 |
| `docs/labs.md` | 현재 labs 인덱스 페이지 (보강 대상 후보) |
| `docs/index.md` | 사이트 도입 페이지 (#6 자리 후보) |
| `labs/README.md` | labs 시리즈 본문 SSoT (#9 결정 시 참조) |
