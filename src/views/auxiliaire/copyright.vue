<template>
    <div class="centered" style="font-size: 12px;margin-top: 20px;">
        <span style="font-weight: 900;">Thierry Jovin Nsanzumukiza </span>
        |{{year}}| 
        <span style="font-weight: 800;">Bujumbura - Burundi</span> 
    </div>
</template>
<script>
export default {
    setup() {
        var year = (String(new Date())).slice(11, 15)
        return {
            year,
        }
    },
}
</script>