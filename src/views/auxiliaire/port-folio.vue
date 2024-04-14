<template>
    <div>
        <div style="display: block; position: relative;">
            Here is my Portfolio
        </div>
    </div>
    
    <div style="display: inline-block;" v-for="proof in proofs">
        <div class="portoContent">
            <img :src="proof.image" class="imgProofCss"/>
            {{ proof.title }}.
        </div>
    </div>
    
</template>
<script>
export default {
    
    setup() {
        const proofs = [
            {
                'title':'title one',
                'image':'/personaFoto/jove20.png',
                'description':''
            },
            {
                'title':'title two',
                'image':'/personaFoto/jove21.png',
                'description': ''
            },
            {
                'title':'',
                'image':'/personaFoto/jove22.png',
                'description': ''
            },
            {
                'title':'title two',
                'image':'/personaFoto/jove23.png',
                'description': ''
            },
            {
                'title':'',
                'image':'/personaFoto/jove24.png',
                'description': ''
            },
            {
                'title':'title two',
                'image':'/personaFoto/jove25.png',
                'description': ''
            },
            {
                'title':'',
                'image':'/personaFoto/jove26.png',
                'description': ''
            },
            {
                'title':'title two',
                'image':'/personaFoto/jove27.png',
                'description': ''
            },
            {
                'title':'',
                'image':'/personaFoto/jove28.png',
                'description': ''
            },
            {
                'title':'title two',
                'image':'/personaFoto/jove29.png',
                'description': ''
            },
            {
                'title':'',
                'image':'/personaFoto/jove30.png',
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
    border: 1px solid red;
    border-top-left-radius: 25px; 
    border-top-right-radius: 25px;
}
.portoContent{
    width: 40vw; 
    border-radius: 25px 25px 0px 0px;
    background-color: gray; 
    text-align: center; 
    border: 1px solid gray;
    margin: 20px 20px;
}
@media screen and (max-width: 600px) {
.portoContent{
    width: 80vw; 
    border-radius: 25px 25px 0px 0px;
    background-color: gray; 
    text-align: center; 
    border: 1px solid gray;
    margin: 20px 20px;
}
}
</style>

