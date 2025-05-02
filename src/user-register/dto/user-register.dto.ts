import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsDate, IsNumber, Length, Matches, Min } from 'class-validator';
import * as moment from 'moment';

export class UserRegisterDto {
    @ApiProperty({ default: 'user@email.com' })
    email: string;

    @ApiProperty({ default: 'password' })
    password: string;

    @ApiProperty({ default: 'bolivian' })
    nationality: string;

    @ApiProperty({ default: '0' })
    @IsNumber({}, { message: 'age must be a number' })
    @Min(0)
    age: number;
}