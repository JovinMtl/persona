<template>
    <div class="centered cpr">
        <span class="fw-9 enc">
            Thierry Nsanzumukiza 
        </span>
        <span class="y">
          <span class="y1 y1-1">2024 </span> - <span class="y1 y1-2">{{ year }}</span>
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
        font-family: Sen;
        font-weight: 800;
        color: #94aec9;
    }
    .y1{
        display: inline-flex;
        border-radius: 3px;
        padding: 0 3px;
        color: #d9ecec;
        justify-content: center;
        transition-duration: 500ms;
    }
    .y1-1{
        background: linear-gradient(60deg,rgb(97, 97, 240), rgb(245, 65, 65));
    }
    .y1-2{
        background: linear-gradient(60deg, rgb(245, 65, 65),rgb(97, 97, 240));
    }
    .y1:hover{
        scale: 1.2;
        cursor: pointer;
    }

    @media screen and (max-width: 358px) {
        .cpr{
            font-size: .6rem;
        }
    }
</style>

