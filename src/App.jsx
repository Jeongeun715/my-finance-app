import Router from "./shared/Router";
import "./App.css";
import supabase from "./utils/supabase";
console.log(supabase);

function App() {
  return (
    <>
      <Router />
    </>
  );
}

export default App;
