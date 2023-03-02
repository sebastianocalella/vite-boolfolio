<script>
    import HomeComponent from './components/HomeComponent.vue';

export default {
  name: 'App',
  components: {
    HomeComponent,
  },
  data() {
    return {
      
    }
  },

}
</script>

<template>
  <h1>cioa</h1>
  <HomeComponent/>

</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
