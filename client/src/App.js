import "./css/global.css";
import { Button } from "react-bootstrap";
import "./Componets/contact-list/ContactsName";
import ContactsName from "./Componets/contact-list/ContactsName";
import { ChatBox } from "./Componets/chat-box/ChatBox";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-5 col-sm-5">
            <ContactsName />
          </div>
          <div className="col-lg-8 col-md-7 col-sm-7">
            <ChatBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
