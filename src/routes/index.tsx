import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oi" },
      { name: "description", content: "Uma página simples de oi." },
      { property: "og:title", content: "Oi" },
      { property: "og:description", content: "Uma página simples de oi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <h1 className="text-6xl font-bold text-foreground">Oi! 👋</h1>
    </div>
  );
}
