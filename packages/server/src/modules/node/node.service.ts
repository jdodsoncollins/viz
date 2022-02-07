import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Node, Prisma } from '@prisma/client';

@Injectable()
export class NodeService {
  constructor(private prisma: PrismaService) {}

  async node({ id }: { id: number}): Promise<Node | null> {
    return this.prisma.node.findUnique({
      where: {
        id: +id,
      },
    });
  }

  async nodes(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.NodeWhereUniqueInput;
    where?: Prisma.NodeWhereInput;
    orderBy?: Prisma.NodeOrderByWithRelationInput;
  }): Promise<Node[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.node.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createNode(data: Prisma.NodeCreateInput): Promise<Node> {
    return this.prisma.node.create({
      data,
    });
  }

  async updateNode(params: {
    where: Prisma.NodeWhereUniqueInput;
    data: Prisma.NodeUpdateInput;
  }): Promise<Node> {
    const { data, where } = params;
    return this.prisma.node.update({
      data,
      where,
    });
  }

  async deleteNode(where: Prisma.NodeWhereUniqueInput): Promise<Node> {
    return this.prisma.node.delete({
      where,
    });
  }
}
