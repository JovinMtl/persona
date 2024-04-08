<template>
    <div class="openImage" style="text-align: center;">
        Ubuzima Butyoroye.
        <!-- <ion-buttons> -->
            <span  style="color: green;position: relative;
                top: 30px; left: 23%;">
                <ion-icon :src="close" size="larger"></ion-icon>
            </span>
            
        <!-- </ion-buttons> -->

        <ion-img src="/personaFoto/jove2.png"/>
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