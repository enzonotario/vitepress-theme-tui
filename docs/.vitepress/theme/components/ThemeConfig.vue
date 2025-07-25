<script setup>
import { onMounted, ref } from 'vue'
import { getBorderRadius, setBorderRadius } from '../composables/useTuiConfig.js'

const borderRadius = ref(0)

onMounted(() => {
  borderRadius.value = getBorderRadius()
})

function onBorderRadiusChange() {
  setBorderRadius(borderRadius.value)
}
</script>

<template>
  <div class="tui-card xs">
    <label for="border-radius-input" class="tui-card-title">Border Radius</label>
    <div class="tui-card-content mt-0 h-full">
      <div class="h-full w-full flex flex-row">
        <input
          id="border-radius-input"
          v-model="borderRadius"
          type="number"
          min="0"
          class="h-full max-w-24 flex-1"
          @change="onBorderRadiusChange"
        >
        <span>px</span>
      </div>
    </div>
  </div>
</template>
