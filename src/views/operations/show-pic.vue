<template>
    <div>
        <div style="margin-top: 20px;">Nsanzumukiza Thierry Jovin</div> 
        <div class="imageContainer">
            <div class="imgContent" v-for="image in images" :style="{
                backgroundImage: image.url}"></div>
        </div>
    </div>
</template>
<script>
export default {
    setup() {
        const images = [
            {
            url : "url('/public/personaFoto/jove1.png')",
            },
            {
            url : "url('/public/personaFoto/jove2.png')",
            },
            {
            url : "url('/public/personaFoto/jove3.png')",
            },
            {
            url : "url('/personaFoto/jove4.png')",
            },
            {
            url : "url('/personaFoto/jove5.png')",
            },
            // {
            // url : "url('../../../public/personaFoto/jove6.jpg')",
            // },
            // {
            // url : "url('../../../public/personaFoto/jove7.jpg')",
            // },
            // {
            // url : "url('../../../public/personaFoto/jove8.png')",
            // },
        ]
        return{
            images
        }
    },
}
</script>
<style scoped>
.imageContainer{
    text-align: center;
    width: 90vw;
    border-radius: 25px;
    margin: 20px 20px;
}
.imgContent{
    display: inline-block;
    height: 90px;
    width: 90px;
    margin-right: 2vw;
    margin-left: 3vw;
    background-color: black;
    /* background-image: url('../../../public/personaFoto/jove1.jpg'); */
    background-size: cover;
    border-radius: 80px;
    /* align-content: center; */
}
</style>