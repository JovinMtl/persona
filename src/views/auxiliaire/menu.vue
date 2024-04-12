<template>
    <div class="centered menu">
            <div style="display: inline-flex;">
                <div @click="TurnA" 
                    :class="!opt1 ? 'unclicked':'clicked'">
                    <router-link to="/" class="unline fs tex">
                        Home
                    </router-link>
                </div>
                <!-- <div @click="TurnA" 
                    style="text-align: center; align-content: center; 
                    align-items: center; display: inline-flex;
                    background-color: black; width: 20%; ">
                    <router-link to="/" class="unline fs tex">
                        Home
                    </router-link>
                </div> -->
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
<script>
import { ref } from 'vue'
export default {
    setup() {
        const opt1 = ref(true)
        const opt2 = ref(false)
        const opt3 = ref(false)
        const opt4 = ref(false)
        const TurnA = ()=>{
            opt1.value = true
            opt2.value = false
            opt3.value = false
            opt4.value = false
            console.log("you pressed option A")
        }
        const TurnB = ()=>{
            opt2.value = true
            opt1.value = false
            opt3.value = false
            opt4.value = false
            console.log("You clicked option B")
        }
        const TurnC = ()=>{
            opt3.value = true
            opt2.value = false
            opt1.value = false
            opt4.value = false
            console.log("You clicked option C")
        }
        const TurnD = ()=>{
            opt4.value = true
            opt2.value = false
            opt3.value = false
            opt1.value = false
            console.log("You pressed option D")
        }
        function testD(){
            console.log("You pressed Test")
        }
        return {
            opt1, opt2, opt3, opt4,
            TurnA, TurnB, TurnC, TurnD, testD,
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