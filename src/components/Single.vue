<template>
    <div class="single-photo">
        <Photo :index="index" :post="post" />
        <Comments :postComments="postComments" :postId="postId"/>
    </div>
</template>

<script>
// @ is an alias to /src
import Photo from '@/components/Photo.vue'
import Comments from '@/components/Comments.vue'


export default {
  name: 'PhotoGrid',
  props:['postId'],
  components: {
    Photo,
    Comments
  },
  computed:{
    index(){return this.$store.state.posts.findIndex(post => post.code ==
        this.postId)},
    post(){return this.$store.state.posts[this.index]},
    postComments(){return this.$store.state.comments[this.postId]||[]}
  }
}
</script>