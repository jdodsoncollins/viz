import { Global, Module } from '@nestjs/common';
import { PrismaService } from '~/prisma.service';

import { NodeService } from './node.service';

@Global()
@Module({
  providers: [NodeService, PrismaService],
  exports: [NodeService],
})
export class NodeModule {}
