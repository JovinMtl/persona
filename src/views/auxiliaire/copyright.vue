<template>
    <div class="centered" style="font-size: 12px;margin-top: 20px;
    margin-bottom: 5px;">
        <span style="font-weight: 900; 
        text-shadow: 2px -1px 6px #000, 2px 1px 16px #000;">
            Thierry Nsanzumukiza 
        </span>
        |{{year}}| 
        <span style="font-weight: 800;">Bujumbura - Burundi.</span> 
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