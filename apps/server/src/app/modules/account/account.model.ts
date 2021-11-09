import { ApiProperty } from '@nestjs/swagger';
import { Account } from '@prisma/client';

export class AccountEntity implements Account {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  currency: string;

  @ApiProperty()
  accountNumber: number;

  @ApiProperty()
  createdAt: Date;
}
