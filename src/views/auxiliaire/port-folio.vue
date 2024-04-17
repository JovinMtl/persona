<template>
    <div>
        <div style="display: block; position: relative;
        margin-top: 20px;">
            <!-- Here is my Portfolio -->
        </div>
    </div>
    
    <div style="display: inline-block;" v-for="proof in proofs">
        <div class="portoContent">
            <img :src="proof.image" class="imgProofCss"/>
            <div class="textCss">{{ proof.description }}.</div> 
        </div>
    </div>
    
</template>
<script>
import { heart} from 'ionicons/icons'
export default {
    
    setup() {
        const proofs = [
            {
                'title':'title one',
                'image':'/personaFoto/jove1.png',
                'description':'This same site is one of my craft work. Entirely coded with Vue3(I used the composition API) alongside with Ionic. It took me almost 3 days to finish up with the composition of meaning of my presentation. The architecture, the connection of devices composing text, images according to the philosophy of "Say less, describe more". Take a closer look on the technical functionalities hidden in the simplicity of this work.'
            },
            {
                'title':'title two',
                'image':'/personaFoto/jove2.png',
                'description': 'This is the loader or Spinner that i love. I made it as a mean to apply the knowledge gained in CSS and challenge myself. It can be taloired to your projects and make your Users wait happily while the server is processing. In connecting with Customer emotion i came to realize how it could be great to complete the User satisfaction on your platform. Simply DM to be in touch.'
            },
            {
                'title':'',
                'image':'/personaFoto/jove3.png',
                'description': "This also feels good when used as a Loader, the dots rolls magnetically horizontally as flowing motion. the idea behind is that the main dots which stays fixed in the center representing the server, is pushing for the User's request."
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

(-: {{ heart }}ONLY pointers were used, no simple variable.`
            },
            {
                'title':'title two',
                'image':'/personaFoto/jove8.png',
                'description': "Not my every code were shared here, but this one makes me happy when i see its results in my Backend's operations. I helps me to generate a unique code to record every transaction made by the users. It is flexible as you can give it the length of the code to generate. "
            },
        ];
        return {
            proofs,
            heart,
        }
        
    },
}
</script>

<style scoped>
.imgProofCss{
    /* border: 1px solid red; */
    border-top-left-radius: 25px; 
    border-top-right-radius: 25px;
}
.textCss{
    color: white;
    padding: 10px 10px;
    text-align: justify;
}
.portoContent{
    width: 40vw; 
    /* border-radius: 25px 25px 0px 0px; */
    border-radius: 25px;
    background-color: gray; 
    text-align: center; 
    border: 1px solid gray;
    margin: 20px 20px;
    /* text-align: justify; */
}
@media screen and (max-width: 600px) {
.portoContent{
    width: 80vw; 
    /* border-radius: 25px 25px 0px 0px; */
    border-radius: 25px;
    background-color: gray; 
    text-align: center; 
    border: 1px solid gray;
    margin: 20px 20px;
    /* text-align: justify; */
}
}
</style>

