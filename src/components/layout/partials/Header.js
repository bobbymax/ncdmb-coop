/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import avatar from "../../../assets/images/profile/17.jpg";
import notAvatar from "../../../assets/images/avatar/1.jpg";
import SearchBar from "../../commons/SearchBar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { disembark } from "../../../features/auth/userSlice";
import Aside from "./Aside";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth.value.user);

  const logout = () => {
    dispatch(disembark());
    navigate("/");
  };

  return (
    // <div className="header">
    //   <div className="header-content">
    //     <nav className="navbar navbar-expand">
    //       <div className="collapse navbar-collapse justify-content-between">
    //         <div className="header-left">
    //           <SearchBar />
    //         </div>
    //         <ul className="navbar-nav header-right">
    //           <li className="nav-item dropdown notification_dropdown">
    //             <a
    //               className="nav-link  ai-icon"
    //               href="#"
    //               role="button"
    //               data-toggle="dropdown"
    //             >
    //               <svg
    //                 width={26}
    //                 height={26}
    //                 viewBox="0 0 26 26"
    //                 fill="none"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path
    //                   d="M21.75 14.8385V12.0463C21.7471 9.88552 20.9385 7.80353 19.4821 6.20735C18.0258 4.61116 16.0264 3.61555 13.875 3.41516V1.625C13.875 1.39294 13.7828 1.17038 13.6187 1.00628C13.4546 0.842187 13.2321 0.75 13 0.75C12.7679 0.75 12.5454 0.842187 12.3813 1.00628C12.2172 1.17038 12.125 1.39294 12.125 1.625V3.41534C9.97361 3.61572 7.97429 4.61131 6.51794 6.20746C5.06159 7.80361 4.25291 9.88555 4.25 12.0463V14.8383C3.26257 15.0412 2.37529 15.5784 1.73774 16.3593C1.10019 17.1401 0.751339 18.1169 0.75 19.125C0.750764 19.821 1.02757 20.4882 1.51969 20.9803C2.01181 21.4724 2.67904 21.7492 3.375 21.75H8.71346C8.91521 22.738 9.45205 23.6259 10.2331 24.2636C11.0142 24.9013 11.9916 25.2497 13 25.2497C14.0084 25.2497 14.9858 24.9013 15.7669 24.2636C16.548 23.6259 17.0848 22.738 17.2865 21.75H22.625C23.321 21.7492 23.9882 21.4724 24.4803 20.9803C24.9724 20.4882 25.2492 19.821 25.25 19.125C25.2486 18.117 24.8998 17.1402 24.2622 16.3594C23.6247 15.5786 22.7374 15.0414 21.75 14.8385ZM6 12.0463C6.00232 10.2113 6.73226 8.45223 8.02974 7.15474C9.32723 5.85726 11.0863 5.12732 12.9212 5.125H13.0788C14.9137 5.12732 16.6728 5.85726 17.9703 7.15474C19.2677 8.45223 19.9977 10.2113 20 12.0463V14.75H6V12.0463ZM13 23.5C12.4589 23.4983 11.9316 23.3292 11.4905 23.0159C11.0493 22.7026 10.716 22.2604 10.5363 21.75H15.4637C15.284 22.2604 14.9507 22.7026 14.5095 23.0159C14.0684 23.3292 13.5411 23.4983 13 23.5ZM22.625 20H3.375C3.14298 19.9999 2.9205 19.9076 2.75644 19.7436C2.59237 19.5795 2.50014 19.357 2.5 19.125C2.50076 18.429 2.77757 17.7618 3.26969 17.2697C3.76181 16.7776 4.42904 16.5008 5.125 16.5H20.875C21.571 16.5008 22.2382 16.7776 22.7303 17.2697C23.2224 17.7618 23.4992 18.429 23.5 19.125C23.4999 19.357 23.4076 19.5795 23.2436 19.7436C23.0795 19.9076 22.857 19.9999 22.625 20Z"
    //                   fill="#3B4CB8"
    //                 />
    //               </svg>
    //               <div className="pulse-css" />
    //             </a>

    //             <div className="dropdown-menu dropdown-menu-right">
    //               <div
    //                 id="DZ_W_Notification1"
    //                 className="widget-media dz-scroll p-3 height380"
    //               >
    //                 <ul className="timeline">
    //                   <li>
    //                     <div className="timeline-panel">
    //                       <div className="media mr-2">
    //                         <img alt="image" width={50} src={notAvatar} />
    //                       </div>

    //                       <div className="media-body">
    //                         <h6 className="mb-1">Dr sultads Send you Photo</h6>
    //                         <small className="d-block">
    //                           29 July 2020 - 02:26 PM
    //                         </small>
    //                       </div>
    //                     </div>
    //                   </li>

    //                   <li>
    //                     <div className="timeline-panel">
    //                       <div className="media mr-2 media-info">KG</div>
    //                       <div className="media-body">
    //                         <h6 className="mb-1">
    //                           Resport created successfully
    //                         </h6>
    //                         <small className="d-block">
    //                           29 July 2020 - 02:26 PM
    //                         </small>
    //                       </div>
    //                     </div>
    //                   </li>
    //                 </ul>
    //               </div>
    //               <a className="all-notification" href="#">
    //                 See all notifications <i className="ti-arrow-right" />
    //               </a>
    //             </div>
    //           </li>

    //           <li className="nav-item dropdown notification_dropdown">
    //             <a className="nav-link" href="#" data-toggle="dropdown">
    //               <svg
    //                 width={26}
    //                 height={26}
    //                 viewBox="0 0 26 26"
    //                 fill="none"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path
    //                   d="M22.625 5.125H21.75V1.625C21.75 1.47262 21.7102 1.32289 21.6345 1.19062C21.5589 1.05835 21.45 0.948128 21.3186 0.870868C21.1873 0.793609 21.0381 0.751989 20.8857 0.750126C20.7333 0.748264 20.5831 0.786224 20.4499 0.86025L13 4.99909L5.55007 0.86025C5.41688 0.786224 5.26667 0.748264 5.11431 0.750126C4.96194 0.751989 4.8127 0.793609 4.68136 0.870868C4.55002 0.948128 4.44113 1.05835 4.36547 1.19062C4.28981 1.32289 4.25001 1.47262 4.25 1.625V5.125H3.375C2.67904 5.12576 2.01181 5.40257 1.51969 5.89469C1.02757 6.3868 0.750764 7.05404 0.75 7.75V10.375C0.750764 11.071 1.02757 11.7382 1.51969 12.2303C2.01181 12.7224 2.67904 12.9992 3.375 13H4.25V22.625C4.25076 23.321 4.52757 23.9882 5.01969 24.4803C5.51181 24.9724 6.17904 25.2492 6.875 25.25H19.125C19.821 25.2492 20.4882 24.9724 20.9803 24.4803C21.4724 23.9882 21.7492 23.321 21.75 22.625V13H22.625C23.321 12.9992 23.9882 12.7224 24.4803 12.2303C24.9724 11.7382 25.2492 11.071 25.25 10.375V7.75C25.2492 7.05404 24.9724 6.3868 24.4803 5.89469C23.9882 5.40257 23.321 5.12576 22.625 5.125ZM20 5.125H16.3769L20 3.1125V5.125ZM6 3.1125L9.62311 5.125H6V3.1125ZM6 22.625V13H12.125V23.5H6.875C6.64303 23.4997 6.42064 23.4074 6.25661 23.2434C6.09258 23.0793 6.0003 22.857 6 22.625ZM20 22.625C19.9997 22.857 19.9074 23.0793 19.7434 23.2434C19.5794 23.4074 19.357 23.4997 19.125 23.5H13.875V13H20V22.625ZM23.5 10.375C23.4997 10.607 23.4074 10.8294 23.2434 10.9934C23.0794 11.1574 22.857 11.2497 22.625 11.25H3.375C3.14303 11.2497 2.92064 11.1574 2.75661 10.9934C2.59258 10.8294 2.5003 10.607 2.5 10.375V7.75C2.5003 7.51803 2.59258 7.29564 2.75661 7.13161C2.92064 6.96758 3.14303 6.8753 3.375 6.875H22.625C22.857 6.8753 23.0794 6.96758 23.2434 7.13161C23.4074 7.29564 23.4997 7.51803 23.5 7.75V10.375Z"
    //                   fill="#3B4CB8"
    //                 />
    //               </svg>
    //               <div className="pulse-css" />
    //             </a>

    //             <div className="dropdown-menu dropdown-menu-right">
    //               <div
    //                 id="DZ_W_TimeLine02"
    //                 className="widget-timeline dz-scroll style-1 ps ps--active-y p-3 height370"
    //               >
    //                 <ul className="timeline">
    //                   <li>
    //                     <div className="timeline-badge primary" />
    //                     <a className="timeline-panel text-muted" href="#">
    //                       <span>10 minutes ago</span>
    //                       <h6 className="mb-0">
    //                         Youtube, a video-sharing website, goes live{" "}
    //                         <strong className="text-primary">$500</strong>.
    //                       </h6>
    //                     </a>
    //                   </li>

    //                   <li>
    //                     <div className="timeline-badge info"></div>
    //                     <a className="timeline-panel text-muted" href="#">
    //                       <span>20 minutes ago</span>
    //                       <h6 className="mb-0">
    //                         New order placed{" "}
    //                         <strong className="text-info">#XF-2356.</strong>
    //                       </h6>
    //                       <p className="mb-0">
    //                         Quisque a consequat ante Sit amet magna at
    //                         volutapt...
    //                       </p>
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <div className="timeline-badge danger"></div>
    //                     <a className="timeline-panel text-muted" href="#">
    //                       <span>30 minutes ago</span>
    //                       <h6 className="mb-0">
    //                         john just buy your product{" "}
    //                         <strong className="text-warning">Sell $250</strong>
    //                       </h6>
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <div className="timeline-badge success"></div>
    //                     <a className="timeline-panel text-muted" href="#">
    //                       <span>15 minutes ago</span>
    //                       <h6 className="mb-0">
    //                         StumbleUpon is acquired by eBay.{" "}
    //                       </h6>
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <div className="timeline-badge warning"></div>
    //                     <a className="timeline-panel text-muted" href="#">
    //                       <span>20 minutes ago</span>
    //                       <h6 className="mb-0">
    //                         Mashable, a news website and blog, goes live.
    //                       </h6>
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <div className="timeline-badge dark"></div>
    //                     <a className="timeline-panel text-muted" href="#">
    //                       <span>20 minutes ago</span>
    //                       <h6 className="mb-0">
    //                         Mashable, a news website and blog, goes live.
    //                       </h6>
    //                     </a>
    //                   </li>
    //                 </ul>
    //               </div>
    //             </div>
    //           </li>

    //           <li className="nav-item dropdown header-profile">
    //             <a
    //               className="nav-link"
    //               href="#"
    //               role="button"
    //               data-toggle="dropdown"
    //             >
    //               <div className="header-info">
    //                 <span className="text-black">{auth && auth.name}</span>
    //                 <p className="fs-12 mb-0">{auth && auth.staff_no}</p>
    //               </div>
    //               <img src={avatar} width={20} alt="an avatar illustration" />
    //             </a>
    //             <div className="dropdown-menu dropdown-menu-right">
    //               <Link to="/user/profile" className="dropdown-item ai-icon">
    //                 <svg
    //                   id="icon-user1"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   className="text-primary"
    //                   width={18}
    //                   height={18}
    //                   viewBox="0 0 24 24"
    //                   fill="none"
    //                   stroke="currentColor"
    //                   strokeWidth={2}
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                 >
    //                   <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    //                   <circle cx={12} cy={7} r={4} />
    //                 </svg>
    //                 <span className="ml-2">Profile </span>
    //               </Link>

    //               <Link
    //                 to="#"
    //                 onClick={logout}
    //                 className="dropdown-item ai-icon"
    //               >
    //                 <svg
    //                   id="icon-logout"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   className="text-danger"
    //                   width={18}
    //                   height={18}
    //                   viewBox="0 0 24 24"
    //                   fill="none"
    //                   stroke="currentColor"
    //                   strokeWidth={2}
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                 >
    //                   <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    //                   <polyline points="16 17 21 12 16 7" />
    //                   <line x1={21} y1={12} x2={9} y2={12} />
    //                 </svg>
    //                 <span className="ml-2">Logout </span>
    //               </Link>
    //             </div>
    //           </li>
    //         </ul>
    //       </div>
    //     </nav>
    //   </div>
    // </div>
    <div className="d-flex flex-column flex-root">
      <div className="page d-flex flex-row flex-column-fluid">
        <Aside />

        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
        >
          <div id="kt_header" className="header align-items-stretch">
            <div className="container-fluid d-flex align-items-stretch justify-content-between">
              <div
                className="d-flex align-items-center d-lg-none ms-n2 me-2"
                title="Show aside menu"
              >
                <div
                  className="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
                  id="kt_aside_mobile_toggle"
                >
                  <span className="svg-icon svg-icon-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                        fill="black"
                      />
                      <path
                        opacity="0.3"
                        d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
                <a href="../../demo1/dist/index.html" className="d-lg-none">
                  <img
                    alt="Logo"
                    src="assets/media/logos/logo-2.svg"
                    className="h-30px"
                  />
                </a>
              </div>

              <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
                <div className="d-flex align-items-stretch" id="kt_header_nav">
                  <div
                    className="header-menu align-items-stretch"
                    data-kt-drawer="true"
                    data-kt-drawer-name="header-menu"
                    data-kt-drawer-activate="{default: true, lg: false}"
                    data-kt-drawer-overlay="true"
                    data-kt-drawer-width="{default:'200px', '300px': '250px'}"
                    data-kt-drawer-direction="end"
                    data-kt-drawer-toggle="#kt_header_menu_mobile_toggle"
                    data-kt-swapper="true"
                    data-kt-swapper-mode="prepend"
                    data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}"
                  >
                    <div
                      className="d-flex align-items-stretch"
                      id="kt_header_nav"
                    >
                      {/* Navbar Start */}
                      <div
                        className="header-menu align-items-stretch"
                        data-kt-drawer="true"
                        data-kt-drawer-name="header-menu"
                        data-kt-drawer-activate="{default: true, lg: false}"
                        data-kt-drawer-overlay="true"
                        data-kt-drawer-width="{default:'200px', '300px': '250px'}"
                        data-kt-drawer-direction="end"
                        data-kt-drawer-toggle="#kt_header_menu_mobile_toggle"
                        data-kt-swapper="true"
                        data-kt-swapper-mode="prepend"
                        data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}"
                      ></div>
                      {/* Navbar End */}

                      {/* Toolbar */}
                      <div className="d-flex align-items-stretch flex-shrink-0">
                        <div
                          className="d-flex align-items-center ms-1 ms-lg-3"
                          id="kt_header_user_menu_toggle"
                        >
                          <div
                            className="cursor-pointer symbol symbol-30px symbol-md-40px"
                            data-kt-menu-trigger="click"
                            data-kt-menu-attach="parent"
                            data-kt-menu-placement="bottom-end"
                          >
                            <img
                              src={
                                require("../../../assets/media/avatars/300-1.jpg")
                                  .default
                              }
                              alt="user"
                            />
                          </div>

                          <div
                            className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px"
                            data-kt-menu="true"
                          >
                            <div className="menu-item px-3">
                              <div className="menu-content d-flex align-items-center px-3">
                                <div className="symbol symbol-50px me-5">
                                  <img
                                    alt="Logo"
                                    src="assets/media/avatars/300-1.jpg"
                                  />
                                </div>

                                <div className="d-flex flex-column">
                                  <div className="fw-bolder d-flex align-items-center fs-5">
                                    Max Smith
                                    <span className="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">
                                      Pro
                                    </span>
                                  </div>
                                  <a
                                    href="#"
                                    className="fw-bold text-muted text-hover-primary fs-7"
                                  >
                                    max@kt.com
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div className="separator my-2"></div>

                            <div className="menu-item px-5">
                              <a
                                href="../../demo1/dist/account/overview.html"
                                className="menu-link px-5"
                              >
                                My Profile
                              </a>
                            </div>

                            <div className="menu-item px-5">
                              <a
                                href="../../demo1/dist/account/statements.html"
                                className="menu-link px-5"
                              >
                                My Statements
                              </a>
                            </div>

                            <div className="separator my-2"></div>

                            <div
                              className="menu-item px-5"
                              data-kt-menu-trigger="hover"
                              data-kt-menu-placement="left-start"
                            >
                              <a href="#" className="menu-link px-5">
                                <span className="menu-title position-relative">
                                  Language
                                  <span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">
                                    English
                                    <img
                                      className="w-15px h-15px rounded-1 ms-2"
                                      src="assets/media/flags/united-states.svg"
                                      alt=""
                                    />
                                  </span>
                                </span>
                              </a>

                              <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                <div className="menu-item px-3">
                                  <a
                                    href="../../demo1/dist/account/settings.html"
                                    className="menu-link d-flex px-5 active"
                                  >
                                    <span className="symbol symbol-20px me-4">
                                      <img
                                        className="rounded-1"
                                        src="assets/media/flags/united-states.svg"
                                        alt=""
                                      />
                                    </span>
                                    English
                                  </a>
                                </div>

                                <div className="menu-item px-3">
                                  <a
                                    href="../../demo1/dist/account/settings.html"
                                    className="menu-link d-flex px-5"
                                  >
                                    <span className="symbol symbol-20px me-4">
                                      <img
                                        className="rounded-1"
                                        src="assets/media/flags/spain.svg"
                                        alt=""
                                      />
                                    </span>
                                    Spanish
                                  </a>
                                </div>

                                <div className="menu-item px-3">
                                  <a
                                    href="../../demo1/dist/account/settings.html"
                                    className="menu-link d-flex px-5"
                                  >
                                    <span className="symbol symbol-20px me-4">
                                      <img
                                        className="rounded-1"
                                        src="assets/media/flags/germany.svg"
                                        alt=""
                                      />
                                    </span>
                                    German
                                  </a>
                                </div>

                                <div className="menu-item px-3">
                                  <a
                                    href="../../demo1/dist/account/settings.html"
                                    className="menu-link d-flex px-5"
                                  >
                                    <span className="symbol symbol-20px me-4">
                                      <img
                                        className="rounded-1"
                                        src="assets/media/flags/japan.svg"
                                        alt=""
                                      />
                                    </span>
                                    Japanese
                                  </a>
                                </div>

                                <div className="menu-item px-3">
                                  <a
                                    href="../../demo1/dist/account/settings.html"
                                    className="menu-link d-flex px-5"
                                  >
                                    <span className="symbol symbol-20px me-4">
                                      <img
                                        className="rounded-1"
                                        src="assets/media/flags/france.svg"
                                        alt=""
                                      />
                                    </span>
                                    French
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div className="menu-item px-5 my-1">
                              <a
                                href="../../demo1/dist/account/settings.html"
                                className="menu-link px-5"
                              >
                                Account Settings
                              </a>
                            </div>

                            <div className="menu-item px-5">
                              <a
                                href="../../demo1/dist/authentication/flows/basic/sign-in.html"
                                className="menu-link px-5"
                              >
                                Sign Out
                              </a>
                            </div>

                            <div className="separator my-2"></div>

                            <div className="menu-item px-5">
                              <div className="menu-content px-5">
                                <label
                                  className="form-check form-switch form-check-custom form-check-solid pulse pulse-success"
                                  for="kt_user_menu_dark_mode_toggle"
                                >
                                  <input
                                    className="form-check-input w-30px h-20px"
                                    type="checkbox"
                                    value="1"
                                    name="mode"
                                    id="kt_user_menu_dark_mode_toggle"
                                    data-kt-url="../../demo1/dist/index.html"
                                  />
                                  <span className="pulse-ring ms-n1"></span>
                                  <span className="form-check-label text-gray-600 fs-7">
                                    Dark Mode
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="d-flex align-items-center d-lg-none ms-2 me-n3"
                          title="Show header menu"
                        >
                          <div
                            className="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
                            id="kt_header_menu_mobile_toggle"
                          >
                            <span className="svg-icon svg-icon-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M13 11H3C2.4 11 2 10.6 2 10V9C2 8.4 2.4 8 3 8H13C13.6 8 14 8.4 14 9V10C14 10.6 13.6 11 13 11ZM22 5V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4V5C2 5.6 2.4 6 3 6H21C21.6 6 22 5.6 22 5Z"
                                  fill="black"
                                />
                                <path
                                  opacity="0.3"
                                  d="M21 16H3C2.4 16 2 15.6 2 15V14C2 13.4 2.4 13 3 13H21C21.6 13 22 13.4 22 14V15C22 15.6 21.6 16 21 16ZM14 20V19C14 18.4 13.6 18 13 18H3C2.4 18 2 18.4 2 19V20C2 20.6 2.4 21 3 21H13C13.6 21 14 20.6 14 20Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="content d-flex flex-column flex-column-fluid"
            id="kt_content"
          >
            <div className="toolbar" id="kt_toolbar">
              <div
                id="kt_toolbar_container"
                className="container-fluid d-flex flex-stack"
              >
                <div
                  data-kt-swapper="true"
                  data-kt-swapper-mode="prepend"
                  data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
                  className="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0"
                >
                  <h1 className="d-flex text-dark fw-bolder fs-3 align-items-center my-1">
                    Dashboard
                  </h1>

                  <span className="h-20px border-1 border-gray-200 border-start ms-3 mx-2 me-1"></span>

                  <span className="text-muted fs-7 fw-bold mt-2">
                    #XRS-45670
                  </span>
                </div>

                <div className="d-flex align-items-center gap-2 gap-lg-3">
                  <div className="m-0">
                    <a
                      href="#"
                      className="btn btn-sm btn-flex btn-light btn-active-primary fw-bolder"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                    >
                      Filter
                      <span className="svg-icon svg-icon-5 svg-icon-gray-500 me-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                    </a>

                    <div
                      className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                      data-kt-menu="true"
                      id="kt_menu_6220ee064de67"
                    >
                      <div className="px-7 py-5">
                        <div className="fs-5 text-dark fw-bolder">
                          Filter Options
                        </div>
                      </div>

                      <div className="separator border-gray-200"></div>

                      <div className="px-7 py-5">
                        <div className="mb-10">
                          <label className="form-label fw-bold">Status:</label>

                          <div>
                            <select
                              className="form-select form-select-solid"
                              data-kt-select2="true"
                              data-placeholder="Select option"
                              data-dropdown-parent="#kt_menu_6220ee064de67"
                              data-allow-clear="true"
                            >
                              <option></option>
                              <option value="1">Approved</option>
                              <option value="2">Pending</option>
                              <option value="2">In Process</option>
                              <option value="2">Rejected</option>
                            </select>
                          </div>
                        </div>

                        <div className="mb-10">
                          <label className="form-label fw-bold">
                            Member Type:
                          </label>

                          <div className="d-flex">
                            <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="1"
                              />
                              <span className="form-check-label">Author</span>
                            </label>

                            <label className="form-check form-check-sm form-check-custom form-check-solid">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="2"
                                checked="checked"
                              />
                              <span className="form-check-label">Customer</span>
                            </label>
                          </div>
                        </div>

                        <div className="mb-10">
                          <label className="form-label fw-bold">
                            Notifications:
                          </label>

                          <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              name="notifications"
                              checked="checked"
                            />
                            <label className="form-check-label">Enabled</label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-end">
                          <button
                            type="reset"
                            className="btn btn-sm btn-light btn-active-light-primary me-2"
                            data-kt-menu-dismiss="true"
                          >
                            Reset
                          </button>
                          <button
                            type="submit"
                            className="btn btn-sm btn-primary"
                            data-kt-menu-dismiss="true"
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="btn btn-sm btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_create_app"
                  >
                    Create
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
