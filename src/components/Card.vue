<template>
    <Transition name="slide-fade">
        <component :is="currentComponent"></component>
    </Transition>
</template>

<script setup>
import { defineAsyncComponent, shallowRef,ref,provide,computed } from "vue";

const secuenceOne = defineAsyncComponent( () => import('./SecuenceOne.vue') )
const secuenceTwo = defineAsyncComponent( () => import('./SecuenceTwo.vue') )
const secuenceThree = defineAsyncComponent( () => import('./SecuenceThree.vue') )
const result = defineAsyncComponent(() => import('./Result.vue'))

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
const updateResultAnswer = (value = null) => {
    resultAnswer.value = value
}

provide( 'score', {score,udpateScore} )
provide('objectAnwers', { chooisedAnswerAndTruthyAnswer,updateChooisedAnswerAndTruthyAnswer })
provide('resultAnswer', {resultAnswer,updateResultAnswer})

const switcherComponents = () => {
    indexCounter.value +=1;
    currentComponent.value = listComponents[indexCounter.value]

    if ( indexCounter.value == (listComponents.length - 1) )  {
        clearInterval(intervals)
    }
}
const intervals = setInterval(switcherComponents,10000)

</script>