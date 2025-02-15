import React from 'react';
import WorkoutCard from './WorkoutCard';

interface WorkoutFeedProps {
  workouts: {
    id: string;
    title: string;
    time: string;
    location: string;
    participants: {
      id: string;
      name: string;
      avatar: string;
    }[];
    platforms: string[];
  }[];
}

const WorkoutFeed: React.FC<WorkoutFeedProps> = ({ workouts }) => {
  console.log('WorkoutFeed rendering with workouts:', workouts);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Today's Workouts</h1>
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl font-medium transition-colors duration-200">
          Create Workout
        </button>
      </div>

      <div className="space-y-4">
        {workouts.map((workout) => (
          <div key={workout.id}>
            <WorkoutCard
              id={workout.id}
              title={workout.title}
              time={workout.time}
              location={workout.location}
              participants={workout.participants}
              platforms={workout.platforms}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutFeed;