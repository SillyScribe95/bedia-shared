import logo from "./logo.svg";
import "./App.css";
import { getBookInfo } from "./functions/bookFuncs";
import { logs } from ".";

function App() {
  // 1BOOK
  async function getBooks() {
    const fuhgwer =
      //
      "game of thrones ";

    const isjdfew = await getBookInfo(fuhgwer);

    logs.loggo("getBooks---", isjdfew);
    //
  }

  function funcvo(nameo, xcvbokg) {
    const skdwe = {
      onClick: xcvbokg,
    };

    const asewae = <button {...skdwe}>{nameo}</button>;

    return asewae;
  }

  const skdfzxc = (
    <div className="App">
      {/*  */}
      {funcvo("GET BOOK BY NAME")}
    </div>
  );

  return skdfzxc;
}

export default App;
