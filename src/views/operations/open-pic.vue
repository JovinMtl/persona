<template>
    <div class="openImage" style="text-align: center;">
        <!--Ubuzima Butyoroye.
         <ion-buttons> 
            <span  class="moveX">
                <ion-icon size="larger"></ion-icon>
            </span>
        -->
            <ion-img src="/personaFoto/jove18.png"/>
            <!-- <span class="mantra">Embracing Vision, Inspiring Innovation</span>
            <span class="mantra">
                Before downloading one file, please delete two.
                <span style="font-size=5px;"> -- Th. Jov. Nsanzumukiza</span>
            </span> -->
            <blockquote class="quote">
                <span class="big-quote">“</span>
                <span class="content">Before downloading one file, please delete two.”</span>
                <span class="big-quote">”</span>
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
    font-size: 24px; /* Size of the quote */
    font-style: italic; /* Italicize the quote */
    color: #333; /* Color of the text */
    border-left: 4px solid salmon ; /* Left border to indicate a quote #888 */
    padding-left: 20px; /* Space between border and text */
    margin: 20px 0; /* Margin above and below the quote */
}
.big-quote {
    font-size: 72px; /* Make the opening quote much larger */
    line-height: -0.7; /* Adjust line height for alignment */
    color: #333; /* Same color as the text for consistency */
    vertical-align: middle; /* Align the quote correctly with text */
    margin-top: -10px;
}
.content{
    display: inline;
}
.big-quot{
    display: inline;
    font-size: 72px; /* Make the opening quote much larger */
   /* line-height: 1;  Adjust line height for alignment */
    color: #333; /* Same color as the text for consistency */
     vertical-align: middle; /* Align the quote correctly with text */
}
.author {
    display: block; /* Makes the author appear on a new line */
    font-size: 20px; /* Size of the author's name */
    font-weight: bold; /* Bold for emphasis */
    color: #666; /* Different color for the author's name */
    margin-top: 10px; /* Space above the author's name */
}

</style>

