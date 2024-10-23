<template>
    <div class="centered" style="font-size: 12px;margin-top: 20px;
    margin-bottom: 10px;">
        <span style="font-weight: 900; 
        text-shadow: 2px -1px 3px rgb(56, 54, 54), 2px 1px 8px rgb(56, 54, 54);
            padding:20px; border:1px solid black;">
            Thierry Nsanzumukiza 
        </span>
        |{{year}}| 
        <span style="font-weight: 800;">Bujumbura - Burundi.</span> 
    </div>
</template>
<script lang="ts">
import { defineComponent} from 'vue'
export default defineComponent ({
    setup() {
        let year:string = (String(new Date())).slice(11, 15)
        return {
            year,
        }
    },
})
</script>
