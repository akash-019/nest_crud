import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { QueryParamDto } from 'src/query/query-param.dto';

@Controller('team')
@UseGuards(AuthGuard)
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamService.create(createTeamDto);
  }

  @Get()
  findAll() {
    return this.teamService.findAll();
  }

  @Get(':id')
  @UsePipes(ValidationPipe)
  findOne(@Param() param: QueryParamDto) {
    return this.teamService.findOne(param.id);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  update(@Param() param: QueryParamDto, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamService.update(param.id, updateTeamDto);
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  remove(@Param() param: QueryParamDto) {
    return this.teamService.remove(param.id);
  }
}
