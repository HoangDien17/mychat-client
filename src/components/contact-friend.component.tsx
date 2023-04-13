import { DeleteOutlined } from "@ant-design/icons";
import { ChatItem } from "react-chat-elements";
import { useGetContact } from "../hooks/contact.hook";
import handleToken from "../lib/handleToken";
import { IContact } from "../services/interface";

function ContactlistContact(props: { token: string }) {
  const { data: Contactlist, isLoading } = useGetContact(props.token)

  return (
    <div>
      {Contactlist && Contactlist.length > 0 && Contactlist.map((Contactlist: IContact) => {
        return (
          <div className="flex items-center" key={Contactlist._id}>
            <ChatItem
              statusColor="Lime"
              lazyLoadingImage='https://avatars.githubusercontent.com/u/80540635?v=4'
              showVideoCall={true}
              id={Contactlist._id}
              avatar="https://avatars.githubusercontent.com/u/80540635?v=4"
              alt="kursat_avatar"
              title={Contactlist.contactName}
              subtitle="Ok. See you !"
              unread={0}
              className="pt-3 pl-3 pb-3 w-full flex items-end"
            />
            <div className="w-[5%] p-5 justify-center items-center flex bg-[red] h-[72px] mr-10 cursor-pointer" key={Contactlist._id}>
              <DeleteOutlined />
            </div>

          </div>
        )
      })}
      {isLoading && <div className="text-center mt-10">Loading...</div>}
    </div>
  )

}

export default handleToken(ContactlistContact)