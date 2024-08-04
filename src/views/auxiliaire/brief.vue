<template>
    <div class="briefContainer">
        <div class="mainContainer">
            
            <!-- <span class="b m-2 s-2">6</span> front-end projects + <span class="b m-2 s-2">2</span> back-end projects = 7 months. -->
            6 front-end projects and 2 back-end projects in 7 months.
            <div class="contrParent">
                <div class="cloControl b">
                    <ion-icon :src="close"></ion-icon>
                </div>
            </div>
        </div>
    </div>

</template>
<script setup lang="ts">
import { close} from 'ionicons/icons'
</script>

<style scoped>
.contrParent{
    width: 1px;
    height: 1px;
    background-color: yellow;
    position: relative;
}
.cloControl{
    display: flex;
    width: 20px;
    height: 20px;
    border-radius: 15px;
    background-color: lime;
    position: relative;
    top: -10vh;
    left: 1vw;
    align-items: center;
    justify-content: center;
}
.briefContainer{
    display: flex;
    width: 100vw;
    min-height: 15vh;
    position: relative;
    bottom: -82vh;
    /* top: 84vh; */
    /* left: 30vw; */
    justify-content: center;
}
.mainContainer{
    display: flex;
    max-width: 40vw;
    min-height: 5vh;
    background-color: salmon;
    border: 2px solid black;
    animation-name: meme;
    animation-duration: 100ms;
    text-align: center;
    padding: 2vw;
    align-items: center;
}
.b{
    color: black;
}
.r{
    color: red;
}
.m-2{
    margin: 0 4px;
}
.s-2{
    font-size: 2rem;
}

@keyframes meme {
    from{
        width: 50vw;
        height: 25vh;
        top: 78vh;
        left: 25vw;
    }
    to{
        width: 40vw;
        height: 15vh;
    }   
}
</style>