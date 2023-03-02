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
  <HomeComponent/>

</template>

<style lang="scss">
  @use './styles/general.scss' as *;
</style>
