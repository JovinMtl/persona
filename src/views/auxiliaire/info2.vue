<template>
    <div style="margin: 20px 20px;">
        <!-- <div>Contact</div> -->
        
        <div class="infoContainer">
            <div class="infoText" style="background-color: transparent;
            width: 80%;">
                <div class="textContainer">
                    <div class="makeList">
                    <a class="logoColor" href="http://wa.me/+25779071453">
                        <ion-icon :src="personOutline" class="logoLarge"></ion-icon>
                    </a>
                    <span class="textAdjust" style="font-weight: 500;">
                        Nsanzumukiza Thierry Jovin
                    </span>    
                    
                </div>
                <div class="makeList">
                    <a class="logoColor" href="tel:+25779071453">
                        <ion-icon :src="phonePortraitOutline" class="logoLarge"></ion-icon>
                    </a>
                    <span class="textAdjust">
                        (+257) 79 071 453  |  61 966 892
                    </span>   
                </div>
                <div class="makeList">
                    <a class="logoColor" href="https://www.google.com/maps/place/Burundi/@-3.3858868,28.6051708,8z/data=!3m1!4b1!4m6!3m5!1s0x19c144d33654f15b:0xb1234d0e5631ec8d!8m2!3d-3.373056!4d29.918886!16zL20vMDE2OXQ?hl=fr&entry=ttu">
                        <ion-icon :src="locationOutline" class="logoLarge"></ion-icon>
                    </a>
                    <span class="textAdjust">
                        Bujumbura  -  Burundi
                    </span>   
                </div>
                <div class="makeList">
                    <a class="logoColor" href="mailto:nsanzumukizath@gmail.com">
                        <ion-icon :src="mailOutline" class="logoLarge"></ion-icon>
                    </a>
                    <span class="textAdjust">
                        nsanzumukizath@gmail.com
                    </span>   
                </div>
                <div class="makeList">
                    <a class="logoColor" href="http://https://www.linkedin.com/in/thierry-jovin-9b8bb1109">
                        <ion-icon :src="logoLinkedin" class="logoLarge"></ion-icon>
                    </a>
                    <span class="textAdjust">
                        thierry-jovin-9b8bb1109
                    </span> 
                </div>
                <div class="makeList">
                    <a class="logoColor" href="http://https://github.com/JovinMtl">
                        <ion-icon :src="logoGithub" class="logoLarge"></ion-icon>
                    </a>
                    <span class="textAdjust">
                        JovinMtl
                    </span> 
                </div>
                <div class="makeList">
                    <a class="logoColor" href="mailto:https://dribbble.com/muteule">
                        <ion-icon :src="logoDribbble" class="logoLarge"></ion-icon>
                    </a>
                    <span class="textAdjust">
                        muteule
                    </span> 
                </div>
                </div>
                
            </div>
            <div class="infoImage">
            <!-- jove -->
                <span style="border-radius: 50px;">
                    <img style="border-radius: 150px;" src="/personaFoto/profile.png" alt="">
                </span>

                <!-- <span class="cicleProfile" style="">
                </span> -->
            
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






.logoLarge{
    font-size: xx-large;
}
.logoColor{
    color: black;
}


@media screen and (min-width: 350px) {
    .infoContainer{
    width: 85vw; 
    height: auto; 
    display: inline-flex;
    padding: 0.5vh 1vw;
    border-radius: 25px; 
    border: 6px solid gray;
    text-align: left;
    /* background-color: red; */
}
.textContainer{
    margin-top: 100px;
    /* background-color: yellow; */
}
.infoImage{
    background-color: transparent;
    display: inline-flex;
    position: relative;
    position: absolute;
    /* --width:280%; */
    width: 25%; 
    height: 40px;
    display: block;
    left: 38vw;
    /* margin-top: -13vh; */
    /* margin-top: 1vh; */
}
.imagePosition{
    display: inline-block;
    position: absolute;
}
    .textAdjust{
    position: relative;
    font-size: medium;
    font-family: Rubik, Cantarell;
    text-align: left;
    top:0px;
    margin: 0 15px;
}
.makeList{
    width: 100%;
    height: auto;
    display: inline-flex;
    margin: 5px 5px;
    align-content: center;
    align-items: center;
    /* background-color: yellow; */
}
.cicleProfile{
    display: inline-flex; 
    position: absolute ;
    /* position: relative; */
    box-shadow: 0 0 25px grey;
    width: 100%; 
    height: var(--width);
    /* height: 100%; */
    border-radius: 150px;
    left: 0%;
}
}



@media screen and (min-width: 420px) {
    .infoContainer{
    width: 85vw; 
    height: auto; 
    display: inline-flex;
    padding: 0.5vh 1vw;
    border-radius: 25px; 
    border: 6px solid gray;
    text-align: left;
    /* background-color: red; */
}
.textContainer{
    margin-top: 100px;
    /* background-color: yellow; */
}
.infoImage{
    background-color: transparent;
    display: inline-flex;
    position: relative;
    position: absolute;
    /* --width:280%; */
    width: 25%; 
    height: 40px;
    display: block;
    left: 38vw;
    /* margin-top: -13vh; */
    /* margin-top: 1vh; */
}
.imagePosition{
    display: inline-block;
    position: absolute;
}
    .textAdjust{
    position: relative;
    font-size: medium;
    font-family: Rubik, Cantarell;
    text-align: left;
    top:0px;
    margin: 0 15px;
}
.makeList{
    width: 100%;
    height: auto;
    display: inline-flex;
    margin: 5px 5px;
    align-content: center;
    align-items: center;
    /* background-color: yellow; */
}
.cicleProfile{
    display: inline-flex; 
    position: absolute ;
    /* position: relative; */
    box-shadow: 0 0 25px grey;
    width: 100%; 
    height: var(--width);
    /* height: 100%; */
    border-radius: 150px;
    left: 0%;
}
}



@media screen and (min-width: 450px) {
    .infoContainer{
    width: 85vw; 
    --heih : 12vw;
    height: auto; 
    display: inline-flex;
    padding: 0.5vh 1vw;
    border-radius: 25px; 
    border: 6px solid gray;
    text-align: left;
    background-color: blue;
}
.textContainer{
    margin-top: 0px;
    background-color: yellow;
}

.infoImage{
    background-color: red;
    display: inline-block;
    position: relative;
    width: 25%; 
    /* padding-top: 15%;  */
    height: var(--width);
    /* height: 370px; */
    display: inline-flex;
    top: 0vh;
    left: 0vw;
    align-content: baseline;
    align-items: baseline;
    text-align: center;
    transform: translate(0%, 65%);
    /* margin-top: -13vh; */
    /* margin-top: 1vh; */
}
.imagePosition{
    display: inline-flex;
    align-content: baseline;
    align-items: baseline;
    text-align: center;
    padding-top: 35px;
    /* position: absolute; */
}
    .textAdjust{
    position: relative;
    font-size: medium;
    font-family: Rubik, Cantarell;
    text-align: left;
    top:0px;
    margin: 0 15px;
}
.makeList{
    width: 100%;
    height: auto;
    display: inline-flex;
    margin: 5px 5px;
    align-content: center;
    align-items: center;
    /* background-color: yellow; */
}
.cicleProfile{
    display: inline-flex; 
    position: absolute ;
    /* position: relative; */
    box-shadow: 0 0 25px grey;
    width: 100%; 
    height: var(--heih);
    /* height: 100%; */
    border-radius: 150px;
    left: 0%;
}
}




@media screen and (min-width: 800px) {
    .infoContainer{
    width: 58vw; 
    height: auto; 
    /* display: inline-block; */
    display: inline-flex;
    background-color: transparent;
    /* background-color: salmon;  */
    padding: 1.5vh 10vw;
    padding: 1.5vh 2vw;
    border-radius: 25px; 
    border: 12px solid gray;
    text-align: left
}
.textContainer{
    margin-top: 0px;
    /* background-color: green; */
}
/* .infoImage{
    background-color: red;
    position: relative;
    --width:48%;
    width: 25%; 
    padding-top: 25%; 
    display: block;
} */
.infoImage{
    /* background-color: red; */
    position: relative;
    --width:95%;
    width: 25%; 
    padding-top: 25%; 
    display: block;
    top: 15vh;
    left: 0vw;
    /* margin-top: -13vh; */
    /* margin-top: 1vh; */
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
.logoColor{
    color: black;
    text-shadow: 3px 3px 4px red;
}
.makeList{
    width: 100%;
    height: auto;
    display: inline-flex;
    margin: 5px 5px;
    align-content: center;
    align-items: center;
    /* background-color: yellow; */
}
.textAdjust{
    position: relative;
    top: -1px; 
    left: 20px; 
    left: 30px;
    /* font-weight: 700; */
    font-size: x-large;
    /* color: white; */
    /* font-family: 'Open Sans', sans-serif; */
    font-family: Sen, sans-serif;
    font-family: Rubik;
}
}
</style>

