import { ProductCard } from "@/components/product-card";
import { PageHero } from "@/components/page-hero";
import { audioProducts, bundleProducts, guideProducts } from "@/data/tours";
import { pageMetadata, seo } from "@/lib/seo";

export const metadata = pageMetadata({ ...seo.catalog, path: "/catalog" });

export default function CatalogPage() {
  const individualProducts = [...audioProducts, ...guideProducts];
  const bundle = bundleProducts[0];

  return (
    <main>
      <PageHero eyebrow="DARK DRIVES // THE COLLECTION" title="Choose your drive.">
        <p>
          One night, one car, your nerve. Start with a guide you can open right
          now, or pre-order the full narrated tour.
        </p>
      </PageHero>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 border-2 border-blood bg-background p-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-sick">
              Best value
            </p>
            <h2 className="mt-4 font-display text-5xl uppercase leading-none">
              Unlock the whole shelf.
            </h2>
            <p className="mt-5 text-bone-dim">
              Saskatoon audio, Regina and Lethbridge GPS guides, and Ohio
              150+ location mega guide in one checkout.
            </p>
            <p className="mt-5 font-mono text-sm uppercase tracking-[0.04em] text-ash">
              Buy separately: <span className="line-through">~$57 CAD</span>.
              All Access: {bundle?.priceDisplay}. You save ~$23.
            </p>
          </div>
          {bundle ? <ProductCard product={bundle} /> : null}
        </div>
      </section>

      <section className="border-y border-ash-line bg-paper/70 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-sick">
                All products
              </p>
              <h2 className="mt-4 font-display text-5xl uppercase leading-none">
                Compare every drive.
              </h2>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {individualProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
