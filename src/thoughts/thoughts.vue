<template>
    <div>
        <h3>Thoughts/Feedback</h3>
        <thoughts-form @thought-submitted="addThought"></thoughts-form >
        <thoughts-list v-if="thoughts.length" :thoughts="thoughts"></thoughts-list>    
    </div>
</template>

<script>
    import thoughtsForm from './thoughts-form.vue';
    import thoughtsList from './thoughts-list.vue';
    
    export default {
        components: {
          thoughtsForm,
          thoughtsList
        },
        methods: {
            addThought(thought){
                console.log('thought',thought);
                this.thoughts.push(thought)
            }
        },
        data() {
            return {
                thoughts: []
            }
        }
    }
</script>