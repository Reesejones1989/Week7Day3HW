import "./EmployeePage.css";
import Header from "../Header/Header";

function Employeepage() {
  return (
    <div className="Employeepage">
      <Header title = "Employee"/>

      <div className="employeeOverview">
        <img src="./src/images/woman2.jpg"/>
      <h2>Julie Taylor</h2>
      <h4>VP of Marketing</h4>
      
      </div>
        
        <div className="employeeOfficeNum">
        <h3>Call Office</h3>
      <p>781-000-0002</p>
      </div>

        <div className="employeeMobileNum">
        <h3>Call Mobile</h3>
      <p>617-000-0002</p>
      </div>

        <div className="employeeSMSNum">
        <h3>SMS</h3>
        <p>617-000-0002</p>
      </div>

        <div className="employeeEmail">
        <h3>Email</h3>
      <p>jtaylor@fakemail.com</p>
      </div>




    </div>
  );
}
export default Employeepage;
