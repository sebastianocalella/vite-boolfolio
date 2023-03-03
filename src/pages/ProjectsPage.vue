<template lang="">
    <div class=container>
        <div class="row justify-content-around align-items-center">
            <div class="col-8">
                <h2 class="my-5">Projects:</h2>
            </div>
            <div class="col-3">
                <button @click="this.previousPage" class="btn btn-primary me-3">previous page</button>
                <button @click="this.nextPage" class="btn btn-primary">next page</button>
            </div>
            <ProjectsComponent :projectsList="projects"/>
        </div>
    </div>
</template>
<script>

import ProjectsComponent from '../components/ProjectsComponent.vue';
import axios from 'axios';

export default {
    name: 'ProjectsPage',
    components:{
        ProjectsComponent
    },
    data(){
        return{
            projects: [],
            currentPage: 1,
            urlAddress: 'http://127.0.0.1:8000'
        }
    },
    methods: {
        getProjects(){
            axios.get(this.urlAddress + '/api/projects/', {
                params: {
                    page: this.currentPage
                }
            })
            .then((response) => {
                this.projects = response.data.results.data;

            })
            .catch(function (error) {
                console.warn(error);
            });
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
        this.getProjects();
    },
}
</script>
<style lang="scss">
</style>