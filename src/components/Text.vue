<template>
  <div>
    <p>{{ textFromParent }}</p>
    
    <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>

  </div>
</template>

<script lang="ts" setup>
import { defineProps, onMounted } from 'vue'

const props = defineProps({
  text: String
})

const textFromParent = props.text

onMounted(function () {})
</script>
