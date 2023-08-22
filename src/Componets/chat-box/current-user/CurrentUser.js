import { MdKeyboardBackspace } from "react-icons/md";
import { CgLogOff } from "react-icons/cg";

export const CurrentUser = () => {
  return (
    <div className="userbox">
      <div className="user">
        <MdKeyboardBackspace />
        <img src="Images/UserImage.jpg" alt="User-Image"></img>
        <div className="name-box online">
          <p>J. K. Rowling</p>
          <span>Online</span>
        </div>
      </div>
      <div className="logout">
        <CgLogOff />
      </div>
    </div>
  );
};
