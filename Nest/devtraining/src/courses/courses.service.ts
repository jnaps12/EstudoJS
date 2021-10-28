import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { Course } from './entities/course.entity';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}

  findAll() {
    return this.courseRepository.find();
  }

  async findOne(id: number) {
    const course = await this.courseRepository.findOne(id);
    if (!course) {
      throw new NotFoundException(`Course ID #${id} not found!`);
    }

    return course;
  }

  create(createCourseDto: CreateCourseDto) {
    const course = this.courseRepository.create(createCourseDto);
    return this.courseRepository.save(course);
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    const course = await this.courseRepository.preload({
      id,
      ...updateCourseDto,
    });
    if (!course) {
      throw new NotFoundException(`Course ID #${id} not found!`);
    }
    return this.courseRepository.save(course);
  }

  async delete(id: number) {
    const course = await this.courseRepository.findOne(id);
    if (!course) {
      throw new NotFoundException(`Course ID #${id} not foud!`);
    }
    return this.courseRepository.remove(course);
  }
}
