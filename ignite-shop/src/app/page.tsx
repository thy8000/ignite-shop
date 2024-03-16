import Image from "next/image";

import { Product } from "./components/product";

import camiseta1 from './assets/images/camisa-1.png';
import camiseta2 from './assets/images/camisa-2.png';
import camiseta3 from './assets/images/camisa-3.png';

export default function Home() {
  return (
    <main className="home flex gap-12 w-full ml-auto min-h-[656px]">
      <Product 
        title="Camiseta 1"
        price="79,90"
        image={camiseta1}
      />

      <Product 
        title="Camiseta 2"
        price="79,90"
        image={camiseta2}
      />
    </main>
  );
}
