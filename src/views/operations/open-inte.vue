<template>
  <div class="f-l inte-m">
    <div class="f-l w-i inte">
      Merci de voir mon interet personnel
    </div>
    <div class="f-l w-i cl">
      ok
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
  .w-i{ /* the width of the popup /*
    width: 40vw;
  }
  .inte-m{
    width: 100vw;
    height: 100vh;
    background-color: rgba(56, 56, 56, 0.6);
    position: absolute;
  }
  .inte{
    height: 200px;
    background-color: white;
  }
  .cl{
    height: 50px;
  }
  @media screen and (max-width: 900px){
    .w-i{
      width: 80vw;
    }
  }
</style>
