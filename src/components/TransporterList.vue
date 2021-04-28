<template>
  <div class="container mx-auto px-2 md:px-24">
    <ul v-if="filteredTransporters.length" class="text-xl">
      <li 
        v-for="(transporter, i) in filteredTransporters"
        :key="i"
        class="p-2 md:p-6 rounded-xl shadow-md bg-white space-x-4 mb-4 flex justify-between hover:bg-gray-200 cursor-pointer grid grid-cols-1 md:grid-cols-4 "
        @click="showModal(transporter)"
      >
        <div class="flex-auto text-center font-medium">{{ transporter.name }}</div>
        <div class="flex-auto text-center"> Crédits : {{ transporter.cost_in_credits }}</div>
        <div class="flex-auto text-center">{{ formattedDate(transporter.created) }}</div>
        <div class="flex-auto text-center">{{ transporter.vehicle_class ? 'Vehicle' : 'Starships' }}</div>
      </li>
    </ul>

    <div v-else class="text-center font-medium text-2xl text-gray-600">
      No Results found.
    </div>

    <TransporterModal name="transporterDetails" :transporter="transporterDetail" />  
  </div>
</template>

<script>
import TransporterModal from './TransporterModal'
import { mapState, mapActions  } from 'vuex'

export default {
  components: {
    TransporterModal
  },
  props: {
    searchFilter: {
      type: String,
      default: ''
    },
    displayFilter: {
      type: Object,
      default: () => {
        return {vehicles: true, starships: true}
      }
    },
    sortFilter: {
      type: String,
      default: 'name'
    }
  },

  data() {
    return {
      transporterDetail: {}
    }
  },

  computed: { 
    ...mapState([
      'vehicles',
      'starships'
    ]),
    filteredTransporters() {
      const searchFilter = this.searchFilter.toLowerCase()

      let transporters = []
      if (this.displayFilter.vehicles) transporters.push(...this.vehicles)
      if (this.displayFilter.starships) transporters.push(...this.starships)       

      if (this.sortFilter === 'credits') transporters.sort(this.compareCredits)
      else if (this.sortFilter === 'creationDate') transporters.sort(this.compareDate)
      else transporters.sort(this.compareName)
      

      if (searchFilter === '') return transporters

      return transporters.filter(transporter => {   
        return transporter.name.toLowerCase().includes(searchFilter) ||         // searchFilter by name           
        this.formattedDate(transporter.created).includes(searchFilter) ||       // searchFilter by date
        (transporter.vehicle_class && 'vehicles'.includes(searchFilter)) ||     // searchFilter by vehicles
      (transporter.starship_class && 'starships'.includes(searchFilter))        // searchFilter by starships
      })
    }
  },
  mounted() {    
    this.getVehicles()
    this.getStarships()
  },
  methods: {
    ...mapActions([
      'getVehicles',
      'getStarships'
    ]),

    formattedDate(unformattedDate) {
      const date = new Date(unformattedDate)
      return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    },

    compareCredits(a, b) {
      if (isNaN(parseInt(a.cost_in_credits))) return 1
      if (isNaN(parseInt(b.cost_in_credits))) return -1      

      return parseInt(b.cost_in_credits) - parseInt(a.cost_in_credits)
    },

    compareName(a, b) {
      if ( a.name < b.name ) return -1
      if ( a.name > b.name ) return 1
  
      return 0
    },

    compareDate(a, b) {
      return new Date(b.created) - new Date(a.created)
    },

    showModal(transporter) {
      this.transporterDetail = transporter
      this.$modal.show('transporterDetails')
    },

    hideModal() {
      this.$modal.hide('transporterDetails')
    }
  }
}
</script>