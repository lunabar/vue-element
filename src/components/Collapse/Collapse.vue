<template>
  <div class="vk-collapse">
      <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import { ref, provide } from 'vue'
  import type { NameType } from './types';
  import { collapseKey } from './types';
  defineOptions({
    name: "VCollapse",
  })
  const activeName = ref<NameType[]>([])
  const handleItemClick = (item: NameType) => {
    const index = activeName.value.indexOf(item)
    if (index > -1) {
      activeName.value.splice(index, 1)
    }else {
      activeName.value.push(item)
    }
  }
  provide(collapseKey, {
    activeName,
    handleItemClick,
  })
</script>

<style>
</style>