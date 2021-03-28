<template>
  <Home />
  <router-view />
</template>

<script>
import Home from '@/views/Home.vue'

export default {
  name:"App",
  components:{Home
  }
}
</script>

<style lang="scss" src="@/styles/vuextagram.scss">

</style>
