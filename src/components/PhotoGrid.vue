<template>
    <div class="photo-grid">  
        <Photo v-for="(post,i) in posts" :post="post" :key="i" :index="i"/>)
    </div>
</template>

<script>
// @ is an alias to /src
import Photo from '@/components/Photo.vue'

export default {
  name: 'PhotoGrid',
  components: {
    Photo
  },
  computed:{
      posts(){return this.$store.state.posts}
  }
}
</script>