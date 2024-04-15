<template>
    <div class="centered menu">
            <div style="display: inline-flex;">
                <div @click="TurnA" 
                    :class="!opt1 ? 'unclicked':'clicked'">
                    <router-link to="/" class="unline fs tex">
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
                    <a href="/home#connect" class="unline fs tex">Contact</a>
                    <!-- <a href=""></a> -->
                </div>
            </div>
    </div>
</template>
<script>
import { ref, onMounted } from 'vue'
export default {
    setup(props, {emit}) {
        const opt1 = ref(true)
        const opt2 = ref(false)
        const opt3 = ref(false)
        const opt4 = ref(false)
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
        }
        const TurnD = ()=>{
            opt4.value = true
            opt2.value = false
            opt3.value = false
            opt1.value = false
        }
        return {
            opt1, opt2, opt3, opt4,
            TurnA, TurnB, TurnC, TurnD,
        }
    },
}
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
</style>