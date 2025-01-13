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

import Header from "@/components/header";

export default function Home() {
  return (
    <div>
      <div>
        <Header></Header>
      </div>

      <div className="snap-y snap-mandatory">
        <div className="text-center justify-center">
          <div className="text-4xl m-5 mt-20">Next Gen Nutrition Tracking</div>
          <div className="text-3xl m-5">
            Make your next dietary decisions as <em>sharp</em> as a knife.
          </div>
        </div>
        <div>hello</div>
      </div>
    </div>
  );
}
