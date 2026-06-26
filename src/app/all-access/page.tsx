import type { Metadata } from "next";
import { ProductSalesPage } from "@/components/product-sales-page";
import { getProductBySlug } from "@/data/tours";
import { pageMetadata } from "@/lib/seo";

const product = getProductBySlug("all-access")!;

export const metadata: Metadata = pageMetadata({
  ...product.seo,
  path: "/all-access",
});

export default function AllAccessPage() {
  return <ProductSalesPage product={product} />;
}
