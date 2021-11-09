import { randomNumber } from '@magiclick/utils/helpers/random-number';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../globals/prisma.service';
import { AccountCreateInput } from './account.dto';
import { AccountEntity } from './account.model';

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) {}

  async create(
    createAccountInput: AccountCreateInput
  ): Promise<AccountEntity | null> {
    return this.prisma.account.create({
      data: {
        ...createAccountInput,
        accountNumber: randomNumber(100000, 999999),
      },
    });
  }

  async list(where: Prisma.AccountWhereInput): Promise<AccountEntity[]> {
    return this.prisma.account.findMany({
      where: where,
      orderBy: { createdAt: 'desc' },
    });
  }

  async detail(id: number): Promise<AccountEntity> {
    return this.prisma.account.findFirst({ where: { id: id } });
  }
}
