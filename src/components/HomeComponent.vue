<template>
    <div class="container">
        <div class="row justify-content-around align-items-center">
            <div class="col-8">
                <h2 class="my-5">Projects:</h2>
            </div>
            <div class="col-3">
                <button @click="this.previousPage" class="btn btn-primary me-3">previous page</button>
                <button @click="this.nextPage" class="btn btn-primary">next page</button>
            </div>
            <div v-for="project in projects" class="card p-0 col-5 mb-5">
                <img class="card-img-top" :src="project.image_path" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{ project.title }} -- <span class="text-secondary">{{ project.type.name }}</span></h5>
                    <p class="card-text">{{ project.description.substr(0,250) }}...</p>
                    <span v-for="tecnology in project.tecnologies" :style="'color: ' + tecnology.accent_color">{{ '<'+tecnology.name+'> '}} </span>
                </div>
                <div class="card-body">
                    <a href="#" class="btn btn-primary">Show more</a>
                </div>
            </div>
            <div class="col-3 offset-8 mb-5">
                <button @click="this.previousPage" class="btn btn-primary me-3">previous page</button>
                <button @click="this.nextPage" class="btn btn-primary">next page</button>
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
            apiAddress: 'http://127.0.0.1:8000/api/projects',
            currentPage: 1,
            firstPage: 0,
            lastPage: 0
        }
    },

    methods: {
        getProjects() {
            axios.get(this.apiAddress, {
                params: {
                    page: this.currentPage
                }
            })
                .then((response) => {
                    this.projects = response.data.results.data
                    this.currentPage = response.data.results.current_page
                    console.log(this.currentPage)
                    this.firstPage = response.data.results.from
                    console.log(this.firstPage)
                    this.lastPage = response.data.results.last_page
                    console.log(this.lastPage)
                })
                .catch(function (error) {
                    console.warn(error)
                })
        },

        nextPage(){
            if (this.currentPage == this.lastPage) {
                this.currentPage = 1
            } else{
                this.currentPage+=1
            }
            this.getProjects()
        },

        previousPage(){
            if (this.currentPage == 1) {
                this.currentPage = this.lastPage
            } else{
                this.currentPage-=1
            }
            this.getProjects()
        }
    },

    created() {
        this.getProjects()
    }
}
</script>
<style lang="scss" scoped></style>