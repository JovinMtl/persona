<template>
    <div style="margin: 20px 20px;">
        <div>First of all, I am Burundian</div>
        
        <div style="width: 58vw; height: 50vh; display: inline-flex;
        background-color: salmon; padding: 30px 30px;">
            <!-- my profile -->
            <!-- Here will contain my infos -->

            <br>
            <div>
                <ion-icon :src="personOutline" class="logoLarge"></ion-icon>
                Nsanzumukiza Thierry Jovin
            </div>
            <br>
            <div>
                <ion-icon :src="phonePortraitOutline" class="logoLarge"></ion-icon>
                (+257) 79071453  <br>  61966892
            </div>
            <div>
                <ion-icon :src="mailOutline" class="logoLarge"></ion-icon>
                nsanzumukizath@gmail.com
            </div>
            <div>
                <ion-icon :src="logoLinkedin" class="logoLarge"></ion-icon>
                muteule
            </div>
            <div>
                <ion-icon :src="logoGithub" class="logoLarge"></ion-icon>
                JovinMtl
            </div>
            <div>
                <ion-icon :src="logoDribbble" class="logoLarge"></ion-icon>
                muteule
            </div>
            
        </div>
    </div>
</template>
<script>
import { 
    logoWhatsapp, phonePortraitOutline, personOutline, mailOutline,
    logoGithub, logoDribbble, logoLinkedin,
} from 'ionicons/icons'
import { 
    IonIcon,
} from '@ionic/vue'
export default {
    components:{
        IonIcon,
    },
    setup() {
        return {
            logoWhatsapp, phonePortraitOutline, personOutline, 
            mailOutline, logoGithub, logoDribbble, logoLinkedin,
        }
    },
}
</script>

<style scoped>
.logoLarge{
    font-size: xx-large;
}
</style>

