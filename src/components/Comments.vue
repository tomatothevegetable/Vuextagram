<template> 
        <div class="comment">
           <Comment v-for="(comment,index) in postComments" :comment="comment" :key="index" :postId="postId" :index="index"/>
           <form ref="commentForm" className="comment-form" >
               <input type="text" v-model="author" placeholder="author"/>
               <input type="text" v-model="text" placeholder="comment"/>
               <button  @click.prevent="handleSubmit" >submit</button>
           </form>
       </div>
</template>

<script>
import Comment from '@/components/Comment.vue'
export default {
  name: 'Comments',
  data(){
      return {
          author:"",
          text:""
      }
  },
  props:['postComments','postId'],
  components:{Comment},
  methods:{
        handleSubmit(){
        this.$store.commit('addComment',{postId:this.postId,author:this.author,text:this.text});
        this.author="";
        this.text="";
    }
  }
}
</script>