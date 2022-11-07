import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from 'src/entities/team';
import { Repository } from 'typeorm';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team) private teamRepository: Repository<Team>,
  ) {}

  create(createTeamDto: CreateTeamDto) {
    const newTeam = this.teamRepository.create({ ...createTeamDto });
    return this.teamRepository.save(newTeam);
  }

  findAll() {
    return this.teamRepository.find();
  }

  findOne(id: number) {
    return this.teamRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return this.teamRepository.update(
      {
        id: id,
      },
      {
        ...updateTeamDto,
      },
    );
  }

  remove(id: number) {
    return this.teamRepository.delete(id);
  }
}
