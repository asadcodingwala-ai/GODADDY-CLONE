
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <footer className="bg-white border-t border-gray-200 py-10 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
              <div>
                <h4 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-widest">Products</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="#" className="hover:text-indigo-600">Domain Search</a></li>
                  <li><a href="#" className="hover:text-indigo-600">Web Hosting</a></li>
                  <li><a href="#" className="hover:text-indigo-600">Website Builder</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-widest">Support</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="#" className="hover:text-indigo-600">Help Center</a></li>
                  <li><a href="#" className="hover:text-indigo-600">Community</a></li>
                  <li><a href="#" className="hover:text-indigo-600">Report Abuse</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-widest">Company</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="#" className="hover:text-indigo-600">About Us</a></li>
                  <li><a href="#" className="hover:text-indigo-600">Careers</a></li>
                  <li><a href="#" className="hover:text-indigo-600">Legal</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-widest">Social</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-indigo-600"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="text-gray-400 hover:text-indigo-600"><i className="fab fa-facebook"></i></a>
                  <a href="#" className="text-gray-400 hover:text-indigo-600"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">NovaDomain</span>
              <p className="text-sm text-gray-500">© 2024 NovaDomain Inc. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
