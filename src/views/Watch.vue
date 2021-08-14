<template>
    <div class="watch">
        <Header title="Now Playing"  home=true></Header>
        <div class="body">
            <div class="left">
                <div class="player">
                    <!-- <video :src="episode.video"
                        controls
                        preload="auto"
                        poster
                    ></video> -->
                    <iframe :src="episode.video" allowfullscreen></iframe>
                </div>
                <div class="action-bar">
                    <h1>{{ episode.name }}</h1>
                    <p>{{ episode.views }} vue(s)</p>
                    <div class="actions">
                        <div class="btn">
                            <i class="fas fa-heart"></i>
                            <span>{{episode.likes}}</span>
                        </div>
                        <div class="btn">
                            <i class="fas fa-heart-broken"></i>
                            <span>{{episode.dislike}}</span>
                        </div>
                        <a class="btn" target="_blank" :href="episode.download">
                            <i class="fas fa-cloud-download-alt"></i>
                            <span>Download</span>
                        </a>
                        <div class="btn">
                            <i class="fas fa-list"></i>
                            <span>Save</span>
                        </div>
                        <div class="btn">
                            <i class="fas fa-flag"></i>
                            <span>Report</span>
                        </div>
                    </div>
                </div>
                <div class="segment">
                    <div class="cover">
                        <img width="193" height="258" :src="episode.anime.image">
                    </div>
                    <div class="info">
                        <div class="full">
                            <div class="item">
                                <div class="header">Anime</div>
                                <div class="text">
                                    <a :href="'/anime/'+episode.anime.slug">{{ episode.anime.name }}</a>
                                </div>
                            </div>
                            <div class="item">
                                <div class="header">Episodes</div>
                                <div class="text">
                                    {{ episode.anime.total }}
                                </div>
                            </div>
                        </div>
                        
                        <div class="full">
                            <div class="item">
                                <div class="header">Brand</div>
                                <div class="text">
                                    <a href="">{{ episode.anime.studio.name }}</a>
                                </div>
                            </div>
                            <div class="item">
                                <div class="header">Brand Uploads</div>
                                <div class="text">
                                    {{ episode.anime.studio.total }}
                                </div>
                            </div>
                        </div>
                        <div class="full">
                            <div class="item">
                                <div class="header">Upload  Date</div>
                                <div class="text">
                                    {{ episode.updated }}
                                </div>
                            </div>
                            <div class="item">
                                <div class="header">Release Date</div>
                                <div class="text">
                                    {{ episode.anime.date }}
                                </div>
                            </div>
                        </div>
                        
                        <div class="item">
                            <div class="header">Status</div>
                            <p v-if="episode.anime.status=='TN'" class="text">TERMINÉ</p>
                            <p v-if="episode.anime.status=='EC'" class="text">EN COURS</p>
                            <p v-if="episode.anime.status=='PR'" class="text">BIENTOT</p>
                        </div>
                    </div>
                </div>
                <div class="summary">
                    <div class="category">
                        <a href="" v-for="(genre, i) in episode.anime.genres" :key="i">
                            {{ genre.name }}
                        </a>
                    </div>
                    <div class="description">
                        {{ episode.anime.synopsis }}
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="up-next" v-if="nextEpi">
                    <div class="title">Up Next:</div>
                    <div class="video">
                        <a :href="'/anime/'+nextEpi.anime.slug+'/'+nextEpi.slug">
                            <img height="100" :src="nextEpi.anime.image">
                            <div class="video__info">
                                <div class="title">{{ nextEpi.name }}</div>
                                <p>{{ nextEpi.anime.studio.name }}</p>
                                <p>{{ nextEpi.views }} vues</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="up-next" v-if="episodes.length>1">
                    <div class="title">More from <span>{{episode.anime.name}} series</span>:</div>
                    <div class="video" v-for="(epi,i) in episodes" :key="i">
                        <a :href="'/anime/'+epi.anime.slug+'/'+epi.slug" v-if="(epi.slug != episode.slug) && (epi.slug != nextEpi.slug)">
                            <img height="100" :src="epi.anime.image">
                            <div class="video__info">
                                <div class="title">{{ epi.name }}</div>
                                <p>{{ epi.anime.studio.name }}</p>
                                <p>{{ epi.views }} vues</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="up-next" v-else>
                    <div class="title">Others <span>Animes series</span>:</div>
                    <div class="video" v-for="(anime,i) in others" :key="i">
                        <a :href="'/anime/'+anime.slug">
                            <img height="100" :src="anime.image">
                            <div class="video__info">
                                <div class="title">{{ anime.name }}</div>
                                <p>{{ anime.studio.name }}</p>
                                <!-- <p>{{ other.views }} vues</p> -->
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>    
</template>

<style lang="scss" scoped>
    .watch{
        background-color: #212121;
    }

    .body{
        @media only screen and (max-width: 768px){
           flex-direction: column;
        }
        padding-top: 24px;
        display: flex;
        .left{
            width: 75%;
            @media only screen and (max-width: 768px){
                width: 100%;
            }
            .player{
                @media only screen and (max-width: 768px){
                    padding: 0 16px;
                }
                padding: 0 24px;

                video, iframe{
                    @media only screen and (max-width: 768px){
                    height: 300px;
                }
                    background-color: #000;
                    width: 100%;
                    height: 550px;
                }
            }
            
            .action-bar{
                @media only screen and (max-width: 768px){
                    padding: 14px 8px;
                }
                padding: 14px 0 14px 24px;
                border-bottom: 1px solid rgba(255,255,255,.15);

                h1{
                    font-size: 18px;
                    font-weight: 400;
                    max-height: 48px;
                    overflow: hidden;
                    line-height: 24px;
                    text-shadow: 0 1px 1px #000
                }

                p{
                    font-size: 16px;
                    font-weight: 400;
                    color: #9e9e9e;
                }

                .actions{
                    @media only screen and (max-width: 768px){
                        justify-content: flex-start;
                    }
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;

                    .btn{
                        @media only screen and (max-width: 768px){
                            padding: 12px;
                            padding-left: 0;
                        }
                        text-decoration: none;
                        padding: 12px 16px;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 16px;
                        color: #9e9e9e;
                        
                        i{
                            margin-right: 6px;
                        }
                        span{
                            padding-top: 2px;
                        }
                    }
                }

            }

            .segment{
                padding: 24px 0 0 24px;
                display: flex;
                @media only screen and (max-width: 768px){
                    width: 100%;
                    padding-left: 8px;
                    justify-content: space-between;
                }

                .cover{
                    width: 20%;

                    @media only screen and (max-width: 768px){
                        img{
                            width: 153px;
                            height: 200px;
                        }
                    }
                    
                }

                .info{
                    @media only screen and (max-width: 768px){
                        width: 60%;
                    }
                    
                    width: 80%;

                    .full{
                        display: flex;
                        align-items: center;
                    }
                    
                    .item{
                        padding-bottom: 24px;
                        width: 50%;
                        
                        .header{
                            color: #616161;
                            font-size: 16px;
                            margin-bottom: 4px;
                        }
                        .text{
                            color: #9e9e9e;
                            font-size: 16px;
                        }
                        a{
                            font-size: 16px;
                            color: #f3c669;
                            text-decoration: none;
                        }
                        a:hover{
                            color: #fff;
                        }
                    }
                }
            }

            .summary{
                @media only screen and (max-width: 768px){
                    margin: 0;
                    padding: 8px;
                }
                margin: 24px 0 0 24px;
                padding: 24px;
                background-color: #303030;

                a{
                    text-decoration: none;
                    display: inline-flex;
                    justify-content: center;
                    color: #9e9e9e;
                    border: 1px solid #fff;
                    padding: 8px 16px;
                    margin-right: 16px;
                    font-size: 14px;
                    font-weight: 500;
                    border-radius: 2px;
                }

                a:hover{
                    background-color: rgba($color: #fff, $alpha: 0.1);
                }

                .description{
                    margin: 16px 0;
                    font-size: 16px;
                    line-height: 28px;
                    color: #bdbdbd;
                    letter-spacing: .2px;
                }
            }

        }

        .right{
            @media only screen and (max-width: 768px){
                width: 100%;
            }
            width: 25%;
            padding: 0 24px;

            .title{
                margin: 8px 0;
                font-size: 14px;

                span{
                    font-weight: 600;
                }
            }

            .video{
                margin: 8px 0;
                display: flex;

                a{
                    text-decoration: none;
                    display: flex;
                    color: #fff;
                }
                
                .video__info{
                    padding: 0 24px 0 16px;
                    display: flex;
                    flex-direction: column;

                    .title{
                        font-size: 14px;
                        line-height: 18px;
                        max-height: 54px;
                        word-wrap: break-word;
                        overflow: hidden;
                    }

                    p{
                        font-size: 12px;
                        line-height: 18px;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        height: 18px;
                        color: rgba($color: #fff, $alpha: 0.5);
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
            episode: {},
            episodes: [],
            others: [],
            nextEpi: 0
        }
    },

    methods: {
        getOne(episode){
            VidService.getEpisode(episode)
            .then(response => {
                this.episode = response.data
            }).catch(e => {
                console.log(e.response.data)
            })
        },

        getEpisodes(anime){
            var list = []
            VidService.getEpisodes(anime)
            .then((result) => {
                this.episodes = result.data.reverse()
                
                this.episodes.forEach(element => {
                    if(element.slug > this.episode.slug)
                        list.push(element)
                })
                if(list.length!=0)
                    this.nextEpi = list[0]
                else
                    this.nextEpi = 0
                this.episodes = list.slice(0,12)
            }).catch((err) => {
              console.log(err.response.data)  
            })
        },

        getAll(){
            var params = {}
            var list = []
            VidService.getAnimes(params)
            .then((result) => {
                this.others = result.data.list
                this.others.forEach(element => {
                    if(element.slug != this.episode.anime.slug)
                        list.push(element)
                })
                this.others = list
            }).catch((err) => {
              console.log(err.response.data)  
            })
        },

        UpdateView(){
            console.log("Look")
        }
    },


    mounted(){
        this.getOne(this.$route.params.episode)
        this.getEpisodes(this.$route.params.anime)
        this.getAll()
    }
}
</script>