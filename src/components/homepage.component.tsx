import { Button } from "antd";
import { Link } from "react-router-dom";


export function HomePage() {
  return (
    <div
      className="bg-fixed top-0 left-0 w-full h-screen bg-no-repeat bg-cover flex justify-center items-center"
      style={{ backgroundImage: `url(https://i.pinimg.com/originals/81/81/84/818184967bf1a67e3497015c86de310d.jpg)` }}
    >
      <div className="w-[100%] flex justify-center">
        <Button shape="round" size="large" className="bg-red-500 m-5 text-white">
          <Link to={"/login"}>Log In</Link>
        </Button>
        <Button shape="round" size="large" className="bg-sky-400 m-5">
          <Link to={"/signup"}>Sign Up</Link>
        </Button>
      </div>
    </div>
  )
}