<template>
<div class="container" id="admin">
  <div class="alert alert-danger" v-if="error">{{ error }}</div>
    <b-table  striped hover :items="value"></b-table>
  </div>
    
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return{
          questionfields:{},
             value:[],
             error:''
        }
    },

   async mounted() {
     const token = JSON.parse(localStorage.getItem('currentUser')).access_token
        try {
          const response = await axios.get('https://quizzer-api.herokuapp.com/questions', { 
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
         const ans = JSON.parse(localStorage.getItem('answers'))[0]
         console.log(ans)
        this.value = response.data.map((question) => {
          let data = {};
          data.Subject = question.courseId;
          data.Question = question.description;
          data.Options = question.options.map(opt => opt.text);
          //data.Answer = question.courseId;
          return data;
        })

        } catch (error) {
          this.error = 'Something Went Wrong :('
        }
    },  
}
</script>

<style scoped>
#admin{
width: 500px;
  margin: auto;
}

</style>