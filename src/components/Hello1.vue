<template>
    <div>
        <h1>
            我是Hello1.vue
        </h1>
        <button @click="changeMsg">点我改变数据</button>
        <p>gettersMsg数据目前是:{{gettersMsg}}</p>
    </div>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex';
    export default {
        name: 'Hello1',
        data: function () {
            return {};
        },
        computed: {
            ...mapGetters([
              'gettersMsg'
          ]),
        },
        methods: {
            ...mapActions([
                'changeMsg'
            ])
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