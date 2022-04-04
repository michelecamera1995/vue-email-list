console.log("js-ok")

const app = new Vue({
    el: '#app',
    data: {
    email: '',
    emails:[],
    },
    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then( (response, index) => {
          const result = response.data;
          this.emails.push(result.response);
          
          console.log(result);
          console.log(this.emails);
        });
    } 
})
