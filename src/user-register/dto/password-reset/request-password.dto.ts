import { ApiProperty } from "@nestjs/swagger";

export class RequestPasswordDto {
    @ApiProperty({ default: "email@email.com" })
    email: string;
}