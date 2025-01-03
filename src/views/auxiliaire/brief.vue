New Note 2

<template>
    <div class="briefContainer">
        <div class="mainContainer">
            {{ message }}
            <div v-if="activateClose" 
                class="contrParent" @click="closeFunc">
                <div class="cloControl b">
                    <ion-icon :src="close"></ion-icon>
                </div>
            </div>
        </div>
    </div>

</template>
<script setup lang="ts">
import { ref } from 'vue'
import { IonIcon } from '@ionic/vue'
import { close} from 'ionicons/icons'

const emit =  defineEmits(['closeBrief'])

const activateClose = ref<boolean>(false)
const messages = [
    'From January till July 2024, I did :',
    '6 front-end projects and 2 back-end projects just in 7 months.',
]
let actual = 0
const message = ref(messages[actual])

const closeFunc = ()=>{
    const briefElement = document.querySelector('.briefContainer')
    briefElement.style.scale = '.8'
    briefElement.style.filter = "blur(5px)"
    setTimeout(()=>{
        emit('closeBrief')
    }, 100)
    
}
setTimeout(()=>{
    activateClose.value = true
}, 5000)
setTimeout(()=>{
    if(actual){
        actual = 0
    } else{
        actual = 1
    }
    message.value = messages[actual]
}, 6000)
</script>

<style scoped>
.contrParent{
    width: 1px;
    height: 1px;
    background-color: yellow;
    position: relative;
}
.briefContainer{
    display: flex;
    width: 100vw;
    min-height: 15vh;
    position: relative;
    /* top: 80vh; */
    top: 76vh;
    justify-content: center;
    color: white;
}
.mainContainer{
    display: flex;
    max-width: 45vw;
    min-height: 5vh;
    border-radius: 20px;
    color: black;
    /* color: rgb(8, 32, 32); */
    animation-name: meme;
    animation-duration: 100ms;
    text-align: center;
    padding: 2vw;
    align-items: center;
    font-weight: bold;
    font-size: .93em;
    line-height: 1.25em;
    backdrop-filter: blur(12px) invert(0.65) hue-rotate(120deg) contrast(2.2);
    -webkit-backdrop-filter: blur(12px) invert(0.65) hue-rotate(120deg) contrast(2.2);
}

.cloControl{
    display: flex;
    width: 25px;
    height: 25px;
    border-radius: 13px;
    background-color: rgb(77, 80, 83);
    color: white;
    position: absolute;
    top: -10.5vh;
    left: 2vw;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    animation-name: jove;
    animation-duration: 100ms;
}

@media screen and (max-height: 500px) {
    .briefContainer{
/*         bottom: -78vh; */
        top: 70vh;
        scale: .9;
    }
}

@keyframes meme {
    from{
        scale: 1.4;
    }
    to{
        scale: 1;
    }   
}
@keyframes jove {
    from{
        scale: 1.8;
        font-size: 2rem;
    }
    to{
        scale: 1;
    }   
}
</style>
