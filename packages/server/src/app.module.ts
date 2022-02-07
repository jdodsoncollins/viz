import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { APIModule } from "./modules/api.module";

@Module({
  controllers: [AppController],
  imports: [APIModule]
})
export class AppModule {}