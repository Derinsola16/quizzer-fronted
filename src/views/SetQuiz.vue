<template>
<main>
        <!-- Modal for setting questions -->
     <div class="container-fluid">
  <b-button v-b-modal.modal-1 class="btn btn-primary">Set Question</b-button>

  <b-modal id="modal-1" title="">
          
  </b-modal>
</div>
  <!-- Modal for setting questions ends-->

    <div class="container">
        <b-table striped hover :items="items" :fields="quizfields"></b-table>
    </div>

    <div class="container" id="app">
    <b-table striped hover :items="item" :fields="questionfield" v-if="seen"></b-table>
  </div>

        <form>
        <div class="form-group">
            <button class="btn btn-success">Add</button>&nbsp;&nbsp;
            
        </div>
         </form>
        <button class="btn btn-info" v-on:click="seen = !seen">View all question</button>
       
    

   
</main>
    
</template>

<script>
export default {
    
    data() {
        return {
            quiz:{},
            quizfields: ['S/N', 'email', 'subject','score'],
            questionfield: ['S/N', 'subject', 'question','options','answer'],
            seen: false
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