<template>
    <div class="app">

        <post-form />
        <post-list :posts="posts" @create="createPost" />
    </div>
</template>

<script>
import PostForm from "@/components/PostForm"
import PostList from "@/components/PostList"

export default {
    components: {
        PostList, PostForm
    },
    data() {
        return {
            posts: [
                { id: 1, title: "Hello", body: "world" },
                { id: 2, title: "Hello", body: "Kazakhstan" },
                { id: 3, title: "Hello", body: "Kokshetau" }
            ],
        }
    },
    methods: {
        createPost(post) {

        }
    }
}
</script>

<style >
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    padding: 20px;
}
</style>