<template>
    <div style="display: flex; justify-content: center;">
        <div style="background-color: rgba(155,55,105,0.2);" v-if="actualOption"  :style="{
            border: `2px solid ${offers[actualOption].color}`,
            borderRadius: '20px',
            margin: '5px 20px',
            padding: '10px 10px',
            }" class="bigWidth">
            <span :style="{
                fontWeight: 'bolder', 
                borderBottom: `2px solid ${offers[actualOption].color}`,
                display:'block',
                margin: '0px -12px',
                paddingBottom: '5px',
                }">
                {{ offers[actualOption].title }}
            </span>  <br>
            {{ offers[actualOption].content }}
        </div>
    </div>
    <br>
    <div id="connect" class="ff-1" style="font-weight: bolder;">
        <span style="color: brown; font-size: 18px">Connect with me</span>  
        <span style="position: relative; top: .6rem; 
                font-size: 2rem;">
            <span style="margin-left: .3rem; top: 3rem;">&nbsp;</span>
            <a href="https://www.linkedin.com/in/thierry-nsanzumukiza-9b8bb1109" 
                target="_blank"  rel="noopener noreferrer" style="color: blue;">
                <ion-icon :icon="logoLinkedin"></ion-icon>
            </a>
            <span style="margin-left: .9rem;">&nbsp;</span>
            <a href="mailto:nsanzumukizath@gmail.com" style="color: blue;">
                <ion-icon :icon="mailOutline"></ion-icon>
            </a>
            <span style="margin-left: .9rem;">&nbsp;</span>
            <a href="https://wa.me/+25779071453" style="color: green;">
                <ion-icon :icon="logoWhatsapp"></ion-icon>
            </a>
            
            
            
        </span>
        
    </div>
    <!-- //copright -->
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { IonIcon } from '@ionic/vue'
import { logoWhatsapp, mailOutline, logoLinkedin } from 'ionicons/icons'
import { Offer } from '../auxiliaire/types'
export default defineComponent ({
    components:{
        IonIcon,
    },
    props:[
        'option',
    ],
    setup(props) {
        const offers:Offer = [
            {
                'title':'',
                'content':'',
                'color': ''
            },
            {
                'title' : "Let's consider contract",
                'content' : `This is the most of the part I wish you could work with me.
                    In this setting, I can forget everchanging aspirations and settle my mind 
                    at developping my career within your environment. Being among your favorite achievers would
                    motivate me as long as my values are aligned with your corporate.`,
                'color' : 'black'
            },
            {
                'title' : "Business Strategist",
                'content' : "My passion lies in not only delivering top-notch solutions but also in witnessing the successful launch of projects, effectively reaching and resonating with the target audience. I pride myself on navigating the challenges and triumphs of the digital landscape, consistently enhancing business success stories.",
                'color': 'salmon'
            }
        ]
        const actualOption = computed(()=>{
            return props.option
        })
        return {
            actualOption, offers,
            logoWhatsapp, mailOutline, logoLinkedin,
        }
    },
})
</script>

