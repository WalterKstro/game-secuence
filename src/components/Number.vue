<template>
    
    <div class="position-relative">
        <div class="option__number fw-bolder text-center position-relative" 
            :class="{ 'border__number--dotted' : isNullProp }" 
            ref="refBoxNumber">
            {{ number }}

            <options 
                @display-number="displayNumberSelected"
                :isNullProp="isNullProp"/>
        
        </div>
        <template v-if="resultAnswer != null">
            <icon v-if="isNullProp && resultAnswer"></icon>
            <icon 
                v-else-if="isNullProp && resultAnswer == false" 
                icon="bi-x-circle-fill"
                color="text-danger"></icon>
        </template>
    </div>

</template>

<script setup>
import { computed,ref,inject, defineAsyncComponent,onMounted } from 'vue';

const options = defineAsyncComponent( () => import('./ListOptions.vue') )
const icon = defineAsyncComponent(() => import('./Icon.vue'))

const { number } = defineProps(['number'])
const {resultAnswer,updateResultAnswer} = inject('resultAnswer')
const {updateChooisedAnswerAndTruthyAnswer} = inject('objectAnwers')
const refBoxNumber = ref(null)

const isNullProp = computed( () => {
    return number == null ? true : false
})
const displayNumberSelected = answer => {
    refBoxNumber.value.textContent = answer
    updateChooisedAnswerAndTruthyAnswer({chooised:answer})
}

onMounted(() => {
    updateResultAnswer()
    console.log('mounted component number')
})
</script>

<style scoped>
.option__number{
    width: 5.5rem;
    height: 5.5rem;
    font-size: 4rem;
    line-height: 5.5rem;
    color: var(--dark);
}

.border__number--dotted {
    border:2px dashed #A4A4A4;
    border-radius: 1rem;
}

</style>