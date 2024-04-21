import Link from "next/link";

import { db } from "../server/db/index"

export const dynamic = "force-dynamic"

export default async function HomePage() {

  const contacts = await db.query.posts.findMany()

  return (
    <main className="flex flex-wrap gap-5">
      {contacts.map((post) => (
        <div>
          <li key={post.id}>{post.name}</li>
        </div>
      ))}
    </main>
  );
}
