# Issue #38 스펙 — 슬라이드 보강

> 원문: https://github.com/scroogy-dev/ai-onboarding/issues/38

## 목표 (Goal)

발표 슬라이드(`slides/`)에서 화면 밖으로 벗어나는 레이아웃 문제를 해소하고, 발표용으로 부족한 자료를 추가 보강한다.

---

## 범위 (Scope)

**포함 (In)**

- `slides/` 하위 Slidev 슬라이드에서 화면 영역(예: 16:9 1280×720 기본 viewport)을 넘어가는 페이지 식별 및 수정
- 콘텐츠 양 과다, 폰트 크기, 이미지/표/코드 블록 크기 등 오버플로우 원인별 조치
- 오버플로우 점검 중 발견된 **잘못된 내용**(사실 오류·SSoT 미동기)의 정정 — 슬라이드 측 수정에 한정
- 발표 진행상 보강이 필요한 항목(자료·예시·시각 자료)을 식별하여 추가
- ADR-0002·ADR-0004 정합 유지 (SSoT는 `docs/`, 슬라이드는 파생, 테마는 `the-unnamed`)

**비포함 (Out)**

- `docs/` 본문(SSoT) 콘텐츠 구조 변경 — 슬라이드 보강을 이유로 SSoT를 거꾸로 수정하지 않음 (필요 시 별 이슈로 분리)
- 슬라이드 테마 자체 교체 (ADR-0004 재논의 영역)
- Slidev 외 다른 슬라이드 도구 도입

---

## 완료의 정의 (Definition of Done)

- [ ] 화면 오버플로우가 발견된 슬라이드 페이지를 모두 식별해 plan의 「식별된 케이스」 표에 정리했다
- [ ] 식별된 각 페이지에 대해 수정안을 적용했고, Slidev 미리보기에서 viewport 내에 표시되는 것을 확인했다
- [ ] 오버플로우 점검 중 발견된 잘못된 내용은 함께 정정되었다 (있는 경우)
- [ ] 추가 보강 항목(있다면)이 plan에 명시적으로 추가되고, 각 항목이 반영되었다
- [ ] ADR-0002·ADR-0004 정합성에 위배되는 변경이 없다 (SSoT 역행 수정, 테마 임의 교체 없음)
- [ ] 변경 사항이 커밋·PR로 정리되었다

---

## 연관 문서

| 문서 | 역할 |
|------|------|
| [ADR-0002](../../50_adr/active/adr-0002-publishing-structure-docs-ssot-slides-derivative.md) | `docs/` SSoT·`slides/` 파생 구조 — 슬라이드 단독 수정 허용 범위의 기준선 |
| [ADR-0004](../../50_adr/active/adr-0004-slides-theme-the-unnamed.md) | 슬라이드 테마(`the-unnamed`) + Korean sans·다크 mermaid 자산 — 자산 규약 |
| [ADR-0003](../../50_adr/active/adr-0003-deprecate-self-implemented-slide-mode.md) | 자체 슬라이드 모드 제거 이력 — Slidev 단일 표면 전제 |