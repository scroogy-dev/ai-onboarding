import { defineMermaidSetup } from '@slidev/types'

// Claude 라이트 톤 슬라이드(Issue #44)에 맞춰 mermaid를 라이트(neutral)로.
// ADR-0004의 dark override를 대체 — slides가 the-unnamed(다크)에서
// default(라이트) + Claude 토큰으로 전환되면서 mermaid도 라이트 톤으로 정합.
export default defineMermaidSetup(() => ({
  theme: 'neutral',
}))
