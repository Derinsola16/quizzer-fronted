<template>
<div class="container">
     <h3><b>Please select subject to take quiz on </b></h3><br/>
    <router-link to="/exam/vue">
    <b-button block variant="outline-primary">Take a Vue quiz</b-button>
    </router-link>
<br/>
    <router-link to="/exam/node">
    <b-button block variant="outline-warning">Take a Node quiz</b-button>
    </router-link>
<br/>
    <router-link to="/exam/javascript">
    <b-button block variant="outline-secondary">Take a Javascript quiz</b-button>
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
          
        }
    }
}
</script>

<style scoped>

</style>