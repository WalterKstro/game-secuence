<template>
    <button 
        type="button" 
        class="posible__answers--answer fw-bolder border-0 rounded-1 p-1">
        {{ answer }}
    </button>
</template>

<script setup>
const { answer } = defineProps(['answer'])

</script>

<style scoped>
.posible__answers--answer{
    color: var(--dark);
}
</style>