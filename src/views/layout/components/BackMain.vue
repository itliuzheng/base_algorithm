<template>
  <div class="back-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key"/>
      <!--<keep-alive>-->
      <!--</keep-alive>-->
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'BackMain',
    computed: {
      key() {
        return this.$route.fullPath
      }
    }
  }
</script>

<style scoped>
.back-main {
  /*84 = navbar + tags-view = 50 +34 */
  min-height: calc(100vh - 84px);
  width: 100%;
  position: relative;
  /*overflow: hidden;*/
  /*overflow-x: scroll;*/
  background: #f5f5f5;
}
</style>

