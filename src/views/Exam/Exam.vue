<template>
<div class="container">

    <h4>Welcome to your {{$route.params.id}} quiz</h4>

    <ol>
     <li> <label for="one"> How many framework does js has?</label> </li>
        <!-- <label for="1">1. What is the full meaning of npm?</label> -->
      <b-form-radio v-model="selected" name="fifth"  value="Many">Many</b-form-radio>
      <b-form-radio v-model="selected" name="fifth"  value="None"> None</b-form-radio>
      <b-form-radio v-model="selected" name="fifth"  value="Two">Two</b-form-radio>
      <b-form-radio v-model="selected" name="fifth"  value="One"> One</b-form-radio>
   
    
     <li> <label for="one"> How many framework does js has?</label> </li>
        <!-- <label for="1">1. What is the full meaning of npm?</label> -->
      <b-form-radio v-model="selected" name="fourth"  value="Many">Many</b-form-radio>
      <b-form-radio v-model="selected" name="fourth"  value="None"> None</b-form-radio>
      <b-form-radio v-model="selected" name="fourth"  value="Two">Two</b-form-radio>
      <b-form-radio v-model="selected" name="fourth"  value="One"> One</b-form-radio>
   
    
     <li> <label for="one"> How many framework does js has?</label> </li>
        <!-- <label for="1">1. What is the full meaning of npm?</label> -->
      <b-form-radio v-model="selected" name="third"  value="Many">Many</b-form-radio>
      <b-form-radio v-model="selected" name="third"  value="None"> None</b-form-radio>
      <b-form-radio v-model="selected" name="third"  value="Two">Two</b-form-radio>
      <b-form-radio v-model="selected" name="third"  value="One"> One</b-form-radio>
   
    
     <li> <label for="one"> How many framework does js has?</label> </li>
        <!-- <label for="1">1. What is the full meaning of npm?</label> -->
      <b-form-radio v-model="selected" name="second"  value="Many">Many</b-form-radio>
      <b-form-radio v-model="selected" name="second"  value="None"> None</b-form-radio>
      <b-form-radio v-model="selected" name="second"  value="Two">Two</b-form-radio>
      <b-form-radio v-model="selected" name="second"  value="One"> One</b-form-radio>
   
   
    <li> <label for="one"> How many framework does js has?</label> </li>
        <!-- <label for="1">1. What is the full meaning of npm?</label> -->
      <b-form-radio v-model="selected" name="first"  value="Many">Many</b-form-radio>
      <b-form-radio v-model="selected" name="first"  value="None"> None</b-form-radio>
      <b-form-radio v-model="selected" name="first"  value="Two">Two</b-form-radio>
      <b-form-radio v-model="selected" name="first"  value="One"> One</b-form-radio>
   
    </ol>

    <router-link :to="`/exam/${$route.params.id}/success`">
    <b-button round class="btn btn-success">Submit</b-button>
    </router-link>
 
 
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