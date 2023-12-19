import { Injectable } from '@nestjs/common';
import { TodoRepository } from './todo.repository';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  create(createTodoDto: CreateTodoDto) {
    return this.todoRepository.createByTodo(createTodoDto);
  }

  findAll() {
    return this.todoRepository.findAllByTodo();
  }

  findOne(id: number) {
    return this.todoRepository.findOneByTodo(id);
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.todoRepository.updateByTodo(id, updateTodoDto);
  }

  delete(id: number) {
    return this.todoRepository.deleteByTodo(id);
  }

  clear() {
    return this.todoRepository.clearByTodo();
  }
}
