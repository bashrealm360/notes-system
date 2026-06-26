import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NotesService } from './notes.service';

@ApiTags('Notes')
@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new note' })
  @ApiCreatedResponse({ description: 'Note created successfully' })
  @ApiBadRequestResponse({ description: 'Validation failed' })
  create(@Body() createNoteDto: CreateNoteDto) {
    return this.notesService.create(createNoteDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all notes' })
  @ApiOkResponse({ description: 'Notes retrieved successfully' })
  findAll() {
    return this.notesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a note by ID' })
  @ApiParam({ name: 'id', example: 1, description: 'Note ID' })
  @ApiOkResponse({ description: 'Note retrieved successfully' })
  @ApiNotFoundResponse({ description: 'Note not found' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.notesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a note by ID' })
  @ApiParam({ name: 'id', example: 1, description: 'Note ID' })
  @ApiOkResponse({ description: 'Note updated successfully' })
  @ApiBadRequestResponse({ description: 'Validation failed' })
  @ApiNotFoundResponse({ description: 'Note not found' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateNoteDto: UpdateNoteDto,
  ) {
    return this.notesService.update(id, updateNoteDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a note by ID' })
  @ApiParam({ name: 'id', example: 1, description: 'Note ID' })
  @ApiOkResponse({ description: 'Note deleted successfully' })
  @ApiNotFoundResponse({ description: 'Note not found' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.notesService.remove(id);
  }
}
