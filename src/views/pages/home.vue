<template>
    <!-- <div class="menuContainer">
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
    </div>      -->
    <div>
        <p>This is HOME</p>
    </div>
</template>
  
  <script>
  import { 
    IonContent, IonHeader, IonPage,
  } from '@ionic/vue';
  // import { ref } from 'vue'
  // import { useStore } from 'vuex'
  import menu from '../auxiliaire/menu.vue';
  import welcome from '../auxiliaire/welcome.vue'
  import showPic from '../operations/show-pic.vue'
  import openPic from '../operations/open-pic.vue'
  import summary from '../auxiliaire/summary.vue';
  import myOffer from '../auxiliaire/my-offer.vue';
  import copyright from '../auxiliaire/copyright.vue'
  // import portFolio from '../auxiliaire/port-folio.vue';
  export default{
    components: {
      IonContent, IonHeader, IonPage,
      'me-nu': menu,
      'wel-come': welcome,
      'show-pic': showPic,
      'open-pic': openPic,
      'summ-ary': summary,
      'my-offer': myOffer,
    //   'copy-right': copyright,
      // 'port-folio': portFolio
    },
    setup(){
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
      }
    }
  }
  </script>