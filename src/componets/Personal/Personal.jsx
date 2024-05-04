import { memo, useState } from "react";

import * as S from "./Personal.Style";
const Personal = (props) => {
  console.log("props", props);
  const [isEditMode, setIsEditMode] = useState(false);
  const handEditPersonal = () => {
    const newVal = !isEditMode;
    setIsEditMode(newVal);
  };
  return (

    <>
    <table>
          <tr>
            <th className="th1">Personal</th>
          </tr>
          <tr>
            <td>ID:</td>
            <S.ID>
              <td>{props.Personal.ID}</td>
            </S.ID>
            
          </tr>
          <tr>
            <td>Username:</td>
            <S.UserName>
            <td>{props.Personal.UserName}</td>
            </S.UserName>
          </tr>
    </table>
      {/* <S.ID>
        ID
        <div>{props.Personal.ID}</div>
      </S.ID>
      <S.UserName>
        User Name
        <div>{props.Personal.UserName}</div>
      </S.UserName> */}
    </>
    // <>
    //   <S.UserName>
    //     User name
    //     <div>{props.Personal.userName}</div>
    //   </S.UserName>

    //   <S.PhoneNumber>
    //     Phone number
    //     <div>{props.Personal.phoneNumber}</div>
    //   </S.PhoneNumber>

    //   <div onClick={handEditPersonal}>
    //     edit
    //   </div>
    // </>
    // <>
    //   {isEditMode ? (
    //     <>
    //       <input type="text" value={props.Personal.userName}></input>
    //       <input type="text" value={props.Personal.phoneNumber}></input>
    //     </>
    //   ) : (
    //     <>
    //       <S.UserName>
    //         User name
    //         <div>{props.Personal.userName}</div>
    //       </S.UserName>

    //       <S.PhoneNumber>
    //         Phone number
    //         <div>{props.Personal.phoneNumber}</div>
    //       </S.PhoneNumber>
    //     </>
    //   )}
    //   <div>
    //     <button onClick={handEditPersonal}>edit</button>
    //   </div>
    // </>
  );
};
export default memo(Personal);
