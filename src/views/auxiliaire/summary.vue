<template>
    <div class="summary">
        <div v-for="(content, index) in contents" 
        :class="[content.detail ? 'summaryElementActive':'summaryElement', index==3? 'sBig':'']">
            <div>
                <h3 :class="[index%3 ? 'elementTitle2':'elementTitle', index==0 ? 'elementTitle1':'']" 
                    style="font-size: small;" 
                    @click="titleAlert(content.title)">
                    <span v-if="content.title.length < 35">{{ content.title }}</span>
                    <span v-else>
                    {{ (content.title).slice(0,35) }}...</span>
                </h3></div> <br>
            <div><p style="display: block; margin-top: -25px; margin-left: 20px;
            margin-right: 20px; ">
                <span v-if="!(content.detail) && (content.content).length > 199"> 
                    <span v-html="(content.content).slice(0,199)"></span>
                        ...
                        <div style="background-color: transparent; text-align: center;
                            color: gray; margin-top: 0px;cursor: pointer;"
                            @click="turnDetail(index)">
                            See more
                        </div>     
                </span>
                <span v-else>
                    <span v-html="content.content"></span>
                    <!-- {{ content.content }} -->
                    <span v-show="(content.content).length > 199">
                        <span style="margin-left: .6rem;">&nbsp;</span> 
                        <div style="background-color: transparent; text-align: center;
                            color: gray; margin-top: 0px;cursor: pointer;"
                            @click="turnDetail(index)">
                            Show less
                        </div>
                    </span>
                </span>
            </p></div>
        </div>
    </div>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue'
import { alertController } from '@ionic/vue'
import { Intro } from '../auxiliaire/types'
export default defineComponent ({
    setup() {
        const turnDetail = (index:number)=>{
            //will enable or disable the content to be expanded
            (contents.value[index]).detail = !(contents.value[index]).detail
        }
        const titleAlert = async (content:string) => {
            const alert = await alertController.create({
            header: content,
            cssClass: 'customAlert', 
            buttons: ['Ok'],
            mode: 'ios',
            });
            await alert.present();
        };
        const months = {
            'Jan': 'January',
            'Feb': 'February',
            'Mar': 'March',
            'Apr': 'April',
            'May': 'May',
            'Jun': 'June',
            'Jul': 'July',
            'Aug': 'August',
            'Sept': 'September',
            'Oct': 'October',
            'Nov': 'November',
            'Dec': 'December',
        }
        const year = String(new Date()).slice(10,15)
        const month_a = String(new Date()).slice(4,7)

        const contents:Intro = ref([
            {
                'title': 'About Me',
                'content': `A Full Stack Developer with 5+ years of experience. Proficient
                    in Python (Django, DRF), JS (Vue.js + Ts), Ionic, HTML and
                    CSS. Committed to learn and impact a successful experience
                    in Web Development.
            `,
                'detail':false
            },
            {
                'title':'Tech Passion and Learning Journey',
                'content' : `
I wrote my first "Hello world" in 2014 using C programming language at High school.
Same my passion for Linux was ignited, leading me to explore the system extensively, 
                often substituting formal courses with self-study using Linux books at the library. 
                The year 2015 introduced me to Vim, UNIX commands, and Bash scripting, 
                expanding my technical toolkit.`,
                'detail':false
            },
            {
                'title': 'Collaborative Spirit with Jonathan NKURUNZIZA',
                'content':`My partnership with my close friend <b class='mk'>Jonathan NKURUNZIZA</b>
                since 2012, has been instrumental in my growth in the field of computer science. Together, 
                we have shared knowledge, motivation, and support, shaping my journey.
                <br>
                He is such a strong and reliable mind that I still know in <b>${months[month_a]}</b> ${year}.
                You can feel safe entrusting your big complex system to his mind to architect.`,
                'detail':false
            },
            {
                'title': 'Professional Milestone: C Programming Project',
                'content' : `A pivotal moment in my career was working on a significant project in 2017, focusing on C programming. 
                This experience deepened my understanding of <b class='mk'>POINTERS</b> and the responsibility 
                that comes with navigating computer memory, a realm typically reserved for C/C++ experts.
           `,
                'detail':false
            }, 
            {
                'title':'Diversification into Commerce and Marketing',
                'content':`From 2018 to 2021, I ventured to study commerce and marketing at the University of Burundi to complement my skills. 
                            Just before, I was locked inside myself, a prisoner of the computer world. On the other hand, I was frustrated 
                            that I did not have the soft skills to deal with myself. Like <b class='mk'>leadership</b> and <b class='mk'>business</b> acumen, like those who 
                            went to business school. 
                            This exploration introduced me to several crucial areas such as ethics, economics, consumer behaviour, civic values, 
                            public administration, business strategy and marketing principles. It also emphasised the importance of 
                            personal development to bridge the gap between my technical and business expertise. 
           `,
                'detail':false
            },
            {
                'title':'Embracing Freelancing as a Fusion of Skills',
                'content':`With this diverse background and a blend of technical proficiency and business acumen, I am ready to address challenges
                 and make impact as a Full Stack Developer.
          `,
                'detail':false
            }, 
            {
                'title':'Engage with Me',
                'content':`Let's connect to explore synergies and opportunities 
                    for collaboration in the dynamic realm of web development.`,
                'detail':false
            }
        ])
        return {
            contents, alertController,
            turnDetail, titleAlert,
        }
    },
})
</script>
<style scoped>
h3{
    font-weight: bold;
}
.elementTitle1{
    background-color: grey;
}
</style>
