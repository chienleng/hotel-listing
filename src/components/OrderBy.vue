<template>
  <div class="order-by">
    <label for="list-order">Sort by</label>
    <select name="list-order" v-model="selectedOrder">
      <option
        v-for="(o, index) in selections"
        :key="index"
        :value="o.value"
      >
        {{ o.label}}
      </option>
    </select>
  </div>
  
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

<style scoped>
label {
  margin-right: 5px;
  font-size: 0.9em;
  font-weight: 600;
}
</style>
