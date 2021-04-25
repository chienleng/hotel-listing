<template>
  <select v-model="selectedOrder">
    <option
      v-for="(o, index) in selections"
      :key="index"
      :value="o.value"
    >
      {{ o.label}}
    </option>
  </select>
</template>

<script>
import { orderBySelections, PRICE_HIGH_LOW, PRICE_LOW_HIGH } from '../enums/order-by'

export default {
  props: {
    selected: {
      validator(val) {
        return [PRICE_HIGH_LOW, PRICE_LOW_HIGH].indexOf(val) !== -1
      }
    }
  },

  computed: {
    selectedOrder: {
      get() {
        return this.selected
      },
      set(val) {
        this.$emit('order-change', val)
      }
    }
  },

  created() {
    this.selections = orderBySelections
  }
}
</script>
