import AboutPreview from "../components/home/AboutPreview";
import Expertise from "../components/home/Expertise";
import Hero from "../components/home/Hero";
import Leadership from "../components/home/Leadership";
import SpeakingCTA from "../components/home/SpeakingCTA";
import TestimonialsPreview from "../components/home/TestimonialsPreview";
import WACPreview from "../components/home/WACPreview";

const Home = () => {
	return (
		<>
			<Hero />
			{/* Next sections will go here */}
			<AboutPreview />
			<Expertise />
			<WACPreview />
			<Leadership />
			<TestimonialsPreview />
			<SpeakingCTA />
		</>
	);
};

export default Home;
