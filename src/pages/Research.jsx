import { motion } from "framer-motion";

import ResearchHero from "../components/research/ResearchHero";

import Publications from "../components/research/Publications";
import Gallery from "../components/research/Gallery";
import Talks from "../components/research/Talks";

const Research = () => {
	return (
		<div >
			{/* Accent */}
{/* <ResearchSEO /> */}
<ResearchHero />
{/* <ResearchMetrics /> */}
<Publications />
<Gallery />
<Talks />

					</div>
	);
};

export default Research;
