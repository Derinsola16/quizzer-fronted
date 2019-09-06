<template>
<div class="container" id="admin">
    <b-table  striped hover :items="item" :fields="questionfields"></b-table>
  </div>
    
</template>
<script>
export default {
    data() {
        return{
             questionfields: {
                 S_N:{

                 },
                  subject:{

                  }, 
                  question:{

                  },
                  options:{

                  },
                  answer:{

                  }
                  },
             item:[
                { S_N: '1', subject: 'Node', question: 'What is the full meaning of npm', options: '90%', answer: 'Node Package Manager'},
                { S_N: '2', subject: 'Javascript', question: 'How many framework does js has', options: '90%', answer: 'Many'},
                { S_N: '3', subject: 'Vue', question: 'What framework is vue under', options: '90%', answer: 'Javascript'},
            ]
        }
    }
}
</script>

<style scoped>
#admin{
width: 500px;
  margin: auto;
}

</style>