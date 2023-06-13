import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from 'src/schemas/student.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }]),
  ],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
