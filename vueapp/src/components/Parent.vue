<template>
  <div class="hello">
    Store value = 
    <button v-on:click="increment">increment</button>
    {{ counter }}
    <button v-on:click="decrement">decrement</button>
<br/>
<br/>
        <h1>{{ msg }}</h1>
        <button v-on:click="countInc">Increment</button>
        {{ count }}
        <Child :count="count" @countDec="countDec"></Child>
  </div>
</template>

<script>
import Child from './Child.vue';
import { mapGetters, mapActions } from 'vuex'; 

export default {
  name: 'Parent',
  components:{
    Child
  },
  props:{
    // passed data from parent component
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App Parent Component',
      count:0
    }
  },
  methods: {
    ...mapActions(['increment','decrement']),
    countInc(){
       this.count++; 
    },
    countDec(val){
      this.count = val; // get child value to parent compoent 
    }
  },
  computed:{
    ...mapGetters(['counter'])
    // call when any element updated 
  },
  beforeCreate(){
    // call methods before init component
  },
  created(){
    //call methods after all props are getting
  },
  beforeMount(){
    // before html load on DOM
  },
  mounted(){
    // after html load in DOM
  },
  beforeUpdate(){
    // it call before when any element start update 
  },
  updated(){
    // it call after update element load in DOM 
  },
  beforeDestroy(){
    // when any component start to destroy eq: when your click on another component then current component start to destroy 
  },
  destroyed(){
    // after destroy current component 
  },
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
