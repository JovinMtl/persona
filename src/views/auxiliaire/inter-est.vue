<template>
    <div style="padding: 30px;">
        <div class="intere" id="1" @click=mentionClicked>Digital Discipline</div>
        <div class="intere">Ubuzima Butyoroye</div>
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
      'content': 'Interest one',
      'detail' : 'none'
    },
    {
      'content': 'Interest two',
      'detail' : 'nonee'
    },
    ]
    
    const mentionClicked = (e)=>{
        //let index = e.target.id
        actualInterest.value = "index"
        openInterst.value = true;
    }
    const closeInterst = ()=>{
        openInterst.value = false;
    }

    
    // space for provide 
    provide(interestShow, actualInterest)
</script>
