<template>
    <div class="openImage" style="text-align: center;">
        Ubuzima Butyoroye.
        <!-- <ion-buttons> -->
            <span  class="moveX">
                <ion-icon :src="close" size="larger"></ion-icon>
            </span>
            <ion-img src="/personaFoto/jove2.png"/>
        jove
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

