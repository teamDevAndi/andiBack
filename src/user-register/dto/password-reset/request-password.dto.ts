import { Optional } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";

export class RequestPasswordDto {
    @ApiProperty({ default: "email@email.com" })
    email: string;

    @ApiProperty({ default: "00000" })
    @Optional()
    resetCode: string;
}