<template>
        <div class="comment">
                <p>
                    <strong>{{comment.user}}</strong>
                    {{comment.text}}
                    <button class="remove-comment" @click="this.$store.commit('removeComment',{postId,index})">&times; </button>
                </p>
        </div>
</template>

<script>
export default{
    name:'Comment',
    props:['comment','index','postId']
}
</script>