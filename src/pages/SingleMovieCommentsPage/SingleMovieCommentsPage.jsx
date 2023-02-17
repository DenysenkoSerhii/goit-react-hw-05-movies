import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import { getMovieComments } from "../../shared/api/movies";

const SingleMovieCommentsPage = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
        });
    const {id} = useParams();

    useEffect(()=> {
        const fetchMovies = async() => {
            try {
                setState(prevState => ({
                    ...prevState,
                    loading: true,
                    error: null,
                }));
    
                const result = await getMovieComments(id);
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

        fetchMovies();
    }, [setState]);

    const {items} = state;

    const elements = items.map(({id, author, content}) => (
        <li key={id}>
            <p>Name: {author}.</p>
            {content}
            
        </li>
    ))

    return (
        <div className="container">
            <ul>{elements}</ul>
        </div>
    )
}

export default SingleMovieCommentsPage;