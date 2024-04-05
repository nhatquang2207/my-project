import "./App.css";
import Nav from "./component/Nav";
import AuthButton from "./component/AuthButton";

function App() {
  return (
    <div className="">
      <div className="grid grid-cols-4   ">
        <div className="col-span-1 bg-blue-400 pl-2">
          <Nav />
        </div>
        <main className="col-span-3">
          <div className=" p-10 mr-30  ">
            <AuthButton />
          </div>
          
        </main>
      </div>
    </div>
  );
}

export default App;
