import { Dayjs } from 'dayjs';

interface ExerciseSet {
  id: string;
  sessionId: string;
  set: number;
  weight: number;
  reps: number;
  createdAt: Dayjs;
}
