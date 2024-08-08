<template>
  <div class="vk-collapse">
      <slot></slot>
      <!-- {{ `activaNames:${activeNames}` }} -->
  </div>
</template>

<script setup lang="ts">
  import { provide } from 'vue';
  // import { ref, watch} from 'vue';
  import type { NameType, CollapseProps } from './types';
  // import type { CollapseEmits } from './types';

  import { collapseKey } from './types';
  defineOptions({
    name: "VCollapse",
  })
  const props = defineProps<CollapseProps>()
  const activeNames = defineModel<NameType[]>({required: true})
  // defineModel底层原理如下
  // const emits = defineEmits<CollapseEmits>()
  // const activeNames = ref<NameType[]>(props.modelValue)
  // watch(() => props.modelValue, () => {
  //   activeNames.value = props.modelValue
  // })
  if (props.accordion && activeNames.value.length>1) {
    console.warn('arrodion model should only have one active item')
  }
  const handleItemClick = (item: NameType) => {
    if (props.accordion) {
      activeNames.value = [activeNames.value[0] === item ? '' : item]
    }else{
      const index = activeNames.value.indexOf(item)
      if (index > -1) {
        activeNames.value.splice(index, 1)
      }else {
        activeNames.value.push(item)
      }
      // emits('update:modelVlaue', activeNames.value)
      // emits('change:modelVlaue', activeNames.value) 
      }
    
  }
  provide(collapseKey, {
    activeNames,
    handleItemClick,
  })
</script>

<style>
</style>