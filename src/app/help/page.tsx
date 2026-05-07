import Link from "next/link";
import {
  Wand2,
  UserCog,
  Server,
  ShieldCheck,
  Headphones,
  KeyRound,
} from "lucide-react";

type HelpArticle = {
  id: number;
  title: string;
  description: string;
};

async function getArticles(): Promise<HelpArticle[]> {
  const res = await fetch("http://localhost:5203/api/help/articles", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch help articles");
  }

  return res.json();
}

const icons = [Wand2, UserCog, Server, KeyRound, ShieldCheck, Headphones];

export default async function HelpPage() {
  const articles = await getArticles();

  return (
    <main className="min-h-screen bg-[#f6f7fb] p-8 font-[var(--font-body)]">
      <h1 className="text-3xl font-bold text-[var(--secondary-color)]">
        Help Center
      </h1>

      <p className="mt-2 mb-6 text-sm text-[var(--gray-color)]">
        Get a question about your courses or your account? We’re here to help.
      </p>

      <section className="mb-8 flex items-center justify-between rounded-2xl bg-white p-6 shadow-sm">
        <div>
          <h2 className="text-lg font-bold text-[var(--secondary-color)]">
            Need some help?
          </h2>

          <p className="mt-1 text-sm text-[var(--gray-color)]">
            Want answers right away? Select your reference below for our answers.
          </p>
        </div>

        <button className="rounded-full bg-[var(--primary-color)] px-7 py-2 text-sm font-bold text-white">
          Help
        </button>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => {
          const Icon = icons[index];

          return (
            <Link
              href={`/help/${article.id}`}
              key={article.id}
              className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#ffece7] text-[var(--primary-color)]">
                <Icon size={20} />
              </div>

              <h2 className="text-lg font-bold text-[var(--font-color)]">
                {article.title}
              </h2>

              <p className="mt-2 text-sm leading-5 text-[var(--gray-color)]">
                {article.description}
              </p>

              <span className="mt-4 inline-block text-sm font-medium text-[var(--primary-color)]">
                Read More →
              </span>
            </Link>
          );
        })}
      </section>
    </main>
  );
}