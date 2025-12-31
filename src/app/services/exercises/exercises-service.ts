import exercisesMock from '../../../mocks/exercises.json';
import { Injectable, signal } from '@angular/core';
import dayjs from 'dayjs';

@Injectable({
  providedIn: 'root',
})
export class ExercisesService {
  private exercises = signal<Exercise[]>([]);

  get() {
    const exercises = exercisesMock.map(
      (exercise): Exercise => ({
        id: exercise.id,
        title: exercise.title,
        description: exercise.description,
        workoutId: exercise.workoutIds,
        lastSessionId: exercise.lastSessionId,
        sets: exercise.sets.map((set) => ({
          id: set.id,
          sessionId: exercise.id,
          set: set.set,
          weight: set.weight,
          reps: set.reps,
          createdAt: dayjs(set.createdAt),
        })),
        createdAt: dayjs(exercise.createdAt),
        updatedAt: dayjs(exercise.updatedAt),
      }),
    );

    this.exercises.set(exercises);
    return this.exercises();
  }

  create(exercise: Exercise) {
    return this.exercises.update((value) => [...value, exercise]);
  }

  update(exercise: Exercise) {
    return this.exercises.update((value) =>
      value.map((e) => (e.id === exercise.id ? exercise : e)),
    );
  }

  delete(id: string) {
    return this.exercises.update((value) => value.filter((exercise) => exercise.id !== id));
  }
}
