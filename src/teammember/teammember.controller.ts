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
import { TeammemberService } from './teammember.service';
import { CreateTeammemberDto } from './dto/create-teammember.dto';
import { UpdateTeammemberDto } from './dto/update-teammember.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { QueryParamDto } from 'src/query/query-param.dto';

@Controller('teammember')
@UseGuards(AuthGuard)
export class TeammemberController {
  constructor(private readonly teammemberService: TeammemberService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createTeammemberDto: CreateTeammemberDto) {
    return this.teammemberService.create(createTeammemberDto);
  }

  @Get()
  findAll() {
    return this.teammemberService.findAll();
  }

  @Get(':id')
  @UsePipes(ValidationPipe)
  findOne(@Param() param: QueryParamDto) {
    return this.teammemberService.findOne(param.id);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  update(
    @Param() param: QueryParamDto,
    @Body() updateTeammemberDto: UpdateTeammemberDto,
  ) {
    return this.teammemberService.update(param.id, updateTeammemberDto);
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  remove(@Param() param: QueryParamDto) {
    return this.teammemberService.remove(param.id);
  }
}
