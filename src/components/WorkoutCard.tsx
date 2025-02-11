import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

interface Participant {
  id: string;
  name: string;
  avatar: string;
}

interface WorkoutCardProps {
  id: string;
  title: string;
  time: string;
  location: string;
  participants: Participant[];
  platforms: string[];
  expanded?: boolean;
  onBack?: () => void;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ 
  id, 
  title, 
  time, 
  location, 
  participants, 
  platforms,
  expanded = false,
  onBack
}) => {
  const navigate = useNavigate();

  if (expanded) {
    return (
      <div className="fixed inset-0 bg-gray-900 text-white">
        <div className="relative">
          {/* Header with gradient overlay */}
          <div className="h-64 bg-gradient-to-b from-red-600/20 to-gray-900">
            <button 
              onClick={onBack}
              className="absolute top-4 left-4 z-10 p-2 rounded-full bg-gray-800/50"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <div className="absolute bottom-8 left-6">
              <h1 className="text-2xl font-bold">{title}</h1>
              <p className="text-gray-300">{time} · {location}</p>
            </div>
          </div>

          {/* Participants */}
          <div className="p-6">
            <div className="flex justify-center space-x-8">
              {participants.map((participant, i) => (
                <div 
                  key={participant.id} 
                  className="flex flex-col items-center"
                  style={{
                    transform: `translateX(${(i - (participants.length - 1) / 2) * 80}px)`,
                  }}
                >
                  <div className="relative">
                    <div className="absolute -inset-1 animate-pulse rounded-full bg-white/20 backdrop-blur-sm" />
                    <img
                      src={participant.avatar}
                      alt={participant.name}
                      className="h-16 w-16 rounded-full border-2 border-white"
                    />
                  </div>
                  <p className="mt-2 text-center text-sm">{participant.name.split(' ')[0]}</p>
                </div>
              ))}
            </div>

            {/* Join buttons */}
            <div className="mt-12">
              <h2 className="text-lg mb-4">Join in through:</h2>
              <div className="grid grid-cols-3 gap-4">
                {platforms.map((platform) => (
                  <button
                    key={platform}
                    className="bg-gray-800 rounded-lg py-3 px-4 text-center hover:bg-gray-700"
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={() => navigate(`/workout/${id}`)}
      className="bg-white rounded-lg shadow p-4 mb-4 cursor-pointer hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-gray-500">{time} · {location}</p>
          </div>
        </div>
        <div className="flex -space-x-2">
          {participants.map((participant, index) => (
            <img
              key={participant.id}
              src={participant.avatar}
              alt={participant.name}
              className="w-8 h-8 rounded-full border-2 border-white"
              style={{ zIndex: participants.length - index }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;