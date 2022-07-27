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

<style scoped>
.icon__answer{
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    font-size: 2.5rem;
    left: 110%;
}
@media screen and (min-width:992px) {
    .icon__answer{
        left: 50%;
        transform: translateX(-50%);
        top: 100%;
    }   
}
</style>