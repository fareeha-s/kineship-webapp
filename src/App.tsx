import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
import Navigation from './components/Navigation';
import WorkoutFeed from './components/WorkoutFeed';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

// Mock data
const mockWorkouts = [
  {
    id: '1',
    title: "Barry's - LIFT x RUN",
    time: '2:00 PM',
    location: 'Castro / San Francisco',
    participants: [
      { id: '1', name: 'Gracie', avatar: 'https://ui-avatars.com/api/?name=Gracie' },
      { id: '2', name: 'Mat', avatar: 'https://ui-avatars.com/api/?name=Mat' },
      { id: '3', name: 'Rani', avatar: 'https://ui-avatars.com/api/?name=Rani' }
    ],
    platforms: ['ClassPass', 'MINDBODY', "Barry's"]
  },
  {
    id: '2',
    title: 'Marina Run Club',
    time: '8:00 AM',
    location: 'Marina / San Francisco',
    participants: [
      { id: '1', name: 'Gracie', avatar: 'https://ui-avatars.com/api/?name=Gracie' },
      { id: '4', name: 'El', avatar: 'https://ui-avatars.com/api/?name=El' },
      { id: '3', name: 'Rani', avatar: 'https://ui-avatars.com/api/?name=Rani' }
    ],
    platforms: ['Strava', 'ClassPass']
  }
];

// Placeholder components
const CalendarView: React.FC = () => (
  <div className="max-w-2xl mx-auto">
    <h1 className="text-2xl font-bold text-gray-900 mb-8">Calendar</h1>
    <div className="bg-white rounded-xl shadow-sm p-6">
      <p className="text-gray-600">Calendar view coming soon!</p>
    </div>
  </div>
);

const Profile: React.FC = () => (
  <div className="max-w-2xl mx-auto">
    <h1 className="text-2xl font-bold text-gray-900 mb-8">Profile</h1>
    <div className="bg-white rounded-xl shadow-sm p-6">
      <p className="text-gray-600">Profile view coming soon!</p>
    </div>
  </div>
);

// Workout detail wrapper component
const WorkoutDetailWrapper = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const workout = mockWorkouts.find(w => w.id === id);

  if (!workout) {
    return <Navigate to="/" />;
  }

  return (
    <WorkoutCard 
      {...workout}
      expanded={true}
      onBack={() => navigate(-1)}
    />
  );
};

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <main className="pb-24">
            <div className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<WorkoutFeed workouts={mockWorkouts} />} />
                <Route path="/workouts" element={<WorkoutFeed workouts={mockWorkouts} />} />
                <Route path="/workout/:id" element={<WorkoutDetailWrapper />} />
                <Route path="/calendar" element={<CalendarView />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </main>
          <Navigation />
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;