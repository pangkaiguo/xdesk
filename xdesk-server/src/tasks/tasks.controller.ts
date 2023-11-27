import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) { }

  @Post('create')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  createTask(@Body() params: object) {
    this.taskService.createTask(params);
  }

  @Get()
  getTasks() {
    return this.taskService.getTasks();
  }

  @Post('cancel')
  cancelTask(@Param() id: number) {
    return this.taskService.cancelTask(id);
  }

  @Delete(':id')
  deleteTask(@Param() id: number) {
    return this.taskService.deleteTask(id);
  }

  @Patch(':id')
  patchTask(@Param() id: number) {
    return this.taskService.patchTask(id);
  }
}
