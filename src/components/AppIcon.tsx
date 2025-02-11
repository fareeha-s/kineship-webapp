import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';

export default function AppIcon() {
  const navigate = useNavigate();
  
  return (
    <div 
      className="h-24 w-24 relative cursor-pointer"
      onClick={() => navigate('/feed')}
    >
      {/* App Icon */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-lg">
        <div className="absolute inset-0 flex items-center justify-center">
          <ChevronUp className="w-12 h-12 text-white" strokeWidth={3} />
        </div>
      </div>

      {/* Attendee Avatars */}
      <div className="absolute -right-2 -top-2 flex -space-x-2">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
          alt="Attendee"
          className="w-6 h-6 rounded-full border-2 border-black"
        />
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
          alt="Attendee"
          className="w-6 h-6 rounded-full border-2 border-black"
        />
      </div>

      {/* App Label */}
      <div className="absolute -inset-x-4 top-full mt-1">
        <p className="text-center text-xs font-medium text-white">Kineship</p>
      </div>
    </div>
  );
}