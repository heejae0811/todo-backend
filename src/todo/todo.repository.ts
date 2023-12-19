import { EntityRepository, Repository, DataSource } from 'typeorm';
import { TodoEntity } from './entities/todo.entity';

@EntityRepository()
export class TodoRepository extends Repository<TodoEntity> {
  constructor(private readonly datasource: DataSource) {
    super(TodoEntity, datasource.createEntityManager());
  }

  // @Post
  async createByTodo(createTodoDto): Promise<TodoEntity[]> {
    const newTodo = this.create(createTodoDto);

    return await this.save(newTodo);
  }

  // @Get
  async findAllByTodo(): Promise<TodoEntity[]> {
    return await this.find();
  }

  // @Get(':id')
  async findOneByTodo(id: number): Promise<TodoEntity> {
    return await this.findOne({
      where: {
        id,
      },
    });
  }

  // @Patch
  async updateByTodo(id, updateTodoDto): Promise<TodoEntity> {
    await this.update(id, updateTodoDto);

    return await this.findOne({
      where: {
        id,
      },
    });
  }

  // @Delete(':id')
  async deleteByTodo(id): Promise<void> {
    await this.delete(id);
  }

  // @Delete
  async clearByTodo(): Promise<void> {
    await this.clear();
  }
}
