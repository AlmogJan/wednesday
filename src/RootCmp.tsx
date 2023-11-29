import { Header } from "./components/Header";
import { Aside } from "./components/Aside";
import { Board } from "./views/Board";

export function RootCmp() {
  return <div className="card-container">
    <div className="app-container">
      <Aside />
      <div className="board-container">
        <header>
          <Header />
        </header>
        <main>
          <Board />
        </main>
      </div>
    </div>
  </div>
}