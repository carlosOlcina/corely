import workoutsMock from '../../../mocks/workouts.json';
import { Injectable, signal } from '@angular/core';
import dayjs from 'dayjs';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  private workouts = signal<Workout[]>([]);

  get() {
    const workouts = workoutsMock.map((workout) => ({
      id: workout.id,
      title: workout.title,
      description: workout.description,
      lastTrain: dayjs(workout.lastTrain),
      createdAt: dayjs(workout.lastTrain),
      updatedAt: dayjs(workout.lastTrain),
    }));

    this.workouts.set(workouts);

    return this.workouts();
  }

  create(session: Workout) {
    return this.workouts.update((value) => [...value, session]);
  }

  update(session: Workout) {
    return this.workouts.update((value) => value.map((s) => (s.id === session.id ? session : s)));
  }

  delete(id: string) {
    return this.workouts.update((value) => value.filter((session) => session.id !== id));
  }
}
