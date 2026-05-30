# Issue #42 스펙 — 이론 파트 구성 검토와 '에이전트 = 모델 + 하네스' 멘탈모델

> GitHub: https://github.com/scroogy-dev/ai-onboarding/issues/42
> 방향 근거: [issue-0042-decision.md](./issue-0042-decision.md)

## 목표 (Goal)

비개발자 학습자가 **`에이전트 = 모델 + 하네스`** 를 쉽게 이해해, *"에이전트가 알아서 회의해 좋은 결론을 낸다"* 는 오해를 풀도록 이론 파트를 재구성한다.

---

## 범위 (Scope)

**포함 (In)**

- **`에이전트 = 모델 + 하네스`** 멘탈모델을 쉬운 말로 정립 (엔지니어링 3분과 비교가 아님)
  - 모델 = 똑똑하지만 틀릴 수 있는 *생각하는 부분*, 하네스 = *사람이 직접 세팅하는 것들*
- **멀티 에이전트 자율성 오해 해소** 메시지 설계 (단정적 원칙형 "흔한 오해" 박스 등)
- 하네스 **범위**를 비개발자 기준 **"내가 세팅하는 것들"**(지시·자료·단계·검토)로 구체화
- 위 개념 정립을 기준으로 **이론 파트(`docs/index.md`·`docs/intro.md`·`docs/basics.md`)의 순서·구성 재검토** 및 재배치 제안
- 필요 시 `glossary.md` 최소 보강

**비포함 (Out)**

- 프롬프트/컨텍스트/하네스 **'엔지니어링' 3분과 비교 강의** — 의사결정으로 기각 ([issue-0042-decision.md](./issue-0042-decision.md))
- 실습(`labs/`)·보안·운영 등 이론 파트 밖 문서의 구성 변경
- 슬라이드(`slides/`) 파생 반영 (이론 본문 확정 후 별도 후행 작업)
- 본 framing의 ADR 승격 (이슈 완료 시 후보로만 다룸, 본 이슈 범위 밖)

---

## 완료의 정의 (Definition of Done)

- [ ] `모델 + 하네스` 멘탈모델이 비개발자 톤으로 정리되었다 (모델=틀릴 수 있는 생각, 하네스=사람이 짜는 틀)
- [ ] "에이전트끼리 알아서 회의해 좋은 결론" 오해를 푸는 메시지가 단정적 원칙형으로 마련되었다
- [ ] 하네스 범위가 "내가 세팅하는 것들"로 구체화되어 *마법 아님*이 드러난다
- [ ] 개념 정립 결과를 기준으로 이론 파트 3개 문서의 구성 재검토 결과(현행 진단 + 재배치 제안)가 정리되었다
- [ ] 확정 결과가 SSoT인 `docs/` 본문(및 필요 시 `glossary.md`)에 반영되었다

---

## 연관 문서

| 문서 | 역할 |
|------|------|
| [issue-0042-decision.md](./issue-0042-decision.md) | 방향 결정 근거 (3분과 비교 기각, 모델+하네스 채택) |
| [ADR-0001](../../../50_adr/active/adr-0001-practice-tool-scope-and-stage-model.md) | AI 활용 3단계 모델·에이전트 정의 — "에이전트 = 모델 + 하네스" 정합성 기준 |
| [ADR-0005](../../../50_adr/active/adr-0005-core-message-non-developers-make-software.md) | 본질 메시지 프레임·메커니즘 결과형 우회 — 이론 파트 프레이밍 기준 |
| [ADR-0008](../../../50_adr/active/adr-0008-determinism-explicit-visualization-comparison-table.md) | 1회성 프롬프트·에이전트 스킬·애플리케이션 세 형태 분류 — 인접 분류 |
| [glossary.md](../../../40_domain/glossary.md) | 용어 사전 — 필요 시 최소 보강 |
| `docs/index.md`·`docs/intro.md`·`docs/basics.md` | 재검토 대상 이론 파트 본문 (SSoT) |

**외부 참고**

- Martin Fowler, *Harness Engineering* — https://martinfowler.com/articles/harness-engineering.html (개발자용 범위라 docs 직접 인용은 지양, 원칙만 plan 근거로)
