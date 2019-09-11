<template>
<div>

        <div class="alert alert-danger" v-if="error">{{ error }}</div>
        
    <li :class="{ empty: !answer && submit}">
        <label for="one" >{{question.description}} ?</label>
       
         <b-form-radio-group 
         value-field="id"
         text-field="text"
         :options= "options" 
         v-model="answer"
         @input="$emit('answer', answer)"></b-form-radio-group>
         
    </li>

</div>
</template>

<script>
//import axios from 'axios'
export default {
    props: ['question','options','submit'],
    data() {
        return {
            error: '',
            answer: null,
            
        }
    },
}
</script>

<style scoped>
.empty{
    color: red;
}
</style>