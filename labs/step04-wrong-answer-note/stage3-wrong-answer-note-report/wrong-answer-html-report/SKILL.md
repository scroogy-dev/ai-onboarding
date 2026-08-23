---
name: wrong-answer-html-report
description: 검수된 채점 결과 엑셀과 같은 디렉토리의 슬롯 템플릿 `wrong-answer-note-template.html`을 받아, 슬롯 치환과 PROBLEMS·SELF_CHECK 블록 반복으로 단일 HTML 리포트 파일을 작업공간에 저장한다. 데이터는 엑셀에서, 디자인·구조는 템플릿에서 가져온다. 사용자가 "오답노트 인쇄용 HTML 만들어줘", "이 엑셀로 학원 워크북 형태 만들어줘" 같은 요청을 할 때 사용한다.
---

# 오답노트 HTML 리포트 Skill

검수가 끝난 채점 결과 엑셀(이전 단계 `quiz-recognize` Skill의 출력 + 부모 검수)을 학원 워크북 톤의 HTML 1페이지로 변환한다. 디자인·CSS·구조는 같은 디렉토리의 슬롯 템플릿 `wrong-answer-note-template.html`을 그대로 따르고, 데이터는 엑셀에서 가져온다.

> **데이터·뷰 분리 원칙**: 본 Skill의 입력은 검수된 엑셀(데이터)이다. 자녀용 마크다운(`wrong-answer-note` Skill 출력)은 같은 데이터에서 갈라진 **평행 뷰**의 하나일 뿐이며, 본 Skill은 마크다운을 거치지 않고 엑셀에서 직접 HTML 뷰를 만든다. 같은 엑셀에서 마크다운(평문 뷰)과 HTML(인쇄 뷰)이 형제로 나오는 구조다.

## 입력값

| 입력 | 형태 | 출처 |
|------|------|------|
| 검수된 채점 결과 엑셀(또는 CSV) | 파일 첨부 또는 작업공간 파일 경로 | `quiz-recognize` Skill 출력 + 부모 검수 |
| 슬롯 템플릿 HTML | 작업공간 파일 ― 기본 `wrong-answer-note-template.html` | 본 Skill 디렉토리에 동봉 |
| 학생 이름 | (선택) 문자열 | 호출 prompt |
| 학원 이름·튜터 이름 | (선택) 문자열 | 호출 prompt |
| 정답 표 | (선택) 사진 또는 텍스트 ― 엑셀 정답 컬럼이 비어있을 때 보강 | 호출 prompt |
| 총문항수 | (선택) 정수 ― 미지정 시 엑셀 메타 또는 본문 행 수 | 호출 prompt |

엑셀 미첨부면 한 줄로 답한다 ― `검수된 채점 결과 엑셀을 첨부해 주세요.`
슬롯 템플릿이 작업공간에 없으면 한 줄로 답한다 ― `슬롯 템플릿 wrong-answer-note-template.html이 작업공간에 없습니다.`

## 처리 단계

### 1단계 ― 슬롯 템플릿 읽기

같은 디렉토리의 `wrong-answer-note-template.html`을 작업공간에서 읽는다. 다음 두 가지를 그대로 보존한다.

- `<head>` 전체 ― 폰트 로딩 `<link>`, `<style>` 블록, `<title>` 등
- 본문의 모든 CSS 클래스 이름·구조·인쇄 친화 `@media print` 규칙

### 2단계 ― 엑셀 컬럼·메타데이터 매핑

엑셀 상단 메타데이터(시트 또는 첫 5행)와 본문 컬럼을 다음과 같이 매핑한다.

**메타데이터 → 헤더 슬롯**

| 엑셀 메타 항목 | 슬롯 |
|--------------|------|
| 분석일 | `{{publish_date}}` (`YYYY-MM-DD` → `YYYY. MM. DD`), `{{doc_no}}`의 일자 부분 |
| 학년 | `{{grade_label}}`, `{{subject_grade_label}}` |
| 과목 | `{{subject_grade_label}}`, `{{subject_unit_label}}`, `{{doc_no}}`의 과목 이니셜 |
| 단원 | `{{unit}}`, `{{subject_unit_label}}` |
| 총문항수 | `{{total_count}}` (호출 입력값이 있으면 그 값 우선) |

**본문 컬럼 → 문항 카드 슬롯**

| 엑셀 컬럼 | 슬롯 (PROBLEMS / SELF_CHECK 블록 안) |
|-----------|------------------------------------|
| 문항번호 | `{{problem_number_padded}}` / `{{sc_problem_number_padded}}` (2자리 zero-padded) |
| 문제내용 | `{{problem_question_html}}` / `{{sc_problem_question_html}}` (수식 후보는 `<span class="formula">…</span>`로 감싸기 가능) |
| 학생답안 | `{{student_answer}}` / `{{sc_student_answer}}` |
| 정답 | `{{correct_answer}}` / `{{sc_correct_answer}}` |
| 개념태그 + 분석메모 오답유형 | `{{tags_html}}` / `{{sc_tags_html}}` (8단계 참조) |
| 학년·문제·답·분석메모 (Skill 자체 생성) | `{{why_html}}`·`{{steps_ol_html}}`·`{{key_point_html}}` / `{{sc_note_html}}`·`{{sc_key_point_html}}` (4단계 참조) |

### 3단계 ― 처리 범위 결정 (PROBLEMS / SELF_CHECK 분기)

엑셀 본문 행을 두 가지로 나눈다.

- **PROBLEMS** (오답): `정오: false` 인 모든 행
- **SELF_CHECK** (자체 체크): `정오: true ∧ 학생표시: 1` 인 모든 행
- 제외: `정오: true ∧ 학생표시: 0` (정답이고 자체 표시도 없음)
- 학생답안이 비어 있으면 `정오: false`(미기재)로 처리해 PROBLEMS에 포함
- 정답 컬럼이 비어 있고 호출 입력에도 정답 표가 없으면 그 행은 빈 칸으로 두고 응답 마지막에 한 줄 안내 (`<번호 목록> 문항은 정답 미상으로 비워뒀습니다.`)

### 4단계 ― 자녀 친화 해설 생성 (학년·과목 톤)

각 문항 카드에 대해 다음 슬롯의 본문을 자체 생성한다 ― `wrong-answer-note` 마크다운 Skill과 같은 말투 규칙을 따른다.

- `{{why_html}}` / `{{sc_note_html}}` ― `왜 헷갈렸을까?` 본문. 분석메모·학생답안의 오인 패턴을 보고 공감하는 말로 시작 (`~했구나. 그런데 사실은…` 형식). 강조 단어는 `<strong>`.
- `{{steps_ol_html}}` ― `이렇게 풀어 보자` 단계 풀이. 전체를 `<ol class="steps"><li>…</li>…</ol>`로 감싼다. 한 문항에 단계 5개 이내.
- `{{key_point_html}}` / `{{sc_key_point_html}}` ― `기억 포인트` 한 문장. `앞으로는 ~할 때 꼭 ~을 기억하자` 형식 권장.

말투·용어 규칙:

- 친근하고 따뜻하게 (`~했구나`, `~해 보자`, `잘 기억해 두자`).
- `틀렸다`·`실수했다` 반복 강조 금지.
- 어려운 개념어는 괄호로 짧게 풀이 (`통분(분모를 같게 만들기)`).
- 학년 어휘 ― 저학년(1~2)은 더 짧게·더 쉽게, 고학년(5~6)은 좀 더 자세히.

> 본 단계는 `wrong-answer-note` Skill이 마크다운 뷰에서 만드는 해설과 같은 책임이다 ― 같은 엑셀 위에서 마크다운 뷰와 HTML 뷰가 각자 독립적으로 자녀 톤 해설을 생성한다. 마크다운을 따로 만들어 둔 회차에서도 본 Skill은 마크다운을 참조하지 않고 엑셀에서 직접 만든다.

### 5단계 ― 스칼라 슬롯 채우기

템플릿의 `{{...}}` 슬롯을 다음 표에 따라 치환한다. 호출 입력값 → 엑셀 메타 → 기본값 순서.

| 슬롯 | 값 |
|------|------|
| `{{academy_initial}}` | 학원 이름 첫 글자 (영문 1자, 한글 1자). 미지정 `A` |
| `{{academy_name}}` | 학원 이름 또는 기본값 `Atrium · Academy` |
| `{{academy_subtitle}}` | 호출 입력값 또는 기본값 `Personalised Review Report` |
| `{{doc_no}}` | `<YYYYMMDD>·<과목 이니셜>·<순번>` 자동 생성 (예: `20260308·M·001`). 분석일과 과목으로 구성 |
| `{{publish_date}}` | 엑셀 메타 분석일 → `YYYY. MM. DD` |
| `{{publisher}}` | 호출 입력값 또는 기본값 `수석튜터팀` |
| `{{term_label}}` | 분석일의 학기 자동 생성 (예: `Spring Term 2026`). 미지정 가능 ― 빈 문자열 |
| `{{unit}}` | 엑셀 메타 단원 (없으면 `종합 복습`) |
| `{{subject_grade_label}}` | `<과목 영문 라벨> · Grade <학년> Review` 또는 한글 `<과목> · <학년>학년 복습` |
| `{{student_name}}` | 호출 입력값 또는 기본값 `학생` |
| `{{grade_label}}` | `초등 N학년` / `중학교 N학년` (학년 값에서 추정) |
| `{{subject_unit_label}}` | `<과목> · <단원 짧은 라벨>` |
| `{{tutor_name}}` | 호출 입력값 또는 기본값 `―` |
| `{{exec_summary_html}}` | **엑셀의 처리 범위(오답·자체체크) 행과 개념태그·분석메모를 보고 자동 생성한 한 단락(3~5문장)**. 자녀 학년 톤 유지. `<em>`으로 핵심 키워드 1~2개 강조 가능. **새로운 정보는 만들지 않고 엑셀 본문 요약만** |
| `{{total_count}}` | 호출 입력값 또는 엑셀 메타 총문항수 또는 본문 행 수 |
| `{{total_unit}}` | `문항` |
| `{{total_foot}}` | `총 <total_count>문제 진행` |
| `{{accuracy_percent}}` | `(total_count − 오답수) / total_count × 100` 정수 |
| `{{accuracy_foot}}` | `<정답수> / <total_count> 정답` |
| `{{focus_topic}}` | 처리 범위 행들의 개념태그 중 빈도 1위 키워드. 동률 시 첫 등장 |
| `{{focus_foot}}` | `<오답유형 또는 빈도 1위 개념> <오답수>건` |
| `{{self_check_count}}` | `정오: true ∧ 학생표시: 1` 행 수 |
| `{{self_check_unit}}` | `건` |
| `{{self_check_foot}}` | `자기점검 우수` (count > 0) 또는 빈 문자열 (count == 0, 단 이 경우 SELF_CHECK 블록은 통째로 제거되므로 stat foot도 적절한 라벨로 둠) |
| `{{review_count}}` | `오늘 챙길 문제: <오답수>문제 (<번호 목록>)` |
| `{{review_concepts}}` | 처리 범위 행들의 개념태그 합집합 (쉼표 구분) |
| `{{review_focus}}` | 분석메모의 오답유형 빈도 1위 (또는 빈도 1위 개념태그) |
| `{{review_recommendation}}` | 호출 입력값. **미지정 시 빈 문자열**(`<b>`는 비움. 엑셀에 없는 정보를 창작하지 않는다) |
| `{{tutor_opinion}}` | 호출 입력값. 미지정 시 빈 문자열 |
| `{{closing_quote_text}}` | 학년·정답률을 보고 한 문장 격려를 자체 생성 (자신감을 주는 톤) |
| `{{closing_cite}}` | `― 담당 튜터 <tutor_name>` (튜터 이름이 없으면 `― 함께 공부한 사람`) |
| `{{footer_left}}` | `<academy_name> · Confidential Tutoring Report` |
| `{{footer_signature}}` | 학원 이름의 영문/짧은 표현. 미지정 시 academy_name 그대로 |
| `{{page_no}}` | `― 1 / 1 ―` (한 페이지 고정) |

### 6단계 ― PROBLEMS 블록 반복

`<!-- PROBLEMS:START --> ... <!-- PROBLEMS:END -->` 사이의 한 단위는:

- `section-head` 1개 (PART · I "다시 살펴볼 문제")
- `<article class="problem">` 카드 1개 (슬롯 박힘)

처리:

1. 3단계의 PROBLEMS 분류 행을 추출한다.
2. 0건이면 `<!-- PROBLEMS:START -->`부터 `<!-- PROBLEMS:END -->`까지를 통째로 제거한다.
3. 1건 이상이면:
   - section-head는 그대로 1번만 둔다.
   - `.problem` 카드를 행 수만큼 복제하면서 슬롯을 채운다 ― `{{problem_number_padded}}`, `{{tags_html}}`(8단계), `{{problem_question_html}}`, `{{student_answer}}`, `{{correct_answer}}`, 4단계에서 만든 `{{why_html}}`·`{{steps_ol_html}}`·`{{key_point_html}}`.

### 7단계 ― SELF_CHECK 블록 반복

`<!-- SELF_CHECK:START --> ... <!-- SELF_CHECK:END -->` 사이의 한 단위도 동일 패턴.

1. 3단계의 SELF_CHECK 분류 행을 추출한다.
2. 0건이면 `<!-- SELF_CHECK:START -->`부터 `<!-- SELF_CHECK:END -->`까지를 통째로 제거한다. (PART · II 섹션 헤더 자체가 사라짐)
3. 1건 이상이면:
   - section-head는 1번만 둔다.
   - `.problem.self-check` 카드를 행 수만큼 복제하면서 슬롯을 채운다 ― `{{sc_problem_number_padded}}`, `{{sc_tags_html}}`(자체 체크 표시 태그 + 개념태그), `{{sc_problem_question_html}}`, `{{sc_student_answer}}`, `{{sc_correct_answer}}`, `{{sc_note_heading}}`(기본값 `내 메모` 또는 `<student_name>의 메모`), `{{sc_note_html}}`, `{{sc_key_point_html}}`.

### 8단계 ― 태그 HTML 생성

`{{tags_html}}` / `{{sc_tags_html}}`는 다음 형태로 생성한다.

```html
<span class="tag burgundy">오답</span>
<span class="tag">개념 오해</span>
<span class="tag gold">통분</span>
```

규칙:
- 오답 행: 첫 태그 `<span class="tag burgundy">오답</span>` 고정. 이후 분석메모에서 추정한 오답유형(개념 오해·계산실수·풀이과정오류 등) + 개념태그 1~2개.
- 자체 체크 행: 첫 태그 `<span class="tag green">정답 · 스스로 체크</span>` 고정. 이후 개념태그 1개.
- 태그 최대 3개.

### 9단계 ― 저장

완성된 HTML을 작업공간에 저장한다.

파일명: `wrong-answer-note-html-<과목>-<YYYY-MM-DD>.html`

### 10단계 ― 응답

저장된 파일 경로와 다음을 한 줄로 알려준다.

```
HTML 리포트 작성 완료. <경로>
다시 살펴볼 문제 <K>건, 스스로 체크 <M>건. 브라우저에서 열어 인쇄 → PDF로 저장하면 한 페이지로 출력됩니다.
```

## 호출 예시

사용자:

```
[quiz-recognized-quiz-2026-05-09-P12.xlsx 첨부]
학생: 김민준, 학원: Atrium Academy, 튜터: 이서연 선생님, 총문항수: 5
```

기대 동작:

- 작업공간의 `wrong-answer-note-template.html`을 슬롯 템플릿으로 읽는다.
- 엑셀 메타에서 분석일·학년·과목·단원 추출. 본문 컬럼에서 `정오: false` 행 2건, `정오: true ∧ 학생표시: 1` 행 1건 분류.
- 학년·문제·답·분석메모를 보고 자녀 친화 해설(왜 헷갈렸을까·이렇게 풀어 보자·기억 포인트)을 자체 생성.
- 스칼라 슬롯에 김민준·초등 4학년·이서연 선생님·Atrium Academy 등 채움. `{{exec_summary_html}}`은 엑셀 본문 요약(3~5문장) 자동 생성.
- 오답 문항 2건 → PROBLEMS 블록 안의 `.problem` 카드를 2번 복제. PART · I 헤더 1회.
- 자체 체크 문항 1건 → SELF_CHECK 블록 안의 `.problem.self-check` 카드 1개. PART · II 헤더 1회.
- 통계: 출제 5문항, 정답률 60%(3/5), 집중 영역 통분, 스스로 체크 1건.
- `wrong-answer-note-html-수학-2026-05-09.html` 저장.

## 추가 규칙

- 인사말·격려·결과 외 텍스트를 응답에 추가하지 않는다 (응답은 저장 결과 한 줄).
- **엑셀에 없는 정보를 창작해 채우지 않는다** ― 다음 학습 권장·튜터 의견 등이 호출 입력에도 없으면 빈 문자열로 둔다 (`<b></b>` 빈 칸).
- **자녀 친화 해설(왜 헷갈렸을까·이렇게 풀어 보자·기억 포인트)은 예외** ― 학년·문제·답·분석메모를 근거로 본 Skill이 자체 생성한다. 같은 데이터에서 마크다운 뷰가 만들던 해설을 HTML 뷰가 평행으로 만든다는 의미다.
- `wrong-answer-note-template.html` 외 다른 슬롯 템플릿(`minimal-template.html` 등)이 작업공간에 있으면 사용자가 prompt에 명시한 파일을 우선 사용. 미지정이면 기본 템플릿.
- 같은 엑셀로 다시 호출하면 새 파일을 만들지 않고 기존 파일을 갱신한다 (파일명 동일).

본 Skill의 핵심은 **데이터(엑셀)와 디자인(슬롯 템플릿)의 분리**다. 엑셀이 데이터의 단일 출처이고, 그 위에 마크다운 뷰(`wrong-answer-note` Skill)와 HTML 뷰(본 Skill)가 평행으로 갈라져 있다. 두 뷰는 서로를 참조하지 않으며, 같은 엑셀에서 각자 독립적으로 만들어진다.
