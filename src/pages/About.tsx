import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Technical Excellence Since Inception</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
          GummerTech was founded on the principle that modern software shouldn't just work—it should be a competitive advantage.
        </p>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4">Our Philosophy</h2>
          <p className="mb-6">
            We believe in the "Right Tool for the Right Job" approach. We don't chase trends; we leverage battle-tested technologies 
            and architectures that ensure maintainability, security, and performance. Our multidisciplinary approach means 
            we understand how a UI decision impacts the database, and how a networking config affects the frontend latency.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="p-6 bg-white dark:bg-techBlue shadow-lg rounded-xl">
              <h3 className="text-xl font-bold mb-2">The Mission</h3>
              <p>To deliver enterprise-grade technology solutions that empower organizations to innovate without technical friction.</p>
            </div>
            <div className="p-6 bg-white dark:bg-techBlue shadow-lg rounded-xl">
              <h3 className="text-xl font-bold mb-2">The Vision</h3>
              <p>To be the premier partner for complex digital transformation projects across software, cloud, and networking.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;