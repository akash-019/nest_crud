import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTeammemberDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  teamId: number;
}
