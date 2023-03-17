import { useState, useEffect,memo } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/shared/loader/Loader';
import { getReviews } from 'components/shared/services/api';
import { Author, ReviewsItem, ReviewsList, ReviewsWrapper } from './ReviewsPage.styled';

const ReviewsPage = () => {
const [movies, setMovies] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const { movieId } = useParams();
    
   useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const results = await getReviews(movieId);
        // console.log(results);
        if (results.length === 0) {
          toast.info('Sorry, reviews not found');
          }
          setMovies(results);
      } catch ({ response }) {
        setError(response.data.message);
        toast.error(`Sorry,${response.data.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
   }, [movieId]);
    
    const element = movies.map(({ content, id, author }) => (
    <ReviewsItem>
      <Author>{author}</Author>
      <p>{content}</p>
    </ReviewsItem>
  ));

  return (
    <>
      {loading && <Loader />}
      {error && <ToastContainer theme="colored" />}
      {movies.length > 0 && (
        <ReviewsWrapper>
          <ReviewsList>{element}</ReviewsList>
        </ReviewsWrapper>
      )}
    </>
  );
};

export default memo(ReviewsPage);