<template>
    <div class="container">
        <h2>Projects:</h2>
        <div class="row justify-content-around">
            <div v-for="project in projects" class="card col-5 mb-5">
                <img class="card-img-top" :src="project.image_path" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{ project.title }}</h5>
                    <p class="card-text">{{ project.description }}</p>
                </div>
                <div class="card-body">
                    <a href="#" class="btn btn-primary">Show more</a>
                </div>
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

    methods: {
        getProjects() {
            axios.get(this.apiAddress, {
                params: {

                }
            })
                .then((response) => {
                    this.projects = response.data.results.data
                })
                .catch(function (error) {
                    console.warn(error)
                })
        }
    },

    created() {
        this.getProjects()
    }
}
</script>
<style lang="scss" scoped></style>