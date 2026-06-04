# Issue #44 실행계획 — docs 및 slide UI 테마 변경

> 스펙: [issue-0044-spec.md](./issue-0044-spec.md)

---

## Tasks

> AI가 순서대로 실행할 작업 단위를 정의합니다.
> 각 작업은 독립적으로 검증 가능해야 합니다.

### Task 1: 스타일 방향 결정 및 현황 조사

- [x] 완료
- **목표**: Claude 스타일 ↔ GitHub 스타일 중 적용 방향을 정하고, 현재 테마 구성 파일을 파악한다.
- **작업 내용**:
  1. `mkdocs.yml`의 theme(palette·font·features), `overrides/`, `docs/assets/` css 현황 정리
  2. `slides/`의 Slidev 테마 설정·커스텀 자산 현황 정리
  3. 두 스타일안의 색·타이포·컴포넌트 차이를 비교해 사용자에게 방향 확인
- **완료 기준**: 적용 방향이 spec에 확정 기재되고, 변경 대상 파일 목록이 정리됨

---

### Task 2: docs 테마 적용

- [x] 완료
- **목표**: 결정된 스타일을 docs(MkDocs Material)에 반영한다.
- **작업 내용**:
  1. `mkdocs.yml` palette/font/features 및 `docs/assets/` css 수정
  2. 다크/라이트 모드·한국어 sans-serif·mermaid 톤 정합 확인
  3. `mkdocs build`(또는 serve)로 렌더 확인
- **완료 기준**: docs가 새 스타일로 깨짐 없이 렌더됨

---

### Task 3: slides 테마 적용

- [x] 완료
- **목표**: 결정된 스타일을 slides(Slidev)에 반영한다.
- **작업 내용**:
  1. `slides/`의 Slidev 테마·스타일 교체 또는 커스터마이징
  2. 한국어 sans-serif·코드블록·mermaid 톤 정합 확인
  3. Slidev 렌더 확인
- **완료 기준**: slides가 새 스타일로 깨짐 없이 렌더되고 docs와 톤이 일관됨

---

### Task 4: ADR 갱신

- [x] 완료
- **목표**: 테마 변경 결정을 의사결정 기록에 반영한다.
- **작업 내용**:
  1. ADR-0004(슬라이드 테마)를 `superseded/`로 이관 + supersede 표기
  2. docs·slides 통합 테마 결정을 신규 ADR-0009로 작성
  3. `50_adr/index.md` 목록 갱신(Active에 ADR-0009, Superseded 섹션에 ADR-0004)
- **완료 기준**: 영향받는 ADR과 index가 최신 상태로 정합됨
