// import CountUp from "react-countup";

const metrics = [
  { label: "Publications", value: 18 },
  { label: "Total Citations", value: 656 },
  { label: "h-index", value: 18 },
  { label: "Countries Worked In", value: "Nigeria, UK, China" },
];

const ResearchMetrics = () => {
  return (
    <section className='bg-white py-16 px-6'>
      <div className='max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
        {metrics.map((item, i) => (
          <div
            key={i}
            className='p-6 rounded-xl shadow-sm border bg-gray-50 flex flex-col items-center justify-center flex-wrap'>
            <h3 className='text-xl font-bold text-blue-700'>{item.label}</h3>
            <p className='text-gray-600 '>{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchMetrics;
