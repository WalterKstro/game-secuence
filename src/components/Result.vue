<template>
    <div class="result__component text-center">
        <div class="text-center">
        <i class="result__icon text-success bi bi-check-circle-fill"></i>
        <h4 class="text-uppercase text-muted fw-bolder mt-3">Desempeño</h4>
    </div>
    <p class="percentage__result fw-bolder">{{ scorePercentage }}</p>
    <button class="btn btn-danger btn__result text-uppercase py-3 px-5 fw-bolder rounded-pill border-0">Continuar</button>
    </div>
</template>

<script setup>
import { computed,inject } from 'vue';
const score = inject('score');

const scorePercentage = computed(() => {
    return `${score.value}%`
}) 
</script>

<style scoped>
.result__component{
    margin: auto;
    max-width: 20rem;
    min-height: 25rem;
    width: 100%;
    padding: 3rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 1rem;
}
.percentage__result{
    font-size: 5rem;
}
.result__icon{
    font-size: 2.5rem;
}
.btn__result,
.percentage__result{
    justify-self: center;
}
@media screen and (min-width:1024px) {
    .result__component{
        min-height: 25rem;
        max-width: 60rem;
        align-items: center;
    }
}
</style>