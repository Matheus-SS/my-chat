import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaUserModule } from './repository/user/user.module';

@Module({
  imports: [PrismaUserModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
