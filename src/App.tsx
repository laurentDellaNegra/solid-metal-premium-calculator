import { Component, createResource } from 'solid-js';

const fetchFakeData = async () => (await fetch('https://dummyjson.com/products/1')).json()

const App: Component = () => {
  const [data] = createResource(fetchFakeData)
  return (
    <>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
    <pre>{JSON.stringify(data(), null, 2)}</pre>
    </>
  );
};

export default App;
