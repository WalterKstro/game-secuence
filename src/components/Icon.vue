<template>
    <span class="icon__answer">
        <i class="bi" :class="[icon,color]"></i>
    </span>
</template>

<script setup>
defineProps({
    icon: {
        type: String,
        default: 'bi-check-circle-fill'
    },
    color: {
        type: String,
        default: 'text-success'
    }
})
</script>