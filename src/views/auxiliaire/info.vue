<template>
    <div style="margin: 20px 20px;">
        <!-- <div>Contact</div> -->
        
        <div class="infoContainer">
            <div class="infoText" style="background-color: transparent;
            width: 80%;">
                <div class="makeList">
                    <ion-icon :src="personOutline" class="logoLarge"></ion-icon>
                    <span class="textAdjust" style="font-weight: 500;">
                        Nsanzumukiza Thierry Jovin
                    </span>    
                    
                </div>
                <div class="makeList">
                    <ion-icon :src="phonePortraitOutline" class="logoLarge"></ion-icon>
                    <span class="textAdjust">
                        (+257) 79 071 453  |  61 966 892
                    </span>   
                </div>
                <div class="makeList">
                    <ion-icon :src="navigateOutline" class="logoLarge"></ion-icon>
                    <span class="textAdjust">
                        Bujumbura  -  Burundi
                    </span>   
                </div>
                <div class="makeList">
                    <ion-icon :src="mailOutline" class="logoLarge"></ion-icon>
                    <span class="textAdjust">
                        nsanzumukizath@gmail.com
                    </span>   
                </div>
                <div class="makeList">
                    <ion-icon :src="logoLinkedin" class="logoLarge"></ion-icon>
                    <span class="textAdjust">
                        thierry-jovin-9b8bb1109
                    </span> 
                </div>
                <div class="makeList">
                    <ion-icon :src="logoGithub" class="logoLarge"></ion-icon>
                    <span class="textAdjust">
                        JovinMtl
                    </span> 
                </div>
                <div class="makeList">
                    <ion-icon :src="logoDribbble" class="logoLarge"></ion-icon>
                    <span class="textAdjust">
                        muteule
                    </span> 
                </div>
            </div>
            <div class="infoImage" style="">
                <span style="border-radius: 50px;">
                    <!-- <ion-img src="/personaFoto/loader.png"/> -->
                    <img style="border-radius: 150px;" src="/personaFoto/profile.png" alt="">
                </span>

                <span class="cicleProfile" style="">
                </span>
            
            </div>
            
            
        </div>
    </div>
</template>
<script>
import { 
    logoWhatsapp, phonePortraitOutline, personOutline, mailOutline,
    logoGithub, logoDribbble, logoLinkedin, navigateOutline,
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
            navigateOutline,
        }
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sen:wght@400..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');


.infoContainer{
    width: 58vw; 
    height: auto; 
    /* display: inline-block; */
    display: inline-flex;
    background-color: transparent;
    /* background-color: salmon;  */
    padding: 1.5vh 10vw;
    padding: 1.5vh 5vw;
    border-radius: 25px; 
    border: 12px solid gray;
    text-align: left
}
.infoImage{
    background-color: transparent;
    position: relative;
    --width:48%;
    width: 25%; 
    padding-top: 25%; 
    display: block;
}
.cicleProfile{
    display: inline-flex; 
    position: absolute ;
    /* border: 3px double salmon; */
    /* border: 3px groove salmon; */
    box-shadow: 0 0 25px grey;
    width: 100%; height: var(--width);
    border-radius: 150px;
    left: 0%;
}
.logoLarge{
    font-size: xx-large;
}
.makeList{
    display: block;
    margin: 5px 5px;
}
.textAdjust{
    position: relative;
    top: -9px; 
    left: 20px; 
    left: 30px;
    /* font-weight: 700; */
    font-size: x-large;
    /* color: white; */
    /* font-family: 'Open Sans', sans-serif; */
    font-family: Sen, sans-serif;
    font-family: Rubik;
}
</style>

