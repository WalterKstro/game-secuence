<template>
    <div class="secuence__numbers">
        <number 
            v-for="(number, index) in listSecuenceOfNumbers" 
            :key="index" 
            :number="number" 
            :listAnswer="listProbablyAnswers"
            @send-answer="sendChooisedAnswerAndTruthyAnswer"/>
    </div>
</template>

<script setup>
import { defineAsyncComponent,onMounted,ref,inject } from 'vue';
import useSecuence from '../composables /useSecuence.js'

const Number = defineAsyncComponent( () => import('./Number.vue') )
const listSecuenceOfNumbers = ref({})
const listProbablyAnswers = ref([])
const { hideRandomNumber,getListWithTheProbablityAnswer } = useSecuence()
const answerTruthy = ref(0)
const {updateChooisedAnswerAndTruthyAnswer} = inject('objectAnwers')


const sendChooisedAnswerAndTruthyAnswer = chooisedAnswer => {
    updateChooisedAnswerAndTruthyAnswer({ chooisedAnswer,truthyAnswer:answerTruthy.value })
}

onMounted(() => {
    const {truthy,list} = hideRandomNumber()
    listSecuenceOfNumbers.value = list;
    answerTruthy.value = truthy;
    listProbablyAnswers.value = getListWithTheProbablityAnswer(truthy)
})

</script>