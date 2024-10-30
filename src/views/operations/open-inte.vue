<template>
  <div class="f-l d inte-m">
    <div class="f-l w-i he"></div>
    <div class="f-l w-i inte">
      <span v-if="inteContent.detail"> 
        <span v-html="inteContent.detail"></span>
      </span>
      <span v-else> 
        Thank you for taking care of my interests. I am delving deeper on this topic, so stay tuned.
      </span>
    </div>
    <div class="f-l w-i cl">
      <div class="btn sp" id='1' v-if="inteContent.notice" @click="signalEnd">No</div>
      <div class="btn" id='2' @click="signalEnd">
        Ok
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { inject } from 'vue'
  
  const emit =  defineEmits(['endSignal', 'endSignalF'])
  const inteContent = inject('interestShow')

  const signalEnd = (e)=>{
    let index = e.target.id;
    if (index == 1){
        emit('endSignal', 1)
    } else if (index == 2){
        emit('endSignal', 2)
}
  }

  console.log("The actualInterest injected is: ", inteContent)
</script>

<style scoped>
  .he{
    height: 30px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    background-color: white;
    margin-bottom: -15px;
  }
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
    height: 170px;
    background-color: white;
    padding: 0 20px;
    overflow: auto;
    line-height: 1.3;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
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
  .sp{
    margin-right: 2.5rem;
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
    display: inline-flex;
    flex-direction: column;
    text-align: left;
    margin: -2rem;
    font-size: 1.8rem;
  }
  :deep(.intr){
    font-style: italic;
    color: grey;
    font-size: 0.8rem;
    margin-top: -1.4rem;
  }
  :deep(.s::marker){
    color: #ff5500;
  }
  :deep(.d::marker){
    color: rgb(0, 255, 34);
  }
  :deep(.sa::marker){
    color: #7c00ff;
  }
  :deep(.tl){
    color: red;
    font-size: 0.8rem;
    margin-top: -2rem;
    margin-bottom: 1rem;
    padding: 0 1rem;
    border-bottom: 1px solid black;
    font-weight: bold;
  }
:deep(.fm){
    color: red;
    margin: -1rem auto;
    font-weight: bold;
    font-size: .9rem;
}
  @media screen and (max-width: 900px){
    .w-i{
      width: 80vw;
    }
    .inte{
      padding: 0 13px;
    }
  }
</style>
