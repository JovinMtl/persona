<template>
    <div class="openImage" style="text-align: center;">
        Ubuzima Butyoroye.
        <!-- <ion-buttons> 
            <span  class="moveX">
                <ion-icon size="larger"></ion-icon>
            </span>
        -->
            <ion-img src="/personaFoto/jove18.png"/>
            <!-- <span class="mantra">Embracing Vision, Inspiring Innovation</span> -->
            <span class="mantra">
                Before downloading one file, please delete two.
                <span style="font-size=5px;"> -- Th. Jov. Nsanzumukiza</span>
            </span>
            
    </div>
</template>
<script lang="ts">
import { defineComponent} from 'vue'
import { IonImg, IonButton, IonIcon, } from '@ionic/vue'
import { close, } from 'ionicons/icons'
export default defineComponent ({
    components: {
        IonImg,  IonButton, IonIcon, 
    },
    setup() {
        return {close,}
    }
})
</script>

