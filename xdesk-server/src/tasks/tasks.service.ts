import { Injectable } from '@nestjs/common';

export type Task = any;

@Injectable()
export class TasksService {
  constructor() { }

  /**
   * 创建任务
   * @param params object
   * @returns boolean
   */
  async createTask(params: object): Promise<boolean> {
    return false;
  }

  /**
   * 查询所有任务
   * @returns array
   */
  async getTasks(): Promise<Task> {
    const tasks = [];
    return tasks;
  }

  /**
   * 取消任务
   * @param id number
   * @returns boolean
   */
  async cancelTask(id: number): Promise<boolean> {
    return false;
  }

  /**
   * 删除任务
   * @param id number
   * @returns boolean
   */
  async deleteTask(id: number): Promise<boolean> {
    return false;
  }
  /**
   * 编辑任务
   * @param id number
   * @returns boolean
   */
  async patchTask(id: number): Promise<Task> {
    const task = {};
    return task;
  }
}
