<template>
    <div class="container">
        <div  class="p-0 row justify-content-between">
            <ProjectComponent v-for="project in projectsList" :projectElement="project" :isShow="true" class="col-5"/>
        </div>
    </div>
</template>
<script>
import ProjectComponent from './ProjectComponent.vue'

export default {
    name: 'ProjectsComponent',

    components:{
        ProjectComponent
    },

    props:{
        projectsList: Object
    },

    data() {
        return {
            projects: [],
            apiAddress: 'http://127.0.0.1:8000/api/projects',
            currentPage: 1,
            firstPage: 0,
            lastPage: 0
        }
    },
}
</script>
<style lang="scss" scoped></style>