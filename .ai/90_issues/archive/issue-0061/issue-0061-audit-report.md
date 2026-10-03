# Issue #61 최종 감사 리포트 effort 개념 설명과 모델 버전 갱신

> 감사 일시: 2026-10-03 (Asia/Seoul)  
> 감사 모델: OpenAI, GPT-6.1 Sol (gpt-6.1-sol)  
> 감사 effort: high  
> 감사 회차: 2차 (F-1 처리만 확인, 이전 리포트: [1차](issue-0061-audit-report-1.md))  
> 감사 대상 브랜치: `issue-0061`  
> 확인 범위: F-1의 원장 이관·수용 사유·재검토 조건·summary 기록  
> 기준 커밋: 1차 감사 HEAD `5ed11816d1f25c5fa071ba3e951470dab24c9dfd` → 현재 HEAD `d3c2440f1c25e08ebec2014ff831425b4b0b6956`  
> 스펙 출처: [spec](./issue-0061-spec.md), [plan](./issue-0061-plan.md), [summary](./issue-0061-summary.md), [GitHub Issue #61](https://github.com/scroogy-dev/ai-onboarding/issues/61)  
> 이전 계획 감사: [1차](issue-0061-plan-audit-report-1.md), [2차](issue-0061-plan-audit-report.md). 최종 감사의 발견 번호는 별도 축이다.

---

## 종합 의견

🟢 적합(PASS)

<details>
<summary>종합 의견 펼치기</summary>

- F-1의 K-0002 수용·이관과 summary 반영을 확인했다. 원인은 남아 있으나 이번 이슈의 보정 대상에서는 닫고, 기등재 참조로 옮긴다.
- 재검토 조건은 다음 이슈의 전체 작업 트리 검사 도입 또는 다른 이슈 감사에서의 재보고다. 같은 이슈의 이번 확인에서는 조건이 충족되지 않아 재제기하지 않는다.
- 사용자 요청에 따라 F-1만 확인했다. 요구사항·DoD 판정과 콘텐츠 검증 결과는 1차 감사에서 계승하며 빌드·외부 근거 대조를 재실행하지 않았다.

</details>

## 요약

- 1단계 적합성: 🟢 충족(PASS) · 충족(PASS) 46건 / 미충족(FAIL) 0건 / 부분 충족(PARTIAL) 0건 / 판정 불가(N/A) 0건
- 2단계 위험도: 🟢 통과(PASS) · 높음(HIGH) 0건 / 중간(MEDIUM) 0건 / 낮음(LOW) 0건 / 정보(INFO) 0건
- 기등재 참조: 1건 (K-0002, 위험도·카테고리 집계 제외)
- 이전 발견: 닫힘 1건(F-1 수용·원장 이관, 원인 미해소) / 감사 보정 대상 잔여 0건

| 카테고리 | 건수 |
|----------|------|
| 기능 | 0 |
| 아키텍처 | 0 |
| 버그 | 0 |
| 보안 | 0 |
| 코드품질 | 0 |
| 성능 | 0 |
| 테스트 | 0 |

---

## 1단계: 적합성 검증 (Compliance Check)

- 아래 요구사항 13개·DoD 33개 판정과 근거는 [1차 감사](issue-0061-audit-report-1.md)에서 계승했다. 이번 확인에서 재검증한 항목은 F-1의 처리뿐이다.

### 요구사항 대조

| # | 요구사항 | 판정 | 근거 |
|---|----------|------|------|
| R1 | effort 절·정의·확인과 예외 점검 | 🟢 충족(PASS) | `docs/intro.md:98`에 모델 절 직후 신설, 첫 문단에 별도 조절 장치·확인·예외 점검 명시 |
| R2 | 다섯 단계와 OpenAI 한 줄 | 🟢 충족(PASS) | 다섯 행만 존재, low 사고 생략 포함, none·minimal은 한 행. 모델별 지원 차이도 안내 |
| R3 | 일상어 설명·사용 사례 열 미인용 | 🟢 충족(PASS) | docs와 slides 금지어 0건, 단계 설명을 일상어로 서술, 작업 유형 추천 없음 |
| R4 | 상대 시간·예시 1건 | 🟢 충족(PASS) | 예시 1건과 출처, 작업별 차이 명시. 높은 단계 33분은 승인된 spec 정정과 일치 |
| R5 | 기본값·주의 사항 | 🟢 충족(PASS) | 기본값 표·Haiku 미지원·주의 사항 세 가지, Claude Code의 Sonnet 차이도 안내 |
| R6 | 사용량 절과 연결 | 🟢 충족(PASS) | 양방향 링크와 사용량 절의 모델·effort 선택 문구가 A5 결정과 일치 |
| R7 | 앱 설정 확인·미확인 항목 처리 | 🟢 충족(PASS) | A5의 공식 안내 대체를 적용. Task 1에 앱별 확인·미확인 기록, docs는 확인한 사실과 공식 링크 사용 |
| R8 | 모델 버전·컨텍스트 갱신 | 🟢 충족(PASS) | 구버전 잔존 0건, 최신 세 모델 이름 반영. API·챗·Code의 수치와 조건을 공식 근거와 대조 |
| R9 | slides 단방향 파생 | 🟢 충족(PASS) | 모델 → effort → 사용량 순서, 표·정의·시간은 docs 압축, 노트에 출처. 버전·컨텍스트·다음 장 안내 갱신 |
| R10 | docs 승인 후 slides·화면 확인 | 🟢 충족(PASS) | summary Task 4의 승인 기록이 Task 5보다 앞서고, Task 6에 화면 확인·날짜 기록 |
| R11 | 용어 사전 | 🟢 충족(PASS) | glossary effort 행 정확히 1개, 정의·표기 관례·docs 출처 포함 |
| R12 | 이모지 정리·의미 보존 | 🟢 충족(PASS) | 대상 이모지 0건, 점검표 ✓·범례 일치, 짝 라벨 균형과 금지·경고 의미 보존 |
| R13 | 시작 모델 안내 정정 | 🟢 충족(PASS) | tip과 slides 25장의 Opus 시작 안내·대부분 조건·현재 링크 일치, 선택 기준·라인업 유지 |

### 완료의 정의(DoD) 대조

- 각 행은 spec의 체크 항목 하나다. `[D]`는 재실행, `[QD]`는 이 감사 세션의 독립 대조, `[ND]`는 summary에 남은 사용자 확인 기록을 근거로 판정했다.
- R7은 A5에 승인된 공식 안내 대체를 기준으로 삼는다. 앱 화면·계정별 제공 여부를 새로 실측한 결과로 해석하지 않는다.

| # | DoD 항목 | 판정 | 근거 |
|---|----------|------|------|
| D01 | R1 D: 절 1개·위치 | 🟢 충족(PASS) | spec-1 무출력 |
| D02 | R1 QD: 정의·참고 글 의도 | 🟢 충족(PASS) | 첫 문단과 참고 글의 확인·예외 점검 의도 일치 |
| D03 | R2 D: 다섯 단계 행 | 🟢 충족(PASS) | spec-2 무출력 |
| D04 | R2 D: none·minimal·OpenAI 한 행 | 🟢 충족(PASS) | spec-3 무출력 |
| D05 | R2 QD: 단계 의미·추천 제외 | 🟢 충족(PASS) | R2의 다섯 기준 설명 보존, 공식 문서와 충돌 없음 |
| D06 | R3 D: 금지어 | 🟢 충족(PASS) | spec-4 무출력, grep 무매치 exit 1 |
| D07 | R3 QD: 전문 용어 풀어쓰기 | 🟢 충족(PASS) | 확인·사용량·쉬운 문제 등 일상어로 서술 |
| D08 | R4 D: 수치·출처 존재 | 🟢 충족(PASS) | spec-5 무출력 |
| D09 | R4 D: 다른 단계의 시간값 금지 | 🟢 충족(PASS) | spec-6 무출력 |
| D10 | R4 QD: 예시 1건·절대 시간 오해 방지 | 🟢 충족(PASS) | 작업별 차이·예시 한정, slides도 작업마다 다름 명시 |
| D11 | R5 D: 모델별 기본값·미지원 | 🟢 충족(PASS) | spec-7 무출력 |
| D12 | R5 QD: 주의 사항 세 가지 | 🟢 충족(PASS) | note의 세 항목을 각각 확인 |
| D13 | R6 D: 절 사이 링크 | 🟢 충족(PASS) | spec-8 무출력, A5의 양방향 연결도 확인 |
| D14 | R7 ND: 확인 결과·본문 일치 | 🟢 충족(PASS) | Task 1 확인 결과와 A5 결정, 승인 날짜 기록 |
| D15 | R8 D: 구버전 0건 | 🟢 충족(PASS) | spec-9 무출력, grep 무매치 exit 1 |
| D16 | R8 D: docs 최신 버전 존재 | 🟢 충족(PASS) | spec-10 무출력 |
| D17 | R8 QD: 컨텍스트 수치·조건 | 🟢 충족(PASS) | 공식 모델·컨텍스트·유료 플랜 문서와 대조 |
| D18 | R9 D: effort 1장·위치 | 🟢 충족(PASS) | spec-11 무출력 |
| D19 | R9 D: 구분선 증가 | 🟢 충족(PASS) | spec-12 무출력, 109 → 110 |
| D20 | R9 D: 독립 단계 이름·노트 출처 | 🟢 충족(PASS) | spec-13 무출력 |
| D21 | R9 QD: docs 압축·새 내용 금지 | 🟢 충족(PASS) | 제목·본문·노트를 docs와 대조, 주의 사항은 노트로 압축 |
| D22 | R10 ND: docs 승인 순서 | 🟢 충족(PASS) | Task 4 승인·날짜, docs 커밋 후 slides 커밋 순서 |
| D23 | R10 ND: slides 화면 확인 | 🟢 충족(PASS) | Task 6의 사용자 확인·날짜 기록 |
| D24 | R11 D: 용어 행·출처 | 🟢 충족(PASS) | spec-14 무출력 |
| D25 | R13 D: Sonnet 시작 잔존·링크 | 🟢 충족(PASS) | spec-15 무출력 |
| D26 | R13 QD: 공식 권장·기준 보존·파생 | 🟢 충족(PASS) | 공식 권장의 대부분·Opus 조건 유지, 기존 선택 기준·표 유지 |
| D27 | R13 ND: docs·25장 확인 | 🟢 충족(PASS) | Task 7의 변경 제시·사용자 화면 확인·날짜 기록 |
| D28 | R12 D: 대상 이모지 0건 | 🟢 충족(PASS) | spec-16 무출력 |
| D29 | R12 QD: 의미·범례·파생 | 🟢 충족(PASS) | docs·slides 점검표 14행·범례 일치, 경고 문장·라벨 보존 |
| D30 | R12 ND: docs 승인 후 slides·화면 확인 | 🟢 충족(PASS) | Task 8에 순서·승인·화면 확인·날짜 기록 |
| D31 | 공통 D: MkDocs strict | 🟢 충족(PASS) | 빌드 exit 0 |
| D32 | 공통 D: Slidev 빌드 | 🟢 충족(PASS) | 빌드 exit 0, built in 17.40s |
| D33 | 공통 D: 추가 행 U+2014 0건 | 🟢 충족(PASS) | spec-19 무출력, grep 무매치 exit 1 |

### 경계 검증

- **제외 목록**: effort별 작업 추천·벤치마크 성능·API 파라미터/코드·OpenAI 개별 단계 설명·모델별 기본값을 추가하지 않았다. `/effort`는 A5가 허용한 앱 조작 안내다.
- **시간 정정**: GitHub 원문의 xhigh 33분은 Task 2에서 높은 단계 33분으로 정정됐고, Task 4에 재승인이 기록됐다. 현행 spec을 기준으로 판정했다.
- **추가 범위**: R10·R11·R12·R13은 spec에 사용자 결정 근거가 있다. `labs/`·설정·실행 코드 변경은 없다.
- **워크플로우 문서**: `issue-workflow.md`의 모델 기록 형식 한 줄도 바뀌었다. 현행 스킬의 모델 ID 기록 규칙과 일치하는 절차 문구 정리이며, 교육 기능 추가는 없다.
- **F-1과 적합성 분리**: Task 6의 전체 작업 트리 검사 실패는 plan 고유 기준이다. spec R10·DoD는 승인·화면 확인 기록을 요구하므로 이 발견으로 그 판정을 낮추지 않는다.

### 도메인/계약/ADR 정합성

- **ADR-0002**: docs 승인 후 slides 파생 기록과 구현의 의미가 일치한다. 새 공유 자산·자동 변환 구조를 추가하지 않았다.
- **ADR-0001**: Claude 중심 실습 범위와 기존 단계 모델을 유지한다. OpenAI는 개념 비교만 추가했다.
- **glossary**: 본문 표기·정의·출처와 새 행이 일치한다. 계약·코드 색인 index는 실질 항목이 없어 추가 대조 대상이 없다.
- **벤더 독립성**: summary의 구현 모델과 Task 0~8 수행 모델은 Anthropic, 이번 감사는 OpenAI다. `최종 audit 모델` 행에 OpenAI, GPT-6.1 Sol (gpt-6.1-sol)과 effort high가 기록됐다(이번 확인).

<details>
<summary>외부 근거·확인 한계 펼치기</summary>

- 기본값·미지원·단계 설명·행동 신호는 [Claude effort 문서](https://platform.claude.com/docs/ko/build-with-claude/effort)와 [모델 개요](https://platform.claude.com/docs/ko/models/overview)에 부합한다. 모델 개요의 Opus 시작 권장도 docs·slides와 일치한다.
- Claude Code의 Sonnet 기본값 차이와 `/effort` 조작은 [모델 구성](https://code.claude.com/docs/ko/model-config)으로 확인했다.
- 입력창 옆 모델 메뉴·모델별 기본 단계 표시·Enterprise 역할 제한은 [설정 도움말](https://support.claude.com/en/articles/8664678-change-the-model-effort-and-thinking-settings)로 확인했다. Cowork effort는 summary에 미확인으로 남아 있고, 본문에서 Cowork 전용 설정·기본값을 확정하지 않는다.
- 최신 세 모델의 API 1M은 [컨텍스트 문서](https://platform.claude.com/docs/ko/build-with-claude/context-windows), 유료 챗 1M·이전 세대 일부 500K·Code의 조건은 [유료 플랜 도움말](https://support.claude.com/en/articles/8606394-how-large-is-the-context-window-on-paid-claude-plans)로 확인했다.
- 낮은 단계 2분·높은 단계 33분과 확인 작업 증가는 [참고 글](https://claude.dev/blog/spending-your-effort/)의 HTML 필터 사례에 근거한다. 이를 모든 작업의 시간 보장으로 확대하지 않았다.
- [OpenAI reasoning 안내](https://developers.openai.com/api/docs/guides/reasoning)는 단계 값과 모델별 지원 차이를 설명한다. docs의 한 줄 소개와 지원 차이 주의 사항을 대조했다.
- 한국어 도움말의 짧은 주소 두 곳은 web 도구에서 조회되지 않았고, 직접 HTTP 조회도 403이었다. 접근 가능한 같은 문서 ID의 영문 공식 도움말로 사실을 대조했으며, 한국어 링크의 정상 리디렉션 여부는 확정하지 않았다.
- `[ND]`는 summary의 승인·화면 확인 기록을 확인했다. 이번 감사에서 사용자 화면을 재실측하거나 새 승인으로 대체하지 않았다.

</details>

---

## 2단계: 비판적 검증 (Critical Review)

### 발견 사항

- F-1 관련 신규·잔여 발견 없음. 원장 수용 항목은 발견 표와 위험도·카테고리 집계에서 제외한다.

| # | 위험도 | 영향 | 발생확률 | 카테고리 | 계보 | 설명 | 관련 파일 |
|---|--------|------|----------|----------|------|------|-----------|

### 상세 분석

- 이번 범위는 F-1의 처리 확인이다. plan Task 6의 전체 작업 트리 검사와 실패 원인은 그대로지만, 승인된 수용·이관으로 후속 추적처가 K-0002가 됐다.
- 실제 기준 보정이나 검출력 개선이 완료됐다고 판정하지 않는다. 해당 완료 기준은 수용 결정에 따라 이슈 내 보정 대상에서 제외한다.

### 기등재 참조 항목

- **기등재 K-0002 참조**: [원장 항목](../../../70_ledger/active/K-0002-plan-whole-tree-status-check.md)의 상태·수용 사유·재검토 조건과 index·summary의 연결 기록을 확인했다.
- **원인 상태**: 미해소. 범위 없는 `git status --porcelain`은 감사 리포트를 계속 출력하고, `git status --porcelain -- docs slides`는 무출력이다.
- **재검토 조건**: 미충족. 다음 이슈의 plan 도입이나 다른 이슈 감사의 재보고가 아닌, 이슈 #61의 기존 발견 처리 확인이다.
- **처리**: 참조만 유지한다. 원장 내용·plan·summary는 이번 감사에서 변경하지 않는다.

### 이전 발견 추적

- F-1의 이슈 내 보정 대상을 수용·원장 이관으로 닫는다. 원인이 고쳐졌다는 의미는 아니며, 원장은 수용 상태로 유지한다.

<details>
<summary>F-1 완료 기준별 추적 펼치기</summary>

| 이전 발견 | 완료 기준 항목 | 판정 | 근거 |
|-----------|----------------|------|------|
| F-1 | 검사 경로 또는 감사 산출물 처리 순서를 명시 | 수용·이관으로 닫힘(기준 보정 미실행) | K-0002에 완료된 Task의 기준 문구를 사후 보정하지 않는 수용 사유와 재검토 방향 기록 |
| F-1 | 감사 리포트와 slides 미커밋 변경을 구분하고 완료 기록과 일치 | 수용·이관으로 닫힘(원인 미해소) | 원장에 범위 차이 기록, summary Task 6에 F-1 → K-0002 이관 기록. 현재 docs·slides 검사 무출력 |

</details>

---

<details>
<summary>이번 확인 실행 기록 펼치기</summary>

- HEAD `d3c2440` 변경은 K-0002 파일 신설, 원장 index 추가, summary의 이관·모델 기록뿐이다. plan·교육 콘텐츠 변경은 없다.
- 원장 항목의 유형·등재일·출처·위험도·수용 사유·재검토 조건·상태를 확인했고, index의 K-0002 행과 일치한다.
- summary Task 6은 audit 발견 1건·보정 반영 0건·K-0002 이관으로 기록돼 실제 처리와 일치한다.
- 리포트 갱신 전 `git status --porcelain`은 감사 리포트 3개만 출력했다. `git status --porcelain -- docs slides`는 무출력·exit 0이다.
- 1차의 적합성 46개를 계승해 `classify-risk.sh --compliance`를 실행했고, 현재 발견 0건의 `--status`와 두 상태의 `--verdict`를 재산출했다.
- 보존 전 번호 헬퍼에 기존 최종 리포트를 넘겼고 신규 번호는 부여하지 않았다. 계획 감사 추적 표의 F 표기도 헬퍼 입력에 포함된다.
- 모델·effort는 1차와 같은 현재 세션의 `turn_context` 기록(gpt-6.1-sol, high)을 사용했다.
- 1차 리포트를 `issue-0061-audit-report-1.md`로 보존했다. 이번에는 F-1 확인과 최신 리포트 갱신만 수행했으며, 빌드·콘텐츠 검사·외부 문서 조회는 반복하지 않았다.

</details>
