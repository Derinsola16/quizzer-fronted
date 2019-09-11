<template>
<div class="container">
     <h3><b>Please select subject to take quiz on </b></h3><br/>
    <router-link :to="`/exam/${course.id}`" v-for="(course) in courses" :key="course.id">
    <b-button block variant="outline-primary">Take a {{course.name}} quiz</b-button>
    </router-link>
                            
    
<hr>


   <router-view></router-view>
</div>    
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
          courses: []
        }
    },
    async mounted(){
        // Get all question
        try {
        const resp = await axios.get('https://quizzer-api.herokuapp.com/courses')
        this.courses = resp.data
        } catch (error) {
        this.error = ''
      }
      }
}
</script>

<style scoped>

</style>