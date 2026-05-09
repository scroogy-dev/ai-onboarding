# Issue #32 스펙 — 이론 보강 (AI 활용 메타 원칙: 계획/실행 분리·데이터/뷰 분리·결과물 검토)

> GitHub: https://github.com/scroogy-dev/ai-onboarding/issues/32
> 선례: PR #29 / 이슈 #28 — 이론 보강 (활용 모드 적합 명확화·역량 강화 3축)

## 목표 (Goal)

시리즈 차원의 **AI 활용 메타 원칙 3종**(계획/실행 분리·데이터/뷰 분리·결과물 검토)을 docs 도입 섹션에 명시하고 slides에 동기화하며, 필요 시 ADR로 정책화한다.

---

## 범위 (Scope)

**포함 (In)**

- 핵심 후보 3종을 docs 도입 섹션에 admonition/카드 등 시각 구분으로 추가
  1. 계획과 실행의 분리 — 한 번에 "계획 + 실행"을 시키지 말고 계획 검토 후 실행
  2. 데이터와 뷰의 분리 — 산출물에서 내용(데이터)과 표현(뷰)을 평행 형제로
  3. AI 결과물 검토·이해 의무 — 손으로 안 쓰지만 **검토는 한다**
- 동승 후보 2종 흡수 본문 작성 (Task 1, 2026-05-09 결정)
  - 4. 컨텍스트 유지·새 대화 기준 ("대화방 관리") — 결이 핵심 3종과 같아 같은 도입 박스 형태로
  - 2. 페르소나는 효과적인가 — 검증·실험 성격이지만 본 이슈에서 결론(권장/비권장/조건부)을 함께 정리
- slides 도입부 동기화 (ADR-0002 단방향 파생)
- 시리즈 차원의 강한 원칙(특히 결과물 검토)은 `labs/README.md`·`docs/labs.md`에 호출
- 필요 시 ADR 신설 또는 ADR-0006 보강 (특히 데이터/뷰 분리는 교육 원칙 격상 가능성)
- 후속 후보 노트(`2026-05-08-followup-topic-candidates.md`) 항목 1·2·3·4·8 상태 정리

**비포함 (Out)**

- labs 본문(step별 README·SKILL.md·자산) 자체 변경 — 본 이슈는 이론 보강 층, 시리즈 원칙 호출까지만
- 항목 5(MCP/RAG)·6(사용량 화면)·7(stage 3 HTML 디자인 시연)·9(labs→docs 통합) — 별 이슈/후속 처리
- 페르소나 효과 검증을 위한 대규모 실험·벤치마크 — 본 이슈는 현재까지의 합의 수준에서 입장 정리에 그침

---

## 완료의 정의 (Definition of Done)

- [x] 동승 후보(4 컨텍스트 관리·2 페르소나) 흡수/분리 결정 — 둘 다 본 이슈 흡수 (2026-05-09)
- [x] docs 도입 섹션에 핵심 3종 + 동승 2종(컨텍스트 관리·페르소나) 총 5종이 admonition/카드 형태로 반영됨 (의도적 강조 유지)
- [x] slides 도입부에 같은 5종이 동기화됨 (한국어 sans-serif 강제·발표 톤 유지)
- [x] `labs/README.md`·`docs/labs.md`에 "결과물 검토" 원칙이 시리즈 차원으로 호출됨
- [x] ADR 정책화 여부가 결정되고, 신설/보강이 필요하면 해당 ADR 파일이 작성·갱신됨 — ADR-0007 신설·ADR-0006 결정 5·6 갱신
- [x] 후속 후보 노트(2026-05-08)의 항목 1·2·3·4·8 상태가 "이슈 #32 반영 완료"로 갱신됨
- [x] 메모리 후보 `feedback_labs-review-output.md` 신설 여부 결정·반영 — 신설(짝 메모리 `feedback_labs-prompt-only`와 대칭)
- [x] MkDocs 빌드·Slidev 빌드(해당 시) 정상 — mkdocs `--strict` 0.74s, slidev build 11.64s
- [x] 본 이슈가 archive로 이관됨 (PR 생성·머지는 본 이슈 작업 범위 외 — 별도 처리)

---

## 연관 문서

| 문서 | 역할 |
|------|------|
| [ADR-0001](../../../50_adr/active/adr-0001-practice-tool-scope-and-stage-model.md) | 3단계 모델 — 계획·실행 분리는 stage 2(Skill 설계) ↔ stage 3(실행) 매핑과 정합 |
| [ADR-0002](../../../50_adr/active/adr-0002-publishing-structure-docs-ssot-slides-derivative.md) | docs SSoT·slides 단방향 파생 — 본 이슈도 같은 흐름 |
| [ADR-0005](../../../50_adr/active/adr-0005-core-message-non-developers-make-software.md) | 본질 메시지 "비개발자도 소프트웨어를 만든다" — 본 이슈는 그 위의 메타 원칙 층 |
| [ADR-0006](../../../50_adr/active/adr-0006-labs-structure-and-naming.md) | 실습 자료 구조·진행 원칙 — "프롬프트로만 진행"과 "결과물 검토"의 짝 관계 |
| `.ai/99_workspace/notes/2026-05-08-followup-topic-candidates.md` | 핵심 후보 1·3·8(+동승 4·2) 출처 |
| 선례 PR #29 / 이슈 #28 (archive/issue-0028) | "이론 보강 — 활용 모드 적합 명확화·역량 강화 3축" — 같은 결의 도입 섹션 보강 패턴 |
| [Claude Cowork — 작업을 실행하는 방식](https://support.claude.com/ko/articles/13345190) | Task 3(계획/실행 분리) 외부 근거 — 청중이 쓰는 표면(Cowork)의 공식 가이드 |
| [Claude Code 모범 사례 — 탐색·계획·코드](https://code.claude.com/docs/ko/best-practices) | Task 3(계획/실행 분리) 외부 근거 — 개발자용이지만 단계화 원칙은 비개발자에게도 유효 |
