<template>
<div class="container">
     <h3><b>Please select subject to take quiz on </b></h3><br/>
    <router-link to="/exam/vue">
    <b-button block variant="outline-primary">{{course.id}}</b-button>
    </router-link>
<br/>
    <router-link to="/exam/node">
    <b-button block variant="outline-warning">{{course.id}}</b-button>
    </router-link>
<br/>
    <router-link to="/exam/javascript">
    <b-button block variant="outline-secondary">Take a Javascript quiz</b-button>
    </router-link>
<br/>
    <router-link to="/exam/bootstrap">
    <b-button block variant="outline-success">Take a Bootstrap quiz</b-button>
    </router-link>
<br/>
    <router-link to="/exam/bootstrap">
    <b-button block variant="outline-success">Take a Bootstrap quiz</b-button>
    </router-link>
<br/>
    <router-link to="/exam/bootstrap">
    <b-button block variant="outline-success">Take a Bootstrap quiz</b-button>
    </router-link>
<br/>
    <router-link to="/exam/bootstrap">
    <b-button block variant="outline-success">Take a Bootstrap quiz</b-button>
    </router-link>
<br/>
    <router-link to="/exam/bootstrap">
    <b-button block variant="outline-success">Take a Bootstrap quiz</b-button>
    </router-link>
<br/>
    <router-link to="/exam/bootstrap">
    <b-button block variant="outline-success">Take a Bootstrap quiz</b-button>
    </router-link>
<br/>
    <router-link to="/exam/bootstrap">
    <b-button block variant="outline-success">Take a Bootstrap quiz</b-button>
    </router-link>                            
    
<hr>


   <router-view></router-view>
</div>    
</template>

<script>
export default {
    data(){
        return{
          course: id
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