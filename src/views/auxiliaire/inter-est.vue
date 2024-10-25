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
      'detail' : 'none'
    },
    {
      'content': 'Ubuzima Butyoroye',
      'detail' : 'nonee'
    },
    ]
    
    const mentionClicked = (e)=>{
        let index = e.target.id
        actualInterest.value = interests[index]
        openInterst.value = true;
    }
    const closeInterst = ()=>{
        openInterst.value = false;
    }

    
    // space for provide 
    provide('interestShow', actualInterest)
</script>
