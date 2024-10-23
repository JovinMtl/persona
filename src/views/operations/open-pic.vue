<template>
    <div class="openImage" style="text-align: center;">
        <!-- <ion-img src="/personaFoto/jove18.png"/> 
        <ion-img src="/personaFoto/jove19.jfif" style="border-radius=20px;"/> -->
        <img src="/personaFoto/jove19.jfif" style="border-radius=20px"></img>
        <blockquote class="quote">
            <span class="big-quote">“</span>
            <span class="content">Before downloading one file, please delete two.</span>
            <span class="big-quot">”</span>
            <span class="author">— Th. Jov. Nsanzumukiza</span>
        </blockquote>            
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
<style>
    .quote {
    font-size: 20px;
    font-style: italic;
    color: #333;
    border-left: 4px solid salmon ;
    padding-left: 20px;
    padding-right: 20px;
    margin: 20px 0;
}
.big-quote {
    display: inline;
    font-size: 72px;
    line-height: 0;
    color: #333;
    vertical-align: middle;
    margin-top: -50px;
}
.content{
    display: inline;
}
.big-quot {
    display: inline;
    font-size: 42px;
    line-height: 0;
    color: #333;
    vertical-align: middle;
    margin-top: -50px;
}
.author {
    display: block;
    font-size: 20px;
    font-weight: bold;
    color: #666;
    margin-top: 10px;
}

</style>

