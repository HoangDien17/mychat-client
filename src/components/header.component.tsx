import { ContactsOutlined, MessageOutlined, NotificationOutlined, UserAddOutlined } from '@ant-design/icons';

export default function Header(props: { tab: string, action: React.Dispatch<React.SetStateAction<string>> }) {
  const arr = [{
    key: "MessageOutlined",
    element: <MessageOutlined />
  }, {
    key: "ContactsOutlined",
    element: <ContactsOutlined />
  }, {
    key: "UserAddOutlined",
    element: <UserAddOutlined />
  }, {
    key: "NotificationOutlined",
    element: <NotificationOutlined />
  }]


  return (
    <div className="w-full h-full bg-sky-400">
      <div className="avatar w-full h-[15%]">
        <img className="rounded-[50%] p-2 m-auto w-[80%]" src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2022/05/hinh-avatar-doi-dep-2022-6-696x696.jpg?fit=700%2C20000&quality=95&ssl=1" alt="avatar" />
      </div>
      <div className="bar justify-around flex flex-col h-[65%]">

        {arr.map((item: { key: string, element: JSX.Element }) => (
          <div className={`justify-center items-center flex text-3xl text-white cursor-pointer ${props.tab === item.key ? " text-zinc-900" : ""}`} key={item.key} onClick={() => props.action(item.key)}>
            {item.element}
          </div>
        ))}
      </div>
    </div>
  );
}
