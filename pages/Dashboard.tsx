
import React, { useState } from 'react';
import { OwnedDomain } from '../types';

const Dashboard: React.FC = () => {
  const [domains, setDomains] = useState<OwnedDomain[]>([
    { id: '1', domain: 'creativestudio.ai', expiryDate: '2025-10-12', status: 'Active', autoRenew: true },
    { id: '2', domain: 'myportfolio.com', expiryDate: '2024-12-01', status: 'Active', autoRenew: false },
    { id: '3', domain: 'oldproject.tech', expiryDate: '2023-05-20', status: 'Expired', autoRenew: false },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Domains</h1>
            <p className="text-gray-600 mt-1">Manage your digital assets and renewals.</p>
          </div>
          <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition">
            Register New Domain
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Stats */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <p className="text-sm font-medium text-gray-500">Total Domains</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{domains.length}</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <p className="text-sm font-medium text-gray-500">Upcoming Renewals</p>
              <p className="text-3xl font-bold text-amber-600 mt-1">1</p>
            </div>
            <div className="bg-indigo-600 p-6 rounded-2xl shadow-lg shadow-indigo-100 text-white">
              <h3 className="font-bold text-lg mb-2">Need Help?</h3>
              <p className="text-indigo-100 text-sm mb-4">Our experts are available 24/7 to assist with DNS management.</p>
              <button className="w-full bg-white text-indigo-600 py-2 rounded-lg font-bold text-sm hover:bg-indigo-50 transition">
                Contact Support
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Domain</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Expiry Date</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Auto-Renew</th>
                      <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {domains.map((domain) => (
                      <tr key={domain.id} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-bold text-gray-900">{domain.domain}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                            domain.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                          }`}>
                            {domain.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {domain.expiryDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition ${domain.autoRenew ? 'bg-indigo-600' : 'bg-gray-300'}`}>
                            <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${domain.autoRenew ? 'translate-x-6' : ''}`}></div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end gap-3">
                            <button className="text-gray-400 hover:text-indigo-600" title="DNS Settings">
                              <i className="fas fa-network-wired"></i>
                            </button>
                            <button className="text-gray-400 hover:text-indigo-600" title="Manage Domain">
                              <i className="fas fa-cog"></i>
                            </button>
                            <button className="text-gray-400 hover:text-red-600" title="Delete">
                              <i className="fas fa-trash-alt"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {domains.length === 0 && (
                <div className="py-20 text-center">
                  <p className="text-gray-500">You don't have any domains yet.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
