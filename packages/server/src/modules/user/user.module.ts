import { Global, Module } from '@nestjs/common';
import { PrismaService } from '~/prisma.service';

import { UserService } from './user.service';

@Global()
@Module({
  providers: [UserService, PrismaService],
  exports: [UserService],
})
export class UserModule {}
