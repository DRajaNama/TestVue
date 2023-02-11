<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="/parent"
        >
         Parent Component
        </a>
      </li>
      
    </ul>
   
    <br/>
    <br/>
    <select name="country" v-model="country">
      <option v-for="country in countryList">{{ country.country_name }}</option>
    </select>
</br>
   {{ getSelectedCountry  }}  
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      countryList:[],
      country:""
    }
  },
  props:[
    // passed data from parent component
  ],
  beforeCreate(){
    // call methods before init component
  },
  created(){
    this.getCountryList(); 
    console.log('this.store',this.$store.state.counter)
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
    this.country = ""; 
    this.countryList = []; 
  },
  computed:{
    // call when any element updated 
    getSelectedCountry(){
      return " computed method = "+this.country; 
    }
  },
  methods:{
   
    getCountryList(){
      let headers = {
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJhc2tAdW5pdmVyc2FsLXR1dG9yaWFsLmNvbSIsImFwaV90b2tlbiI6IlQ2VlBOUmZXbkxFbmdsMHd2djctZ1d2Y09KRHFPSkptc3ZoNkNOdGo5a3p1Z1RSYkhvdXVET1NXeTdzYmJzdG5taDAifSwiZXhwIjoxNjc2MDI3MDA2fQ.BbuURo1yfxeuWVwLJFYz1Vh6Ki9nGsnsfaBEYpzkUHM`
      }
      this.$axios.get('https://www.universal-tutorial.com/api/countries/',{headers:headers}).then(res=>{
        if(res.data && res.data.length > 0){
          this.countryList = res.data; 
        }
      })
    }
  },
  watch:{
    country(val){
      console.log('watch country =>',val)
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
