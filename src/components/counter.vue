<template>
  <div class="counter">
  <h1>{{count}}</h1>
  <button @click="move()">-</button>
  <button @click="add()">+</button>
  </div>
</template>
<script>
/*eslint-disable */
export default {
  name: 'counter',
  data () {
    return {
      count: 0
    }
  },
  methods: {
    add () {
      this.count++
    },
    move () {
      this.count--
      if(this.count < 0 ){
        alert ('Nooooooooooooo')
      }
    }
  }
}
</script>