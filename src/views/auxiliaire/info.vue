<template>
    <div style="margin: 20px 20px;">
        <!-- <div>Contact</div> -->
        
        <div class="infoContainer">
            <div class="infoText">
                <div class="textContainer">
                    <div class="makeList">
                    <a class="logoColor" href="http://wa.me/+25779071453">
                        <ion-icon :src="personOutline" class="logoLarge"></ion-icon>
                    
                        <span class="textAdjust" style="font-weight: 500;
                        top: -8px">
                            Nsanzumukiza Thierry Jovin
                        </span>   
                    </a> 
                    
                </div>
                <div class="makeList">
                    <a class="logoColor" href="tel:+25779071453" 
                        title="Phone Number">
                        <ion-icon :src="phonePortraitOutline" class="logoLarge"></ion-icon>
                    </a>
                    <span class="textAdjust">
                        (+257) 79 071 453  |  61 966 892
                    </span>   
                </div>
                <div class="makeList">
                    <a class="logoColor" href="https://www.google.com/maps/place/Burundi/@-3.3858868,28.6051708,8z/data=!3m1!4b1!4m6!3m5!1s0x19c144d33654f15b:0xb1234d0e5631ec8d!8m2!3d-3.373056!4d29.918886!16zL20vMDE2OXQ?hl=fr&entry=ttu"
                        title="Location">
                        <ion-icon :src="locationOutline" class="logoLarge"></ion-icon>
                    </a>
                    <a href="https://www.google.com/maps/place/Burundi/@-3.3858868,28.6051708,8z/data=!3m1!4b1!4m6!3m5!1s0x19c144d33654f15b:0xb1234d0e5631ec8d!8m2!3d-3.373056!4d29.918886!16zL20vMDE2OXQ?hl=fr&entry=ttu"
                        title="Location" class="textAdjust">
                        Bujumbura  -  Burundi
                    </a>   
                </div>
                <div class="makeList gmailClass">
                    <a class="logoColor" href="mailto:nsanzumukizath@gmail.com"
                    title="Mail">
                        <ion-icon :src="mailOutline" class="logoLarge"></ion-icon>
                    </a>
                    <a href="mailto:nsanzumukizath@gmail.com"
                    title="Mail" class="textAdjust">
                        nsanzumukizath@gmail.com
                    </a>   
                </div>
                <div class="makeList">
                    <a class="logoColor" href="https://www.linkedin.com/in/thierry-jovin-9b8bb1109"
                    title="LinkedIn">
                        <ion-icon :src="logoLinkedin" class="logoLarge"></ion-icon>
                    </a>
                    <a href="https://www.linkedin.com/in/thierry-jovin-9b8bb1109"
                    title="LinkedIn" class="textAdjust">
                        thierry-jovin-9b8bb1109
                    </a> 
                </div>
                <div class="makeList">
                    <a class="logoColor" href="https://github.com/JovinMtl"
                     title="GitHub">
                        <ion-icon :src="logoGithub" class="logoLarge"></ion-icon>
                    </a>
                    <a href="https://github.com/JovinMtl"
                     title="GitHub" class="textAdjust">
                        JovinMtl
                    </a> 
                </div>
                <div class="makeList">
                    <a class="logoColor" href="https://dribbble.com/muteule" 
                    title="Dribble">
                        <ion-icon :src="logoDribbble" class="logoLarge"></ion-icon>
                    </a>
                        <a href="https://dribbble.com/muteule" 
                    title="Dribble" class="textAdjust">
                            muteule
                        </a> 
                    
                </div>
                </div>
                
            </div>
            <div class="infoImage" >
                <span style="border-radius: 50px;
                ">
                    <img style="border-radius: 150px;
                    box-shadow: 0 0 25px gray;" src="/personaFoto/profile.jpg" alt="">
                </span>
            </div>
            
            
        </div>
    </div>
</template>
<script>
import { 
    logoWhatsapp, phonePortraitOutline, personOutline, mailOutline,
    logoGithub, logoDribbble, logoLinkedin, locationOutline,
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
            locationOutline,
        }
    },
}
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Sen:wght@400..800&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');



 
.infoContainer{
    width: 58vw; 
    height: auto; 
    display: inline-flex;
    /* background-color: transparent; */
    /* background-color: salmon;  */
    background: linear-gradient(to right, #f04f4f,#f08080, #ff8c69);
    padding: 1.5vh 10vw;
    padding: 1.5vh 2vw;
    border-radius: 25px; 
    border: 12px solid gray;
    /* border: 12px solid #575353; */
    text-align: left
}
.infoText{
    background-color: transparent;
    width: 80%;
}
.textContainer{
    margin-top: 0px;
    /* background-color: green; */
}
.infoImage{
    /* background-color: red; */
    position: relative;
    width: 25%; 
    display: flex;
    align-items: flex-end;
}
.logoLarge{
    font-size: xx-large;
}
.logoColor{
    color: white;
    text-decoration: none;
}
.makeList{
    width: 100%;
    height: auto;
    display: inline-flex;
    margin: 5px 45px;
    /* padding: 0px 10px; */
    align-content: center;
    align-items: center;
    /* background-color: yellow; */
}
.textAdjust{
    position: relative;
    top: -1px; 
    left: 20px; 
    left: 30px;
    font-size: x-large;
    /* color: white; */
    /* font-family: 'Open Sans', sans-serif; */
    /* font-family: Sen, sans-serif; */
    font-family: Rubik;
    text-decoration: none;
    color: black;
}


@media screen and (max-width: 565px){
    .infoContainer{
    width: 80vw; 
    height: auto; 
    display: inline-flex;
    /* background-color: transparent; */
    /* background-color: salmon;  */
    background: linear-gradient(to right, #f04f4f,#f08080, #ff8c69);
    padding: 1.5vh 10vw;
    padding: 1.5vh 2vw;
    border-radius: 25px; 
    border: 12px solid gray;
    /* border: 12px solid #575353; */
    text-align: left
}
.infoText{
    background-color: transparent;
    width: 100%;
}
.textContainer{
    margin-top: 25vw;
    margin-left: 1vw;
    /* background-color: green; */
    display: block;
}
.makeList{
    /* width: 100%; */
    width: 100vw;
    height: auto;
    /* display: inline-flex; */
    display: block;
    /* margin: 5px 5px; */
    /* margin-left: 20px; */
    /* padding: 0px 10px; */
    align-content: center;
    align-items: center;
    /* background-color: yellow; */
}
.infoImage{
    /* background-color: red; */
    position: absolute;
    /* width: 25%;  */
    width: 25%;
    height: 25vw;
    display: flex;
    align-items: flex-end;
    left: 36vw;
}
}

@media screen and (max-width: 815px) {
.makeList{
    width: 100%;
    height: auto;
    display: inline-flex;
    margin: 5px 5px;
    /* padding: 0px 10px; */
    align-content: center;
    align-items: center;
    /* background-color: yellow; */
}
.textAdjust{
    position: relative;
    top: -1px; 
    left: 20px; 
    left: 10px;
    font-size: large;
    /* font-size: 22px; */
    font-family: Rubik;
}

@media screen and (max-width: 430px){
.infoContainer{
    width: 84vw !important; 
    background: linear-gradient(to top, #f04444,#f08080, #ddb8ac);
}
.textAdjust{
    left: 2px !important;
    font-size: 17px;
}
.infoImage{
    left: 38vw !important;
}
}

@media screen and (max-width: 360px){
.textAdjust{
    position: relative;
    top: -1px; 
    left: 20px; 
    left: 10px;
    font-size: small;
    /* font-size: 22px; */
    font-family: Rubik;
}
}

@media screen and (max-width: 294px){
.textAdjust{
    font-size: 11px;
}
}


}

</style>

