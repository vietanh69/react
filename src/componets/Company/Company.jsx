import { memo, useState } from "react";
import * as S from "./Company.Style";

const Company = (props) => {
  console.log("props", props);
  const [isEditMode, setIsEditMode] = useState(false);
  const handEditCompany = () => {
    const newVal = !isEditMode;
    setIsEditMode(newVal);
  };
  return (
    <>
      <tr>
        <th className="th1">Company</th>
      </tr>
      <tr>
        <td>Name:</td>
        <S.Name>
          <td>{props.Company.Name}</td>
        </S.Name>
      </tr>
      <tr>
        <td>CatchPhrase:</td>
        <S.CatchPhrase>
          <td>{props.Company.CatchPhrase}</td>
        </S.CatchPhrase>
      </tr>
      <tr>
        <td>BS:</td>
        <S.BS>
          <td>{props.Company.BS}</td>
        </S.BS>
      </tr>
    </>
  );
};
export default memo(Company);
