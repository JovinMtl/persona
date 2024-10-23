<template>
    <div style="padding: 30px;">
        <!--
        <p style="margin-top: 40px; margin-bottom: 67vh;">
           <span style="font-family: Cantarell; color: brown;">
            "I have not yet provided my interests here. But soon, I will provide them.", 
           </span> 
            says Thierry Jovin.
        </p>
        -->
        <div class="intere" id="1" @click=mentionClicked>Digital Discipline</div>
        <div class="intere">Ubuzima Butyoroye</div>
        <teleport to="body">
            <open-inte v-if="openInterst" @endSignal="closeInterst"></open-inte>
        </teleport>
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue';
    import openInte from '../operations/open-inte.vue'; 

    const openInterst = ref(false);
    
    const mentionClicked = ()=>{
        openInterst.value = true;
    }
    const closeInterst = ()=>{
        console.log("Closing the popup...");
        openInterst.value = false;
    }
</script>
