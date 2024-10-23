<template>
  <div class="f-l inte-m">
    <div class="f-l inte">
      Merci de voir mon interet personnel
    </div>
  </div>
</template>
<script setup lang="ts">
  
</script>

<style scoped>
  .f-l{
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  .inte-m{
    width: 100vw;
    height: 100vh;
    background-color: rgba(56, 56, 56, 0.6);
    position: absolute;
  }
  .inte{
    width: 40vw;
    height: 200px;
    background-color: white;
  }
  @media screen and (max-width: 900px){
    .inte{
      width: 80vw;
    }
  }
</style>
