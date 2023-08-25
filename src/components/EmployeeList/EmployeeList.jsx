import "./EmployeeList.css";
import EmployeeListitem from "../EmployeeListitem/EmployeeListitem";

function EmployeeList() {
  const employeeListItems = [
    {
      id: 1,
      image: "./src/images/man1.jpg",
      name: "James King",
      position: "President & CEO"
    },
    {
      id: 2,
      image: "./src/images/woman1.jpg",
      name: "Julie Taylor",
      position: "VP of Marketing"
    },
    {
      id: 3,
      image: "./src/images/man2.jpg",
      name: "Eugene Lee",
      position: "CFO"
    },
    {
      id: 4,
      image: "./src/images/man3.jpg",
      name: "John Williams",
      position: "VP of Engineering"
    },
    {
      id: 5,
      image: "./src/images/man4.jpg",
      name: "Ray Moore",
      position: "VP of Sales"
    },
    {
      id: 6,
      image: "./src/images/man5.jpg",
      name: "Paul Jones",
      position: "QA Manager"
    }
  ];

  return (
    <div className="EmployeeList">
      {employeeListItems.map((item) => {
        return <EmployeeListitem info={item} />;
      })}
    </div>
  );
}
export default EmployeeList;
