import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from 'src/entities/team';
import { TeamMembers } from 'src/entities/teammember';
import { Task } from 'src/entities/task';
import { JwtModule } from '@nestjs/jwt';
import { secret } from 'src/env';
@Module({
  imports: [
    TypeOrmModule.forFeature([Team, TeamMembers, Task]),
    JwtModule.register({
      secret: secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [TeamController],
  providers: [TeamService],
})
export class TeamModule {}
