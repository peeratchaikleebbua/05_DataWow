import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserMe } from 'src/common/decorators/user-me.decorator';
import { AuthUser } from 'src/auths/types/auth.type';
import { FindAllCommentDto } from './dto/find-all-comment.dto';

@ApiTags('Comment')
@Controller('comments')
@ApiBearerAuth()
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  async create(
    @Body() createCommentDto: CreateCommentDto,
    @UserMe() user: AuthUser,
  ) {
    const authorId = user.userId;
    return this.commentsService.create(createCommentDto, authorId);
  }

  @Get()
  async findAll(@Query() query: FindAllCommentDto) {
    const postId = query.postId;

    return this.commentsService.findAll(postId);
  }
}
