<template>
    <div id="apps">
        <h2>Register</h2>
        <form @submit.prevent="submit()">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" v-model="user.email" required="" name="email" class="form-control" />    
            </div>

           <div class="form-group">
                <label htmlFor="password">Password</label>
                <input type="password"  v-model="user.password" required="" name="password" class="form-control" />   
            </div>
<!-- i am trying to use this => v-if="user.password == user.confpassword" -->
            <div class="form-group">
                <label htmlFor="confpassword">Confirm Password</label>
                <input  :class="{ error: passwordDoesNotMatch}" type="password" v-model="user.confpassword" required="" name="confpassword" class="form-control" />   
            </div>
            <p v-if="passwordDoesNotMatch" class="error">The two password does not match</p>
            
            <div class="form-group">
                <button class="btn btn-primary" type="submit" >Register</button>                 
                <p> Already have an Account?<router-link to="/login" class="btn btn-link">Login</router-link></p>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'register',

    data: function (){
        return{
            user:{},
            passwordDoesNotMatch: false
        }

    
    },
    methods: {
        
        submit (){
            this.passwordDoesNotMatch = this.user.password !== this.user.confpassword
            if(!this.passwordDoesNotMatch){
                // code to send request to server should be here
            }
        }
    }
    }
    
    

</script>

<style scoped>
.error {
   background : rgba(255, 0, 76, 0.781);
   color: black;
   
}  
</style>