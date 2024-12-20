<template>
    <div class="offerContainer">
        <h4 class="offerTitle"> 
            Click below to see the exciting collaboration we can build together.
        </h4>
        <div class="button-container">
            <div class="button">
                <router-link @click="TurnA"
                    to="/" style="color: white;">
                    <div class="mtl1 mtl">
                        <div style="font-size: 0.74rem; text-align: center; margin: auto">
                            <!-- <span style="margin-left: .6rem;">&nbsp;</span> -->
                            <!-- <span style="text-align: center;">FullStack Developer</span> -->
                            <span>Contract</span>
                        </div> 
                    </div>
                </router-link>
                
                <router-link 
                    @click="TurnB"
                    to="/" style="color: white;">
                    <div class="mtl2 mtl">
                        <div style="font-size: 0.74rem; text-align: center; margin: auto">
                            <span>Freelancing</span>
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
<script lang="ts">
import { ref, defineComponent } from 'vue'
import offerContent from '../operations/offer-content.vue';
import { MyOffer } from '../auxiliaire/types'
export default defineComponent ({
    components:{
        'offer-content':offerContent,
    },
    setup() {

        const actualValue:MyOffer = ref(0)
        const cateA:boolean = ref(false)
        const cateB:boolean = ref(false)
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
})
</script>
<style scoped>
.offerContainer{
    display: inline-block;
    text-align: center;
    width: 90vw;
    border-radius: 25px;
    /* transition-duration: 900ms; */
}
.offerTitle{
    --prefered-color: rgb(131, 131, 127);
    font-weight: bold; margin-top: 35px; 
    text-shadow: 0 1px var(--prefered-color),
     0 -1px var(--prefered-color), 
     -1px 0 var(--prefered-color), 
     1px 0 var(--prefered-color) ;
}
.button-container{
    display: inline-flex;
    position: sticky;
    top: 3rem;
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
    box-shadow: 0 0 5px black, 0 0 10px black;
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

