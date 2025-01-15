import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class PostsService {
  constructor(private readonly database: DatabaseService) {}

  async create(createPostDto: CreatePostDto, authorId: number) {
    const { title, content, category } = createPostDto;

    const newPost = await this.database.post.create({
      data: {
        title,
        content,
        category,
        authorId,
      },
    });

    if (!newPost) {
      throw new BadRequestException('สร้าง post ไม่สำเร็จ');
    }

    return newPost;
  }

  async findAll() {
    return await this.database.post.findMany({
      orderBy: {
        createdAt: "desc"
      }
    });
  }

  async findOne(id: number) {
    const post = await this.database.post.findUnique({
      where: {
        id,
      },
    });

    if (!post) {
      throw new NotFoundException('ไม่พบ post');
    }

    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const findPost = await this.database.post.findUnique({
      where: { id },
    });

    if (!findPost) {
      throw new NotFoundException('Post not found. แก้ไข post ไม่สำเร็จ');
    }

    const updatedPost = await this.database.post.update({
      where: {
        id,
      },
      data: updatePostDto,
    });

    if (!updatedPost) {
      throw new BadRequestException('แก้ไข post ไม่สำเร็จ');
    }

    return updatedPost;
  }

  async remove(id: number) {
    const removedPost = await this.database.post.findUnique({
      where: { id },
    });

    if (!removedPost) {
      throw new NotFoundException('Post not found. ลบ post ไม่สำเร็จ');
    }

    await this.database.post.delete({
      where: { id },
    });

    return { message: 'ลบ post สำเร็จ' };
  }
}
