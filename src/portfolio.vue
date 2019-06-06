<template>
    <div>
        <div class="portfolio-title">
            <strong>{{title}}</strong>
        </div> 
        <div class="cart">
            Cart({{ cart.length }})
        </div>
        <div class="frame-color-box">
            <div class="float-left">Frame Color:&nbsp;</div>
            <div v-for="frameColor in frameColors" 
                class="frame-color"
                :style="{ backgroundColor: frameColor }"
                @mouseover="updateFrameColor(frameColor)">
            </div>
        </div>
        <div class="grid-container">
            <painting v-for="painting in paintings" 
                :key="painting.id"
                :painting="painting"
                :frameColor="frameColor"
                :cart="cart"
                @add-to-cart="addCart"
                @remove-from-cart="removeCart"
            >
            </painting>
        </div>
    </div>
</template>


<script>
    import painting from './painting.vue';
    
    export default {
        props: ['siteTitle'],
        methods: {
            addCart(id) {
              this.cart.push(id);  
            },
            removeCart(id){
                
            },
            updateFrameColor(color) {
                console.log(color);
                this.frameColor = color;
            }
        },
        computed: {
          title() {
              return 'Portfolio with ' + this.frameColor + ' frames'
          }  
        },
        components: {
            painting
        },
        data() {
            return {
                cart: [],
                frameColors: ['white','gold','black','gray'],
                frameColor: 'white',
                paintings: [
                    {
                        id: 111,
                        title: 'Night Fall',
                        description: 'Sunset at Ocean Isle',
                        location: 'Ocean Isle Beach, NC',
                        image: './assets/1.jpg',
                        sold: true,
                        inventory: 0,
                        width: 20,
                        height: 10
                    }, {
                        id: 222,
                        title: 'Banjo Porch',
                        description: 'Porch is good for playing banjo',
                        location: 'Chesapeake Bay',
                        image: './assets/2.jpg',
                        sold: false,
                        inventory: 10,
                        width: 20,
                        height: 20
                    }, {
                        id: 333,
                        title: 'Old Bay Sunrise',
                        description: 'Painting of a blue crab drinking beer',
                        location: 'Chesapeake Bay',
                        image: './assets/3.jpg',
                        sold: false,
                        inventory: 11,
                        width: 20,
                        height: 10
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .portfolio-title {
        float: left;
    }
    .cart {
        float: right;
    }
    .grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 10px;
        padding: 10px;
        clear: both;
    }
    .grid-container > div {
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
    }

    .frame-color-box {
        clear: both;
    }
    .frame-color {
        width: 20px;
        height: 20px;
        margin-top: 5px;
        float: left;
    }
    .float-left {
        float: left;
    }
    .muted {
        color: darkgray;
    }
</style>