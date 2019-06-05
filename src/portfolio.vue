<template>
    <div>
        <h3>Portfolio</h3>   
        <ul>
            <li v-for="painting in paintings" :key="painting.id">
                {{ painting.title }}
                <br>
                <small class="muted">{{ painting.description }}</small>
            </li>
        </ul>
    </div>
</template>


<script>
    export default {
        props: ['title'],
        data() {
            return {
                paintings: [
                    {
                        id: 1,
                        title: 'Night Fall',
                        description: 'Sunset at Ocean Isle',
                        location: 'Ocean Isle Beach, NC',
                        image: './assets/Nightfall.jpg'
                    }, {
                        id: 2,
                        title: 'Old Bay Sunrise',
                        description: 'Painting of a blue crab drinking beer',
                        location: 'Chesapeake Bay',
                        image: './assets/2.jpg'
                    }, {
                        id: 3,
                        title: 'Old Bay Sunrise',
                        description: 'Painting of a blue crab drinking beer',
                        location: 'Chesapeake Bay',
                        image: './assets/3.jpg'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .muted {
        color: darkgray;
    }
</style>