<template>
  <div class="rating">
    <img
      v-for="(val, index) in valArr"
      :key="index"
      :src="getImgSrc(val)"
      :class="`rating-${type} rating-${getFileValue(val)}`"
      class="rating-img" />
  </div>
</template>

<script>
import { types } from '../../enums/rating'

const fileValues = {
  0: 'empty',
  0.5: 'half',
  1: 'fill'
}

export default {
  props: {
    type: {
      validator(value) {
        return types.indexOf(value) !== -1
      }
    },
    value: {
      validator(value) {
        return value >= 0 && value <= 5
      }
    }
  },
  
  computed: {
    valArr() {
      const arr = [0, 0, 0, 0, 0]
      let index = 0
      for (let x = this.value; x > 0; x -= 1) {
        if (x >= 1) {
          arr[index] = 1
        } else {
          arr[index] = 0.5
        }
        index++
      }
      return arr
    }
  },

  created() {
    this.folder = '/images/ratings'
  },

  methods: {
    getFileValue(val) {
      return fileValues[val]
    },
    getImgSrc(val) {
      return `${this.folder}/${this.type}-${this.getFileValue(val)}.svg`
    }
  }
}
</script>

<style scoped>
.rating {
  display: flex;
  align-items: flex-end;
}
.rating-img {
  width: 20px;
}
.rating-self {
  width: 15px;
  margin-right: 3px;
}
.rating-half.rating-star {
  position: relative;
  top: 1px;
}
</style>
