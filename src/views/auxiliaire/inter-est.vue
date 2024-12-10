<template>
    <div style="padding: 30px;">
        <div>Please choose a topic to see more.</div>
        <div v-if="confirmPrivacy"  class="intere" v-for="(interest, index) in interests"
            :id="index" @click="mentionClicked">
            {{ interest.title }}
        </div>
        <div v-if="showBckMsg && !confirmPrivacy" class="intere" @click="openForBckMsg" >{{bckUpMsg.title}}</div>
        <teleport to="body">
            <open-inte v-if="openInterst" 
                @endSignal="closeInterst"></open-inte>
        </teleport>
    </div>
</template>
<script setup lang="ts">
    import { ref, reactive, provide } from 'vue';
    import openInte from '../operations/open-inte.vue'; 

    const openInterst = ref(true);
    const confirmPrivacy = ref(false);
    const showBckMsg = ref(false)
    const bckUpMsg = {
        'title': "It's okay",
        'detail': `
            <p style="font-size:1.3rem;">Since you didn't want to keep our deal, 
            there is no other option but to wait until you agree.</p>
            <p class='fm'>Did you change your mind?</p>
        `,
        'notice': true,
        'hasImg': false,
    };
    const notice = {
        'title': 'notice',
        'detail': `
        <span class="tl">Notice</span>
        <p class='tl-1'>I'm so grateful for your journey and I really hope we can connect. 
        I've shared some of my most intimate interests with you,
        so I'd be really sad if you judged me.</p>
        <p class='fm'>Could I ask you to keep this neutral for my consideration?</p>`,
        'notice': true,
        'hasImg': false,
        }
    const actualInterest = ref(notice);

    const interests = [
    {
      'title': 'Digital Discipline',
      'detail' : `Men deserve discipline in the digital realm to protect themselves. 
          Because digital interaction starts with excitement and ends with fatigue and 
        dissatisfaction from endless scrolling.
        The tool, which was supposed to save him time by sparing him tedious manual labor,
        has in fact condemned him to endless consumption. <br><br>

        <span class='autho'>-- Th. Jov. Nsanzumukiza</span>
        `,
        'notice': false,
        'hasImg': false,
    },
    {
      'title': 'Ubuzima Butyoroye',
      'detail' : `
          Imagine a life in which you have total peace to yourself, you have control and you master your impulsions. 
          You enjoy the little you know, your joy is pure and rewarding to the neighbor. <br><br>

            Imagine you have attained a high level of consciousness of your being that 
            you no longer need instant gratification. You would be happy from virtue, and not laziness (weakness) or ego.<br><br>

        <span class='autho'>-- Th. Jov. Nsanzumukiza</span
      `,
        'notice': false,
        'hasImg': false,
    },
    {
      'title': 'Alcohol without you',
      'detail' : `I wrote about the possibility of getting free from want to drink any drink 
          that is regarded as <b>special</b>. It's about getting free from drinking alcohol or soft drink without religious 
        implication, but to drink only by casual need. 
        I shared on how <b>I found it were joyful to be independent on 
        alcohol while staying Catholic</b>. 
        However, I reserved my right to take any of them only on honorific request.<br><br>
        <span class='autho'>-- Th. Jov. Nsanzumukiza</span>
        `,
        'notice': false,
        'hasImg': false,
    },
    {
      'title': 'Values',
      'detail' : `
      <p class='intr'>Whenever I work on a project, I care about these things: </p>
      <ul class='val'>
          <li>Understanding</li>
          <li class='c2'>Satisfaction</li>
          <li class='c3'>Descreetness</li>
      </ul>
      `,
        'notice': false,
        'hasImg': false
    },
    {
      'title': 'Acknowledgements',
      'detail' : `<span style="font-size:.9rem;">
            I have been lucky to meet many remarkable people into my life.
            Among precious souls for whom I am grateful, 
            is my mother,<span style="font-family:Sen;font-weight:800"> Nsavyimana Daphrose</span>.
            Some are still alive with me and some are not. 
            Some are still my collaborators and some are actually not, 
            <i style="font-weight: 500;">that's a fact of life</i>.
            Regardless of our distance, 
            I sincerely acknowledge their contribution to my development and
            our connection that has ever existed.</span>
            <br><br>
        <span class='autho'>-- Th. Jov. Nsanzumukiza</span>`,
      'notice': false,
      'hasImg': false
    },
    {
      'title': 'Morning Burundi',
      'detail': `<span class='fm'>A great place for viewing the beautiful nature found in Burundi.</span><br><br>
The platform will be provided soon. And I am looking for a collaborator in this project.`,
      'notice': false,
      'hasImg': false 
    },
    {
      'title': 'Centre for Forgiveness',
      'detail': ``,
      'notice': false,
      'hasImg': false 
    }
    ];
    
    const mentionClicked = (e)=>{
        let index = e.target.id;
        actualInterest.value = interests[index];
        openInterst.value = true;
    }
    const openForBckMsg = ()=>{
        openInterst.value = true;
}
    const closeInterst = (closeValue)=>{
        if(closeValue == 1){
            actualInterest.value = bckUpMsg;
            showBckMsg.value = true;               
        } else if(closeValue == 2){
            confirmPrivacy.value = true
}
        openInterst.value = false;
    }

    
    // space for provide 
    provide('interestShow', actualInterest)
</script>
