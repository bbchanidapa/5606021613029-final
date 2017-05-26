<template>
  <div class="hello">
   <div class="container">
   
   <div class="columns is-multiline">

            <div v-for="(index,i) in show">
              {{i+1}}). วิชา: {{index['subject']}} 
              เกรด: {{index['grade']}} 
              หน่วยกิต : {{index['unit']}} 
            </div><br>
            <div class="column is-1">
            วิชา <input v-model="subject" placeholder="ชื่อวิชา">
           
            เกรด 
            <select v-model="grade"  value="4">
              <option value="4">4</option>
              <option value="3.5">3.5</option>
              <option value="3">3</option>
              <option value="2.5">2.5</option>
              <option value="2">2</option>
              <option value="1.5">1.5</option>
              <option value="1">1</option>
              <option value="0">0</option>
            </select>
            หน่วยกิต
            <select v-model="unit" value="0">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <a class="button is-info" @click="add()">+</a>
            </div>
           
            <div v-for="index in show">
            วิชา {{index['subject']}} : {{index['grade']}} * {{index['unit']}} = {{index['grade']*index['unit']}}
            </div>
           
           <div v-if="unitTotal > 0">เฉลี่ยรวม : {{unitTotal}}</div> 
          </div>


         </div> 
    </div>
</div>


<!--    <div class="hello">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-1">
          <input type="text" class="input" v-model="year" placeholder="ชั้นปีที่">
        </div>
        <div class="column is-1">
          <input type="text" class="input" v-model="term" placeholder="เทอมที่">
        </div>
        <div class="column">
          <input type="text" class="input" v-model="subject" placeholder="ชื่อวิชา">
        </div>
        <div class="column is-2">
          <input type="text" class="input" v-model="unit" placeholder="หน่วยกิต">
        </div>
        <div class="column is-2">
          <input type="text" class="input" v-model="grade" placeholder="เกรดที่ได้รับ">
        </div>
        <div class="column is-half is-offset-one-quarter">
          <input class="button is-success" value="Add" type="submit" @click="add()">
          <input class="button" value="Reset" type="reset">
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Term</th>
              <th>Subject</th>
              <th>Unit</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody v-for="todo in todos">
            <th>{{todo.text[0]}}</th>
            <th>{{todo.text[1]}}</th>
            <th>{{todo.text[2]}}</th>
            <th>{{todo.text[3]}}</th>
            <th>{{todo.text[4]}}</th>
          </tbody>
        </table>
        <div class="column">
          <button class="button is-outliner" @click="cal">Calculate</button>
        </div>
      </div>
    </div>
  </div> -->



</template>
<script>
/*eslint-disable */
export default {
  name: 'hello',
  data () {
    return {
      subject: '',
      unit: 0,
      grade: 0,
      input: 0,
      show: [],
      total: 0,
      start: true
    }
  },
  computed: {
      unitTotal (){
        let unittotal = 0
        let grade_ = 0
         for(let i in this.show){
          unittotal += Number(this.show[i]['unit'] )
          grade_ += (this.show[i]['grade'] * this.show[i]['unit'])
          console.log(grade_,unittotal)
         }
         return this.total = grade_ / unittotal
        // this.show[i]['grade'] + '*' + this.show[i]['unit']+ '=' +
      }
  },
  methods: {
    add () {
      return this.show.push({
        subject: this.subject , 
        grade: this.grade , 
        unit: this.unit})  

    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#display {
  height: 50px;
  border: 1px solid black;
}
h1, h2 {
  font-weight: normal;
}


a {
  color: #42b983;
}
/*button {
    width: 30px;
    height: 30px;
  }*/
</style>
