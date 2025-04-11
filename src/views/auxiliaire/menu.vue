<template>
    <div class="centered menu">
        <div class="menuContent">
            <div @click="TurnA" 
                :class="!opt1 ? 'unclicked':'clicked'">
                <router-link to="" class="unline fs tex">
                    Home
                </router-link>
            </div>
            <div @click="TurnB" :class="!opt2 ? 'unclicked':'clicked'">
                <router-link to="/" class="unline fs tex">Portfolio</router-link>
            </div>
            <div @click="TurnC" :class="!opt3 ? 'unclicked':'clicked'">
                <router-link to="/" class="unline fs tex">Interests</router-link>
            </div>
            <div @click="TurnD" :class="!opt4 ? 'unclicked':'clicked'">
                <router-link to="/" class="unline fs tex">Contact</router-link>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { ref,defineComponent, onMounted } from 'vue'
export default defineComponent({
    setup(props, {emit}) {
        const opt1 = ref<boolean>(true)
        const opt2 = ref<boolean>(false)
        const opt3 = ref<boolean>(false)
        const opt4 = ref<boolean>(false)
        onMounted(()=>{
            emit('initial', '1')
        })
        
        const TurnA = ()=>{
            opt1.value = true
            opt2.value = false
            opt3.value = false
            opt4.value = false
            // console.log("Have clicked A")
            emit('initial', '1')
        }
        const TurnB = ()=>{
            // disablingAnime()
            opt2.value = true
            opt1.value = false
            opt3.value = false
            opt4.value = false
            // console.log("Have clicked B")
            emit('initial', '2')
        }
        const TurnC = ()=>{
            opt3.value = true
            opt2.value = false
            opt1.value = false
            opt4.value = false
            emit('initial', '3')
        }
        const TurnD = ()=>{
            opt4.value = true
            opt2.value = false
            opt3.value = false
            opt1.value = false
            emit('initial', '4')
        }
        const disablingAnime = ()=>{
            // will select that element with 'anime' class and 
            // remove such properties making animation
            const animatedElement = document.querySelector('.wantClick')
            // get its styles properties
            const ani_s = getComputedStyle(animatedElement)
            console.log("First the animation name is : ", ani_s.getPropertyValue('animation-name'))
            animatedElement.style.animationName = 'Jove'
            console.log("Now the animation name is : ", ani_s.getPropertyValue('animation-name'))
        }
        return {
            opt1, opt2, opt3, opt4,
            TurnA, TurnB, TurnC, TurnD,
        }
    },
})
</script>

<style>

.unline{
    text-decoration: none;
    color: white;
}
.wantClick{
    animation-name: newThing;
    animation-iteration-count: infinite;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-delay: 15s;
}
@keyframes newThing {
    0%{
        transform: rotate(15deg);
    }
    40%{
        transform: rotate(-15deg);
        background-color: salmon;
    }
    90%{
        transform: rotate(0deg);
    }
}
</style>