<template>
    <div class="summary">
        <div v-for="(content, index) in contents" 
        :class="content.detail ? 'summaryElementActive':'summaryElement'">
            <div>
                <h3 :class="index%3 ? 'elementTitle2':'elementTitle'" 
                    style="font-size: small;" 
                    @click="titleAlert(content.title)">
                    {{ (content.title).slice(0,35) }}...
                </h3></div> <br>
            <div><p style="display: block; margin-top: -30px; margin-left: 20px;
            margin-right: 20px;">
                <span v-if="!(content.detail) && (content.content).length > 199"> 
                    {{ (content.content).slice(0,199) }}...
                        <!-- <ion-button @click="oPen(1)" mode="ios" color="black"
                            style="color: gray; text-align: right;
                            position: relative; z-index: 1">
                            See more
                        </ion-button> -->
                        <div style="background-color: transparent; text-align: center;
                            color: gray; margin-top: 0px;"
                            @click="turnDetail(index)">
                            See more
                        </div>
                    
                </span>
                <span v-else>
                    {{ content.content }}
                    <span v-show="(content.content).length > 199">
                        <span style="margin-left: .6rem;">&nbsp;</span> 
                        <a style="background-color: transparent; text-align: center;
                            color: gray; margin-top: 0px;"
                            @click="turnDetail(index)">
                            Show less
                    </a>
                    </span>
                </span>
            </p></div>
            
            
        </div>
        
    </div>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue'
import { alertController } from '@ionic/vue'
export default defineComponent ({
    setup() {
        const turnDetail = (index)=>{
            //will enable or disable the content to be expanded
            (contents.value[index]).detail = !(contents.value[index]).detail
        }
        const titleAlert = async (content) => {
            const alert = await alertController.create({
            header: content,
            // message: 'Veuillez vous reconnecter encore.',
            cssClass: 'customAlert', 
            buttons: ['Ok'],
            mode: 'ios',
            });

            // await alert.present();
            const alertElement = await alert.present();
            const customAlert = alertElement.querySelector('.alert-wrapper');
            const line = document.createElement('div');
            line.classList.add('separator-line');
            customAlert.appendChild(line);
        };

        const contents = ref([
            {
                'title': 'About Me: Fullstack Developer & Business Strategist',
                'content': `I am a Burundian Business Strategist and Freelance Fullstack Developer, driven by a passion for 
                strategic thinking and a deep-seated love for problem-solving. My academic journey at 
                the University of Burundi honed my skills in the realm of business strategy, fostering my affinity for strategic planning, 
                critical thinking, and collaborative solution-finding. This profound interest led me to nourish my strategic mindset, 
                embracing the intricate art of philosophy and refining my ability in diagnosing complex scenarios.

                On the technical front, I excel in the world of programming, boasting proficiency in Python, 
                specifically in Django and Django Rest Framework, alongside expertise in Vue.js, HTML, and CSS. My practical abilities 
                were evidenced through the successful completion of a Web App and an Android App for my esteemed inaugural client. 
                As I continue to expand my horizons, I am currently engrossed in the development of my own website, 
                geared towards showcasing my multifaceted skills and establishing a strong presence in the realm of freelancing.
                This versatile blend of business strategy acumen and technical prowess empowers me to navigate 
                the dynamic landscape with dexterity, embracing strategic thinking and technological innovation in equal measure.
            `,
                'detail':false
            },
            {
                'title':'Tech Passion and Learning Journey',
                'content' : `In 2014, my passion for Linux was ignited, leading me to explore the system extensively, 
                often substituting formal courses with self-study using Linux books at the library. 
                The year 2015 introduced me to Vim, UNIX commands, and Bash scripting, 
                expanding my technical toolkit.`,
                'detail':false
            },
            {
                'title': 'Collaborative Spirit with Jonathan NKURUNZIZA',
                'content':`My partnership with my close friend Jonathan NKURUNZIZA (Github: INGANZAMARUMPU) 
                since 2012 has been instrumental in my growth in the field of computer science. Together, 
                we have shared knowledge, motivation, and support, shaping my journey.
           `,
                'detail':false
            },
            {
                'title': 'Professional Milestone: C Programming Project',
                'content' : `A pivotal moment in my career was working on a significant project in 2017, focusing on C programming. 
                This experience deepened my understanding of POINTERS and the responsibility 
                that comes with navigating computer memory, a realm typically reserved for C/C++ experts.
           `,
                'detail':false
            }, 
            {
                'title':'Diversification into Trade and Marketing',
                'content':`From 2018 to 2021, I ventured into studying Trade and Marketing at the University of Burundi to complement my skill set. 
                This exploration introduced me to various crucial areas such as Ethics, Economics, Consumer Behavior, 
                Citizenship Values, Public Administration, and Marketing Principles. 
                It also emphasized the importance of personal development to bridge the gap between my technical and business expertise.
           `,
                'detail':false
            },
            {
                'title':'Embracing Freelancing as a Fusion of Skills',
                'content':`With this diverse background and a blend of technical proficiency and business acumen, I am ready to address challenges 
                as a Business Strategist and Fullstack Developer in the world of freelancing.
          `,
                'detail':false
            }, 
            {
                'title':'Engage with Me',
                'content':`Let's connect to explore synergies and opportunities for collaboration in the dynamic realms of technology, 
                business strategy, and web development.`,
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
.separator-line{
    color: red;
    background-color: green;
    border: 3px solid green;
}
</style>