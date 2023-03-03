<template lang="">
    <div>
        <ProjectComponent />
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
            post: null,
            loading: false,
            urlAddress: 'http://127.0.0.1:8000',
        }
    },
    methods: {
        getProject(){
            axios.get(this.urlAddress + `/api/projects/${this.$route.params.slug}`, {
                params: {
                }
            })
            .then((response) => {
                this.project = response.data.results;
                console.warn(response);
            })
            .catch(function (error) {
                console.warn(error);
            });
        }
    },
    created() {
        this.getProject();
    },
}
</script>
<style lang="scss">
</style>