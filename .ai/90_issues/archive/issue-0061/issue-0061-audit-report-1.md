# Issue #61 최종 감사 리포트 effort 개념 설명과 모델 버전 갱신

> 감사 일시: 2026-10-03 (Asia/Seoul)  
> 감사 모델: OpenAI, GPT-6.1 Sol (gpt-6.1-sol)  
> 감사 effort: high  
> 감사 회차: 1차 (이전 최종 감사 리포트 없음)  
> 감사 대상 브랜치: `issue-0061`  
> 기준 커밋: `main`의 `2d6d823c944e2df61cd13b3cc4f8a92701a61bed` → HEAD `5ed11816d1f25c5fa071ba3e951470dab24c9dfd`  
> 스펙 출처: [spec](./issue-0061-spec.md), [plan](./issue-0061-plan.md), [summary](./issue-0061-summary.md), [GitHub Issue #61](https://github.com/scroogy-dev/ai-onboarding/issues/61)  
> 이전 계획 감사: [1차](issue-0061-plan-audit-report-1.md), [2차](issue-0061-plan-audit-report.md). 최종 감사의 발견 번호는 별도 축이다.

---

## 종합 의견

🟢 적합(PASS)

<details>
<summary>종합 의견 펼치기</summary>

- 요구사항 13개와 DoD 33개를 충족했고, 내용 검사·두 빌드·외부 근거 대조에서 보정이 필요한 콘텐츠 결함을 찾지 못했다.
- Task 6의 작업 트리 검사와 완료 기록 사이에 낮음 발견 1건이 있다. 기본 처리는 원장 이관이며, 사용자 승격 없이 콘텐츠 보정 루프를 추가하지 않는다.
- summary의 최종 audit 모델·effort와 Task N 결과는 이 리포트를 받은 사용자의 후속 기록 대상이다.

</details>

## 요약

- 1단계 적합성: 🟢 충족(PASS) · 충족(PASS) 46건 / 미충족(FAIL) 0건 / 부분 충족(PARTIAL) 0건 / 판정 불가(N/A) 0건
- 2단계 위험도: 🟢 통과(PASS) · 높음(HIGH) 0건 / 중간(MEDIUM) 0건 / 낮음(LOW) 1건 / 정보(INFO) 0건
- 기등재 참조: 0건 (위험도·카테고리 집계 제외)
- 이전 최종 감사 발견: 해당 없음. 계획 감사 F-1~F-3의 보정은 유지됨.

| 카테고리 | 건수 |
|----------|------|
| 기능 | 0 |
| 아키텍처 | 0 |
| 버그 | 0 |
| 보안 | 0 |
| 코드품질 | 0 |
| 성능 | 0 |
| 테스트 | 낮음(LOW) 1 |

---

## 1단계: 적합성 검증 (Compliance Check)

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
- **벤더 독립성**: summary의 구현 모델과 Task 0~8 수행 모델은 Anthropic, 이번 감사는 OpenAI다. `최종 audit 모델` 행은 이 결과를 기록하기 전의 빈 상태이며, 후속 기록 대상으로 남긴다.

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

| # | 위험도 | 영향 | 발생확률 | 카테고리 | 계보 | 설명 | 관련 파일 |
|---|--------|------|----------|----------|------|------|-----------|
| F-1 | 🟢 낮음(LOW) | 기술 품질 의견 | 통상 사용 | 테스트 | 신규 | Task 6의 전체 작업 트리 검사가 보존된 감사 리포트까지 포함해 완료 기록과 불일치 | plan Task 6, summary Task 6 |

### 상세 분석

#### F-1: 감사 산출물이 Task 6의 작업 트리 완료 검사를 계속 실패시킴

- **위험도**: 🟢 낮음(LOW)
- **영향 축**: 기술 품질 의견
- **발생확률 축**: 통상 사용
- **카테고리**: 테스트
- **관점**: 암묵적 가정·누락된 검증
- **계보**: 신규 (최종 감사 번호. 계획 감사 F-1과 별개)
- **권장 조치**: 감사 산출물의 보존 정책과 Task 6 검사 범위를 일치시킨다. 낮음 기본 처리는 원장 이관이며, 승인 없이 plan·summary를 보정하지 않는다.
- **완료 기준**:
  - Task 6이 콘텐츠의 커밋 여부를 검사한다면 대상 경로를 명시하고, 감사 산출물만 남았을 때 통과하도록 기준을 맞춘다. 전체 트리를 검사한다면 감사 리포트도 커밋·보존하는 처리 순서를 명시한다.
  - 선택한 기준으로 감사 리포트만 남은 경우와 실제 slides 미커밋 변경이 남은 경우를 구분하고, summary의 완료 판단 근거가 그 기준과 일치한다.

<details>
<summary>근거·재현 결과 펼치기</summary>

- plan Task 6의 `[D]`는 `git status --porcelain` 출력 0건을 요구한다. 리포트 작성 전 실행 결과는 아래 두 행이었고, 종료 코드는 0이다. 이 명령은 출력 수로 판단해야 하므로 종료 코드 0이 통과를 뜻하지 않는다.

```text
?? .ai/99_workspace/issue-0061-plan-audit-report-1.md
?? .ai/99_workspace/issue-0061-plan-audit-report.md
```

- 위 두 파일은 지금 [`./issue-0061-plan-audit-report-1.md`](./issue-0061-plan-audit-report-1.md)·[`./issue-0061-plan-audit-report.md`](./issue-0061-plan-audit-report.md)에 있다 (작성 시점 경로는 `.ai/99_workspace/`, --clear로 이관).

- `git status --porcelain -- docs slides`는 무출력이다. summary Task 6도 이 차이를 명시하면서 결과는 완료로 기록한다.
- 계획 감사 산출물 보존은 통상 진행 과정에 포함된다. 검사 범위가 콘텐츠 완료와 맞지 않는 기술 품질 의견이며, 승인·화면 확인 자체를 무효화하는 콘텐츠 결함은 아니다.

</details>

### 기등재 참조 항목

- 해당 없음. K-0001은 커넥터 Custom 표시 명칭 생략으로 이번 발견과 다르다. 해당 note·표를 바꾸지 않아 재검토 조건도 발동하지 않았다.

### 이전 발견 추적

- 이전 최종 감사는 없다. 첨부된 계획 감사의 세 발견은 별도 번호 축으로 다음과 같이 대조했다.

<details>
<summary>계획 감사 발견 추적 표 펼치기</summary>

| 이전 발견 | 완료 기준 항목 | 판정 | 근거 |
|-----------|----------------|------|------|
| 계획 F-1 | low의 빠름·품질 저하·쉬운 문제 사고 생략 | 닫힘 유지 | docs·slides 양쪽 단계 행에 보존 |
| 계획 F-1 | QD·Task 기준에 요소 대조 | 닫힘 유지 | spec R2 QD·plan Task 2.3에 요소 대조 유지 |
| 계획 F-2 | 추가 단계 행 실패·정상 표 통과 | 닫힘 유지 | 모든 백틱 첫 칸을 모으는 수정 명령 유지, 실제 표 spec-2 통과 |
| 계획 F-2 | none·minimal·OpenAI 동시 검사 | 닫힘 유지 | 셋의 동시 존재 조건 유지, 실제 본문 spec-3 통과 |
| 계획 F-2 | 독립 high·발표자 노트 출처 검사 | 닫힘 유지 | 독립 토큰 경계·노트 범위 검사 유지, 실제 slides spec-13 통과 |
| 계획 F-3 | 공통 검사에 회귀 방지 표시 | 닫힘 유지 | 공통 세 항목 모두 표기 유지 |
| 계획 F-3 | 회귀 검사 역할·신설 증거 분리 | 닫힘 유지 | Task 2·3·5의 참조와 R1·R2·R9 내용 검사 유지 |

</details>

---

<details>
<summary>검증 실행 기록 펼치기</summary>

- spec bash 블록 19개와 plan bash 블록 10개를 확인했다. 셸 함수의 영향을 피하려 `/bin/bash --noprofile --norc`로 실행했다.
- spec의 19개 `[D]` 항목 모두 통과했다. 빌드 두 건은 원문 명령의 출력 억제를 풀어 실제 exit와 로그를 확인했으며 중복 빌드하지 않았다.
- plan 검사 10개 중 9개는 지정된 출력 0건 또는 숫자 0이다. Task 6 전체 status 검사만 감사 리포트 두 행을 출력했다(F-1).
- `check-plan.sh --trace`는 무출력·exit 0, `git diff main --check`도 무출력·exit 0이다.
- 최종 감사의 보존 리포트가 없음을 확인한 뒤 `next-finding-number.sh`를 인자 없이 실행해 `1`을 받았다. 계획 감사 번호는 합산하지 않았다.
- 위험도, PASS 항목 라벨, 46개 판정의 적합성 상태, LOW 1개의 위험도 상태, 최종 판정과 기본 처리 문구는 `classify-risk.sh`로 산출했다.
- 현재 세션 ID `01a100f6-927c-7ef0-af86-ecfcd9a6d10f`와 일치하는 rollout의 `turn_context`에서 `payload.model=gpt-6.1-sol`, `payload.effort=high`를 확인했다.
- GitHub 이슈 본문은 `gh issue view 61 --json number,title,body,url,state`로 읽었다. 로컬 자료·이전 계획 감사와 현행 spec의 승인된 변경을 함께 대조했다.
- 실행 중 콘텐츠·spec·plan·summary·원장은 수정하지 않았다. 최종 감사 리포트만 새로 작성하고 기존 계획 감사 리포트 두 개는 보존했다.

| 명령 | 결과 |
|------|------|
| spec-1~3, 5~8, 10~16 | 무출력·exit 0 |
| spec-4, 9, 19 | 무출력·exit 1 (grep 무매치, 지정 기준상 통과) |
| spec-17 | MkDocs strict 빌드 exit 0 |
| spec-18 | Slidev 빌드 exit 0 |
| plan-1, 3 | 무출력·exit 1 (grep 무매치, 지정 기준상 통과) |
| plan-2, 4, 5, 7, 8 | 무출력·exit 0 |
| plan-6 | 감사 리포트 미추적 두 행·exit 0 |
| plan-9, 10 | 숫자 `0`·exit 0 |

- 빌드 도구가 낸 일반 안내(Material의 MkDocs 차기 버전 안내, Vite의 임시 출력 경로 안내)는 이번 변경으로 발생한 빌드 실패로 집계하지 않았다.

</details>
