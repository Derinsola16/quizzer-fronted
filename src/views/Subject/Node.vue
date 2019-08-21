<template>
<div >
    
    <b-form-group label="1. What is the full meaning of npm?">
        <!-- <label for="1">1. What is the full meaning of npm?</label> -->
      <b-form-radio v-model="selected" name="some-radios" value="Not Package Manager">Not Package Manager</b-form-radio>
      <b-form-radio v-model="selected" name="some-radios" value="Node Package Manager"> Node Package Manager</b-form-radio>
      <b-form-radio v-model="selected" name="some-radios" value="New Package Manager">New Package Manager</b-form-radio>
      <b-form-radio v-model="selected" name="some-radios" value="Nasty Package Manager"> Nasty Package Manager</b-form-radio>
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