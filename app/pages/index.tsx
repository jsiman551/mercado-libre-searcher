import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Content from "@/components/content";

export default function Home() {
  return (
    <>
      <Head>
        <title>Buscador de Productos</title>
        <meta
          name="description"
          content="Buscador de Productos de Mercado Libre"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={store}>
        <main>
          <Content />
        </main>
      </Provider>
    </>
  );
}
