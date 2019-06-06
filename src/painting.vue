<template>
    <div>
    <img :src="painting.image" 
        width="100px" 
        height="75px"
        class="painting"
        :style="{borderColor: frameColor}"
    >
    <p>{{ painting.title }}</p>
    <p class="muted">{{ painting.description }}</p>
    <div class="sold" v-if="painting.sold">SOLD</div>
    
    <div class="stock">
        Prints
        <div v-if="painting.inventory > 10">InStock</div>
        <div v-else-if="painting.inventory <=10 && painting.inventory > 0">Almost Gone</div>
        <div v-else>Out of Stock</div>
    </div>
    
    <button @click="addToCart(painting.id)" :disabled="painting.sold">Add to cart</button>
</div>
</template>

<script>
    export default {
        props: ['frameColor', 'painting', 'cart'],
        methods: {
            addToCart(id) {
                this.$emit('add-to-cart', id)       
            },
            removeFromCart(id) {
                this.$emita('remove-from-cart', id)
            }
        }
    }
</script>

<style scoped>
    .painting {
        border-style: solid;
        border-color: blue;
    }
    .stock {
        background: #ccd;
        font-size: 14px;
    }
    .muted {
        color: darkgray;
    }
    .sold {
        color: darkred;
    }
</style>