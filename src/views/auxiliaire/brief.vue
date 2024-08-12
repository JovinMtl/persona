<template>
    <div class="briefContainer">
        <div class="mainContainer">
            {{ message }}
            <div v-if="activate_close" 
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

const activate_close = ref<boolean>(false)
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
    activate_close.value = true
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
.cloControl{
    display: flex;
    width: 25px;
    height: 25px;
    border-radius: 13px;
    background-color: lime;
    position: absolute;
    top: -10.5vh;
    left: 2vw;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    animation-name: jove;
    animation-duration: 100ms;
}
.briefContainer{
    display: flex;
    width: 100vw;
    min-height: 15vh;
    position: relative;
    bottom: -82vh;
    justify-content: center;
    color: white;
}
.mainContainer{
    display: flex;
    max-width: 45vw;
    min-height: 5vh;
    border-radius: 20px;
    /* background-color: black; */
    background: linear-gradient(130deg,black 50%, rgba(0, 129, 0, 0.692) 90%);
    filter: opacity(0.94);
    border: 2px solid lime;
    box-shadow: 0 0 12px lime;
    animation-name: meme;
    animation-duration: 100ms;
    text-align: center;
    padding: 2vw;
    align-items: center;
    font-weight: bold;
    font-size: .93em;
    line-height: 1.25em;
}

@media screen and (max-height: 500px) {
    .briefContainer{
        bottom: -78vh;
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