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
            <div id="e" class="menuContainer">
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
          <port-folio></port-folio>
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
  
  <script>
  import { 
    IonContent, IonHeader, IonPage,
  } from '@ionic/vue';
  import { 
    defineAsyncComponent, 
    ref,
    onBeforeUpdate } from 'vue'
  import menu from '../auxiliaire/menu.vue';
  import home from '../pages/home.vue';
  import welcome from '../auxiliaire/welcome.vue'
  import showPic from '../operations/show-pic.vue'
  import openPic from '../operations/open-pic.vue'
  import summary from '../auxiliaire/summary.vue';
  import myOffer from '../auxiliaire/my-offer.vue';
  import copyright from '../auxiliaire/copyright.vue'

  const Porto = defineAsyncComponent(()=>import('../auxiliaire/port-folio.vue'))
  const Interests = defineAsyncComponent(()=>import('../auxiliaire/inter-est.vue'))
  const Info = defineAsyncComponent(()=>import('../auxiliaire/info.vue'))
  export default{
    components: {
      IonContent, IonHeader, IonPage,
      'me-nu': menu,
      'hom-e' : home,
      'wel-come': welcome,
      'show-pic': showPic,
      'open-pic': openPic,
      'summ-ary': summary,
      'my-offer': myOffer,
      'copy-right': copyright,
      'port-folio': Porto,
      'intere-st': Interests,
      'in-fo': Info,
    },
    setup(){
      const actual = ref(1)
      const title = ref('Welcome to the official Website of jove.')

      const actualMenu = (value)=>{
        //Setting title dynamically
        if(value){
          actual.value = Number(value)
          if(actual.value==1){
          title.value='Welcome to the Official Website of Thierry.'
        } else if(actual.value==2){
          title.value="You are seeing my achievements"
        } else if(actual.value==3){
          title.value='You are supposed to see my interests '
        }
      }
      }

      onBeforeUpdate(()=>{
        actualMenu()
        console.log("The actual Value is : ", actual.value)
        
      })
      return {
        title,
        actual,
        actualMenu,
      }
    }
  }
  </script>
  
