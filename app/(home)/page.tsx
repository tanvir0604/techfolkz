import Image from "next/image";
import * as db from "@/lib/db";
import { Post } from "@prisma/client";
import { Card, CardContent } from "@/components/ui/card";
import TestImage from "@/assets/img/1.jpg"
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home({searchParams}: {searchParams?: {tag?: string}}) {
  // console.log(searchParams);
  const items:Post[] = await db.getPosts(searchParams?.tag);
  // console.log(items);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((post, index) => (
        <Card key={index}>
          <Image src={TestImage} alt={post.title} className="rounded-t-lg h-[200px] object-cover"></Image>
          <CardContent className="mt-5">
            <h3 className="text-lg line-clamp-1 font-bold">{post.title}</h3>
            <p className="small line-clamp-4 text-sm mt-2 text-gray-600 dark:text-gray-400">{post.content.replace(/(<([^>]+)>)/gi, "")}</p>
            <Button className="w-full mt-7">
              <Link href={`/article/${post.slug}`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
