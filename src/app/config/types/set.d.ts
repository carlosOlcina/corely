import { Dayjs } from 'dayjs';

declare global {
  interface ExerciseSet {
    id: string;
    sessionId: string;
    set: number;
    weight: number;
    reps: number;
    createdAt: Dayjs;
  }
}
