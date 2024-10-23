<template>
    <div class="centered" style="font-size: 12px;margin-top: 20px;
    margin-bottom: 10px;">
       <!-- text-shadow: 2px -1px 3px rgb(56, 54, 54), 2px 1px 8px rgb(56, 54, 54); -->
        <span class="author">
            Thierry Nsanzumukiza 
        </span>
        <span style="margin: 0 5px;">
        {{year}}
        </span>
        <span style="font-weight: 800;padding:5px; border:1px solid black; 
            border-radius:3px;">
            Bujumbura - Burundi.
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
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap')
    .author{
        font-weight: 900; 
        padding:5px; 
        border:1px solid black; border-radius:3px;
        font-family:Montserrat;
    }
</style>
