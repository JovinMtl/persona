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
export default {
    
    setup() {
        const proofs = [
            {
                'title':'title one',
                'image':'/personaFoto/jove1.png',
                'description':'I am a Burundian Business Strategist and Freelance Fullstack Developer, driven by a passion for strategic thinking and a deep-seated love for problem-solving. My academic journey at the University of Burundi honed my skills in the realm of business strategy, fostering my affinity for strategic planning, critical thinking, and collaborative solution-finding.'
            },
            {
                'title':'title two',
                'image':'/personaFoto/jove2.png',
                'description': ''
            },
            {
                'title':'',
                'image':'/personaFoto/jove3.png',
                'description': ''
            },
            {
                'title':'title two',
                'image':'/personaFoto/jove4.png',
                'description': ''
            },
            {
                'title':'',
                'image':'/personaFoto/jove5.png',
                'description': ''
            },
            {
                'title':'title two',
                'image':'/personaFoto/jove6.png',
                'description': ''
            },
            {
                'title':'',
                'image':'/personaFoto/jove7.png',
                'description': ''
            },
            {
                'title':'title two',
                'image':'/personaFoto/jove8.png',
                'description': ''
            },
        ];
        return {
            proofs,
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
/* .portoContent{
    width: 80vw; 
    border-radius: 25px 25px 0px 0px;
    border-radius: 25px;
    background-color: gray; 
    text-align: center; 
    border: 1px solid gray;
    margin: 20px 20px;
    padding: 10px 10px;
    text-align: justify;
} */
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

