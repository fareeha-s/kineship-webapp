export interface User {
  id: string;
  name: string;
  email: string;
  photoUrl: string;
  friends: string[];
}

export interface WorkoutEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  type: string;
  attendees: User[];
  source: 'barrys' | 'mrc' | 'sonora' | 'apple' | 'google';
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
}