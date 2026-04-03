# Issue #0001 실행계획

> 스펙: [issue-0001-spec.md](./issue-0001-spec.md)

---

## 산출물 위치

```
ai-onboarding/
├── mkdocs.yml
├── requirements.txt
├── .github/workflows/deploy.yml
├── .gitignore
├── docs/
│   ├── index.md                 ← 메인 페이지 (Why + What + How 개요)
│   ├── security-guide.md        ← 보안 및 개인정보 가이드
│   ├── operation-guide.md       ← 교육 운영 가이드
│   └── assets/images/           ← 이미지 리소스
├── overrides/                   ← Material 테마 커스터마이징 (선택)
└── scripts/
    └── sync-confluence.py       ← 컨플루언스 동기화 스켈레톤
```

> How 하위 실습 페이지 4종은 실습 내용 확정 후 별도 이슈로 진행한다.

---

## Tasks

### Task 1: MkDocs + Material 프로젝트 세팅

- [x] 완료
- **목표**: 로컬 빌드·서빙 가능한 MkDocs + Material 프로젝트 구조와 GitHub Pages 배포 CI를 구성한다
- **작업 내용**:
  1. `mkdocs.yml` 생성 (Material 테마, 한국어 검색, nav 명시)
  2. `requirements.txt` 생성 (mkdocs-material)
  3. `.gitignore` 생성 (site/, __pycache__/, .venv/)
  4. `.github/workflows/deploy.yml` 생성 (main push → mkdocs gh-deploy)
  5. `docs/index.md` 간단한 랜딩 페이지 placeholder
  6. `docs/assets/images/.gitkeep` 생성
  7. `overrides/.gitkeep` 생성
  8. `scripts/sync-confluence.py` 빈 스켈레톤 생성
- **완료 기준**: `mkdocs serve`로 로컬 프리뷰가 가능하고, CI 설정이 존재한다

---

### Task 2: 메인 페이지 작성

- [x] 완료
- **목표**: 교육의 전체 맥락(Why/What/How)을 한 페이지에 담아 교육생이 교육의 목적과 흐름을 즉시 파악할 수 있도록 한다
- **작업 내용**:
  1. `docs/index.md`에 콘텐츠 작성
  2. Why 섹션: 소프트웨어 가치(기능제공, 시간절약, 비용감소)와 AI가 진입장벽을 낮추는 역할 설명
  3. What 섹션: "1개라도 실제로 반복해서 쓸 수 있는 것을 만든다" 목표 전달
  4. How 섹션: 대상별 실행 계획 개요 (하위 실습 페이지는 별도 이슈에서 작성 예정임을 안내)
  5. 실습 접근법(최소 플랜 → 실행) 안내 포함
- **완료 기준**: 파일이 존재하고, Why/What/How 3개 섹션이 모두 내용으로 채워져 있다

---

### Task 3: 보안 및 개인정보 가이드

- [x] 완료
- **목표**: 대상별 보안 유의사항과 개인정보 보호 가이드를 한 페이지로 정리
- **작업 내용**:
  1. `docs/security-guide.md` 파일 생성
  2. 임직원 대상: 사내 엔터프라이즈 계약 기반 보안 안내 (보안 이슈 없음 근거 설명)
  3. 학생/일반인 대상: 개인정보 보호 원칙 (입력하면 안 되는 정보, 사진 속 개인정보 주의 등)
  4. 공통: "도구는 바뀔 수 있지만 보안 원칙은 동일하다" 메시지
- **완료 기준**: 대상별 보안 가이드가 구분되어 있고, 비개발자가 이해할 수 있는 톤으로 작성되어 있다

---

### Task 4: 교육 운영 가이드

- [x] 완료
- **목표**: 교육 운영자(강사)를 위한 사전설문/효과측정/개선 프로세스 가이드 작성
- **작업 내용**:
  1. `docs/operation-guide.md` 파일 생성
  2. 사전설문 설계: 직군별/문제유형별 그룹핑을 위한 설문 항목 예시
  3. 교육 당일 운영 체크리스트
  4. 효과측정: 1개월 후 사용률 추적 방법 및 판단 기준
  5. 개선 프로세스: 교육 후 설문 → 개선 포인트 반영 사이클
  6. 과제 난이도 파일럿 테스트 방법
  7. 운영 부하 관리: 초반 2~3개 유형 제한 → 점진적 확장 원칙
- **완료 기준**: 교육 운영자가 이 문서만 보고 교육을 준비·운영·개선할 수 있는 수준으로 작성되어 있다

---

### Task 5: 컨플루언스 업로드

- [ ] 완료
- **목표**: 작성된 마크다운 파일을 Atlassian MCP를 통해 컨플루언스 위키 페이지로 게시
- **작업 내용**:
  1. Task 2~4에서 작성한 md 파일을 사용자에게 확인받기
  2. 메인 페이지를 컨플루언스에 생성
  3. 보안 가이드, 운영 가이드를 하위 페이지로 생성
  4. 페이지 간 링크 정합성 확인
- **완료 기준**: 모든 페이지가 컨플루언스에 게시되어 있고 링크가 정상 동작한다
