import { Dayjs } from 'dayjs';

declare global {
  interface Exercise {
    id: string;
    title: string;
    description: string | null;
    workoutId: string[];
    lastSessionId: string;
    sets: ExerciseSet[];
    createdAt: Dayjs;
    updatedAt: Dayjs;
  }
}
