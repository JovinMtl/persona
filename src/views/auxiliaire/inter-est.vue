<template>
    <div style="padding: 30px;">
        <div v-if="confirmPrivacy" class="intere" v-for="(interest, index) in interests" :id="index" @click=mentionClicked>
            {{ interest.content }}
        </div>
        <teleport to="body">
            <open-inte v-if="openInterst" @endSignal="closeInterst(respnse)"></open-inte>
        </teleport>
    </div>
</template>
<script setup lang="ts">
    import { ref, provide } from 'vue';
    import openInte from '../operations/open-inte.vue'; 

    const openInterst = ref(true);
    const confirmPrivacy = ref(false);
    const actualInterest = ref(`
        <span class="tl">Notice</span>
        <p>I appreciate your journey so far and 
        hope you can find something we have in common, but please don't judge me
        for sharing my intimate interests with you.</p>
        <p class='fm'>Do you agree to keep this neutral for my consideration?</p>
        
        <span class='autho'>-- Th. Jov. Nsanzumukiza</span>`);

    const interests = [
    {
      'content': 'Digital Discipline',
      'detail' : `Men deserve discipline in the digital realm to protect themselves. 
          Because digital interaction starts with excitement and ends with fatigue and 
        dissatisfaction from endless scrolling.
        The tool, which was supposed to save him time by sparing him tedious manual labor,
        has in fact condemned him to endless consumption. <br><br>

        <span class='autho'>-- Th. Jov. Nsanzumukiza</span>
        `
    },
    {
      'content': 'Ubuzima Butyoroye',
      'detail' : `
          Imagine a life you have total peace to yourself, you have control and you master your impulsions. 
          You enjoy the little you know, your joy is pure and rewarding to the neighbor. <br><br>

            Imagine you have attained a high level of consciousness of your being that 
            you no longer need instant gratification. You would be happy by virtue, not by laziness (weakness) or ego.
      `
    },
    {
      'content': 'Alchol without you',
      'detail' : `I wrote about the possibility of getting free from want to drink any drink 
          that is regarded as <b>special</b>. It's about getting free from drinking alcohol or soft drink without religious 
        implication, but to drink only by casual need. 
        I shared on how <b>I found it were joyful to be independent on 
        alcohol while staying Catholic</b>. 
        However, I reserved my right to take any of them only on honorific request.<br><br>
        <span class='autho'>-- Th. Jov. Nsanzumukiza</span>
        `
    },
    {
      'content': 'Values',
      'detail' : `
      <p class='intr'>Whenever I work on a project, I care about these things: </p>
      <ul class='val'>
          <li>Understanding</li>
          <li class='s'>Simplicity</li>
          <li class='d'>Satisfaction</li>
      </ul>
      `
    },
    {
      'content': 'Acknowledgements',
      'detail' : `` //when empty
    },
    ];
    
    const mentionClicked = (e)=>{
        let index = e.target.id;
        actualInterest.value = interests[index].detail;
        openInterst.value = true;
    }
    const closeInterst = (respnse)=>{
        console.log("THe response sent is: ", respnse)
        openInterst.value = false;
    }

    
    // space for provide 
    provide('interestShow', actualInterest)
</script>
