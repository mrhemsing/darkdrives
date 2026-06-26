import { ProductCard } from "@/components/product-card";
import { PageHero } from "@/components/page-hero";
import { audioProducts, bundleProducts, guideProducts } from "@/data/tours";
import { pageMetadata, seo } from "@/lib/seo";

export const metadata = pageMetadata({ ...seo.catalog, path: "/catalog" });

export default function CatalogPage() {
  const individualProducts = [...audioProducts, ...guideProducts];
  const totalValue = individualProducts.reduce(
    (sum, product) => sum + Number(product.priceAmount),
    0,
  );

  return (
    <main>
      <PageHero eyebrow="DARK DRIVES // THE COLLECTION" title="Choose your drive.">
        <p>
          One night, one car, your nerve. Start with a guide you can open right
          now, or pre-order the full narrated tour.
        </p>
      </PageHero>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-sick">
                Audio driving tours
              </p>
              <h2 className="mt-4 font-display text-5xl uppercase leading-none">
                Premium.
              </h2>
            </div>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {audioProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ash-line bg-paper/70 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-sick">
            GPS guides
          </p>
          <h2 className="mt-4 font-display text-5xl uppercase leading-none">
            Instant download.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {guideProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 border border-blood bg-background p-6 lg:grid-cols-[1fr_0.6fr] lg:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-sick">
              Bundle target
            </p>
            <h2 className="mt-4 font-display text-5xl uppercase leading-none">
              Want it all?
            </h2>
            <p className="mt-5 text-bone-dim">
              The All Access pass unlocks every guide and tour. The current
              single-product total is ${totalValue}; the bundle is priced to
              make the decision easy.
            </p>
          </div>
          {bundleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
