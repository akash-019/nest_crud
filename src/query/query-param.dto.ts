import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class QueryParamDto {
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  id: number;
}
