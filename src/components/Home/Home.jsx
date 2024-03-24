import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturesJobs from "../FeaturedJobs/FeaturesJobs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturesJobs></FeaturesJobs>
        </div>
    );
};

export default Home;