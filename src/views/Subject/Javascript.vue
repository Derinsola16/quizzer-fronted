<template>
   <div >
    
    <b-form-group label="1. How many framework does js has?">
        <!-- <label for="1">1. What is the full meaning of npm?</label> -->
      <b-form-radio v-model="selected" name="some-radios" value="Many">Many</b-form-radio>
      <b-form-radio v-model="selected" name="some-radios" value="None"> None</b-form-radio>
      <b-form-radio v-model="selected" name="some-radios" value="Two">Two</b-form-radio>
      <b-form-radio v-model="selected" name="some-radios" value="One"> One</b-form-radio>
    </b-form-group>
         <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
</div>
</template>

<script>
export default {
    data() {
      return {
        selected: ''
      }
    }
}
</script>

<style scoped>

</style>