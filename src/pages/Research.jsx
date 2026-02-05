import { motion } from "framer-motion";

import ResearchHero from "../components/research/ResearchHero";

import Publications from "../components/research/Publications";
import Gallery from "../components/research/Gallery";
import Talks from "../components/research/Talks";
import ResearchMetrics from "../components/research/ResearchMetrics";

const Research = () => {
	return (
		<div >
			{/* Accent */}

<ResearchHero />
<ResearchMetrics />
<Publications />
<Gallery />
<Talks />

					</div>
	);
};

export default Research;
