import type Author from "./author";

type PostType = {
  slug: string;
  title: string;
  date: string;
  emoji: string;
  content: string;
  tag: string;
};

export default PostType;
