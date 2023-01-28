<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['msg']
})
</script>

<template>
  <h1>{{ msg }}</h1>
</template>