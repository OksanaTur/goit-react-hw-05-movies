import PropTypes from 'prop-types'; 
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { MovieSearchButton, SearchForm, MovieSearchWrapper } from './MovieSearchForm.styled';

const MovieSearchForm = ({ onSubmit }) => {

    const [search, setSearch] = useState('');

    const handleChange = e => setSearch(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(search);
        setSearch('')
    };

    return (
        <MovieSearchWrapper onSubmit={handleSubmit}>
            <SearchForm
                name='search'
                value={search}
                required
                placeholder='Search movie'
                onChange={handleChange} />
            <MovieSearchButton type="submit">
                <FiSearch style={{
                    marginRigth: 5,
                    width: 20,
                    height: 20,
      }}
      />
            </MovieSearchButton >
        </MovieSearchWrapper>
    )
};

export default MovieSearchForm;

MovieSearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};