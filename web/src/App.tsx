import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { Widget } from './components/Widget';

export function App() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <NavBar />
      <Header />
      <Widget />
    </div>
  );
}