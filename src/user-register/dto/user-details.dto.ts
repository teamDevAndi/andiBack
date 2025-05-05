import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, Min } from 'class-validator';

export class UserDetailsDto {
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