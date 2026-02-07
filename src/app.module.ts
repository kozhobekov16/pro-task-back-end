import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersService } from './users/users.service';
import { AuthService } from './auth/auth.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, UsersService, AuthService],
})
export class AppModule {
}
