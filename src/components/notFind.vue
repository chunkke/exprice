<template>
    <div class="hello">
        <h1>{{msg}}</h1>
    </div>
</template>
<script>
    export default {
        name: 'notFind',
        data () {
            return {
                msg: '对不起，匹配不到对应资源,我是notFind.vue'
            };
        }
    }
</script>
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding:0;
    }
    li {
        display:inline-block;
        margin:0 10px;
    }
    a {
        color: #2dbd7c;
    }
</style>