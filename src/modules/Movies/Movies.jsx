import {useState, useEffect} from "react";


import MoviesList from "../MoviesList/MoviesList";

import { getMovies } from '../../shared/api/movies';

const Movies = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    });

    useEffect(()=> {
        const fetchMovies = async() => {
            try {
                setState(prevState => ({
                    ...prevState,
                    loading: true,
                    error: null,
                }));
    
                const result = await getMovies();
                setState(prevState => {
                    return {
                        ...prevState,
                        items: [...result]
                    }
                })
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    error,
                }))
            }
            finally {
                setState(prevState => {
                    return {
                        ...prevState,
                        loading: false,
                    }
                })
            }
        };

        fetchMovies();
    }, [setState]);

    const {items, loading, error} = state;



    return (
        <div>
            {items.length > 0 && <MoviesList items={items} />}
            {loading && <p>...load movies</p>}
            {error && <p>...Movies load failed</p>}
        </div>
        
    )
}

export default Movies;