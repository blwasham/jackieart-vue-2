<template>
    <div>
<h1>Product Title {{ title }}</h1>   
<h2>{{ childData }}</h2>
<p>style test - should be blue3</p>        
    </div>
</template>


<script>
    export default {
        props: ['title'],
        data() {
            return {
                childData: 'Hello from the child'
            }
        }
    }
</script>

<style scoped>
    p {
        color: blue;
    }
</style>