import type { Metadata } from "next";
import { ProductSalesPage } from "@/components/product-sales-page";
import { getProductBySlug } from "@/data/tours";
import { pageMetadata } from "@/lib/seo";

const product = getProductBySlug("regina")!;

export const metadata: Metadata = pageMetadata({
  ...product.seo,
  path: "/regina",
});

export default function ReginaPage() {
  return <ProductSalesPage product={product} />;
}
