<template>
    <div class="rounded p-1 justify-content-between posible__answers position-absolute" v-show="isNullProp">
        <option-button
            v-for="answer in listProbablyAnswers" :key="answer"
            :answer="answer"
            @click="chooseNumber(answer)"
        />
    </div>
</template>

<script setup>
import { defineAsyncComponent,inject } from "vue"

const optionButton = defineAsyncComponent(() => import('./OptionButton.vue'))
const {listProbablyAnswers} = inject('listProbablyAnswers')
const emit = defineEmits(['displayNumber'])
const {isNullProp} = defineProps(['isNullProp'])

const chooseNumber = answer => {
    emit('displayNumber', answer)
}

</script>

<style scoped>
.posible__answers{ 
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1rem;
    display: flex;
    width: 7.5rem;
    background-color: var(--gray);
    line-height: normal;
}
</style>