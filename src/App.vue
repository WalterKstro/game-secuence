<script setup>
import { defineAsyncComponent } from 'vue';
const Card = defineAsyncComponent(() => import('./components/Card.vue'))
</script>

<template>
  <div class="card__secuence p-2 p-md-4">
    <card></card>
  </div>
</template>
