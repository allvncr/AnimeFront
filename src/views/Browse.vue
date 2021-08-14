<template>
    <div class="browse">
        <Header title="Browse" home=true></Header>
        <div class="all">
            <a href="/browse/trending" class="hero">
                <div class="category-bg trending"></div>
                <div class="category-container">
                    <i class="fas fa-fire"></i>
                    <div class="category-title">TRENDING</div>
                    <div class="category-subtitle">Popular animes</div>
                </div>
            </a>
            <a href="/browse/trending" class="hero">
                <div class="category-bg seasons"></div>
                <div class="category-container">
                    <i class="fas fa-leaf"></i>
                    <div class="category-title">SEASONS</div>
                    <div class="category-subtitle">Find videos by seasons</div>
                </div>
            </a>
            <a class="hero" @click="getInt">
                <div class="category-bg random"></div>
                <div class="category-container">
                    <i class="fas fa-random"></i>
                    <div class="category-title">RANDOM</div>
                    <div class="category-subtitle">You feelin' lucky?</div>
                </div>
            </a>
        </div>
        <div class="tile-section">
            <div class="tile__separator"></div>
            <h2>Categories <br> Tags</h2>
            <div class="hint">
                Want to search with multiple tags? Use our <a href="/search">Search page</a>!
            </div>
            <div class="tile__container">
                <a :href="'/search?tag='+genre.slug" v-for="(genre, i) in genres" :key="i">
                    <img :src="genre.image">
                    <div class="tile-content">
                        <p class="title">{{ genre.name }}</p>
                        <p class="description">{{ genre.description }}</p>
                        <div class="tile-count">
                            <i class="fas fa-video"></i>
                            {{ genre.total }}
                        </div>
                    </div>
                </a>
                
            </div>
        </div>
        <div class="tile-section">
            <div class="tile__separator"></div>
            <h2>ANIMATION STUDIOS <br> Brands</h2>
            <div class="flex">
                <a :href="'/search?brand='+brand.slug" v-for="(brand, i) in studios" :key="i">
                    <p class="text">{{ brand.name }}</p>
                    <p class="count">{{ brand.total }}</p>
                </a>
            </div>
        </div>
        <Footer></Footer>
    </div>    
</template>

<style lang="scss" scoped>
    a{
        text-decoration: none;
    }
    .all{
        padding: 24px;
        border-bottom: 1px solid #3a3c3f;
        min-width: 917px;
        display: flex;
        justify-content: center;

        .hero{
            cursor: pointer;
            width: 304px;
            height: 700px;
            position: relative;
            overflow: hidden;

            .category-bg{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                transition: all .3s ease-out;
            }

            .trending{
                background: linear-gradient(
                    0deg
                    , #1b1b1b 0%, 
                    rgba(0, 0, 0, 0) 50%, 
                    rgba(0, 0, 0, 0) 80%, 
                    rgba(27, 27, 27, 0.650297619) 
                    100%),url(https://i.imgur.com/CiU4KQX.jpeg) 
                    center center/cover no-repeat #000;
            }

            .seasons{
                background: linear-gradient(
                    0deg
                    , #1b1b1b 0%, 
                    rgba(0, 0, 0, 0) 50%, 
                    rgba(0, 0, 0, 0) 80%, 
                    rgba(27, 27, 27, 0.650297619) 
                    100%),url(https://i.imgur.com/QjZ6RyF.jpg) 
                    center center/cover no-repeat #000;
            }

            .random{
                background: linear-gradient(
                    0deg
                    , #1b1b1b 0%, 
                    rgba(0, 0, 0, 0) 50%, 
                    rgba(0, 0, 0, 0) 80%, 
                    rgba(27, 27, 27, 0.650297619) 
                    100%),url(https://i.imgur.com/eYfYPIR.jpg)
                    // 100%),url(https://i.imgur.com/yhQWQ6A.jpeg) 
                    center center/cover no-repeat #000;
            }


            .category-container{
                position: relative;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: center;

                i{
                    font-size: 80px;
                    color: #fff;
                }

                .category-title{
                    font-size: 28px;
                    margin-top: 24px;
                    color: #fff;
                    font-weight: 700;
                    letter-spacing: .5px;
                }

                .category-subtitle{
                    font-size: 16px;
                    margin-top: 24px;
                    margin-bottom: 48px;
                    color: #939496;
                    text-shadow: 0 1px #939496;
                }

            }
        }

        .hero:hover .category-bg{
            transform: scale(1.05);
        }

        .hero:hover .category-container i{
            color: #f3c669;
        }
    }

    .tile-section{
        margin: 0 auto 24px;
        width: 80%;
        position: relative;

        .hint{
            position: absolute;
            top: 0;
            right: 0;
            font-size: 18px;
            width: 240px;
            margin: 24px 0 0 0;
            color: #939496;
            font-weight: 600;

            a{
                color: #f3c669;
                text-decoration: none;

            }
        }

        .tile__separator{
            margin: 48px 0 32px;
            width: 10vw;
            height: 6px;
            border-radius: 2px;
            background: #fff;
        }

        h2{
            margin-bottom: 24px;
            font-size: 44px;
            line-height: 54px;
            font-weight: 800;
            text-transform: uppercase;
        }

        .tile__container{
            margin: 24px 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            a{
                margin-bottom: 24px;
                max-height: 380px;
                position: relative;

                img{
                    width: 215px;
                    height: 380px;
                }

                .tile-content{
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    color: #fff;
                    padding: 174px 24px 24px 24px;
                    overflow: hidden;
                    background: linear-gradient(180deg, rgba(58, 58, 58, 0) 40%, #3a3a3a 59%);

                    .title{
                        margin: 14px 0 12px;
                        font-size: 22px;
                        line-height: 22px;
                    } 

                    .description{
                        overflow: hidden;
                        font-size: 16px;
                        line-height: 24px;
                        width: 100%;
                        font-weight: 600;
                        color: #f3c669;
                    }

                    .tile-count{
                        background: #3a3a3a;
                        margin: 8px 0;
                        letter-spacing: 1px;
                        font-weight: 500;
                        font-size: 20px;
                        margin: 8px 0;
                        color: #fff;
                        display: flex;
                        align-items: center;

                        i{
                            font-size: 24px;
                            color: rgba(147,148,150,.5);
                            margin-right: 8px;
                        }
                    }
                }

                
            }
        }

        .flex{
            display: flex;
            align-items: center;
            flex-wrap: wrap;

            a{
                background-color: #212121;
                color: #fff;
                display: flex;
                align-items: center;
                margin: 6px 8px;
                font-size: 14px;
                height: 36px;
                font-weight: 600;
                text-transform: uppercase;
                padding: 0 16px;

                p{
                    margin: 0 4px;
                }

                .count{
                    color: #f3c669;
                }
            }
        }

    }

</style>

<script>
import Header from "@/components/Header.vue";
import VidService from "@/services/VidService"
import Footer from "@/components/Footer.vue";

export default {
    props: {
        title: String
    },

    components: {
        Header,
        Footer
    },

    data(){
        return {
            genres: [],
            studios: [],
            id: {}
        }
    },

    methods: {
        getGenres(){
            VidService.getGenres()
            .then(response => {
                this.genres = response.data
            }).catch(e => {
                console.log(e.response.data)
            })
        },

        getBrands(){
            VidService.getStudios()
            .then(response => {
                this.studios = response.data
            }).catch(e => {
                console.log(e.response.data)
            })
        },

        getInt(){
            VidService.getRandom()
            .then(response => {
                this.id = response.data
                this.$router.push('/anime/'+this.id.slug)
            }).catch(e => {
                console.log(e.response.data)
            })
        }
        
    },


    mounted(){
        this.getGenres()
        this.getBrands()
    }
}
</script>