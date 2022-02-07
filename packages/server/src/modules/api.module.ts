import { Module } from '@nestjs/common';

import { ConfigModule } from './config/config.module';
import { UserModule } from './user/user.module';
import { NodeModule } from './node/node.module';
import { StatusModule } from './status/status.module';

@Module({
  imports: [ConfigModule, StatusModule, UserModule, NodeModule],
})
export class APIModule {}
