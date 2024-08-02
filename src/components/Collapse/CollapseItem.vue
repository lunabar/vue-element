<template>
  <div
    class="vk-collapse-item"
    :class="{
      'is-disabled': disabled
    }"
  >
    <div class="vk-collase-item__header" :id="`item-header-${name}`" @click="handleClick">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="vk-collapse-item__content" :id="`item-content-${name}`" v-show="isActive">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { CollapseItemProps } from './types';
  import { collapseKey } from './types';
  import { inject, computed } from 'vue';
  defineOptions({
    name: 'VCollapseItem',
  })
  const props = defineProps<CollapseItemProps>()
  const collapseContext = inject(collapseKey)
  const handleClick = () => {
    if (props.disabled) return;
    collapseContext?.handleItemClick(props.name)
  }
  const isActive = computed(() => collapseContext?.activeName.value.includes(props.name))
  
</script>

<style>
  .vk-collase-item__header {
    font:30px;
  }
</style>