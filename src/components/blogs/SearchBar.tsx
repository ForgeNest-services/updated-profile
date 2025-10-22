export default function SearchBar({ q }: { q?: string }) {
  return (
    <form method="get" action="/blogs" className="mb-6 flex gap-2">
      <input
        name="q"
        defaultValue={q || ""}
        placeholder="Search posts..."
        className="w-full max-w-md rounded-md border border-foreground/20 bg-background px-3 py-2 text-sm"
      />
      <button
        type="submit"
        className="rounded-md bg-primary px-4 py-2 text-sm text-white hover:bg-primary/90"
      >
        Search
      </button>
    </form>
  );
}
