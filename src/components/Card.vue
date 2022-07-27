<template>
    <Transition name="slide-fade">
        <component :is="currentComponent"></component>
    </Transition>
</template>

<script setup>
import { defineAsyncComponent, shallowRef,ref,provide,computed } from "vue";
import useCheckAnswer from '../composables /useCheckAnswer'

const secuenceOne = defineAsyncComponent( () => import('./SecuenceOne.vue') )
const secuenceTwo = defineAsyncComponent( () => import('./SecuenceTwo.vue') )
const secuenceThree = defineAsyncComponent( () => import('./SecuenceThree.vue') )
const secuenceFour = defineAsyncComponent( () => import('./SecuenceFour.vue') )
const secuenceFive = defineAsyncComponent( () => import('./SecuenceFive.vue') )
const result = defineAsyncComponent(() => import('./Result.vue'))

const {processScore} = useCheckAnswer()
const listComponents = [secuenceOne,secuenceTwo,secuenceThree,secuenceFour,secuenceFive,result]
const currentComponent = shallowRef( secuenceOne )
const indexCounter = ref(0)
const chooisedAnswerAndTruthyAnswer = ref({})
const totalRightAnwers = ref(0)
const score = ref(0)
const resultAnswer = ref(null)
const listProbablyAnswers = ref([])

/* Provide / Inject  */
const updateChooisedAnswerAndTruthyAnswer = truthyOrChooised => {
    chooisedAnswerAndTruthyAnswer.value = {...chooisedAnswerAndTruthyAnswer.value, ...truthyOrChooised}
}
const updateResultAnswer = (value = null) => {
    resultAnswer.value = value
    if( value ) {
        totalRightAnwers.value += 1
    }
}
const updateListProbablyAnswers = list => {
    listProbablyAnswers.value = list
}

provide('listProbablyAnswers',{listProbablyAnswers,updateListProbablyAnswers})
provide( 'score', score )
provide('objectAnwers', { chooisedAnswerAndTruthyAnswer,updateChooisedAnswerAndTruthyAnswer })
provide('resultAnswer', {resultAnswer,updateResultAnswer})

const switcherComponents = () => {
    indexCounter.value +=1;
    currentComponent.value = listComponents[indexCounter.value]

    if ( indexCounter.value == (listComponents.length - 1) )  {
        score.value = processScore( totalRightAnwers.value, listComponents.length - 1 )
        clearInterval(intervals)
    }
}
const intervals = setInterval(switcherComponents,10000)

</script>