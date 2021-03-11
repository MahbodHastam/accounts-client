<template>
    <h3>Welcome {{this.name}} {{this.lastname}}</h3>
</template>
<script>
import axios from 'axios'

export default {
    name: "Home",
    data: function() {
        return {
            name: "Mehrdad",
            lastname: "Akbari"
        }
    },
    created() {
        axios.get('https://accounts.myren.xyz/api/v1/getProfile', {withCredentials: true})
        .then(response => {
          console.log(response)
        })
        .catch(error => console.log(error))
        .then(() => {})
    }
}
</script>
<style scoped>
h3 {
    text-align: center;
    margin-top: 24px;
}
</style>
