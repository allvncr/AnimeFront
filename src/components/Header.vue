<template>
    <div class="header">
        <nav :class="{ head: !home}">
            <div>
                <button class="nav_toggle" @click="mask = !mask">
                    <i class="fas fa-bars"></i>
                </button>
                <a href="/" class="logo-text">
                    anime
                    <span class="highlight">.</span>
                    tv
                </a>
                <span class="logo-text toolbar">{{title}}</span>
            </div>
            
            <input type="text" placeholder="Search" v-if="home=='true'" onclick="window.location.href='/search'">
            <input type="text" maxlength="100" placeholder="Search" v-model="search" @keyup="find" autofocus v-else>

            <div class="user-option" v-if="!loggedIn">
                <a href="/login">Sign In</a>
                <a href="/register">Create Account</a>
            </div>

            <div class="user-option" v-else>
                <button @click="menu = !menu">
                    <img :src="channel.photo">
                </button>
            </div>
        </nav>
        <transition name="menu">
        <div class="menu" v-show="menu">
            <a href="/account" class="user-option">
                <button>
                    <img :src="channel.photo">
                </button>
                <div class="user-options">
                    <div class="username">
                        {{ user.username }}<span>#{{ user.id }}</span>
                    </div>
                    <div class="email">{{ user.email }}</div>
                </div>
            </a>
            <div class="list">
                <div>
                    <a href="/channel">
                        <div class="tile__action">
                            <i class="fas fa-user-circle"></i>
                        </div>
                        <div class="tile__content">My Channel</div>
                    </a>
                </div>
                <div>
                    <a href="/account">
                        <div class="tile__action">
                            <i class="fas fa-cog"></i>
                        </div>
                        <div class="tile__content">Settings</div>
                    </a>
                </div>
                <div>
                    <a @click="logout">
                        <div class="tile__action">
                            <i class="fas fa-power-off"></i>
                        </div>
                        <div class="tile__content">Sign Out</div>
                    </a>
                </div>
            </div>
        </div>
        </transition>

        <transition name="mask">
            <div class="simplebar" v-show="mask">
                <div class="list">
                    <div>
                        <a href="/">
                            <div class="tile__action">
                                <i class="fas fa-home"></i>
                            </div>
                            <div class="tile__content">Home</div>
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            <div class="tile__action">
                                <i class="fas fa-fire"></i>
                            </div>
                            <div class="tile__content">Trending</div>
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            <div class="tile__action">
                                <i class="fas fa-random"></i>
                            </div>
                            <div class="tile__content">Random</div>
                        </a>
                    </div>
                    <div>
                        <a href="/search">
                            <div class="tile__action">
                                <i class="fas fa-search"></i>
                            </div>
                            <div class="tile__content">Search</div>
                        </a>
                    </div>
                    <div>
                        <a href="/browse">
                            <div class="tile__action">
                                <i class="fas fa-clouds"></i>
                            </div>
                            <div class="tile__content">Browse</div>
                        </a>
                    </div>
                </div>
                <div class="list" v-show="loggedIn">
                    <div class="subheader">
                        Channel
                    </div>
                    <div>
                        <a href="/">
                            <div class="tile__action">
                                <i class="fas fa-history"></i>
                            </div>
                            <div class="tile__content">History</div>
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            <div class="tile__action">
                                <i class="fas fa-clock"></i>
                            </div>
                            <div class="tile__content">Watch Later</div>
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            <div class="tile__action">
                                <i class="fas fa-heart"></i>
                            </div>
                            <div class="tile__content">Liked Videos</div>
                        </a>
                    </div>
                </div>
                <div class="list" v-if="!loggedIn">
                    <div class="subheader">
                        Account
                    </div>
                    <div>
                        <a href="/">
                            <div class="tile__action">
                                <i class="fas fa-sign-in-alt"></i>
                            </div>
                            <div class="tile__content">Sign in</div>
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            <div class="tile__action">
                                <i class="fas fa-user-plus"></i>
                            </div>
                            <div class="tile__content">Create account</div>
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            <div class="tile__action">
                                <i class="fas fa-comment-exclamation"></i>
                            </div>
                            <div class="tile__content">Contact us</div>
                        </a>
                    </div>
                </div>
                <div class="list" v-else>
                    <div class="subheader">
                        Account
                    </div>
                    <div>
                        <a href="/channel">
                            <div class="tile__action">
                                <i class="fas fa-user-circle"></i>
                            </div>
                            <div class="tile__content">My Channel</div>
                        </a>
                    </div>
                    <div>
                        <a href="/account">
                            <div class="tile__action">
                                <i class="fas fa-cog"></i>
                            </div>
                            <div class="tile__content">Settings</div>
                        </a>
                    </div>
                    <div>
                        <a @click="logout">
                            <div class="tile__action">
                                <i class="fas fa-power-off"></i>
                            </div>
                            <div class="tile__content">Sign Out</div>
                        </a>
                    </div>
                </div>
                <div class="list" style="margin-bottom:24px">
                    <div class="subheader">
                        Ressources
                    </div>
                    <div>
                        <a href="/">
                            <div class="tile__action">
                                <i class="fas fa-gavel"></i>
                            </div>
                            <div class="tile__content">Terms of use</div>
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            <div class="tile__action">
                                <i class="fas fa-user-secret"></i>
                            </div>
                            <div class="tile__content">Privacy</div>
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            <div class="tile__action">
                                <i class="far fa-cookie-bite"></i>
                            </div>
                            <div class="tile__content">Cookies Policy</div>
                        </a>
                    </div>
                </div>
            </div>
        </transition>

        <div class="overlay" v-show="mask" @click="mask = !mask"></div>
    </div>    
</template>

<style lang="scss" scoped>
    .head{
        background-color: #000;
    }
    nav{
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .nav_toggle{
            background: transparent;
            color: #fff;
            cursor: pointer;
            margin: 6px 0 6px 17px;
            border-radius: 50%;
            width: 36px;
            height: 36px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border: none;
            outline: none;

            i{
                font-size: 20px;
            }
        }

        .nav_toggle:hover{
            background-color: rgba($color: #fff, $alpha: 0.17);
        }

        .logo-text{
            text-transform: lowercase;
            text-shadow: 0 1px 3px #17181a;

            .highlight{
                color: #f3c669;
                text-shadow: 0 0 1px #f3c669;
            }
        }

        a{
            text-decoration: none;
            padding: 16px 28px;
            color: #fff;
        }

        a:hover{
            background-color: rgba($color: #fff, $alpha: 0.17);
        }

        .toolbar{
            @media only screen and (max-width: 1165px){
                display: none;
            }
            margin: 0 24px;
            text-transform: capitalize;
        }

        input{
            @media only screen and (max-width: 1165px){
                display: none;
            } 
            background-color: rgba(255, 255, 255, 0.1);
            width: 40%;
            font-size: 16px;
            height: 40px;
            outline: none;
            border: none;
            color: rgba($color: #fff, $alpha: 0.7);
            text-align: center;
            caret-color: #f3c669;
        }

        input::placeholder{
            text-align: left;
            padding-left: 15px;
            color: rgba($color: #fff, $alpha: 0.6);
        }

        input:focus{
            border-bottom: 2px solid #f3c669;
        }

        .user-option{
            @media only screen and (max-width: 1165px){
                margin: 0;

                a:last-child{
                    display: none;
                }
            }
            margin-right: 16px;
            
            a{
                font-size: 17.5px;
                font-weight: 500;
                cursor: pointer;
                margin: 0 8px;
                padding: 16px 28px;
                text-shadow: 0 1px 3px #17181a;
                text-transform: uppercase;
            }
            a:hover{
                background-color: rgba($color: #fff, $alpha: 0.17);
            }

        }

    }
    button{
        margin: 6px 8px;
        background: transparent;
        font-size: 15px;
        display: inline-flex;
        align-items: center;
        border: none;
        outline: 0;
        cursor: pointer;

        img{
            height: 44px;
            width: 44px;
            border-radius: 50%;
            height: 44px;
        }
    }
    .menu{
        z-index: 200;
        background: #3a3c3f;
        width: 258px;
        max-width: 258px;
        position: fixed;
        right: 10px;
        box-shadow: -3px 1px 16px 5px #212121;

        a{
            padding: 16px;
            text-decoration: none;
            color: #fff;
            display: flex;
            align-items: center;
        }

        .user-options{
            min-width: 178px;
            width: 178px;
            max-width: 178px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .username{
                width: 100%;
                font-size: 18px;

                span{
                    color: rgba(255,255,255,.5);
                    font-size: 14px;
                }
            }

            .email{
                font-size: 12px;
                line-height: 18px;
            }
        }

        .list{
            background: #303030;
            padding: 8px 0;

            a{
                display: flex;
                padding: 0 16px;
                height: 48px;
                font-size: 16px;
                justify-content: flex-start;
                align-items: center;
                color: #fff;
                text-decoration: none;
                cursor: pointer;

                .tile__action{
                    min-width: 56px;
                    font-size: 24px;
                    color: rgba(255,255,255,.5);
                }

                .tile__content{
                    text-transform: capitalize;
                    width: 100%;
                    font-size: 16px;
                }
            }

            a:hover{
                background: hsla(0,0%,100%,.12);
            }
        }
    }

    .simplebar{
        @media only screen and (max-width: 1165px){
            width: 60%;
            height: 100%;
            max-height: 100%;
            margin-top: 52px;
            overflow-y: scroll;
        }
        z-index: 200;
        position: fixed;
        top: 0;
        left: 0;
        width: 17%;
        height: 100%;
        max-height: 655px;
        margin-top: 64px;
        max-width: 100%;
        overflow-y: hidden;
        background: #303030;

        .list{
            padding: 8px 0;
            border-top: 2px solid rgba($color: #fff, $alpha: 0.12);

            .subheader{
                text-transform: uppercase;
                padding: 0 16px;
                color: #757575;
                height: 48px;
                display: flex;
                align-items: center;
            }

            a{
                display: flex;
                padding: 0 16px;
                height: 48px;
                font-size: 16px;
                justify-content: flex-start;
                align-items: center;
                color: #fff;
                text-decoration: none;
                cursor: pointer;

                .tile__action{
                    min-width: 56px;
                }

                .tile__content{
                    text-transform: capitalize;
                    width: 100%;
                }
            }

            a:hover{
                background: hsla(0,0%,100%,.12);
            }
        }
    }

    .overlay{
        position   : absolute;
        top        : 0;
        left       : 0;
        width      : 100%;
        height     : 100%;
        background : #000;
        opacity    : 0.8;
        filter     : alpha(opacity=60);
        z-index    : 5;
    }

    .simplebar:hover{
        overflow-y: scroll;
    }

    .mask-enter-active, .mask-leave-active{
        transition: transform .5s ease, opacity .5s ease;
    }

    .mask-enter, .mask-leave-to{
        transform: translateX(-400px);
        opacity: 0;
    }

    .mask-enter-to, .mask-leave{
        transform: translateX(0px);
        opacity: 1;
    }

    .menu-enter-active, .menu-leave-active{
        transition: opacity .2s ease;
    }

    .menu-enter, .menu-leave-to{
        opacity: 0;
    }

    .menu-enter-to, .menu-leave{
        opacity: 1;
    }
</style>

<script>
import UserService from "@/services/UserService"

export default {
    props: {
        title: String,
        home: String
    },

    data(){
        return {
            mask: 0,
            menu: 0,
            search: '',
            channel: {},
            user: {}
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
        find(event){
            this.$emit('childToParent', this.search)
        },

        logout(){
            this.$store.dispatch('logout')
            .then(() => {
                this.$router.go()  
            })
        },

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
        }

        
    },

    mounted(){
        if(this.loggedIn){
            this.getChannel()
            this.getUser()
        }
            
    }


}
</script>