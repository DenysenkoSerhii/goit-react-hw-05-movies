import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import { getMovieCredits } from "../../shared/api/movies";

const MovieCredits = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
        });
    const {id} = useParams();

    useEffect(()=> {
        const fetchPosts = async() => {
            try {
                setState(prevState => ({
                    ...prevState,
                    loading: true,
                    error: null,
                }));
    
                const result = await getMovieCredits(id);
                setState(prevState => {
                    return {
                        ...prevState,
                        items: result,
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

        fetchPosts();
    }, [setState]);

    const { items } = state;
    const imagePath =(path)=> `https://image.tmdb.org/t/p/w500${path}`;

    const elements = items.map(({id, name, character, profile_path}) => (
        <li key={id}>
            <p>Name: {name}.</p>
            <p>Character: {character}.</p>
            <div>
            <img src={imagePath(profile_path)} alt={name} />
            </div>
            
        </li>
    ))

    return (
        <div className="container">
            <ul>{elements}</ul>
        </div>
    )
}

export default MovieCredits;