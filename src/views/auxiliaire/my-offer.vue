<template>
    <div class="offerContainer">
        <h4 style="font-weight: bold; margin-top: 15px;"> 
            I offer two possible packages of Services, and you can pick what you want.
        </h4>
        <div class="button-container">
            <div class="button">
                <router-link @click="TurnA"
                    to="/" style="color: white;">
                    <div class="mtl1 mtl">
                        <div style="font-size: 0.74rem; text-align: center; margin: auto">
                            <!-- <span style="margin-left: .6rem;">&nbsp;</span> -->
                            <!-- <span style="text-align: center;">FullStack Developer</span> -->
                            <span>FullStack Developer</span>
                        </div> 
                    </div>
                </router-link>
                
                <router-link 
                    @click="TurnB"
                    to="/" style="color: white;">
                    <div class="mtl2 mtl">
                        <div style="font-size: 0.74rem; text-align: center; margin: auto">
                            <span>Business Strategist</span>
                        </div> 
                    </div>
                </router-link>
            </div>
        </div>
        <div class="offercontent">
            <offer-content :option="actualValue"></offer-content>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue'
import offerContent from '../operations/offer-content.vue';
export default {
    components:{
        'offer-content':offerContent,
    },
    setup() {

        const actualValue = ref(0)
        const cateA = ref(false)
        const cateB = ref(false)
        const TurnA = ()=>{
            actualValue.value = 1
            cateA.value = !cateA.value
            cateB.value = false
            console.log("You clicked A: ", actualValue.value)
            if(!cateA.value){
                actualValue.value = 0
            }
        }
        const TurnB = ()=>{
            actualValue.value = 2
            cateB.value = !cateB.value
            cateA.value = false
            console.log("You clicked B: ", actualValue.value)
            if(!cateB.value){
                actualValue.value = 0
            }
        }
        
        return {
            actualValue, cateA, cateB, TurnA, TurnB,
        }
    },
}
</script>
<style scoped>
.offerContainer{
    display: inline-block;
    position: relative;
    text-align: center;
    width: 90vw;
    /* height: 40px; */
    border-radius: 25px;
}
.button-container{
    display: inline-flex;
    width: 300px;
    height: 40px;
    background-color: red;
    border-radius: 50px;
}
.button{
    font-size: 16px;
    width: 100%;
    height: 100%;
    font-weight: bold;
    font-family: sans-serif;
    line-height: 40px;
    position: relative;
    box-shadow: 0 0 10px black, 0 0 20px black;
    text-shadow: 2px 2px 5px rgba(0,0,0,0.5);
    transition-property: all;
    transition-duration: 1s;
    overflow: hidden;
    z-index: 1;
    border-radius: 50px;
}
.button::before, .button::after{
    position: absolute;
    content: '';
    width: 100%; 
    height: 100%;
    top: 0;
    transform: skewX(30deg);
    /* transform: skewX(0deg); */
    /* transform: skewY(-29deg); */
    z-index: -1;
    box-sizing: 0 0 10px #000;
}
.button::before{
    left : -110%;
    background-color: black;
    transition-property: all;
    transition-duration: 1s;
}
.button::after{
    right: -110%;
    background-color: black;
    transition-property: all;
    transition-duration: 1s;
}
.button::before{
    left :-49%;
}
.button::after{
    right :-54%;
}
.mtl{
    display: inline-flex;
}
.mtl1{
    position: absolute;
    width: 50%;
    left: 1px;
    background-color: black;
}
.mtl2{
    position: absolute;
    width: 50%;
    left: 50%;
    background-color: red;
}
</style>

