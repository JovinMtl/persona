<template>
  <div class="f-l d inte-m">
    <div class="f-l w-i inte">
      Merci de voir mon interet personnel
    </div>
    <div class="f-l w-i cl">
      <span class="btn">
        Ok
      </span>
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
  .w-i{ /* the width of the popup */
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
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
  }
  .cl{
    height: 50px;
    background-color: salmon;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  .d{
    flex-direction: column;
  }
  .btn{
    padding: 2px 8px;
    border: 6px double white;
  }
  @media screen and (max-width: 900px){
    .w-i{
      width: 80vw;
    }
  }
</style>
