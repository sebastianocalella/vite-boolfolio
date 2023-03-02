<template>
    <div class="container">
        <h2>Projects:</h2>
        <div class="row justify-content-around">
            <div class="card col-5">

            </div>
        </div>

    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'HomeComponent',

    data() {
        return {
            projects: [],
            apiAddress: 'http://127.0.0.1:8000/api/projects'
        }
    },

    methods:{
        getProjects(){
            axios.get(this.apiAddress, {
                params:{

                }
            })
            .then(function(response){
                console.log(response)
            })
            .catch(function(error){
                console.warn(error)
            })
        }
    },

    created(){
        this.getProjects()
    }
}
</script>
<style lang="scss" scoped>
    
</style>