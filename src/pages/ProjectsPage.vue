<template lang="">
    <div>
        <h2>
            Projects List page
        </h2>
    </div>
</template>
<script>

import ProjectComponent from '../components/ProjectComponent.vue';
import axios from 'axios';

export default {
    name: 'Projectspage',
    components:{
        ProjectComponent
    },
    data(){
        return{
            projects: [],
            urlAddress: 'http://127.0.0.1:8000'
        }
    },
    methods: {
        getProjects(){
            axios.get(this.urlAddress + '/api/projects/', {
                params: {
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