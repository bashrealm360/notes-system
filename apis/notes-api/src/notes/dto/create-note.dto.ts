import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateNoteDto {
  @ApiProperty({
    example: 'Learn NestJS',
    description: 'Title of the note',
  })
  @IsString()
  title!: string;

  @ApiProperty({
    example: 'Build CRUD with Prisma',
    description: 'Main content of the note',
  })
  @IsString()
  content!: string;

  @ApiPropertyOptional({
    example: 'learning',
    description: 'Category of the note',
  })
  @IsOptional()
  @IsString()
  category?: string;

  @ApiPropertyOptional({
    example: 'high',
    description: 'Priority of the note',
  })
  @IsOptional()
  @IsString()
  priority?: string;

  @ApiPropertyOptional({
    example: 'active',
    description: 'Status of the note',
  })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiPropertyOptional({
    example: false,
    description: 'Whether the note is archived',
  })
  @IsOptional()
  @IsBoolean()
  isArchived?: boolean;
}
