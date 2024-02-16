import { PrismaClient } from '@prisma/client';
import { Post } from './interfaces';

const prisma = new PrismaClient()

export async function getPosts(tagId: string|undefined):Promise<Post[]|[]> {
    let where = {
        status: true,
        postTag: {}
    };
    if(typeof tagId == 'string'){
        where['postTag'] = {
            some: {
                tagId: +tagId
            }
        }
    }
    console.log(where);
    const posts:Post[]|[] = await prisma.post.findMany({
        where: where,
        orderBy: {
            createdAt: 'desc'
        }
    });

    return posts;
}

export async function getPostDetails(slug: string):Promise<Post|null> {
    const post:Post|null = await prisma.post.findFirst({
        where: {
            'slug': slug
        },
        include: {
            author: {
                select: {
                    firstName: true,
                    lastName: true
                }
            },
            postTag: {
                include: {
                    tag: true
                }
            }
        }
        
    });

    return post;
}

export async function getUser(email: string):Promise<User|null> {
    const user:User|null = await prisma.user.findFirst({
        where: {
            email: email,
            status: true
        }
    });
    return user;
}