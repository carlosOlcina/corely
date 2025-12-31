import { Dayjs } from 'dayjs';
import { ExerciseSet } from './set';

interface Exercise {
  id: string;
  title: string;
  description: string | null;
  workoutId: string[];
  lastTrain: string;
  sets: ExerciseSet[];
  createdAt: Dayjs;
  updatedAt: Dayjs;
}
