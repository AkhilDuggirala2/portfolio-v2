import React from "react";
import Title from "../title/Title";

const InfoItem = ({ infoTitle, infoValue }) => (
  <li className="mb-2">
    <div className="row">
      <div className="col-4 font-weight-bold">{infoTitle}</div>
      <div className="col-8">{infoValue}</div>
    </div>
  </li>
);

class InfoList extends React.Component {
  state = {
    allInfo: [
      {
        infoTitle: "Age",
        infoValue: 24,
      },
      {
        infoTitle: "Languages",
        infoValue: "English, Telugu",
      },
      {
        infoTitle: "Nationality",
        infoValue: "India",
      },
      {
        infoTitle: "Address",
        infoValue: "Hyderabad, keesara, telangana -500083",
      },
      {
        infoTitle: "Freelance",
        infoValue: "till January 25, 2022",
      },
    ],
  };

  render() {
    return (
      <>
        <Title>About</Title>
        <ul className="list-unstyled p-3">
          {this.state.allInfo.map((item, index) => (
            <InfoItem key={index} {...item} />
          ))}
        </ul>
      </>
    );
  }
}

export default InfoList;
