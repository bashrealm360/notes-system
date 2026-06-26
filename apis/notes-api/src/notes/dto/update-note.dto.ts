import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateNoteDto {
  @ApiPropertyOptional({ example: 'Updated note title' })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({ example: 'Updated note content' })
  @IsOptional()
  @IsString()
  content?: string;

  @ApiPropertyOptional({ example: 'work' })
  @IsOptional()
  @IsString()
  category?: string;

  @ApiPropertyOptional({ example: 'medium' })
  @IsOptional()
  @IsString()
  priority?: string;

  @ApiPropertyOptional({ example: 'active' })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  @IsBoolean()
  isArchived?: boolean;
}
