# Issue #47 실행요약 — 클로드 신규 모델 반영(Claude Fable 5)

> 스펙: [issue-0047-spec.md](./issue-0047-spec.md) | 계획: [issue-0047-plan.md](./issue-0047-plan.md)

## 다음 작업

> ✅ 모든 작업이 완료되었습니다.

---

## Task별 수행 결과

### Task 1: 근거 확정 및 반영 위치 목록 확정

- **결과**: 완료
- **수행 내용 요약**:
  - 발표문 + 공식 한국어 docs(platform.claude.com/docs/ko)로 확정: Fable 5(`claude-fable-5`)는 2026-06-09 GA, "가장 까다로운 추론·장기 에이전트 작업"용 최상위 모델. 기존 Opus·Sonnet·Haiku 라인업 **위에 추가** (대체 아님).
  - Mythos 5는 Project Glasswing 초대 전용 — 스펙대로 비포함 확정.
  - 반영 위치 6곳 확정: `docs/intro.md`(모델 비교 섹션, 사용량 서술), `docs/basics.md`(제품·모델 고르기), `slides/slides.md`(모델 슬라이드 본문·발표자 노트, 사용량 슬라이드).
- **특이 사항**: `docs.claude.com/ko/...` → `platform.claude.com/docs/ko/...` 리다이렉트 확인. 수정 섹션 내 링크는 새 주소로 갱신 (다른 위치의 구 주소 링크는 이번 범위 밖).

### Task 2: docs 반영 (SSoT 초안)

- **결과**: 완료 (초안)
- **수행 내용 요약**:
  - `docs/intro.md` 모델 비교: 제목·도입문 갱신("세 라인업" → "여러 라인업" + Fable 추가 서술), 비교표에 Fable 행 추가, Opus 포지션을 "가장 똑똑함" → "깊은 추론의 기본"으로 조정, tip 박스에 Fable 선택 기준 추가, 버전 안내 블록 갱신.
  - `docs/intro.md` 사용량 서술·`docs/basics.md` 모델 열거에 Fable 추가.
  - `mkdocs build --strict` 통과 (.venv/bin/mkdocs).
- **특이 사항**: 앵커 `#claude-models`는 명시 지정이라 제목 변경에도 유지됨.

### Task 3: slides 파생 반영

- **결과**: 완료 (초안)
- **수행 내용 요약**:
  - 모델 슬라이드: 제목·표(Fable 행 추가)·blockquote·버전 각주·발표자 노트 갱신.
  - 사용량 슬라이드 모델 열거에 Fable 추가.
  - `npm run build`(slidev) 통과.
- **특이 사항**: 표가 3행 → 4행으로 늘어 오버플로우 가능성 — 사용자 viewport 직접 확인 필요.

### Task 4: 사용자 점검·피드백 반영

- **결과**: 완료
- **수행 내용 요약**: 로컬 서버(MkDocs 8000 / Slidev 3030)로 사용자 직접 점검. 피드백 "날짜 표기 제거" 반영 — "(2026년 6월 추가)"·"(2026.6 추가)"를 "(새로 추가)"로, 도입문·발표자 노트의 연월 표기 제거 (docs 2곳 + slides 2곳).
- **특이 사항**: 시한성 정보(날짜·플랜 제공 조건)는 본문에 박지 않고 공식 안내로 위임하는 방향으로 정리됨.
