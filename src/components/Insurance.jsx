import React from 'react';

function Insurance() {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-500">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="luxury-heading text-4xl mb-6 text-white">Insurance Accepted</h2>
        <p className="text-xl text-pink-100 mb-8">
          We accept most major insurance plans. Contact us to verify your coverage.
        </p>
        <button className="px-8 py-4 bg-white text-rose-900 font-bold rounded-md hover:bg-pink-100 transition-colors shadow-lg">
          CHECK COVERAGE
        </button>
      </div>
    </section>
  );
}

export default Insurance;