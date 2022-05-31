import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { PrismaUserRepository } from './user.repository';

@Module({
  providers: [PrismaService, PrismaUserRepository],
  exports: [PrismaUserRepository],
})
export class PrismaUserModule {}
