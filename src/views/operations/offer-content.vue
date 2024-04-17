<template>
    <div>
        <!-- Here is the content: {{ actualOption }} -->
        <div v-if="actualOption"  :style="{
            border: `2px solid ${offers[actualOption].color}`,
            borderRadius: '20px',
            margin: '5px 20px',
            padding: '10px 10px',
            }">
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
    <div id="connect" class="footer welcomeText" style="font-weight: bolder;">
        <!-- <span>Reach Out</span>   -->
        <span style="color: brown">Connect with me</span>  
        <span style="position: relative; top: .6rem; 
                font-size: 2rem;">
            <span style="margin-left: .6rem; top: 3rem;">&nbsp;</span>
            <a href="https://wa.me/+25779071453" style="color: green;">
                <ion-icon :icon="logoWhatsapp"></ion-icon>
            </a>
            <span style="margin-left: .9rem;">&nbsp;</span>
            <a href="mailto:nsanzumukizath@gmail.com" style="color: blue;">
                <ion-icon :icon="mailOutline"></ion-icon>
            </a>
            
            
        </span>
        
    </div>
    <!-- //copright -->
</template>
<script>
import { computed } from 'vue'
import { IonIcon } from '@ionic/vue'
import { logoWhatsapp, mailOutline, } from 'ionicons/icons'
export default {
    components:{
        IonIcon,
    },
    props:[
        'option',
    ],
    setup(props) {
        const offers = [
            {
                'title':'',
                'content':'',
                'color': ''
            },
            {
                'title' : "FullStack Developer",
                'content' : "As a Freelancer Fullstack Developer, I specialize in collaborating with individuals to create cutting-edge digital solutions and innovative algorithms. I am currently seeking dynamic partners to join me in leveraging my expertise in Python (Django and DRF), Vue.js, HTML, and CSS.",
                'color' : 'black'
            },
            {
                'title' : "Business Strategist",
                'content' : "My passion lies in not only delivering top-notch solutions but also in witnessing the successful launch of projects, effectively reaching and resonating with the target audience. I pride myself on navigating the challenges and triumphs of the digital landscape, consistently enhancing business success stories.",
                'color': 'red'
            }
        ]
        const actualOption = computed(()=>{
            return props.option
        })
        return {
            actualOption, offers,
            logoWhatsapp, mailOutline,
        }
    },
}
</script>