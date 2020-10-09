<template>
  <div>
   <Navbar/>
   <hr/>
   <div class ="page-container">
    <Inicio/>
    <hrComponent name="Blog"/>
    <Blog/>
    <hrComponent name="Cursos"/>
    <Cursos/>
    <hrComponent name="Podcasts"/>
    <Podcasts/>
    <hrComponent name="@namah.concept"/>
    <NamahConcept/>
   </div>
   <Footer/>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'

import hrComponent from './components/Global/hrComponent.vue'
import Inicio from './components/Inicio.vue'
import Blog from './components/Blog.vue'
import Cursos from './components/Cursos.vue'
import Podcasts from './components/Podcasts.vue'
import NamahConcept from './components/NamahConcept.vue'

import Footer from './components/Footer.vue'

export default {
  name: 'App', 

  components: {
    Navbar,
    hrComponent,
    Inicio,
    Blog,
    Cursos,
    Podcasts,
    NamahConcept,
    Footer
  }
  
}
</script>

<style>

html, body {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden; 
  font-family: Arial, Helvetica, sans-serif;
}

.page-container {
  width: 70%;
  margin: 0 auto;
}

@media(max-width: 767px){
  .page-container {
    width: 90%
  }
}


</style>
