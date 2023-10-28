<template>
  <email-form v-model.check="emailValue"/>
</template>

<script>
import EmailForm from './components/EmailForm.vue'

export default {
  name: 'App',
  components: {
    EmailForm
  },
  data(){
    return {
      emailValue: null,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
