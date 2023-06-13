import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from 'src/students/dto/create-student.dto';
import { UpdateStudentDto } from 'src/students/dto/update-student.dto';

@Controller('student')
export class StudentsController {
  constructor(private readonly studentService: StudentsService) {}

  @Get()
  async getAll(@Res() response) {
    try {
      const students = await this.studentService.getAllStudent();

      return response.status(HttpStatus.OK).json({
        message: 'Sucessfully retrieved all students',
        data: students,
      });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  @Post()
  async createStudent(
    @Res() response,
    @Body() createStudentDto: CreateStudentDto,
  ) {
    try {
      const newStudent = await this.studentService.createStudent(
        createStudentDto,
      );

      return response
        .status(HttpStatus.CREATED)
        .json({ message: 'Student created successfully', data: newStudent });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error creating student',
        error: 'Bad Request',
      });
    }
  }

  @Put('/:id')
  async updateStudent(
    @Res() response,
    @Param('id') studentId: string,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    try {
      const existingStudent = await this.studentService.updateStudent(
        studentId,
        updateStudentDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Student updated successfully',
        data: existingStudent,
      });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  @Get('/:id')
  async getStudent(@Res() response, @Param('id') studentId: string) {
    try {
      const existingStudent = await this.studentService.getStudent(studentId);

      return response
        .status(HttpStatus.OK)
        .json({ message: 'Student found successfully', data: existingStudent });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  @Delete('/:id')
  async deleteStudent(@Res() response, @Param('id') studentId: string) {
    try {
      const deleteStudent = await this.studentService.deleteStudent(studentId);

      return response
        .status(HttpStatus.OK)
        .json({ message: 'Student deleted successfully', data: deleteStudent });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }
}
