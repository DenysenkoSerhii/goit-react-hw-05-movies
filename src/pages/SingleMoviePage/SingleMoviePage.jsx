import {useState, useEffect} from "react";
import {Link, Outlet, useParams, useNavigate, useLocation} from "react-router-dom";

import { getSingleMovie } from "../../shared/api/movies";

const SingleMoviePage = () => {
    const [state, setState] = useState({
        item: {},
        loading: false,
        error: null,
    });
    const {id} = useParams();
    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from || "/movies";

    useEffect(()=> {
        const fetchMovies = async() => {
            try {
                setState(prevState => ({
                    ...prevState,
                    loading: true,
                    error: null,
                }));
    
                const result = await getSingleMovie(id);
                setState(prevState => {
                    return {
                        ...prevState,
                        item: result,
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
    }, [id, setState]);

    const goBack = () => navigate(from);

    const { overview, poster_path, title, vote_average} = state.item;
    const imagePath =(path)=> `https://image.tmdb.org/t/p/w500${path}`;

    return (
        <div className="container">
            <button onClick={goBack}>Go Back</button>
            <h2>{title}</h2>
             <div>
            <img src={imagePath(poster_path)} alt={title} />
            </div>
            {!!vote_average && (
              <p>User Score: {Math.round(vote_average * 10)}%</p>
            )}
            <h3>Genres</h3>
            <p>
              
            </p>
                      
            
            <p>{overview}</p>
            <div >
          <h4>Additional information</h4>
          <ul>
            <li >
              <Link state={{ from }} to={`/movies/${id}/cast`}>Cast</Link>
            </li>
            <li >
             <Link state={{ from }} to={`/movies/${id}/reviews`}>Reviews</Link>
            </li>
          </ul>
        </div>
                    
            <Outlet />
        </div>
        
    )
}

export default SingleMoviePage;