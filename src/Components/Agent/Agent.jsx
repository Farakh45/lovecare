import React from "react";
import "./Agent.css";
import system from '../../Components/Assets/system.png'
const Agent = () => {
  return (
    <>
      <div className="agent-class">
        <div className="agent-img">
          <img src={system} width={500} alt="" style={{alignContent:"center", display:"flex"}} />
        </div>
        <div className="agent-text">
          <h2>Love&Care: Real-Time Care Scheduling</h2>
          <p>
          The headline "CherishedCare: Transforming Healthcare with Real-Time Availability Tracking" effectively conveys the innovative nature of your platform. It highlights "CherishedCare" as the brand name, immediately establishing the focus on healthcare. The phrase "Transforming Healthcare" suggests a significant 
          positive impact and modernization of traditional practices. "Real-Time Availability Tracking" is a clear and concise description of the platform's key feature, indicating that both caregivers and clients can benefit from up-to-date scheduling and booking capabilities. This H1 not only grabs attention but also clearly communicates the core functionality and value proposition of your system.          </p>
        </div>
      </div>
    </>
  );
};

export default Agent;
