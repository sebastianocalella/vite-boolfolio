<template lang="">
    <div>
        <ProjectComponent :projectElement="project" @send-project-index="getProject"/>
    </div>
</template>

<script>
import ProjectComponent from '../components/ProjectComponent.vue'
import axios from 'axios'

export default {
    name: 'ProjectPage',
    components: {
        ProjectComponent
    },
    data() {
        return {
            poroject: null,
            loading: false,
            urlAddress: 'http://127.0.0.1:8000',
        }
    },
    methods: {
        getProject(value){
            axios.get(this.urlAddress + '/api/projects/', {
                params: {
                }
            })
            .then((response) => {
                this.project = response.data.results.data[value];
                console.warn(response);
            })
            .catch(function (error) {
                console.warn(error);
            });
        },
    },
    created() {
        //this.getProject();
    },
}
</script>
<style lang="scss">
</style>