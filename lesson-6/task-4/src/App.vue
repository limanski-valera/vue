<template>
    <user-form v-model:age.check="user.age" v-model:name.check="user.name"/>
</template>

<script>
import UserForm from './components/UserForm.vue'

export default {
  name: 'App',
  components: {
    UserForm
  },
  data(){
    return {
      user: {
        name: null,
        age: null
      }
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
