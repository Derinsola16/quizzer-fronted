<template>
    <div>
        <h2>Login</h2>
        <form>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" v-model="user.email" required="" name="email" class="form-control" />
          
            </div>
           <div class="form-group">
                <label For="password">Password</label>
                <input type="password" v-model="user.password" required="" name="password" class="form-control" />
                
            </div>

            <div class="form-group">
                <button class="btn btn-primary" @click="login">Login</button> 
                <p>Don't have an Account?<router-link to="/" class="btn btn-link">Sign Up</router-link></p>
            </div>
        </form>
    </div>
</template>

<script>
//import { mapState, mapActions } from 'vuex'
export default {
    name: 'login',

    data: function (){
        return{
            user:{ },
            
        }
    },
    
    methods: {
        login(){
            
        }
    },
}
</script>

<style scoped>
.form-control{
     width: 650px; 
    margin-left: 250px;
 
}
</style>