# ai-onboarding

비개발자(임직원, 학생/일반인)를 위한 AI 활용 교육 사이트입니다.

마크다운 원본(`docs/`)을 단일 소스(SSoT)로 관리하며, [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) 기반 정적 사이트(GitHub Pages)와 컨플루언스 위키 양쪽으로 발행합니다. 발표용 슬라이드는 [Slidev](https://sli.dev/)로 별도 빌드하여 같은 GitHub Pages 하위 경로에 함께 배포합니다.

## 발행 채널

| 채널 | URL | 빌더 | 소스 |
|------|-----|------|------|
| 문서 사이트 | https://scroogy-dev.github.io/ai-onboarding/ | MkDocs Material | `docs/` |
| 발표 슬라이드 | https://scroogy-dev.github.io/ai-onboarding/slides/ | Slidev | `slides/slides.md` |

`docs/`가 콘텐츠 SSoT이며 `slides/`는 그 파생 표면입니다. 단방향 동기화 원칙은 [ADR-0002](.ai/50_adr/active/adr-0002-publishing-structure-docs-ssot-slides-derivative.md) 참고.

## 로컬 실행

### 문서 사이트 (MkDocs)

```bash
pip install -r requirements.txt
mkdocs serve
# http://127.0.0.1:8000
```

### 발표 슬라이드 (Slidev)

```bash
cd slides
npm install
npm run dev
# http://localhost:3030
```

빌드만 하려면 `npm run build` (산출물: `slides/dist/`).

## 배포

`main` 브랜치 push 시 GitHub Actions가 MkDocs와 Slidev를 함께 빌드해 `gh-pages` 브랜치에 합본 배포합니다 (`.github/workflows/deploy.yml`). 별도 수동 배포 명령은 사용하지 않습니다.

## 발표 직전 sync 체크리스트

발표 마일스톤 직전에 `docs/`(SSoT)의 핵심 메시지가 `slides/`에 정확히 반영됐는지 한 번 점검합니다. ADR-0002의 단방향 동기화 원칙에 따라 **항상 `docs/`를 기준**으로 비교합니다.

- [ ] `docs/`의 핵심 메시지·구성·다이어그램·표가 `slides/`에 동일하게 전달됨 (슬라이드 폭 제약으로 문구가 짧아져도 의미는 보존)
- [ ] `docs/`의 강조 요소(admonition·강조 박스 등)가 슬라이드에서도 시각적으로 구분되어 누락 없음
- [ ] `slides/` 로컬 실행(`npm run dev`)으로 처음부터 끝까지 1회 풀 점검 — Mermaid·표 깨짐 없음
- [ ] 배포 URL(문서·슬라이드)에서 동일 점검 1회

세부 점검 항목은 발표 회차마다 달라지므로, 회차별 변경 범위에 맞춰 위 원칙을 적용합니다. "왜"가 더 궁금하면 ADR-0002의 "원칙: 단방향 동기화" 항목을 참조하세요.

## 디렉토리 구조

```
ai-onboarding/
├── .ai/                    # AI 협업 컨텍스트 (ADR, 이슈 작업 등)
├── .github/workflows/      # CI/CD (MkDocs + Slidev 합본 배포)
├── docs/                   # SSoT: 모든 원본 마크다운 (MkDocs로 발행)
├── overrides/              # MkDocs Material 테마 커스터마이징
├── scripts/                # 자동화 스크립트 (컨플루언스 동기화 등)
├── slides/                 # docs/의 발표용 파생 (Slidev로 발행)
├── mkdocs.yml              # MkDocs 사이트 설정
└── requirements.txt        # MkDocs Python 의존성
```

AI 어시스턴트용 가이드는 [.ai/AI-CONTEXT.md](.ai/AI-CONTEXT.md)를 참고하세요.
