import { IsString } from "class-validator";
import { IsNotEmpty, IsNumber, Max, MaxLength } from "class-validator";

export class CreateStudentDto{
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;

    @IsNumber()
    @IsNotEmpty()
    readonly rollNumber: number;

    @IsNumber()
    @IsNotEmpty()
    readonly Standard: number;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly gender: string;

    @IsNumber()
    @IsNotEmpty()
    readonly marks: number;
}