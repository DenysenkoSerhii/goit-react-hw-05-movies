import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: '81e207fecffa1302d8e26d6b5f9ddafd',
    }
});


export const getMovies = async() => {
    const {data} = await instance.get("trending/movie/day", {
        params: {
          
        }
    });
    
    return data.results;
}

export const getSingleMovie = async(id) => {
    const {data} = await instance.get(`movie/${id}`);

    return data;
}

export const searchMovies = async (query) => {
    const {data} = await instance.get("/search/movie", {
        params: {
            query,
        }
    });
    
    return data.results;
}

export const getMovieComments = async(id) => {
    const {data} = await instance.get(`/movie/${id}/reviews`);

    return data.results;
}
export const getMovieCredits = async(id) => {
    const {data} = await instance.get(`/movie/${id}/credits`);
console.log(data.cast);
    return data.cast;
}