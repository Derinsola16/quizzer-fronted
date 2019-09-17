<template>
<div class="container" id="admin">
  <div class="alert alert-danger" v-if="error">{{ error }}</div>  
       <b-table  striped hover :items="value" ></b-table>
  </div>
    
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return{
             value:[],
             error:''
        }
    },

   async mounted() {
     const token = JSON.parse(localStorage.getItem('currentUser')).access_token
        try {
          const questionResponse = await axios.get('https://quizzer-api.herokuapp.com/questions', { 
            headers: {
              Authorization: `Bearer ${token}`
            }
          })

          const courseResponse = await axios.get('https://quizzer-api.herokuapp.com/courses') 

        this.value = questionResponse.data.map((question) => {
          let questionData = {};
          let subject = courseResponse.data.filter(course => {
            if (course.id == question.courseId) {
              return course.name
            }          
          })
          questionData.Subject = subject[0].name; 
          questionData.Question = question.description;
          questionData.Options = question.options.map(opt => opt.text)
          return questionData;
        })} catch (error) {
          this.error = 'Something Went Wrong :('
        }
    },  
}
</script>

<style scoped>
#admin{
width: 500px;
}
</style>