<template>
  <notebooks-list :notebooks-data="notebooksData"/>
</template>

<script>

import {notebooksList as notebooksListData} from '@/constants/3_data_notebooks'
import NotebooksList from '@/components/NotebooksList.vue'

export default {
  name: 'App',
  components: {
    NotebooksList,
  },
  data() {
    return {
      notebooksData: notebooksListData,
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  color: inherit;
  text-decoration: none;
}
</style>
