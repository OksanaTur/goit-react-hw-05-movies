import PropTypes from 'prop-types';
import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MoviesItem, MovieList } from './MovieList.styled';


const MoviesList = ({ movies }) => {
    const location = useLocation();
    // console.log(location);

    const elements = movies.map(({ title, id }) => (
        <MoviesItem key={id}>
            <Link style={{
                textDecoration: 'none',
                color: 'black',
            }}
                state={{ from: location }}
                to={`/movie/${id}`}
            >
                {title}
            </Link>
        </MoviesItem>
    ));
    return (
        <>
            <MovieList>{elements}</MovieList>
        </>
    )
};

export default memo(MoviesList);

MoviesList.defaultProps = { movies: [], };

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        })
    ),
};
