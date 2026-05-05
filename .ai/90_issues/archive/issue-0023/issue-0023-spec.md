# Issue #23 스펙 — 생성형 AI 소개 및 Claude 소개 추가

> 원본 이슈: https://github.com/scroogy-dev/ai-onboarding/issues/23

## 목표 (Goal)

비개발자 참가자가 본 교육의 실습에 들어가기 전에 **생성형 AI 시장의 좌표**(대표 제품·분류)와 **본 교육의 도구인 Claude의 표면**(claude.ai / Claude Cowork / Claude Code)을 한 번에 짚을 수 있는 도입 콘텐츠를 `docs/`에 추가한다.

---

## 범위 (Scope)

**포함 (In)**

- `docs/`에 생성형 AI 소개 콘텐츠 추가
  - 대표 제품 소개: Claude, Gemini, ChatGPT
  - 분류: 챗봇, 에이전트 (두 분류의 차이 + 본 교육에서의 위치)
- `docs/`에 Claude 소개 콘텐츠 추가
  - claude.ai (Chat)
  - Claude Cowork
  - Claude Code
- `mkdocs.yml`의 `nav`에 신규 페이지(또는 섹션) 등록
- 기존 `docs/index.md`의 3단계 모델·준비사항과 충돌 없이 정합되도록 톤·메시지 정리
- `slides/slides.md`에 신규 콘텐츠 파생 반영 (ADR-0002에 따른 단방향 파생 — `docs/` 확정 후 작업)

**비포함 (Out)**

- Confluence 위키 동기화
- 신규 ADR 작성 (ADR-0001 「실습 도구 = Claude 단독, 3단계 모델」의 범위 안에서 해석되는 콘텐츠 추가)
- 각 도구의 심화 사용법·가격·계정 가이드 (소개 수준만)
- 슬라이드 테마 변경·신규 레이아웃 도입 (기존 `the-unnamed` + 사용 중인 레이아웃 패턴 재사용)

---

## 완료의 정의 (Definition of Done)

- [x] `docs/` 하위에 "생성형 AI 소개" 콘텐츠가 존재한다 (대표 제품 3종 + 챗봇/에이전트 분류 포함)
- [x] `docs/` 하위에 "Claude 소개" 콘텐츠가 존재한다 (claude.ai / Claude Cowork / Claude Code 3종 모두 포함)
- [x] `mkdocs.yml`의 `nav`에 신규 페이지가 명시적으로 등록되어 있다
- [x] 신규 콘텐츠는 비개발자 톤(전문 용어 최소화, 평이한 한국어)으로 작성되어 있다
- [x] 신규 콘텐츠가 ADR-0001(Claude 단독 + 3단계 모델)·ADR-0005(메시지 프레임)와 충돌하지 않는다
- [x] `docs/index.md`의 「준비사항」·「3단계」 서술과 모순 없이 연결된다 (페이지 간 상호 링크 또는 명시적 정합)
- [x] 로컬에서 `mkdocs serve`로 빌드·렌더링이 깨지지 않음을 확인했다
- [x] `slides/slides.md`에 신규 콘텐츠가 파생되어 있고, 메시지·구조가 `docs/`와 정합한다 (ADR-0002의 단방향 파생 원칙 준수)
- [x] `slides/`에서 `npm run build` 또는 `slidev`로 슬라이드 빌드·렌더링이 깨지지 않음을 확인했다

---

## 연관 문서

| 문서 | 역할 |
|------|------|
| [ADR-0001 — 실습 도구(Claude 단독) 및 3단계 모델](../../../50_adr/active/adr-0001-practice-tool-scope-and-stage-model.md) | Claude를 단일 실습 도구로 채택한 결정 — 본 이슈 콘텐츠의 도구 선택 근거 |
| [ADR-0002 — `docs/` SSoT, `slides/` 파생](../../../50_adr/active/adr-0002-publishing-structure-docs-ssot-slides-derivative.md) | 콘텐츠는 `docs/`에 먼저 작성, 본 이슈도 `docs/` 추가만 처리 |
| [ADR-0005 — 본질 메시지 「비개발자도 소프트웨어를 만든다」](../../../50_adr/active/adr-0005-core-message-non-developers-make-software.md) | 신규 콘텐츠 톤·메시지 프레임 정합 기준 |
| `docs/index.md` | 「준비사항」·「3단계 모델」과 메시지·링크가 충돌하지 않도록 정합 |
| `.ai/40_domain/glossary.md` | 새로 도입하는 용어(에이전트, Cowork 등) 정의 정합 — 필요 시 갱신 |
