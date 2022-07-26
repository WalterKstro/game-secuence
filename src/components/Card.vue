<template>
    <h1 class="fs-2 text-center m-0" v-if="clearResultComponent">Completa la secuencia</h1>
    <Transition name="slide-fade">
        <component :is="currentComponent"></component>
    </Transition>
    <button class="btn__answer" @click="checkAnswer" v-if="clearResultComponent">Responder</button>
</template>

<script setup>
import { defineAsyncComponent, shallowRef,ref,provide,computed } from "vue";
import useCheckAnswer from '../composables /useCheckAnswer';

const secuenceOne = defineAsyncComponent( () => import('./SecuenceOne.vue') )
const secuenceTwo = defineAsyncComponent( () => import('./SecuenceTwo.vue') )
const secuenceThree = defineAsyncComponent( () => import('./SecuenceThree.vue') )
const result = defineAsyncComponent(() => import('./Result.vue'))


const {checkingTheAnswers} = useCheckAnswer();
const listComponents = [secuenceOne, secuenceTwo, secuenceThree, result]
const currentComponent = shallowRef( secuenceOne )
const indexCounter = ref(0)
const chooisedAnswerAndTruthyAnswer = ref({})
const score = ref(0)
const resultAnswer = ref(null)

/* Provide / Inject  */
const udpateScore = n => {
    score.value += n
}
const updateChooisedAnswerAndTruthyAnswer = objectAnwers => {
    chooisedAnswerAndTruthyAnswer.value = objectAnwers
}
const resetResultAnswer = () => {
    resultAnswer.value = null
}

provide( 'score', {score,udpateScore} )
provide('objectAnwers', { chooisedAnswerAndTruthyAnswer,updateChooisedAnswerAndTruthyAnswer })
provide('resultAnswer', {resultAnswer,resetResultAnswer})

const checkAnswer = () => {
    const { chooisedAnswer,truthyAnswer } = chooisedAnswerAndTruthyAnswer.value;
    resultAnswer.value = checkingTheAnswers( Number(truthyAnswer), Number(chooisedAnswer) )
}

const clearResultComponent = computed(() => {
    return (indexCounter.value != listComponents.length - 1) ? true : false
})
const switcherComponents = () => {
    indexCounter.value +=1;
    currentComponent.value = listComponents[indexCounter.value]

    if ( indexCounter.value == (listComponents.length - 1) )  {
        clearInterval(intervals)
    }
}
const intervals = setInterval(switcherComponents,10000)

</script>