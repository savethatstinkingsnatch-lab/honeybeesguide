import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { isChapterId, type ChapterId } from "@/book/data";
import { BookApp } from "@/components/book-app";

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): { chapter: ChapterId } => {
    const raw = typeof search.chapter === "string" ? search.chapter : "cover";
    return { chapter: isChapterId(raw) ? raw : "cover" };
  },
  component: Home,
});

function Home() {
  const { chapter } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  return (
    <BookApp
      chapter={chapter}
      onChapter={(next) => {
        void navigate({ search: { chapter: next } });
        window.scrollTo({ top: 0, left: 0 });
      }}
    />
  );
}
