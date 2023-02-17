import { memo } from "react";
import { Link, useLocation } from "react-router-dom";

const MoviesList = ({items}) => {
    const location = useLocation();

    const elements = items.map(({id, title}) => 
    <Link  key={id} to={`/movies/${id}`} state={{from: location}}><li>{title}
        </li></Link>);
 
    return <ol>{elements}</ol>
}

export default memo(MoviesList);

MoviesList.defaultProps = {
    items: []
}