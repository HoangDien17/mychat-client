import { useAuthHeader } from "react-auth-kit";
import { HandleTokenProps } from "../lib/handleToken";
import { getAccessToken } from "../utils/helper";
import ContactFriend from "./contact-friend.component";
import ListUser from "./list-user.component";

let TG: JSX.Element | React.FC<HandleTokenProps>
export default function Content(props: { tab: string }) {
  const authHeader = useAuthHeader()
  switch (props.tab) {
    case "UserAddOutlined":
      TG = <ListUser />
      break;
    case "ContactsOutlined":
      TG = <ContactFriend token={getAccessToken(authHeader())} />
      break;
    default:
      TG = <div>Hello world!</div>
  }
  return (
    <div className="w-full h-full">
      {TG}
    </div>
  )
}
