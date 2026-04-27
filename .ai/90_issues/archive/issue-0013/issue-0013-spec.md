# Issue #13 스펙 발표 슬라이드 테마 재검토 및 ADR 작성

> 원본 이슈: https://github.com/scroogy-dev/ai-onboarding/issues/13

## 목표 (Goal)

현 `@slidev/theme-seriph` 테마의 한계와 대안을 비개발자 청중·발표 환경 기준으로 비교하여, 발표에 더 적합한 테마(또는 자체 커스터마이징 방향)를 결정하고 그 결정 근거를 ADR로 명문화한다.

---

## 범위 (Scope)

**포함 (In)**

- 후보 테마 목록화: 공식 Slidev 테마 + 신뢰 가능한 커뮤니티 테마 + 자체 커스터마이징 옵션
- 평가 기준 구체화 및 후보별 비교 (가독성, 빌트인 레이아웃 다양성, 강조·admonition 등가물 지원, 한국어 폰트 매칭, 유지보수 활성도)
- 변경 시 보존해야 할 자산의 호환성 검증
  - ADR-0001 "AI 활용 3단계 모델" 메시지 (변형 금지)
  - ADR-0002의 변형 금지 자산 (mermaid 2종, 3단계 비교 표)
  - 이슈 #9에서 도입한 강조 박스(`border-l-4` UnoCSS) 패턴 — 새 테마에서 작동하는지 확인, 안 되면 일관 강조 컴포넌트 신설안 제시
- 결정된 방향을 새 ADR로 기록 (ADR-0004 후보; 번호는 작성 시점 확인)
- 테마 변경이 결정될 경우 슬라이드 전환 적용 (또는 적용을 별도 후속 이슈로 분리할지 결정)

**비포함 (Out)**

- 슬라이드 콘텐츠 자체의 신규 작성 (#12 등 별도 이슈)
- `docs/`(MkDocs Material) 디자인 변경

---

## 완료의 정의 (Definition of Done)

- [ ] 후보 테마(공식·커뮤니티·자체 커스터마이징)가 1차 비교 표로 정리되어 있다
- [ ] 평가 기준 5개(가독성, 레이아웃, 강조 등가물, 한국어 폰트, 유지보수)에 대해 후보별 평가가 기록되어 있다
- [ ] 보존 자산(ADR-0001 메시지, ADR-0002 자산, `border-l-4` 강조 박스 패턴)의 새 테마 호환성이 확인되었다
- [ ] 최종 테마(또는 커스터마이징 방향) 결정이 기록되어 있다
- [ ] 결정 근거 ADR이 `.ai/50_adr/active/`에 작성되고 `.ai/50_adr/index.md`에 등록되었다
- [ ] 테마 적용이 본 이슈 범위라면 슬라이드 빌드가 정상 동작하고 보존 자산이 시각적으로 확인되었다 (또는 후속 이슈로 분리 결정 사유가 명시되어 있다)

---

## 연관 문서

| 문서 | 역할 |
|------|------|
| `.ai/50_adr/active/adr-0001-practice-tool-scope-and-stage-model.md` | "AI 활용 3단계 모델" — 변형 금지 메시지 출처 |
| `.ai/50_adr/active/adr-0002-publishing-structure-docs-ssot-slides-derivative.md` | `docs/` SSoT, `slides/` 파생 구조 + 변형 금지 자산(mermaid, 3단계 비교 표) |
| `.ai/50_adr/active/adr-0003-deprecate-self-implemented-slide-mode.md` | Slidev 도입(이슈 #9) 배경 — 본 이슈의 출발점 |
| `.ai/50_adr/index.md` | 새 ADR 등록 위치 |
| `.ai/40_domain/glossary.md` | 용어 일관성 확인 (필요 시) |
