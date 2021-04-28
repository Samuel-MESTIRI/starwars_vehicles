<template>
  <div id="app" class="bg-gray-50">
     <h1 class="text-center text-3xl font-bold mb-12 p-8">StarWars Vehicles and Starships</h1>

     <TransporterFilter @searchFilter="setSearchFilter" @displayFilter="setDisplayFilter" @sortFilter="setSortFilter" />

    <TransporterList :searchFilter="searchFilter" :displayFilter="displayFilter" :sortFilter="sortFilter" />
  </div>
</template>

<script>
import TransporterList from './components/TransporterList.vue'
import TransporterFilter from './components/TransporterFilter.vue'

export default {
  name: 'App',
  components: {
    TransporterList,
    TransporterFilter
  },
  data() {
    return {
      searchFilter: '',
      displayFilter: {
        vehicles: true,
        starships: true,
      },
      sortFilter: 'name'
    }
  },
  methods: {
    setSearchFilter(value) {
      this.searchFilter = value
    },

    setDisplayFilter(value) {
      this.displayFilter = value
    },

    setSortFilter(value) {
      this.sortFilter = value
    }
  }
}
</script>

<style>
body {
  background-color: rgb(249, 250, 251)
}
</style>