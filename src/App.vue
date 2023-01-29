<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['msg']
})
</script>

<template>
  <div>
    <span>{{ msg }}</span>
    <span>test</span>
  </div>
</template>