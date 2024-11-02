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
