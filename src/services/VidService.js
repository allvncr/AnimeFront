import http from "../http-common"

class VidService {
    getAnimes(params){
        return http.get(`/anime/all/`, {params})
    }

    getAnime(slug){
        return http.get(`/anime/${slug}/`)
    }

    getAllEpisode(){
        return http.get(`/episode/all/`)
    }

    getEpisodes(anime){
        return http.get(`/anime/${anime}/episode/all/`)
    }

    getEpisode(episode){
        return http.get(`/episode/${episode}/`)
    }

    getGenres(){
        return http.get(`/genre/all/`)
    }

    getStudios(){
        return http.get(`/studio/all/`)
    }

    getRandom(){
        return http.get(`/anime/random/`)
    }
}

export default new VidService()