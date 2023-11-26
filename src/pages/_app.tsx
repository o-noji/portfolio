import "@/styles/reset.css";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Sidebar from "@/compornents/Sidebar";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Sidebar />
      <main className="main">
        <div className="main__inner">
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}
export default App;
