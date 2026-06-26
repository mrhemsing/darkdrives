import type { Metadata } from "next";
import { ProductSalesPage } from "@/components/product-sales-page";
import { getProductBySlug } from "@/data/tours";
import { pageMetadata } from "@/lib/seo";

const product = getProductBySlug("lethbridge")!;

export const metadata: Metadata = pageMetadata({
  ...product.seo,
  path: "/lethbridge",
});

export default function LethbridgePage() {
  return <ProductSalesPage product={product} />;
}
