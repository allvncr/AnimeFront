import http from "../http-common"

class AuthService{
    login(user){
        return http
            .post('account/login/', {
                username: user.username,
                password: user.password
            })
            .then(response => {
                if(response.data.token) {
                    localStorage.setItem('user', JSON.stringify(response.data))
                }
                return response.data
            })
    }

    logout(){
        localStorage.removeItem('user')
    }

    register(user) {
        return http.post('account/register/', {
            username: user.username,
            password: user.password,
            password2: user.password2,
            email: user.email,
        })
    }
}

export default new AuthService()