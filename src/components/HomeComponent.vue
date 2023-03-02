<template>
    <div class="container">
        <h2 class="my-5">Projects:</h2>
        <div class="row justify-content-around">
            <div v-for="project in projects" class="card p-0 col-5 mb-5">
                <img class="card-img-top" :src="project.image_path" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{ project.title }} -- <span class="text-secondary">{{ project.type.name }}</span></h5>
                    <p class="card-text">{{ project.description.substr(0,250) }}...</p>
                    <span v-for="tecnology in project.tecnologies" :style="'color: ' + tecnology.accent_color">#{{ tecnology.name + ' ' }} </span>
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