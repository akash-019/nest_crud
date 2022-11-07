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
    TeammemberModule,
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
