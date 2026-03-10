import { motion } from "framer-motion";

export default function FundraiserSection() {
  return (
    <section className='py-20 bg-gray-50'>
      <div className='max-w-6xl mx-auto px-6 grid md:grid-cols-1 gap-12 items-center'>
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Dr. Stephen’s Fundraiser for Cancer Research UK
          </h2>

          <p className='text-gray-700 mb-4 leading-relaxed'>
            Alongside his academic and research work, Dr. Stephen is committed
            to supporting initiatives that advance global health and medical
            research. Through this fundraising campaign, he is raising support
            for Cancer Research UK, one of the world’s leading charities
            dedicated to saving lives through groundbreaking cancer research.
          </p>

          <p className='text-gray-700 mb-6 leading-relaxed'>
            Donations help fund scientists and clinicians working to improve
            cancer prevention, diagnosis, and treatment, bringing hope to
            millions of people affected by the disease worldwide.
          </p>

          <a
            href='https://fundraise.cancerresearchuk.org/page/stephens-giving-page-463'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition'>
            Support the Fundraiser
          </a>
        </motion.div>
      </div>
    </section>
  );
}
