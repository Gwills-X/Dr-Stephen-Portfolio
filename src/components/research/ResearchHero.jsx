import { motion } from "framer-motion";

const ResearchHero = () => {
  return (
    <section className='bg-gray-50 py-24 px-6'>
      <div className='max-w-5xl mx-auto text-center'>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
          Research Profile
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className='text-[15px]  text-gray-700 leading-relaxed'>
          I am an emerging researcher in <strong>Bioinorganic Chemistry</strong>{" "}
          with a PhD from the University of Sheffield, specialising in the
          design of luminescent transition-metal complexes and nanomaterials for
          anticancer applications. I have authored{" "}
          <strong>~18 peer-reviewed publications</strong>, including high-impact
          reviews in Chemical Society Reviews and Materials Chemistry Frontiers,
          with over <strong>654 citations (h-index 18)</strong>. My research
          experience spans Nigeria, China, and the UK, giving me a strong
          interdisciplinary profile at the interface of synthetic inorganic
          chemistry, nanomedicine, optical imaging, and molecular biology. I
          began my academic journey in Nigeria, graduating top of my class and
          receiving the Faculty of Science Best Graduating Student Award, before
          completing a master’s degree in China focused on luminescent
          metal-based sensors for biological targets. During my PhD in the
          Thomas Group (Sheffield), I designed luminescent metal complexes and
          nanoparticles for imaging-guided anticancer therapy, contributing to
          advances in DNA targeting, cellular imaging, and nanoparticle-mediated
          drug delivery. I also co-authored major reviews on nanoscopy and
          super-resolution microscopy, leading sections on luminescent
          nanoparticles and molecular imaging technologies. My work is driven by
          a commitment to translating metal-based systems into clinically
          relevant diagnostic and therapeutic platforms. I am fluent in both
          English and Mandarin Chinese.
        </motion.p>
      </div>
    </section>
  );
};

export default ResearchHero;
