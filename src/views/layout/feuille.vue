<template>
    <ion-page>
      <ion-content>
        
        <div>
            <wel-come></wel-come>
        </div>
        <!-- <div class="menuContainer">
            <show-pic></show-pic>
        </div> -->
        <div class="menuContainer menuSticky">
            <me-nu></me-nu>
        </div>
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
        <div>
          <copy-right></copy-right>
        </div>
        
        
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { 
    IonContent, IonHeader, IonPage,
  } from '@ionic/vue';
  import menu from '../auxiliaire/menu.vue';
  import welcome from '../auxiliaire/welcome.vue'
  import showPic from '../operations/show-pic.vue'
  import openPic from '../operations/open-pic.vue'
  import summary from '../auxiliaire/summary.vue';
  import myOffer from '../auxiliaire/my-offer.vue';
  import copyright from '../auxiliaire/copyright.vue'
  export default{
    components: {
      IonContent, IonHeader, IonPage,
      'me-nu': menu,
      'wel-come': welcome,
      'show-pic': showPic,
      'open-pic': openPic,
      'summ-ary': summary,
      'my-offer': myOffer,
      'copy-right': copyright,
    },
    setup(){
      return {}
    }
  }
  </script>
  
  <style scoped>
  #container {
    text-align: center;
    
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  
  #container strong {
    font-size: 20px;
    line-height: 26px;
  }
  
  #container p {
    font-size: 16px;
    line-height: 22px;
    
    color: #8c8c8c;
    
    margin: 0;
  }
  
  #container a {
    text-decoration: none;
  }
  </style>
  