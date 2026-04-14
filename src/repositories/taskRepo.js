import prisma from '../config/db.js';

export async function findAll(completed = undefined){
  const where = {};
  if (completed !== undefined) {
    where.completed = completed === 'true' ? true :
                      completed === 'false' ? false :
                      completed;
  }
  return prisma.task.findMany({ 
    where: Object.keys(where).length > 0 ? where : undefined
   });
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}