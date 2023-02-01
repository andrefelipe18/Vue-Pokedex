<template>
  <div class="container">
    <div class="row mt-2">
      
      <!-- início lado esquerdo -->
      <div class="col mb-2">
        <div class="card palco">
          <div class="card-header"></div>

          <div class="card-body bg-pokebola bg-normal">
            <div class="pokemon">
              <transition
               enter-active-class="animate__animated animate__bounceIn"
               leave-active-class="animate__animated animate__bounceOut"
                @after-enter="exibirEvolucoes = true"
                @before-leave="exibirEvolucoes = false"
              >
                <img :src="require(`@/assets/imgs/pokemons/${pokemon.imagem}`)" v-if="exibir">
              </transition>

              <div class="evolucoes">
                <transition name="fade" v-for="e in pokemon.evolucoes" :key="e">
                  <img 
                    :src="require(`@/assets/imgs/pokemons/${e.toString().padStart(3, '0')}.png`)" 
                    v-if="exibirEvolucoes"
                  >
                </transition>
              </div>
            </div>
          </div>

          <div class="card-footer">
         
          <nav class="nav nav-pills nav-fill">
            <!-- menu de navegação -->
          </nav>

          <div class="detalhes">
            <!-- exibe dados de acordo com o menu de navegação -->
            <nav class="nav nav-pills nav-fill">
              <!-- Vue Link para o sobre -->
              <router-link 
              class="nav-item nav-link text-white" 
              :to="{path: '/sobre'}" 
              exact-active-class="active">
              Sobre
            </router-link>
              <!-- Vue link Status -->
              <router-link 
              class="nav-item nav-link text-white" 
              :to="{path: '/status'}" 
              exact-active-class="active">
              Status
            </router-link>
            <!-- Vue link habilidades -->
              <router-link 
              class="nav-item nav-link text-white" 
              :to="{path: '/habilidades'}" 
              exact-active-class="active">
              Habilidades
            </router-link>
            </nav>
            <!-- MÉTODO CORRETO PARA TRANSIÇÃO-->
            <router-view v-slot="{ Component }" :pokemon="pokemon">
            <transition
              enter-active-class="animate__animated animate__zoomInDown"
            >
              <div>
                <component :is="Component" />
              </div>
            </transition>
          </router-view>

          </div>

          </div>
        </div>
      </div>
      <!-- fim lado esquerdo -->

      <!-- início lado direito -->
      <div class="col mb-2 pokedex">        
        <div class="row">
          <div class="col">
            <h1>Pokédex</h1>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <select class="form-select">
              <option>Id crescente</option>
              <option>Id decrescrente</option>
              <option>De A - Z</option>
            </select>
          </div>
        
          <div class="col">
            <input type="text" class="form-control" placeholder="Pesquisar pokémon">
          </div>
        </div>

        <div class="row">
          <div class="pokedex-catalogo">

            <!-- início listagem dinâmica -->
            <div 
              v-for="p in pokemons" 
              :key="p.id"
              :class="`cartao-pokemon bg-${p.tipo}`" 
              @click="analisarPokemon(p)"
            >
              <h1>{{ p.id }} {{ p.nome }}</h1>
              <span>{{ p.tipo }}</span>
              <div class="cartao-pokemon-img">
                <transition
                appear
                enter-active-class="animate__animated animate__zoomInDown"
                >
                <img :src="require(`@/assets/imgs/pokemons/${p.imagem}`)">
               </transition>
              </div>
            </div>
            <!-- fim listagem dinâmica -->

          </div>
        </div>
      </div>
      <!-- fim lado direito -->

    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HomeView',
  data: () => ({
    exibir: false,
    exibirEvolucoes: false,
    pokemon: {},
    pokemons: []
  }),
  methods: {
    analisarPokemon(p) {
      //se o pokémon atua é diferente do pokémon clicado
      //se o atributo exibir é true
      if((this.pokemon.id != p.id) && this.exibir) {

        setTimeout(() => {
          this.analisarPokemon(p)
        }, 1000)
      }
      this.pokemon = p
      this.exibir = !this.exibir
      this.exibirEvolucoes = !this.exibirEvolucoes

      if(this.exibir == false){
        this.pokemon = {}
      }

    },

  },
  created(){
    let url = 'http://localhost:3000/pokemons'
    axios.get(url)
    .then(res => {
      this.pokemons = res.data
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style>
body {
  background-color: #dee3eb;
}
</style>

<style scoped>

@import '~@/assets/css/animacoes.css';
@import '~@/assets/css/style.css';
</style>
