<template>
<div class="container-fluid">
        

    <h5>Node <router-link to="/subject/Node"><b-button variant="outline-primary" v-on:click="seen = !seen">Take Quiz</b-button></router-link></h5> 
    <h5>Javascript <router-link to="/subject/Javascript"><b-button variant="outline-primary">Take Quiz</b-button></router-link></h5>
    <h5>Vue <router-link to="/subject/Vues"><b-button variant="outline-primary">Take Quiz</b-button></router-link></h5>

<hr>
    <router-view></router-view>
</div>    
</template>

<script>
export default {
    data(){
        return{
            seen: false,
        }
    }
}
</script>

<style scoped>

</style>