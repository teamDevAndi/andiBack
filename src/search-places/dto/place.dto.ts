import { ApiProperty } from "@nestjs/swagger";
import { Costs, Languages, Times } from "../types/place.type";
import { Type } from "class-transformer";

export class PlaceDto {
    @ApiProperty({ example: "name" })
    name: string;

    @ApiProperty({ example: "picturePrincipal" })
    picturePrincipal: string;

    @ApiProperty({ example: "category" })
    category: string;

    @ApiProperty({ example: "subCategory" })
    subCategory: string;

    @ApiProperty({ example: "guideRequired" })
    guideRequired: boolean;

    @ApiProperty({ example: "address" })
    address: string;

    @ApiProperty({ example: "times" })
    @Type(() => Times)
    times: Times[];

    @ApiProperty({ example: "costs" })
    @Type(() => Costs)
    costs: Costs[];

    @ApiProperty({ example: "description" })
    @Type(() => Languages)
    description: Languages[];

    @ApiProperty({ example: "labels" })
    labels: string[];

    @ApiProperty({ example: "latitude" })
    latitude: number;

    @ApiProperty({ example: "longitude" })
    longitude: number;
}