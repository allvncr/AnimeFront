<template>
    <div class="register">
        <Header title="Signin" home=true></Header>
        <div class="body">
            <div class="panel">
                <div class="card__title">
                    <img src="../assets/logo-100.png">
                    <div class="card-title">Create Account</div>
                </div>
                <div class="error" v-show="error" v-for="(text, i) in errorText" :key="i">
                    {{text[0]}}
                </div>
                <form @submit.prevent="handleRegister">
                    <div>
                        <input type="text" minlength="3" maxlength="20" v-model="Ruser.username" placeholder="Username" required autofocus>
                    </div>
                    <div class="hdv-input">
                        <input type="email" minlength="6" maxlength="50" v-model="Ruser.email" placeholder="Email Address" required>
                    </div>
                    <div class="hdv-input">
                        <input type="password" minlength="4" maxlength="20" v-model="Ruser.password" placeholder="Password" required>
                    </div>
                    <div class="hdv-input">
                        <input type="password" minlength="4" maxlength="20" v-model="Ruser.password2" placeholder="Password Confirmation" required>
                    </div>
                    <button class="btn" type="submit">
                        <div class="btn__content">
                            Create Free Account
                        </div>
                    </button>
                     <button class="btn btn_secondary" type="button">
                        <a href="/" class="btn__content">
                            Cancel
                        </a>
                    </button>
                </form>
                <div class="card__action">
                    <div class="action-text">Already a member?</div>
                    <button class="btn btn_secondary">
                        <a href="/login" class="btn__content">
                            Sign In
                        </a>
                    </button>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>    
</template>


<style lang="scss" scoped>

    .btn{
        cursor: pointer;
        outline: 0;
        border: none;
        height: 48px;
        width: 100%;
        max-width: 402px;
        margin: 0 auto;
        color: #fff;
        background-color: #f3c669;
        border-color: #f3c669;
        margin: 24px 8px 0;
        text-transform: uppercase;
        font-weight: 600;

        .btn__content{
            text-decoration: none;
            color: #fff;
            padding: 0 16px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .btn:hover{
        background-color: rgba(243, 198, 105, .75);
    }

    .btn_secondary{
        border: 1px solid rgba(147,148,150,.3);
        margin-bottom: 24px;
        color: #f3c669;
        background-color: transparent;

        .btn__content{
            color: #f3c669;
        }
    }

    .btn_secondary:hover{
        background-color: rgba(243, 198, 105, .25);
    }

    .body{
        padding: 16px 0;
        display: flex;
        align-items: center;
        justify-content: center;

        .panel{
            width: 92vw;
            max-width: 450px;
            min-height: 300px;
            border-radius: 3px;
            background: rgba(0,0,0,.5) !important;

            .error{
                margin: 16px 24px;
                font-size: 16px;
                color: #e53935;
                text-align: center;
            }

            .card__title{
                padding: 16px 16px 0;
                font-size: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;


                img{
                    margin-top: 16px;
                    height: 100px;
                    width: 100px;
                }

                .card-title{
                    margin: 16px 0;
                }
            }

            form{
                padding: 0 16px;

                .hdv-input{
                    margin-top: 24px;
                }

                input{
                    height: 48px;
                    color: #fff;
                    caret-color: #f3c669;
                    background: rgba(17,17,17,.55);
                    border: 1px solid rgba(48,48,48,.25);
                    border-radius: 2px;
                    outline: 0;
                    font-size: 16px;
                    padding: 0 16px;
                    width: 90%;
                }

                input:focus{
                    border-bottom-color: #f3c669;
                }
            }

            .card__action{
                padding: 0 16px;
                border-top: 1px solid rgba(58,60,63,.5);
                background: rgba(17,17,17,.75);
                
                .action-text{
                    margin: 24px 4px 0;
                    text-align: center;
                    font-size: 14px;
                }
            }
        }
    }

</style>

<script>
import Header from "@/components/Header.vue";
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
            Ruser: {
                username: "",
                email: "",
                password: "",
                password2: "",
            },
            error:false,
            errorText: [],
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
        handleRegister(){
            this.$store.dispatch('register', this.Ruser)
            .then(() => {
                this.$store.dispatch('login', this.Ruser)
                .then(() => {
                    this.$router.push({ name: "Home" })
                })
            }).catch(e => {
                this.error = true
                this.errorText = e.response.data
                console.log(e.response.data)
            })
        },
    },


    mounted(){
        if (this.loggedIn)
            this.$router.push({name: "Home" })
    }
}
</script>