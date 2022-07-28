<script setup>
import { defineAsyncComponent } from 'vue';
const card = defineAsyncComponent(() => import('./components/Card.vue'))
</script>

<template>
    <card></card>
</template>
