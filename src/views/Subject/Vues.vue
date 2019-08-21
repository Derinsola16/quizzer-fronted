<template>
    <div >
    
    <b-form-group label="1. What framework is vue under?">
        <!-- <label for="1">1. What is the full meaning of npm?</label> -->
      <b-form-radio v-model="selected" name="some-radios" value="Ruby">Ruby</b-form-radio>
      <b-form-radio v-model="selected" name="some-radios" value="Phython"> Phython</b-form-radio>
      <b-form-radio v-model="selected" name="some-radios" value="Php">Php</b-form-radio>
      <b-form-radio v-model="selected" name="some-radios" value="Javascript">Javascript</b-form-radio>
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