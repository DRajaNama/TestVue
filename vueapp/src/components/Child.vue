<template>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <span style="color:red;">Parent Count : {{ count }}</span>
      <button v-on:click="countDec">Decrement</button>

<br/>
      Store value =  {{ counter }}
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex'; 
  export default {
    name: 'Child',
    props:[
    "count" // getting parent value for child component
    ],
    data () {
      return {
        msg: 'Welcome to Your Vue.js App Child Component'
      }
    },
    computed:{
      ...mapGetters(['counter'])
    },
    methods:{
      countDec(){
        this.count--;
        this.$emit('countDec',this.count);
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  