<template>
  <div class="ebook">
  <img :src="link" height="100px"><br>
  <button @click="btn1()"><</button>
  <button @click="btn2()">></button>
  </div>
</template>
<script>
/*eslint-disable */
export default {
  name: 'ebook',
  data () {
    return {
      link: 'http://bill.sellsuki.com/cartoon/1.jpg',
      count: 1
    }
  },
  methods: {
    btn1 () {
      if (this.count > 0) {
        this.link = 'http://bill.sellsuki.com/cartoon/'+this.count+'.jpg'
        this.count--
        console.log(this.count)
      }else{
        alert ('nooooo')
      }
     
    },
    btn2 () {
      this.link = 'http://bill.sellsuki.com/cartoon/'+this.count+'.jpg'
      this.count++
    }
  }
}
</script>