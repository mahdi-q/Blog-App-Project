"use client";

import PostCard from "@/components/PostCard";
import { useGetPostById } from "@/hooks/usePosts";
import { useGetUser } from "@/hooks/useUsers";
import Empty from "@/ui/Empty";
import Fallback from "@/ui/Fallback";

function SavedPostList() {
  const { isLoading, user } = useGetUser();
  console.log(user);

  if (isLoading) return <Fallback />;

  if (!user || !user.bookmarkedPosts || user.bookmarkedPosts.length <= 0)
    return <Empty resourceName="پستی" />;

  return (
    <div className="grid grid-cols-12 gap-x-6 gap-y-8">
      {user.bookmarkedPosts.map((postId) => (
        <SavedPostItem key={postId} postId={postId} />
      ))}
    </div>
  );
}

export default SavedPostList;

function SavedPostItem({ postId }) {
  const { isLoading, post } = useGetPostById(postId);

  if (isLoading) return null;

  return <PostCard key={post._id} post={post} hasInteractions={false} />;
}
