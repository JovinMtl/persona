<template>
    <div class="openImage" style="text-align: center;">
        Ubuzima Butyoroye.
        <!-- <ion-buttons> -->
            <span  class="moveX">
                <ion-icon size="larger"></ion-icon>
            </span>
            <ion-img src="/personaFoto/jove18.png"/>
            <span class="mantra">Embracing Vision, Inspiring Innovation</span>
            <!-- <span class="mantra">Simplicity makes it great!</span> -->
            
    </div>
</template>
<script>
import { IonImg, IonButton, IonIcon, } from '@ionic/vue'
import { close, } from 'ionicons/icons'
export default {
    components: {
        IonImg,  IonButton, IonIcon, 
    },
    setup() {
        return {close,}
    }
}
</script>

