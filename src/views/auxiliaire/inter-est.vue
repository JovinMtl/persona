<template>
    <div style="padding: 30px;">
        <div class="intere" v-for="(interest, index) in interests" :id="index" @click=mentionClicked>
            {{ interest.content }}
        </div>
        <teleport to="body">
            <open-inte v-if="openInterst" @endSignal="closeInterst"></open-inte>
        </teleport>
    </div>
</template>
<script setup lang="ts">
    import { ref, provide } from 'vue';
    import openInte from '../operations/open-inte.vue'; 

    const openInterst = ref(false);
    const actualInterest = ref("Empty")

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
      'detail' : `` //when empty
    },
    {
      'content': 'Alchol without you',
      'detail' : `I wrote about the possibility of getting free from want to drink any drink 
          that is regarded as <b>special</b>. It's about getting free from drinking alcohol or soft drink without religious 
        implication, but to drink on casual need. 
        I shared on how I started to find it were joyful for me to be independent on 
        alcohol while staying Catholic. 
        However, I still have my right to take any of them only on honorific request.<br><br>
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
      ` //when empty
    },
    {
      'content': 'Acknowledgements',
      'detail' : `` //when empty
    },
    ]
    
    const mentionClicked = (e)=>{
        let index = e.target.id
        actualInterest.value = interests[index].detail
        openInterst.value = true;
    }
    const closeInterst = ()=>{
        openInterst.value = false;
    }

    
    // space for provide 
    provide('interestShow', actualInterest)
</script>
