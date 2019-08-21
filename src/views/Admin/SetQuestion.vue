<template>
<div class="container">
    <p class="well btn-warning">Please Enter the Course you are setting Questions for,  
        and select the right Answer for the Question</p>
          <form>
        <div class="form-group">
        <label for="course"> Enter Course &nbsp;</label>&nbsp;&nbsp;
        <input v-model="quiz.course" type="text" required="" name="course" placeholder="Course"/>
        </div>

        <div class="form-group">
        <label for="course"> Enter Question &nbsp;</label>
        <textarea v-model="quiz.question" type="text" required="" name="question" placeholder="Description"/>
        </div>

        <div class="form-group">
        <label for="course" >First Option &nbsp;</label>&nbsp;&nbsp;&nbsp;
        <input v-model="quiz.optionOne" type="text" required="" name="course" placeholder="Option"/>
        </div>

        <div class="form-group">
        <label for="course"> Second Option &nbsp;</label>
        <input v-model="quiz.optionTwo" type="text" required="" name="course" placeholder="Option"/>
        </div>

        <div class="form-group">
        <label for="course"> Third Option &nbsp;</label>&nbsp;&nbsp;
        <input v-model="quiz.optionThree" type="text" required="" name="course" placeholder="Option"/>
        </div>

        <div class="form-group">
        <label for="course"> Fourth Option &nbsp;</label>
        <input v-model="quiz.optionFour" type="text" required="" name="course" placeholder="Option"/>
        </div>

        <div class="form-group">
            <label for="course"> Please select the right answer &nbsp;</label>
        <select v-model="quiz.answer">
            <option>Choose Answer</option>
            <option >{{quiz.optionOne}}</option>
            <option>{{quiz.optionTwo}}</option>
            <option>{{quiz.optionThree}}</option>
            <option>{{quiz.optionFour}}</option>
        </select>
        </div>

        <div class="form-group">
            <button class="btn btn-success btn-lg">Add</button>&nbsp;&nbsp;
            
        </div>
        </form>

</div>
    
</template>

<script>
export default {
     data() {
        return {
            quiz:{},
            
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