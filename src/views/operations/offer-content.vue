<template>
    <div>
        <!-- Here is the content: {{ actualOption }} -->
        <div v-if="actualOption"  :style="{
            border: `2px solid ${offers[actualOption].color}`,
            borderRadius: '20px',
            margin: '5px 20px',
            padding: '10px 10px',
            }">
            <span style="font-weight: bolder;">{{ offers[actualOption].title }}</span>  <br>
            {{ offers[actualOption].content }}
        </div>
    </div>
    <br>
    <div class="footer">
        Contact Me : <router-link to="/">Portofolio</router-link>
    </div>
    <!-- //copright -->
</template>
<script>
import { computed } from 'vue'
export default {
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
        }
    },
}
</script>