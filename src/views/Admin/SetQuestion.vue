<template>
<div class="container" id="app">
    <p class="well btn-warning">Please Enter the Course you are setting Questions for,  
        and select the right Answer for the Question</p>
          <form @submit.prevent="setQuiz()">
              <div class="alert alert-danger" v-if="error">{{ error }}</div>
              
        <div class="form-group">
            <label for="course"> Select Course &nbsp;</label>
         <b-form-select v-model="question.courseId" :options="courses"
         value-field="id"
         text-field="name"
         class="mb-3">   
         </b-form-select>
        </div>

        <div class="form-group">
        <label for="course"> Enter Question &nbsp;</label>
        <textarea v-model="question.description" type="text" class="form-control" required="" name="question" placeholder="Description"/>
        </div>

        <div class="form-group">
        <label for="course" >First Option &nbsp;</label>&nbsp;&nbsp;&nbsp;
        <input class="form-control" v-model="question.options[0]" type="text" required="" name="course" placeholder="Option"/>
        </div>

        <div class="form-group">
        <label for="course"> Second Option &nbsp;</label>
        <input class="form-control" v-model="question.options[1]" type="text" required="" name="course" placeholder="Option"/>
        </div>

        <div class="form-group">
        <label for="course"> Third Option &nbsp;</label>&nbsp;&nbsp;
        <input class="form-control" v-model="question.options[2]" type="text" required="" name="course" placeholder="Option"/>
        </div>

        <div class="form-group">
        <label for="course"> Fourth Option &nbsp;</label>
        <input class="form-control" v-model="question.options[3]" type="text" required="" name="course" placeholder="Option"/>
        </div>

        <div class="form-group">
            <label for="course"> Please select the right answer &nbsp;</label>
        <select v-model="question.answer" required="" class="form-control">
            <option :value="i" v-for="(n, i) in 4" :key="n">{{question.options[i]}}</option>
        </select>
        </div>

        <div class="form-group">
            <input class="btn btn-success btn-lg" value="Add" type="submit"/>
        </div>
        </form>

</div>
    
</template>

<script>


//Enter all option
//Select an answer
//Submit

import axios from 'axios'
export default {
     data() {
        return {
            question:{options:[]},
            courses:[],
            error: '',   
        }
    },

    methods: {
     async setQuiz(){
          //Enter question description
        try {
             await axios({method: 'post', url: 'https://quizzer-api.herokuapp.com/questions', data: this.question});
        } catch (error) {
            this.error = 'Something went Wrong'
        }
     

        }
    },

   async mounted(){
        // Get all courses
        try {
        const resp = await axios.get('https://quizzer-api.herokuapp.com/courses')
        
        this.courses = resp.data
        } catch (error) {
            this.error = 'Please select a course'
        }
      
    }
    
}
</script>

<style scoped>

</style>