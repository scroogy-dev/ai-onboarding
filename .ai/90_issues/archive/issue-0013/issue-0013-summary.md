# Issue #13 실행요약 발표 슬라이드 테마 재검토 및 ADR 작성

> 스펙: [issue-0013-spec.md](./issue-0013-spec.md) | 계획: [issue-0013-plan.md](./issue-0013-plan.md)

## 다음 작업

> ✅ 모든 작업이 완료되었습니다.

---

## Task별 수행 결과

### Task 1: 평가 기준 구체화 및 후보 테마 목록화

- **결과**: 완료
- **수행 내용 요약**:
  - 평가 기준 **6개**(가독성/레이아웃/강조 등가물/한국어 폰트/유지보수 + **1.6 코드 블록 시각 품질**)를 A·B·C 3등급 + 측정 항목 표로 정의
  - 후보 8종 선정: 공식 3(`default`/`seriph`(현행)/`apple-basic`), 커뮤니티 3(`academic`/`the-unnamed`/`bricks`), 자체 커스터마이징 2(seriph + UnoCSS 오버라이드 / 자체 테마 패키지(비범위 기록))
  - 보존 자산 체크리스트 확정: ADR-0001 메시지(3단계 명칭·정의), ADR-0002 변형 금지 자산(mermaid 2종, 3단계 비교 표), `border-l-4` 강조 박스(red/orange/blue)와 (a)무수정/(b)클래스 치환/(c)자체 컴포넌트 신설 분기
  - 산출물: [issue-0013-theme-eval-rubric.md](./issue-0013-theme-eval-rubric.md)
- **특이 사항**:
  - 이슈 본문 평가 기준 5개에 **1.6 코드 블록 시각 품질**을 추가. 사유: 2·3단계 실습 슬라이드에 코드 블록 도입 예상 + `apple-basic`의 핵심 강점이 코드 블록 비주얼이라 이 항목이 빠지면 비교가 왜곡됨. ADR Context에 추가 사유 명문화 예정
  - `apple-basic` 후보의 재평가 의의는 #9 시점 평가 기준에 1.6이 없었기 때문 (#9 기각 사유 = 레이아웃·콘텐츠 적용 비용)
  - 자체 테마 패키지 분리는 본 이슈 비범위로 명시(ADR에 기각 사유 기록 예정)
  - 커뮤니티 후보는 Task 2 진입 시점에 npm·GitHub 활성도 재확인 후 필요 시 같은 카테고리 내 대체

---

### Task 2: 후보 테마별 시제품 비교

- **결과**: 완료
- **수행 내용 요약**:
  - 별도 git worktree(`ai-onboarding-theme-trial/`)에서 비파괴 비교 진행
  - 동일 샘플 deck(13장)을 6개 후보 테마로 PNG export — `_trial/output/{seriph,default,apple-basic,academic,the-unnamed,neversink}/`
  - **`apple-basic`의 "Apple 키노트풍 코드 블록"은 실제 패키지에 없음 확인** — Apple 영감은 레이아웃·여백·큰 글씨이지 코드 블록이 아님. macOS 신호등 패턴은 후보 어디에도 빌트인 없음
  - **baizeai 슬라이드 분석** — 베이스가 `seriph`(우리 현행)이며 자체 `style.css` 13줄로 코드 톤을 만들고 있음. 신호등 없음
  - **Plan A 시제품**(seriph + baizeai 패턴) export — 한국어 sans·코드 블록 어두운 반투명 적용. 보존 자산 100% 무수정
  - **Plan B 시제품**(the-unnamed 베이스 + 자체 `setup/mermaid.ts` 다크 override + Korean sans) export — 모든 보존 자산 다크 톤 적응 검증 완료
  - 사용자 평가: the-unnamed 코드 가독성 "압도적", default/neversink/apple-basic 코드 가독성 부족
  - 결정: **Plan B 채택** — the-unnamed 베이스 + 다크 mermaid + Korean sans (~15줄 자체 자산)
  - 산출물: [issue-0013-theme-comparison.md](./issue-0013-theme-comparison.md)
- **특이 사항**:
  - **rubric 후보 변경**: `slidev-theme-bricks`는 npm 미존재로 `slidev-theme-neversink`로 교체
  - **Korean sans 폰트 강제**가 결정적 — 사용자가 seriph 한글 궁서체 fallback을 지적, sans 강제 후 톤 정상화. 메모리에 피드백 저장됨
  - **ADR-0002 변형 금지 자산 해석 보완 필요**: mermaid 색 강제 라인은 사용자가 자동 생성된 것을 그대로 사용한 것이지 의도적 자산이 아님 — 메시지·구조 중심 보호이며 색·여백은 매체 적응 가능. ADR-0004 Decision 섹션에 명문화 예정
  - **개발자 개성 우선 톤 결정**: 청중이 비개발자라도 작성자가 개발자이므로 다크·코드 강세 톤이 자연스럽다는 사용자 입장 반영. 메모리에 피드백 저장됨

---

### Task 3: 결정 및 ADR 작성

- **결과**: 완료
- **수행 내용 요약**:
  - **결정**: `slidev-theme-the-unnamed` 베이스 + 자체 `style.css`(Korean sans) + 자체 `setup/mermaid.ts`(dark theme override). `slides.md`의 mermaid `style A fill:...` 라이트 색 강제 라인 제거.
  - **ADR 작성**: `.ai/50_adr/active/adr-0004-slides-theme-the-unnamed.md` (Context, Decision 4개 항목, Alternatives 5종 — A baizeai 패턴/B 다른 후보들/C 변형 금지 엄격 해석/D 자체 테마 패키지/E 신호등 추가, Consequences, 후속 조치)
  - **ADR-0002 보완 명시**: 변형 금지 자산은 메시지·구조 중심 보호이며 색·여백 등 매체 적응은 발표 표면 자유. ADR-0002 본문 보완은 별도 후속 PR.
  - **index.md 등록**: `.ai/50_adr/index.md` Active ADR 표에 ADR-0004 추가.
- **특이 사항**:
  - 결정에 영향을 준 메모리 2건이 본 이슈에서 신설됨:
    - `feedback_korean-sans-font.md` — 슬라이드 본문 한국어 sans-serif 강제
    - `feedback_developer-aesthetic-priority.md` — 청중 비개발자라도 작성자(개발자) 톤 유지
  - 신호등(macOS traffic light) 코드 컨테이너 추가는 본 이슈에서 기각(대안 E). 발표 후 청중 피드백 검토 후 후속 이슈에서 결정 — ADR Consequences 후속 조치에 명시.

---

### Task 3: 결정 및 ADR 작성

- **결과**: 미시작
- **수행 내용 요약**:
- **특이 사항**:

---

### Task 4: 결정에 따른 적용 (또는 후속 이슈 분리 결정)

- **결과**: 완료 (본 이슈에서 적용)
- **수행 내용 요약**:
  - `slides/package.json`: `@slidev/theme-seriph ^0.25.0` → `slidev-theme-the-unnamed ^0.0.23`
  - `slides/slides.md`: frontmatter `theme: seriph` → `theme: the-unnamed`. mermaid #1(3단계 모델)의 `style A/B/C fill:...` 라이트 색 강제 라인 3줄 제거
  - `slides/style.css` 신규: Google Fonts에서 Noto Sans KR @import + `.slidev-layout` sans 강제
  - `slides/setup/mermaid.ts` 신규: the-unnamed 디폴트 `theme: 'forest'`(라이트)를 `theme: 'dark'`로 override
  - `npm install` (background) → 124 packages added, 2 removed (seriph)
  - `npx slidev export slides.md --format png` 빌드 성공, 31장 export
  - 시각 검증 6장: 1.png cover, 8.png orange 강조 박스, 9.png mermaid #1, 10.png 3단계 표, 12.png red 강조 박스, 18.png mermaid #2 — 모두 정상
- **특이 사항**:
  - the-unnamed의 cover 레이아웃이 빌트인으로 동작 — ADR-0004 Consequences "빌트인 레이아웃 일부 미지원" 우려가 cover에는 해당 없음
  - 강조 박스 6개 모두 `dark:bg-{color}-900/15` variant가 자동 발동, 별도 컴포넌트 신설 불필요
  - 빌드 검증용 `_build_check/` 임시 디렉토리는 검증 후 제거 완료
  - 본 이슈 비교용 git worktree(`ai-onboarding-theme-trial/`)는 결정 적용이 끝나서 정리 가능 — 사용자 판단으로 `git worktree remove` 진행
