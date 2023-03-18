
import TrendingMovies from "components/modules/TrendingMovies/TrendingMovies";
import { HomePageTitle } from "./HomePage.styled";

const HomePage = () => {
    return (
        <>
            <HomePageTitle>Trending today</HomePageTitle>
            <TrendingMovies/>
        </>
    )
};

export default HomePage;