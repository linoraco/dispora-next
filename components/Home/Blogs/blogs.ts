export interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const blogs: Blog[] = [
  {
    id: 1,
    image: "/images/blog/blog-01.png",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
  },
];
