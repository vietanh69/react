import { memo, useState } from "react";
import * as S from "./Address.Style";

const Address = (props) => {
  console.log("props", props);
  const [isEditMode, setIsEditMode] = useState(false);
  const handEditAddress = () => {
    const newVal = !isEditMode;
    setIsEditMode(newVal);
  };
  return (
    <>
      <tr>
          <th className="th1">Address</th>
        </tr>
        <tr>
          <td>Street:</td>
          <S.Streets>
            <td>{props.Address.Streets}</td>
          </S.Streets>
          
        </tr>
        <tr>
          <td>Suite:</td>
          <S.Suite>
            <td>{props.Address.Suite}</td>
          </S.Suite>
          
        </tr>
        <tr>
          <td>City:</td>
          <S.City>
            <td>{props.Address.City}</td>
          </S.City>
          
        </tr>
        <tr>
          <td>Zipcode:</td>
          <S.Zipcode>
            <td>{props.Address.Zipcode}</td>
          </S.Zipcode>
          
        </tr>
    </>
  );
};
export default memo(Address);
