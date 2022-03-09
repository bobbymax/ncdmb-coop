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
        <div
          id="kt_aside"
          className="aside aside-dark aside-hoverable"
          data-kt-drawer="true"
          data-kt-drawer-name="aside"
          data-kt-drawer-activate="{default: true, lg: false}"
          data-kt-drawer-overlay="true"
          data-kt-drawer-width="{default:'200px', '300px': '250px'}"
          data-kt-drawer-direction="start"
          data-kt-drawer-toggle="#kt_aside_mobile_toggle"
        >
          <div className="aside-logo flex-column-auto" id="kt_aside_logo">
            <a href="#">
              <img
                alt="Logo"
                src={
                  require("../../../assets/media/logos/logo-1-dark.svg").default
                }
                className="h-25px logo"
              />
            </a>

            <div
              id="kt_aside_toggle"
              className="btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle"
              data-kt-toggle="true"
              data-kt-toggle-state="active"
              data-kt-toggle-target="body"
              data-kt-toggle-name="aside-minimize"
            >
              <span className="svg-icon svg-icon-1 rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    opacity="0.5"
                    d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z"
                    fill="black"
                  />

                  <path
                    d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z"
                    fill="black"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* Aside Menu Start */}
          <div className="aside-menu flex-column-fluid"></div>
          {/* Aside Menu End */}

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
                  <a href="../../demo1/dist/index.html" class="d-lg-none">
                    <img
                      alt="Logo"
                      src="assets/media/logos/logo-2.svg"
                      className="h-30px"
                    />
                  </a>
                </div>

                <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
                  <div
                    className="d-flex align-items-stretch"
                    id="kt_header_nav"
                  >
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
                            className="menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-5 my-lg-0 align-items-stretch"
                            id="#kt_header_menu"
                            data-kt-menu="true"
                          >
                            <div
                              data-kt-menu-trigger="click"
                              data-kt-menu-placement="bottom-start"
                              className="menu-item here show menu-lg-down-accordion me-lg-1"
                            >
                              <span className="menu-link py-3">
                                <span className="menu-title">Dashboards</span>
                                <span className="menu-arrow d-lg-none"></span>
                              </span>
                              <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px">
                                <div className="menu-item">
                                  <a className="menu-link active py-3" href="#">
                                    <span className="menu-bullet">
                                      <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">
                                      Multipurpose
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link py-3" href="#">
                                    <span className="menu-bullet">
                                      <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">
                                      eCommerce
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link py-3" href="#">
                                    <span className="menu-bullet">
                                      <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">
                                      Marketing
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link py-3" href="#">
                                    <span className="menu-bullet">
                                      <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">
                                      Logistics
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link py-3" href="#">
                                    <span className="menu-bullet">
                                      <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Delivery</span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link py-3" href="#">
                                    <span className="menu-bullet">
                                      <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">
                                      Online Courses
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link py-3" href="#">
                                    <span className="menu-bullet">
                                      <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">
                                      Website Analytics
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link py-3" href="#">
                                    <span className="menu-bullet">
                                      <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">
                                      {" "}
                                      Finance Performance{" "}
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link py-3" href="#">
                                    <span className="menu-bullet">
                                      <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">
                                      Store Analytics
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link py-3" href="#">
                                    <span className="menu-bullet">
                                      <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Social</span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link py-3" href="#">
                                    <span className="menu-bullet">
                                      <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Crypto</span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link py-3" href="#">
                                    <span className="menu-bullet">
                                      <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">School</span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link py-3" href="#">
                                    <span className="menu-bullet">
                                      <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Bidding</span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link py-3" href="#">
                                    <span className="menu-bullet">
                                      <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Landing</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              data-kt-menu-trigger="click"
                              data-kt-menu-placement="bottom-start"
                              className="menu-item menu-lg-down-accordion me-lg-1"
                            >
                              <span className="menu-link py-3">
                                <span className="menu-title">Crafted</span>
                                <span className="menu-arrow d-lg-none"></span>
                              </span>

                              <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px">
                                <div
                                  data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                  data-kt-menu-placement="right-start"
                                  className="menu-item menu-lg-down-accordion"
                                >
                                  <span className="menu-link py-3">
                                    <span className="menu-icon">
                                      <span className="svg-icon svg-icon-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            d="M21 9V11C21 11.6 20.6 12 20 12H14V8H20C20.6 8 21 8.4 21 9ZM10 8H4C3.4 8 3 8.4 3 9V11C3 11.6 3.4 12 4 12H10V8Z"
                                            fill="black"
                                          />
                                          <path
                                            d="M15 2C13.3 2 12 3.3 12 5V8H15C16.7 8 18 6.7 18 5C18 3.3 16.7 2 15 2Z"
                                            fill="black"
                                          />
                                          <path
                                            opacity="0.3"
                                            d="M9 2C10.7 2 12 3.3 12 5V8H9C7.3 8 6 6.7 6 5C6 3.3 7.3 2 9 2ZM4 12V21C4 21.6 4.4 22 5 22H10V12H4ZM20 12V21C20 21.6 19.6 22 19 22H14V12H20Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                    <span className="menu-title">Pages</span>
                                    <span className="menu-arrow"></span>
                                  </span>
                                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                    <div
                                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                      data-kt-menu-placement="right-start"
                                      className="menu-item menu-lg-down-accordion"
                                    >
                                      <span className="menu-link py-3">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Profile
                                        </span>
                                        <span className="menu-arrow"></span>
                                      </span>
                                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Overview
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Projects
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Campaigns
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Documents
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Followers
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Activity
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                      data-kt-menu-placement="right-start"
                                      className="menu-item menu-lg-down-accordion"
                                    >
                                      <span className="menu-link py-3">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Blog</span>
                                        <span className="menu-arrow"></span>
                                      </span>
                                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Blog Home
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Blog Post
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                      data-kt-menu-placement="right-start"
                                      className="menu-item menu-lg-down-accordion"
                                    >
                                      <span className="menu-link py-3">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Pricing
                                        </span>
                                        <span className="menu-arrow"></span>
                                      </span>
                                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Pricing 1
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Pricing 2
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                      data-kt-menu-placement="right-start"
                                      className="menu-item menu-lg-down-accordion"
                                    >
                                      <span className="menu-link py-3">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Careers
                                        </span>
                                        <span className="menu-arrow"></span>
                                      </span>
                                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              {" "}
                                              Careers List{" "}
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Careers Apply
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                      data-kt-menu-placement="right-start"
                                      className="menu-item menu-lg-down-accordion"
                                    >
                                      <span className="menu-link py-3">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">FAQ</span>
                                        <span className="menu-arrow"></span>
                                      </span>
                                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Classic
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Extended
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          About Us
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Contact Us
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Our Team
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Licenses
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Sitemap
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                  data-kt-menu-placement="right-start"
                                  className="menu-item menu-lg-down-accordion"
                                >
                                  <span className="menu-link py-3">
                                    <span className="menu-icon">
                                      <span className="svg-icon svg-icon-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            d="M6.28548 15.0861C7.34369 13.1814 9.35142 12 11.5304 12H12.4696C14.6486 12 16.6563 13.1814 17.7145 15.0861L19.3493 18.0287C20.0899 19.3618 19.1259 21 17.601 21H6.39903C4.87406 21 3.91012 19.3618 4.65071 18.0287L6.28548 15.0861Z"
                                            fill="black"
                                          />
                                          <rect
                                            opacity="0.3"
                                            x="8"
                                            y="3"
                                            width="8"
                                            height="8"
                                            rx="4"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                    <span className="menu-title">Account</span>
                                    <span className="menu-arrow"></span>
                                  </span>
                                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Overview
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Settings
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Security
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Billing
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Statements
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Referrals
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          API Keys
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Logs</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                  data-kt-menu-placement="right-start"
                                  className="menu-item menu-lg-down-accordion"
                                >
                                  <span className="menu-link py-3">
                                    <span className="menu-icon">
                                      <span className="svg-icon svg-icon-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            opacity="0.3"
                                            d="M21 10.7192H3C2.4 10.7192 2 11.1192 2 11.7192C2 12.3192 2.4 12.7192 3 12.7192H6V14.7192C6 18.0192 8.7 20.7192 12 20.7192C15.3 20.7192 18 18.0192 18 14.7192V12.7192H21C21.6 12.7192 22 12.3192 22 11.7192C22 11.1192 21.6 10.7192 21 10.7192Z"
                                            fill="black"
                                          />
                                          <path
                                            d="M11.6 21.9192C11.4 21.9192 11.2 21.8192 11 21.7192C10.6 21.4192 10.5 20.7191 10.8 20.3191C11.7 19.1191 12.3 17.8191 12.7 16.3191C12.8 15.8191 13.4 15.4192 13.9 15.6192C14.4 15.7192 14.8 16.3191 14.6 16.8191C14.2 18.5191 13.4 20.1192 12.4 21.5192C12.2 21.7192 11.9 21.9192 11.6 21.9192ZM8.7 19.7192C10.2 18.1192 11 15.9192 11 13.7192V8.71917C11 8.11917 11.4 7.71917 12 7.71917C12.6 7.71917 13 8.11917 13 8.71917V13.0192C13 13.6192 13.4 14.0192 14 14.0192C14.6 14.0192 15 13.6192 15 13.0192V8.71917C15 7.01917 13.7 5.71917 12 5.71917C10.3 5.71917 9 7.01917 9 8.71917V13.7192C9 15.4192 8.4 17.1191 7.2 18.3191C6.8 18.7191 6.9 19.3192 7.3 19.7192C7.5 19.9192 7.7 20.0192 8 20.0192C8.3 20.0192 8.5 19.9192 8.7 19.7192ZM6 16.7192C6.5 16.7192 7 16.2192 7 15.7192V8.71917C7 8.11917 7.1 7.51918 7.3 6.91918C7.5 6.41918 7.2 5.8192 6.7 5.6192C6.2 5.4192 5.59999 5.71917 5.39999 6.21917C5.09999 7.01917 5 7.81917 5 8.71917V15.7192V15.8191C5 16.3191 5.5 16.7192 6 16.7192ZM9 4.71917C9.5 4.31917 10.1 4.11918 10.7 3.91918C11.2 3.81918 11.5 3.21917 11.4 2.71917C11.3 2.21917 10.7 1.91916 10.2 2.01916C9.4 2.21916 8.59999 2.6192 7.89999 3.1192C7.49999 3.4192 7.4 4.11916 7.7 4.51916C7.9 4.81916 8.2 4.91918 8.5 4.91918C8.6 4.91918 8.8 4.81917 9 4.71917ZM18.2 18.9192C18.7 17.2192 19 15.5192 19 13.7192V8.71917C19 5.71917 17.1 3.1192 14.3 2.1192C13.8 1.9192 13.2 2.21917 13 2.71917C12.8 3.21917 13.1 3.81916 13.6 4.01916C15.6 4.71916 17 6.61917 17 8.71917V13.7192C17 15.3192 16.8 16.8191 16.3 18.3191C16.1 18.8191 16.4 19.4192 16.9 19.6192C17 19.6192 17.1 19.6192 17.2 19.6192C17.7 19.6192 18 19.3192 18.2 18.9192Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                    <span className="menu-title">
                                      Authentication
                                    </span>
                                    <span className="menu-arrow"></span>
                                  </span>
                                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                    <div
                                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                      data-kt-menu-placement="right-start"
                                      className="menu-item menu-lg-down-accordion"
                                    >
                                      <span className="menu-link py-3">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Basic Layout
                                        </span>
                                        <span className="menu-arrow"></span>
                                      </span>
                                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Sign-in
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Sign-up
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Two-steps
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Password Reset
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              {" "}
                                              New Password{" "}
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                      data-kt-menu-placement="right-start"
                                      className="menu-item menu-lg-down-accordion"
                                    >
                                      <span className="menu-link py-3">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Aside Layout
                                        </span>
                                        <span className="menu-arrow"></span>
                                      </span>
                                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Sign-in
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Sign-up
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Two-steps
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Password Reset
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              {" "}
                                              New Password{" "}
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                      data-kt-menu-placement="right-start"
                                      className="menu-item menu-lg-down-accordion"
                                    >
                                      <span className="menu-link py-3">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Dark Layout
                                        </span>
                                        <span className="menu-arrow"></span>
                                      </span>
                                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Sign-in
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Sign-up
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Two-steps
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Password Reset
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              {" "}
                                              New Password{" "}
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                      data-kt-menu-placement="right-start"
                                      className="menu-item menu-lg-down-accordion"
                                    >
                                      <span className="menu-link py-3">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Extended
                                        </span>
                                        <span className="menu-arrow"></span>
                                      </span>
                                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Two Factor Auth
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Multi-steps Sign-up
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Free Trial Sign-up
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              {" "}
                                              Coming Soon{" "}
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Welcome Message
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              {" "}
                                              Verify Email{" "}
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Password Confirmation
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Account Deactivation
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Error 404
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Error 500
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                      data-kt-menu-placement="right-start"
                                      className="menu-item menu-lg-down-accordion"
                                    >
                                      <span className="menu-link py-3">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          {" "}
                                          Email Templates{" "}
                                        </span>
                                        <span className="menu-arrow"></span>
                                      </span>
                                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                            target="blank"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              {" "}
                                              Verify Email{" "}
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                            target="blank"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Account Invitation
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                            target="blank"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Password Reset
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                            target="blank"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Password Changed
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                  data-kt-menu-placement="right-start"
                                  className="menu-item menu-lg-down-accordion"
                                >
                                  <span className="menu-link py-3">
                                    <span className="menu-icon">
                                      <span className="svg-icon svg-icon-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            opacity="0.3"
                                            d="M21 18.3V4H20H5C4.4 4 4 4.4 4 5V20C10.9 20 16.7 15.6 19 9.5V18.3C18.4 18.6 18 19.3 18 20C18 21.1 18.9 22 20 22C21.1 22 22 21.1 22 20C22 19.3 21.6 18.6 21 18.3Z"
                                            fill="black"
                                          />
                                          <path
                                            d="M22 4C22 2.9 21.1 2 20 2C18.9 2 18 2.9 18 4C18 4.7 18.4 5.29995 18.9 5.69995C18.1 12.6 12.6 18.2 5.70001 18.9C5.30001 18.4 4.7 18 4 18C2.9 18 2 18.9 2 20C2 21.1 2.9 22 4 22C4.8 22 5.39999 21.6 5.79999 20.9C13.8 20.1 20.1 13.7 20.9 5.80005C21.6 5.40005 22 4.8 22 4Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                    <span className="menu-title">
                                      Utilities
                                    </span>
                                    <span className="menu-arrow"></span>
                                  </span>
                                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                    <div
                                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                      data-kt-menu-placement="right-start"
                                      className="menu-item menu-lg-down-accordion"
                                    >
                                      <span className="menu-link py-3">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Modals
                                        </span>
                                        <span className="menu-arrow"></span>
                                      </span>
                                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                        <div
                                          data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                          data-kt-menu-placement="right-start"
                                          className="menu-item menu-lg-down-accordion"
                                        >
                                          <span className="menu-link py-3">
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              General
                                            </span>
                                            <span className="menu-arrow"></span>
                                          </span>
                                          <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                            <div className="menu-item">
                                              <a
                                                className="menu-link py-3"
                                                href="#"
                                              >
                                                <span className="menu-bullet">
                                                  <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">
                                                  Invite Friends
                                                </span>
                                              </a>
                                            </div>
                                            <div className="menu-item">
                                              <a
                                                className="menu-link py-3"
                                                href="#"
                                              >
                                                <span className="menu-bullet">
                                                  <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">
                                                  View Users
                                                </span>
                                              </a>
                                            </div>
                                            <div className="menu-item">
                                              <a
                                                className="menu-link py-3"
                                                href="#"
                                              >
                                                <span className="menu-bullet">
                                                  <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">
                                                  Upgrade Plan
                                                </span>
                                              </a>
                                            </div>
                                            <div className="menu-item">
                                              <a
                                                className="menu-link py-3"
                                                href="#"
                                              >
                                                <span className="menu-bullet">
                                                  <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">
                                                  Share &amp; Earn
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                          data-kt-menu-placement="right-start"
                                          className="menu-item menu-lg-down-accordion"
                                        >
                                          <span className="menu-link py-3">
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Forms
                                            </span>
                                            <span className="menu-arrow"></span>
                                          </span>
                                          <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                            <div className="menu-item">
                                              <a
                                                className="menu-link py-3"
                                                href="#"
                                              >
                                                <span className="menu-bullet">
                                                  <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">
                                                  New Target
                                                </span>
                                              </a>
                                            </div>
                                            <div className="menu-item">
                                              <a
                                                className="menu-link py-3"
                                                href="#"
                                              >
                                                <span className="menu-bullet">
                                                  <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">
                                                  {" "}
                                                  New Card{" "}
                                                </span>
                                              </a>
                                            </div>
                                            <div className="menu-item">
                                              <a
                                                className="menu-link py-3"
                                                href="#"
                                              >
                                                <span className="menu-bullet">
                                                  <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">
                                                  New Address
                                                </span>
                                              </a>
                                            </div>
                                            <div className="menu-item">
                                              <a
                                                className="menu-link py-3"
                                                href="#"
                                              >
                                                <span className="menu-bullet">
                                                  <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">
                                                  Create API Key
                                                </span>
                                              </a>
                                            </div>
                                            <div className="menu-item">
                                              <a
                                                className="menu-link py-3"
                                                href="#"
                                              >
                                                <span className="menu-bullet">
                                                  <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">
                                                  {" "}
                                                  Bidding{" "}
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                          data-kt-menu-placement="right-start"
                                          className="menu-item menu-lg-down-accordion"
                                        >
                                          <span className="menu-link py-3">
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Wizards
                                            </span>
                                            <span className="menu-arrow"></span>
                                          </span>
                                          <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                            <div className="menu-item">
                                              <a
                                                className="menu-link py-3"
                                                href="#"
                                              >
                                                <span className="menu-bullet">
                                                  <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">
                                                  Two Factor Auth
                                                </span>
                                              </a>
                                            </div>
                                            <div className="menu-item">
                                              <a
                                                className="menu-link py-3"
                                                href="#"
                                              >
                                                <span className="menu-bullet">
                                                  <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">
                                                  Create App
                                                </span>
                                              </a>
                                            </div>
                                            <div className="menu-item">
                                              <a
                                                className="menu-link py-3"
                                                href="#"
                                              >
                                                <span className="menu-bullet">
                                                  <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">
                                                  Create Campaign
                                                </span>
                                              </a>
                                            </div>
                                            <div className="menu-item">
                                              <a
                                                className="menu-link py-3"
                                                href="#"
                                              >
                                                <span className="menu-bullet">
                                                  <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">
                                                  Create Account
                                                </span>
                                              </a>
                                            </div>
                                            <div className="menu-item">
                                              <a
                                                className="menu-link py-3"
                                                href="#"
                                              >
                                                <span className="menu-bullet">
                                                  <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">
                                                  Create Project
                                                </span>
                                              </a>
                                            </div>
                                            <div className="menu-item">
                                              <a
                                                className="menu-link py-3"
                                                href="#"
                                              >
                                                <span className="menu-bullet">
                                                  <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">
                                                  Offer a Deal
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                          data-kt-menu-placement="right-start"
                                          className="menu-item menu-lg-down-accordion"
                                        >
                                          <span className="menu-link py-3">
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Search
                                            </span>
                                            <span className="menu-arrow"></span>
                                          </span>
                                          <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                            <div className="menu-item">
                                              <a
                                                className="menu-link py-3"
                                                href="#"
                                              >
                                                <span className="menu-bullet">
                                                  <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">
                                                  Users
                                                </span>
                                              </a>
                                            </div>
                                            <div className="menu-item">
                                              <a
                                                className="menu-link py-3"
                                                href="#"
                                              >
                                                <span className="menu-bullet">
                                                  <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">
                                                  Select Location
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                      data-kt-menu-placement="right-start"
                                      className="menu-item menu-lg-down-accordion"
                                    >
                                      <span className="menu-link py-3">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Search
                                        </span>
                                        <span className="menu-arrow"></span>
                                      </span>
                                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Horizontal
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Vertical
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Users
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Location
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                      data-kt-menu-placement="right-start"
                                      className="menu-item menu-lg-down-accordion"
                                    >
                                      <span className="menu-link py-3">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Wizards
                                        </span>
                                        <span className="menu-arrow"></span>
                                      </span>
                                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Horizontal
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Vertical
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Two Factor Auth
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Create App
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Create Campaign
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Create Account
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Create Project
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              {" "}
                                              Offer a Deal{" "}
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                  data-kt-menu-placement="right-start"
                                  className="menu-item menu-lg-down-accordion"
                                >
                                  <span className="menu-link py-3">
                                    <span className="menu-icon">
                                      <span className="svg-icon svg-icon-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            d="M11.2929 2.70711C11.6834 2.31658 12.3166 2.31658 12.7071 2.70711L15.2929 5.29289C15.6834 5.68342 15.6834 6.31658 15.2929 6.70711L12.7071 9.29289C12.3166 9.68342 11.6834 9.68342 11.2929 9.29289L8.70711 6.70711C8.31658 6.31658 8.31658 5.68342 8.70711 5.29289L11.2929 2.70711Z"
                                            fill="black"
                                          />
                                          <path
                                            d="M11.2929 14.7071C11.6834 14.3166 12.3166 14.3166 12.7071 14.7071L15.2929 17.2929C15.6834 17.6834 15.6834 18.3166 15.2929 18.7071L12.7071 21.2929C12.3166 21.6834 11.6834 21.6834 11.2929 21.2929L8.70711 18.7071C8.31658 18.3166 8.31658 17.6834 8.70711 17.2929L11.2929 14.7071Z"
                                            fill="black"
                                          />
                                          <path
                                            opacity="0.3"
                                            d="M5.29289 8.70711C5.68342 8.31658 6.31658 8.31658 6.70711 8.70711L9.29289 11.2929C9.68342 11.6834 9.68342 12.3166 9.29289 12.7071L6.70711 15.2929C6.31658 15.6834 5.68342 15.6834 5.29289 15.2929L2.70711 12.7071C2.31658 12.3166 2.31658 11.6834 2.70711 11.2929L5.29289 8.70711Z"
                                            fill="black"
                                          />
                                          <path
                                            opacity="0.3"
                                            d="M17.2929 8.70711C17.6834 8.31658 18.3166 8.31658 18.7071 8.70711L21.2929 11.2929C21.6834 11.6834 21.6834 12.3166 21.2929 12.7071L18.7071 15.2929C18.3166 15.6834 17.6834 15.6834 17.2929 15.2929L14.7071 12.7071C14.3166 12.3166 14.3166 11.6834 14.7071 11.2929L17.2929 8.70711Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                    <span className="menu-title">Widgets</span>
                                    <span className="menu-arrow"></span>
                                  </span>
                                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Lists
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Statistics
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Charts
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Mixed
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Tables
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Feeds
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              data-kt-menu-trigger="click"
                              data-kt-menu-placement="bottom-start"
                              className="menu-item menu-lg-down-accordion me-lg-1"
                            >
                              <span className="menu-link py-3">
                                <span className="menu-title">Apps</span>
                                <span className="menu-arrow d-lg-none"></span>
                              </span>
                              <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px">
                                <div
                                  data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                  data-kt-menu-placement="right-start"
                                  className="menu-item menu-lg-down-accordion"
                                >
                                  <span className="menu-link py-3">
                                    <span className="menu-icon">
                                      <span className="svg-icon svg-icon-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            opacity="0.3"
                                            d="M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z"
                                            fill="black"
                                          />
                                          <path
                                            d="M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                    <span className="menu-title">Projects</span>
                                    <span className="menu-arrow"></span>
                                  </span>
                                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          My Projects
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          View Project
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Targets
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Budget
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Users
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Files
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Activity
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Settings
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                  data-kt-menu-placement="right-start"
                                  className="menu-item menu-lg-down-accordion"
                                >
                                  <span className="menu-link py-3">
                                    <span className="menu-icon">
                                      <span className="svg-icon svg-icon-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            opacity="0.3"
                                            d="M18.041 22.041C18.5932 22.041 19.041 21.5932 19.041 21.041C19.041 20.4887 18.5932 20.041 18.041 20.041C17.4887 20.041 17.041 20.4887 17.041 21.041C17.041 21.5932 17.4887 22.041 18.041 22.041Z"
                                            fill="black"
                                          />
                                          <path
                                            opacity="0.3"
                                            d="M6.04095 22.041C6.59324 22.041 7.04095 21.5932 7.04095 21.041C7.04095 20.4887 6.59324 20.041 6.04095 20.041C5.48867 20.041 5.04095 20.4887 5.04095 21.041C5.04095 21.5932 5.48867 22.041 6.04095 22.041Z"
                                            fill="black"
                                          />
                                          <path
                                            opacity="0.3"
                                            d="M7.04095 16.041L19.1409 15.1409C19.7409 15.1409 20.141 14.7409 20.341 14.1409L21.7409 8.34094C21.9409 7.64094 21.4409 7.04095 20.7409 7.04095H5.44095L7.04095 16.041Z"
                                            fill="black"
                                          />
                                          <path
                                            d="M19.041 20.041H5.04096C4.74096 20.041 4.34095 19.841 4.14095 19.541C3.94095 19.241 3.94095 18.841 4.14095 18.541L6.04096 14.841L4.14095 4.64095L2.54096 3.84096C2.04096 3.64096 1.84095 3.04097 2.14095 2.54097C2.34095 2.04097 2.94096 1.84095 3.44096 2.14095L5.44096 3.14095C5.74096 3.24095 5.94096 3.54096 5.94096 3.84096L7.94096 14.841C7.94096 15.041 7.94095 15.241 7.84095 15.441L6.54096 18.041H19.041C19.641 18.041 20.041 18.441 20.041 19.041C20.041 19.641 19.641 20.041 19.041 20.041Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                    <span className="menu-title">
                                      eCommerce
                                    </span>
                                    <span className="menu-arrow"></span>
                                  </span>
                                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                    <div
                                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                      data-kt-menu-placement="right-start"
                                      className="menu-item menu-lg-down-accordion"
                                    >
                                      <span className="menu-link py-3">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Catalog
                                        </span>
                                        <span className="menu-arrow"></span>
                                      </span>
                                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Products
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Categories
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              {" "}
                                              Add Product{" "}
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              {" "}
                                              Edit Product{" "}
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              {" "}
                                              Add Category{" "}
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Edit Category
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      data-kt-menu-trigger="click"
                                      className="menu-item menu-accordion"
                                    >
                                      <span className="menu-link py-3">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Sales
                                        </span>
                                        <span className="menu-arrow"></span>
                                      </span>
                                      <div className="menu-sub menu-sub-accordion">
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Orders Listing
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Order Details
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Add Order
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Edit Order
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      data-kt-menu-trigger="click"
                                      className="menu-item menu-accordion"
                                    >
                                      <span className="menu-link py-3">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Customers
                                        </span>
                                        <span className="menu-arrow"></span>
                                      </span>
                                      <div className="menu-sub menu-sub-accordion">
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Customers Listing
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Customers Details
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      data-kt-menu-trigger="click"
                                      className="menu-item menu-accordion"
                                    >
                                      <span className="menu-link py-3">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Reports
                                        </span>
                                        <span className="menu-arrow"></span>
                                      </span>
                                      <div className="menu-sub menu-sub-accordion">
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Products Viewed
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Sales
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Returns
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Customer Orders
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Shipping
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Settings
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                  data-kt-menu-placement="right-start"
                                  className="menu-item menu-lg-down-accordion"
                                >
                                  <span className="menu-link py-3">
                                    <span className="menu-icon">
                                      <span className="svg-icon svg-icon-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            d="M13 5.91517C15.8 6.41517 18 8.81519 18 11.8152C18 12.5152 17.9 13.2152 17.6 13.9152L20.1 15.3152C20.6 15.6152 21.4 15.4152 21.6 14.8152C21.9 13.9152 22.1 12.9152 22.1 11.8152C22.1 7.01519 18.8 3.11521 14.3 2.01521C13.7 1.91521 13.1 2.31521 13.1 3.01521V5.91517H13Z"
                                            fill="black"
                                          />
                                          <path
                                            opacity="0.3"
                                            d="M19.1 17.0152C19.7 17.3152 19.8 18.1152 19.3 18.5152C17.5 20.5152 14.9 21.7152 12 21.7152C9.1 21.7152 6.50001 20.5152 4.70001 18.5152C4.30001 18.0152 4.39999 17.3152 4.89999 17.0152L7.39999 15.6152C8.49999 16.9152 10.2 17.8152 12 17.8152C13.8 17.8152 15.5 17.0152 16.6 15.6152L19.1 17.0152ZM6.39999 13.9151C6.19999 13.2151 6 12.5152 6 11.8152C6 8.81517 8.2 6.41515 11 5.91515V3.01519C11 2.41519 10.4 1.91519 9.79999 2.01519C5.29999 3.01519 2 7.01517 2 11.8152C2 12.8152 2.2 13.8152 2.5 14.8152C2.7 15.4152 3.4 15.7152 4 15.3152L6.39999 13.9151Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                    <span className="menu-title">
                                      Support Center
                                    </span>
                                    <span className="menu-arrow"></span>
                                  </span>
                                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Overview
                                        </span>
                                      </a>
                                    </div>
                                    <div
                                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                      data-kt-menu-placement="right-start"
                                      className="menu-item menu-lg-down-accordion"
                                    >
                                      <span className="menu-link py-3">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Tickets
                                        </span>
                                        <span className="menu-arrow"></span>
                                      </span>
                                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              {" "}
                                              Ticket List{" "}
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              {" "}
                                              Ticket View{" "}
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                      data-kt-menu-placement="right-start"
                                      className="menu-item menu-lg-down-accordion"
                                    >
                                      <span className="menu-link py-3">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Tutorials
                                        </span>
                                        <span className="menu-arrow"></span>
                                      </span>
                                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Tutorials List
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Tutorials Post
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">FAQ</span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Licenses
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Contact Us
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                  data-kt-menu-placement="right-start"
                                  className="menu-item menu-lg-down-accordion"
                                >
                                  <span className="menu-link py-3">
                                    <span className="menu-icon">
                                      <span className="svg-icon svg-icon-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            opacity="0.3"
                                            d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z"
                                            fill="black"
                                          />
                                          <path
                                            d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                    <span className="menu-title">
                                      User Management
                                    </span>
                                    <span className="menu-arrow"></span>
                                  </span>
                                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                    <div
                                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                      data-kt-menu-placement="right-start"
                                      className="menu-item menu-lg-down-accordion"
                                    >
                                      <span className="menu-link py-3">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Users
                                        </span>
                                        <span className="menu-arrow"></span>
                                      </span>
                                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Users List
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              View User
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                      data-kt-menu-placement="right-start"
                                      className="menu-item menu-lg-down-accordion"
                                    >
                                      <span className="menu-link py-3">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Roles
                                        </span>
                                        <span className="menu-arrow"></span>
                                      </span>
                                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Roles List
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              View Roles
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Permissions
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                  data-kt-menu-placement="right-start"
                                  className="menu-item menu-lg-down-accordion"
                                >
                                  <span className="menu-link py-3">
                                    <span className="menu-icon">
                                      <span className="svg-icon svg-icon-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            d="M6 21C6 21.6 6.4 22 7 22H17C17.6 22 18 21.6 18 21V20H6V21Z"
                                            fill="black"
                                          />
                                          <path
                                            opacity="0.3"
                                            d="M17 2H7C6.4 2 6 2.4 6 3V20H18V3C18 2.4 17.6 2 17 2Z"
                                            fill="black"
                                          />
                                          <path
                                            d="M12 4C11.4 4 11 3.6 11 3V2H13V3C13 3.6 12.6 4 12 4Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                    <span className="menu-title">Contacts</span>
                                    <span className="menu-arrow"></span>
                                  </span>
                                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          {" "}
                                          Getting Started{" "}
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Add Contact
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Edit Contact
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          View Contact
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                  data-kt-menu-placement="right-start"
                                  className="menu-item menu-lg-down-accordion"
                                >
                                  <span className="menu-link py-3">
                                    <span className="menu-icon">
                                      <span className="svg-icon svg-icon-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z"
                                            fill="black"
                                          />
                                          <path
                                            opacity="0.3"
                                            d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z"
                                            fill="black"
                                          />
                                          <path
                                            opacity="0.3"
                                            d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                    <span className="menu-title">
                                      Subscriptions
                                    </span>
                                    <span className="menu-arrow"></span>
                                  </span>
                                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          {" "}
                                          Getting Started{" "}
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Subscription List
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          {" "}
                                          Add Subscription{" "}
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          View Subscription
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                  data-kt-menu-placement="right-start"
                                  className="menu-item menu-lg-down-accordion"
                                >
                                  <span className="menu-link py-3">
                                    <span className="menu-icon">
                                      <span className="svg-icon svg-icon-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            opacity="0.3"
                                            d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z"
                                            fill="black"
                                          />
                                          <path
                                            d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                    <span className="menu-title">
                                      Customers
                                    </span>
                                    <span className="menu-arrow"></span>
                                  </span>
                                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          {" "}
                                          Getting Started{" "}
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          {" "}
                                          Customer Listing{" "}
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          {" "}
                                          Customer Details{" "}
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                  data-kt-menu-placement="right-start"
                                  className="menu-item menu-lg-down-accordion"
                                >
                                  <span className="menu-link py-3">
                                    <span className="menu-icon">
                                      <span className="svg-icon svg-icon-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            d="M22 7H2V11H22V7Z"
                                            fill="black"
                                          />
                                          <path
                                            opacity="0.3"
                                            d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19ZM14 14C14 13.4 13.6 13 13 13H5C4.4 13 4 13.4 4 14C4 14.6 4.4 15 5 15H13C13.6 15 14 14.6 14 14ZM16 15.5C16 16.3 16.7 17 17.5 17H18.5C19.3 17 20 16.3 20 15.5C20 14.7 19.3 14 18.5 14H17.5C16.7 14 16 14.7 16 15.5Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                    <span className="menu-title">
                                      Invoice Management
                                    </span>
                                    <span className="menu-arrow"></span>
                                  </span>
                                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                    <div
                                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                      data-kt-menu-placement="right-start"
                                      className="menu-item menu-lg-down-accordion"
                                    >
                                      <span className="menu-link py-3">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Profile
                                        </span>
                                        <span className="menu-arrow"></span>
                                      </span>
                                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Invoice 1
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Invoice 2
                                            </span>
                                          </a>
                                        </div>
                                        <div className="menu-item">
                                          <a
                                            className="menu-link py-3"
                                            href="#"
                                          >
                                            <span className="menu-bullet">
                                              <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">
                                              Invoice 3
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Create Invoice
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                  data-kt-menu-placement="right-start"
                                  className="menu-item menu-lg-down-accordion"
                                >
                                  <span className="menu-link py-3">
                                    <span className="menu-icon">
                                      <span className="svg-icon svg-icon-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            opacity="0.3"
                                            d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z"
                                            fill="black"
                                          />
                                          <path
                                            d="M20 8L14 2V6C14 7.10457 14.8954 8 16 8H20Z"
                                            fill="black"
                                          />
                                          <path
                                            d="M10.3629 14.0084L8.92108 12.6429C8.57518 12.3153 8.03352 12.3153 7.68761 12.6429C7.31405 12.9967 7.31405 13.5915 7.68761 13.9453L10.2254 16.3488C10.6111 16.714 11.215 16.714 11.6007 16.3488L16.3124 11.8865C16.6859 11.5327 16.6859 10.9379 16.3124 10.5841C15.9665 10.2565 15.4248 10.2565 15.0789 10.5841L11.4631 14.0084C11.1546 14.3006 10.6715 14.3006 10.3629 14.0084Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                    <span className="menu-title">
                                      File Manager
                                    </span>
                                    <span className="menu-arrow"></span>
                                  </span>
                                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Folders
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Files
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          {" "}
                                          Blank Directory{" "}
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Settings
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                  data-kt-menu-placement="right-start"
                                  className="menu-item menu-lg-down-accordion"
                                >
                                  <span className="menu-link py-3">
                                    <span className="menu-icon">
                                      <span className="svg-icon svg-icon-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            opacity="0.3"
                                            d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z"
                                            fill="black"
                                          />
                                          <path
                                            d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                    <span className="menu-title">Inbox</span>
                                    <span className="menu-arrow"></span>
                                  </span>
                                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Messages
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Compose
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          {" "}
                                          View &amp; Reply{" "}
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                  data-kt-menu-placement="right-start"
                                  className="menu-item menu-lg-down-accordion"
                                >
                                  <span className="menu-link py-3">
                                    <span className="menu-icon">
                                      <span className="svg-icon svg-icon-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            opacity="0.3"
                                            d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                                            fill="black"
                                          />
                                          <rect
                                            x="6"
                                            y="12"
                                            width="7"
                                            height="2"
                                            rx="1"
                                            fill="black"
                                          />
                                          <rect
                                            x="6"
                                            y="7"
                                            width="12"
                                            height="2"
                                            rx="1"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                    <span className="menu-title">Chat</span>
                                    <span className="menu-arrow"></span>
                                  </span>
                                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Private Chat
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Group Chat
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Drawer Chat
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link py-3" href="#">
                                    <span className="menu-icon">
                                      <span className="svg-icon svg-icon-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            opacity="0.3"
                                            d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z"
                                            fill="black"
                                          />
                                          <path
                                            d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z"
                                            fill="black"
                                          />
                                          <path
                                            d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                    <span className="menu-title">Calendar</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              data-kt-menu-trigger="click"
                              data-kt-menu-placement="bottom-start"
                              className="menu-item menu-lg-down-accordion me-lg-1"
                            >
                              <span className="menu-link py-3">
                                <span className="menu-title">Layouts</span>
                                <span className="menu-arrow d-lg-none"></span>
                              </span>
                              <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px">
                                <div
                                  data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                  data-kt-menu-placement="right-start"
                                  className="menu-item menu-lg-down-accordion"
                                >
                                  <span className="menu-link py-3">
                                    <span className="menu-icon">
                                      <span className="svg-icon svg-icon-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            d="M18 21.6C16.6 20.4 9.1 20.3 6.3 21.2C5.7 21.4 5.1 21.2 4.7 20.8L2 18C4.2 15.8 10.8 15.1 15.8 15.8C16.2 18.3 17 20.5 18 21.6ZM18.8 2.8C18.4 2.4 17.8 2.20001 17.2 2.40001C14.4 3.30001 6.9 3.2 5.5 2C6.8 3.3 7.4 5.5 7.7 7.7C9 7.9 10.3 8 11.7 8C15.8 8 19.8 7.2 21.5 5.5L18.8 2.8Z"
                                            fill="black"
                                          />
                                          <path
                                            opacity="0.3"
                                            d="M21.2 17.3C21.4 17.9 21.2 18.5 20.8 18.9L18 21.6C15.8 19.4 15.1 12.8 15.8 7.8C18.3 7.4 20.4 6.70001 21.5 5.60001C20.4 7.00001 20.2 14.5 21.2 17.3ZM8 11.7C8 9 7.7 4.2 5.5 2L2.8 4.8C2.4 5.2 2.2 5.80001 2.4 6.40001C2.7 7.40001 3.00001 9.2 3.10001 11.7C3.10001 15.5 2.40001 17.6 2.10001 18C3.20001 16.9 5.3 16.2 7.8 15.8C8 14.2 8 12.7 8 11.7Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                    <span className="menu-title">Toolbars</span>
                                    <span className="menu-arrow"></span>
                                  </span>
                                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Toolbar 1
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Toolbar 2
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Toolbar 3
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Toolbar 4
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Toolbar 5
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          No Toolbar
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                  data-kt-menu-placement="right-start"
                                  className="menu-item menu-lg-dropdown"
                                >
                                  <span className="menu-link py-3">
                                    <span className="menu-icon">
                                      <span className="svg-icon svg-icon-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            opacity="0.3"
                                            d="M21 22H14C13.4 22 13 21.6 13 21V3C13 2.4 13.4 2 14 2H21C21.6 2 22 2.4 22 3V21C22 21.6 21.6 22 21 22Z"
                                            fill="black"
                                          />
                                          <path
                                            d="M10 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H10C10.6 2 11 2.4 11 3V21C11 21.6 10.6 22 10 22Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                    <span className="menu-title">Aside</span>
                                    <span className="menu-arrow"></span>
                                  </span>
                                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Light Skin
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Font Icons
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Minimized
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a className="menu-link py-3" href="#">
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Only Header
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="menu-item">
                                  <a
                                    className="menu-link py-3"
                                    href="https://preview.keenthemes.com/metronic8/demo1/layout-builder.html"
                                    title="Build your layout, preview and export HTML for server side integration"
                                    data-bs-toggle="tooltip"
                                    data-bs-trigger="hover"
                                    data-bs-dismiss="click"
                                    data-bs-placement="right"
                                  >
                                    <span className="menu-icon">
                                      <span className="svg-icon svg-icon-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z"
                                            fill="black"
                                          />
                                          <path
                                            opacity="0.3"
                                            d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                    <span className="menu-title">
                                      Layout Builder
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              data-kt-menu-trigger="click"
                              data-kt-menu-placement="bottom-start"
                              className="menu-item menu-lg-down-accordion me-lg-1"
                            >
                              <span className="menu-link py-3">
                                <span className="menu-title">Resources</span>
                                <span className="menu-arrow d-lg-none"></span>
                              </span>
                              <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px">
                                <div className="menu-item">
                                  <a
                                    className="menu-link py-3"
                                    href="#"
                                    title="Check out over 200 in-house components, plugins and ready for use solutions"
                                    data-bs-toggle="tooltip"
                                    data-bs-trigger="hover"
                                    data-bs-dismiss="click"
                                    data-bs-placement="right"
                                  >
                                    <span className="menu-icon">
                                      <span className="svg-icon svg-icon-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            opacity="0.3"
                                            d="M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z"
                                            fill="black"
                                          />
                                          <path
                                            d="M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                    <span className="menu-title">
                                      Components
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a
                                    className="menu-link py-3"
                                    href="https://preview.keenthemes.com/metronic8/demo1/layout-builder.html"
                                    title="Build your layout, preview and export HTML for server side integration"
                                    data-bs-toggle="tooltip"
                                    data-bs-trigger="hover"
                                    data-bs-dismiss="click"
                                    data-bs-placement="right"
                                  >
                                    <span className="menu-icon">
                                      <span className="svg-icon svg-icon-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z"
                                            fill="black"
                                          />
                                          <path
                                            opacity="0.3"
                                            d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                    <span className="menu-title">
                                      Layout Builder
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a
                                    className="menu-link py-3"
                                    href="#"
                                    title="Check out the complete documentation"
                                    data-bs-toggle="tooltip"
                                    data-bs-trigger="hover"
                                    data-bs-dismiss="click"
                                    data-bs-placement="right"
                                  >
                                    <span className="menu-icon">
                                      <span className="svg-icon svg-icon-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            opacity="0.3"
                                            d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                                            fill="black"
                                          />
                                          <path
                                            d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                    <span className="menu-title">
                                      Documentation
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a className="menu-link py-3" href="#">
                                    <span className="menu-icon">
                                      <span className="svg-icon svg-icon-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            d="M16.95 18.9688C16.75 18.9688 16.55 18.8688 16.35 18.7688C15.85 18.4688 15.75 17.8688 16.05 17.3688L19.65 11.9688L16.05 6.56876C15.75 6.06876 15.85 5.46873 16.35 5.16873C16.85 4.86873 17.45 4.96878 17.75 5.46878L21.75 11.4688C21.95 11.7688 21.95 12.2688 21.75 12.5688L17.75 18.5688C17.55 18.7688 17.25 18.9688 16.95 18.9688ZM7.55001 18.7688C8.05001 18.4688 8.15 17.8688 7.85 17.3688L4.25001 11.9688L7.85 6.56876C8.15 6.06876 8.05001 5.46873 7.55001 5.16873C7.05001 4.86873 6.45 4.96878 6.15 5.46878L2.15 11.4688C1.95 11.7688 1.95 12.2688 2.15 12.5688L6.15 18.5688C6.35 18.8688 6.65 18.9688 6.95 18.9688C7.15 18.9688 7.35001 18.8688 7.55001 18.7688Z"
                                            fill="black"
                                          />
                                          <path
                                            opacity="0.3"
                                            d="M10.45 18.9687C10.35 18.9687 10.25 18.9687 10.25 18.9687C9.75 18.8687 9.35 18.2688 9.55 17.7688L12.55 5.76878C12.65 5.26878 13.25 4.8687 13.75 5.0687C14.25 5.1687 14.65 5.76878 14.45 6.26878L11.45 18.2688C11.35 18.6688 10.85 18.9687 10.45 18.9687Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                    <span className="menu-title">
                                      Changelog v8.0.37
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              data-kt-menu-trigger="click"
                              data-kt-menu-placement="bottom-start"
                              className="menu-item menu-lg-down-accordion me-lg-1"
                            >
                              <span className="menu-link py-3">
                                <span className="menu-title">Mega Menu</span>
                                <span className="menu-arrow d-lg-none"></span>
                              </span>
                              <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown w-100 w-lg-600px p-5 p-lg-5">
                                <div
                                  className="row"
                                  data-kt-menu-dismiss="true"
                                >
                                  <div className="col-lg-4 border-left-lg-1">
                                    <div className="menu-inline menu-column menu-active-bg">
                                      <div className="menu-item">
                                        <a href="#" className="menu-link">
                                          <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                          </span>
                                          <span className="menu-title">
                                            Example link
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item">
                                        <a href="#" className="menu-link">
                                          <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                          </span>
                                          <span className="menu-title">
                                            Example link
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item">
                                        <a href="#" className="menu-link">
                                          <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                          </span>
                                          <span className="menu-title">
                                            Example link
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item">
                                        <a href="#" className="menu-link">
                                          <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                          </span>
                                          <span className="menu-title">
                                            Example link
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item">
                                        <a href="#" className="menu-link">
                                          <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                          </span>
                                          <span className="menu-title">
                                            Example link
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-lg-4 border-left-lg-1">
                                    <div className="menu-inline menu-column menu-active-bg">
                                      <div className="menu-item">
                                        <a href="#" className="menu-link">
                                          <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                          </span>
                                          <span className="menu-title">
                                            Example link
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item">
                                        <a href="#" className="menu-link">
                                          <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                          </span>
                                          <span className="menu-title">
                                            Example link
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item">
                                        <a href="#" className="menu-link">
                                          <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                          </span>
                                          <span className="menu-title">
                                            Example link
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item">
                                        <a href="#" className="menu-link">
                                          <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                          </span>
                                          <span className="menu-title">
                                            Example link
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item">
                                        <a href="#" className="menu-link">
                                          <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                          </span>
                                          <span className="menu-title">
                                            Example link
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-lg-4 border-left-lg-1">
                                    <div className="menu-inline menu-column menu-active-bg">
                                      <div className="menu-item">
                                        <a href="#" className="menu-link">
                                          <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                          </span>
                                          <span className="menu-title">
                                            Example link
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item">
                                        <a href="#" className="menu-link">
                                          <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                          </span>
                                          <span className="menu-title">
                                            Example link
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item">
                                        <a href="#" className="menu-link">
                                          <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                          </span>
                                          <span className="menu-title">
                                            Example link
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item">
                                        <a href="#" className="menu-link">
                                          <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                          </span>
                                          <span className="menu-title">
                                            Example link
                                          </span>
                                        </a>
                                      </div>
                                      <div className="menu-item">
                                        <a href="#" className="menu-link">
                                          <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                          </span>
                                          <span className="menu-title">
                                            Example link
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
