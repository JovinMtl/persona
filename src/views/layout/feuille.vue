<template>
    <ion-page>
      <ion-content>
        
        <!-- <div>
            <wel-come :title="title"></wel-come>
        </div> -->
        <div  class="centered welcomeText" style="font-size: 1.2rem;">
              <!-- <p>Bienvenue sur la Page officielle de Muteule.</p> -->
              <!-- <p>Welcome to the Official Website of Thierry.</p> -->
              <p>{{ title }}</p>
      </div>
        <!-- <div class="menuContainer">
            <show-pic></show-pic>
        </div> -->
        <div class="menuContainer menuSticky">
            <me-nu @initial="actualMenu"></me-nu>
        </div>
        <div v-if="actual==1">
            <div class="menuContainer">
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
  // import { useStore } from 'vuex'
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
    },
    setup(){
      const actual = ref(1)
      const title = ref('Welcome to the official Website of jove.')

      const actualMenu = (value)=>{
        if(value){
          actual.value = Number(value)
          // console.log("The actual Menu is: ", actual.value)
          if(actual.value==1){
          title.value='Welcome to the Official Website of Thierry.'
          // console.log("Setting title to A")
        } else if(actual.value==2){
          title.value="You are seeing my achievements"
          // console.log("Setting title to B")
        }
        }
      }

      onBeforeUpdate(()=>{
        actualMenu()
        console.log("The actual Value is : ", actual.value)
        
      })
      // const store = useStore()
      // const viewportWidth = ref(window.innerWidth);
      // const updateViewportWidth = () => {
      //   viewportWidth.value = window.innerWidth;
      // };
      // onMounted(() => {
      //   window.addEventListener('resize', updateViewportWidth);
      // });
      return {
        // viewportWidth,
        title,
        actual,
        actualMenu,
      }
    }
  }
  </script>
  
