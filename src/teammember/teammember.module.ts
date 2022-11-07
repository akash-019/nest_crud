import { Module } from '@nestjs/common';
import { TeammemberService } from './teammember.service';
import { TeammemberController } from './teammember.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from 'src/entities/task';
import { Team } from 'src/entities/team';
import { TeamMembers } from 'src/entities/teammember';
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
  controllers: [TeammemberController],
  providers: [TeammemberService],
})
export class TeammemberModule {}
