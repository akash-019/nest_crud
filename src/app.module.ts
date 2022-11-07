import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from './entities/team';
import { TeamModule } from './team/team.module';
import { TeamMembers } from './entities/teammember';
import { Task } from './entities/task';
import { TeammemberModule } from './teammember/teammember.module';
import { TaskModule } from './task/task.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { secret } from './env';
@Module({
  imports: [
    TeamModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'taskmgt',
      entities: [Team, TeamMembers, Task],
      synchronize: true,
    }),
    JwtModule.register({
      secret: secret,
      signOptions: { expiresIn: '1d' },
    }),
    TeammemberModule,
    TaskModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
