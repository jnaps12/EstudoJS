import { CoursesService } from './courses.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses') //o ('courses') é o endpoint. ex: localhost:3000/courses
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  //os 2 códigos abaixo fazem a mesma coisa.
  // @Get(':id')
  // findOne(@Param() params) {
  //   return `Curso #${params.id}`;
  // }
  // AQUI EMBAIXO VC ESTÁ EXTRAINDO APENAS O PARAMÊTRO DA REQ QUE VC QUER.
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.coursesService.findOne(id);
  }

  @Post()
  // @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(id, updateCourseDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.coursesService.delete(id);
  }
}
