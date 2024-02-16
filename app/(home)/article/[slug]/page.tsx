import * as db from "@/lib/db";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Badge, badgeVariants } from "@/components/ui/badge";
import Link from "next/link";
import TestImage from "@/assets/img/1.jpg"
import type { Metadata, ResolvingMetadata } from 'next'
import { Post, PostTag } from "@/lib/interfaces";


export async function generateMetadata(
  post: Post,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: post?.title
  }
}

export default async function ArticleDetails({params}: {params: {slug: string}}) {
    const post:Post|null = await db.getPostDetails(params.slug);
    // await generateMetadata(post);
    return (
        <div className="">
          <div className="flex gap-2">
            {post?.postTag.map((item:PostTag, index:number) => (
              <Link href={`/?tag=${item.tagId}`} className={badgeVariants({ variant: "destructive" })} key={index}>{item.tag.name}</Link>
            ))}
          </div>
          <h1 className="mt-8">
            <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
              {post?.author.firstName} {post?.author.lastName} - Article
            </span>
            <span className="mt-3 block text-3xl text-center leading-8 font-bold sm:text-4xl">
              {post?.title}
            </span>
          </h1>
          <Image src={TestImage} alt="title image" className="rounded-lg mt-8 border"></Image>
          <div className="mt-16 prose lg:prose-xl tracking-wide dark:prose-invert" dangerouslySetInnerHTML={{ __html: post?.content as string }}></div>
        </div>
    )
}