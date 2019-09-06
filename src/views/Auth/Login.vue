<template>
    <div id="app"> 
        <h2>Login</h2>
        <form @submit.prevent="login()">
            <div class="alert alert-danger" v-if="error">{{ error }}</div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" v-model="user.email" required="" name="email" class="form-control" />
            </div>

           <div class="form-group">
                <label For="password">Password</label>
                <input type="password" v-model="user.password" required="" name="password" class="form-control" />        
            </div>

            <div class="form-group">
                <button class="btn btn-primary">Login</button> 
                <p>Don't have an Account?<router-link to="/" class="btn btn-link">Sign Up</router-link></p>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'login',

    data: function (){
        return{
            user:{ },
            error: ''
            
        }
    },
     methods: {
   async login () {
       this.error = ''
        try {
            const resp = await axios({method: 'post', url: 'https://quizzer-api.herokuapp.com/login', data: this.user});
            console.log(resp.data)
            this.handleSuccessfullLogin(resp.data)
        } catch (error) {
            if(error.response && error.response.status === 401){
                this.error = error.response.data.message
            } else{this.error = 'Something Went Wrong'}

        }    
   },
   handleSuccessfullLogin (data) {
     localStorage.currentUser = data
     let path = '/'
     switch(data.user.role){
         case 'EXAMINER':
             path = '/admin'
             break;
         case 'CANDIDATE':
             path = '/exam'
             break;        
     }
     this.$router.push(path)
},

loginFailed () {
  this.error = 'Email and Password does not match!'
  delete localStorage.token
}
  }

}
</script>

<style scoped>

</style>