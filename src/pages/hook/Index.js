// import PubSub from "pubsub-js"; //引入

// import { Button } from 'element-react';
// import Navtop from "@/components/navtop/Index";
import { useState } from "react";
import { Link } from "react-router-dom";
import configStore from "../../store/index";
import Navtop from "../../components/navtop/Index";

function Hook() {
  // console.log(configStore);
  const [user, setUser] = useState({});
  // console.log(configStore.getState());
  // console.log(user);
  
  

  return (
    <div>
      <Navtop />
      <div>这里是HOOK</div>
      <Link to={{ pathname: "/userlist" }}>跳转到userList</Link>
      <Link to={{ pathname: "/home" }}>跳转到home</Link>
    </div>
  );
}

export default Hook;
