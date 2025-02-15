import React from 'react';
import { Home, Calendar, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || (path === '/workouts' && location.pathname === '/') 
      ? 'text-red-600' 
      : 'text-gray-600 hover:text-gray-900';
  };

  return (
    <nav className="bg-white shadow-lg fixed bottom-0 left-0 right-0 border-t border-gray-200">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-around py-4">
          <Link 
            to="/workouts" 
            className={`flex flex-col items-center space-y-1 ${isActive('/workouts')}`}
          >
            <Home className="w-6 h-6" />
            <span className="text-xs font-medium">Home</span>
          </Link>
          
          <Link 
            to="/calendar" 
            className={`flex flex-col items-center space-y-1 ${isActive('/calendar')}`}
          >
            <Calendar className="w-6 h-6" />
            <span className="text-xs font-medium">Calendar</span>
          </Link>
          
          <Link 
            to="/profile" 
            className={`flex flex-col items-center space-y-1 ${isActive('/profile')}`}
          >
            <User className="w-6 h-6" />
            <span className="text-xs font-medium">Profile</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;