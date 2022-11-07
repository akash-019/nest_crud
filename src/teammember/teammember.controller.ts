import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeammemberService } from './teammember.service';
import { CreateTeammemberDto } from './dto/create-teammember.dto';
import { UpdateTeammemberDto } from './dto/update-teammember.dto';

@Controller('teammember')
export class TeammemberController {
  constructor(private readonly teammemberService: TeammemberService) {}

  @Post()
  create(@Body() createTeammemberDto: CreateTeammemberDto) {
    return this.teammemberService.create(createTeammemberDto);
  }

  @Get()
  findAll() {
    return this.teammemberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teammemberService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeammemberDto: UpdateTeammemberDto) {
    return this.teammemberService.update(+id, updateTeammemberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teammemberService.remove(+id);
  }
}
