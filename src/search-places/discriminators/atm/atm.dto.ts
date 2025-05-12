import { ApiProperty } from '@nestjs/swagger';
import { Languages } from 'src/search-places/types/place.type';

export class AtmDto {
  @ApiProperty({ example: 'bank_name' })
  bank_name: string;

  @ApiProperty({ example: 'currency_available' })
  currency_available: Languages[];

  @ApiProperty({ example: 'languages_available' })
  languages_available: Languages[];

  @ApiProperty({ example: 'accepts_foreign_cards' })
  accepts_foreign_cards: boolean;

  @ApiProperty({ example: 'fee_for_foreign_cards' })
  fee_for_foreign_cards: number;

  @ApiProperty({ example: 'deposit_functionality' })
  deposit_functionality: boolean;

  @ApiProperty({ example: 'contactless_withdrawal' })
  contactless_withdrawal: boolean;
}
