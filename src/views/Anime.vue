<template>
    <div class="anime">
        <Header title="Anime" home=true></Header>
        <div class="body">
            <div class="post-title">
                <h1>{{ anime.name }}</h1>
            </div>
            <div class="summary">
                <div class="image">
                    <img width="193" height="278" :src="anime.image">
                </div>
                <div class="content">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                        <span class="note">{{ anime.note }}</span>
                    </div>
                    <div class="item">
                        <h5>Name</h5>
                        <p>{{ anime.name }}</p>
                    </div>
                    <div class="item">
                        <h5>Note</h5>
                        <p>{{ anime.note }}</p>
                    </div>
                     <div class="item">
                        <h5>Type</h5>
                        <p>Anime</p>
                    </div>
                    <div class="item">
                        <h5>Status</h5>
                        <p v-if="anime.status=='TN'">TERMINÉ</p>
                        <p v-if="anime.status=='EC'">EN COURS</p>
                        <p v-if="anime.status=='PR'">BIENTOT</p>
                    </div>
                    <div class="item">
                        <h5>Studio</h5>
                        <p>{{ anime.studio.name }}</p>
                    </div>
                    <div class="item">
                        <h5>Start Date</h5>
                        <p>{{ anime.date }}</p>
                    </div>
                    <div class="item">
                        <h5>Genre(s)</h5>
                        <div class="genre">
                            <a href="" v-for="(genre,i) in anime.genres" :key="i">
                                {{ genre.name }}
                            </a>
                        </div>
                    </div>
                    <div class="nav-link">
                        <a :href="'/anime/'+anime.slug+'/'+first.slug">Premier EP</a>
                        <a :href="'/anime/'+anime.slug+'/'+last.slug">Dernier EP</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="synopsis">
            <div class="main">
                <div class="blog">
                    <h2>
                        <i class="fas fa-check-double"></i>
                        synopsis
                    </h2>
                </div>
                <div class="description">
                    <p>{{ anime.synopsis }}</p>
                </div>
                <div class="blog">
                    <h2>
                        <i class="fas fa-check-double"></i>
                        LISTE D'ÉPISODES
                    </h2>
                    <button @click="reverseListe">
                        <i class="fas fa-exchange-alt"></i>
                    </button>
                </div>
                <div class="listing">
                    <ul>
                        <li v-for="(episode, i) in episodes" :key="i">
                            <a :href="'/anime/'+anime.slug+'/'+episode.slug">{{ episode.name }}</a>
                            <span>{{ episode.updated }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>    
</template>

<style lang="scss" scoped>
    .anime{
        background-color: #212121;
    }

    .body{
        @media only screen and (max-width: 768px){
            width: 100%;
        }
        width: 60%;
        margin: 0 auto;
        padding: 0 15px;
    }

    .post-title{
        padding-top: 16px;

        h1{
            margin: 14px 0;
            color: #fff;
            font-size: 20px;
            font-weight: 400;
        }
    }

    .summary{
        @media only screen and (max-width: 768px){
            flex-direction: column;
        }
        display: flex;
        margin-bottom: 50px;

        .image{
            padding: 48px 15px;
            width: 25%;
        }

        .content{
            @media only screen and (max-width: 768px){
                width: 100%;
                padding: 15px;
            }
            width: 75%;
            padding: 48px 30px 30px 60px;

            .rating{
                margin-bottom: 12px;

                i{
                    color: #f3c669;
                    margin: 0 1px;
                    font-size: 24px;
                }
                span{
                    margin-left: 8px;
                    font-weight: 600;
                    color: #fff;
                    font-size: 24px;
                }
            }

            .item{
                margin-bottom: 4px;
                display: flex;
                margin: 3px 0 8px;

                h5{
                    font-size: 16px;
                    font-weight: 600;
                    color: #fff;
                    width: 30%;
                }

                p{
                    width: 70%;
                    font-size: 16px;
                    color: rgba($color: #fff, $alpha: 0.7);
                }

                .genre{
                    display: flex;
                    flex-wrap: wrap;
                    a{
                        text-decoration: none;
                        font-size: 16px;
                        color: rgba($color: #fff, $alpha: 0.7);
                    }

                    a::after{
                        content: ",";
                        color: #fff;
                        display: inline-block;
                    }

                    a:last-child::after{
                        content: ".";
                    }

                    a:hover{
                        color: #f3c669;
                    }

                }
            }

            .nav-link{
                a{
                    text-decoration: none;
                    display: inline-block;
                    margin: 5px;
                    padding: 10px;
                    background-color: #fff;
                    color: #000;
                    border-radius: 5px;
                    font-size: 14px;
                    font-weight: 600;
                    border: none;
                    outline: none;
                }
                
            }
        }
    }

    .synopsis{
        @media only screen and (max-width: 768px){
            width: 100%;
            margin: 0;
        }
        width: 60%;
        margin: 50px auto;
        .main{
            padding: 0 15px;

            .blog{
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 2px solid #fff;
                margin-bottom: 35px;
                width: 100%;

                h2{
                    font-size: 18px;
                    font-weight: 600;
                    line-height: 1.2;
                    color: #fff;
                    text-transform: uppercase;
                }

                button{
                    cursor: pointer;
                    color: #fff;
                    transform: rotate(90deg);
                    font-size: 22px;
                    background: transparent;
                    border: none;
                    outline: none;
                    margin: 5px;
                }

                button:hover{
                    color: #f3c669;
                }
            }

            .description{
                margin-bottom: 38px;

                p{
                    margin-bottom: 16px;
                    color: rgba($color: #fff, $alpha: 0.8);
                }
            }

            .listing{
                margin: 35px 0;

                ul{
                    list-style: none;
                    li{
                        padding: 15px 0;
                        display: flex;
                        justify-content: space-between;
                        a{
                            text-decoration: none;
                            color: #fff;
                            overflow: hidden;
                        }

                        a:hover{
                            color: #f3c669;
                        }

                        a:visited{
                            color: #000;
                        }
                        

                        span{
                            color: rgba($color: #fff, $alpha: 0.7);
                        }
                    }
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
            anime: {},
            episodes: [],
            first: {},
            last: {}
        }
    },

    methods: {
        getOne(anime){
            VidService.getAnime(anime)
            .then(response => {
                this.anime = response.data
            }).catch(e => {
                
            })
        },

        getEpisodes(anime){
            VidService.getEpisodes(anime)
            .then((result) => {
                this.episodes = result.data
                this.first = this.episodes[this.episodes.length-1]
                this.last = this.episodes[0]
            }).catch((err) => {
              console.log(err.response.data)  
            })
        },

        reverseListe(){
            this.episodes = this.episodes.reverse()
        }
    },


    mounted(){
        this.getOne(this.$route.params.anime)
        this.getEpisodes(this.$route.params.anime)
    }
}
</script>