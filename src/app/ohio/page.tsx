import type { Metadata } from "next";
import { ProductSalesPage } from "@/components/product-sales-page";
import { getProductBySlug } from "@/data/tours";
import { pageMetadata } from "@/lib/seo";

const product = getProductBySlug("ohio")!;

export const metadata: Metadata = pageMetadata({
  ...product.seo,
  path: "/ohio",
});

export default function OhioPage() {
  return <ProductSalesPage product={product} />;
}
