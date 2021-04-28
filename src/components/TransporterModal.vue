<template>
  <modal :name="name" :adaptive="true" :height="modalHeight">
    <div class="container mx-auto p-8">
      <button @click="$modal.hide(name)" class="absolute top-0 right-0 pr-4 pt-4 text-red-600 focus:outline-none">
        close
      </button>

      <h2 class="font-medium text-xl text-center mb-8">{{ transporter.name }} </h2>

      <div class="grid grid-cols-2 gap-4 flex items-center">
        <div v-for="(transporterDetail, i) in transporterDetails" :key="i">
          <span class="font-medium">{{ transporterDetail.label }} : </span>

          {{ transporter[transporterDetail.key] }}
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    transporter: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      transporterDetails: [
        { label: 'Model', key: 'model' },
        { label: 'Manufacturer', key: 'manufacturer' },
        { label: 'Credits', key: 'cost_in_credits' },
        { label: 'Length', key: 'length' },
        { label: 'Maximum atmosphering speed', key: 'max_atmosphering_speed' },
        { label: 'Crew', key: 'crew' },
        { label: 'Cargo capacity', key: 'cargo_capacity' },
        { label: 'Consumables', key: 'consumables' }
      ]
    }
  },
  computed: {
    modalHeight() {
      return window.innerWidth > 768 ? '50%' : '100%'
    }
  }
}
</script>