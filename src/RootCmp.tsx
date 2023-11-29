import { Header } from "./components/Header";
import { Aside } from "./components/Aside";
import { Board } from "./views/Board";

export function RootCmp() {
  return <div className="app-container">
    <Aside />
    <div className="container">
      <header>
        <Header />
      </header>
      <main>
        <Board />
      </main>
    </div>
  </div>
}