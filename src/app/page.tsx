// import { Suspense } from "react";

// export default async function Home() {
//   let data = await fetch(
//     "https://world.openfoodfacts.org/api/v0/product/737628064502.json"
//   );
//   let results = await data.json();
//   console.log(results);
//   await new Promise((r) => setTimeout(r, 2000));
//   return (
//     <Suspense fallback={<p>loading</p>}>
//       <p>{results.product.generic_name}</p>
//       <img src={results.product.image_thumb_url}></img>
//     </Suspense>
//   );
// }

import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div className="text-center">
        <div className="text-5xl m-5">Sharp Knife</div>
        <div className="text-3xl m-5">Make Sharp Nutrition Decisions</div>
      </div>
    </div>
  );
}
