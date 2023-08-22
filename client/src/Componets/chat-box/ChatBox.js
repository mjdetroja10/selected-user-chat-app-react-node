import "../../css/ChatBox.css";
import { MessageBox } from "./message-cotainer/MessageBox";
import { SendMessage } from "./send-message/SendMessage";
import { CurrentUser } from "./current-user/CurrentUser";

export const ChatBox = () => {
  return (
    <div className="chatbox">
      <CurrentUser />
      <MessageBox />
      <SendMessage />
    </div>
  );
};
