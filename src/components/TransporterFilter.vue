<template>
  <div class="container mx-auto px-2 md:px-24"> 
    <input 
      @input="emitSearchFilter" 
      type="text" 
      placeholder="Search..." 
      class="w-full h-16 border-b-2 border-grey mb-8 pl-4 bg-gray-50 outline-none text-2xl"
    >

    

    <div class="grid lg:grid-cols-2 gap-4 mb-10">    
      <div class="flex justify-center items-center">
        <div class="font-medium text-xl mr-4">
          Display :
        </div>

        <input v-model="displayFilter.vehicles" @change="emitDisplayFilter" type="checkbox" id="vehicle" name="vehicle" class="align-middle">
        <label for="vehicle" class="font-medium text-xl ml-2 mr-6">vehicle</label>

        <input v-model="displayFilter.starships" @change="emitDisplayFilter" type="checkbox" id="starship" name="starship" class="align-middle">
        <label for="starship" class="font-medium text-xl ml-2 mr-6">starship</label>
      </div>

      <div class="flex justify-center items-center">

         <div class="font-medium text-xl mr-4">
          Sort by :
         </div>

        <input v-model="sortFilter" @change="emitSortFilter" type="radio" id="name" value="name">
        <label for="name" class="font-medium text-xl ml-2 mr-6">name</label>

        <input v-model="sortFilter" @change="emitSortFilter" type="radio" id="credit" value="credits">
        <label for="credit" class="font-medium text-xl ml-2 mr-6">credits</label>

        <input v-model="sortFilter" @change="emitSortFilter" type="radio" id="creation-date" value="creationDate">
        <label for="creation-date" class="font-medium text-xl ml-2 mr-6">creation date</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayFilter: {
        vehicles: true,
        starships: true,
      },
      sortFilter: 'name'
    }
  },
  methods: {
    emitSearchFilter(value) {
      this.$emit('searchFilter', value.target.value)
    },

    emitDisplayFilter() {
      this.$emit('displayFilter', this.displayFilter)
    },

    emitSortFilter() {
      this.$emit('sortFilter', this.sortFilter)
    }
  }
}
</script>