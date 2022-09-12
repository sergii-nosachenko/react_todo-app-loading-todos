import { client } from '../utils/fetchClient';

import { ITodo } from '../types/Todo.interface';
import { RequireAtLeastOne } from '../types/helpers';

type TodoFields = 'title' | 'completed';
export type TPatchTodo = RequireAtLeastOne<Pick<ITodo, TodoFields>, TodoFields>;
export type AddTodoData = Pick<ITodo, 'userId' | 'title' | 'completed'>;

export const getTodos = (userId: number) => {
  return client.get<ITodo[]>(`/todos?userId=${userId}`);
};

export const addTodo = (
  data: AddTodoData,
) => {
  return client.post<ITodo>('/todos', data);
};

export const patchTodo = (
  todoId: number,
  data: TPatchTodo,
) => {
  return client.patch<ITodo>(`/todos/${todoId}`, data);
};

export const deleteTodo = (
  todoId: number,
) => {
  return client.delete(`/todos/${todoId}`);
};