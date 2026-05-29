import type { BlogBlock } from "@/sanity/blog";
import Image from "next/image";

const PostBody = ({ body }: { body: BlogBlock[] }) => {
  return (
    <div className="space-y-6 text-gray-700">
      {body.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2
              key={`${block.text}-${index}`}
              className="font-anton pt-4 text-3xl font-extrabold tracking-normal text-gray-900"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "list") {
          return (
            <ul
              key={`${block.items.join("-")}-${index}`}
              className="list-disc space-y-2 pl-5 leading-relaxed"
            >
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        if (block.type === "image") {
          return (
            <figure key={`${block.url}-${index}`} className="py-2">
              <div className="relative aspect-[16/9] overflow-hidden rounded-md border border-gray-200 bg-gray-50">
                <Image
                  src={block.url}
                  alt={block.alt}
                  fill
                  sizes="(min-width: 1024px) 960px, 100vw"
                  className="object-cover"
                />
              </div>
              {block.caption && (
                <figcaption className="mt-2 text-center text-xs text-gray-500">
                  {block.caption}
                </figcaption>
              )}
            </figure>
          );
        }

        return (
          <p key={`${block.text}-${index}`} className="leading-relaxed">
            {block.text}
          </p>
        );
      })}
    </div>
  );
};

export default PostBody;
