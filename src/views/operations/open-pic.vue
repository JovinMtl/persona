<template>
    <div class="openImage t-a">
        <img src="/personaFoto/jove_-18_.png" class="im"></img>
        <blockquote class="quote c">
            <span class="bq-1 v-a m-50 l-h c d-i">“</span>
            <span class="d-i">Before downloading one file, please delete two.</span>
            <span class="bq-2 v-a m-50 l-h c d-i">”</span>
            <span id="jo-name" class="author">— Th. Jov. Nsanzumukiza</span>
        </blockquote>            
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
// targetting the name of the author
onMounted(()=>{
  const joName = document.getElementById("jo-name")

  const observerName = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      entry.target.classList.toggle('bg-green', entry.isIntersecting)
    })
  },{
    rootMargin: '-180px -80px -80px -80px',
  })
  observerName.observe(joName)

})
</script>
