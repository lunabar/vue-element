<script setup lang="ts">
  import VButton from './components/Button/Button.vue';
  import VCollapse from './components/Collapse/Collapse.vue';
  import VCollapseItem from './components/Collapse/CollapseItem.vue'
  import { onMounted, ref } from 'vue'
  import type { ButtonInstance } from './components/Button/types';
  const openedValue = ref(["a"])
  const buttonRef = ref<ButtonInstance | null>(null)
  const open = () => {
    alert(123)
  }
  onMounted(() => {
    if (buttonRef.value){
      console.log(buttonRef.value.ref)
    }
    setTimeout(() => {
      openedValue.value = ['a', 'b']
    },2000)
  })
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <main>
    <VButton ref="buttonRef" class="attributs">Test Button</VButton>
    <VButton plain @click="open">Plain Button</VButton>
    <VButton round>Round Button</VButton>
    <VButton circle>Circle Button</VButton>
    <VButton disabled>Disabled Button</VButton>
    <br><br>
    <VButton type="primary">Primary Button</VButton>
    <VButton type="success">Success Button</VButton>
    <VButton type="info">Info Button</VButton>
    <VButton type="warning">Warning Button</VButton>
    <VButton type="danger">Danger Button</VButton>
    <br><br>
    <VButton type="primary" plain>Primary Button</VButton>
    <VButton type="success" plain>Success Button</VButton>
    <VButton type="info" plain>Info Button</VButton>
    <VButton type="warning" plain>Warning Button</VButton>
    <VButton type="danger" plain>Danger Button</VButton>
    <br><br>
    <VButton size="large">Large</VButton>
    <VButton size="small">Small</VButton><br/><br/>

    <VCollapse accordion v-model="openedValue">
      <VCollapseItem name="a">
        <template #title>
          <h1>nice title</h1>
        </template>
        <h1>headline title</h1>
        <div>this is content a aaa</div>
      </VCollapseItem>  
      <VCollapseItem name="b" title="nice title b item b">
        <div>this is bbbbb test</div>
      </VCollapseItem>
      <VCollapseItem name="c" title="nice cccc" disabled>
        <div>this is cccc test</div>
      </VCollapseItem>
    </VCollapse>
    {{ openedValue }}
    




  </main>

</template>

<style>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
