<template>
  <div id="app">

    <barra-navegacion></barra-navegacion>
    <top-baner></top-baner>
    <div  class="container-fluid ">
      <div class="row justify-content-center mb-5 h-100" >
        <div class="col mt-5" v-for="(item,index) of team" :key="index" >
          <team-card id="equipo" :member="item"></team-card>
        </div>
      </div>
    </div>
 
  </div>
</template>

<script>
import TeamCard from './components/TeamCard.vue'

import BarraNavegacion from './components/BarraNavegacion.vue'
import TopBaner from './components/TopBaner.vue'

export default {
  name: 'App',
  components:{
    
    TeamCard,
    BarraNavegacion,
    TopBaner,
  } ,
  data(){
    return{
      team:[
            {   codigo: 1,
                nombre: 'Diego Mauricio Sanchez',
                descripcion: 'Ingeniero de sistemas de la Universidad Distrital, de 41 años de edad. Aficionado al ajedrez y a los RPG. Papá de Juandi y de dos gatos.',
                rol:'Scrum Master',
                image: require('@/assets/foto_4.jpg') 
            },
            {   codigo: 2,
                nombre: 'Juan David Avalos',
                descripcion: 'Ingeniero de Petróleos de 29 años de edad. Reparte su afición entre el fútbol y los videojuegos. Felizmente casado.',
                rol:'Development Team',
                image: require('@/assets/foto_1.jpg') 
            },
            {   codigo: 3,
                nombre: 'Jose Bernardo Perez',
                descripcion: 'Administrador de un taller de taxímetros, con 45 años de edad, su mayor afición es saber cómo funcionan las cosas, tiene una hija una gata y muchos peces.',
                rol:'Development Team',
                image: require('@/assets/foto_2.jpg') 
            },
            {   codigo: 4,
                nombre: 'Juan Pablo Bermúdez',
                descripcion: 'Economista de la Universidad Nacional. Me gusta  Radiohead, Steven Wilson y  el Techno. Suelo hacer ejercicio o trotar cuando el clima es favorable y a veces juego lol. Tengo dos gatos.',
                rol:'Development Team',
                image: require('@/assets/foto_3.jpg') 
            },
            {   codigo: 5,
                nombre: 'Joan Esneider Duque',
                descripcion: 'Estudiante de Ingeniería Mecánica de la Universidad de Antioquia actualmente en noveno semestre, el poco tiempo libre que me queda lo comparto con mi hija.',
                rol:'Development Team',
                image: require('@/assets/foto_5.jpg') 
            },
        ]
    }    
  }

}
</script>

