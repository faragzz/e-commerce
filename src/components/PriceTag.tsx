import { formatPrice } from "@/app/lib/format";

interface PriceTagProps {
  price: number;
  className?: string;
}

export default function PriceTag({ price, className }: PriceTagProps) {
  return <span className="${className} badge">{formatPrice(price)}</span>;
}
