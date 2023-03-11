<template>
    <div class="container my-5">
        <ProfileImpact />
    </div>
</template>
<script>
import axios from 'axios'
import ProfileImpact from './homeComponents/ProfileImpact.vue'

export default {
    name: 'HomeComponent',

    components:{
        ProfileImpact
    }
}
</script>

<style lang="scss" scoped>

</style>