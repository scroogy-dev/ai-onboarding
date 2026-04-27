# Issue #12 스펙 발표 슬라이드에 "보안 및 개인정보 가이드" 섹션 추가

## 목표 (Goal)

`docs/security-guide.md`의 핵심 메시지를 발표 슬라이드(Slidev)에서 청중에게 전달할 수 있도록, 보안·개인정보 가이드 섹션을 슬라이드에 추가한다. ADR-0002의 단방향 동기화(`docs/` SSoT → `slides/` 파생) 원칙은 그대로 유지한다.

---

## 범위 (Scope)

**포함 (In)**

- `slides/slides.md`(또는 분리 라우트 파일)에 보안·개인정보 가이드 섹션 추가
  - 공통 원칙(절대 입력 금지 정보 / AI 결과 검증 / 문제 발생 시 대응)
  - 임직원(엔터프라이즈) 트랙 핵심 메시지
  - 학생·일반인(무료 도구) 트랙 핵심 메시지
  - 정리 슬라이드 1장
- 삽입 위치 결정: 본 흐름(Why/Who/What/How) 내 통합 위치 vs 별도 부록/라우트
- 분리 여부 결정: 단일 `slides.md` 통합 vs 별도 Slidev 라우트(`slides-security.md` 또는 `routeAlias`)
- README 발표 직전 sync 체크리스트에 보안 섹션 점검 항목 추가
- 로컬(`npm run dev`)·배포본 양쪽 점검

**비포함 (Out)**

- `docs/security-guide.md` 자체의 콘텐츠 변경 (SSoT 위상 유지 — 슬라이드는 발췌·요약만 수행)
- 슬라이드 테마 변경 (별도 후속 이슈로 분리)
- 보안 가이드의 신규 정책 추가 (slides는 SSoT 반영만)

---

## 완료의 정의 (Definition of Done)

- [ ] 슬라이드에 보안·개인정보 가이드 섹션이 존재하며, `docs/security-guide.md`의 공통 원칙·임직원·학생/일반인 3블록 핵심 메시지가 모두 반영됨
- [ ] 삽입 위치·분리 여부에 대한 결정이 spec 또는 plan에 기록됨 (단일 통합 / 별도 라우트 중 택1, 결정 근거 명시)
- [ ] ADR-0001의 "AI 활용 3단계 모델" 메시지·문구는 변형 없이 유지됨
- [ ] ADR-0002 단방향 동기화 위반(`slides/`만의 신규 정책 추가) 없음 — 슬라이드 콘텐츠가 `docs/security-guide.md`로부터 추적 가능
- [ ] README 발표 직전 sync 체크리스트에 보안 섹션 점검 항목 1개 이상 추가됨
- [ ] `slides/`에서 `npm run dev` 실행 시 신규 섹션이 깨짐 없이 렌더링됨 (Mermaid·강조 박스 등)
- [ ] `main` push 후 GitHub Pages 배포본에서도 동일하게 노출됨

---

## 연관 문서

| 문서 | 역할 |
|------|------|
| [ADR-0001](../../../50_adr/active/adr-0001-practice-tool-scope-and-stage-model.md) | "AI 활용 3단계 모델" 메시지 변형 금지 — 보안 슬라이드에서도 적용 |
| [ADR-0002](../../../50_adr/active/adr-0002-publishing-structure-docs-ssot-slides-derivative.md) | `docs/` SSoT, `slides/` 파생, 단방향 동기화 원칙 |
| [ADR-0003](../../../50_adr/active/adr-0003-deprecate-self-implemented-slide-mode.md) | Slidev 표면 운영 결정 (이슈 #9에서 도입) |
| `docs/security-guide.md` | 보안·개인정보 가이드 SSoT — 슬라이드 콘텐츠의 원본 |
| `slides/slides.md` | 발표 슬라이드 본 파일 — 변경 또는 분리 라우트 신설의 기준 |
| `README.md` (발표 직전 sync 체크리스트) | 신규 섹션 점검 항목 추가 대상 |
