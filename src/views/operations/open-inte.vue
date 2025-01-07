<template>
  <div class="f-l d inte-m">
    <span id="inte-ctn">
    <div class="f-l w-40 he"></div>
    <div class="f-l w-40 inte">
      <span v-if="inteContent.detail"> 
        <span v-html="inteContent.detail"></span>
      </span>
      <span v-else> 
        Thank you for taking care of my interests. I am delving deeper on this topic, so stay tuned.
      </span>
    </div>
    <div class="f-l w-40 cl">
      <div class="btn sp" id='1' v-if="inteContent.notice" @click="signalEnd">
        No
      </div>
      <div class="btn" id='2' @click="signalEnd">
        Ok
      </div>
    </div>
  </span>
  </div>
</template>
<script setup lang="ts">
  import { inject, onMounted } from 'vue'
  
  const emit =  defineEmits(['endSignal', 'endSignalF'])
  const props = defineProps(['mP']) //for mouse position
  const inteContent = inject('interestShow')

  const openCtn = (x, y)=>{
    let inteContn = document.getElementById('inte-ctn')
    inteContn.animate([
      {  
        position: 'fixed',
        top: (y-100)+'px', left: (x-200) + 'px',
        scale: '.2',
      },
      {
        scale: '.4', 
      },
      ],
      {
        // timing options
        duration: 120,
        iterations: 1,
      }
    )
  }
  
  setTimeout(()=>{
    openCtn(props.mP.mX, props.mP.mY)
  }, 0)
  
  const signalEnd = (e)=>{
    let index = e.target.id;
    let inteContn = document.getElementById('inte-ctn')
    inteContn.setAttribute('id', 'inte-cl')
    setTimeout(()=>{
      if (index == 1){
          emit('endSignal', 1)
      } else if (index == 2){
          emit('endSignal', 2)
        }
      }, 150)
    }
</script>
<style scoped>
  .he{
    height: 30px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    background-color: white;
    background-color: white;
    margin-bottom: -15px;
  }
  .f-l{
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  .w-40{ /* the width of the popup */
    width: 40vw;
  }
  .inte-m{
    width: 100vw;
    height: 100vh;
    background-color: rgba(148, 145, 145, 0.507);
    color: black;
    position: absolute;
  }
 
  #inte-cl{
    animation-name: inteCl;
    animation-iteration-count: 1;
    animation-timing-function: ease-out;
    animation-duration: 300ms;
    animation-fill-mode: forwards;
  }
  .inte{
    box-sizing: border-box;
    height: 170px;
    background-color: white;
    padding: 0 20px;
    overflow: auto;
    line-height: 1.3;
    text-align: center;
    font-family: 'Rubik';
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
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
  .c-p{
    cursor: pointer;
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
    font-size: 1.5rem;
  }
  :deep(.intr){
    font-style: italic;
    color: grey;
    font-size: 0.8rem;
    margin-top: -1.4rem;
  }
  :deep(.c2::marker){
    color: #ff5500;
  }
  :deep(.c3::marker){
    color: #0f2;
  }
  :deep(.tl){
    color: red;
    font-size: 0.8rem;
    margin: -2rem 0;
    padding: 0 0.4rem;
    border-bottom: 1px solid black;
    font-weight: bold;
  }
:deep(.tl-1){
  font-family: 'Rubik';
}
:deep(.fm){
    color: #b35313;
    font-weight: bold;
    font-size: .9rem;
    font-family: 'Sen';
}
  @media screen and (max-width: 900px){
    .w-40{
      width: 80vw;
    }
    .inte{
      padding: 0 13px;
    }
    :deep(.tl-1){
      font-size:.9rem;
      font-weight: 100;
    }
  }

@keyframes inteCl {
    from{
        scale: 1;
    }
    to{
        scale: .2;
    }
}
</style>
