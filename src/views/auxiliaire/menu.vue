<template>
    <div class="centered menu">
            <div style="display: inline-flex;">
                <div @click="TurnA" 
                    :class="!opt1 ? 'unclicked':'clicked'">
                    <router-link to="" class="unline fs tex">
                        Home
                    </router-link>
                </div>
                <div @click="TurnB" :class="!opt2 ? 'unclicked anime':'clicked'">
                    <router-link to="/" class="unline fs tex">Portfolio</router-link>
                </div>
                <div @click="TurnC" :class="!opt3 ? 'unclicked':'clicked'">
                    <router-link to="/" class="unline fs tex">Interests</router-link>
                </div>
                <div @click="TurnD" :class="!opt4 ? 'unclicked':'clicked'">
                    <!-- <a href="/home" class="unline fs tex">Contact</a> -->
                    <router-link to="/" class="unline fs tex">Contact</router-link>
                    <!-- <a href=""></a> -->
                </div>
            </div>
    </div>
</template>
<script lang="ts">
import { ref,defineComponent, onMounted } from 'vue'
export default defineComponent({
    setup(props, {emit}) {
        const opt1:boolean = ref(true)
        const opt2:boolean = ref(false)
        const opt3:boolean = ref(false)
        const opt4:boolean = ref(false)
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
            disablingAnime()
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
            const animatedElement = document.getElementsByClassName('anime')
            console.log("THe found element is  : ", animatedElement)
            // get is styles properties
            // const ani_s = getComputedStyle(animatedElement)
            // console.log("The animation-name is : ", ani_s.getPropertyValue('animation-name'))
        }
        return {
            opt1, opt2, opt3, opt4,
            TurnA, TurnB, TurnC, TurnD,
        }
    },
})
</script>

<style scoped>


.clicked{
    display: inline-flex;
    align-content: center; 
    align-items: center;
    text-align: center;
    height: 41px; 
    width: 20vw; 
    background-color: black;
    border-radius: 25px;
    border: 3px solid black;
    margin-left: 1vw;
    transition-duration: 1s;
    transition-property: all;

}
.unline{
    text-decoration: none;
    color: white;
}
.anime{
    animation-name: newThing;
    animation-iteration-count: infinite;
    animation-duration: 1s;
    animation-timing-function: ease;
}
@keyframes newThing {
    0%{
        transform: rotate(45deg);
    }
    40%{
        transform: rotate(-45deg);
    }
    90%{
        transform: rotate(0deg);
    }
}
</style>