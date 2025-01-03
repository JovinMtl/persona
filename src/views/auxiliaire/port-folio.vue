<template>
    <div class="prtFolio">
        <div style="display: block; margin-left: 5vw;
                    margin-top: 5vh;">
            <div style="display: block;
             text-align: center;
            align-items: center;">
                <div class="mainContainer">
                    <div class="contenerOne" style="position: relative;">
                        <div class="textContainer" 
                        style="position: absolute; word-wrap: break-word;
                        word-break: break-all;">
                            <h3 class="animate-title">
                                 Winners of Hackathon
                                <span style="font-size: .7rem;">(June 23, 2024)</span>
                            </h3>
                            <img  @click="zoomIn" src="/personaFoto/annoucement1_.jpg" class="announce" alt="Thierry got HackerTon prize.">
                            <img src="/personaFoto/annoucement1.jpg" class="announceL" alt="Thierry got HackerTon prize."> 
                        </div>
                        <div class="shapeOne"></div>
                    </div>
                </div>
            </div>
        </div>
        
        <div style="display: inline-block;" 
            v-for="(proof, index) in proofs" :key="index">
            <div class="portoContent">
                <img :src="proof.image" class="imgProofCss"/>
                <div class="textCss">{{ proof.description }}</div> 
            </div>
        </div>

        <teleport to="body">
            <bri-ef v-if="show_brief" @close-brief="closeFunc"></bri-ef>
        </teleport>

    </div>
    
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Proof } from '../auxiliaire/types'
import briEf from './brief.vue';

const show_brief = ref(false)

setTimeout(()=>{
    show_brief.value = true
}, 10000)

const closeFunc = ()=>{
    show_brief.value = false
}
const zoomIn = ()=>{
    console.log("You want to zoom in")
}

const proofs:Proof[] = [
            {
                'title': 'Patt1',
                'image': '/personaFoto/pattern1.jpg',
                'description': "No Image as a background, but only CSS with minimal code. I made this on July 11, 2024."
            },
            {
                'title': 'grid layout',
                'image': '/personaFoto/jove_1.png',
                'description': "This is the layout I designed for my future estemeed client. June 05, 2024."
            },
            {
                'title': 'title zero',
                'image': '/personaFoto/jove0.jpg',
                'description': 'Started on April 22, 2024. This UI is for Dawa-Pharma project. A tool for managing io on Pharmacy operations.'
            },
            {
                'title':'title one',
                'image':'/personaFoto/jove1.png',
                'description':'This same website is one of my craft work. Entirely coded with Vue.js(I used the composition API) alongside with Ionic. It took me almost nine days to finish up with the composition of meaning of my presentation. The architecture, the connection of devices composing text, images according to the philosophy of "Say less, describe more". Please enjoy my website and take a closer look on the technical functionalities hidden in the simplicity of this work.'
            },
            {
                'title':'title two',
                'image':'/personaFoto/jove2.png',
                'description': 'This is the loader or Spinner that i love. I made it as a mean to apply the knowledge gained in CSS and challenge myself. It can be taloired to your projects and make your Users wait happily while the server is processing. In connecting with Customer emotion i came to realize how it could be great to complete the User satisfaction on your platform. Simply DM to be in touch.'
            },
            {
                'title':'',
                'image':'/personaFoto/jove3.png',
                'description': "This also feels good when used as a Loader, the two extreme dots roll magnetically, horizontally as flowing motion. The idea behind is that the main dots which stays fixed in the center representing the server, is pushing for the User's request."
            },
            {
                'title':'title two',
                'image':'/personaFoto/jove4.png',
                'description': "A piece of User Interface(lde_ui) that serves into consuming the API(LidAPI). Built as mobile Web App and Android native code. I made this for my esteemed Customer."
            },
            {
                'title':'',
                'image':'/personaFoto/jove5.png',
                'description': "Written in Vue3.js(Composition API) + Ionic.  the same code served for Web app and Android. It's on this project that i loved the concept to Composition API and made me migrate from Options API. Moreover, i am happy of the algorithm of currency conversion implemented here that made me realize the reactivity of Vue.Js. "
            },
            {
                'title':'title two',
                'image':'/personaFoto/jove6.png',
                'description': "LidAPI is the project entrusted to me by my Client. I used Django and DRF mainly to deal with requestes sent by Vue3 mobile app(or any other client's language)."
            },
            {
                'title':'',
                'image':'/personaFoto/jove7.png',
                'description': `As I metioned in my Bio, I practiced C programming language since 2014. However i came into its depts in 2017 when used the pointers enough to understand their use in dealing with any kind of data. I mean int, char, array, structure, function, pointer of pointer, and pointer of pointer of pointer, ...
Since then, a friend of mine proposed me to take this challenge of building a "School Management" project which would run in the console.

(-: ONLY pointers were used, no simple variable.`
            },
            {
                'title':'title two',
                'image':'/personaFoto/jove8.png',
                'description': "Not my every code were shared here, but this one makes me happy when i see its results in my Backend's operations. I helps me to generate a unique code to record every transaction made by the users. It is flexible as you can give it the length of the code to generate. "
            },
        ];
</script>

<style scoped>
.announceL{
    display: none;
}
.announce{
    width: 80%;max-height: auto;
}
.announce:hover{
    width: 90%;max-height: auto;
}
/* .div > img {
    scale: 2;
} */
.annouceText{
    display: none;
}
@media screen and (max-width: 670px) {
    .announce{
        width: 85%;max-height: auto;
    }
}
@media screen and (max-width: 630px) {
    .announce{
        width: 87%;max-height: auto;
    }
}
@media screen and (max-width: 570px) {
    .announce{
        width: 96%;max-height: auto;

    }
}
@media screen and (max-width: 515px) {
    .announce{
        width: 100%;max-height: auto;

    }
}
@media screen and (max-width: 390px) {
    .animate-title{
        font-size: .85rem;
        padding: 5px;
    }
    .announceL{
        display: block;
        width: 98%;max-height: auto;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        margin: auto;
    }
    .announce{
        display: none;
    }
    .annouceInfo{
        display: none;
    }
    .annouceText{
        display: block;
    }
}

*{
    margin: 0;
}

.mainContainer{
    display: flex;
    max-width: 90vw;
    max-height: 80vh;
    /* background-color: black; */
    justify-content: center;
    align-items: center;
}
.animate-title{
    background-color: black;color: white;
    border-top-right-radius: 20px; 
    border-top-left-radius: 20px;
    font-family: Sen;
    animation-name: AnounceTitleAnime;
    animation-duration: 3s;
    animation-iteration-count: infinite;
}
.contenerOne{
    width: 600px;
    height: 300px;
    background-color: rgb(128, 128, 128);
    background-color: rgb(253, 244, 244);
    border-width: .02rem;
    border-left-color: red;
    border-left-style: solid;
    border-right-color: red;
    border-right-style: solid;
    /* z-index: 2; */
    border-radius: 20px;
}
.contenerTwo{
    display: none;
    /* position: absolute; */
    width: 595px;
    height: 295px;
    background-color: rgb(128, 128, 128);
    z-index: 2;
    border-radius: 20px;
    /* border: 4px double transparent; */
}

.shapeOne{
    display: flex;
    position: relative;
    /* width: 370px; */
    width: 61.68%;
    height: 70px;
    /* height: 90vw; */
    background-color: linear-gradient(to right, blue, red);
    background-color: red;
    animation-name: circular;
    animation-timing-function: ease-in-out;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 0.4);
    /* animation-timing-function: cubic-bezier(0.075, 0.82, 0.065, 0.2); */
    animation-duration: 3s;
    animation-iteration-count: infinite;
    top: 0%;
    left: -0.1%;
    z-index: -1;
    box-shadow: 0 0 10px red;
    border-radius: 20px;
}


    @keyframes circular{
        0%, 100%{
            top: 0.4%;
            left: -0.1%;
        }
        25%{
            top: -0.4%;
            left: 38.5%;
        }
        50%{
            top: 77%;
            left: 38.5%;
        }
        75%{
            left: -0.1%;
            top: 77%;
        }
    }
@media(prefers-reduced-motion){
    @keyframes AnounceTitleAnime {
        0%, 10%, 18%{
            background-color: rgba(243, 236, 236, 0.5);
            background-color: #d5ccb0;
            scale: .8;
        }
        7%, 12%{
            /* background-color: #4e4e4e; */
            color: black;
        }
        25%, 100%{
            background-color: black;
        }

    }

}



.imgProofCss{
    border-top-left-radius: 25px; 
    border-top-right-radius: 25px;
}
.textCss{
    color: black;
    font-family: Rubik;
    padding: 10px 10px;
    text-align: justify;
}
.portoContent{
    width: 40vw; 
    border-radius: 25px;
    box-shadow: 0 0 20px grey;
    text-align: center; 
    margin: 20px 20px;
}
@media screen and (max-width: 600px) {
.portoContent{
    width: 80vw; 
    border-radius: 25px;
    text-align: center; 
    margin: 20px 20px;
}
}
</style>

