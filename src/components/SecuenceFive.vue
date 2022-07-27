<template>
    <div class="grid__component card__secuence p-4 rounded-3">
        <h1 class="fs-2 text-center m-0">Completa la secuencia</h1>
        <div class="secuence__numbers d-flex flex-column justify-content-between align-items-center flex-lg-row">
            <number 
                v-for="(number, index) in listSecuenceOfNumbers" 
                :key="index" 
                :number="number"
            />
        </div>
        <button class="btn__answer" @click="checkAnswer">Responder</button>
    </div>
</template>

<script setup>
import { defineAsyncComponent, onMounted,ref,inject } from 'vue';
import useSecuence from '../composables /useSecuence.js'
import useCheckAnswer from '../composables /useCheckAnswer';

const number = defineAsyncComponent( () => import('./Number.vue') )
const { objectWithSecuenceUncompletedAndTrutyAnswer,getListWithTheProbablityAnswer } = useSecuence()
const {checkingTheAnswers} = useCheckAnswer();
const listSecuenceOfNumbers = ref([])

/*Inject*/
const {chooisedAnswerAndTruthyAnswer, updateChooisedAnswerAndTruthyAnswer} = inject('objectAnwers')
const {updateResultAnswer} = inject('resultAnswer')
const {updateListProbablyAnswers} = inject('listProbablyAnswers')

const checkAnswer = () => {
    const { chooised,truthy } = chooisedAnswerAndTruthyAnswer.value;
    updateResultAnswer( checkingTheAnswers( truthy, chooised) )
}


onMounted(() => {
    const {truthy,list} = objectWithSecuenceUncompletedAndTrutyAnswer()
    listSecuenceOfNumbers.value = list;
    
    updateChooisedAnswerAndTruthyAnswer({truthy})
    updateListProbablyAnswers( getListWithTheProbablityAnswer(truthy) )
})
</script>