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
    import { ref } from 'vue';
    import openInte from '../operations/open-inte.vue'; 

    const openInterst = ref(false);
    
    const mentionClicked = ()=>{
        openInterst.value = true;
    }
    const closeInterst = ()=>{
        openInterst.value = false;
    }
</script>
