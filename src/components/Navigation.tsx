import React from 'react';
import { Calendar, Home, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-red-600' : 'text-gray-600';
  };

  return (
    <nav className="bg-white shadow-lg fixed bottom-0 w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-around py-4">
          <Link 
            to="/workouts" 
            className={`flex flex-col items-center ${isActive('/workouts')}`}
          >
            <Home className="w-6 h-6" />
            <span className="text-sm mt-1">Home</span>
          </Link>
          
          <Link 
            to="/calendar" 
            className={`flex flex-col items-center ${isActive('/calendar')}`}
          >
            <Calendar className="w-6 h-6" />
            <span className="text-sm mt-1">Calendar</span>
          </Link>
          
          <Link 
            to="/profile" 
            className={`flex flex-col items-center ${isActive('/profile')}`}
          >
            <User className="w-6 h-6" />
            <span className="text-sm mt-1">Profile</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;