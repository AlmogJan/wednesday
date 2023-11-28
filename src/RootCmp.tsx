import { AppHeader } from "./components/AppHeader";
import { Aside } from "./components/Aside";
import { BoardIndex } from "./views/BoardIndex";

export function RootCmp() {
  return <div className="app-container">
    <Aside />
    <div className="main-section-container">
      <AppHeader />
      <main>
        <BoardIndex />
      </main>
    </div>
  </div>
}