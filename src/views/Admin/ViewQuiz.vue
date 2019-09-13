<template>
  <div class="container" id="admin">
      <div class="alert alert-danger" v-if="error">{{ error }}</div>
    <b-table striped hover :items="value"></b-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      value: [],
      error: ""
    };
  },

  async mounted() {
    try {
      const response = await axios.get("https://quizzer-api.herokuapp.com/quizzes")

      const courseResponse = await axios.get("https://quizzer-api.herokuapp.com/courses");

      this.value = response.data.map(quiz => {
        let data = {};
        let subject = courseResponse.data.filter(course => {
          if (course.id == quiz.courseId) {
            return course.name;
          }
        });
        data.Email = quiz.email;
        data.Subject = subject[0].name;
        data.Score = quiz.score;
        return data;
      });
    } catch (error) {
      this.error = "Something Went Wrong :(";
    }
  }
};
</script>

<style>
#admin {
  width: 500px;
}
</style>