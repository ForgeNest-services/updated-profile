import React from "react";
import { listSubscribers } from "@/server/newsletter";

export default async function NewsletterPage() {
  const subs = await listSubscribers();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Newsletter Subscribers</h1>
        <p className="text-sm text-foreground/70 mt-1">
          Total subscribers: {subs.length}
        </p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-foreground/20 bg-card">
        <table className="min-w-full text-sm">
          <thead className="bg-foreground/5 text-left">
            <tr>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Subscribed</th>
            </tr>
          </thead>
          <tbody>
            {subs.map((s) => (
              <tr key={s.id} className="border-t border-foreground/10">
                <td className="px-4 py-2">{s.email}</td>
                <td className="px-4 py-2">
                  <time dateTime={s.createdAt}>{s.createdAt.slice(0, 10)}</time>
                </td>
              </tr>
            ))}
            {subs.length === 0 && (
              <tr>
                <td className="px-4 py-6 text-foreground/70" colSpan={2}>
                  No subscribers yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
