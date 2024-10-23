<template>
    <div class="centered" style="font-size: 12px;margin-top: 20px;
    margin-bottom: 10px;">
       <!-- text-shadow: 2px -1px 3px rgb(56, 54, 54), 2px 1px 8px rgb(56, 54, 54); -->
        <span style="font-weight: 900; 
            padding:2px; border:1px solid rgba(56, 56, 56, 0.3); border-radius:3px;">
            Thierry Nsanzumukiza 
        </span>
        <span style="margin: 0 5px; font-family:fantasy;">
        {{year}}
        </span>
        <span style="font-weight: 800;padding:2px; border:1px solid rgba(56, 56, 56, 0.3); 
            border-radius:3px;">
            Bujumbura - Burundi
        </span> 
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
