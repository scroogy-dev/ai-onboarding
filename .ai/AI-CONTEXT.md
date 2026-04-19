# AI-CONTEXT.md

이 파일은 AI 어시스턴트를 위한 프로젝트 가이드입니다.
사람을 위한 안내는 프로젝트 루트의 [README.md](../README.md)를 참고하세요.

---

## 프로젝트 목적

비개발자(임직원, 학생/일반인) 대상 AI 활용 교육자료를 마크다운(SSoT)으로 작성하고,
MkDocs + Material 기반 정적 사이트(GitHub Pages)와 컨플루언스 위키 양쪽으로 발행한다.

---

## 프로젝트 규칙

- 교육 대상이 비개발자이므로, 모든 콘텐츠는 전문 용어를 최소화하고 평이한 톤으로 작성한다
- `docs/` 디렉토리의 마크다운이 SSoT — 콘텐츠 수정은 항상 여기서 한다
- nav 순서는 `mkdocs.yml`에서 명시적으로 제어한다 (파일명에 번호 접두사 붙이지 않음)
- `docs/` 하위 디렉토리명은 URL 경로가 되므로 영문 소문자, 하이픈만 사용한다
- 마크다운 파일은 한국어로 작성하고, 제목은 `#` 1개로 시작한다
- Python 스크립트(`scripts/`)는 PEP 8을 준수한다

| 파일 | 설명 | 사용 시점 |
|------|------|----------|
| `.ai/10_rules/context-loading.md`    | 작업 전 컨텍스트 확인 절차 | 문서 작업 전      |
| `.ai/10_rules/file-change-policy.md` | 파일 변경 규칙             | 파일 추가·삭제 시 |

---

## 기술 스택

- MkDocs + Material for MkDocs (정적 사이트 빌더)
- GitHub Pages (호스팅)
- GitHub Actions (CI/CD — main push → gh-pages 배포)
- Atlassian Confluence (위키 발행 — MCP 연동)

---

## 디렉토리 구조

```
ai-onboarding/
├── mkdocs.yml              # 사이트 설정 (네비게이션, 테마, 플러그인)
├── requirements.txt        # Python 의존성
├── docs/                   # SSoT: 모든 원본 마크다운
│   ├── index.md
│   └── assets/images/
├── overrides/              # Material 테마 커스터마이징
├── scripts/                # 자동화 스크립트 (컨플루언스 동기화 등)
├── .github/workflows/      # CI/CD
└── .ai/                    # AI 협업 컨텍스트
```

---

## .ai 디렉토리 구조

디렉토리명 앞의 숫자는 AI가 문서를 읽는 우선순위를 나타냅니다.
숫자가 낮을수록 먼저 읽어야 하며, 상위 우선순위 문서가 하위 우선순위 문서보다 우선합니다.

```
.ai/
├── 10_rules/        # [1순위] AI 행위 규칙
├── 20_templates/    # 필요 시 참조하는 템플릿
├── 30_contract/     # [2순위] 소프트웨어 계약 (index.md로 선택적 참조)
├── 40_domain/       # [3순위] 비즈니스 도메인 (index.md로 선택적 참조)
│   ├── policies/    # common/ (공통 정책, 동기화 대상) + local/ (이 repo 고유 정책)
│   └── specs/       # 기능 명세
├── 50_adr/          # [4순위] 의사결정 기록 (index.md로 선택적 참조)
├── 60_codebase/     # [5순위] 소스코드 엔트리포인트·호출 흐름 색인 (index.md로 선택적 참조)
├── 90_issues/       # 이슈 단위 작업 (active/ + archive/)
└── 99_workspace/    # AI 임시 작업공간
```

## Git 정책

아래 skill이 설치되어 있으면 해당 skill의 지침을 따릅니다.

| Skill | 설명 | 사용 시점 |
|-------|------|----------|
| `/git-commit` | 커밋 메시지 규칙 | 커밋 생성 시 |
| `/git-pr` | PR 생성 규칙 | PR 생성 시 |
| `/git-review-context` | 리뷰 전 변경사항 사전 분석 | 사용자 요청 시 |
| `/git-review` | 리뷰 수행 절차 | 리뷰 수행 시 |

## 이슈 작업 워크플로우

아래 skill이 설치되어 있으면 해당 skill의 지침을 따릅니다.

| Skill | 설명 | 사용 시점 |
|-------|------|----------|
| `/issue-work` | 이슈 단위 스펙/계획/요약 관리 | 이슈 작업 시 |
| `/issue-audit` | 이슈 스펙 대비 구현 독립 감사 | 구현 검증 시 |