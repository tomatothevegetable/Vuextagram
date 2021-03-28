<template>
    <figure class="grid-figure">
                <div class="grid-photo-wrap">
                    <router-link :to="`/view/${post.code}`">
                        <img :src="post.display_src" :alt="post.caption"
                        class="grid-photo" />
                    </router-link>    
                </div>   
                <transition name="like" @after-enter="likeEnd">
                    <span v-if="showLike" :key="post.likes" class="likes-heart">{{post.likes}}</span>
                </transition>
            <figcaption>
                <p>{{post.caption}}</p>
                <div class="control-buttons">
                    <button @click="handleLike"  class="likes">&hearts; {{post.likes}}</button>
                    <router-link class="button" :to="`/view/${post.code}`">
                        <span class="comment-count">
                            <span class="speech-bubble"></span>
                            {{comments[post.code] ? comments[post.code].length : 0}}
                        </span>
                    </router-link>
                </div>
            </figcaption>

            </figure>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Photo',
  props:['post','index'],
  data(){
      return{
          showLike:false
    }
  },
  methods:{
      handleLike(){
          this.showLike=true;
          this.$store.commit('increment',{index:this.index});
      },
      likeEnd(){
          this.showLike=false;
      }
  },
  computed:{
      comments(){return this.$store.state.comments}
  }
}
</script>
 <style lang="scss" scoped>
// $offsets: translateX(-50%) translateY(-50%);

// .likes-heart {
//   opacity: 0;
//   transition: all 0.5s;
//   transform: $offsets scale(5);
//   display: block;
//   &.like-enter-active {
//     transition: all 0.2s;
//     transform: $offsets scale(1);
//     opacity: 1;
//     &.like-enter-to {
//       transform: $offsets scale(2);
//     }
//   }&.like-leave-active {
//     display: none;
//   }
// }
</style>