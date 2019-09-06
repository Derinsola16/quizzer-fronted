<template>
<div class="container">
  <!-- 
    get courseId
    post quiz and record score
    get all question


 -->

    <h4>Welcome to your {{$route.params.id}} quiz</h4>

    <ol  >
     <li> <label for="one" >{{questionId}}</label> </li>
      <b-form-radio v-for="(i, n) in 4" :key="n" v-model="selected" value="Many">{{options.text}}</b-form-radio>
      <!-- <b-form-radio v-model="selected" name="fifth"  value="None"> None</b-form-radio>
      <b-form-radio v-model="selected" name="fifth"  value="Two">Two</b-form-radio>
      <b-form-radio v-model="selected" name="fifth"  value="One"> One</b-form-radio> -->
    </ol>

    <router-link :to="`/exam/${$route.params.id}/success`">
    <b-button round class="btn btn-success">Submit</b-button>
    </router-link>
 
 
</div>    
</template>

<script>
export default {
    data(){
        return{
            selected:[],
            questionId: '',
            options:[]
        }
    },

    // methods: {
    //     async submit(){
    //        try {
    //          await axios({method: 'post', url: 'https://quizzer-api.herokuapp.com/quizzes', data: this.question});
    //     } catch (error) {
    //         this.error = 'Something went Wrong'
    //     }
    //     }
    // },

      async mounted(){
        // Get all question
        try {
        const resp = await axios.get('https://quizzer-api.herokuapp.com/questions')
        this.question = resp.data
        } catch (error) {
        this.error = ''
      }
      }

}
</script>

<style scoped>

</style>