<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your email address: {{ email }}</p>
  </div>
</template>

<script>

import axios from 'axios';

export default {

  data() {

    return { email: '' }

  },

  created() {

    // Axios call the gets the data from the database
    // The .then and .catch are known as "promises" which can be chained together with an axios call
    axios.get('https://vue-axios-cc3ce.firebaseio.com/users.json')
      // Will also show the data submitted in the form if axios call is successful. "Status: 200" in the data will also confirm.
      .then(res => {

        console.log(res)
        const data = res.data
        const users = []
        for(let key in data) {

          const user = data[key]
          user.id = key
          users.push(user)
        }

        console.log(users)
        this.email = users[0].email
      })
      .catch(error => console.log(error));

  }
  
}
</script>


<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>