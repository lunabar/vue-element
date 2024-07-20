<template>
  <button
    class="vk-Button"
    :class = "{
      [`vk-button-${type}`]: type,
      [`vk-button-${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-disabled': disabled,
    }"
    :disabled="disabled"
  >
    <span>
      <slot/>
    </span>
  </button>

</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'VButton'
  })
</script>

<script setup lang="ts">
  // import { buttonProps } from './types'; 
  import type { ButtonProps } from './types';
  // defineProps(buttonProps)
  defineProps<ButtonProps>()
</script>

<style>
</style>