<template>
    <div class="account">
        <Header title="My Account" home=true></Header>
        <div class="body">
            <div class="left">
                <div class="pannel">
                    <h3>Settings</h3>
                    <div class="active">Account</div>
                </div>
            </div>
            <div class="right">
                <h2>Account</h2>
                <div class="profile-card" v-if="!edit">
                    <div class="edit" @click="edit = !edit">Edit</div>
                    <div class="avatar">
                        <img :src="channel.photo">
                    </div>
                    <div class="name">
                        {{user.username}}
                        <span>#{{user.id}}</span>
                    </div>
                    <div class="location">{{channel.location}}</div>
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
                    <div class="presence">
                        <div class="item">
                            <i class="fas fa-link"></i>
                            <div class="text">anime.tv/channels/{{user.username}}-{{user.id}}</div>
                        </div>
                        <div class="item">
                            <i class="fas fa-history"></i>
                            <div class="text">Created {{channel.created}}</div>
                        </div>
                    </div>
                    <div class="action">
                        <button>
                            <a href="/channel">
                                <i class="fas fa-user-circle"></i>
                                My channel
                            </a>
                        </button>
                    </div>
                </div>
                <div class="profile-card" v-else>
                    <div class="avatar modify">
                        <img :src="channel.photo">
                        <i class="fas fa-image"></i>
                    </div>
                    <form action="">
                        <div class="input-group">
                            <div class="edit-hint">
                                Username
                                <span>&nbsp;*</span>
                            </div>
                            <input type="text" placeholder="Username" required>
                            <div class="edit-hint">
                                Email
                                <span>&nbsp;*</span>
                            </div>
                            <input type="email" placeholder="Email Address" required>
                            
                            <div class="edit-hint">
                                CURRENT PASSWORD
                                <span>&nbsp;*</span>
                            </div>
                            <input type="password" placeholder="Password" required autocomplete="new-password">
                            <div class="edit-hint">
                                NEW PASSWORD
                                <span>&nbsp;*</span>
                            </div>
                            <input type="password" placeholder="New Password" required>
                        </div>
                        <div class="action">
                            <button @click="edit = !edit" class="cancel">Cancel</button>
                            <button type="submit">Save</button>
                        </div>
                    </form>
                </div>
                <button>Delete Account</button>
            </div>
        </div>
        <Footer></Footer>
    </div>    
</template>


<style lang="scss" scoped>
    .account{
        background-color: #151515;
    }

    .body{
        display: flex;

        .left{
            display: flex;
            justify-content: flex-end;
            width: 30%;
            background-color: #424242;

            .pannel{
                padding: 24px 16px 0 0;

                h3{
                    padding-left: 16px;
                    font-weight: 700;
                    font-size: 13px;
                    text-transform: uppercase;
                    color: rgba(255,255,255,.12);
                    margin-bottom: 8px;
                }

                .active{
                    width: 144px;
                    font-size: 18px;
                    padding: 8px 16px;
                    border-radius: 2px;
                    background-color: #f3c669;
                    border-color: #f3c669;
                    cursor: pointer;
                }
            }
        }

        .right{
            width: 70%;
            padding: 24px;
            background-color: #3A3C3F;

            h2{
                font-size: 18px;
                margin-bottom: 16px;
            }

            .profile-card{
                width: 70vw;
                max-width: 500px;
                background-color: #303030;
                border-radius: 3px;
                overflow: hidden;
                border: 1px solid rgba(23,24,26,.25);
                display: flex;
                align-items: center;
                flex-direction: column;
                position: relative;

                .edit{
                    background: #f3c669;
                    padding: 8px 16px;
                    font-weight: 600;
                    color: #eee;
                    cursor: pointer;
                    border: 1px solid #f3c669;
                    position: absolute;
                    top: 0;
                    right: 0;
                }

                .modify{
                    cursor: pointer;
                }

                .avatar{
                    margin: 32px 0;
                    position: relative;
                    width: 19vw;
                    min-width: 100px;
                    max-width: 256px;
                    min-height: 64px;

                    img{
                        border: 3px solid rgba(23,24,26,.25);
                        border-radius: 50%;
                        width: 100%;
                        height: 100%;
                    }

                    i{
                        font-size: 32px;
                        line-height: 1;
                        position: absolute;
                        top: 0;
                        right: 0;
                    }
                }

                .name{
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 28px;
                    text-align: center;
                    font-weight: 400;
                    color: #eee;
                    height: 44px;

                    span{
                        color: rgba(255,255,255,.25);
                        font-size: 20px;
                    }
                }

                .location{
                    width: 100%;
                    font-size: 14px;
                    color: #939496;
                    font-weight: 400;
                    text-align: center;
                    margin-bottom: 32px;
                    text-transform: uppercase;
                }

                .briefs{
                    width: 100%;
                    height: 72px;
                    border-bottom: 1px solid rgba(255,255,255,.15);
                    display: flex;
                    align-items: center;

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
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        border: 1px solid rgba(255,255,255,.15);

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

                .presence{
                    border-bottom: 1px solid rgba(255,255,255,.15);
                    width: 100%;
                    color: #eee;
                    font-size: 15px;

                    .item{
                        padding: 16px 16px 8px;
                        cursor: pointer;
                        display: flex;
                        align-items: center;

                        i{
                            display: inline-flex;
                            justify-content: center;
                            width: 48px;
                        }

                    }
                }

                .action{
                    width: 100%;
                    margin: 12px 0;
                    display: flex;
                    justify-content: center;

                    button{
                        height: 44px;
                        margin: 6px 8px;
                        padding: 0 32px;
                        border-radius: 0;
                        border: none;

                        i{
                            margin-right: 12px;
                        }

                        a{
                            color: #f3c669;
                            font-size: 15px;
                            text-decoration: none;
                        }
                    }

                    button:hover{
                        background: rgba($color: #f3c669, $alpha: 0.2);
                    }
                }

            }

            button{
                cursor: pointer;
                margin: 64px auto 0 auto;
                color: #e53935;
                border: 1px solid currentColor;
                border-radius: 28px;
                display: inline-flex;
                height: 36px;
                align-items: center;
                text-transform: uppercase;
                font-size: 14px;
                font-weight: 600;
                outline: 0;
                background: transparent;
                min-width: 88px;
                padding: 0 16px;
            }

            button:hover{
                background: rgba($color: #e53935, $alpha: 0.2);
            }
        }
    }

    form{
        width: 95%;
        margin: 0 auto;
    
        .input-group{    
            width: 100%;
            border-bottom: 1px solid rgba(255,255,255,.15);
        }

        .edit-hint{
            margin-left: 3px;
            margin-bottom: 8px;
            font-size: 14px;
            font-weight: 800;
            letter-spacing: .5px;
            text-transform: uppercase;
            color: #eee;

            span{
                color: #e53935;
            }
        }

        input{
            height: 32px;
            border: 1px solid rgba(48,48,48,.25);
            font-size: 16px;
            width: 95%;
            background: rgba(17,17,17,.55);
            outline: none;
            caret-color: #f3c669;
            margin-bottom: 24px;
            padding-left: 8px;
        }

        .action{
            width: 100%;
            margin: 12px 0;
            display: flex;
            justify-content: flex-end !important;

            button{
                background: #f3c669 !important;
                padding: 8px 16px;
                font-weight: 600;
                color: #eee !important;
                cursor: pointer;
                border: 1px solid #f3c669 !important;
            }

            .cancel{
                color: #eee !important;
                background: transparent !important;
                border: none !important;
            }

            .cancel:hover{
                background: rgba($color: #fff, $alpha: 0.2) !important;
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
            total: 0,
            edit:0,
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
                console.log(this.channel)
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


    },


    mounted(){
        if (!this.loggedIn)
            this.$router.push({name: "Login" })
        
        this.getChannel()
        this.getUser()
    }
}
</script>