<template>
    
    <div class="position-relative">
        <div class="option__number fw-bolder text-center position-relative" :class="{ 'border__number--dotted' : isNullProp }" ref="refBoxNumber">
            {{ number }}
            <div class="rounded p-1 justify-content-between posible__answers position-absolute" v-show="isNullProp">
                <button 
                    type="button" 
                    class="posible__answers--answer fw-bolder border-0 rounded-1 p-1" 
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
const {resultAnswer,updateResultAnswer} = inject('resultAnswer')

const isNullProp = computed( () => {
    return number == null ? true : false
})

const chooseNumber = answer => {
    refBoxNumber.value.textContent = answer
    emit('sendAnswer',answer)
}

onMounted(() => {
    updateResultAnswer()
})
</script>

<style lang="css" scoped>
.option__number{
    width: 5.5rem;
    height: 5.5rem;
    font-size: 4rem;
    line-height: 5.5rem;
    color: var(--dark);
}

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
.border__number--dotted {
    border:2px dashed #A4A4A4;
    border-radius: 1rem;
}
.posible__answers--answer{
    color: var(--dark);
}
</style>