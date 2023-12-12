import React from "react";
import "./SidebarMatiere.css";
import { Link } from "react-router-dom";


function SidebarMatiere() {
  const handleToggleSidebar = () => {
    const sidebar = document.querySelector("#sidebar");
    sidebar.classList.toggle("collapsed");
  };
  return (
    <div className="wrapper">
      {/* <!-- Sidebar --> */}
      <aside id="sidebar">
        <div className="h-200">
          {/* <!-- Sidebar Navigation --> */}
          <ul className="sidebar-nav">
            <li className="sidebar-item">
              <i className="fa-regular fa-file-lines pe-2"></i>
              <Link to="/premiere">Première Année</Link>
            </li>
            <li className="sidebar-item">
              <i className="fa-solid fa-sliders pe-2"></i>
              Deuxième Année
            </li>
            <li className="sidebar-item">
              <i className="fa-regular fa-user pe-2"></i>
              Troisième Année
            </li>
            <li className="sidebar-item">
              <i className="fa-solid fa-sliders pe-2"></i>
              Quatrième Année
            </li>
            <li className="sidebar-item">
              <i className="fa-solid fa-sliders pe-2"></i>
              Cinquième Année
            </li>
            <li className="sidebar-item">
              <i className="fa-solid fa-sliders pe-2"></i>
              Sixième Année
            </li>
          </ul>
        </div>
      </aside>
      {/* <!-- Main Component --> */}
      <div className="main">
        <nav className="navbar navbar-expand px-3 border-bottom">
          {/* <!-- Button for sidebar toggle --> */}
          <button
            className="btn"
            type="button"
            data-bs-theme="dark"
            onClick={handleToggleSidebar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
        <main className="content px-3 py-2">
          <div className="container-fluid">
            <div className="mb-3"></div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SidebarMatiere;
