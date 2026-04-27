# Issue #13 — 후보 테마 시제품 비교 결과 (Task 2 산출물)

> Task 1 산출물(rubric): [issue-0013-theme-eval-rubric.md](./issue-0013-theme-eval-rubric.md)
> Task 3 ADR: `.ai/50_adr/active/adr-0004-slides-theme-the-unnamed.md` (작성 예정)

---

## 1. 진행 방식

`/Users/user/Dev/git-repository/ai-onboarding-theme-trial/`에 git worktree(detached HEAD)를 만들어 메인 `slides/`를 건드리지 않고 비교했다. 동일 샘플 deck 13장(`_trial/sample.md` — cover/section/statement/center/bullet/mermaid/표/two-cols grid/red·orange·blue 강조 박스/코드 블록 2종/end)을 6개 후보 테마로 PNG export하여 시각 검증.

추가로 baizeai(`BaizeAI/talks` 2025-06-11-kubecon-hk) 패턴 적용 시제품과 the-unnamed 베이스 + 다크 mermaid override 시제품도 비교 대상에 포함.

PNG 산출물(워크트리, 휘발성):
- `_trial/output/{seriph, default, apple-basic, academic, the-unnamed, neversink}/*.png` (각 13장)
- `_trial/output/baizeai/*.png` (Plan A 시제품, seriph + 자체 style.css)
- `_trial/output/the-unnamed-final/*.png` (Plan B 시제품, the-unnamed + 다크 mermaid)

---

## 2. 후보별 평가 (rubric 6개 기준)

| 기준 | seriph (현행) | default | apple-basic | academic | the-unnamed | neversink |
|------|-------|---------|-------------|----------|-------------|-----------|
| 1.1 가독성 | C (한글 궁서체 fallback) | B | B | B | A (다크+노란 highlight 대비) | B |
| 1.2 빌트인 레이아웃 | A (6) | A (6) | B (10, cover 부재) | C (statement 부재) | B (6, statement 부재) | A (13) |
| 1.3 강조 박스(`border-l-4`) | A | A | A | A | A (`dark:` variant 자동) | A+ (Admonition 컴포넌트) |
| 1.4 한국어 폰트 | C (궁서체) | B | B | B | B (sans 강제 시 A) | B |
| 1.5 유지보수 | C (2024-02) | C | C (2024-03) | B (2024-12) | A (2026-04) | A (2026-01) |
| 1.6 코드 블록 시각 | C (prism 평이) | C | C (Apple풍 코드 아님) | B (자체 shiki) | **A+ (자체 code.css + 백틱·outline)** | C |
| **종합** | C+ | C+ | C+ | C+ | **A** | B |

핵심 발견:
- 사용자가 `apple-basic` 후보로 떠올린 "Apple 키노트풍 코드 블록"은 실제 패키지 내부에 없음(README/example.md/styles 모두 검증). Apple 키노트 영감은 **레이아웃·여백·큰 글씨**에 적용된 것이지 코드 블록이 아님.
- macOS 신호등(traffic light) 코드 컨테이너는 후보 6종 어디에도 빌트인되어 있지 않으며, baizeai 슬라이드에도 없음. 별도 ~30줄 CSS로 자체 추가만 가능.
- baizeai의 "정돈된 코드 톤"은 `seriph` 베이스 + 13줄 자체 `style.css`(코드 블록 어두운 반투명 + DM Sans + Fira Code) 조합.
- `the-unnamed`의 코드 블록 시각 품질이 후보 중 압도적 — 사용자 평가 "압도적" 정합.

---

## 3. Plan A vs Plan B 시제품 비교

### Plan A — seriph + baizeai 패턴 (13줄 자체 style.css)
- 라이트 슬라이드 + 어두운 반투명 코드 컨테이너
- 한국어 sans 강제(Noto Sans KR), DM Sans/Fira Code
- 보존 자산 100% 무수정 — mermaid·표·강조 박스 모두 라이트 톤 그대로
- 변경 비용: 13줄, 외부 의존성 추가 0
- 약점: 코드 블록 시각이 the-unnamed 대비 부족 (사용자 평가 우선순위에서 결정적 약점)

### Plan B — the-unnamed + 다크 mermaid override (3개 파일, ~15줄)
- 다크 슬라이드 + the-unnamed의 자체 코드 블록 스타일(IDE 톤, inline code 백틱·outline)
- 자체 `setup/mermaid.ts`로 the-unnamed 디폴트 `forest`(라이트)를 `dark`로 override
- 자체 `style.css`로 한국어 sans 강제
- `slides.md`에서 mermaid의 `style A fill:#e3f2fd...` 라이트 색 강제 라인 제거
- 보존 자산 호환: mermaid는 다크 적응(매체 적응 가능 영역), 표·강조 박스는 `dark:` variant로 자동 호환

### Plan B 검증 결과 (`_trial/output/the-unnamed-final/`)
| 슬라이드 | 검증 결과 |
|---------|---------|
| 5.png mermaid 3단계 모델 | ✅ 다크 박스 + 흰 외곽선·텍스트, 단계 텍스트 모두 가독 |
| 6.png 3단계 비교 표 | ✅ 다크 행 구분선 자연스러움, quote 박스 자동 적응 |
| 8/9/10.png 강조 박스 red/orange/blue | ✅ `dark:bg-{color}-900/15` variant 발동, 가독성 OK |
| 11/12.png 코드 블록 | ✅ the-unnamed 코드 가독성 압도, Korean sans 적용 |
| 1/2/3.png cover/section/본문 | ✅ 노란 highlight 헤더 + 다크 배경 대비, Korean sans 자연 |

---

## 4. 결정

**Plan B 채택** — `slidev-theme-the-unnamed` 베이스 + 자체 `style.css`(Korean sans) + 자체 `setup/mermaid.ts`(dark theme override).

근거 요약:
1. 사용자 평가에서 the-unnamed의 코드 가독성이 "압도적"으로 우위 — 2·3단계 실습 슬라이드에 코드 블록 도입 예정인 본 발표의 핵심 도구
2. 본 자료의 정체성 = "개발자가 비개발자에게 전달하는 가교" → 어설픈 비개발자 디자인 흉내보다 개발자 개성(다크·코드 강세) 유지가 정합 (사용자 직접 표명)
3. 보존 자산 호환성 PNG 검증 완료 — mermaid 다크 적응, 강조 박스 `dark:` variant 자동, 표 자연 적응
4. 변경 비용 작음 — 자체 자산 ~15줄, 외부 의존성 1종 추가 (npm 활성도 가장 높음)

기각된 후보 사유는 Section 2 비교 표 + Plan A 약점 참조. ADR-0004에서 정식 명문화.

---

## 5. ADR-0002 변형 금지 자산 해석 보완 (필요)

**원칙 보완**: ADR-0002 "변형 금지 자산"(mermaid·표·강조 박스 등)은 **메시지·구조 중심**의 보호 대상이며, 시각적 색상·여백 등 매체 적응 영역은 발표 표면이 자체 톤(예: 다크)에 맞춰 자유롭게 조정 가능.

**근거**: 사용자가 mermaid 색 강제 라인(`style A fill:#e3f2fd...`)이 의도적 자산이 아니라 자동 생성된 것을 그대로 사용했음을 확인. 색 자체는 변형 금지의 본질이 아니며 메시지(3단계 명칭·흐름)가 보호 대상.

ADR-0002 본문에 1줄 추가 또는 ADR-0004 Decision에 포함하여 명시. → ADR-0004 Decision 섹션에 반영 예정.

---

## 6. 워크트리 정리 안내

본 비교를 위해 만든 git worktree는 비파괴 검증용으로 휘발성:

```
/Users/user/Dev/git-repository/ai-onboarding-theme-trial/   # detached HEAD
```

본 이슈 종료 후 `git worktree remove` 또는 사용자 판단에 따라 정리. 시제품 PNG·자체 자산은 `_trial/`에 격리되어 메인 `slides/`에 영향 없음.
