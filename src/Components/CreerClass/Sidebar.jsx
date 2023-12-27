import React, { useState, useCallback, useEffect } from "react";
import "./Sidebar.css";
import Modals from "../Modals/Modals";
import {  useNavigate } from "react-router-dom";

function Sidebar({ data }) {
  const push = useNavigate();
  // const Handelclick = useCallback(() => {
  //   push(`/user/${id}`);
  // }, []);
  const [show, setShow] = useState(false);
  const [list, setlist] = useState([]);

  

  const handleToggleSidebar = () => {
    const sidebar = document.querySelector("#sidebar");
    sidebar.classList.toggle("collapsed");
  };

  useEffect(() => {
    setlist(data)

    console.log (list)
  },[])




  return (
    <div className="wrapper">
      {/* <!-- Sidebar --> */}
      <aside id="sidebar">
        <div className="h-200  v-100">
          <div className="sidebar-logo">
            <a href="#">Ma Classe</a>
          </div>
          {/* <!-- Sidebar Navigation --> */}
          <ul className="sidebar-nav">
            <li className="sidebar-header">Mes Classes </li>
            <li className="sidebar-item">
              <a
                href="#"
                className="sidebar-link"
                onClick={() => {
                  setShow(true);
                }}
              >
                <i className=" pe-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="14"
                    viewBox="0 0 448 512"
                  >
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                  </svg>
                </i>
                Nouvelle classe
              </a>
            </li>

            <a
              className="sidebar-link"
              href="/"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa-regular fa-file-lines pe-2">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="16"
                  viewBox="0 0 512 512"
                >
                  {" "}
                  <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z" />
                </svg>
              </i>
              Toutes les classes
            </a>
            <ul className="dropdown-menu">
              {
                data.map((classItem) => (
                  <li key={classItem.id}>
                   
                    <a className="dropdown-item" onClick= {()=>{
                      push("/user/"+classItem._id)
                    }}>
                      {classItem.NomClass}
                    </a>
                  </li>
                ))}
              <ul />
            </ul>

            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <i className="fa-solid fa-sliders pe-2">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="20"
                    viewBox="0 0 640 512"
                  >
                    <path d="M337.8 5.4C327-1.8 313-1.8 302.2 5.4L166.3 96H48C21.5 96 0 117.5 0 144V464c0 26.5 21.5 48 48 48H256V416c0-35.3 28.7-64 64-64s64 28.7 64 64v96H592c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H473.7L337.8 5.4zM96 192h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V208c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V208zM96 320h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V336zM232 176a88 88 0 1 1 176 0 88 88 0 1 1 -176 0zm88-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H336V144c0-8.8-7.2-16-16-16z" />
                  </svg>
                </i>
                La classe de M/Mme{" "}
              </a>
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
          ></button>
        </nav>
        <main className="content px-3 py-2">
          <div className="container-fluid">
            <div className="mb-3"></div>
          </div>
        </main>
        {show && <Modals show={show} setShow={setShow} />}
      </div>
    </div>
  );
}

export default Sidebar;
