console.log('JS OK')

const { createApp } = Vue

  createApp({
    data() {
      return {
        emails: [],
        apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
        totEmails: 10,
      }
    },
    methods: {
        getRandomEmail(){
            for(let i = 0 ; i < totEmails; i++ ){
                axios.get(this.apiUrl)
                .then( (response) => {
                    console.log(response.data.response)
                    this.emails.push(response.data.response)
                });
            }
           
        }
       
    },
    mounted(){
            this.getRandomEmail();
        }      
  }).mount('#app')