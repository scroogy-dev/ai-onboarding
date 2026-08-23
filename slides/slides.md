---
theme: default
layout: cover
title: AI 활용 온보딩
info: |
  비개발자를 위한 AI 활용 교육 슬라이드
  콘텐츠 SSoT는 docs/ 디렉토리이며, 본 슬라이드는 발표용 파생 표면입니다 (ADR-0002).
class: text-center
highlighter: shiki
colorSchema: light
drawings:
  persist: false
transition: slide-left
mdc: true
---

# AI 활용 온보딩

비개발자를 위한 AI 활용 교육

<div class="abs-br m-6 text-xl">
  <a href="https://github.com/scroogy-dev/ai-onboarding" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

<!--
환영 인사 + 본 교육의 청중(비개발자 임직원·학생/일반인)을 명확히 호명.
청중이 챗봇 AI 사용 경험은 있다는 가정을 환기: 1단계는 통과한 상태에서 시작한다는 점을 자연스럽게 깐다.
-->


---
layout: default
---

# 오늘의 흐름

<div class="text-xl mt-8 max-w-3xl mx-auto">

<div class="flex items-center mb-4">
<div class="font-mono text-2xl opacity-50 w-14">01</div>
<div class="font-bold w-44">Who</div>
<div class="opacity-80">누구를 위한 교육인가</div>
</div>

<div class="flex items-center mb-4">
<div class="font-mono text-2xl opacity-50 w-14">02</div>
<div class="font-bold w-44">Why</div>
<div class="opacity-80">왜 AI 활용을 배워야 하나</div>
</div>

<div class="flex items-center mb-4">
<div class="font-mono text-2xl opacity-50 w-14">03</div>
<div class="font-bold w-44">기본 용어와 범위</div>
<div class="opacity-80">챗봇·에이전트, 모델+하네스</div>
</div>

<div class="flex items-center mb-4">
<div class="font-mono text-2xl opacity-50 w-14">04</div>
<div class="font-bold w-44">도구와 제품</div>
<div class="opacity-80">생성형 AI 지형과 Claude</div>
</div>

<div class="flex items-center mb-4">
<div class="font-mono text-2xl opacity-50 w-14">05</div>
<div class="font-bold w-44">What</div>
<div class="opacity-80">얻어갈 것: 스스로 만드는 능력</div>
</div>

<div class="flex items-center mb-4">
<div class="font-mono text-2xl opacity-50 w-14">06</div>
<div class="font-bold w-44">How</div>
<div class="opacity-80">어떻게 진행되나</div>
</div>

<div class="flex items-center">
<div class="font-mono text-2xl opacity-50 w-14">07</div>
<div class="font-bold w-44">보안</div>
<div class="opacity-80">안전한 AI 사용</div>
</div>

</div>

<!--
오늘 90분 교육의 전체 흐름을 한눈에 보여주는 신호등.
docs SSoT 정합: Who → Why → [기본 용어와 범위 → 도구와 제품] → What → How → 보안. 개념(basics)·도구(intro)는 docs에선 별도 참조 페이지지만, 선형 강의에선 What·How가 기대는 어휘라 Why와 What 사이에 먼저 깐다.
복잡한 다이어그램보다 간결한 목차 한 장으로 정렬.
-->


---
layout: section
---

# Who

누구를 위한 교육인가요?

---

# 교육 대상

이 교육은 **챗봇 AI를 한 번이라도 써 본 적이 있는 분**을 대상으로 합니다.

단순한 질의응답을 넘어, AI를 본인의 업무·학습에 **좀 더 적극적으로 활용**하고 싶은 분에게 적합합니다.

| 트랙 | 어떤 분인가요? |
|------|--------------|
| **임직원(비개발자)** | 사내 AI 도구를 사용할 수 있는 직장인 |
| **비개발자 학생·일반인** | 학습·생활에 AI를 더 활용하고 싶은 분 |

---

# 공통 전제 + 자가 진단

두 트랙 모두 **챗봇 AI를 써 본 경험**이 있다고 가정합니다.
아래 3문항에 모두 **Yes**로 답할 수 있다면 **본 교육에 참여하실 수 있습니다.**

<div class="text-xl space-y-4 mt-10 max-w-3xl mx-auto">

<div class="flex items-start">
<div class="text-2xl mr-4 opacity-60 leading-none">☐</div>
<div>챗봇 AI에 한 번이라도 질문하고 답을 받아본 적이 있다</div>
</div>

<div class="flex items-start">
<div class="text-2xl mr-4 opacity-60 leading-none">☐</div>
<div>질문이 잘 안 통할 때 표현을 바꿔서 다시 물어본 경험이 있다</div>
</div>

<div class="flex items-start">
<div class="text-2xl mr-4 opacity-60 leading-none">☐</div>
<div>AI의 답이 부정확하거나 부족하다고 느낀 적이 있다</div>
</div>

</div>

<div class="mt-12 text-center text-sm opacity-70">
경험이 전혀 없다면 먼저 챗봇 AI를 몇 차례 사용해 본 뒤 참가하시길 권장합니다.
</div>

<!--
공통 전제(통보)를 자가 진단(능동 체크)과 결합: 학습자가 자기 위치를 직접 인식.
"3문항 다 Yes" = 1단계 통과: 본 교육이 2·3단계 초점이라는 What 섹션 흐름과 연결.
-->


---

# 학생 트랙 범위 안내

<div class="border-l-4 border-orange-400 pl-6 py-4 my-8 bg-orange-50 dark:bg-orange-900/15 rounded-r">

⚠️ **개발 진로를 희망하는 학생**은 본 교육의 **대상이 아닙니다.**

프로그래밍·개발에 특화된 별도 교육을 수강하시기를 권장합니다.

</div>

---

# 본 교육이 강화하는 역량 ― 개인

<div class="border-l-4 border-blue-400 pl-6 py-4 my-8 bg-blue-50 dark:bg-blue-900/15 rounded-r">

AI 활용으로 강화할 수 있는 역량은 **세 가지**입니다.

- **개인 역량 강화**: 본인의 업무·학습·일상 효율 *(본 교육의 초점)*
- **조직 역량 강화**: 팀·전사 차원의 AI 도입·거버넌스
- **제품·서비스 역량 강화**: 자사 제품·서비스에 AI 기능을 제품화

본 교육은 **개인 역량 강화**에 집중합니다. 조직 도입·제품화는 본 교육 범위 밖입니다.

</div>

---

# 사전지식

<div grid="~ cols-2 gap-4" class="mt-8">

<div class="rounded-lg overflow-hidden border border-green-200 dark:border-green-800">
<div class="bg-green-100 text-green-800 px-4 py-2 font-bold text-center">✅ 요구합니다</div>
<div class="bg-green-50 dark:bg-green-900/15 px-4 py-4">

- 기본 컴퓨터 조작 (파일 업·다운로드, 웹 브라우저)
- 기본적인 웹 검색
- 챗봇 AI와 짧은 대화를 해 본 경험

</div>
</div>

<div class="rounded-lg overflow-hidden border border-red-200 dark:border-red-800">
<div class="bg-red-100 text-red-800 px-4 py-2 font-bold text-center">❌ 요구하지 않습니다</div>
<div class="bg-red-50 dark:bg-red-900/15 px-4 py-4">

- 프로그래밍·코딩 지식
- 프롬프트·컨텍스트·하네스 엔지니어링 이론
- 특정 AI 도구의 고급 기능 숙련도

</div>
</div>

</div>

---

# 준비사항 ― 유료 플랜 필수 <span class="opacity-50 text-2xl">(트랙별로 다름)</span>

<div class="border-l-4 border-red-400 pl-6 py-3 my-4 bg-red-50 dark:bg-red-900/15 rounded-r">

⚠️ 모든 실습은 Claude에서 진행: Cowork · Code 사용에 **유료 플랜이 반드시 필요합니다.**

</div>

<div grid="~ cols-2 gap-4" class="mt-2">

<div class="border-l-4 border-blue-400 pl-4 py-3 bg-blue-50 dark:bg-blue-900/15 rounded-r">

**학생·일반인 (개인)**

**Claude Pro 이상** (Pro·Max) 개인 플랜

</div>

<div class="border-l-4 border-red-400 pl-4 py-3 bg-red-50 dark:bg-red-900/15 rounded-r">

**임직원 (회사 업무)**

❌ **개인 플랜 절대 금지** <span class="opacity-70">(무료·유료)</span><br/>→ **반드시 회사 Team / Enterprise**

</div>

</div>

<div class="text-sm opacity-70 mt-4">

플랜 안내: [claude.com/pricing](https://claude.com/pricing) · 계정·결제(임직원은 사내 계정 발급)는 **교육 시작 전** 완료

</div>

<!--
임직원은 개인 플랜 전부(무료·Pro·Max) 금지: 회사 계정으로 가입했더라도 개인 플랜이면 금지. 회사 업무·자료를 개인 플랜에서 다루지 않기 위함. 회사가 계약한 Team/Enterprise로만 진행. 배경은 보안 파트 「엔터프라이즈 AI」 슬라이드와 정합.
-->

---

# 준비물 분담

<div grid="~ cols-2 gap-4" class="mt-6">

<div class="border-l-4 border-blue-400 pl-4 py-3 bg-blue-50 dark:bg-blue-900/15 rounded-r">

**참가자가 준비**

- 개인 노트북 (웹 브라우저)
- 본인이 반복하는 업무·학습 작업 **1개 아이디어**
- **유료 Claude 플랜**: 개인 Pro↑ / **임직원 회사 Team·Enterprise (❌ 개인 플랜 절대 금지)**
- **Claude Desktop 설치**
- (임직원) 사내 AI 도구 로그인 사전 확인

</div>

<div class="border-l-4 border-gray-400 pl-4 py-3 bg-gray-50 dark:bg-gray-700/20 rounded-r">

**강사가 준비** <span class="opacity-60 text-sm">(참가자는 신경 쓰지 않아도 됩니다)</span>

- 실습용 **가상 데이터** (개인정보 미포함)
- 실습 가이드 자료
- 진행 슬라이드

</div>

</div>


---
layout: section
---

# Why

왜 AI 활용을 배워야 할까요?

---
layout: center
class: text-center
---

<div class="text-xl opacity-60 mb-4">AI 활용을 배워야 하는 이유 ①</div>

# 시간 절약

<div class="mt-12 text-3xl font-bold">
나의 1시간은 얼마입니까?
</div>

<div class="mt-12 text-xl max-w-3xl mx-auto opacity-90">

매일 반복되는 하루 1시간을 아낄 수 있으면 **1년에 250시간**입니다.

<div class="text-base opacity-70 mt-2">(연평균 근무일수 250일 가정)</div>

</div>

<div class="mt-10 text-2xl opacity-80">
가장 소중한 자원은 <strong>시간</strong>입니다.
</div>

<!--
N-1 ① 시간 절약: 즉각 효용 카피.
"하루 1시간 × 250일 = 250시간" 누적 환산은 비개발자 청중에게 가장 빠르게 와닿는 동기.
도발 톤 보존: "당신의 1시간은 얼마입니까" 질문형으로 청중을 자기 시간 가치 계산에 끌어들임.
-->


---
layout: center
class: text-center
---

<div class="text-xl opacity-60 mb-4">AI 활용을 배워야 하는 이유 ②</div>

# 직업적 생존

<div class="mt-12 text-3xl font-bold leading-tight">
AI는 나를 대체하지 않습니다.<br/>
<span class="text-red-400">AI를 잘 쓰는 사람</span>이 나를 대체합니다.
</div>

<div class="mt-16 text-xl opacity-90 max-w-3xl mx-auto">
채용·평가·성과의 <strong>기준선</strong>이 빠르게 이동하고 있습니다.
</div>

<!--
N-1 ② 직업적 생존: 위기감 카피.
임직원·학생 무관 통용. 학생도 취준·평가 맥락에서 체감 가능.
"AI를 잘 쓰는 사람이 나를 대체합니다"는 도발 톤 그대로 유지. 청중이 잠깐 멈칫하는 자리.
F-1 합의: 트랙 분리 없이 동일 강도.
-->


---
layout: center
class: text-center
---

<div class="text-xl opacity-60 mb-4">AI 활용을 배워야 하는 이유 ③</div>

# 능력의 확장

<div class="mt-12 text-3xl font-bold">
이제 코딩을 몰라도,<br/>나의 일을 자동화할 수 있습니다.
</div>

<div class="mt-12 text-xl max-w-3xl mx-auto opacity-90">

대규모 시스템은 어려울 수 있지만,
본인 업무·학습·일상에 쓰는<br/>
<strong>개인용 자동화(소프트웨어)</strong>는 비개발자에게도 열렸습니다.

</div>

<!--
N-1 ③ 능력의 확장: 해결책 카피. 본 교육 본질 메시지(ADR-0005)의 직접 표현.
"자신의" 한정으로 대규모 개발 오해 회피: "개인용 자동화" 명시.
다음 슬라이드(소프트웨어가 만드는 가치)로 자연 연결: "왜 이게 가치 있나" → 가치 3축으로.
-->


---

# 소프트웨어가 만드는 가치

우리가 매일 쓰는 소프트웨어는 **세 가지 방식**으로 가치를 만듭니다.

<div grid="~ cols-3 gap-4" class="mt-8">

<div class="rounded-lg overflow-hidden border border-blue-200 dark:border-blue-800">
<div class="bg-blue-100 text-blue-800 px-4 py-2 font-bold text-center">기능 제공</div>
<div class="bg-blue-50 dark:bg-blue-900/15 px-4 py-4">

할 수 없거나 어려웠던 일을 **가능하게**

<div class="text-sm opacity-75 mt-3">
실시간 번역 · 네비게이션
</div>

</div>
</div>

<div class="rounded-lg overflow-hidden border border-green-200 dark:border-green-800">
<div class="bg-green-100 text-green-800 px-4 py-2 font-bold text-center">시간 절약</div>
<div class="bg-green-50 dark:bg-green-900/15 px-4 py-4">

사람이 하면 오래 걸리던 일을 **짧은 시간에**

<div class="text-sm opacity-75 mt-3">
기차표 예매 · 인터넷 뱅킹
</div>

</div>
</div>

<div class="rounded-lg overflow-hidden border border-orange-200 dark:border-orange-800">
<div class="bg-orange-100 text-orange-800 px-4 py-2 font-bold text-center">비용 감소</div>
<div class="bg-orange-50 dark:bg-orange-900/15 px-4 py-4">

사람·장소·이동 등에 드는 **비용 절감**

<div class="text-sm opacity-75 mt-3">
인터넷 뱅킹 · 키오스크 · 화상회의
</div>

</div>
</div>

</div>

<div class="mt-8 text-center text-lg opacity-90">
AI가 등장하면서 이 가치를 만드는 길이 <strong>비개발자에게도 열렸습니다.</strong>
</div>

<!--
W1 보존 (위계 ↓): 개인 동기(N-1) 다음의 거시 배경.
마무리 한 줄("비개발자에게도 열렸습니다")은 W2 진입장벽 메시지를 흡수한 것: 다음 What 섹션 본질 메시지로 자연 연결.
도구 우회 표현 회피, "소프트웨어"는 정직 사용.
-->


---
layout: section
---

# 기본 용어와 범위

챗봇·에이전트, 모델+하네스, 결과물의 성격

<!--
docs 「기본 용어와 범위」(basics.md) 정합: 개념 블록 오프너. Why → [개념 → 도구] → What 흐름의 앞단.
핵심 개념(챗봇/에이전트 · 모델+하네스 · 결과물의 성격 · 마크다운/외부컨텍스트)을 먼저 깐다.
docs S5 축 재분류(개념 vs 도구)에 맞춰 이어지는 「도구와 제품」 섹션과 분리. 선형 강의 특성상 What·How가 기대는 어휘를 여기서 먼저 깔고, What 섹션의 「3단계 모델」이 이 어휘를 학습 단계로 매핑한다.
-->


---

# 챗봇 vs 에이전트 ― 「물어보기」 vs 「맡기기」

<div grid="~ cols-2 gap-4" class="mt-8">

<div class="rounded-lg overflow-hidden border border-cyan-200 dark:border-cyan-800">
<div class="bg-cyan-100 text-cyan-800 px-4 py-2 font-bold text-center">챗봇: 물어보기</div>
<div class="bg-cyan-50 dark:bg-cyan-900/15 px-4 py-4">

사람이 묻고 AI가 답합니다

실제 처리는 **사람이 직접**

**본 교육: 1단계** (참가 전제)

</div>
</div>

<div class="rounded-lg overflow-hidden border border-emerald-200 dark:border-emerald-800">
<div class="bg-emerald-100 text-emerald-800 px-4 py-2 font-bold text-center">에이전트: 맡기기</div>
<div class="bg-emerald-50 dark:bg-emerald-900/15 px-4 py-4">

AI가 직접 파일을 열고 작업

사람은 **목표만 정해 주고 검토**

**본 교육: 3단계** (Claude Cowork)

</div>
</div>

</div>

<div class="mt-6 text-center text-base opacity-80">
같은 일을 매번 시키지 않고 <strong>한 번 맡기게</strong> 만드는 것이 본 교육의 방향입니다.
</div>

<!--
시장 분류 차원의 「챗봇 vs 에이전트」: 물어보기 vs 맡기기의 차이를 여기(개념 블록)서 한 번만 정의. 단계 매핑은 What 섹션 「3단계 모델」이 1·2·3단계로 풀어냄(중복 슬라이드 제거, docs S5 "한 집" 정합).
이 슬라이드가 어휘(챗봇/에이전트)를 깔고, 구체 적용은 모델+하네스와 What 3단계로 이어짐.
-->


---

# 에이전트 = 모델 + 하네스

<div class="text-sm opacity-80 mt-2">앞의 「챗봇 vs 에이전트」에서 본 그 <strong>에이전트</strong>는 무엇으로 이뤄져 있을까요? 딱 두 부분입니다.</div>

<div grid="~ cols-2 gap-4" class="mt-5">

<div class="rounded-lg overflow-hidden border border-blue-200 dark:border-blue-800">
<div class="bg-blue-100 text-blue-800 px-4 py-2 font-bold text-center">모델: 생각하는 머리</div>
<div class="bg-blue-50 dark:bg-blue-900/15 px-4 py-4 text-sm">

똑똑하지만 **틀릴 수 있고**, 매번 답이 조금씩 다를 수 있는 부분.

만드는 회사는 여럿 (Anthropic·OpenAI·Google): 실습은 Claude.

</div>
</div>

<div class="rounded-lg overflow-hidden border border-emerald-200 dark:border-emerald-800">
<div class="bg-emerald-100 text-emerald-800 px-4 py-2 font-bold text-center">하네스: 사람이 짜 둔 틀</div>
<div class="bg-emerald-50 dark:bg-emerald-900/15 px-4 py-4 text-sm">

어떤 도구·자료를 쓸지, 어떤 순서로, 결과를 어디서 확인할지.

**대부분 이미 있는 걸 고르고·잇고·정하는 일**입니다. 내 몫은 얇습니다.

</div>
</div>

</div>

<div class="mt-5 rounded-lg border border-amber-200 dark:border-amber-800 px-4 py-3 bg-amber-50 dark:bg-amber-900/15 text-sm">
<strong>⚠ 흔한 오해</strong>: "에이전트끼리 알아서 회의하면 좋은 결론이 나온다" → <strong>아닙니다.</strong> 틀은 사람이 설계했고, 모델은 틀릴 수 있으며, 좋은 결론은 <strong>틀을 짠 사람 + 검토한 사람</strong>이 만듭니다.
</div>

<!--
이슈 #42 본체: docs/basics.md 「에이전트 = 모델 + 하네스」 슬라이드 압축.
핵심: 에이전트 자율성 오해 해소: 좋은 결과는 창발이 아니라 「조립 + 사람 검토」.
앞 「챗봇 vs 에이전트」(에이전트=맡기기)에서 이어짐: 그 에이전트가 무엇으로 이뤄졌나.
하네스 출처는 셋(회사 제품·모델 / 외부 서비스 연결 / 내 설정)이지만 슬라이드는 「사람이 짜 둔 틀」로 압축.
멀티에이전트 긍정 사례(역할 분업 + 명시적 기준 + 사람 검토)는 발화로 보충: 단일 에이전트로도 핵심 획득 가능.
viewport 점검 필요: 2카드 + 오해 박스가 한 화면에 들어가는지 사용자 확인.
-->


---

# 결과물의 성격 ― 1회성 · 스킬 · 애플리케이션

<div class="mt-2 rounded-lg border border-amber-200 dark:border-amber-800 px-4 py-2 bg-amber-50 dark:bg-amber-900/15 text-sm">
<strong>⚠ 생성형 AI는 기본적으로 비결정적입니다</strong>. 같은 지시에도 매번 답이 조금씩 다를 수 있습니다.
</div>

<div class="mt-3 text-xs">

| | 1회성 프롬프트 | 에이전트 스킬 *(본 교육)* | 애플리케이션 *(개인용 웹앱까지 본 교육)* |
|---|---|---|---|
| **무엇** | 챗봇에 그때그때 입력하는 한 번짜리 지시 | 자주 쓰는 프롬프트·절차를 재사용 자산으로 묶음 | 코드로 작성된 프로그램 |
| **결정성** | 비결정 | 비결정 *(내부 LLM)* | 결정 |
| **결과 일관성** | 매번 결과가 조금씩 다름 | 형식·접근 보장 *(값은 다를 수 있음)* | 동일 입력 → 동일 출력 |
| **만드는 비용·누가** | 없음: 누구나 즉시 | 낮음: **비개발자도 직접** | 개인용 웹앱은 낮음, 그보다 크면 큼: 설계·코드·테스트 필요 |
| **언제 적합** | 일회성·탐색·맥락이 매번 다른 작업 | 반복되는 동일 패턴 작업 | 대규모·다수 사용자·결정적 신뢰성 |

</div>

<div class="mt-2 text-center text-xs opacity-90">
<strong>에이전트 스킬</strong>은 두 끝점 사이: 비개발자가 만들 수 있는 비용 + 반복 일관성 보장
</div>

<div class="mt-1 text-center text-xs opacity-80">
애플리케이션은 <strong>내 컴퓨터에서 열리는 HTML·자바스크립트 웹앱까지</strong>가 본 교육입니다. 여러 사람이 쓰거나 서버·설치·배포가 필요하면 범위 밖입니다.
</div>

<!--
docs/basics.md 「결과물의 성격」(구 「AI 활용의 세 형태」) 슬라이드 압축 (이슈 #40): ADR-0002 단방향 파생. 이름 개명은 「AI 활용 3단계」와의 echo 제거(이슈 #42).
ADR-0005 §3 운용 변경 후속: 본문 기본은 결과형 유지, 「비결정」 메커니즘 단어 명시는 이 슬라이드 1곳에 한정(단정 박스 + 표 「결정성」 행 두 자리).
nav 위치(개념 블록): 「에이전트 = 모델 + 하네스」 직후, 「기본 용어와 범위」 카드 앞: docs basics 개념 순서(챗봇/에이전트 → 모델+하네스 → 결과물의 성격) 정합. 「3단계」와 별개의 구분임은 뒤따르는 3단계 슬라이드에서 back-ref.
이슈 #50 범위 경계 이동(2026-08-23): 애플리케이션 전체를 범위 밖으로 두던 기준을 「개인용이면서 HTML·자바스크립트만으로 동작하는 웹앱까지 범위 안」으로 옮김. docs/basics.md #three-forms 정합.
viewport 점검 필요: 5축×3종 표가 가로폭·세로폭에 다 들어가는지 사용자 확인. 경계 한 줄과 비용 칸이 길어져 재점검 대상.
-->


---

# 그 밖의 기본 용어 ― 마크다운 · 외부 컨텍스트

> 사이트·슬라이드에서 만나게 될 **두 용어**와, **본 강의가 다루지 않는 영역**을 한 번에 짚습니다.

<div class="mt-6 grid grid-cols-2 gap-4 max-w-4xl mx-auto">

<div class="rounded-lg overflow-hidden border border-slate-300 dark:border-slate-700">
<div class="bg-slate-100 text-slate-800 px-3 py-2 font-bold text-center text-sm">마크다운</div>
<div class="bg-slate-50 dark:bg-slate-900/15 px-3 py-3 text-xs">

텍스트만으로 서식을 표현하는 가벼운 문서 형식. <code>.md</code>, AI 출력 포맷의 단골.

<code>#&nbsp;제목</code> → 큰 제목, <code>**굵게**</code> → **굵게**.

→ **문법 학습은 안 합니다.**

</div>
</div>

<div class="rounded-lg overflow-hidden border border-slate-300 dark:border-slate-700">
<div class="bg-slate-100 text-slate-800 px-3 py-2 font-bold text-center text-sm">외부 컨텍스트: MCP·RAG</div>
<div class="bg-slate-50 dark:bg-slate-900/15 px-3 py-3 text-xs">

내 자료를 AI에 붙여 답하게 하는 **일반 개념**.

**MCP** <span class="opacity-60">(Model Context Protocol)</span>: 어떻게 연결.<br/>
**RAG** <span class="opacity-60">(Retrieval-Augmented Generation)</span>: 무엇을 하느냐.

→ **설치·내부 구조 모두 범위 밖.**

</div>
</div>

</div>

<div class="mt-5 text-center text-sm opacity-80">
사이트 페이지 <code>기본 용어와 범위</code>에서 더 자세히 짚을 수 있습니다.
</div>

<!--
docs/basics.md 「기본 용어와 범위」 페이지 1장 압축: ADR-0002 단방향 파생.
두 용어(마크다운 / 외부 컨텍스트)를 가로 2분할 카드로 한 슬라이드에 묶음. (바이브↔에이전틱은 docs와 함께 제거: 비개발자 실익 낮음)
메타 원칙 5장(②blue / ③purple / ④teal / ⑤emerald·amber)과는 색상(slate 회색조)·비중(작은 카드 2분할) 분리: 「원칙」이 아닌 「용어 해소·범위 밖 안내」 결.
청중 메시지: 「이 단어들이 본 강의에 나오면 멈추지 마세요. 다만 본격 학습·설치·내부 구조는 본 강의 밖입니다.」
nav 위치(개념 블록 끝): 「결과물의 성격」 직후, 도구 블록(Claude 3종) 앞. docs는 개념(기본 용어와 범위) → 도구(도구와 제품) 순으로 정합.
-->


---
layout: section
---

# 도구와 제품

생성형 AI 지형과 Claude

<!--
docs 「도구와 제품」(intro.md) 정합: 도구 블록 오프너. 개념 블록(기본 용어와 범위) 다음, docs S5 축 재분류(개념 vs 도구)에 맞춰 분리.
구성: 시장 지형(제품 지형) → Claude 3종 → 기능비교 → 모델 → 사용량 확인 (docs intro 순서 정합).
-->


---

# 챗봇은 다 아는데... 짝꿍 에이전트는?

| 회사 | AI 챗봇 (보통 아는 것) | AI 코딩 에이전트 |
|------|----------------------|------------------|
| **Anthropic** | **Claude** | **Claude Code** |
| OpenAI | ChatGPT | Codex |
| Google | Gemini | Antigravity |

같은 회사의 챗봇과 에이전트는 **짝으로 묶여** 있습니다. 청중이 챗봇은 익숙해도, **본격 자동화 무대인 에이전트** 쪽은 잘 모르는 경우가 많습니다.

> Anthropic은 비개발자용 에이전트 **Claude Cowork**도 함께 제공: 본 교육 3단계 본격 도구.

<!--
시장 좌표 정렬(도구 블록 오프너): 챗봇 3사는 다 아는 것, 짝꿍 에이전트가 새로 도입할 개념. 개념 블록에서 정의한 챗봇/에이전트를 실제 시장 제품으로 확장하는 자리.
표 헤더에서 「AI 챗봇」·「AI 코딩 에이전트」로 한 번 결합 안내: 본문은 짧은 형태(챗봇/에이전트) 유지.
본 교육이 Anthropic 짝을 쓰는 이유는 Cowork(비개발자용 에이전트)의 존재: 이 한 줄로 다음 슬라이드 「본 교육의 도구 ― Claude 3종」으로 진입.
1단계 챗봇 경험은 Claude/ChatGPT/Gemini 어느 것이든 비슷한 감각을 준다는 점은 발화로 보충.
-->


---

# 본 교육의 도구 ― Claude 3종

| 제품 | 무엇 | 본 교육 단계 |
|------|------|------------|
| **claude.ai** | 웹·모바일 챗봇 | 1단계 (참가 전제) |
| **Claude Cowork** | 데스크톱 범용 에이전트 | **3단계 본격 실습** |
| **Claude Code** | 터미널·IDE 코딩 에이전트 | 3단계 보조 (옵션) |

> Cowork·Code는 **유료 플랜 + Claude Desktop** 필요 (개인 Pro↑·임직원 회사 Team/Enterprise): Who 섹션의 「준비사항」 슬라이드에서 다룸.

<style>
table { font-size: 0.9em; }
</style>

<!--
ADR-0001 정합: Claude 단독·3단계 모델.
docs/intro.md의 3종 비교표를 슬라이드 압축. 「무엇 / 단계」만 한 줄.
Cowork이 3단계 본격 무대, Code는 진입 장벽이 있어 옵션 안내라는 점이 핵심.
다음 슬라이드(기능 비교)에서 「로컬 파일·터미널 접근」이 챗봇과 에이전트를 가르는 분기선임을 시각화하고, 이어 모델 라인업·사용량 확인으로 넘어간다 (docs intro 순서: 기능비교 → 모델 → 사용량 정합).
-->


---

# 기능 비교 ― 챗봇과 에이전트의 분기선

| 기능 | claude.ai | Claude Cowork | Claude Code |
|:-----|:---------:|:-------------:|:-----------:|
| 웹 검색 | ✓ | ✓ | ✓ |
| 대화에 파일 업로드 | ✓ | ✓ | ✓ |
| **파일·시스템 접근** | ✗ | △ 연결 폴더만 | ✓ 전체 |
| **터미널 명령 실행** | ✗ | △ 격리 VM | ✓ 전체 |
| Agent Skills | ✓ | ✓ | ✓ |
| MCP 연동 (외부 도구·데이터) | △ Connectors | ✓ | ✓ 전체 |
| 외부 API 호출 | ✗ | △ 송신 정책 | ✓ 전체 |

<div class="text-sm opacity-80 mt-3">

**범례**: ✓ 지원 · △ 제한적·조건부 · ✗ 미지원 &nbsp;·&nbsp; **굵은 행** = 챗봇/에이전트 분기선

</div>

<style>
table { font-size: 0.72em; }
table th, table td { padding: 0.35em 0.5em; }
</style>

<!--
docs/intro.md의 「기능 비교 ― 한눈에」(#claude-comparison) 표 슬라이드 옮김. 핵심 메시지는 「로컬 파일·터미널 접근 여부 = 챗봇과 에이전트의 분기선」.
- claude.ai: 파일·터미널·외부 API 모두 ✗ → 1단계 챗봇 영역에 머묾.
- Cowork: △ 표시는 모두 「3중 보호」 모델. 연결 폴더만 / 격리 VM / 송신 정책 (자세한 내용은 docs/intro.md의 「Cowork의 보호 모델」 admonition 참조).
- Code: ✓ 전체 = 개발자 환경 전체 권한 → 진입 장벽 있어 본 교육에서는 옵션 안내.
Cowork의 「△」가 「제한」이 아닌 「제어된 안전 동작」임을 발화로 보충: 비개발자가 가장 안전하게 에이전트를 쓸 수 있는 도구라는 메시지.
nav 위치(도구 블록): Claude 3종 직후, 모델 라인업 앞. docs intro 순서(기능비교 → 모델 → 사용량) 정합.
-->


---

# 모델은 어떤 걸 쓸까 ― Fable · Opus · Sonnet · Haiku

| 라인업 | 한 줄 포지션 | 어울리는 상황 |
|--------|-------------|---------------|
| **Fable** | 가장 똑똑함: 최상위 (새로 추가) | 가장 어려운 문제, 장시간 자율 작업 |
| **Opus** | 깊은 추론의 기본 | 본인도 잘 모르는 주제 의논, 다단계 작업 |
| **Sonnet** | 균형: 일상 기본 | 검색·요약·찾아바꾸기 등 지시 이행 |
| **Haiku** | 가장 빠름 | 짧은 답·반복 |

> 기준은 **추론이 얼마나 필요한가**: 헷갈리면 Sonnet으로 시작, 추론이 더 필요하면 Opus, 가장 어려운 문제는 Fable.

<div class="text-sm opacity-80 mt-3">

버전 번호(Fable 5·Opus 5 등)는 자주 갱신: 라인업만 기억하고 최신 사양은 docs. 사용량·한도 확인은 <strong>다음 슬라이드</strong>에서.

</div>

<style>
table { font-size: 0.85em; }
</style>

<!--
docs/intro.md 「모델 비교 ― Fable · Opus · Sonnet · Haiku」(#claude-models)의 슬라이드 압축. 핵심 축은 「추론 vs 지시 이행」.
- Fable: 기존 세 라인업 위에 추가된 최상위 모델 (대체 아님). 가장 어려운 문제·장시간 자율 작업. Opus로도 부족할 때.
- Opus: 본인도 잘 모르는 주제·다단계. 추론이 핵심일 때.
- Sonnet: 일상 기본값. 검색·요약·찾아바꾸기 같은 지시 이행 작업.
- Haiku: 짧은 답·반복.
버전 번호(Fable 5·Opus 5 등)는 본문 생략: 라인업 시그니처가 안정, 버전은 자주 갱신되므로 docs로 위임.
사용량은 다음 슬라이드(사용량 확인)로: docs intro가 모델 다음에 사용량을 두는 순서와 정합.
-->


---

# Claude 사용량 확인하기

플랜 한도는 **두 화면**으로 봅니다: *한도 숫자*(설정)와 *누적 사용량*(Code 탭).

<div grid="~ cols-2 gap-4" class="mt-6">

<div class="rounded-lg overflow-hidden border border-blue-200 dark:border-blue-800">
<div class="bg-blue-100 text-blue-800 px-4 py-2 font-bold text-center text-sm">① 한도 숫자: 설정 → 사용량</div>
<div class="bg-blue-50 dark:bg-blue-900/15 px-4 py-3 text-sm">

claude.ai 웹·Claude Desktop 공통.

- **5시간 한도**: 전체 모델 기준 사용량·남은 시간
- **주간 한도**: 전체 모델 기준 사용량·재설정 시점

</div>
</div>

<div class="rounded-lg overflow-hidden border border-emerald-200 dark:border-emerald-800">
<div class="bg-emerald-100 text-emerald-800 px-4 py-2 font-bold text-center text-sm">② 누적 사용량: Code 탭 → 사용량 링</div>
<div class="bg-emerald-50 dark:bg-emerald-900/15 px-4 py-3 text-sm">

Claude Desktop의 **Code 탭 → 사용량 링**(모델 표시 옆).

- **개요**: 세션·메시지·토큰·연속 일수
- **모델**: 일별·모델별(Fable·Opus·Sonnet·Haiku) 토큰 분포

</div>
</div>

</div>

<div class="border-l-4 border-emerald-400 pl-6 py-2 my-4 bg-emerald-50 dark:bg-emerald-900/15 rounded-r text-sm">

🛠️ 추론이 많이 필요한 작업과 단순 지시 이행은 사용량 차이가 큽니다. 작업 성격에 맞춰 모델을 골라 보세요. claude.ai · Cowork · Code는 **하나의 한도 풀**을 함께 씁니다.

</div>

> 공식 안내: [Claude Code Desktop ― 사용량 확인하기](https://code.claude.com/docs/ko/desktop#check-usage) · 화면 캡처는 `docs/intro.md#claude-usage`

<!--
docs/intro.md 「사용량 확인 방법」(#claude-usage) 슬라이드 압축: ADR-0002 단방향 파생.
두 화면(① 한도 숫자 = 설정→사용량 / ② 누적 사용량 = Code 탭→사용량 링)으로 docs 구조와 정합.
이미지·화면 캡처는 사이트에 두고 본 슬라이드는 메시지 카드로 유지. UI 변경 시 docs/intro.md가 캡처 갱신 책임 자리.
nav 위치(도구 블록 끝): 모델 라인업 직후. docs intro가 기능비교 → 모델 → 사용량 순인 것과 정합. Who 「준비사항」에서 이리로 옮김(docs도 Who에선 intro로 링크만 둠).
viewport 점검 필요: 2카드 + 박스 + 인용구가 한 화면에 들어가는지 사용자 확인.
-->


---
layout: section
---

# What

이 교육에서 얻어갈 것

---
layout: center
class: text-center
---

<div class="text-2xl opacity-60 mb-8">교육 목표</div>

# 반복해서 쓸 수 있는 것을<br/>**스스로 만들 수 있게** 된다

<div class="mt-12 text-xl opacity-90">

이론 학습이 아닌, 교육 후에도 **스스로 반복 활용할 결과물을 만들 수 있는 능력**

</div>

<div class="mt-8 text-base opacity-75 max-w-2xl mx-auto">

💡 출발점은 <strong>본인이 매주 반복하는 30분 ~ 1시간짜리 작업 1개</strong>가 좋습니다.

</div>

<!--
이 교육 전체가 약속하는 단 하나의 결과물.
"많이 배우는 것"이 아니라 "스스로 만들 수 있게 되는 것"이 목표: 그 역량의 출발점이 1개를 끝까지 만드는 경험(docs 교육 목표 역량-중심 개정 정합).
출발점 예시 한 줄(30분짜리 작업)로 "어떤 1개?"의 모호함을 손에 잡히는 단위로 구체화 (D-6).
이 약속 하나에 모든 실습 설계가 정렬되어 있다.
-->


---

# 어떤 접근을 쓸까요? ― 결정 룰

<div grid="~ cols-2 gap-4" class="mt-8">

<div class="rounded-lg overflow-hidden border border-cyan-200 dark:border-cyan-800">
<div class="bg-cyan-100 text-cyan-800 px-4 py-2 font-bold text-center">① 직접 지시 (= 매번 시키기)</div>
<div class="bg-cyan-50 dark:bg-cyan-900/15 px-4 py-4">

AI에게 그때그때 작업을 지시

**적합**: 일회성·탐색·맥락이 매번 다른 작업

</div>
</div>

<div class="rounded-lg overflow-hidden border border-emerald-200 dark:border-emerald-800">
<div class="bg-emerald-100 text-emerald-800 px-4 py-2 font-bold text-center">② 소프트웨어로 만들기 (본 교육이 강조하는 쪽)</div>
<div class="bg-emerald-50 dark:bg-emerald-900/15 px-4 py-4">

AI로 작은 소프트웨어(Skill·에이전트 활용)를 만들어 활용

**적합**: 반복·일관성·재사용이 필요한 작업

</div>
</div>

</div>

<div class="mt-8 text-center text-lg opacity-90">
<strong>왜 이 교육이 ②번을 강조하는지</strong> 한 단계씩 따라가 봅시다.
</div>

<!--
ADR-0005 본질 메시지 못박는 자리: "도구화"의 근거를 결정 룰로 압축.
"특성: 매번 결과가 다름 / 동일한 품질로 반복 보장"은 다음 사다리 슬라이드 [3]·[4]가 결과형으로 다루므로 카드에서는 제거: 결정 룰은 "언제 ①/언제 ②"의 분기 가이드 역할에 집중.
이슈 #40 운용 변경: 본 결정 룰은 ①/② 2분기 가이드, 「기본 용어와 범위」 직후의 「AI 활용의 세 형태」 비교표 슬라이드는 ② 안에서 에이전트 스킬과 애플리케이션의 위치 비교: 두 자산은 다른 일을 한다.
사다리 슬라이드로 자연 연결.
-->


---

# 매번 시키기 vs 소프트웨어로 만들기

<div class="mt-4 space-y-3 max-w-5xl mx-auto">

<div class="rounded-lg border border-blue-200 dark:border-blue-800 px-5 py-3 bg-blue-50 dark:bg-blue-900/15">
<span class="font-mono text-sm opacity-60 mr-3">[1]</span>
<span class="font-bold">출발은 누구나 같다</span>
<div class="text-sm opacity-80 mt-1">"AI에게 매번 새로 시키기"도 좋은 출발점: 처음부터 본인의 챗봇이나 자동화 도구를 만드는 사람은 없습니다.</div>
</div>

<div class="rounded-lg border border-blue-200 dark:border-blue-800 px-5 py-3 bg-blue-50 dark:bg-blue-900/15">
<span class="font-mono text-sm opacity-60 mr-3">[2]</span>
<span class="font-bold">한 번으로 끝나지 않는 일들도 많다</span>
<div class="text-sm opacity-80 mt-1">매주 보고서, 매번 회의록, 매학기 학습 정리: <strong>본인이 매일·매주 하는 일을 떠올려 보세요.</strong></div>
</div>

<div class="rounded-lg border border-orange-200 dark:border-orange-800 px-5 py-3 bg-orange-50 dark:bg-orange-900/15">
<span class="font-mono text-sm opacity-60 mr-3">[3]</span>
<span class="font-bold">반복인데 매번 처음부터 시키면 비용이 누적된다</span>
<div class="text-sm opacity-80 mt-1">
같은 지시 다시 입력 (시간) · 매번 결과가 조금씩 다름 <span class="opacity-70">(챗봇이 매번 답이 살짝 다른 그 느낌, 품질 변동)</span> · 매번 검수·수정 (이중 비용)
</div>
</div>

<div class="rounded-lg border border-emerald-200 dark:border-emerald-800 px-5 py-3 bg-emerald-50 dark:bg-emerald-900/15">
<span class="font-mono text-sm opacity-60 mr-3">[4]</span>
<span class="font-bold">한 번 만들고 100번 쓰는 게 합리적</span>
<div class="text-sm opacity-80 mt-1">반복되는 일에는 <strong>본인 일에 맞는 작은 소프트웨어를 직접 만드는 것</strong>이 답입니다. 비개발자도 자기 일에 필요한 소프트웨어를 만든다.</div>
</div>

</div>

<!--
N-2 사다리: F-2 합의 반영. ADR-0005 결과형 우회를 [3]에 자연 결합.
[3] ② "매번 결과가 조금씩 다름"은 본 슬라이드에서 여전히 결과형으로 우회 유지: 메커니즘 단어 명시는 이슈 #40 운용 변경에 따라 「AI 활용의 세 형태」 비교표 슬라이드 1곳으로 한정.
[4]는 W2가 가졌던 "비개발자도 작은 소프트웨어 만든다" 메시지를 흡수한 ADR-0005 본질 메시지의 못박는 자리.
다음 슬라이드(핵심 박스)로 한 번 더 정점.
-->


---
layout: center
class: text-center
---

# 핵심: 비개발자도 소프트웨어를 만든다

<div class="mt-12 text-xl opacity-50">"AI에게 매번 시킨다" ❌</div>

<div class="text-2xl opacity-60 my-3">↓</div>

<div class="text-2xl font-bold">"AI로 나만의 소프트웨어를 만들어 반복 자동화한다" ✅</div>

<!--
ADR-0005 본질 메시지 못 ② 가시화 자리: 사다리 [4] 결론을 한 화면으로 압축.
docs의 W3 quote 박스에 1:1 정합. ❌/✅ 시각 비교가 청중 인지에 박힘.
-->


---

# AI 활용 3단계와 내 위치

본 교육에서는 AI 활용을 다음 3단계로 구분해 설명합니다.

```mermaid {scale: 0.85}
flowchart LR
    A("<b>1단계</b><br/>챗봇 사용<br/><i>(참가 전제)</i>")
    B("<b>2단계</b><br/>프롬프트 재활용<br/>Agent Skills")
    C("<b>3단계</b><br/>에이전트 활용<br/>Claude Cowork")
    A --> B --> C
    classDef stage1 fill:#1e293b,stroke:#6b7280,color:#9ca3af,stroke-width:1px
    classDef stage2 fill:#0c4a6e,stroke:#38bdf8,color:#bae6fd,stroke-width:2px
    classDef stage3 fill:#155e75,stroke:#22d3ee,color:#67e8f9,stroke-width:3px
    class A stage1
    class B stage2
    class C stage3
    linkStyle 0 stroke:#38bdf8,stroke-width:2px
    linkStyle 1 stroke:#22d3ee,stroke-width:2px
```

<style>
.mermaid svg g.stage2 rect,
.mermaid svg g.stage2 path {
  filter: drop-shadow(0 0 4px rgba(56, 189, 248, 0.4));
}
.mermaid svg g.stage3 rect,
.mermaid svg g.stage3 path {
  filter: drop-shadow(0 0 6px rgba(34, 211, 238, 0.55));
}
</style>

참가자는 대체로 **1단계는 통과한 상태**로 참여하며, 본 교육은 **2·3단계**에 초점을 맞춥니다.

<div class="text-sm opacity-70 mt-3">앞의 「결과물의 성격」(결정성·비용)과는 <strong>별개의 구분</strong>: 이건 <em>내가 올라가는 학습 단계</em>입니다.</div>

<!--
ADR-0001의 핵심 모델: 본 교육이 다루는 결과물의 단계.
앞 「결과물의 성격」 슬라이드와 이름·형태가 닮아 혼동되기 쉬워, 한 줄로 별개의 구분임을 명시(학습 단계 vs 결과물 성격). docs의 「3단계 ↔ 결과물의 성격」 다리와 정합.
What 섹션에 위치한 이유: 학습자 분류가 아니라 "교육이 다루는 범위·산출물의 단계"이기 때문.
다음 슬라이드(상세표)로 이어 단계별 차이를 풀어 설명.
2→3단계로 갈수록 "AI에게 시키는 일의 자동화 폭"이 넓어진다는 점을 강조.
-->

---

# 3단계 상세

| 단계 | 무엇을 하나요? | 대표 도구·기능 | 본 교육에서 |
|------|-------------|--------------|------------|
| **1단계:<br/>챗봇&nbsp;사용** | 단발성 대화로 답을 얻음 | Claude·ChatGPT·Gemini 웹&nbsp;챗봇 | **참가&nbsp;전제**<br/>(이미&nbsp;경험) |
| **2단계:<br/>프롬프트&nbsp;재활용** | 반복 사용 가능한 맞춤 프롬프트·챗봇을 자산으로 만듦 | **Agent&nbsp;Skills&nbsp;기초**,<br/>Claude&nbsp;Projects | **2단계&nbsp;실습** |
| **3단계:<br/>에이전트&nbsp;활용** | 로컬 파일·작업을 자동화하는 에이전트를&nbsp;운영함 | **Claude&nbsp;Cowork**,<br/>Claude&nbsp;Code | **3단계&nbsp;실습** |

> 💡 2단계에서 익히는 **프롬프트 재활용·Agent Skills** 개념은 3단계에서도 그대로 재활용됩니다.

<style>
table { font-size: 0.85em; }
</style>

---

# 1단계 vs 2단계 ― 매번 vs 재사용

<div grid="~ cols-2 gap-4" class="mt-8">

<div class="rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600">
<div class="bg-gray-100 text-gray-800 px-4 py-2 font-bold text-center">1단계: 매번 새로 묻기</div>
<div class="bg-gray-50 dark:bg-gray-700/20 px-4 py-4">

"고객 문의 이메일에 정중하고 친근한 톤으로, 짧게 답장해줘…"

→ 다음 답장도 **같은 지시를 처음부터 다시 입력**

</div>
</div>

<div class="rounded-lg overflow-hidden border border-green-200 dark:border-green-800">
<div class="bg-green-100 text-green-800 px-4 py-2 font-bold text-center">2단계: Skill로 묶어 재사용</div>
<div class="bg-green-50 dark:bg-green-900/15 px-4 py-4">

"고객 답장" Skill을 1번 만들어두고
**호출만으로 동일 톤 유지**

→ 새 답장은 **본문 핵심만** 입력하면 끝

</div>
</div>

</div>

<!--
1↔2단계 차이의 첫 만남. "프롬프트 재활용" 추상어를 "이메일 답장 톤" 일상 작업에 연결.
청중에게 "지금 본인은 어디에 있나"를 자가 평가시키는 자리: 자가 진단 슬라이드와 호응.
-->


---

# 어떤 결과물을 만들 수 있나요?

| 트랙 | 2단계 실습 결과물 예시 | 3단계 실습 결과물 예시 |
|------|--------------------|--------------------|
| 임직원<br/>(비개발자) | 반복 보고서 자동 작성 템플릿,<br/>데이터 정리·변환 워크플로우 | 로컬 파일을 일괄 정리·변환하는 에이전트 |
| 비개발자<br/>학생·일반인 | AI 오답노트, 자동 문제 출제기,<br/>엑셀 데이터 관리 템플릿 | 학습 자료를 로컬 폴더 단위로<br/>정리·요약하는 에이전트 |

---
layout: section
---

# How

어떻게 진행되나요?

---

# 실습 접근법: 계획 → 실행

긴 이론 학습 대신 **계획 문서를 작성한 뒤 단계별로 실행**

```mermaid
flowchart LR
    A("<b>1. 문제 정의</b><br/>자동화할 작업 1개 선정")
    B("<b>2. 계획</b><br/>계획 문서 작성")
    C("<b>3. 실행</b><br/>계획대로 단계별 실행 → 결과물")
    D("<b>4. 개선</b><br/>결과 검토 · 개선점 도출")
    A --> B --> C --> D
    D -.->|계획 수정| B
```

---

# 왜 계획부터 세우나요?

그냥 챗봇에 막 물어보는 것과 **무엇이 다른가**: 세 가지 이점이 있습니다.

<div class="mt-8 space-y-5 max-w-4xl mx-auto text-lg">

<div class="flex items-start">
<div class="font-mono text-2xl opacity-50 w-12 shrink-0">01</div>
<div>
<div class="font-bold mb-1">생각이 정리·구체화됩니다</div>
<div class="opacity-80">머릿속의 모호한 요구가 글로 쓰면 명확해집니다.</div>
</div>
</div>

<div class="flex items-start">
<div class="font-mono text-2xl opacity-50 w-12 shrink-0">02</div>
<div>
<div class="font-bold mb-1">AI가 더 정확히 이해합니다</div>
<div class="opacity-80">깨끗하게 정리된 계획으로 시작하면 답이 일관되고 대화가 길어지지 않습니다.</div>
</div>
</div>

<div class="flex items-start">
<div class="font-mono text-2xl opacity-50 w-12 shrink-0">03</div>
<div>
<div class="font-bold mb-1">시간·비용도 절약됩니다</div>
<div class="opacity-80">AI가 잘못 이해해서 다시 작업하면, <strong>작업 시간이 손쉽게 두 배가 됩니다.</strong></div>
</div>
</div>

</div>

<div class="mt-10 text-center text-base opacity-75 italic">
"사람도 의사소통이 잘못되면 비용이 큽니다. AI에게도 마찬가지입니다."
</div>

<!--
"그냥 챗봇에 물어보면 되는데 왜 계획?"이라는 학습자 의문에 대한 답.
LLM 메커니즘(컨텍스트·토큰)은 의도적으로 빼고 결과형으로 우회: ADR-0005 원칙.
03번 톤다운(D-9): "다시 작업하는 비용이 의외로 큽니다" → "작업 시간이 손쉽게 두 배가 됩니다"로 결과형·구체화.
-->


---

# 막연한 vs 구조화된 프롬프트

<div grid="~ cols-2 gap-4" class="mt-8">

<div class="rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600">
<div class="bg-gray-100 text-gray-800 px-4 py-2 font-bold text-center">막연한 프롬프트</div>
<div class="bg-gray-50 dark:bg-gray-700/20 px-4 py-4">

"이 보고서 요약해줘"

→ AI가 **임의로 분량·관점**을 잡음
**매번 결과가 들쭉날쭉**

</div>
</div>

<div class="rounded-lg overflow-hidden border border-green-200 dark:border-green-800">
<div class="bg-green-100 text-green-800 px-4 py-2 font-bold text-center">구조화된 프롬프트</div>
<div class="bg-green-50 dark:bg-green-900/15 px-4 py-4">

"이 보고서를 3줄로 요약.
1줄은 결론, 2~3줄은 근거.
수치는 그대로 유지."

→ 매번 **같은 형식**의 일관된 결과

</div>
</div>

</div>

<!--
"계획 → 실행" 흐름과 직결: 좋은 계획(구조화)이 좋은 결과를 부른다는 것.
청중이 평소 챗봇을 쓰는 방식("막연한 프롬프트")의 한계를 자기 경험으로 떠올리게 함.
-->


---

# AI 활용 메타 원칙

도구·실습이 바뀌어도 그대로 통하는 **시리즈 차원의 자세** 5종.

<div grid="~ cols-3 gap-3" class="mt-8 max-w-2xl mx-auto">

<div class="rounded-lg overflow-hidden border border-cyan-200 dark:border-cyan-800">
<div class="bg-cyan-100 text-cyan-800 px-3 py-2 font-bold text-center text-sm">① 계획·실행</div>
<div class="bg-cyan-50 dark:bg-cyan-900/15 px-3 py-3 text-xs">계획만 받고 검토한 뒤 실행시키기</div>
</div>

<div class="rounded-lg overflow-hidden border border-blue-200 dark:border-blue-800">
<div class="bg-blue-100 text-blue-800 px-3 py-2 font-bold text-center text-sm">② 데이터·뷰</div>
<div class="bg-blue-50 dark:bg-blue-900/15 px-3 py-3 text-xs">내용(값)과 표현(틀)을 분리하기</div>
</div>

<div class="rounded-lg overflow-hidden border border-purple-200 dark:border-purple-800">
<div class="bg-purple-100 text-purple-800 px-3 py-2 font-bold text-center text-sm">③ 결과물 검토</div>
<div class="bg-purple-50 dark:bg-purple-900/15 px-3 py-3 text-xs">손으로 안 쓰지만 읽고 이해는 한다</div>
</div>

</div>

<div grid="~ cols-2 gap-3" class="mt-3 max-w-md mx-auto">

<div class="rounded-lg overflow-hidden border border-teal-200 dark:border-teal-800">
<div class="bg-teal-100 text-teal-800 px-3 py-2 font-bold text-center text-sm">④ 컨텍스트</div>
<div class="bg-teal-50 dark:bg-teal-900/15 px-3 py-3 text-xs">한 대화방을 무한히 끌고 가지 않기</div>
</div>

<div class="rounded-lg overflow-hidden border border-amber-200 dark:border-amber-800">
<div class="bg-amber-100 text-amber-800 px-3 py-2 font-bold text-center text-sm">⑤ 페르소나</div>
<div class="bg-amber-50 dark:bg-amber-900/15 px-3 py-3 text-xs">조건부 권장: 본 강의의 현재 입장</div>
</div>

</div>

<!--
docs/index.md `### AI 활용 메타 원칙` 섹션의 표지: ADR-0002 단방향 파생.
도구·실습이 바뀌어도 그대로 통하는 시리즈 차원의 자세 5종을 한눈에. 본문 5장 ① ② ③ ④ ⑤이 이 표지 다음에 누적.
색상 분리: ①~④ 동일 abstract 톤 계열(cyan/blue/purple/teal, 시리즈 확립 원칙), ⑤ amber(검증 성격이라 note 톤 분리, docs admonition 종류 차이와 정합).
-->


---

# 메타 원칙 ① 계획과 실행의 분리

AI에게 한 번에 "계획 + 실행"을 맡기지 마세요. **계획만 먼저 받고, 검토한 뒤 실행시킵니다.**

<div class="mt-6 grid grid-cols-3 gap-3 max-w-4xl mx-auto">

<div class="rounded-lg border border-cyan-300 dark:border-cyan-700 px-4 py-3 text-center">
<div class="text-xl font-mono opacity-60 mb-1">1</div>
<div class="font-bold text-sm mb-1">계획만 요청</div>
<div class="text-xs opacity-80">"이렇게 하려는데 계획만 짜줘"</div>
</div>

<div class="rounded-lg border border-cyan-300 dark:border-cyan-700 px-4 py-3 text-center">
<div class="text-xl font-mono opacity-60 mb-1">2</div>
<div class="font-bold text-sm mb-1">계획 검토</div>
<div class="text-xs opacity-80">빠진 단계·의도와 다른 곳 손보기</div>
</div>

<div class="rounded-lg border border-cyan-300 dark:border-cyan-700 px-4 py-3 text-center">
<div class="text-xl font-mono opacity-60 mb-1">3</div>
<div class="font-bold text-sm mb-1">실행 요청</div>
<div class="text-xs opacity-80">"좋아, 그 계획대로 진행해줘"</div>
</div>

</div>

<div class="mt-6 max-w-4xl mx-auto text-center">

**계획에 최소 2가지**: **목표(What)** · **완료의 정의(체크리스트)**
복잡하면 **실행계획(How)**, 끝난 뒤 **실행요약(결과)** 추가.

</div>

<div class="mt-4 text-center text-sm opacity-75 italic max-w-3xl mx-auto">
한 번에 맡기면 결과를 통제하기 어렵고, 두 번에 나누면 검토 자리가 생겨 통제권을 잃지 않습니다.
</div>

<!--
docs/index.md `### AI 활용 메타 원칙` ① 박스 압축: ADR-0002 단방향 파생.
기존 "실습 접근법: 계획 → 실행"·"왜 계획부터 세우나요?"·"막연한 vs 구조화된 프롬프트" 3장과 결 분리:
- 기존 3장 = 본 강의의 진행 절차·이점·예시 (구체)
- 본 슬라이드 = 시리즈 차원의 원칙·통제권 (제너럴)
같은 ①을 다른 카메라 각도에서 두 번 봄.
계획 구성 가이드(목표·완료의 정의 + 복잡 시 실행계획·실행요약)는 사용자 보강 가이드(2026-05-09)로 docs ① 박스에 들어간 부분: 슬라이드도 한 단락으로 호출.
-->


---

# 메타 원칙 ② 데이터와 뷰의 분리

산출물의 **내용(데이터)** 과 **표현(뷰)** 을 분리해 두세요.

<div class="mt-6 grid grid-cols-2 gap-4 max-w-4xl mx-auto">

<div class="rounded-lg overflow-hidden border border-blue-200 dark:border-blue-800">
<div class="bg-blue-100 text-blue-800 px-4 py-2 font-bold text-center">데이터</div>
<div class="bg-blue-50 dark:bg-blue-900/15 px-4 py-3 text-sm text-center">
값 그 자체: 숫자·텍스트·표·엑셀
</div>
</div>

<div class="rounded-lg overflow-hidden border border-blue-200 dark:border-blue-800">
<div class="bg-blue-100 text-blue-800 px-4 py-2 font-bold text-center">뷰</div>
<div class="bg-blue-50 dark:bg-blue-900/15 px-4 py-3 text-sm text-center">
보여주는 틀: 마크다운·HTML·슬라이드
</div>
</div>

</div>

<div class="mt-6 text-center max-w-3xl mx-auto">

한 번 잘 만든 뷰(템플릿)는 여러 데이터에 **재사용**할 수 있습니다.

섞어 두면 다음에 또 처음부터 만들어야 합니다.

</div>

<div class="mt-6 text-center text-sm opacity-75 italic max-w-3xl mx-auto">
실습 사례: <code>step01-weather</code> (날씨 값 + HTML 리포트), <code>step04-wrong-answer-note</code> (인식 엑셀 + 마크다운/HTML)
</div>

<!--
docs/index.md `### AI 활용 메타 원칙` ② 박스 압축: ADR-0002 단방향 파생.
step04는 카드 슬라이드 "step별 학습 포인트"의 핵심 학습 포인트로도 등장: 시리즈 차원에서 같은 메시지가 두 자리(원칙·실습)에서 호출.
ADR 격상 후보(이슈 #32 Task 8에서 결정): 데이터/뷰 분리를 별 ADR로 정책화할지 본 이슈에서 판단.
-->


---

# 메타 원칙 ③ AI 결과물 검토·이해 의무

만들기는 AI에 맡기더라도 **결과물은 본인이 직접 읽고 이해**한 상태에서 씁니다.

<div class="mt-6 max-w-4xl mx-auto space-y-3">

<div class="border-l-4 border-purple-400 pl-5 py-2">
<strong>읽지 않은 결과물은 사용하지 않습니다</strong>. 마크다운·HTML·엑셀·Skill 지시문 모두.
</div>

<div class="border-l-4 border-purple-400 pl-5 py-2">
<strong>이해가 부족하면 AI에게 설명을 시킵니다</strong>. "왜 이렇게 만들었는지·이 부분이 무슨 의미인지" 다시 묻기.
</div>

</div>

<div class="mt-6 max-w-3xl mx-auto text-sm opacity-90 text-center">

**검토의 깊이는 결과물의 영향 범위에 비례합니다.**

반복해서 쓰거나 다른 사람에게 영향을 주는 산출물일수록 깊이 있게, 1회성·프로토타입은 가볍게.

</div>

<div class="mt-6 text-center text-sm opacity-75 italic max-w-3xl mx-auto">
"프롬프트로만 진행"의 짝 원칙: 손으로 안 쓰지만 검토는 합니다. 사례: <code>step04</code>의 인식 엑셀 검수 자리.
</div>

<!--
docs/index.md `### AI 활용 메타 원칙` ③ 박스 압축: ADR-0002 단방향 파생.
labs/README.md·docs/labs.md의 "결과물은 반드시 읽고 이해합니다" ② 항목과도 짝: 시리즈 차원에서 도입(원칙)·실습(진행 원칙) 두 자리 모두 호출.
검토 깊이 차등화 단서는 비개발자 청중이 "전부 이해 못 하면 못 쓴다"로 오독하지 않도록(2026-05-09 사용자 보강 가이드).
-->


---

# 메타 원칙 ④ 컨텍스트(대화방) 관리

**컨텍스트(맥락)** = AI가 한 번의 대화에서 함께 보고 있는 모든 입력의 묶음 (메시지·문서·첨부 전부).
한 대화방을 무한히 끌고 가지 마세요. 일정 신호가 오면 **새 대화를 시작**합니다.

<div class="mt-5 grid grid-cols-2 gap-4 max-w-5xl mx-auto">

<div class="rounded-lg overflow-hidden border border-teal-200 dark:border-teal-800">
<div class="bg-teal-100 text-teal-800 px-4 py-2 font-bold">새 대화를 여는 신호</div>
<div class="bg-teal-50 dark:bg-teal-900/15 px-4 py-3 text-sm">

- 주제가 바뀔 때
- 계획 단계가 끝나고 실행 단계로 (메타 원칙 ①)
- AI가 앞 말을 잊거나 어긋날 때
- 대화가 너무 길어졌을 때

</div>
</div>

<div class="rounded-lg overflow-hidden border border-teal-200 dark:border-teal-800">
<div class="bg-teal-100 text-teal-800 px-4 py-2 font-bold">새 대화를 시작하는 방법</div>
<div class="bg-teal-50 dark:bg-teal-900/15 px-4 py-3 text-sm">

- **Claude.ai 챗봇·Cowork**: 사이드바 **새 대화** 버튼
- **Claude Code**: `/clear` 명령

옮길 때는 **회의록**처럼 핵심 결과만 압축해 가져갑니다.

</div>
</div>

</div>

<div class="mt-5 text-center text-xs opacity-70 max-w-4xl mx-auto">
참고: 컨텍스트 크기. 최신 모델(Fable 5·Opus 5·Sonnet 5) <strong>1M</strong>, claude.ai 챗의 이전 세대 모델 <strong>500K</strong>; Claude Code는 이전 세대 Opus까지 1M. <a href="https://platform.claude.com/docs/ko/build-with-claude/context-windows">기술 배경</a> · <a href="https://support.claude.com/ko/articles/8606394">Claude.ai 한도</a>
</div>

<!--
docs/index.md `### AI 활용 메타 원칙` ④ 박스 압축: ADR-0002 단방향 파생.
사용자 보강 가이드(2026-05-09 보강 #2):
- 박스 도입부에 컨텍스트 정의 단락 신설(슬라이드는 본문 첫 줄에 흡수).
- "새 대화를 시작하는 방법" 표면별 명령(챗봇/Cowork 새 대화·Code /clear): 슬라이드는 두 카드 중 우측 카드로 시각 분리.
- "참고: 컨텍스트 크기" 인용 단락(1M/500K·외부 docs 한국어 링크 2개): 슬라이드는 footer 작은 글자로 노출(발표 매체 특성, 본문 무게감 보존).
회의록 메타포는 우측 카드 마지막 한 줄로 압축: docs는 두 자리에서 풀지만 슬라이드는 한 줄.
-->


---

# 메타 원칙 ⑤ 페르소나(역할) 부여 ― 본 강의의 현재 입장

"너는 ~ 전문가야" 같은 **페르소나 부여**의 효과에 대한 본 강의 입장은 **조건부 권장**입니다.

<div class="mt-6 grid grid-cols-2 gap-4 max-w-5xl mx-auto">

<div class="rounded-lg overflow-hidden border border-emerald-200 dark:border-emerald-800">
<div class="bg-emerald-100 text-emerald-800 px-4 py-2 font-bold text-center">톤·형식 지정: 권장 ✓</div>
<div class="bg-emerald-50 dark:bg-emerald-900/15 px-4 py-3 text-sm">

예: <em>"공식 문서 톤으로 설명해줘"</em>, <em>"초등학생도 이해할 수 있게 풀어줘"</em>

→ 같은 결과를 **일관된 형식**으로 받기 좋은 실용적 도구.

</div>
</div>

<div class="rounded-lg overflow-hidden border border-amber-200 dark:border-amber-800">
<div class="bg-amber-100 text-amber-800 px-4 py-2 font-bold text-center">전문성 부여: 보수적 ⚠</div>
<div class="bg-amber-50 dark:bg-amber-900/15 px-4 py-3 text-sm">

예: <em>"너는 20년 경력 변호사야, 이 계약서 검토해"</em>

→ 잘못된 권위 부여로 **틀린 답을 자신 있게 말하는 위험**이 커질 수 있음.

</div>
</div>

</div>

<div class="mt-6 text-center max-w-3xl mx-auto">

본인 작업에서 **있을 때·없을 때 결과를 직접 비교**해 보고 결정하세요.

</div>

<div class="mt-4 text-center text-sm opacity-75 italic max-w-3xl mx-auto">
시리즈 차원의 더 든든한 통제권은 메타 원칙 ③ 결과물 검토에서 옵니다. 페르소나로 <em>기대</em>하기보다 받은 결과를 <em>읽고 검토</em>하는 쪽이 안정적.
</div>

<!--
docs/index.md `### AI 활용 메타 원칙` ⑤ 박스 압축: ADR-0002 단방향 파생.
docs admonition은 ① ② ③ ④ `!!! abstract`(시리즈 확립 원칙) vs ⑤ `!!! note`(검증 성격) 톤 분리: 슬라이드는 ① ~ ④ cyan/blue/purple/teal 동일 톤 vs ⑤ emerald(권장)·amber(보수) 두 색 카드로 결 분리. 헤더 라벨 "본 강의의 현재 입장"은 docs와 정합.
페르소나 입장 결정: 사용자 확정(2026-05-09): 톤·형식 권장, 전문성 부여 보수적.
-->


---

# 임직원 (비개발자) 실습

### 2단계 (예시) ― Agent Skills로 자산화

- 반복 보고서 자동 작성
- 엑셀·CSV 데이터 정리·변환

<div class="mt-10"></div>

### 3단계 (예시) ― Claude Cowork로 로컬 자동화

- 로컬 파일 일괄 처리
- 문서 폴더 자동 정리

---

# 비개발자 학생·일반인 실습

### 2단계 (예시) ― Agent Skills로 학습 자산화

- 영어 단어 출제기 (`step03-voca-quiz`)
- 자녀 채점지 답안 인식·채점 (`step04-wrong-answer-note` stage 1·2)
- 파일 분류·정리 (`step02-file-classifier`)

<div class="mt-10"></div>

### 3단계 (예시) ― Claude Cowork로 학습 자료 자동화

- 자녀용 학습 리포트 자동 생성: 마크다운·인쇄용 HTML (`step04-wrong-answer-note` stage 3)

---
layout: section
---

# 2부 ― 도구·데이터 연결

내 컴퓨터 밖의 자료와 도구까지

<!--
docs/connect/index.md 리드 문단 정합: ADR-0002 단방향 파생. 2부 블록의 오프너.
배치 근거(이슈 #52 Task 1 확정): 1부 「실습」 섹션 divider 바로 앞. 실습 섹션이 hands-on 진입 분기점이라 청중을 실습으로 넘긴 뒤 강의 블록을 다시 여는 순서를 피하고, 2부 실습이 신설되면 같은 실습 섹션에 합류한다.
mkdocs nav는 1부 실습 → 2부 순이지만 ADR-0002 결정 2가 슬라이드를 발표 호흡에 맞게 재구성한 결과물로 규정: 덱에 선례 있음(「기본 용어와 범위」·「도구와 제품」이 Why와 What 사이).
-->


---
layout: default
---

# 2부의 흐름

<div class="text-xl mt-10 max-w-3xl mx-auto">

<div class="flex items-center mb-5">
<div class="font-mono text-2xl opacity-50 w-14">01</div>
<div class="font-bold w-44">개요</div>
<div class="opacity-80">연결이 왜 필요한가</div>
</div>

<div class="flex items-center mb-5">
<div class="font-mono text-2xl opacity-50 w-14">02</div>
<div class="font-bold w-44">기본 커넥터</div>
<div class="opacity-80">Atlassian·GitHub, 화면에서 연결</div>
</div>

<div class="flex items-center mb-5">
<div class="font-mono text-2xl opacity-50 w-14">03</div>
<div class="font-bold w-44">MCP 서버</div>
<div class="opacity-80">목록에 없는 도구를 직접 등록</div>
</div>

<div class="flex items-center">
<div class="font-mono text-2xl opacity-50 w-14">04</div>
<div class="font-bold w-44">연결의 보안</div>
<div class="opacity-80">판단 시점이 앞당겨집니다</div>
</div>

</div>

<div class="mt-8 text-center text-sm opacity-75 italic max-w-3xl mx-auto">
1부 90분과는 <strong>별도 세션</strong>입니다. 이용까지를 다루고 만드는 일은 다루지 않습니다.
</div>

<!--
1부 「오늘의 흐름」과 같은 번호·라벨 목록 형태로 통일: 청중이 같은 신호등을 두 번 보게 한다.
구간 4개는 docs/connect 페이지 구성(index → connectors → mcp-servers)에 보안 요약 1구간을 더한 것. 보안 서술의 SSoT는 docs/security-guide.md라 여기서는 요약만 (ADR-0010 결정 4).
-->


---

# 1부에 이어서 ― 거기서 한 가지가 걸립니다

1부의 **AI 활용 3단계**는 *내가 AI를 얼마나 활용하는가*를 아래에서 위로 쌓아 올린 사다리였습니다.
3단계(에이전트 활용)에 이르면 AI가 **내 폴더의 파일을 직접 열고 작업**합니다.

<div class="border-l-4 border-orange-400 pl-6 py-4 my-6 bg-orange-50 dark:bg-orange-900/15 rounded-r">

그런데 거기서 한 가지가 걸립니다. **일에 필요한 자료가 그 폴더 안에만 있지는 않습니다.**

</div>

<div class="grid grid-cols-2 gap-4 max-w-4xl mx-auto">

<div class="rounded-lg overflow-hidden border border-slate-300 dark:border-slate-700">
<div class="bg-slate-100 text-slate-800 px-3 py-2 font-bold text-center text-sm">Confluence</div>
<div class="bg-slate-50 dark:bg-slate-900/15 px-3 py-3 text-sm text-center">회의록 · 규정 · 기획서</div>
</div>

<div class="rounded-lg overflow-hidden border border-slate-300 dark:border-slate-700">
<div class="bg-slate-100 text-slate-800 px-3 py-2 font-bold text-center text-sm">Jira</div>
<div class="bg-slate-50 dark:bg-slate-900/15 px-3 py-3 text-sm text-center">업무 요청 · 진행 상황</div>
</div>

</div>

<div class="mt-6 text-center max-w-3xl mx-auto">

에이전트가 아무리 잘 움직여도 볼 수 있는 자료가 내 컴퓨터 안으로 제한되면,
**할 수 있는 일도 거기서 멈춥니다.**

</div>

<!--
docs/connect/index.md `## 1부에 이어서 진행됩니다 { #from-part1 }` 앞 두 문단 압축: ADR-0002 단방향 파생.
2부 전체의 문제 제기 슬라이드. 앞의 「AI 활용 3단계」 슬라이드를 그대로 받아 이어 붙인다: 청중이 이미 본 사다리 그림 위에서 「그 사다리로 안 되는 것」을 짚는 자리.
Confluence·Jira 두 카드는 slate 회색조: 「기본 용어와 범위」 카드와 같은 톤 ― 원칙이 아니라 상황 예시라는 결.
-->


---

# 연결은 단계가 아니라 선택입니다

<div class="mt-8 grid grid-cols-2 gap-5 max-w-5xl mx-auto">

<div class="rounded-lg overflow-hidden border border-cyan-300 dark:border-cyan-700">
<div class="bg-cyan-100 text-cyan-800 px-4 py-2 font-bold text-center">AI 활용 3단계</div>
<div class="bg-cyan-50 dark:bg-cyan-900/15 px-4 py-4 text-sm">

**내가 AI를 얼마나 활용하는가**

활용 수준을 아래에서 위로 쌓아 올린 **단계**입니다.

</div>
</div>

<div class="rounded-lg overflow-hidden border border-teal-300 dark:border-teal-700">
<div class="bg-teal-100 text-teal-800 px-4 py-2 font-bold text-center">연결</div>
<div class="bg-teal-50 dark:bg-teal-900/15 px-4 py-4 text-sm">

**AI가 어떤 자료까지 쓸 수 있는가**

쓸 수 있는 자료의 범위를 정하는 **선택**입니다.

</div>
</div>

</div>

<div class="mt-8 max-w-4xl mx-auto text-center">

나누는 기준이 다르므로 **단계가 하나 더 늘어나는 것이 아닙니다.**
지금 단계 그대로 쓸 수 있는 자료가 넓어집니다.

</div>

<div class="mt-5 text-center text-sm opacity-75 italic max-w-3xl mx-auto">
2단계에 있어도 연결은 쓸 수 있고, 3단계에 있어도 연결 없이 내 컴퓨터의 파일만 다룰 수 있습니다.
</div>

<!--
docs/connect/index.md `!!! abstract "연결은 1부 3단계와 나누는 기준이 다릅니다"` 박스 압축: ADR-0002 단방향 파생.
이 슬라이드의 목적은 오해 차단 하나: 「2부 = 4단계」로 읽히면 청중이 3단계를 끝내야 연결을 볼 수 있다고 착각한다. 두 카드의 헤더를 「무엇을 기준으로 나눈 것인가」로 맞춰 기준 차이를 직접 보여준다.
색 배정: 3단계는 메타 원칙 ①과 같은 cyan(학습 단계 계열), 연결은 teal로 분리.
-->


---

# 무엇이 달라지나 ― 연결 전 / 연결 후

같은 일을 연결 전후로 놓고 보면 차이가 분명합니다.

<div class="mt-6 grid grid-cols-2 gap-4 max-w-5xl mx-auto">

<div class="rounded-lg overflow-hidden border border-slate-300 dark:border-slate-700">
<div class="bg-slate-100 text-slate-800 px-4 py-2 font-bold text-center">연결하기 전</div>
<div class="bg-slate-50 dark:bg-slate-900/15 px-4 py-3 text-sm">

Confluence에서 문서를 찾아 열고, 본문을 **복사해 대화창에 붙여넣습니다.**

자료가 세 건이면 세 번 반복하고, 다음 주에 또 반복합니다.

</div>
</div>

<div class="rounded-lg overflow-hidden border border-emerald-200 dark:border-emerald-800">
<div class="bg-emerald-100 text-emerald-800 px-4 py-2 font-bold text-center">연결한 뒤</div>
<div class="bg-emerald-50 dark:bg-emerald-900/15 px-4 py-3 text-sm">

<em>"지난주 팀 회의록을 찾아 결정사항만 정리해줘"</em> 라고 부탁하면 AI가 **직접 찾아 읽습니다.**

붙여넣는 단계가 사라지고, 매주 같은 부탁을 그대로 씁니다.

</div>
</div>

</div>

<div class="border-l-4 border-purple-400 pl-6 py-3 mt-7 bg-purple-50 dark:bg-purple-900/15 rounded-r max-w-5xl mx-auto">

늘어나는 것은 **AI가 볼 수 있는 자료의 범위**입니다. 무엇을 시킬지 정하고 결과가 맞는지 확인하는 일은 그대로 사람에게 남습니다.

</div>

<div class="mt-4 text-center text-sm opacity-80 max-w-4xl mx-auto">
오히려 AI가 스스로 읽어 온 자료는 <strong>무엇을 읽었는지 내가 보지 못한 채</strong> 결과만 받기 쉬워, <strong>메타 원칙 ③ 결과물 검토·이해 의무</strong>가 연결한 뒤에 더 중요해집니다.
</div>

<!--
docs/connect/index.md `## 무엇이 달라지나요 { #what-changes }` 압축: ADR-0002 단방향 파생.
docs의 example/success 2분할 카드를 그대로 슬라이드 2분할로. 연결 전은 slate(중립), 연결 후는 emerald(권장) ― 「메타 원칙 ⑤」의 권장/보수 색 규칙과 정합.
하단 purple 바는 메타 원칙 ③과 같은 색: 1부에서 본 원칙이 2부에서 다시 호출된다는 신호를 색으로 준다. 연결의 효용만 말하고 끝내면 검토 의무가 약해 보이므로 같은 화면에 붙여 둔다.
-->


---

# 연결하는 방법은 두 가지

| 구분 | 기본 커넥터 | MCP 서버 |
|---|---|---|
| **무엇인가** | Claude가 미리 준비해 둔 목록에서 고르는 방식 | 목록에 없는 도구·자료를 **직접 찾아 등록해** 쓰는 방식 |
| **연결 절차** | 서비스 선택 → 로그인 → 권한 확인 → 승인 | 서버 선택 → 등록 → 권한 확인 → 승인 |
| **고를 수 있는 폭** | 준비된 서비스 (Atlassian·GitHub 등) | 훨씬 넓음 (준비되지 않은 도구까지) |
| **내가 판단할 것** | 어떤 권한을 넘길지 | 어떤 권한을 넘길지 **+ 이 서버를 믿을 수 있는지** |

<div class="border-l-4 border-blue-400 pl-6 py-3 my-5 bg-blue-50 dark:bg-blue-900/15 rounded-r">

**고르는 순서는 하나입니다.** 필요한 서비스가 커넥터 목록에 있으면 커넥터로 충분하고, 목록에 없을 때 MCP 서버를 봅니다.

</div>

<div class="text-sm opacity-80 max-w-4xl mx-auto">
두 가지 모두 <strong>MCP 위에서 동작합니다.</strong> 갈리는 것은 기술이 아니라 찾아서 등록하는 방법이고, 2부에서 「MCP 서버」라고 할 때는 커넥터 목록에 준비돼 있지 않은 쪽을 가리킵니다.
</div>

<style>
table { font-size: 0.8em; }
table th, table td { padding: 0.35em 0.5em; }
</style>

<!--
docs/connect/index.md `## 연결하는 방법에는 두 가지가 있습니다 { #two-paths }` 표 압축: ADR-0002 단방향 파생.
docs 표 5행 중 「자세히 보기」 행(페이지 링크)은 슬라이드에서 뺀다 ― 발표 화면에서 클릭할 자리가 아니고, 두 방법은 뒤따르는 두 블록이 그대로 이어받는다.
편의와 판단 부담이 정확히 반대 방향이라 어려운 쪽부터 갈 이유가 없다는 것이 순서의 근거: 표 「내가 판단할 것」 행이 그 근거를 이미 보여주므로 아래 바에서는 결론만 말한다.
용어(외부 컨텍스트·MCP)는 1부 「그 밖의 기본 용어」에서 이미 정의: 2부는 다시 정의하지 않는다.
-->


---

# 시작하기 전에 ― 준비물과 범위

<div class="border-l-4 border-blue-400 pl-6 py-4 my-6 bg-blue-50 dark:bg-blue-900/15 rounded-r">

**준비물**

- **이 교육은 유료 플랜을 기준으로 진행합니다.** 개인은 Pro 이상 개인 플랜, 임직원은 **회사가 계약한 Team·Enterprise 플랜**으로 진행합니다.
- **연결할 서비스의 계정**은 평소 쓰던 Jira·Confluence 계정을 그대로 씁니다.
- **회사 환경이라면 관리자 정책 확인이 먼저입니다.** 목록에 서비스가 보이지 않으면 권한 문제일 수 있습니다.

</div>

<div class="border-l-4 border-red-400 pl-6 py-3 my-5 bg-red-50 dark:bg-red-900/15 rounded-r">

⚠️ 회사 업무·자료를 **개인 플랜**에서 다루는 것은 무료·유료를 가리지 않고 **회사 보안 정책 위반**입니다.

</div>

<div class="border-l-4 border-gray-400 pl-6 py-3 bg-gray-50 dark:bg-gray-700/20 rounded-r">

**이 시리즈가 다루는 범위**: 커넥터를 연결하고 끊는 절차, 승인 화면에서 확인할 것, MCP 서버를 고르고 등록하는 방법, 잘 안 될 때 확인할 것.

**다루지 않습니다**: MCP 서버를 직접 만드는 일, RAG의 내부 구조·구현 패턴. 비개발자가 **고르고·연결하고·정하는** 일까지가 범위입니다.

</div>

<!--
docs/connect/index.md `## 시작하기 전에 { #preparation }`·`## 이 시리즈가 다루는 범위 { #scope }` 두 절 압축: ADR-0002 단방향 파생.
플랜 금지 서술은 계정이 아니라 플랜 축으로 쓰고 포괄 표현(무료·유료를 가리지 않고)을 유지: 회사 계정으로도 개인 플랜에 가입할 수 있어 계정 축으로 쓰면 경계가 어긋난다.
범위 블록은 1부 「그 밖의 기본 용어」의 범위 밖 선언과 같은 gray 톤: 「원칙」이 아니라 「경계 안내」 결로 통일.
docs의 warning(연결하면 AI가 자료를 직접 가져오고 남깁니다)은 여기서 한 줄로 접고, 실제 판단 기준은 12·13장(승인 화면)과 28~30장(연결 보안)에서 편다.
-->


---
layout: section
---

# 기본 커넥터 ― Atlassian·GitHub

화면에서 로그인하고 승인하는 것만으로

<!--
docs/connect/connectors.md 리드 정합: ADR-0002 단방향 파생. 2부 두 번째 구간 오프너.
설정 파일을 만지지 않는다는 점이 이 구간의 문턱: 비개발자에게 가장 먼저 권하는 방법이라 MCP 서버보다 앞에 둔다 (docs 읽는 순서와 정합).
-->


---

# 커넥터는 새로 만드는 게 아닙니다

<div class="border-l-4 border-teal-400 pl-6 py-4 my-6 bg-teal-50 dark:bg-teal-900/15 rounded-r">

1부 **「에이전트 = 모델 + 하네스」** 에서 하네스의 출처를 셋으로 나눴고, 그중 **「고르고·연결만 하는 것」** 칸에 *외부 서비스 연결*이 있었습니다. **커넥터가 그 칸의 실물입니다.**

통로를 만드는 일은 서비스를 만든 쪽과 Anthropic이 이미 해 두었습니다.

</div>

그래서 커넥터를 쓰는 데 필요한 건 기술이 아니라 **판단**입니다. 세 가지만 정하면 됩니다.

<div class="mt-6 grid grid-cols-3 gap-3 max-w-4xl mx-auto">

<div class="rounded-lg border border-teal-300 dark:border-teal-700 px-4 py-3 text-center">
<div class="text-xl font-mono opacity-60 mb-1">1</div>
<div class="font-bold text-sm mb-1">무엇을 연결할지</div>
<div class="text-xs opacity-80">지금 하는 일에 필요한 서비스</div>
</div>

<div class="rounded-lg border border-teal-300 dark:border-teal-700 px-4 py-3 text-center">
<div class="text-xl font-mono opacity-60 mb-1">2</div>
<div class="font-bold text-sm mb-1">어디까지 허용할지</div>
<div class="text-xs opacity-80">읽기까지인가 쓰기까지인가</div>
</div>

<div class="rounded-lg border border-teal-300 dark:border-teal-700 px-4 py-3 text-center">
<div class="text-xl font-mono opacity-60 mb-1">3</div>
<div class="font-bold text-sm mb-1">결과를 어떻게 확인할지</div>
<div class="text-xs opacity-80">무엇을 읽고 썼는지 되묻기</div>
</div>

</div>

<!--
docs/connect/connectors.md `## 커넥터는 새로 만드는 게 아닙니다 { #what-is-connector }` 압축: ADR-0002 단방향 파생.
1부 하네스 슬라이드의 되짚기 자리: 「내가 다 만든다」는 오해를 여기서 한 번 더 끊는다. 하네스는 회사가 만든 것 + 외부 서비스 연결 + 내 설정의 조립이고, 커넥터는 가운데 칸이다.
판단 3항목은 메타 원칙 ① 3분할 카드와 같은 형태: 절차가 아니라 판단이라는 것을 형태로 보여준다. 색은 teal(연결 계열)로 4장과 맞춘다.
-->


---

# 연결하는 순서

커넥터 화면으로 가는 길은 두 가지이고, **어느 쪽으로 들어가도 같은 화면**이 열립니다.

<div class="mt-4 grid grid-cols-2 gap-4 max-w-4xl mx-auto text-sm">

<div class="rounded-lg border border-slate-300 dark:border-slate-700 px-4 py-3">
① 왼쪽 아래 <strong>내 이름 → 설정 → 커넥터</strong>
</div>

<div class="rounded-lg border border-slate-300 dark:border-slate-700 px-4 py-3">
② 왼쪽 위 <strong>홈 탭 → 사용자 지정 → 커넥터</strong>
</div>

</div>

<div class="mt-6 max-w-4xl mx-auto text-sm">

1. **고르기**: 원하는 서비스를 누르고, 설명과 할 수 있는 일을 읽습니다.
2. **연결 시작**: **연결**(또는 **설치**) 버튼을 누릅니다.
3. **로그인**: 그 서비스의 평소 계정으로 로그인합니다. 새 계정을 만들 필요는 없습니다.
4. **권한 승인**: 어떤 자료에 접근할지 화면에 나옵니다. **여기서 멈춰 읽으세요.**
5. **대화에서 켜기**: `+` 버튼 → **커넥터**에서 해당 서비스의 **토글**을 켭니다.

</div>

<div class="border-l-4 border-orange-400 pl-6 py-2 mt-5 bg-orange-50 dark:bg-orange-900/15 rounded-r text-sm max-w-4xl mx-auto">

연결했다고 **항상 쓰이는 것은 아닙니다.** 대화에서 토글을 켠 연결만 그 대화에서 사용됩니다.

</div>

<div class="mt-4 text-xs opacity-70 text-center">
화면 이미지와 대화 도중 여는 경로는 사이트 페이지 <code>기본 커넥터</code>에 있습니다. 화면이 바뀌면 공식 안내가 기준입니다.
</div>

<!--
docs/connect/connectors.md `## 연결하는 순서 { #how-to-connect }` 압축: ADR-0002 단방향 파생.
덱 전체에 스크린샷이 0건인 관례를 따라 이미지를 가져오지 않는다(이슈 #52 Task 1 조사). 화면 경로는 텍스트로 쓰고 이미지 5장은 docs로 위임.
화면 라벨은 실제 표기 그대로: 「사용자 지정」·「커넥터」·「연결」·「설치」. 앱 표기가 바뀌면 docs를 먼저 고치고 여기로 파생한다.
4번에서 멈추라는 것이 이 구간의 핵심 메시지: 다음 두 장(승인 화면·내 권한 그대로)이 그 자리를 편다.
-->


---

# 쓸 만큼만 켜 두세요

`+` 버튼 → **커넥터** 메뉴의 **도구 액세스**에서, 켜 둔 커넥터를 언제 불러올지 고를 수 있습니다.

<div class="mt-8 grid grid-cols-3 gap-4 max-w-5xl mx-auto">

<div class="rounded-lg overflow-hidden border border-blue-200 dark:border-blue-800">
<div class="bg-blue-100 text-blue-800 px-3 py-2 font-bold text-center text-sm">자동 <span class="opacity-70">(기본값)</span></div>
<div class="bg-blue-50 dark:bg-blue-900/15 px-3 py-3 text-xs">

지금 하는 일에 맞춰 Claude가 필요한 것만 불러옵니다.

→ **대부분은 이대로** 두면 됩니다.

</div>
</div>

<div class="rounded-lg overflow-hidden border border-slate-300 dark:border-slate-700">
<div class="bg-slate-100 text-slate-800 px-3 py-2 font-bold text-center text-sm">항상 사용 가능</div>
<div class="bg-slate-50 dark:bg-slate-900/15 px-3 py-3 text-xs">

켜 둔 커넥터를 대화 시작 때 전부 불러옵니다.

→ 몇 개를 **늘 쓰는** 경우에 편합니다.

</div>
</div>

<div class="rounded-lg overflow-hidden border border-slate-300 dark:border-slate-700">
<div class="bg-slate-100 text-slate-800 px-3 py-2 font-bold text-center text-sm">필요할 때</div>
<div class="bg-slate-50 dark:bg-slate-900/15 px-3 py-3 text-xs">

찾아야 할 상황이 되면 그때 불러옵니다.

→ 연결이 많아 **대화가 무거워질 때** 씁니다.

</div>
</div>

</div>

<div class="mt-8 max-w-4xl mx-auto text-center">

켜 둔 커넥터가 많을수록 **AI가 엉뚱한 곳을 찾아볼 여지도 늘어납니다.**
어느 모드든 지금 하는 일에 필요한 것만 켜는 편이 결과도 깔끔합니다.

</div>

<!--
docs/connect/connectors.md `!!! tip "쓸 만큼만 켜 두세요"` 박스 압축: ADR-0002 단방향 파생.
화면 라벨 「도구 액세스」와 세 모드 이름은 실제 표기 그대로. 기본값 「자동」만 blue로 강조해 청중이 셋 중 무엇을 고를지 헤매지 않게 한다.
메시지의 무게중심은 모드 선택이 아니라 마지막 줄: 많이 켜 두는 것이 손해라는 감각을 남긴다.
-->


---

# 승인 화면에서 확인할 것

연결 과정에서 **가장 큰 결정이 일어나는 곳**입니다. 세 가지만 보세요.

| 확인할 것 | 왜 보나요 | 어떻게 하나 |
|---|---|---|
| **읽기만인가, 쓰기도 되는가** | 읽기는 자료를 가져오는 것이고, 쓰기는 그 서비스에 흔적을 남기는 것입니다 (문서 생성, 이슈 코멘트 등) | 쓰기를 빼고 고를 수 있으면 빼고 승인합니다 |
| **어느 범위까지인가** | 저장소 전체인지 일부인지, 어느 프로젝트·스페이스인지 | 좁혀서 고를 수 있으면 필요한 만큼만 고릅니다 |
| **누구의 권한으로 실행하는가** | 커넥터는 **내 계정 권한을 그대로** 씁니다 | 내가 볼 수 없는 자료는 AI도 못 봅니다 |

<div class="mt-5 text-sm opacity-85 max-w-5xl mx-auto">
승인 화면이 무엇을 고르게 해 주는지는 <strong>서비스마다 다릅니다.</strong> 스페이스를 골라 승인하게 하는 곳도 있고, 읽기와 쓰기를 묶어 한 번에 승인받는 곳도 있습니다.
</div>

<style>
table { font-size: 0.78em; }
table th, table td { padding: 0.35em 0.5em; }
</style>

<!--
docs/connect/connectors.md `## 승인 화면에서 확인할 것 { #approval-screen }` 표 그대로 파생: ADR-0002 단방향 파생.
docs 표 3행을 줄이지 않는다 ― 이 세 가지가 연결에서 사람이 내리는 결정의 전부라, 압축하면 남길 것이 없다.
셋째 행 「어떻게 하나」 칸은 docs의 두 문장 중 앞 문장만: 뒤 문장(내가 볼 수 있는 것까지가 가장 넓은 범위)은 다음 장 전체가 받는다.
선택지가 없을 때 줄이는 두 방법도 다음 장으로 넘긴다.
-->


---

# 「내 권한 그대로」는 안심과 경고를 같이 줍니다

<div class="mt-6 grid grid-cols-2 gap-5 max-w-5xl mx-auto">

<div class="rounded-lg overflow-hidden border border-emerald-200 dark:border-emerald-800">
<div class="bg-emerald-100 text-emerald-800 px-4 py-2 font-bold text-center">안심 ✓</div>
<div class="bg-emerald-50 dark:bg-emerald-900/15 px-4 py-4 text-sm">

권한이 **새로 생기지는 않습니다.**

내가 볼 수 없는 스페이스는 AI에게도 보이지 않습니다.

</div>
</div>

<div class="rounded-lg overflow-hidden border border-amber-200 dark:border-amber-800">
<div class="bg-amber-100 text-amber-800 px-4 py-2 font-bold text-center">경고 ⚠</div>
<div class="bg-amber-50 dark:bg-amber-900/15 px-4 py-4 text-sm">

**내가 볼 수 있는 것까지가** AI에게 열릴 수 있는 **가장 넓은 범위**입니다.

내 계정이 회사 자료 대부분에 닿는다면 그만큼 넓어집니다.

</div>
</div>

</div>

<div class="mt-7 max-w-4xl mx-auto text-center">

**"나는 권한이 넓은 편인가"** 를 한 번 떠올려 보세요.
넓다면, 승인 화면에 선택지가 없더라도 아래 두 가지로 줄일 수 있습니다.

</div>

<div class="mt-5 grid grid-cols-2 gap-4 max-w-5xl mx-auto text-sm">

<div class="border-l-4 border-blue-400 pl-4 py-3 bg-blue-50 dark:bg-blue-900/15 rounded-r">

**대화에서 켤 때 줄이기**

지금 하는 일에 필요한 커넥터만 토글을 켭니다. 켜지 않은 연결은 그 대화에서 쓰이지 않습니다.

</div>

<div class="border-l-4 border-blue-400 pl-4 py-3 bg-blue-50 dark:bg-blue-900/15 rounded-r">

**물어볼 때 줄이기**

AI가 쓰기 작업 승인을 물어오면 지금 필요하지 않은 것은 거절합니다.

</div>

</div>

<!--
docs/connect/connectors.md `!!! warning "「내 권한 그대로」는 안심과 경고를 같이 줍니다"` + `#approval-screen` 말미 두 항목 압축: ADR-0002 단방향 파생.
카드 색은 「메타 원칙 ⑤」의 emerald(권장)/amber(보수)를 그대로 재사용: 같은 사실의 두 얼굴이라는 구도를 색으로 반복한다.
승인 화면에 선택지가 없을 때의 대안을 같은 화면에 두는 것이 요점 ― 「줄일 방법이 없다」로 끝나면 청중이 승인 화면에서 할 일이 없어진다.
-->


---

# Atlassian ― Jira와 Confluence

Confluence는 회의록·규정·기획서를, Jira는 업무 요청과 진행 상황을 다룹니다.
둘 중 하나라도 쓰고 있다면 **연결 효과를 가장 빨리 체감**하는 커넥터입니다.

<div class="mt-5 grid grid-cols-2 gap-4 max-w-5xl mx-auto">

<div class="rounded-lg overflow-hidden border border-blue-200 dark:border-blue-800">
<div class="bg-blue-100 text-blue-800 px-4 py-2 font-bold text-center text-sm">Confluence ― 읽고 정리하기</div>
<div class="bg-blue-50 dark:bg-blue-900/15 px-4 py-3 text-xs">

- <em>"지난주 팀 회의록을 찾아 결정사항만 정리해 줘"</em>
- <em>"휴가 규정 문서를 읽고 신입이 자주 묻는 질문 형태로 바꿔 줘"</em>

</div>
</div>

<div class="rounded-lg overflow-hidden border border-blue-200 dark:border-blue-800">
<div class="bg-blue-100 text-blue-800 px-4 py-2 font-bold text-center text-sm">Jira ― 상태 파악하기</div>
<div class="bg-blue-50 dark:bg-blue-900/15 px-4 py-3 text-xs">

- <em>"내 담당 이슈 중 이번 주 마감인 것만 골라 정리해 줘"</em>
- <em>"이 이슈의 지금까지 논의를 세 줄로 요약해 줘"</em>

</div>
</div>

</div>

<div class="border-l-4 border-red-400 pl-6 py-4 my-6 bg-red-50 dark:bg-red-900/15 rounded-r">

⚠️ **AI가 쓴 것도 내 이름으로 팀에 공개됩니다.**

Atlassian 커넥터는 읽기와 쓰기를 모두 지원합니다. 내 계정으로 연결했으니 AI가 만든 문서나 코멘트도 **내가 쓴 것으로** 올라갑니다. 초안을 만들게 하되 **올리기 전에 직접 읽고 고치는 단계**를 반드시 두세요.

</div>

<div class="text-sm opacity-80 text-center max-w-4xl mx-auto">
처음 몇 번은 <strong>읽기만</strong> 시켜 보고, 쓰기 작업 승인을 물어오면 결과가 믿을 만해질 때까지 거절하는 순서를 권합니다.
</div>

<!--
docs/connect/connectors.md `## Atlassian ― Jira와 Confluence { #atlassian }` 압축: ADR-0002 단방향 파생.
docs의 예시 프롬프트는 각 3개지만 슬라이드는 2개씩 ― 발표에서 읽어 줄 분량이고, 나머지는 사이트에서 본다.
red 경고 바는 보안 섹션의 「공통 원칙」 바와 같은 톤: 트랙 무관하게 지켜야 할 것이라는 신호. 이 장에서 가장 오래 머무를 자리다.
메타 원칙 ③이 연결 이후 더 중요해진다는 연결고리는 5장에서 이미 깔았으므로 여기서는 실행 지침(읽기부터, 승인은 거절)만 남긴다.
-->


---

# GitHub ― 연결할지부터 판단이 갈립니다

GitHub은 기본적으로 **소스코드를 보관하고 변경 이력을 관리하는 도구**입니다.
그래서 비개발자가 연결할지는 앞의 Atlassian과 달리 **어느 쪽에 해당하느냐에 따라 갈립니다.**

<div class="mt-6 grid grid-cols-2 gap-5 max-w-5xl mx-auto">

<div class="rounded-lg overflow-hidden border border-emerald-200 dark:border-emerald-800">
<div class="bg-emerald-100 text-emerald-800 px-4 py-2 font-bold text-center text-sm">학생·일반인: 관심 있다면 연결 ✓</div>
<div class="bg-emerald-50 dark:bg-emerald-900/15 px-4 py-3 text-xs">

코드를 읽고 배우는 단계라면 GitHub만 한 자료실이 없습니다.

공개 저장소는 **계정이 없어도 읽을 수 있어** 문턱도 낮습니다.

이 교육의 실습 자료도 공개 저장소에 있습니다.

</div>
</div>

<div class="rounded-lg overflow-hidden border border-amber-200 dark:border-amber-800">
<div class="bg-amber-100 text-amber-800 px-4 py-2 font-bold text-center text-sm">임직원: 업무 도구가 따로 있으면 보류 ⚠</div>
<div class="bg-amber-50 dark:bg-amber-900/15 px-4 py-3 text-xs">

Jira·Confluence 같은 업무 도구가 따로 있다면 비개발자가 GitHub까지 연결할 이유는 대개 없습니다.

사내 **GitHub Enterprise**는 공개 저장소라도 로그인해야 보이고, 계정마다 비용이 붙습니다.

</div>
</div>

</div>

<div class="border-l-4 border-orange-400 pl-6 py-3 mt-7 bg-orange-50 dark:bg-orange-900/15 rounded-r max-w-5xl mx-auto">

연결하기 전에 **회사 정책을 먼저 확인하세요.** 권하지 않는 것은 회사 자료를 다루는 연결이지 **GitHub이라는 도구가 아닙니다.**

</div>

<!--
docs/connect/connectors.md `## GitHub ― 소스코드를 관리하는 곳 { #github }` 압축: ADR-0002 단방향 파생.
슬라이드 제목은 docs 제목(소스코드를 관리하는 곳)이 아니라 이 장의 결론(판단이 갈린다)으로 잡는다: 발표에서는 도구 정의보다 「나는 연결해야 하나」가 먼저 걸린다. 도구 정의는 첫 줄에 그대로 남겼다.
트랙 2분할은 「메타 원칙 ⑤」와 같은 emerald/amber: 권장/보수의 대비를 반복.
docs의 상세(지원 범위·프로젝트에 저장소 붙이기·SSO 승인)는 슬라이드에서 뺀다 ― 연결하기로 정한 사람만 필요한 내용이라 사이트에서 본다.
-->


---

# 점검하고 끊기 · 회사 환경이라면

<div class="mt-6 grid grid-cols-2 gap-5 max-w-5xl mx-auto">

<div class="border-l-4 border-blue-400 pl-5 py-3 bg-blue-50 dark:bg-blue-900/15 rounded-r">

**분기에 한 번 점검하기**

**사용자 지정 → 커넥터**에서 연결된 서비스를 모두 볼 수 있습니다. 아래에 해당하면 미련 없이 끊으세요.

- 그때 한 번 쓰고 이후로 쓰지 않은 서비스
- 부서·업무가 바뀌어 더 이상 볼 이유가 없는 자료
- 무엇을 허용했는지 기억나지 않는 연결

</div>

<div class="border-l-4 border-orange-400 pl-5 py-3 bg-orange-50 dark:bg-orange-900/15 rounded-r">

**회사 환경이라면**

Team·Enterprise 플랜에서는 **조직 관리자가 먼저 커넥터를 켜 주어야** 구성원이 쓸 수 있습니다.

목록이 비어 있거나 원하는 서비스가 없다면 **내 문제가 아니라 조직 정책**일 가능성이 큽니다. 담당 부서에 문의하세요.

</div>

</div>

<div class="mt-7 max-w-5xl mx-auto text-sm">

관리자가 켜 둔 목록은 **쓸 수 있는 범위**를 정한 것이고, 그 안에서 **어느 자료를 연결할지는 내가 고릅니다.** 어느 계정으로 로그인하는지, 연결할 자료가 사내 기준에 맞는지, 사내 승인 절차가 있는지를 봅니다.

</div>

<div class="mt-4 text-center text-sm opacity-80">
끊어도 필요할 때 다시 연결하면 됩니다. <strong>목록에 보인다는 것이 승인을 대신하지 않습니다.</strong>
</div>

<!--
docs/connect/connectors.md `## 연결을 점검하고 끊기 { #manage-disconnect }`·`## 회사 환경이라면 { #enterprise }` 두 절 병합: ADR-0002 단방향 파생.
분량 압축을 위해 두 절을 한 장에 묶는다(이슈 #52 Task 1 구성안의 ⊗ 표시 ― 늘릴 때 쪼갤 후보). 왼쪽은 개인이 하는 점검, 오른쪽은 조직이 정하는 경계로 축이 갈려 한 화면에서 대비된다.
회사 자료를 다루는 연결은 회사가 계약한 플랜에서만 진행한다는 서술은 7장(준비물)에서 이미 red 바로 세웠으므로 여기서 반복하지 않는다.
-->

---
layout: section
---

# MCP 서버 이용하기

목록에 없는 도구를 고르고 등록하기

<!--
docs/connect/mcp-servers.md 리드 정합: ADR-0002 단방향 파생. 2부 세 번째 구간 오프너.
부제를 「고르고 등록하기」로 잡아 ADR-0010 결정 3의 「이용까지」 경계를 오프너에서 한 번 세운다: 만드는 이야기가 아니라는 것을 구간 진입에서 못 박아야 뒤 장들의 판단 기준이 「내가 만들 수 있나」로 새지 않는다.
-->


---

# 커넥터와 무엇이 다른가

차이는 한 줄입니다. **기본 커넥터는 준비된 목록에서 고르고, MCP 서버는 그 목록에 없는 것을 직접 찾아 등록합니다.**

| 구분 | 기본 커넥터 | MCP 서버 |
|---|---|---|
| **어떻게 연결하나** | 목록에서 서비스를 고름 | 서버 주소를 넣거나, 확장 프로그램을 설치해 직접 등록 |
| **누가 확인했나** | 목록 안에서도 검토 수준이 갈림 | **아무도 검토하지 않은 곳도 등록 가능** |
| **고를 수 있는 폭** | 준비된 서비스 | 훨씬 넓음 |
| **내 판단의 몫** | 어떤 권한을 넘길지 | 어떤 권한을 넘길지 **+ 이 서버를 믿을 수 있는지** |

<div class="border-l-4 border-orange-400 pl-6 py-3 my-5 bg-orange-50 dark:bg-orange-900/15 rounded-r">

늘어난 폭만큼 **판단도 내 쪽으로 넘어옵니다.** 그래서 순서는 하나입니다. 커넥터 목록에 있으면 그걸 쓰고, 없을 때만 이쪽을 봅니다.

</div>

<div class="text-sm opacity-80 max-w-5xl mx-auto">
화면에서는 <strong>둘 다 「커넥터」</strong>입니다. 목록에는 자세한 검토를 마친 항목과 자동 검사만 거친 항목이 섞여 있으니, <strong>검토 표시가 없으면 만든 곳을 한 번 더</strong> 보고 연결하세요.
</div>

<style>
table { font-size: 0.8em; }
table th, table td { padding: 0.35em 0.5em; }
</style>

<!--
docs/connect/mcp-servers.md `## 커넥터와 무엇이 다른가요 { #vs-connector }` 표 + 두 note 압축: ADR-0002 단방향 파생.
6장(연결하는 방법은 두 가지)과 표가 닮았지만 축이 다르다: 6장은 「무엇을 고를까」의 비교이고 이 장은 「무엇이 내 몫이 되나」의 비교다. 6장에 없던 「누가 확인했나」 행이 그 차이다.
검토 표시 서술을 하단 한 줄로 접은 이유: 표시 종류·기준은 화면 표기가 바뀌면 같이 늙는 내용이라 사이트로 위임하고, 슬라이드에는 행동 지침(표시 없으면 한 번 더)만 남긴다.
-->


---

# 갈림길 ① ― 설정을 어디에 두나

「원격」·「로컬」이라고 부르지만, 실제로 판가름하는 것은 **설정을 어디에 두느냐**입니다.
거기서 **누가 접속하는지**가 정해지고, 그것이 무엇에 접근할 수 있는지를 결정합니다.

<div class="mt-6 grid grid-cols-2 gap-5 max-w-5xl mx-auto">

<div class="rounded-lg overflow-hidden border border-blue-200 dark:border-blue-800">
<div class="bg-blue-100 text-blue-800 px-4 py-2 font-bold text-center text-sm">내 계정에 등록</div>
<div class="bg-blue-50 dark:bg-blue-900/15 px-4 py-3 text-xs">

**누가 접속하나**: **Anthropic 서버**입니다. 내 컴퓨터는 시키기만 합니다.

**접근 범위**: **인터넷에서 열려 있는 주소**까지입니다. 내 컴퓨터 안의 파일이나 사내망 주소에는 닿지 않습니다.

**어디서 쓰나**: 등록이 내 계정에 저장되어 **웹·데스크톱·모바일 어디서나** 같은 연결을 씁니다.

</div>
</div>

<div class="rounded-lg overflow-hidden border border-purple-200 dark:border-purple-800">
<div class="bg-purple-100 text-purple-800 px-4 py-2 font-bold text-center text-sm">내 컴퓨터에 설정</div>
<div class="bg-purple-50 dark:bg-purple-900/15 px-4 py-3 text-xs">

**누가 접속하나**: **내 컴퓨터**입니다.

**접근 범위**: **내 컴퓨터에서 열 수 있는 자료라면 모두**입니다. VPN을 켜야 열리는 사내 자료도 여기 들어갑니다.

**어디서 쓰나**: **설치한 그 기기에서만** 동작합니다. 다른 기기에서 쓰려면 거기서 다시 설치합니다.

</div>
</div>

</div>

<div class="mt-6 text-center text-sm opacity-80 max-w-4xl mx-auto">
방식은 내가 고르는 것이 아니라 <strong>만든 쪽이 정해서 내놓습니다.</strong> 쓰려는 도구가 어느 방식으로 나와 있는지부터 보세요.
</div>

<!--
docs/connect/mcp-servers.md `## 어디에 설정하느냐가 갈림길입니다 { #remote-vs-local }` 2분할 카드 파생: ADR-0002 단방향 파생.
ADR-0010 결정 3-1의 첫째 갈래를 한 장으로 세운다 ― 이 갈래가 접속 주체를 정하고, 사내망 주소에 닿는지도 여기서 갈린다.
슬라이드 본문에 「축」이라는 말을 쓰지 않는다(이슈 #52 Task 1 확정): 나누는 기준을 제목에 직접 써서 비개발자가 용어 없이 읽게 한다. ADR의 두 갈래 구도는 19·20장 두 장으로 나뉘어 유지된다.
세 항목의 순서(누가 접속하나 → 접근 범위 → 어디서 쓰나)를 양쪽 카드에서 맞춰, 청중이 가로로 읽어 비교할 수 있게 한다.
-->


---

# 갈림길 ② ― 서버가 어디에서 실행되나

가장 헷갈리는 지점입니다. **설정을 두는 위치**와 **서버가 실행되는 위치**는 **별개**입니다.

<div class="mt-8 max-w-5xl mx-auto">

<div class="flex items-start mb-5">
<div class="font-mono text-xl opacity-50 w-10 shrink-0">A</div>
<div>
<div class="font-bold mb-1">설정도 내 컴퓨터, 서버도 내 컴퓨터</div>
<div class="opacity-80 text-sm">설치한 프로그램이 통째로 내 기기에서 실행되는 경우입니다.</div>
</div>
</div>

<div class="flex items-start">
<div class="font-mono text-xl opacity-50 w-10 shrink-0">B</div>
<div>
<div class="font-bold mb-1">설정은 내 컴퓨터, 서버는 다른 곳의 주소</div>
<div class="opacity-80 text-sm">설정만 내 기기에 두고, 접속은 내 컴퓨터에서 그 주소로 나갑니다.</div>
</div>
</div>

</div>

<div class="border-l-4 border-purple-400 pl-6 py-4 my-7 bg-purple-50 dark:bg-purple-900/15 rounded-r max-w-5xl mx-auto">

**B가 회사 사내망 MCP 서버를 쓰는 방식입니다.** 접속이 내 컴퓨터에서 나가니, VPN이 붙어 있으면 사내 주소에 닿습니다.

</div>

<div class="text-sm opacity-80 max-w-5xl mx-auto">
둘을 같이 써도 됩니다. 사내 위키의 자료를 확장 프로그램으로 읽고, 정리한 결과를 계정에 등록해 둔 업무 도구에 올리는 식입니다.
</div>

<!--
docs/connect/mcp-servers.md `!!! info "내 컴퓨터에 설정한다고 서버까지 내 컴퓨터에 있는 것은 아닙니다"` + `!!! tip` 말미 압축: ADR-0002 단방향 파생.
ADR-0010 결정 3-1의 둘째 갈래. ADR이 이 갈래를 뒤늦게 추가한 이유가 여기 그대로 있다: 원격/로컬 한 축으로 누르면 「내 컴퓨터에 설정 + 다른 곳의 서버」 조합(B)이 문서에서 빠지는데, 그것이 임직원의 실제 사내망 케이스다.
A·B 라벨을 붙여 다음 두 장(mermaid)에서 참조할 수 있게 한다.
-->


---

# 내 계정에 등록했을 때

```mermaid {scale: 0.72}
flowchart LR
    subgraph PC["내 컴퓨터"]
        U["나"]
    end
    subgraph NET["인터넷"]
        CS["<b>Claude 서비스</b>"]
        MS["MCP 서버"]
        D1["Atlassian · GitHub<br/>클라우드"]
    end
    subgraph LAN["사내망 (VPN 안에서만 열림)"]
        X["사내 MCP 서버 ·<br/>사내 자료"]
    end
    U -->|"시킨다"| CS
    CS -->|"주소로 접속"| MS
    MS -->|"읽고 쓴다"| D1
    CS -.->|"접속할 수 없음"| X
    style CS fill:#90caf9,stroke:#42a5f5
    style MS fill:#bbdefb,stroke:#64b5f6
    style X fill:#e5e7eb,stroke:#9ca3af,color:#6b7280
```

<div class="mt-4 max-w-5xl mx-auto text-sm">

내 컴퓨터는 시키기만 하고, 실제 접속은 **Anthropic 쪽에서 시작합니다.** 그래서 조건은 하나입니다: **그 주소가 인터넷에서 열려 있는가.**

**사내망 주소는 내가 VPN에 붙어 있어도 닿지 않습니다.** 접속하는 쪽이 내 컴퓨터가 아니기 때문입니다.

</div>

<!--
docs/connect/mcp-servers.md `#remote-vs-local` 첫 mermaid 그대로 파생: ADR-0002 단방향 파생. 노드·간선·색 지정을 docs와 동일하게 유지해 두 표면이 같은 그림을 보여주게 한다.
덱 mermaid는 `setup/mermaid.ts`에서 neutral(라이트) 고정: docs의 연한 파랑 style 지정이 그대로 산다.
회색 점선 간선(접속할 수 없음)이 이 장의 메시지다 ― 사내망에 닿지 않는다는 것을 말이 아니라 그림에서 먼저 본다.
scale 0.72는 슬라이드 폭 기준 조정값: Task 6 viewport 점검 대상.
-->


---

# 내 컴퓨터에 설정했을 때

```mermaid {scale: 0.62}
flowchart LR
    subgraph PC["내 컴퓨터"]
        U["나<br/>(Claude Desktop)"]
        MS1["MCP 서버<br/>(내 컴퓨터에서 실행)"]
    end
    subgraph LAN["사내망 (VPN에 붙어 있을 때)"]
        MS2["MCP 서버<br/>(회사 제공)"]
        D2["사내 위키 ·<br/>GitHub Enterprise"]
    end
    subgraph NET["인터넷"]
        CS["<b>Claude 서비스</b>"]
    end
    U -->|"내 컴퓨터에서 실행"| MS1
    MS1 -->|"VPN을 거쳐 읽고 쓴다"| D2
    U -->|"내 컴퓨터에서 접속"| MS2
    MS2 -->|"사내망 안에서 읽고 쓴다"| D2
    U -->|"읽은 내용은 여기로"| CS
    style CS fill:#90caf9,stroke:#42a5f5
    style MS1 fill:#bbdefb,stroke:#64b5f6
    style MS2 fill:#bbdefb,stroke:#64b5f6
```

<div class="mt-3 max-w-5xl mx-auto text-sm">

접속이 내 컴퓨터에서 나가니 **내가 열 수 있는 자료는 모두 범위 안**입니다. 내 컴퓨터에서 실행되는 서버(A)든, 사내망에 있는 회사 서버(B)든 같습니다.

다만 **Claude 서비스로 향하는 화살표**를 보세요. 읽은 내용은 결국 그쪽으로 올라갑니다.

</div>

<!--
docs/connect/mcp-servers.md `#remote-vs-local` 둘째 mermaid 파생: ADR-0002 단방향 파생.
docs 노드 라벨에서 「사내 데이터」 이탤릭 한 줄만 뺐다 ― 슬라이드 폭에서 노드가 3행이 되면 그림이 눌린다. 나머지 노드·간선·색은 docs와 같다.
20장의 A·B 라벨을 여기서 회수해 두 조합이 같은 그림 안에 있음을 보여준다.
마지막 화살표(읽은 내용은 여기로)가 23장 경고 블록의 근거다: 내 컴퓨터에서 실행돼도 자료는 Claude 서비스로 간다.
scale 0.62는 노드가 많아 21장보다 더 줄인 값: Task 6 viewport 점검 대상.
-->


---

# 내 컴퓨터에 설정해야 하는 때

계정 등록으로 안 되는 자료는 **인터넷에 공개되어 있지 않은 자료**입니다.
비개발자에게 해당하는 경우는 **사실상 하나**입니다.

<div class="mt-5 grid grid-cols-2 gap-5 max-w-5xl mx-auto">

<div class="rounded-lg overflow-hidden border border-purple-200 dark:border-purple-800">
<div class="bg-purple-100 text-purple-800 px-4 py-2 font-bold text-center text-sm">해당하는 경우</div>
<div class="bg-purple-50 dark:bg-purple-900/15 px-4 py-3 text-xs">

**사내망 안에서만 열리는 자료**

회사 네트워크나 VPN을 켜야 열리는 사내 위키·파일 서버입니다.

</div>
</div>

<div class="rounded-lg overflow-hidden border border-slate-300 dark:border-slate-700">
<div class="bg-slate-100 text-slate-800 px-4 py-2 font-bold text-center text-sm">해당하지 않는 경우</div>
<div class="bg-slate-50 dark:bg-slate-900/15 px-4 py-3 text-xs">

**내 폴더의 파일**

파일을 읽고 쓰는 일은 MCP 서버 없이 **폴더 연결**로 됩니다.

</div>
</div>

</div>

<div class="border-l-4 border-blue-400 pl-6 py-3 mt-6 bg-blue-50 dark:bg-blue-900/15 rounded-r max-w-5xl mx-auto text-sm">

회사가 사내 자료용 서버를 제공하면 **방법은 회사가 정해서 안내합니다.** 주소·계정·설치 파일을 임의로 구해 쓰지 말고 **담당 부서 안내를 그대로 따르세요.**

</div>

<div class="border-l-4 border-red-400 pl-6 py-3 mt-4 bg-red-50 dark:bg-red-900/15 rounded-r max-w-5xl mx-auto text-sm">

⚠️ 내 컴퓨터에서 실행돼도 **읽은 자료는 Claude 서비스로 보내져 처리됩니다.** 밖으로 나가면 안 되는 자료라면 처음부터 연결 대상에서 빼는 것이 맞습니다.

</div>

<!--
docs/connect/mcp-servers.md `!!! example "내 컴퓨터에 설정해야 되는 일은 이런 때입니다"` + `!!! info "회사 자료를 연결할 때"` + `!!! warning` 세 박스 압축: ADR-0002 단방향 파생.
해당/해당 없음을 나란히 두는 것이 이 장의 요점: 「내 컴퓨터에 설정」을 내 폴더 파일 접근과 헷갈리는 오해를 같은 화면에서 끊는다. 폴더 연결은 1부 Claude Cowork에서 이미 나온 이야기라 여기서는 이름만 부른다.
임직원 확장의 깊이는 ADR-0010 결정 3-1의 「회사가 안내한 대로 등록」 수준까지: 설정 파일 실물은 다루지 않는다.
red 경고는 22장 mermaid의 마지막 화살표를 말로 받는 자리. 그림에서 본 것을 결론으로 굳힌다.
-->


---

# 등록하는 순서

<div class="mt-4 grid grid-cols-2 gap-5 max-w-5xl mx-auto">

<div class="rounded-lg overflow-hidden border border-blue-200 dark:border-blue-800">
<div class="bg-blue-100 text-blue-800 px-4 py-2 font-bold text-center text-sm">내 계정에 등록 ― 주소 넣기</div>
<div class="bg-blue-50 dark:bg-blue-900/15 px-4 py-3 text-xs">

1. **사용자 지정 → 커넥터**로 들어갑니다.
2. 오른쪽 위 **추가** → **커스텀 커넥터 추가**.
3. **이름**과 **서버 주소**(HTTPS)를 넣습니다.
4. **추가**를 눌러 등록을 마칩니다.
5. **연결**을 눌러 로그인·권한 승인. 확인할 것은 기본 커넥터와 같습니다.
6. 대화창 `+` → **커넥터**에서 **토글**을 켭니다.

</div>
</div>

<div class="rounded-lg overflow-hidden border border-purple-200 dark:border-purple-800">
<div class="bg-purple-100 text-purple-800 px-4 py-2 font-bold text-center text-sm">내 컴퓨터에 설정 ― 확장 프로그램</div>
<div class="bg-purple-50 dark:bg-purple-900/15 px-4 py-3 text-xs">

1. **설정 → 확장 프로그램**으로 들어갑니다.
2. **확장 프로그램 찾아보기**로 목록을 봅니다.
3. 쓸 것을 고르고 **설치**를 누릅니다.
4. 필요한 **설정값**을 화면 안내대로 채웁니다.
5. 설치가 끝나면 대화에서 자동으로 쓰입니다.

설정 파일을 직접 만질 일은 없습니다.

</div>
</div>

</div>

<div class="mt-6 grid grid-cols-2 gap-4 max-w-5xl mx-auto text-sm">

<div class="border-l-4 border-orange-400 pl-4 py-2 bg-orange-50 dark:bg-orange-900/15 rounded-r">

등록한 커넥터는 **수정이 안 됩니다.** 주소를 잘못 넣었다면 제거하고 다시 추가하세요.

</div>

<div class="border-l-4 border-orange-400 pl-4 py-2 bg-orange-50 dark:bg-orange-900/15 rounded-r">

회사 플랜은 **조직 소유자가 먼저 추가**해야 구성원이 목록에서 찾아 연결할 수 있습니다.

</div>

</div>

<div class="mt-4 text-center text-sm opacity-80">
주소를 직접 넣기 전에 <strong>목록부터 둘러보세요.</strong> 필요한 것이 목록에 있다면 직접 넣을 이유가 없습니다.
</div>

<!--
docs/connect/mcp-servers.md `## 등록하는 순서 { #how-to-register }` 두 절(#register-remote·#register-local) 압축: ADR-0002 단방향 파생.
19·20장에서 나눈 두 방식이 여기서 절차로 내려온다: 카드 색을 19장과 맞춰(계정 blue / 내 컴퓨터 purple) 어느 갈래의 절차인지 색으로 잇는다.
docs의 스크린샷 1장(커스텀 커넥터 추가 창)은 덱 관례대로 가져오지 않고 화면 경로만 텍스트로 쓴다.
고급 설정·MCPB 파일 배포·확장 프로그램 권한 경고는 슬라이드에서 뺀다 ― 실제로 등록하는 사람만 필요한 상세라 사이트에서 본다. 다만 열쇠 값과 「항상 허용」은 판단이 갈리는 자리라 다음 장으로 살린다.
-->


---

# 믿을 만한 서버 고르기

주소를 직접 넣어 등록할 때는 검토를 마쳤다는 표시가 붙지 않으니, **확인이 전부 내 몫**이 됩니다.

| 확인할 것 | 무엇을 보나요 |
|---|---|
| **목록의 검토 표시** | 목록에서 고르는 경우, 자세한 검토를 마친 항목인지 자동 검사만 거친 항목인지 |
| **누가 만들었나** | 그 서비스를 만든 회사가 직접 공개한 것인가, 제3자가 만든 것인가 |
| **주소가 공식인가** | 공식 문서·홈페이지에 적힌 주소인가. 채팅·메일로 받은 주소는 한 번 더 확인 |
| **어떤 권한을 요구하나** | 승인 화면에 나오는 범위가 하려는 일에 비해 넓지 않은가 |
| **쓰기가 꼭 필요한가** | 읽기만으로 되는 일이라면 쓰기는 허용하지 않기 |

<div class="border-l-4 border-red-400 pl-6 py-3 my-5 bg-red-50 dark:bg-red-900/15 rounded-r">

⚠️ **서버가 응답하는 내용에 지시가 섞여 있을 수 있습니다.** AI는 서버에서 받아 온 내용을 읽고 다음 행동을 정하는데, 그 안에 <em>"이 파일도 함께 보내라"</em> 같은 문장이 숨어 있으면 **사용자의 지시로 착각할 수 있습니다**(프롬프트 주입). 보호 장치가 있지만 완전하지는 않으니, **믿을 수 있는 곳의 서버만 등록하는 것**이 가장 확실한 방어입니다.

</div>

<div class="text-sm opacity-80 max-w-5xl mx-auto">
회사 자료를 다루는 환경이라면 이 다섯 가지에 <strong>앞서 회사가 정한 범위</strong>가 있습니다. 사내에 등록·승인 절차가 있으면 그 절차가 먼저입니다.
</div>

<style>
table { font-size: 0.78em; }
table th, table td { padding: 0.3em 0.5em; }
</style>

<!--
docs/connect/mcp-servers.md `## 믿을 만한 서버 고르기 { #choosing }` 표 + 두 warning 압축: ADR-0002 단방향 파생.
표 5행을 줄이지 않는다 ― 「고르는 눈」이 이 구간이 비개발자에게 주려는 것 전부라, 압축하면 남길 것이 없다.
프롬프트 주입은 이 구간에서 유일하게 새로 나오는 위험 개념이라 red 바로 세운다. 용어는 괄호로 한 번만 붙이고 본문은 현상 서술로 간다 ― 비개발자에게 필요한 것은 이름이 아니라 「믿을 수 있는 곳만」이라는 행동 기준이다.
서술은 가능성형(착각할 수 있습니다)으로: 단정하면 보호 장치가 없는 것처럼 읽힌다.
-->


---

# 열쇠 값은 필요한 만큼만 · 「항상 허용」은 마지막에

<div class="mt-6 grid grid-cols-2 gap-5 max-w-5xl mx-auto">

<div class="rounded-lg overflow-hidden border border-blue-200 dark:border-blue-800">
<div class="bg-blue-100 text-blue-800 px-4 py-2 font-bold text-center text-sm">열쇠 값(토큰)을 만들 때</div>
<div class="bg-blue-50 dark:bg-blue-900/15 px-4 py-3 text-xs">

서비스가 "이 사람이 맞다"고 확인하는 데 쓰는 문자열입니다. 만드는 화면에서 골라 주는 서비스가 많으니, **고를 수 있다면 좁힙니다.**

- **범위**: 실제로 건드릴 자료만 (계정 전체 대신 스페이스 하나)
- **권한**: 읽기로 되는 일이면 쓰기는 빼 두기
- **기간**: 만료일을 짧게 잡고 필요할 때 다시 발급

</div>
</div>

<div class="rounded-lg overflow-hidden border border-amber-200 dark:border-amber-800">
<div class="bg-amber-100 text-amber-800 px-4 py-2 font-bold text-center text-sm">「항상 허용」을 누르기 전에</div>
<div class="bg-amber-50 dark:bg-amber-900/15 px-4 py-3 text-xs">

작업 중 AI가 도구 사용 승인을 물어볼 때 **항상 허용**을 고르면 이후로는 묻지 않습니다.

편하지만, 그만큼 **무슨 일이 일어나는지 보지 못하게 됩니다.**

→ **처음 몇 번은 매번 읽고 승인**하면서 그 서버가 실제로 무엇을 하는지 확인한 뒤에 결정하세요.

</div>
</div>

</div>

<div class="border-l-4 border-red-400 pl-6 py-3 mt-6 bg-red-50 dark:bg-red-900/15 rounded-r max-w-5xl mx-auto text-sm">

⚠️ **열쇠 값은 대화창에 붙여넣지 않습니다.** 설정 칸은 연결을 세우는 곳이고 대화창은 자료가 오가는 곳입니다. 열쇠 값은 **절대 입력하면 안 되는 정보**의 「인증 정보」에 해당합니다.

</div>

<!--
docs/connect/mcp-servers.md `!!! tip "열쇠 값(토큰)을 만들 때는 필요한 만큼만"` + `!!! warning "열쇠 값은 대화창에 붙여넣지 않습니다"` + `#choosing`의 `!!! warning "「항상 허용」은 마지막에 누르세요"` 병합: ADR-0002 단방향 파생.
분량 압축을 위해 세 박스를 한 장에 묶는다(구성안의 ⊕ 표시 ― 줄일 때 병합 후보). 묶이는 축은 「승인을 미리 좁히기 vs 승인을 나중에 열기」로, 같은 판단의 앞뒤다.
red 바는 1부 보안 섹션의 「절대 입력하면 안 되는 정보」 표를 되짚는 자리: 그 표의 「인증 정보」 행이 여기서 실물로 등장한다. 슬라이드는 되짚기만 하고 표는 다시 그리지 않는다.
-->


---

# 연결한 뒤에 할 일 · 잘 안 될 때

<div class="mt-5 grid grid-cols-2 gap-5 max-w-5xl mx-auto">

<div class="border-l-4 border-purple-400 pl-5 py-3 bg-purple-50 dark:bg-purple-900/15 rounded-r">

**연결한 뒤에 할 일**

- **무엇을 읽고 썼는지 물어보기**: 결과만 받지 말고 "어느 자료를 봤는지" 함께 물으면 확인이 쉬워집니다.
- **쓰기 작업은 결과를 직접 열어 보기**: 흔적이 남는 일은 실제 화면에서 확인합니다.
- **안 쓰는 서버는 끊기**: 기본 커넥터와 같은 화면에서 정리합니다.

</div>

<div class="border-l-4 border-gray-400 pl-5 py-3 bg-gray-50 dark:bg-gray-700/20 rounded-r text-sm">

**잘 안 될 때**

- 서버가 안 쓰임 → 대화에서 **토글이 켜져 있는지**
- 목록에 안 보임 → 회사 플랜이면 **조직 소유자가 추가**했는지
- 주소를 넣었는데 연결 실패 → 그 주소가 **인터넷에서 열려 있는지**
- 확장 프로그램은 설치됐는데 도구가 없음 → **다시 시작**, 빈 필수 항목 확인

</div>

</div>

<div class="border-l-4 border-purple-400 pl-6 py-3 mt-6 bg-purple-50 dark:bg-purple-900/15 rounded-r max-w-5xl mx-auto">

**판단이 늘어난 만큼 검토도 늘어납니다.** 편의가 늘어난 만큼 검토를 줄이는 것이 아니라, **늘어난 편의에 비례해 검토도 늘린다**고 생각하는 편이 맞습니다. **메타 원칙 ③**이 가장 중요해지는 곳입니다.

</div>

<!--
docs/connect/mcp-servers.md `## 연결한 뒤에 할 일 { #after-connect }` + `## 잘 안 될 때 { #troubleshooting }` 두 절 병합: ADR-0002 단방향 파생.
구성안의 ⊕ 표시(줄일 때 병합 후보)를 적용한 장. 왼쪽은 잘 될 때 할 일, 오른쪽은 안 될 때 볼 것으로 축이 갈린다.
문제 해결 표는 docs 5행 중 「주소를 잘못 넣음」 행을 뺐다 ― 24장 하단 orange 바에서 이미 다뤘다.
하단 purple 바가 이 구간의 닫는 메시지: 5장·14장에 이어 메타 원칙 ③이 세 번째로 호출되는 자리이고, 2부에서 가장 세게 말해야 하는 지점이다. 색도 purple로 계속 맞춘다.
-->


---

# 연결의 보안 ― 판단 시점이 앞당겨집니다

<div class="border-l-4 border-red-400 pl-6 py-5 my-8 bg-red-50 dark:bg-red-900/15 rounded-r">

⚠️ **붙여넣을 때마다 하던 "넘길까?" 판단을, 연결에서는 승인 화면에서 미리 합니다.**

</div>

<div class="max-w-5xl mx-auto">

1부 보안에서 다룬 것은 **내가 무엇을 입력하는가**였습니다. 연결하고 나면 두 번째 질문이 시작됩니다.
내가 붙여넣지 않아도 **AI가 직접 가져오고**, 쓰기를 허용했다면 **직접 남깁니다.**

</div>

<div class="mt-7 grid grid-cols-2 gap-5 max-w-5xl mx-auto text-sm">

<div class="border-l-4 border-orange-400 pl-4 py-3 bg-orange-50 dark:bg-orange-900/15 rounded-r">

**한 번 승인하면 그다음은 AI가 고릅니다**

승인 화면에서 정한 것이 **AI가 볼 수 있는 자료의 가장 넓은 범위**입니다.

</div>

<div class="border-l-4 border-blue-400 pl-4 py-3 bg-blue-50 dark:bg-blue-900/15 rounded-r">

**실제로 쓰이는 범위는 다시 좁아집니다**

대화에서 켠 연결과 그때그때의 실행 승인으로 좁혀집니다.

</div>

</div>

<div class="mt-6 text-center text-sm opacity-75 italic">
자세한 기준은 사이트 페이지 <code>보안 및 개인정보 가이드 ― 외부 연결</code>에 있습니다.
</div>

<!--
docs/security-guide.md `## 외부 연결 ― 커넥터와 MCP 서버 { #external-connection }` 리드 + 핵심 원칙 warning 파생: ADR-0002 단방향 파생.
보안 서술의 SSoT는 security-guide.md이므로(ADR-0010 결정 4) 이 구간 3장은 요약만 담고 상세는 사이트로 넘긴다. 슬라이드에서 기준을 다시 정의하지 않는다.
red 바 한 줄이 이 장의 전부다: 「판단이 사라진 것이 아니라 시점이 앞으로 옮겨졌다」가 연결 보안의 핵심이고, 이것이 서면 나머지는 따라온다.
두 개의 작은 바는 넓어지는 방향과 좁아지는 방향을 같은 화면에 둔다 ― 앞쪽만 말하면 겁을 주고, 뒤쪽만 말하면 안심시킨다.
-->


---

# 공통 ― 트랙과 관계없이

<div class="mt-8 grid grid-cols-3 gap-4 max-w-5xl mx-auto">

<div class="rounded-lg overflow-hidden border border-red-200 dark:border-red-800">
<div class="bg-red-100 text-red-800 px-3 py-2 font-bold text-center text-sm">개인정보가 있는 자료</div>
<div class="bg-red-50 dark:bg-red-900/15 px-3 py-3 text-xs">

인사·급여 기록, 고객 명부, 건강 정보처럼 **개인정보가 자료의 본체인 곳**은 권한을 줄여서 연결하는 것이 아니라 **연결하지 않습니다.**

섞여 있다면 그 부분을 빼고 승인합니다.

</div>
</div>

<div class="rounded-lg overflow-hidden border border-orange-200 dark:border-orange-800">
<div class="bg-orange-100 text-orange-800 px-3 py-2 font-bold text-center text-sm">맡기는 권한은 최소로</div>
<div class="bg-orange-50 dark:bg-orange-900/15 px-3 py-3 text-xs">

**무엇을 할 수 있는지**를 줄입니다. 읽기로 되는 일에 쓰기까지 열지 않습니다.

**어디까지 접근 가능한지**를 줄입니다. 필요한 스페이스·저장소만 고릅니다.

</div>
</div>

<div class="rounded-lg overflow-hidden border border-blue-200 dark:border-blue-800">
<div class="bg-blue-100 text-blue-800 px-3 py-2 font-bold text-center text-sm">정기적으로 점검</div>
<div class="bg-blue-50 dark:bg-blue-900/15 px-3 py-3 text-xs">

잊었다고 끊기는 것이 아니어서, **쓰지 않는 연결의 접근 허용도 그대로 유지됩니다.**

기억나지 않는 연결은 끊고, 필요할 때 다시 연결합니다.

</div>
</div>

</div>

<div class="mt-8 max-w-5xl mx-auto text-center text-sm">

직접 붙여넣을 때는 무엇을 넘기는지 내 눈으로 보고 넣지만, 연결한 뒤에는 **AI가 알아서 찾아 읽습니다.**
개인정보가 섞여 있어도 **내가 걸러 내는 단계가 없습니다.**

</div>

<!--
docs/security-guide.md `### 공통 ― 트랙과 관계없이 지킵니다` 세 항목 압축: ADR-0002 단방향 파생.
세 카드의 색을 위험 강도 순으로 배열(red → orange → blue): 첫째는 하지 말 것, 둘째는 줄일 것, 셋째는 유지할 것이라 성격이 다르다.
하단 문장이 첫째 카드의 근거다 ― 「왜 연결에서 더 엄격해야 하는가」를 말하지 않으면 「연결하지 않습니다」가 과한 금지로 들린다.
1부 보안 섹션의 「절대 입력하면 안 되는 정보」 기준이 연결에도 그대로 적용된다는 것이 이 장의 전제: 그 표는 1부에서 이미 봤으므로 다시 그리지 않는다.
-->


---

# 트랙별로 한 가지씩

<div class="mt-6 grid grid-cols-2 gap-5 max-w-5xl mx-auto">

<div class="rounded-lg overflow-hidden border border-orange-200 dark:border-orange-800">
<div class="bg-orange-100 text-orange-800 px-4 py-2 font-bold text-center text-sm">임직원 ― 회사 자료를 다루는 연결</div>
<div class="bg-orange-50 dark:bg-orange-900/15 px-4 py-3 text-xs">

문서의 **보안 등급 기준은 연결로 읽히는 경우에도 똑같이 적용됩니다.** 직접 입력하지 않았다는 이유로 예외가 되지 않습니다.

회사 계약이 보호하는 것은 입력된 내용의 **처리 방식**이지, 무엇을 넘길지의 **판단이 아닙니다.**

→ **회사 정책과 승인 절차가 먼저입니다.**

</div>
</div>

<div class="rounded-lg overflow-hidden border border-blue-200 dark:border-blue-800">
<div class="bg-blue-100 text-blue-800 px-4 py-2 font-bold text-center text-sm">학생·일반인 ― 개인 계정을 연결할 때</div>
<div class="bg-blue-50 dark:bg-blue-900/15 px-4 py-3 text-xs">

개인 드라이브·노트를 연결하면 **그 공간에 쌓아 둔 자료 전부**가 접근 대상이 됩니다.

단체 사진, 공유 문서처럼 **타인의 정보가 담긴 자료**도 함께 들어갑니다. 내가 붙여넣지 않았다고 예외가 되지 않습니다.

→ **연결 전에 그 공간에 무엇이 들어 있는지** 한 번 살펴보세요.

</div>
</div>

</div>

<div class="border-l-4 border-emerald-400 pl-6 py-4 mt-8 bg-emerald-50 dark:bg-emerald-900/15 rounded-r max-w-5xl mx-auto">

💡 **한 줄 요약**: 연결은 편의를 늘리는 만큼 **내가 직접 보지 않은 자료가 결과에 섞일 여지**도 늘립니다.
**권한은 최소로, 점검은 정기적으로.**

</div>

<!--
docs/security-guide.md `### 임직원(비개발자) ― 회사 자료를 다루는 연결` + `### 비개발자 학생·일반인 ― 개인 계정을 연결할 때` + `!!! tip "한 줄 요약"` 압축: ADR-0002 단방향 파생.
트랙마다 한 가지씩만 남긴다 ― 임직원은 「보안 등급은 연결에도 그대로」, 학생·일반인은 「개인 공간을 열면 타인 자료까지」. 각 트랙에서 가장 놓치기 쉬운 것 하나씩이고, 나머지는 사이트에서 본다.
임직원 카드의 GitHub Enterprise 판단은 15장에서 이미 다뤘으므로 반복하지 않는다.
emerald 요약 바는 1부 보안 섹션의 「한 줄 요약」 관례와 같은 자리·같은 형식.
-->


---

# 2부 정리

<div class="mt-8 grid grid-cols-3 gap-4 max-w-5xl mx-auto">

<div class="rounded-lg overflow-hidden border border-teal-200 dark:border-teal-800">
<div class="bg-teal-100 text-teal-800 px-3 py-2 font-bold text-center text-sm">고르는 순서</div>
<div class="bg-teal-50 dark:bg-teal-900/15 px-3 py-3 text-xs">

목록에 **있으면 커넥터**, **없을 때** MCP 서버.

편의와 판단 부담이 반대 방향이라, 어려운 쪽부터 갈 이유가 없습니다.

</div>
</div>

<div class="rounded-lg overflow-hidden border border-teal-200 dark:border-teal-800">
<div class="bg-teal-100 text-teal-800 px-3 py-2 font-bold text-center text-sm">다루는 범위</div>
<div class="bg-teal-50 dark:bg-teal-900/15 px-3 py-3 text-xs">

**이용까지**입니다. 만드는 일은 다루지 않습니다.

비개발자에게 필요한 것은 **고르는 눈**입니다. 관심이 생기면 개발자용 공식 문서로 이어 가세요.

</div>
</div>

<div class="rounded-lg overflow-hidden border border-teal-200 dark:border-teal-800">
<div class="bg-teal-100 text-teal-800 px-3 py-2 font-bold text-center text-sm">시작하는 법</div>
<div class="bg-teal-50 dark:bg-teal-900/15 px-3 py-3 text-xs">

한 번에 다 열어 두는 것보다 **지금 하는 일에 필요한 하나부터** 연결하는 편이 훨씬 잘 굴러갑니다.

</div>
</div>

</div>

<div class="mt-10 max-w-4xl mx-auto text-center text-lg">

1부에서 골라 둔 반복 작업이 있다면,
**그 작업이 어떤 자료를 필요로 하는지**부터 짚어 보세요.

</div>

<!--
docs/connect/mcp-servers.md `#out-of-scope`·`#next` + `docs/connect/index.md#reading-order` 압축: ADR-0002 단방향 파생.
2부 블록의 마지막 장. `layout: end` 「감사합니다」를 두지 않는다(이슈 #52 Task 1 확정): 2부 블록이 덱 중간에 있어 종료 슬라이드가 뒤따르는 1부 실습·보안 섹션을 가리게 된다. 다음 슬라이드는 기존 「실습」 섹션 divider다.
카드 3장을 모두 teal로 통일: 대비가 아니라 회수라 색을 나누지 않는다.
마지막 문장은 6장·7장에서 깐 「본인이 실제로 쓰는 서비스 하나를 정해 두고」의 회수: 2부를 듣고 나가는 청중에게 남길 행동 하나다.
-->

---
layout: section
---

# 실습

손으로 따라가는 4개 step

<!--
docs nav 정합: `mkdocs.yml`의 top-level은 「홈 / 도입 / 실습 / 보안 / 운영」으로 실습이 도입·보안과 동급 형제다.
이 섹션 디바이더는 docs의 「실습」 페이지(`docs/labs.md`)와 위계가 맞는 자리. 본 교육 흐름(Who/Why/What/How)이 끝난 뒤 hands-on으로 진입하는 분기점.
docs/labs.md → labs/ SSoT의 단방향 파생(ADR-0002).
-->


---

# 실습 시리즈 ― 4개 step

본 교육의 hands-on 자료는 GitHub repo의 `labs/` 디렉토리에서 받을 수 있습니다.

| step | 주제 | stage | 핵심 학습 포인트 |
|------|------|:-----:|----------------|
| **[step01](https://github.com/scroogy-dev/ai-onboarding/tree/main/labs/step01-weather)** | 날씨: 자유응답 → 정형 → 리포트 | 1·2·3 | 텍스트 형식 통일, 파일 산출물 도약 |
| **[step02](https://github.com/scroogy-dev/ai-onboarding/tree/main/labs/step02-file-classifier)** | 파일 분류 | 1·2 | Skill 옵션(파라미터) 설계 |
| **[step03](https://github.com/scroogy-dev/ai-onboarding/tree/main/labs/step03-voca-quiz)** | 영어 단어 출제기 | 1·2 | 사진 입력·출처 충실성·외부 도구 연결 |
| **[step04](https://github.com/scroogy-dev/ai-onboarding/tree/main/labs/step04-wrong-answer-note)** | 자녀 채점지 오답노트 | 1·2·3 | 다단계 파이프라인 · 검수 자리 · 데이터/뷰 분리 |

<div class="border-l-4 border-emerald-400 pl-6 py-3 my-4 bg-emerald-50 dark:bg-emerald-900/15 rounded-r">

🛠️ **진행 원칙: 프롬프트로만 진행합니다.** 파일·코드·템플릿을 에디터로 직접 고치지 않고, AI에게 프롬프트로 요청합니다.

</div>

> [GitHub `labs/`](https://github.com/scroogy-dev/ai-onboarding/tree/main/labs) · [zip 다운로드](https://github.com/scroogy-dev/ai-onboarding/archive/refs/heads/main.zip) · 사이트 안내: `docs/labs.md`

<style>
table { font-size: 0.78em; }
table th, table td { padding: 0.35em 0.5em; }
</style>

<!--
docs/labs.md의 시리즈 구성 표 슬라이드 압축: ADR-0002 단방향 파생.
풀 코스(stage 1·2·3)는 step01(입문)·step04(종합), 부분(stage 1·2)은 step02·step03: 각 step의 학습 목표에 맞춰 필요한 stage만 둔다.
"프롬프트로만 진행" 원칙은 시리즈 차원의 의도적 수련: 손으로 고치고 싶은 조바심이 곧 수련 지점이라는 더 자세한 메시지는 docs/labs.md 본문에. 슬라이드는 한 줄 핵심만.
-->


---

# step별 학습 포인트

<div grid="~ cols-2 gap-3" class="mt-6">

<div class="rounded-lg overflow-hidden border border-blue-200 dark:border-blue-800">
<div class="bg-blue-100 text-blue-800 px-4 py-2 font-bold">step01: 날씨 (입문)</div>
<div class="bg-blue-50 dark:bg-blue-900/15 px-4 py-3 text-sm">

자유응답 → 정형 응답 Skill → HTML 리포트.

**stage 1·2·3 풀 코스**, 시리즈 입문.

</div>
</div>

<div class="rounded-lg overflow-hidden border border-cyan-200 dark:border-cyan-800">
<div class="bg-cyan-100 text-cyan-800 px-4 py-2 font-bold">step02: 파일 분류</div>
<div class="bg-cyan-50 dark:bg-cyan-900/15 px-4 py-3 text-sm">

옵션(`excel`/`image`)을 받는 Skill로 같은 작업을 분기.

**Skill 파라미터 설계**의 효익.

</div>
</div>

<div class="rounded-lg overflow-hidden border border-purple-200 dark:border-purple-800">
<div class="bg-purple-100 text-purple-800 px-4 py-2 font-bold">step03: 영어 단어 출제기</div>
<div class="bg-purple-50 dark:bg-purple-900/15 px-4 py-3 text-sm">

단어장 사진 + 옵션을 받는 출제 Skill.

**사진의 뜻 그대로 보존** + 단어별 사전 직접 링크.

</div>
</div>

<div class="rounded-lg overflow-hidden border border-orange-200 dark:border-orange-800">
<div class="bg-orange-100 text-orange-800 px-4 py-2 font-bold">step04: 자녀 오답노트 (종합)</div>
<div class="bg-orange-50 dark:bg-orange-900/15 px-4 py-3 text-sm">

채점지 사진 → 인식 엑셀 → **검수** → 자녀용 마크다운·인쇄용 HTML.

다단계 파이프라인 + 데이터/뷰 분리.

</div>
</div>

</div>

<div class="mt-6 text-center text-base opacity-80">
참가자의 사전 경험과 목표에 맞춰 <strong>강사가 실습 경로</strong>를 안내합니다.
</div>

<!--
4개 step의 한 줄 메시지를 카드 그리드로 정렬: 단순 bullet 나열 회피(memory: 의도적 강조 카드 유지, 그룹핑은 시각 구분 권장).
색상 사다리: step01 blue(입문) → step02 cyan(옵션) → step03 purple(사진) → step04 orange(파이프라인): 학습 단계 톤 변화.
하단 한 줄로 강사 안내 메시지(이전 「실행 안내」 슬라이드 핵심) 흡수.
-->


---
layout: section
---

# 보안 및 개인정보

AI 도구를 안전하게 쓰기 위한 핵심 원칙

<!--
docs/security-guide.md의 핵심 메시지를 발표 청중에게 전달하는 섹션 (Issue #12).
본 흐름(Who/Why/What/How)이 끝난 뒤 마지막 강조 메시지로 배치: docs nav에서 security-guide가
본 콘텐츠와 나란히 놓인 독립 페이지인 위상과 정렬.
-->

---

# 공통 원칙 ― 트랙 무관 동일

<div class="border-l-4 border-red-400 pl-6 py-4 my-8 bg-red-50 dark:bg-red-900/15 rounded-r">

⚠️ **AI에 입력하는 모든 내용은 "누군가 볼 수 있다"고 가정하세요.**

엔터프라이즈 환경이라도 이 기본 태도는 유지합니다.

</div>

도구·버전은 계속 바뀌지만 **보안 원칙은 동일**합니다.
입력 단계에서 민감한 정보를 넣지 않는 것이 가장 확실한 보호 방법입니다.

---

# 절대 입력하면 안 되는 정보

| 구분 | 예시 |
|------|------|
| **개인 식별 정보** | 주민등록번호, 여권번호, 운전면허번호 |
| **금융 정보** | 카드번호, 계좌번호 |
| **인증 정보** | 비밀번호, API 키, 인증 토큰 |
| **타인의 개인정보** | 타인 이름·연락처 조합, 동의받지 않은 타인 사진 |

> 위 정보는 **트랙 무관 공통 금지**: 엔터프라이즈 환경에서도 동일하게 적용

---

# 결과물 검증 · 문제 발생 시

<div grid="~ cols-2 gap-4" class="mt-6">

<div class="border-l-4 border-blue-400 pl-4 py-3 bg-blue-50 dark:bg-blue-900/15 rounded-r">

**AI 결과물 검증**

- 사실 확인 필요한 내용(뉴스·통계·법률·의학)은 **원본 출처 별도 확인**
- 외부 공유 전 **회사·기관·학교 기준에 맞는 검토**
- AI 산출물에 **사내·개인정보 포함 여부** 한 번 더 점검

</div>

<div class="border-l-4 border-red-400 pl-4 py-3 bg-red-50 dark:bg-red-900/15 rounded-r">

**문제 발생 시**

- **임직원**: 회사의 **보안사고 신고 프로세스**에 따름
- **학생·일반인**: 해당 AI의 **대화 삭제·히스토리 비활성화** 즉시 사용

</div>

</div>

> AI 환각(hallucination)으로 잘못된 사실을 그럴듯하게 만들어내는 경우가 있으므로 검증은 필수

---

# 임직원 ― 엔터프라이즈 AI는 안전한가?

회사 AI 도구는 **회사가 별도 계약을 맺고 운영하는 환경**입니다.

- **데이터 학습 제외**: 입력 내용이 모델 학습에 사용되지 않음
- **데이터 격리**: 우리 회사 데이터는 다른 회사와 분리되어 처리
- **접근 통제**: 회사 계정으로만 접근, 사용 이력 관리

<div class="border-l-4 border-orange-400 pl-6 py-4 my-6 bg-orange-50 dark:bg-orange-900/15 rounded-r">

위 세 가지 보호 장치는 "입력한 내용이 처리되는 방식"에 대한 것이며,
**"무엇을 입력해도 안전하다"는 뜻이 아닙니다.**

</div>

---

# 임직원 ― 그래도 지켜야 할 것

1. **대외비·기밀 문서 보안 등급 확인**: 사내 AI 사용 허용 등급인지 보안 정책 따르기
2. **개인정보 포함 데이터는 가리거나 빼고 입력**: 전문 용어로 **"비식별 처리"**
3. **결과물 외부 공유 주의**: 사내 정보 포함 여부 검토 후 공유

<div class="border-l-4 border-orange-400 pl-6 py-2 my-3 bg-orange-50 dark:bg-orange-900/15 rounded-r text-sm">

회사 계약은 <strong>데이터가 처리되는 방식</strong>만 보호합니다. <strong>입력하는 정보의 책임은 여전히 본인에게</strong> 있습니다.

</div>

<div class="border-l-4 border-blue-400 pl-6 py-3 my-3 bg-blue-50 dark:bg-blue-900/15 rounded-r">

**비식별 처리 예시**

- `홍길동 (010-1234-5678)` → `A고객 (○○○-○○○○-○○○○)`
- 고객번호 열은 일련번호로 치환

</div>

> 💡 한 줄 요약: 사내 AI는 안전하게 설계되어 있지만, **"입력 전에 한 번 더 생각하기"** 습관은 여전히 중요

---

# 학생·일반인 ― 무료 AI 도구의 특성

무료로 제공되는 AI 도구는 엔터프라이즈 환경과 **다릅니다.**

- 입력 내용이 **서비스 개선에 활용**될 수 있음. 예: 본인이 입력한 대화가 **다른 사람을 위한 학습 데이터로 쓰일 수 있음**
- 대화 내용이 **서버에 저장**될 수 있음
- 보안 수준이 **유료·기업용보다 낮을 수** 있음

<div class="border-l-4 border-orange-400 pl-6 py-4 my-6 bg-orange-50 dark:bg-orange-900/15 rounded-r">

본 교육 실습은 **유료 Claude**(개인 Pro↑·임직원 회사 Team/Enterprise)를 사용하지만,
평소 쓰는 다른 무료 AI에도 **같은 원칙이 적용**됩니다.

</div>

---

# 학생·일반인 ― 꼭 지켜야 할 4가지

<div grid="~ cols-2 gap-4" class="mt-6">

<div class="border-l-4 border-red-400 pl-4 py-3 bg-red-50 dark:bg-red-900/15 rounded-r">

**1. 내 개인정보 X**

이름·전화번호·주소·학번 입력 금지.
"내 이름은 OOO이고 OO학교 다녀" 같은 자연스러운 노출도 주의.

</div>

<div class="border-l-4 border-red-400 pl-4 py-3 bg-red-50 dark:bg-red-900/15 rounded-r">

**2. 타인 정보 X**

친구·가족·선생님의 이름·연락처 입력 금지.
동의받지 않은 타인 사진(단체 사진 등) 업로드 금지.

</div>

<div class="border-l-4 border-red-400 pl-4 py-3 bg-red-50 dark:bg-red-900/15 rounded-r">

**3. 사진 속 개인정보 확인**

이름표·학생증·배경 주소판이 보이지 않는지 확인 후 업로드.

</div>

<div class="border-l-4 border-red-400 pl-4 py-3 bg-red-50 dark:bg-red-900/15 rounded-r">

**4. 서비스 약관 확인**

특히 **"입력 데이터가 학습에 활용되는지"** 항목은 한 번은 확인.

</div>

</div>

> 💡 한 줄 요약: 무료 AI는 편리하지만, **"나와 다른 사람의 개인정보는 절대 입력하지 않기"**

---

# 정리 ― 트랙별 적용

| 원칙 | 임직원 | 학생·일반인 |
|------|:--------:|:------------:|
| 개인 식별 정보 입력 금지 | ✅ | ✅ |
| 타인 개인정보 입력 금지 | ✅ | ✅ |
| 사진 속 개인정보 확인 | ✅ | ✅ |
| 비식별 처리 | ✅ | ✅ |
| AI 결과물 원본 검증 | ✅ | ✅ |
| AI 결과물 외부 공유 전 검토 | ✅ | ✅ |
| 문서 보안 등급 확인 | ✅ (사내 문서) | ― |
| 서비스 약관 확인 | ― (회사가 계약) | ✅ |

<div class="text-sm opacity-70 mt-4">
범례: ✅ 반드시 준수 / ― 해당 없음 또는 트랙 특성상 적용 수준이 다름
</div>

<style>
table { font-size: 0.78em; }
</style>

---

# 공식 문서·참고 자료 ― Claude를 더 알고 싶다면

<div grid="~ cols-3 gap-6" class="mt-6">

<div>

**시작하기**

- [모델 안내](https://docs.claude.com/ko/docs/about-claude/models/overview)
- [Cowork 시작](https://support.claude.com/ko/articles/13345190)
- [Claude Code](https://docs.claude.com/ko/docs/claude-code/overview)
- [Anthropic Learn](https://www.anthropic.com/learn) *(영문)*

</div>

<div>

**자산화·확장**

- [Projects](https://support.claude.com/ko/articles/9517075)
- [스킬](https://support.claude.com/ko/articles/12512176)
- [MCP](https://docs.claude.com/ko/docs/agents-and-tools/mcp) *(개발자용)*

</div>

<div>

**운영·지원**

- [플랜](https://www.anthropic.com/pricing) *(영문)*
- [Support 홈](https://support.claude.com/ko/)
- [Status](https://status.claude.com/)

</div>

</div>

<div class="text-sm opacity-70 mt-8 text-center">
한국어 페이지 우선 · 자세한 안내는 <code>docs/intro.md#official-references</code>
</div>

<style>
a { font-size: 0.92em; }
ul { line-height: 1.7; }
</style>

<!--
docs/intro.md의 「공식 문서·참고 자료」 섹션 슬라이드 동기화.
3그룹·9링크를 3컬럼으로 압축. 라벨은 docs보다 짧게(예: 「Projects(프로젝트)란 무엇입니까」 → 「Projects」), 한 줄 설명은 생략하고 docs로 위임.
한국어 페이지가 부재한 항목은 *(영문)* 또는 *(개발자용)* 한 단어 라벨로 시각 구분.
-->


---
layout: end
---

# 감사합니다

<!--
Q&A 시간 안내. 질문이 있으면 끝나고 강사에게 직접 또는 사후 채널로 받겠다고 안내.
-->

