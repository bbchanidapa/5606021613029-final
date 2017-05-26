<template>
  <div class="discount">
      <h3>{{show}}</h3><br>
      <h3>{{input}}</h3><br>
  	  <!-- <input v-model="number"><br> -->
	  <button @click="btn(5)">5%</button>
	  <button @click="btn(10)">10%</button>
	  <button @click="btn(15)">15%</button><br>
	  <button @click="btn(20)">20%</button>
	  <button @click="btn(30)">30%</button>
	  <button @click="btn(40)">40%</button><br><br>

    <button class="btn" @click="post(7)">7</button>
    <button class="btn" @click="post(8)">8</button>
    <button class="btn" @click="post(9)">9</button><br>

    <button class="btn" @click="post(6)">6</button>
    <button class="btn" @click="post(5)">5</button>
    <button class="btn" @click="post(4)">4</button><br>

    <button class="btn" @click="post(3)">3</button>
    <button class="btn" @click="post(2)">2</button>
    <button class="btn" @click="post(1)">1</button><br>

    <button class="btn" @click="clear()">C</button>
    <button class="btn" @click="post(0)">0</button>
    <button class="btn" @click="sum()"><</button><br>

  </div>
</template>
<script>
/*eslint-disable */
export default {
  name: 'discount',
  data () {
    return {
      number: 0,
      show: 0,
      input: ''
    }
  },
  methods: {
  	btn (per) {
  		console.log(per)
  		let price = 0
  		price = (this.number * per )/100
  		this.show = this.number - price

  	},
     post (res) {
      if(typeof res == 'number'){        
        this.input+= res
        if (this.number2 == '') {
            this.number2 = this.number
            this.input = ''
            console.log(this.number2)     
        }  
      }
      if(typeof res == 'string'){ 
          this.oper = res
          this.number1 = this.input
          this.input = ''
          console.log('number1',this.number1,'oper',this.oper)
      }     
    }
  }
}
</script>
<style scoped>
  button {
    width: 50px;
    height: 50px;
   /* border: 1px solid black;*/
  }
</style>