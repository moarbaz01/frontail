import React from "react";
import type { BlogBlock } from "@/sanity/blog";
import Image from "next/image";
import Link from "next/link";

const renderFormattedText = (text: string) => {
  if (!text) return null;

  const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      elements.push(text.substring(lastIndex, match.index));
    }

    if (match[1] && match[2]) {
      const label = match[1];
      const href = match[2];
      const isInternal = href.startsWith("/") || href.startsWith("#");

      if (isInternal) {
        elements.push(
          <Link
            key={match.index}
            href={href}
            className="font-semibold text-primary underline decoration-primary/40 underline-offset-2 hover:decoration-primary"
          >
            {label}
          </Link>
        );
      } else {
        elements.push(
          <a
            key={match.index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary underline decoration-primary/40 underline-offset-2 hover:decoration-primary"
          >
            {label}
          </a>
        );
      }
    } else if (match[3]) {
      elements.push(
        <strong key={match.index} className="font-bold text-gray-900">
          {match[3]}
        </strong>
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    elements.push(text.substring(lastIndex));
  }

  return elements.length > 0 ? elements : text;
};

const PostBody = ({ body }: { body: BlogBlock[] }) => {
  return (
    <div className="space-y-6 text-gray-700">
      {body.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2
              key={`${block.text}-${index}`}
              className="font-anton pt-4 text-xl font-extrabold tracking-normal text-gray-900 md:text-3xl"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "list") {
          return (
            <ul
              key={`${block.items?.join("-") || "list"}-${index}`}
              className="list-disc space-y-2 pl-5 leading-relaxed"
            >
              {block.items &&
                block.items.map((item, itemIdx) => (
                  <li key={`${item}-${itemIdx}`}>{renderFormattedText(item)}</li>
                ))}
            </ul>
          );
        }

        if (block.type === "image") {
          return (
            <figure key={`${block.url || "img"}-${index}`} className="py-2">
              <div className="relative aspect-[16/9] overflow-hidden rounded-md border border-gray-200 bg-gray-50">
                {block.url && (
                  <Image
                    src={block.url}
                    alt={block.alt || ""}
                    fill
                    sizes="(min-width: 1024px) 960px, 100vw"
                    className="object-cover"
                  />
                )}
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
            <figure
              key={`${block.caption || "table"}-${index}`}
              className="py-2"
            >
              <div className="overflow-x-auto rounded-md border border-gray-200">
                <table className="min-w-[640px] w-full border-collapse bg-white text-sm">
                  {block.headers && block.headers.length > 0 && (
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
                    {block.rows &&
                      block.rows.map((row, rowIndex) => (
                        <tr
                          key={rowIndex}
                          className="odd:bg-white even:bg-gray-50"
                        >
                          {Array.isArray(row) &&
                            row.map((cell, cellIndex) => (
                              <td
                                key={`${rowIndex}-${cellIndex}`}
                                className="border-b border-gray-100 px-4 py-3 text-gray-700"
                              >
                                {renderFormattedText(cell)}
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
            {renderFormattedText(block.text)}
          </p>
        );
      })}
    </div>
  );
};

export default PostBody;
