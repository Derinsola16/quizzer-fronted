<template>
    <div>
        <p v-if="result === null"> Calculating Score.....</p>
          <p v-else>Your total score is {{result}} %</p>
    </div>
</template>
<script>
import axios from 'axios'
//import Exam from './Exam'
export default {
    data() {
        return {
            result: null,
            
            error:''

        }
    },

   async mounted(){
           
            const questions = JSON.parse(localStorage.getItem('answers'))
            
           const userId = JSON.parse(localStorage.getItem('currentUser')).user.id
                   

           const data = {

            courseId: `${this.$route.params.id}`,
            userId,
            questions

            }
        
            try {
                 const response = await axios({method: 'post', url:'https://quizzer-api.herokuapp.com/quizzes', data});
                  this.result = response.data.score
                } 
            catch (error) {
                    this.error = 'Something Went Wrong :('
                }
              
    }
}
</script>

