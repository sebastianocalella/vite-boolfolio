<template lang="">
    <div>
        <h2>
            Projects List page
        </h2>
        <ProjectsComponent :projectsList="projects"/>
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
        }
    },
    created() {
        this.getProjects();
    },
}
</script>
<style lang="scss">
</style>