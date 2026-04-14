import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks(completed = undefined) {
  return taskRepository.findAll(completed);
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}
