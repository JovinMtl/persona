<template>
  <div class="f-l d inte-m">
    <div class="f-l w-i inte">
      <span v-if="inteContent"> 
        <span v-html="inteContent"></span>
      </span>
      <span v-else> 
        Thank you for taking care of my interests. I am delving deeper on this topic, so stay tuned.
      </span>
    </div>
    <div class="f-l w-i cl">
      <div class="btn" @click="signalEnd">
        Ok
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { inject } from 'vue'
  
  const emit =  defineEmits(['endSignal'])
  const inteContent = inject('interestShow')

  const signalEnd = ()=>{
    emit('endSignal')
  }
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
    color: black;
    position: absolute;
  }
  .inte{
    box-sizing: border-box;
    height: 200px;
    background-color: white;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    padding: 20px;
    overflow: auto;
    line-height: 1.3;
    flex-direction: column;
    justify-content: space-around;
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
    padding: 2px 12px;
    border: 4px double white;
    border-radius: 10px;
    background-color: white;
    font-weight: bold;
  }
  .btn:active{
    scale: 1.2;
  }
  .btn:hover{
    cursor: pointer;
  }
  :deep(.autho){
    font-style: italic;
    color: grey;
    font-weight: 600;
  }
  :deep(.val){
    margin: -2rem;
    font-size: 1.8rem;
  }
  :deep(.s::marker){
    color: rgb(217, 255, 0);
  }
  :deep(.d::marker){
    color: rgb(0, 255, 34);
  }
  @media screen and (max-width: 900px){
    .w-i{
      width: 80vw;
    }
    .inte{
      padding: 13px;
    }
  }
</style>
