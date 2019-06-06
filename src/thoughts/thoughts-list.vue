<template>
    <div>
        <h3>Thoughts List</h3>
        <ul>
            <li v-for="thought in thoughts">
                Name: {{ thought.name }}<br>
                {{ thought.thought }}
            </li>
        </ul>
    </div>
</template>

<script>
    import thoughtsForm from './thoughts-form.vue';
    export default {
        props: ['thoughts'],
    }
</script>