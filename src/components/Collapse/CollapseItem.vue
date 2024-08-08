<template>
  <div
    class="vk-collapse-item"
    :class="{
      'is-disabled': disabled
    }"
  >
    <div class="vk-collapse-item__header"
      :class = "{
        'is-disabled': disabled,
        'is-active': isActive,
      }"
      :id="`item-header-${name}`" @click="handleClick">
      <slot name="title">{{ title }}</slot>
    </div>
    <Transition name="slide" v-on="transitionEvents">
      <div class="vk-collapse-item__content" :id="`item-content-${name}`" v-show="isActive">
        <slot></slot>
      </div>
    </Transition>
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
  const isActive = computed(() => collapseContext?.activeNames.value.includes(props.name))
  const transitionEvents: Record<string, (el: HTMLElement) => void> = {
    // content未插入之前
    'beforeEnter' : function(el) {
      el.style.height = '0px'
    },
    // content被插入
    enter(el) {
      el.style.height = `${el.scrollHeight}px`
    },
    // transition取消
    afterEnter(el) {
      el.style.height = ''
    },
    // 以下content内容插入离开，与进来形成镜像
    beforeLeave(el) {
      el.style.height = `${el.scrollHeight}px`
    },
    leave(el) {
      el.style.height = '0px'
    },
    afterLeave(el) {
      el.style.height = ''
    }
  }
  
</script>

<style>
  .vk-collase-item__header {
    font:30px;
  }
</style>