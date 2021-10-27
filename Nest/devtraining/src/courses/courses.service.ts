import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundamento do NestJS',
      description: 'Fundamentos do NestJS',
      tags: ['nodejs', 'nest', 'ts', 'js'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: number) {
    const course = this.courses.find((course: Course) => course.id == id);
    if (!course) {
      throw new HttpException(
        `Course ID #${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }

    return course;
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
    return createCourseDto;
  }

  update(id: number, updateCourseDto: any) {
    const indexCourse = this.courses.findIndex(
      (course: Course) => course.id == id,
    );

    this.courses[indexCourse] = updateCourseDto;
  }

  delete(id: number) {
    const indexCourse = this.courses.findIndex(
      (course: Course) => course.id == id,
    );
    if (indexCourse >= 0) {
      this.courses.splice(indexCourse, 1);
    }
  }
}
