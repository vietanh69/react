import { memo, useState } from "react";

import * as S from "./Contact.Style";
const Contact = (props) => {
  console.log("props", props);
  const [isEditMode, setIsEditMode] = useState(false);
  const handEditContact = () => {
    const newVal = !isEditMode;
    setIsEditMode(newVal);
  };
  return (
    <>
      <table>
        <tr>
          <th className="th1">Contact</th>
        </tr>
        <tr>
          <td>Email:</td>
          <S.Email>
            <td>{props.Contact.Email}</td>
          </S.Email>
        </tr>
        <tr>
          <td>Website:</td>
          <S.Website>
            <td>{props.Contact.Website}</td>
          </S.Website>
        </tr>
        <tr>
          <td>Phone:</td>
          <S.Phone>
            <td>{props.Contact.Phone}</td>
          </S.Phone>
        </tr>
      </table>
    </>
  );
};
export default memo(Contact);
