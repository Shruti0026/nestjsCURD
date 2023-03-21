import { Controller , Post, Put, Res,Param, HttpStatus, Get,Delete, Body} from '@nestjs/common';

import { CreateStudentDto } from 'src/dto/create-student.dto';
import { UpdateStudentDto } from 'src/dto/update-student.dto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private  studentService:StudentService){}
 
    @Post()
        async createStudent(@Res() response, @Body() createStudentDto: CreateStudentDto) {
        try {
            const newStudent = await this.studentService.createStudent(createStudentDto);
            return response.status(HttpStatus.CREATED).json({
            message: 'Student has been created successfully',
            newStudent,});
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
            statusCode: 400,
            message: 'Error: Student not created!',
            error: 'Bad Request'
            });
        }
    }


    @Get()
        async getStudents(){
            return await this.studentService.getAllStudents();
            // try{
            //     const studentData= await this.studentService.getAllStudents();
            //     return response.status(HttpStatus.OK).json({
            //         message:'ALl students daat found sucessfully', studentData,
            //     })
            // }catch(err){
            //     return response.status(err.status).json(err.response);
            // }
    }

    @Put('/:id')
    //     async updateStudent(@Res() response, @Param('id') studentId: string,@Body() updateStudentDto:UpdateStudentDto){
    //         return await this.studentService.updateStudent(studentId,updateStudentDto);
            
    // }
        async updateStudent(@Res() response, @Param('id') studentId: string,@Body() updateStudentDto:UpdateStudentDto){
            try{
                const existingStudent= await this.studentService.updateStudent(studentId,updateStudentDto);
                return response.status(HttpStatus.OK).json({
                    message:'Student has been sucessfulls updated',
                    existingStudent,
                })
            }catch(err){
                return response.status(err.status).json(err.response);
            }
    }

    @Get('/:id')
        // async getStudent(@Res() response, @Param('id') studentId:string){
        //     return await this.studentService.getStudent(studentId);
        // }
        async getStudent(@Res() response, @Param('id') studentId:string){
            try{
                const existingStudent = await this.studentService.getStudent(studentId);
                return response.status(HttpStatus.OK).json({
                    message: 'student found sucessfully', existingStudent,
                })
            }catch(err){
                return response.status(err.status).json(err.response);
            }
    }

    @Delete('/:id')
        // async deleteStudent(@Res() response, @Param('id') studentId:string) {
        //     await this.studentService.deleteStudent(studentId)
        // }
        async deleteStudent (@Res() response, @Param('id') studentId:string){
            try{
                const deleteStudent = await this.studentService.deleteStudent(studentId)
                return response.status(HttpStatus.OK).json({
                    message:'student deleted ducessfully',
                    deleteStudent
                })
            }catch(err){
                return response.status(err.status).json(err.response)
            }
        }
    
        
}
    

