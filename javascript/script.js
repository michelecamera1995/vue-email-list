console.log("js-ok")

const app = new Vue({
    el: '#app',
    data: {
    email: '',
    emails:[],
    },
    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then( (response) => {
          const result = response.data;
          console.log(result);
          this.emails.push(result.response);
        });
    } 
})
