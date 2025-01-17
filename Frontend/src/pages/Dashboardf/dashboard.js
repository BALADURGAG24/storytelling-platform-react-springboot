import React, { useEffect, useState } from 'react';
import './dashboard.css';
function Dashboard() {
  const [userDatas, setUserDatas] = useState([]);
  useEffect(() => {
    const dataKeys = Object.keys(localStorage).filter(key => key.startsWith('userData_'));
    const userDataArray = dataKeys.map(key => {
      const userData = JSON.parse(localStorage.getItem(key));
      return { key, ...userData };
    });
    setUserDatas(userDataArray);
  }, []);
  return (
    <div className="dbobg">     
      <div className="dbmain">
        {userDatas.map(userData => (
          <div key={userData.key} className="cos1">
            <div className="cos2">
              <div className="cr1">
              <br></br>
                <b>From</b>:<br />
                {`${userData.firstName || ''} ${userData.secondName || ''}`}
              </div>
              <div className="cr2">{userData.phoneNo || ''}</div>
              <div className="cr3">{userData.emailId || ''}</div>
              <div className="cr4">
                <b>Queries</b>:<br></br>
                {userData.query || ''}
                <br></br><br></br>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
