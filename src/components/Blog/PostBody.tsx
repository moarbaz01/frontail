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
              className="font-anton pt-4 text-2xl font-extrabold tracking-normal text-gray-900 md:text-3xl"
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

        if (block.type === "table") {
          return (
            <figure key={`${block.caption || "table"}-${index}`} className="py-2">
              <div className="overflow-x-auto rounded-md border border-gray-200">
                <table className="min-w-[640px] w-full border-collapse bg-white text-sm">
                  {block.headers.length > 0 && (
                    <thead className="bg-gray-50 text-left text-gray-900">
                      <tr>
                        {block.headers.map((header) => (
                          <th
                            key={header}
                            className="border-b border-gray-200 px-4 py-3 font-bold"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                  )}
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={rowIndex} className="odd:bg-white even:bg-gray-50">
                        {row.map((cell, cellIndex) => (
                          <td
                            key={`${rowIndex}-${cellIndex}`}
                            className="border-b border-gray-100 px-4 py-3 text-gray-700"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
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
