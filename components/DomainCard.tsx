
import React from 'react';
import { DomainResult, DomainStatus } from '../types';

interface DomainCardProps {
  result: DomainResult;
  onAdd: (domain: DomainResult) => void;
}

const DomainCard: React.FC<DomainCardProps> = ({ result, onAdd }) => {
  const isAvailable = result.status !== DomainStatus.TAKEN;

  return (
    <div className={`p-4 rounded-xl border transition-all ${isAvailable ? 'bg-white border-gray-200 hover:border-indigo-300 hover:shadow-md' : 'bg-gray-50 border-gray-200 grayscale opacity-60'}`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-gray-900">{result.domain}</h3>
            {result.status === DomainStatus.PREMIUM && (
              <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-bold rounded uppercase">Premium</span>
            )}
            {result.isPopular && (
              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded uppercase">Hot</span>
            )}
          </div>
          <p className={`text-sm mt-1 font-medium ${isAvailable ? 'text-green-600' : 'text-red-500'}`}>
            {isAvailable ? 'Available' : 'Already Registered'}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className="text-xl font-bold text-gray-900">${result.price.toFixed(2)}</span>
            <span className="text-xs text-gray-500 block">/ first year</span>
          </div>
          <button
            onClick={() => onAdd(result)}
            disabled={!isAvailable}
            className={`px-6 py-2 rounded-lg font-bold transition ${
              isAvailable 
              ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isAvailable ? 'Add to Cart' : 'Taken'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DomainCard;
