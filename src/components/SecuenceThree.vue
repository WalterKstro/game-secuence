<template>
    <div class="grid__component card__secuence p-4 rounded-3">
        <h1 class="fs-2 text-center m-0">Completa la secuencia</h1>
        <div class="secuence__numbers d-flex flex-column justify-content-between align-items-center flex-lg-row">
            <number 
            v-for="(number, index) in listSecuenceOfNumbers" 
            :key="index" 
            :number="number" 
            :listAnswer="listProbablyAnswers"
            @send-answer="sendChooisedAnswerAndTruthyAnswer"/>
        </div>
        <button class="btn__answer" @click="checkAnswer">Responder</button>
    </div>
</template>

<script setup>
import { defineAsyncComponent, onMounted,ref,inject } from 'vue';
import useSecuence from '../composables /useSecuence.js'
import useCheckAnswer from '../composables /useCheckAnswer';

const Number = defineAsyncComponent( () => import('./Number.vue') )
const listSecuenceOfNumbers = ref({})
const listProbablyAnswers = ref([])
const { hideRandomNumber,getListWithTheProbablityAnswer } = useSecuence()
const {checkingTheAnswers} = useCheckAnswer();
const answerTruthy = ref(0)

const {chooisedAnswerAndTruthyAnswer, updateChooisedAnswerAndTruthyAnswer} = inject('objectAnwers')
const {updateResultAnswer} = inject('resultAnswer')

const sendChooisedAnswerAndTruthyAnswer = chooisedAnswer => {
    updateChooisedAnswerAndTruthyAnswer({ chooisedAnswer,truthyAnswer:answerTruthy.value })
}

const checkAnswer = () => {
    const { chooisedAnswer,truthyAnswer } = chooisedAnswerAndTruthyAnswer.value;
    updateResultAnswer( checkingTheAnswers( truthyAnswer, chooisedAnswer) )
}


onMounted(() => {
    const {truthy,list} = hideRandomNumber()
    listSecuenceOfNumbers.value = list;
    answerTruthy.value = truthy;
    listProbablyAnswers.value = getListWithTheProbablityAnswer(truthy)
})
</script>