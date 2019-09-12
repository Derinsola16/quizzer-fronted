    <template>
    <div class="container">
        <ol>  
        <Question 
          v-for="(question) in questions" 
          :key="question.description" 
          :options="question.options" 
          :question="question" 
          @answer="handleQuestionAnswered($event,question.id) "
          :submit="attemptSubmit"
        />  
        </ol>
      <b-button round class="btn btn-success" @click="submit"> Submit </b-button> 
    </div>    
    </template>

    <script>
    import Question from './Question'
    import axios from 'axios'
    export default {
      components: {Question},
        data(){
            return{
                questions:[],
                options:[],
                answeredQuestions: [],
                result: [],
                attemptSubmit: false    
            }
        },
            computed: {
            answeredQuestionsArray(){
              let x = []
              Object.keys(this.answeredQuestions).forEach(question => {
                if (this.answeredQuestions[question]) {
                  x.push([question,this.answeredQuestions[question]])
                }
              })
              return x
            },
            validate(){
            return this.answeredQuestionsArray.length === this.questions.length
            },
          },
        methods: {
          
         
          handleQuestionAnswered($event,question){
            this.answeredQuestions[question] = $event
            
          },
        async submit(){
              this.attemptSubmit = true   
          let path = `/exam/${this.$route.params.id}/success`

          if(this.validate){
          localStorage.setItem('answers',JSON.stringify(this.answeredQuestionsArray)) 
            this.$router.push(path)
              
          }
            },
        },

          async mounted(){
            // Get all question
            try {
            
            const resp = await axios.get(`https://quizzer-api.herokuapp.com/questions?courseId=${this.$route.params.id}`)
            this.questions = resp.data
            this.answeredQuestions = this.questions.reduce((answeredQuestions, question) => ({ ...answeredQuestions, [question.id]: null }), {})
            
            } catch (error) {
            this.error = 'Something Went Wrong!!!'
          }
          }

    }
    </script>

    <style scoped>
    .empty{
      color: rgb(255, 0, 0);
    }
    </style>