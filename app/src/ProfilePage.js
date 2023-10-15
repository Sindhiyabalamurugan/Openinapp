import React from 'react';
import './ProfilePage.css';

const ProfilePage= () => {
  // Function to open the modal
  const openModal = () => {
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';

    // Show both tabs by default
    openTab({ currentTarget: { className: 'tablinks', dataset: { tab: 'basic' } } }, 'basic');
    openTab({ currentTarget: { className: 'tablinks', dataset: { tab: 'social' } } }, 'social');
  };

  // Function to close the modal
  const closeModal = () => {
    document.getElementById('myModal').style.display = 'none';
  };

  // Function to switch between tabs in the modal
  const openTab = (evt, tabName) => {
    const tabcontent = document.getElementsByClassName('tabcontent');
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }

    const tablinks = document.getElementsByClassName('tablinks');
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += ' active';
  };

  return (
    <div className="dashboard-container">
      {/* Left-hand side (Navigation) */}
      <div className="sidebar">
        {/* Sidebar content */}
        {/* ... */}
      </div>

      {/* Right-hand side (Content) */}
      <div className="content">
        {/* Content for the dashboard */}
        {/* ... */}

        {/* Button to open the modal */}
        <button onClick={openModal}>Add Profile</button>

        {/* Modal */}
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>

            {/* Tabs for profile options */}
            <div className="tab">
              <button className="tablinks" onClick={(e) => openTab(e, 'basic')} data-tab="basic">Basic</button>
              <button className="tablinks" onClick={(e) => openTab(e, 'social')} data-tab="social">Social</button>
            </div>

            {/* Content for the tabs */}
            <div id="basic" className="tabcontent">
              <h2>Basic Information</h2>
              <p>Enter Name</p>
              <input type="text" placeholder="Enter Name" />
              <br></br>
              <p>Enter Email</p>
              <input type="text" placeholder="Enter Email" />
              <br></br>
              <p>Enter Phone Number</p>
              <input type="text" placeholder="Enter Phone Number" />
              <br></br>
            </div>

            <div id="social" className="tabcontent">
              <h2>Social Media Information</h2>
              
              <p>Enter Instagram ID</p>
              
              <input type="text" placeholder="Enter Instagram ID" />
              <br></br>
              <p>Enter LinkedIn ID</p>
              <input type="text" placeholder="Enter LinkedIn ID" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
