// import {
//   createQuery,
//   QueryClient,
//   QueryClientProvider,
// } from "@tanstack/solid-query";
import { Component, createResource, For, Match, Switch } from "solid-js";

// const queryClient = new QueryClient();

const fetchFakeData = async () =>
  (await fetch("https://dummyjson.com/products")).json();

const Calculator: Component = () => {
  const [data] = createResource(fetchFakeData);
  return (
    // <>
    //   <span>{data.loading && "Loading..."}</span>
    //   <For each={data()?.products}>
    //     {(product) => <pre>{JSON.stringify(product, null, 2)}</pre>}
    //   </For>
    // </>
    <Switch>
      <Match when={data.loading}>
        <p>Loading...</p>
      </Match>
      <Match when={data.error}>
        <p>Error: {data.error.message}</p>
      </Match>
      <Match when={data.state === "ready"}>
        <For each={data().products}>
          {(product) => <pre>{JSON.stringify(product, null, 2)}</pre>}
        </For>
      </Match>
    </Switch>
  );
};

// const CalculatorSolidQuery: Component = () => {
//   const query = createQuery(() => ["data"], fetchFakeData);
//   return (
//     <Switch>
//       <Match when={query.isLoading}>
//         <p>Loading...</p>
//       </Match>
//       <Match when={query.isError}>
//         <p>Error: {(query.error as Error).message}</p>
//       </Match>
//       <Match when={query.isSuccess}>
//         <For each={query.data.products}>
//           {(product) => <pre>{JSON.stringify(product, null, 2)}</pre>}
//         </For>
//       </Match>
//     </Switch>
//   );
// };

const App: Component = () => {
  return (
    // <QueryClientProvider client={queryClient}>
    <Calculator />
    // </QueryClientProvider>
  );
};

export default App;
