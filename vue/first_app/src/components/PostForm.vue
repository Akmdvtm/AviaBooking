<template>
    <form @submit.prevent>
        <h4>New post</h4>
        <input v-model="post.title" class="input" type="text" placeholder="Title">
        <input v-model="post.body" class="input" type="text" placeholder="Description">
        <button @click="createPost">Ok</button>
    </form>
</template>

<script>
export default {
    data() {
        post: {
            title: ''
            body: ''
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now()
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: ''
            }
        },
    }
}
</script>

<style scoped>
.input {
    width: 100%;
    border: 1px solid black;
    padding: 10px 15px;
    margin-block: 5px;
}
</style>