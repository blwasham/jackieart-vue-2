<template>
    <form class="thought-form" @submit.prevent="onSubmit">
        <p>
            <label for="name">Name:</label>
            <input id="name" v-model="name">
        </p>
        <p>
            <label for="thought">Thought/Feedback:</label>
            <textarea id="thought" v-model="thought"></textarea>
        </p>
        <p>
            <input type="submit" value="Submit">
        </p>
    </form>
</template>

<script>
export default {
    methods: {
        onSubmit() {
            let thought = {
                name: this.name,
                thought: this.thought
            }
            this.$emit('thought-submitted', thought)
            this.name = null
            this.thought = null
        }
    },
    data() {
        return {
            name: null,
            thought: null
        }
    }
}
</script>

