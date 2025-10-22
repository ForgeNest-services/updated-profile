export default function SearchBar({ q }: { q?: string }) {
  return (
    <form method="get" action="/blogs" className="flex gap-3">
      <input
        name="q"
        defaultValue={q || ""}
        placeholder="Search posts..."
        className="w-full max-w-md rounded-full border border-foreground/20 bg-background px-4 py-3 text-sm transition-all duration-300 focus:border-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/10"
      />
      <button
        type="submit"
        className="rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity duration-300"
      >
        Search
      </button>
    </form>
  );
}
