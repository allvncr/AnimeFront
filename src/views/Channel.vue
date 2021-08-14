<template>
    <div class="channel">
        <Header title="Channel" home=true></Header>
        <div class="body">
            <div class="channel__banner">
                <p>{{ user.username }} Channel</p>
            </div>
            <div class="channel-avatar">
                <div class="avatar">
                    <img src="https://dynamic-assets.mobilius.top/images/default-avatars/23.png">
                </div>
                <div class="user_name">{{ user.username }}<span>#{{ user.id }}</span></div>
            </div>
            <div class="flex">
                <div class="channel-panel">
                    <div class="briefs">
                        <i class="fas fa-link"></i>
                        <div class="cut_text">hanime.tv/channels/{{ user.username }}-{{ user.id }}</div>
                    </div>
                    <div class="briefs">
                        <div class="brief_item">
                            <div class="item_number">4</div>
                            <div class="item_context">Channel Views</div>
                        </div>
                        <div class="brief_item">
                            <div class="item_number">0</div>
                            <div class="item_context">Comments</div>
                        </div>
                    </div>
                    <div class="briefs">
                        <div class="brief_item">
                            <div class="item_number">0</div>
                            <div class="item_context">Upvotes</div>
                        </div>
                        <div class="brief_item">
                            <div class="item_number">0</div>
                            <div class="item_context">Downvotes</div>
                        </div>
                    </div>
                    <div class="csp-data">
                        <div class="flex">
                            <i class="fas fa-info"></i>
                            <div class="header">Description</div>
                        </div>
                        <div class="section-text">
                            <div class="data-null" v-if="channel.description==''">
                                <i class="fas fa-border-none"></i>
                                Nothing here yet!
                            </div>
                            <div v-else>{{ channel.description }}</div>
                        </div>
                    </div>
                    <div class="csp-data">
                        <div class="flex">
                            <i class="fas fa-globe"></i>
                            <div class="header">LOCATION</div>
                        </div>
                        <div class="section-text">
                            <div class="data-null" v-if="channel.location==''">
                                <i class="fas fa-border-none"></i>
                                Nothing here yet!
                            </div>
                            <div v-else>{{ channel.location }}</div>
                        </div>
                    </div>
                    <div class="csp-data">
                        <div class="flex">
                            <i class="fas fa-globe"></i>
                            <div class="header">Sexe</div>
                        </div>
                        <div class="section-text">
                            <div class="data-null" v-if="channel.sexe==''">
                                <i class="fas fa-border-none"></i>
                                Nothing here yet!
                            </div>
                            <div v-else>{{ channel.sexe }}</div>
                        </div>
                    </div>
                </div>
                <div class="channel-content">
                    <div class="tabs_bars">
                        <a class="tabs_div">
                            <i class="fas fa-list"></i>
                            <div>Playlist</div>
                        </a>
                    </div>
                    <div class="tabs-items">
                        <div class="header">
                            {{ total }} items
                        </div>
                        <a href="" v-for="(play, i) in playlists" :key="i">
                            <img src="https://static3.cbrimages.com/wordpress/wp-content/uploads/2020/05/Your-Lie-in-April-e1589779576366.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5">
                            <div class="overlay">
                                <div>{{ play.tracks.length }}</div>
                                <i class="fas fa-list"></i>
                            </div>

                            <div class="text">
                                <div class="title">{{ play.name }}</div>
                                <div class="hint">Updated {{ play.updated }}</div>
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

    .channel{
        background-color: #303030;
    }

    .body{
        position: relative;
    }

    .channel__banner{
        background: url(https://i1.wp.com/ba.apperoni.top/images/temp_bg_top.png?quality=100) 
                    center center / cover no-repeat rgb(23, 24, 26);
        width: 100%;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
        p{
            font-size: 22px;
            text-shadow: 0 1px 3px #17181a;
        }
    }

    .channel-avatar{
        position: relative;
        padding: 0 24px 24px 184px;
        height: 84px;
        background: #212121;

        .avatar{
            position: absolute;
            top: -68px;
            left: 24px;

            img{
                width: 136px;
                height: 136px;
                border-radius: 50%;
                border: 4px solid #212121;
            }
        }

        .user_name{
            font-size: 32px;
            line-height: 68px;
            padding-top: 8px;
            text-shadow: 0 1px 3px #111;

            span{
                font-size: 22px;
                color: rgba(255,255,255,.5);
            }
        }
    }

    .flex{
        display: flex;
        justify-content: center;
        background: #424242;

        .channel-panel{
            width: 30%;
            margin: 24px 0 24px 24px;
            background-color: #212121;

            .briefs{
                font-size: 16px;
                font-weight: 800;
                height: 72px;
                border-bottom: 1px solid rgba(255,255,255,.15);
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;

                i{
                    display: inline-flex;
                    justify-content: center;
                    width: 48px;
                    font-size: 24px;
                    color: #eee;
                    line-height: 1; 
                }

                .brief_item{
                    width: 50%;
                    min-width: 50%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    border-left: 1px solid rgba(255,255,255,.15);

                    .item_number{
                        font-size: 18px;
                        line-height: 18px;
                        font-weight: 400;
                        margin-top: 8px;
                        color: #eee;
                    }

                    .item_context {
                        font-size: 14px;
                        line-height: 24px;
                        font-weight: 400;
                        color: #939496;
                    }
                }
            }

            .csp-data{
                margin-top: 24px;
                padding-right: 16px;

                .flex{
                    display: flex;
                    align-items: center;
                    background-color: inherit;
                    justify-content: start;

                    i{
                        display: inline-flex;
                        justify-content: center;
                        width: 48px;
                        color: #eee;
                        font-size: 24px;
                        line-height: 1;
                    }

                    .header{
                        text-transform: uppercase;
                        font-size: 16px;
                        color: #eee;
                    }
                }

                .section-text{
                    color: #939496;
                    padding: 8px 0 8px 48px;
                    min-height: 48px;
                    white-space: pre-wrap;

                    .data-null{
                        padding: 8px 0;
                        opacity: .5;
                        color: #939496;
                        min-height: 48px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }
            }
        }

        .channel-content{
            width: 70%;
            padding: 24px;

            .tabs_bars{
                background: #212121;
                

                .tabs_div{
                    width: 10%;
                    height: 72px;
                    text-decoration: none;
                    min-width: 140px;
                    color: #fff;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    font-size: 14px;
                    font-weight: 600;
                    text-transform: uppercase;
                    padding: 6px 12px;
                    border-bottom: 2px solid #f3c669;

                    i{
                        margin-bottom: 8px;
                        font-size: 24px;
                    }
                }
            }

            .tabs-items{
                display: flex;
                flex-wrap: wrap;

                .header{
                    margin-top: 16px;
                    color: rgba(255,255,255,.5);
                    font-size: 14px;
                    width: 100%;
                }

                a{
                    position: relative;
                    width: 48%;
                    height: 250px;
                    margin-right: 16px;
                    margin-bottom: 52px;
                    background: #fff;
                    cursor: pointer;
                    text-decoration: none;

                    img{
                        width: 100%;
                        height: 250px;
                    }

                    .overlay{
                        background: rgba(17,17,17,.75);
                        position: absolute;
                        right: 0;
                        top: 0;
                        bottom: 0;
                        color: #fff;
                        width: 128px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        font-size: 18px;

                        i{
                            font-size: 32px;
                            color: #eee;
                            margin-top: 8px;
                        }
                    }

                    .text{
                        position: absolute;
                        bottom: -50px;
                        padding: 8px 0;
                        font-size: 18px;
                        width: 100%;
                        color: #eee;

                        .hint{
                            font-size: 14px;
                            font-weight: 300;
                            color: rgba(238,238,238,.5);
                            display: block;
                        }
                    }
                }
            }
        }
    }

</style>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import UserService from "@/services/UserService"

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
            channel: {},
            user: {},
            playlists: [],
            total: 0,
        }
    },

    computed: {
        loggedIn(){
            var bool = false
            if (this.$store.state.auth.status.loggedIn && this.$store.state.auth.user != null) {
                bool = true
            }
            return bool
        },
    },

    methods: {
        getChannel(){
            UserService.getChannel(this.$store.state.auth.user.username)
            .then((result) => {
                this.channel = result.data
            }).catch((err) => {
                console.log(err.response.data)
            })
        },

        getUser(){
            UserService.getUser(this.$store.state.auth.user.id)
            .then((result) => {
                this.user = result.data
            }).catch((err) => {
                console.log(err.response.data)
            })
        },

        getPlay(){
            UserService.getPlaylists(this.$store.state.auth.user.id)
            .then((result) => {
                this.playlists = result.data
                this.total = this.playlists.length
            }).catch((err) => {
                console.log(err)
            })
        },

    },


    mounted(){
        if (!this.loggedIn)
            this.$router.push({name: "Home" })
        
        this.getChannel()
        this.getUser()
        this.getPlay()
    }
}
</script>