<template>
    <div class="container" id="admin">
        <b-table striped hover :items="items" :fields="fields"></b-table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            fields: ['S_N', 'email', 'subject','score'],
            items:[
                { S_N: '1', email: 'JhonDoe@gmail.com',subject: 'Node', score: '90%'},
                { S_N: '2', email: 'HalimaBerry@gmail.com',subject: 'Javascript', score: '70%'},
                { S_N: '3', email: 'SnowWater@gmail.com',subject: 'Vue', score: '85%'},
            ]
        }
    }
}
</script>

<style>
#admin{
    width: 500px;
  margin: auto;
}
</style>