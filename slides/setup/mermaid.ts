import { defineMermaidSetup } from '@slidev/types'

// the-unnamed 베이스 mermaid 셋업이 forest(라이트) 강제 → 다크 슬라이드 위에서 가독성 저하.
// ADR-0004 결정에 따라 다크 슬라이드와 정합되도록 mermaid 테마를 'dark'로 override.
//
// ADR-0002 변형 금지 자산은 메시지·구조 중심 보호이며, 색·여백 등 매체 적응은
// 발표 표면이 자체 톤(다크)에 맞춰 조정 가능 (ADR-0004 Decision 3).
export default defineMermaidSetup(() => ({
  theme: 'dark',
}))
