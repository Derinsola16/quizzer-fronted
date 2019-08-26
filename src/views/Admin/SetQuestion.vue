<template>
<div class="container" id="apps">
    <p class="well btn-warning">Please Enter the Course you are setting Questions for,  
        and select the right Answer for the Question</p>
          <form>
        <div class="form-group">
            <label for="course"> Select Course &nbsp;</label>
        <select v-model="quiz.course" required="" class="form-control">
            
            <option value="node">Node</option>
            <option value="vue">Vue</option>
            <option value="javascript">Javascript</option>
            <option value="bootstrap">Bootstrap</option>
        </select>
        </div>

        <div class="form-group">
        <label for="course"> Enter Question &nbsp;</label>
        <textarea v-model="quiz.question" type="text" class="form-control" required="" name="question" placeholder="Description"/>
        </div>

        <div class="form-group">
        <label for="course" >First Option &nbsp;</label>&nbsp;&nbsp;&nbsp;
        <input class="form-control" v-model="quiz.optionOne" type="text" required="" name="course" placeholder="Option"/>
        </div>

        <div class="form-group">
        <label for="course"> Second Option &nbsp;</label>
        <input class="form-control" v-model="quiz.optionTwo" type="text" required="" name="course" placeholder="Option"/>
        </div>

        <div class="form-group">
        <label for="course"> Third Option &nbsp;</label>&nbsp;&nbsp;
        <input class="form-control" v-model="quiz.optionThree" type="text" required="" name="course" placeholder="Option"/>
        </div>

        <div class="form-group">
        <label for="course"> Fourth Option &nbsp;</label>
        <input class="form-control" v-model="quiz.optionFour" type="text" required="" name="course" placeholder="Option"/>
        </div>

        <div class="form-group">
            <label for="course"> Please select the right answer &nbsp;</label>
        <select v-model="quiz.answer" required="" class="form-control">
          
            <option >{{quiz.optionOne}}</option>
            <option>{{quiz.optionTwo}}</option>
            <option>{{quiz.optionThree}}</option>
            <option>{{quiz.optionFour}}</option>
        </select>
        </div>

        <div class="form-group">
            <input class="btn btn-success btn-lg" value="Add" type="submit"/>
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

</style>