<template>
    <div class="centered cpr">
        <span class="fw-9 enc">
            Thierry Nsanzumukiza 
        </span>
        <span class="y">
            {{ year }}
        </span>
        <span class="fw-8 enc">
            Bujumbura - Burundi
        </span> 
    </div>
</template>
<script setup lang="ts">
    const year:string = (String(new Date())).slice(11, 15)
</script>
<style scoped>
    .cpr{
        font-size: 12px;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    .enc{
        padding:2px; 
        border:1px solid rgba(56, 56, 56, 0.3); 
        border-radius:3px;
    }
    .fw-9{
        font-weight: 900;
    }
    .fw-8{
        font-weight: 800;
    }
    .y{
        margin: 0 5px; 
        font-family:fantasy;
    }
</style>

