import http from "../http-common"

class UserService{
    getChannels(){
        return http.get(`/account/channel/all/`)
    }

    getChannel(username){
        return http.get(`/account/channel/${username}/`)
    }

    getUser(id){
        return http.get(`/account/user/${id}/`)
    }

    getPlaylists(id){
        return http.get(`/account/user/${id}/playlist/all`)
    }


}

export default new UserService()