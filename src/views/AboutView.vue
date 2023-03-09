<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Text :text = "abc"></Text>
  </div>
</template>

<script setup lang="ts">
  import Text from '@/components/Text.vue'
import { ref } from 'vue'
  
const abc = ref('这是一条来自 about 路由组件的传值');

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
