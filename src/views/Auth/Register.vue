<template>
    <div>
        <h2>Register</h2>
        <form>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" v-model="user.email" required="" name="email" class="form-control" />
                
            </div>
           <div class="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" v-model="user.password" required="" name="password" class="form-control" />
                
            </div>
            
            <div class="form-group">
                <button class="btn btn-primary" >Register</button> 
                
                <p> Already have an Account?<router-link to="/login" class="btn btn-link">Login</router-link></p>
            </div>
        </form>
    </div>
</template>

<script>
//import { mapState, mapActions } from 'vuex'
export default {
    name: 'register',

    data: function (){
        return{
            user:{ },
          
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