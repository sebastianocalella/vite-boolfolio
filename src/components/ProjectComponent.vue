<template lang="">
    <div class="card p-0 mb-5">
        <img class="card-img-top" :src="projectElement.image_path" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{ projectElement.title }} -- <span class="text-secondary">{{ projectElement.type.name }}</span></h5>
            <p v-if="isShow" class="card-text">{{ projectElement.description.substr(0,250) }}...</p>
            <span v-for="tecnology in projectElement.tecnologies" :style="'color: ' + tecnology.accent_color">{{ '<'+tecnology.name+'> '}} </span>
        </div>
        <div class="card-body">
            <router-link v-if="isShow" :to="{name: 'project', params: {slug: projectElement.slug}}" class="btn btn-primary">
                Read more...
            </router-link>
        </div>
    </div>
</template>
<script>

export default {
    name: 'ProjectComponent',
    props:{
        projectElement: Object,
        isShow: Boolean
    }
}
</script>
<style lang="scss">
</style>