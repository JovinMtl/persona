<template>
    <div class="centered menu">
        <!-- <div>jove</div> -->
        <div class="menuContent">
            <!-- <router-link to="/" class="noLine one">home</router-link>
            <span style="margin-right: .6rem;">&nbsp;</span>
            <router-link to="/home"  class="noLine one">portfolio</router-link>
            <span style="margin-right: .6rem;">&nbsp;</span>
            <router-link to="/home" class="noLine">interests</router-link>
            <span style="margin-right: .6rem;">&nbsp;</span>
            <router-link to="/" class="noLine">contact</router-link> -->
            <div class="left one two">
                <router-link to="/" class="noLine one two">home</router-link>
            </div>
            <div class="center one">
                <router-link to="/" class="noLine one">portfolio</router-link>
            </div>
            <div class="right one">
                <router-link to="/" class="noLine one">interests</router-link>
            </div>
            <div class="fourth one">
                <router-link to="/" class="noLine one">contact</router-link>
            </div>
        </div>
        
        <!-- Ceci est le menu -->
    </div>
</template>
<script>
 import { 
    IonButton
  } from '@ionic/vue';
export default {
    components:{
        IonButton,
    },
    setup() {
        
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
    align-items: safe;
}
.menuContent{
    height: 100%;
    align-content: center;
    align-items: center;
    position: absolute;
    /* margin-left: 20px; */
    /* border-radius: 25px; */
    transform: translate(4%,0%);
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