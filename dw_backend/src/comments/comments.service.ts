import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CommentsService {
  constructor(private readonly database: DatabaseService) {}
  async create(createCommentDto: CreateCommentDto, authorId: number) {
    const { content, postId } = createCommentDto;

    const findPost = await this.database.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!findPost) {
      throw new NotFoundException('ไม่พบ post, สร้าง comment ไม่สำเร็จ');
    }

    const newComment = await this.database.comment.create({
      data: {
        content,
        postId,
        authorId,
      },
    });

    if (!newComment) {
      throw new BadRequestException('สร้าง comment ไม่สำเร็จ');
    }

    return newComment;
  }

  async findAll(postId: number) {
    const comments = await this.database.comment.findMany({
      where: {
        postId,
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    if (!comments) {
      throw new NotFoundException('ไม่พบ comments ใต้ postId');
    }

    return comments;
  }
}
