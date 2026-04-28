<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'

const { currentSlideNo, total } = useNav()
const progress = computed(() => (currentSlideNo.value / total.value) * 100)
</script>

<template>
  <div class="absolute bottom-1.5 right-3 text-[10px] opacity-30 font-mono select-none print:hidden z-10 leading-none">
    {{ currentSlideNo }} / {{ total }}
  </div>
  <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-white/5 print:hidden z-10">
    <div
      class="h-full bg-cyan-400/70 transition-all duration-300 ease-out"
      :style="{ width: progress + '%' }"
    />
  </div>
</template>
