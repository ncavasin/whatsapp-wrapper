import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { WhatsappModule } from './whatsapp/whatsapp.module';

@Module({
  imports: [WhatsappModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
