import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Home } from 'lucide-react';

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
        <div className="relative h-full overflow-auto">
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
          <div className="px-6 py-12">
            <div className="flex justify-center">
              <div className="flex -space-x-4">
                {participants.map((participant) => (
                  <div 
                    key={participant.id} 
                    className="flex flex-col items-center"
                  >
                    <div className="relative">
                      <div className="absolute -inset-1 animate-pulse rounded-full bg-white/20 backdrop-blur-sm" />
                      <img
                        src={participant.avatar}
                        alt={participant.name}
                        className="relative h-16 w-16 rounded-full border-2 border-white object-cover"
                      />
                    </div>
                    <p className="mt-2 text-center text-sm">{participant.name.split(' ')[0]}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Join buttons */}
            <div className="mt-12">
              <h2 className="text-lg mb-4">Join in through:</h2>
              <div className="flex flex-wrap gap-3">
                {platforms.map((platform) => (
                  <button
                    key={platform}
                    className="flex-1 min-w-[120px] bg-gray-800 rounded-lg py-3 px-4 text-center hover:bg-gray-700 transition-colors"
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
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
    >
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-500">{time} · {location}</p>
            </div>
          </div>
          <div className="flex -space-x-2">
            {participants.map((participant, index) => (
              <img
                key={participant.id}
                src={participant.avatar}
                alt={participant.name}
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
                style={{ zIndex: participants.length - index }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;