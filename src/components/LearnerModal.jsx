import React from 'react';
import { X } from 'lucide-react';

const LearnerModal = ({ learner, onClose }) => {
  if (!learner) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#E6E6E6]/50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
        >
          <X size={20} />
        </button>

        {/* Profile Image */}
        <div className="flex flex-col items-center mt-2">
          <img
            src={learner.avatar}
            alt={learner.learner}
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
          <h2 className="text-lg font-semibold text-gray-900">{learner.learner}</h2>
          <p className="text-sm text-gray-500">{learner.email}</p>
        </div>

        {/* Info Card */}
        <div className="bg-[#FAFAFA] rounded-xl mt-6 px-6 py-5 space-y-4">
          {[
            { label: 'Program', value: 'Software Development' },
            { label: 'Gender', value: learner.gender },
            { label: 'Contact', value: '+23341000000' },
            { label: 'Location', value: 'Accra, Ghana' },
            { label: 'Paid', value: learner.amount },
            {
              label: 'Bio',
              value:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
              multiline: true
            }
          ].map(({ label, value, multiline }) => (
            <div className="flex items-start gap-4" key={label}>
              <span className="bg-[#F2F4F7] text-xs text-gray-600 font-medium px-2 py-1 rounded-md">
                {label}
              </span>
              {multiline ? (
                <p className="text-sm text-gray-800">{value}</p>
              ) : (
                <span className="text-sm text-gray-800">{value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearnerModal;
