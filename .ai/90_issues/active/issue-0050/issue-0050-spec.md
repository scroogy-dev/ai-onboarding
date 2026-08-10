# Issue #50 스펙 — 줄표(—) 과다 정리: 1부·공통 페이지와 labs·slides (쌍점·하위 목록 기준)

## 목표 (Goal)

docs 잔여 페이지와 labs·slides의 본문 산문에서 줄표(—) 과다 사용을 #49 확정 기준(표제 뒤 짧은 부연은 쌍점, 길면 하위 목록·문장 분리)으로 정리하고, 유지 자리의 줄표는 보존한다.

**적용 기준** (이슈 #50 본문, #49 Task 8에서 확정)

- 표제·라벨 뒤 짧은 부연: 쌍점(:) 또는 문장 분리
- 부연이 길어지면: 부호 대신 하위 목록·문장 분리로 구조화 (쌍점 뒤가 길어지면 앞 문맥이 희석됨)
- 줄표(—) 유지 자리: 제목(H1~H3)·admonition 제목·nav 라벨·부 명칭(예: "2부 — 도구·데이터 연결")·링크 라벨(문서 제목 반영)·표의 "해당 없음" 기호

---

## 범위 (Scope)

**포함 (In)**

- `docs/index.md`(줄표 50곳)·`docs/intro.md`(45곳)·`docs/basics.md`(27곳)·`docs/labs.md`(7곳)·`docs/operation-guide.md`(4곳)
- `docs/security-guide.md` 기존 절 잔여분: 외부 연결 절(#49 적용 완료)을 제외한 나머지 절 (예: 학생·일반인 절)
- `docs/intro.md` 링크 목록 2곳(공식 문서·함께 읽어보세요)의 목록 단위 일괄 전환 — #49가 목록 안 일관성 때문에 보류한 2행 포함
- `labs/` 전체 README·SKILL.md 22개 파일 (약 262곳, 2026-08-10 집계)
- `slides/slides.md` (185곳) — ADR-0002 파생 구조에 따라 docs 확정 후 정리

**비포함 (Out)**

- `docs/connect/` 3페이지와 `docs/security-guide.md` 외부 연결 절: #49에서 적용 완료
- `slides/node_modules/` 등 외부 의존성 파일
- 줄표 외 문장부호·표현의 전면 정리: 전환 과정에서 드러나는 인접 결함은 사용자 점검 라운드에서 개별 승인으로만 처리
- 콘텐츠 의미 변경: 이 이슈는 문장부호·문장 구조 전환까지만

---

## 완료의 정의 (Definition of Done)

> **검증 레벨** — 낮을수록 좋다(자동 검증에 가까움). 기본은 L1, 한 레벨 내릴 때마다 강등 사유를 함께 적는다.
>
> - `[D]`  L1 결정적   — 명령이 합/불을 판정, 사람 판단 없음
> - `[QD]` L2 준결정적 — 다른 AI·기준 체크리스트가 채점
> - `[ND]` L3 비결정적 — 사람이 직접 읽고 판단

- [ ] [D] 대상 파일 전부에서 유지 자리(제목·admonition 제목·링크 라벨·표의 해당 없음 기호)를 걷어낸 뒤 잔존 줄표 0건
  <details>
  <summary>검증 명령 — repo 루트에서 실행, 출력 0건이면 통과</summary>

  ```bash
  for f in docs/index.md docs/intro.md docs/basics.md docs/labs.md \
           docs/operation-guide.md docs/security-guide.md \
           $(find labs -name '*.md' | sort) slides/slides.md; do
    n=$(sed -E 's/\[[^][]*\]\([^()]*\)//g; s/\|[[:space:]]*—[[:space:]]*/|/g' "$f" \
        | grep -vE '^#{1,6} |^[[:space:]]*(!!!|\?\?\?\+?) ' \
        | grep -c '—')
    [ "$n" -gt 0 ] && echo "위반: $f ($n곳)"
  done; true
  ```

  - 설계 주의: `sed` 1식이 인라인 링크(라벨 포함)를 통째로 제거해 링크 라벨 유지 자리를, 2식이 표의 `| — |` 셀을 걷어낸다. `grep -v`가 제목 행과 admonition 제목 행을 제외한다. nav 라벨은 `mkdocs.yml`에 있어 검사 대상 파일에 없다.
  - 부 명칭("2부 — 도구·데이터 연결")이 링크 라벨 밖 산문에 단독 등장하면 유지 자리이므로, 실제 등장 형태를 확인해 필터에 예외를 추가하고 그 사실을 접기 주석에 남긴다 (예외를 늘릴 때는 해당 행 패턴을 특정해 과소 검출을 막는다).
  - 마지막 `; true`는 루프 마지막 `[ ]` 판정의 종료 코드가 명령 전체를 실패로 만드는 것을 막는다 — 합/불 판정은 종료 코드가 아니라 출력 0건 여부다.
  </details>
- [ ] [D] `mkdocs build --strict` 종료 코드 0 (docs 변경 반영 후)
  <details>
  <summary>검증 명령 — 종료 코드 0이면 통과</summary>

  ```bash
  .venv/bin/mkdocs build --strict
  ```

  - 설계 주의: 로컬 PATH에 `mkdocs`가 없어 repo의 `.venv/bin/mkdocs`로 실행한다 (#49 검증 관례).
  </details>
- [ ] [D] Slidev 빌드 종료 코드 0 (slides.md 변경 후)
  <details>
  <summary>검증 명령 — 종료 코드 0이면 통과</summary>

  ```bash
  (cd slides && npm run build)
  ```

  </details>
- [ ] [QD] 전환 결과가 기준에 정합 — 쌍점 뒤가 길어져 앞 문맥이 희석된 곳이 없고, 하위 목록 분리가 적절하며, 유지 자리를 과잉 전환하지 않음  (검증: 교차모델 audit이 채점, 별도 세션)  ← 강등 사유: "부연이 길다"·"문맥 희석"은 의미 판단이라 명령으로 환원 불가
- [ ] [ND] 사용자가 대상 페이지를 직접 점검하고 피드백 반영까지 승인  (검증: 사람 리뷰)  ← 강등 사유: 교육 콘텐츠 문체 적합성은 최종적으로 저자(사용자) 판단

---

## 전제 (Assumptions)

- **사용자 합의(2026-08-10, 이 대화에서 확정)**: 정리 범위는 docs 잔여 + `labs/` 전체 + `slides/slides.md` 전부 포함. 검토 후 버린 대안: labs(약 262곳, docs의 약 1.8배)·slides(185곳)를 분량 근거로 별도 이슈 분리 — 사용자가 전부 포함으로 확정해 폐기.
- **issue-0049 종결(2026-08-10, 사용자 확정)**: Task 9·10 추가분의 교차모델 재감사는 수행하지 않고 종결, 디렉토리는 archive로 이관. 이관 커밋이 이 이슈의 작업 브랜치(`issue-0050`)에 포함된다.
- **정리 대상 문자**: 줄표는 U+2014(—)다. 하이픈(-)·엔 대시(–)는 대상이 아니다.
- **slides 후행 순서**: ADR-0002 구조상 slides는 docs의 파생이므로, docs 사용자 점검 종료 후에 `slides/slides.md`를 정리한다 (plan Task 순서의 근거).
- **표현 원칙(#49에서 확정, 전환 문장을 새로 쓸 때 적용)**: 구어체 회피(서버·프로그램은 "실행되다·위치하다"), 흔치 않은 공간 은유 회피, "잇다"→"연결", "닿다"→"접근". 전환은 문장부호만 바꾸는 것이 원칙이나, 문장을 분리·재구성할 때 이 원칙을 어기는 새 표현을 만들지 않는다.
- **#49에서 넘어온 후보 2건**: `docs/basics.md`의 "도착점"·표 머리글 "축"(공간 은유 잔존). 이 이슈 범위에 넣을지 Task 0에서 질의한다.
- **검증 필터의 한계**: 완료의 정의 1번 `[D]`의 유지 자리 필터는 구조 기반이라, 산문 속 부 명칭 등 예외 형태가 나오면 구현 시점에 필터를 보정하고 접기 주석에 남긴다.

---

## 연관 문서

| 문서 | 역할 |
|------|------|
| `.ai/50_adr/active/adr-0002-publishing-structure-docs-ssot-slides-derivative.md` | docs SSoT·slides 파생 구조 — slides 후행 정리 순서의 근거 |
| `.ai/50_adr/active/adr-0006-labs-structure-and-naming.md` | labs 구조·명명 — 대상 22개 파일의 구조 파악 |
| `.ai/50_adr/active/adr-0009-unified-ui-theme-claude-style.md` | 통합 UI 테마 — admonition 제목 관례(유지 자리) 확인 |
| `.ai/40_domain/glossary.md` | 도메인 용어 사전 — 문장 재구성 시 용어 정합 확인 |
| `.ai/90_issues/archive/issue-0049/` | 기준 확정 경위와 2부 적용 전례 (필요 시 명시 참조) |
