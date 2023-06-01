import "./App.scss";
import Header from "./components/Header.js";
import TableUsers from "./components/TableUsers";
function App() {
  return (
    <div className="app-container">
          <Header />
          <TableUsers />
    </div>
  );
}

export default App;
