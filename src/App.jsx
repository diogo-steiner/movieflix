import { MoviesProvider } from "./contexts/MoviesContext";
import { RoutesMain } from "./routes/routes";

function App() {
  return (
    <MoviesProvider>
      <RoutesMain />
    </MoviesProvider>
  );
}

export default App;
