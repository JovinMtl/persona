<template>
    <div class="centered menu">
        <div class="menuContent" @click="testD">
            <!-- <router-link to="/" class="noLine one">home</router-link>
            <span style="margin-right: .6rem;">&nbsp;</span>
            <router-link to="/home"  class="noLine one">portfolio</router-link>
            <span style="margin-right: .6rem;">&nbsp;</span>
            <router-link to="/home" class="noLine">interests</router-link>
            <span style="margin-right: .6rem;">&nbsp;</span>
            <router-link to="/" class="noLine">contact</router-link> -->
            <div class="left one two" @click="TurnA">
                <router-link to="/home"  class="noLine one two">home</router-link>
            </div>
            <div class="center one" >
                <router-link to="/" :class="!opt2 ? 'noLine one':'noLine one two'" @click="TurnB">portfolio</router-link>
            </div>
            <div class="right one" @click="TurnC">
                <router-link to="/" class="noLine one">interests</router-link>
            </div>
            <div class="fourth one" @click="testD">
                <router-link to="/" class="noLine one">contact</router-link>
            </div>
        </div>
        
        <!-- Ceci est le menu -->
    </div>
</template>
<script>
import { ref } from 'vue'
export default {
    setup() {
        const opt1 = ref(false)
        const opt2 = ref(false)
        const opt3 = ref(false)
        const opt4 = ref(false)
        const TurnA = ()=>{
            opt1.value = true
            opt2.value = false
            opt3.value = false
            opt4.value = false
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
            console.log("You pressed oe")
        }
        return {
            opt1, opt2, opt3, opt4,
            TurnA, TurnB, TurnC, TurnD, testD,
        }
    },
}
</script>

<style scoped>

.menu{
    display: inline-flex;
    position: relative;
    text-align: center;
    width: 90vw;
    height: 40px;
    border-radius: 25px;
    z-index: -5
}
.menuContent{
    height: 100%;
    align-content: center;
    align-items: center;
    position: absolute;
    /* margin-left: 20px; */
    /* border-radius: 25px; */
    transform: translate(4%,0%);
    z-index: 6;
}
.left{
    display: inline-block;
    position: sticky;
    height: auto;
    width: 30vw;
    background-color: green;
    border: 3px solid black;
    border-radius: 25px;
    align-content: center;
    align-items: center;
    left: 0%;
    margin-right: 2px;
    margin-left: 2px;
    z-index: -5;
}
.center{
    display: inline-block;
    position: relative;
    height: 100%;
    width: 30vw;
    background-color: yellow;
    border: 3px solid black;
    align-content: center;
    align-items: center;
    border-radius: 25px;
    margin-right: 2px;
    margin-left: 2px;
}
.right{
    display: inline-block;
    position: relative;
    height: 100%;
    width: 30vw;
    background-color: gray;
    border: 3px solid black;
    border-radius: 25px;
    align-content: center;
    align-items: center;
    margin-right: 2px;
    margin-left: 2px;
}
.fourth{
    display: inline-block;
    position: relative;
    height: 100%;
    width: 30vw;
    background-color: gray;
    border: 3px solid black;
    border-radius: 25px;
    align-content: center;
    align-items: center;
    margin-right: 2px;
    margin-left: 2px;
}
.noLine{
    text-decoration: none;
    /* color : black; */
    color : white;
}
.one{
    width: 20vw;
    height: 100%;
    background-color: red;
}
.two{
    background-color: black;
}
@media screen and (max-width: 340px) {
    .one{
        font-size: 12px;
        align-content: center;
        align-items: center;
    }
}
/* @media screen and (min-width: 340px) {
    .menuContent{
    margin-left: 40px;
    }
}
@media screen and (min-width: 370px) {
    .menuContent{
    margin-left: 50px;
}
}
@media screen and (min-width: 400px) {
    .menuContent{
    margin-left: 70px;
}
}
@media screen and (min-width: 495px) {
    .menuContent{
    margin-left: 20vw;
}
}
@media screen and (min-width: 595px) {
    .menuContent{
    margin-left: 26vw;
    background-color: green;
}
} */
</style>