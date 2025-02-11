import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
import Navigation from './components/Navigation';
import WorkoutFeed from './components/WorkoutFeed';
import CalendarView from './components/calendar/CalendarView';
import Profile from './components/profile/Profile';
import WorkoutCard from './components/WorkoutCard';
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
          <main className="container mx-auto px-4 py-8 pb-24">
            <Routes>
              <Route path="/" element={<WorkoutFeed workouts={mockWorkouts} />} />
              <Route path="/workouts" element={<WorkoutFeed workouts={mockWorkouts} />} />
              <Route path="/workout/:id" element={<WorkoutDetailWrapper />} />
              <Route path="/calendar" element={<CalendarView />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
          </main>
          <Navigation />
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;