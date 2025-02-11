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
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Today's Workouts</h1>
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
          Create Workout
        </button>
      </div>
      <div className="space-y-4">
        {workouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            id={workout.id}
            title={workout.title}
            time={workout.time}
            location={workout.location}
            participants={workout.participants}
            platforms={workout.platforms}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkoutFeed;