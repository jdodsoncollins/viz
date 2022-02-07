import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { User as UserModel, Node as NodeModel } from '@prisma/client';
import { NodeService } from './modules/node/node.service';
import { UserService } from './modules/user/user.service';

@Controller()
export class AppController {
  constructor(
    private readonly userService: UserService,
    private readonly nodeService: NodeService
  ) {}

  @Get('node/:id')
  async getNodeById(@Param('id') id: string): Promise<NodeModel | null> {
    return this.nodeService.node({ id: Number(id) });
  }

  @Post('node')
  async createNode(
    @Body() nodeData: { title: string; content?: string }
  ): Promise<NodeModel> {
    const { content } = nodeData;
    return this.nodeService.createNode({
      content,
    });
  }

  @Post('user')
  async signupUser(
    @Body() userData: { name?: string; email: string }
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Get('users')
  async getUsers(): Promise<UserModel[] | null> {
    return this.userService.users({});
  }

  @Get('user/:id')
  async getUserById(@Param('id') id: string): Promise<UserModel | null> {
    return this.userService.user({ id: +id });
  }

  @Delete('node/:id')
  async deleteNode(@Param('id') id: string): Promise<NodeModel> {
    return this.nodeService.deleteNode({ id: Number(id) });
  }
}
