<template>
    <ion-page>
      <ion-content>
        <div class="centered welcomeText">
            <p>Bienvenue sur la Page officielle de Muteule.</p>
        </div>
        <div class="menuContainer">
            <me-nu></me-nu>
        </div>
        
        
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { 
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar 
  } from '@ionic/vue';
  import menu from '../auxiliaire/menu.vue';
  export default{
    components: {
      IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
      'me-nu': menu
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
  