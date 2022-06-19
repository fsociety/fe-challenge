// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss'
import Home from './Home';
import Detail from './Detail';
import { Routes, Route } from "react-router-dom";

export function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
