<template>
    <div>
        <qipa1-component></qipa1-component>
        <qipa2-component></qipa2-component>
    </div>
</template>
<script>
    import qipa1Component from '@/components/qipa1Component';
    import qipa2Component from '@/components/qipa2Component';
    export default {
        name: 'Hello2',
        components: {
            qipa1Component,
            qipa2Component
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