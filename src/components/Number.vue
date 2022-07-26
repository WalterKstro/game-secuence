<template>
    
    <div class="position-relative">
        <div class="option__number" :class="{ 'hidden__number' : isNullProp }" ref="refBoxNumber">
            {{ number }}
            <div class="posible__answers" v-show="isNullProp">
                <button 
                    type="button" 
                    class="posible__answers--answer" 
                    v-for="answer in listAnswer" :key="answer"
                    @click="chooseNumber(answer)">
                    {{ answer }}
                </button>
            </div>
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

const { number, listAnswer } = defineProps(['number','listAnswer'])
const Icon = defineAsyncComponent(() => import('./Icon.vue'))
const emit = defineEmits(['sendAnswer'])
const refBoxNumber = ref(null)
const {resultAnswer,resetResultAnswer} = inject('resultAnswer')

const isNullProp = computed( () => {
    return number == null ? true : false
})

const chooseNumber = answer => {
    refBoxNumber.value.textContent = answer
    emit('sendAnswer',answer)
}

onMounted(() => {
    resetResultAnswer()
})
</script>