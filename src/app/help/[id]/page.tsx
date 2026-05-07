import Link from "next/link";

type HelpArticle = {
  id: number;
  title: string;
  description: string;
  content: string;
};

async function getArticle(id: string): Promise<HelpArticle> {
  const res = await fetch(`https://shiko-helpcenter-api-larsa-dvgbe6dthdhgfqd5.swedencentral-01.azurewebsites.net/api/help/articles/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch article");
  }

  return res.json();
}

export default async function HelpArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = await getArticle(id);

  return (
    <main className="min-h-screen bg-[#f6f7fb] p-8 font-[var(--font-body)]">
      
      <Link
        href="/help"
        className="text-sm font-medium text-[var(--primary-color)]"
      >
        ← Back to Help Center
      </Link>

      <section className="mt-6 max-w-4xl rounded-3xl bg-white p-8 shadow-sm">
        
        <span className="inline-flex rounded-full bg-[#ffece7] px-4 py-2 text-sm font-medium text-[var(--primary-color)]">
          Help Article
        </span>

        <h1 className="mt-6 text-4xl font-bold text-[var(--secondary-color)]">
          {article.title}
        </h1>

        <p className="mt-4 max-w-2xl text-[var(--gray-color)] leading-7">
          {article.description}
        </p>

        <div className="my-8 h-px bg-gray-100" />

        <div>
          <h2 className="text-xl font-semibold text-[var(--secondary-color)]">
            Details
          </h2>

          <p className="mt-4 text-[var(--font-color)] leading-8">
            {article.content}
          </p>
        </div>

        <div className="mt-8 rounded-2xl bg-[#f6f7fb] p-5">
          <h3 className="font-semibold text-[var(--secondary-color)]">
            Need more help?
          </h3>

          <p className="mt-2 text-sm text-[var(--gray-color)]">
            If this article does not answer your question, contact support or check another help topic.
          </p>
        </div>

      </section>
    </main>
  );
}