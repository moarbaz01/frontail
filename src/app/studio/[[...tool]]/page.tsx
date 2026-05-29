import Studio from "./Studio";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Frontail Content Studio",
  robots: {
    index: false,
    follow: false,
  },
};

export { viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <Studio />;
}
