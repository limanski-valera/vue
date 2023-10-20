<template>
  <cards-list :cards-list="cardsList"/>
</template>

<script>

import CardsList from './components/CardsList.vue';
import { raspberryList } from '@/constants/2_data_raspberry'

export default {
    name: 'App',
    components: {
      CardsList,
    },
    data() {
      return {
        cardsList: raspberryList,
      }
    },
}
</script>

<style>
body {
  background-color: #343434;
  color: #eeeeee;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
