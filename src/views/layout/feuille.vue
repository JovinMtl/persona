<template>
    <ion-page>
      <ion-content>
        <div  class="centered welcomeText" style="font-size: 1.2rem;">
              <p>{{ title }}</p>
      </div>
        <div class="menuContainer menuSticky">
            <me-nu @initial="actualMenu"></me-nu>
        </div>
        <div v-if="actual==1">
          <div id="e" class="menuContainer" style="display: flex;justify-content: center;">
            <show-pic></show-pic>
          </div>
          <div class="centered">
              <open-pic></open-pic>
          </div>
          <div class="centered">
              <summ-ary></summ-ary>
          </div>
          <div class="centered">
              <my-offer></my-offer>
          </div> 
        </div>   
        <div v-if="actual==2" class="centered">
          <jove-loader v-if="val2"></jove-loader>
          <port-folio v-else></port-folio>
        </div>
        <div v-if="actual==3" class="centered">
          <intere-st></intere-st>
        </div>
        <div v-if="actual==4" class="centered">
          <in-fo></in-fo>
        </div>
        <copy-right></copy-right>
      </ion-content>
    </ion-page>
  </template>
  
<script setup lang="ts">
  import { 
    IonContent, IonHeader, IonPage,
  } from '@ionic/vue';
  import { 
    defineAsyncComponent, 
    ref, watch,
    onBeforeUpdate } from 'vue'
  
  import meNu  from '../auxiliaire/menu.vue';
  import showPic from '../operations/show-pic.vue'
  import openPic from '../operations/open-pic.vue'
  import summAry from '../auxiliaire/summary.vue';
  import myOffer from '../auxiliaire/my-offer.vue';
  import copyRight from '../auxiliaire/copyright.vue'
  import { MenuNumber } from '../auxiliaire/types'

  import JoveLoader from '../auxiliaire/jove-loader.vue'

  const PortFolio = defineAsyncComponent({
    loader:()=>import('../auxiliaire/port-folio.vue'),
    loadingComponent: JoveLoader,
    }, 2500)
  const IntereSt = defineAsyncComponent(()=>import('../auxiliaire/inter-est.vue'))
  
  const InFo = defineAsyncComponent({
    loader: ()=> import('../auxiliaire/info.vue'),
    loadingComponent: JoveLoader,
    })


  const val2 = ref(true)
  const actual:MenuNumber = ref(1)
  const title:string = ref('Welcome to the official Website of jove.')

  
  const actualMenu = (value:number)=>{
    //Setting title dynamically
    if(value){
      actual.value = Number(value)
      if(actual.value==1){
      title.value='Welcome to the Official Website of Thierry.'
    } else if(actual.value==2){
      title.value="You are seeing my achievements"
      setTimeout(()=>val2.value=false, 3000)
    } else if(actual.value==3){
      title.value='My interests are shared here'
    } else if(actual.value==4){
      title.value='Say Hello'
    }
  }
  }

  onBeforeUpdate(()=>{
    actualMenu()
    console.log("The actual Value is : ", actual.value)
})
</script>

