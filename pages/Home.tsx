
import React, { useState } from 'react';
import { searchDomains } from '../services/geminiService';
import { DomainResult } from '../types';
import DomainCard from '../components/DomainCard';

const Home: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<DomainResult[]>([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setLoading(true);
    setSearched(true);
    const data = await searchDomains(query);
    setResults(data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-800 text-white pt-20 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            The perfect domain <br />starts here.
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Find the name that defines your brand. Powered by Nova AI to suggest the best matches for your business.
          </p>
          
          <form onSubmit={handleSearch} className="relative max-w-3xl mx-auto">
            <div className="flex p-1.5 bg-white rounded-2xl shadow-2xl">
              <input
                type="text"
                placeholder="Find your perfect domain..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-grow px-6 py-4 text-gray-900 rounded-xl focus:outline-none text-lg"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition flex items-center gap-2"
              >
                {loading ? (
                  <i className="fas fa-circle-notch fa-spin"></i>
                ) : (
                  <i className="fas fa-search"></i>
                )}
                Search
              </button>
            </div>
          </form>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-medium text-indigo-200">
            <span className="flex items-center gap-1"><i className="fas fa-check-circle text-green-400"></i> .com $9.99</span>
            <span className="flex items-center gap-1"><i className="fas fa-check-circle text-green-400"></i> .ai $59.99</span>
            <span className="flex items-center gap-1"><i className="fas fa-check-circle text-green-400"></i> .net $12.99</span>
            <span className="flex items-center gap-1"><i className="fas fa-check-circle text-green-400"></i> .io $32.00</span>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="max-w-5xl mx-auto px-4 -mt-12 pb-20">
        {!searched ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                <i className="fas fa-bolt text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Instant Setup</h3>
              <p className="text-gray-600">Get your domain live in seconds with our automated provisioning system.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-4">
                <i className="fas fa-shield-alt text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Privacy Included</h3>
              <p className="text-gray-600">WHOIS privacy protection comes standard with every eligible registration.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600 mb-4">
                <i className="fas fa-headset text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Expert Support</h3>
              <p className="text-gray-600">Our team is always here to help you manage your digital presence.</p>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h2 className="text-xl font-bold text-gray-900">Search Results for "{query}"</h2>
              <div className="text-sm text-gray-500">AI-Powered Suggestions</div>
            </div>
            <div className="p-6">
              {loading ? (
                <div className="space-y-4 py-8">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="h-20 bg-gray-100 animate-pulse rounded-xl"></div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {results.length > 0 ? (
                    results.map((res, idx) => (
                      <DomainCard key={idx} result={res} onAdd={(d) => alert(`Added ${d.domain} to cart!`)} />
                    ))
                  ) : (
                    <div className="text-center py-20">
                      <i className="fas fa-search text-gray-300 text-5xl mb-4"></i>
                      <p className="text-gray-500 font-medium">No domains found. Try another keyword!</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
