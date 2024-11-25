import React from "react";
import  OtherUser from './OtherUser'
import GetOtherUsers from "../../hooks/GetOtherUsers";
import { useSelector } from "react-redux";

const OtherUsers = () => {
  GetOtherUsers();
  const {otherUsers} = useSelector((store) => store.user);
  if (!otherUsers) return; // early return in react
  return (
    <div className="max-h-[450px] overflow-auto flex-1">
      {
      otherUsers?.map((user) => {
        return (
        <div>
          <OtherUser key={user._id} user={user} />
        </div>
          
        )
      })}
    </div>
  );
};

export default OtherUsers;
