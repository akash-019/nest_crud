import { Injectable } from '@nestjs/common';
import { CreateTeammemberDto } from './dto/create-teammember.dto';
import { UpdateTeammemberDto } from './dto/update-teammember.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TeamMembers } from 'src/entities/teammember';
import { Repository } from 'typeorm';
import { Team } from 'src/entities/team';

@Injectable()
export class TeammemberService {
  constructor(
    @InjectRepository(TeamMembers)
    private teammenberRepository: Repository<TeamMembers>,
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,
  ) {}

  async create(createTeammemberDto: CreateTeammemberDto) {
    let newTeammember = new TeamMembers();
    newTeammember.name = createTeammemberDto.name;
    const team = await this.teamRepository.findOne({
      where: { id: createTeammemberDto.teamId },
    });
    newTeammember.team = new Team();
    newTeammember.team = team;
    return this.teammenberRepository.save(newTeammember);
  }

  findAll() {
    return this.teammenberRepository.find();
  }

  findOne(id: number) {
    return this.teammenberRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateTeammemberDto: UpdateTeammemberDto) {
    let updateTeammember = new TeamMembers();
    updateTeammember.name = updateTeammemberDto.name;
    const team = await this.teamRepository.findOne({
      where: { id: updateTeammemberDto.teamId },
    });
    updateTeammember.team = new Team();
    updateTeammember.team = team;
    return this.teammenberRepository.update(
      { id: id },
      { ...updateTeammember },
    );
  }

  remove(id: number) {
    return this.teammenberRepository.delete(id);
  }
}
