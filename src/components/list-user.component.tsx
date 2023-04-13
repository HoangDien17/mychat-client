import { UserAddOutlined } from '@ant-design/icons';
import { Input } from 'antd';

import { useState } from "react";
import { ChatItem } from "react-chat-elements";
import { IUser } from '../services/interface';
import { useAuthUser } from 'react-auth-kit'
import { useGetUser } from '../hooks/user.hook';


export default function ListUser() {
  const { Search } = Input;
  const [search, setSearch] = useState<string>("");
  const userId = String(useAuthUser()())

  const onSearch = (value: string) => {
    if (!value || value === '') return;
    setSearch(value);
  }

  const { data: friends, isLoading } = useGetUser(userId, search);

  return (
    <div>
      <div className='w-[80%] m-auto p-4 h-[50px]'>
        <Search placeholder="Input search text" onSearch={onSearch} enterButton />
      </div>
      <hr className="mt-8" />
      <div>
        {friends && friends.length > 0 && friends.map((friend: IUser) => {
          return (
            <div className="flex items-center" key={friend._id}>
              <ChatItem
                statusColor="Lime"
                lazyLoadingImage='https://avatars.githubusercontent.com/u/80540635?v=4'
                showVideoCall={true}
                id={friend._id}
                avatar="https://avatars.githubusercontent.com/u/80540635?v=4"
                alt="kursat_avatar"
                title={friend.userName}
                subtitle="Ok. See you !"
                unread={0}
                className="pt-3 pl-3 pb-3 w-full flex items-end"
              />
              <div className="w-[5%] p-5 justify-center items-center flex bg-sky-400 h-[72px] mr-10 cursor-pointer" key={friend._id}>
                <UserAddOutlined />
              </div>

            </div>
          )
        })}
        {isLoading && <div className="text-center mt-10">Loading...</div>}
      </div>
    </div>
  )
}
