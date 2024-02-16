import { User as PUser, Post as PPost, Tag as PTag, PostTag as  PPostTag} from "@prisma/client";

export interface PostTag extends PPostTag{
    tag: PTag
}
export interface Post extends PPost{
    author:     PUser,
    postTag:    PostTag[]
}

