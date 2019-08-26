<template>
<div>
<div class="container" >
     <router-link to="/admin"><b-button variant="outline-success">Set Question</b-button></router-link>&nbsp;
    <router-link to="/admin/viewquestion"><b-button variant="outline-primary">View all question</b-button></router-link>&nbsp;
     <router-link to="/admin/viewquiz"><b-button variant="outline-warning">View all Quiz</b-button></router-link>
</div><br/>
    <router-view></router-view>
</div>
</template>
<style >
/*  */
</style>