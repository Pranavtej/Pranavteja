import type { Metadata } from "next";
// import { allPosts } from "contentlayer/generated";
// import PostCard from "./components/post-card";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.",
};

export default async function Blog() {
  return (
    <div className="mx-5 sm:mx-auto mt-16 sm:mt-20 md:border-l md:border-zinc-100 md:pl-6">
      <div className="flex max-w-3xl flex-col space-y-16">
        <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Started my <a href="https://twitter.com/hashtag/OpenSource?src=hash&amp;ref_src=twsrc%5Etfw">#OpenSource</a> contribution this year with <a href="https://twitter.com/unkeydev?ref_src=twsrc%5Etfw">@unkeydev</a> 🖤! <br><br>Big thanks to <a href="https://twitter.com/chronark_?ref_src=twsrc%5Etfw">@chronark_</a> <a href="https://twitter.com/hashtag/ossgg?src=hash&amp;ref_src=twsrc%5Etfw">#ossgg</a> <a href="https://twitter.com/hashtag/opensource?src=hash&amp;ref_src=twsrc%5Etfw">#opensource</a> <a href="https://t.co/HXDFuGSxcK">pic.twitter.com/HXDFuGSxcK</a></p>&mdash; Pranav Teja (@impranavteja) <a href="https://twitter.com/impranavteja/status/1847547014545846430?ref_src=twsrc%5Etfw">October 19, 2024</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        {/* <p className="text-xl font-medium text-zinc-400">
         No posts yet. Check back later!
        </p> */}
        {/* {allPosts
          .sort((a, b) => {
            if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <PostCard key={post.slug} post={post} />
          ))} */}
      </div>
    </div>
  );
}
