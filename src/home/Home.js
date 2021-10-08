import React from 'react'
import './Home.css'

import { Link } from 'react-router-dom'
export default function mainHome(params) {
    return (
        <body className="u-body">

            <section className="u-align-center u-clearfix u-image u-section-1" id="carousel_279f" data-image-width="1920" data-image-height="960">
                <div className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-sm u-valign-middle-xl u-valign-middle-xs u-sheet-1">
                    <div className="u-align-left u-container-style u-expanded-width-sm u-expanded-width-xs u-group u-shape-rectangle u-group-1">
                        <div className="u-container-layout u-valign-top u-container-layout-1">
                            <h2 className="u-text u-text-body-alt-color u-text-1"  ><h1 style={{ color: "#5b335e", fontWeight: "bolder" }} >Welcome to InfoForNation</h1></h2>
                            <h3>AUTHENTIC & INTANT information for the whole the nation</h3>
                        </div>
                    </div>
                    <div className="u-expanded-width-sm u-expanded-width-xs u-list u-list-1">
                        <div className="u-repeater u-repeater-1">
                            <Link to="/news">  <div className="u-container-style u-list-item u-repeater-item u-video-cover u-white u-list-item-1">
                                <div className="u-container-layout u-similar-container u-valign-top u-container-layout-2"><span className="u-grey-10 u-icon u-icon-circle u-spacing-25 u-icon-1"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512" style={{}}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-26b7"></use></svg><svg className="u-svg-content" viewBox="0 0 512 512" id="svg-26b7"><g><g><path d="m465.104 504.5c-21.758 0-39.396-16.969-39.396-37.9v-376.267c0-11.158-9.045-20.203-20.203-20.203h-377.802c-11.158 0-20.203 9.045-20.203 20.203v376.267c0 20.932 17.638 37.9 39.396 37.9z" fill="#e7ecf6"></path>
                                </g><g><path d="m39.825 277.213h141.423v161.626h-141.423z" fill="#df75a5"></path>
                                    </g><g><path d="m39.825 101.445h353.557v135.362h-353.557z" fill="#ffe07d"></path>
                                    </g><g><path d="m484.802 7.5c-10.879 0-19.698 8.819-19.698 19.698v355.072c0 11.158-9.045 20.203-20.203 20.203h-19.193v-312.14c0-11.158-9.045-20.203-20.203-20.203h-356.588v-42.932c0-10.879 8.819-19.698 19.698-19.698z" fill="#d8e2f1"></path>
                                    </g><g><path d="m425.707 466.6c0 20.932 17.638 37.9 39.396 37.9s39.396-16.969 39.396-37.9v-438.93c0-10.681-8.306-19.778-18.98-20.157-11.206-.398-20.416 8.568-20.416 19.685v355.072c0 11.158-9.045 20.203-20.203 20.203h-19.193z" fill="#a2b9e2"></path>
                                    </g><g><path d="m393.382 269.713h-171.728c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h171.728c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"></path><path d="m393.382 302.039h-171.728c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h171.728c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"></path><path d="m393.382 334.364h-171.728c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h171.728c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"></path><path d="m393.382 366.689h-171.728c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h171.728c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"></path><path d="m393.382 399.014h-171.728c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h171.728c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"></path><path d="m393.382 431.339h-171.728c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h171.728c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"></path><path d="m39.825 478.665h353.557c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-353.557c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z"></path><path d="m32.325 438.839c0 4.142 3.358 7.5 7.5 7.5h141.423c4.142 0 7.5-3.358 7.5-7.5v-161.626c0-4.142-3.358-7.5-7.5-7.5h-141.423c-4.142 0-7.5 3.358-7.5 7.5zm15-154.126h126.423v146.626h-126.423z"></path><path d="m400.882 101.445c0-4.142-3.358-7.5-7.5-7.5h-353.557c-4.142 0-7.5 3.358-7.5 7.5v135.362c0 4.142 3.358 7.5 7.5 7.5h353.557c4.142 0 7.5-3.358 7.5-7.5zm-15 127.862h-338.557v-120.362h338.557z"></path><path d="m69.425 211.982c4.142 0 7.5-3.358 7.5-7.5v-46.521l34.052 49.31c2.257 3.261 6.002 4.653 9.537 3.548 3.621-1.131 5.961-4.554 5.96-8.793l-.661-68.328c-.04-4.118-3.39-7.428-7.498-7.428-.024 0-.049 0-.074 0-4.142.04-7.467 3.43-7.427 7.572l.459 47.461-35.678-51.664c-1.865-2.701-5.269-3.875-8.403-2.898s-5.268 3.878-5.268 7.16v70.58c.001 4.143 3.359 7.501 7.501 7.501z"></path><path d="m150.687 211.982h29.795c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-22.295v-20.356h20.098c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-20.098v-20.355h22.295c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-29.795c-4.142 0-7.5 3.358-7.5 7.5v70.711c0 4.142 3.358 7.5 7.5 7.5z"></path><path d="m342.505 211.982c14.252 0 26.212-9.045 28.437-21.507 1.665-9.326-2.636-21.533-19.701-27.828-8.901-3.283-17.171-6.863-19.478-7.875-1.827-1.396-2.708-3.585-2.369-5.952.216-1.502 1.287-5.167 6.563-6.757 10.692-3.218 20.457 4.552 20.694 4.745 3.171 2.637 7.879 2.219 10.535-.942 2.665-3.17 2.255-7.901-.916-10.567-.645-.542-16.008-13.21-34.64-7.598-9.258 2.789-15.804 10.064-17.085 18.988-1.197 8.341 2.417 16.363 9.432 20.936.331.216.679.406 1.04.566.408.182 10.106 4.499 21.032 8.529 7.221 2.664 10.912 6.716 10.125 11.118-.803 4.495-6.135 9.144-13.67 9.144-7.399 0-14.534-2.998-19.084-8.019-2.782-3.069-7.524-3.303-10.594-.521-3.069 2.782-3.302 7.524-.521 10.594 7.348 8.107 18.637 12.946 30.2 12.946z"></path><path d="m219.227 204.875c.071.358.167.71.29 1.054 1.288 3.626 4.727 6.052 8.571 6.052h.061c3.869-.026 7.305-2.504 8.551-6.167.022-.065.043-.131.064-.197l14.35-46.362 14.286 46.373c.031.102.065.204.101.304 1.289 3.625 4.728 6.049 8.571 6.049h.062c3.868-.026 7.304-2.505 8.549-6.167.106-.311.191-.629.255-.951l13.832-69.499c.808-4.062-1.83-8.011-5.892-8.82-4.061-.806-8.011 1.829-8.82 5.892l-9.227 46.364-14.553-47.238-.043.013c-.731-2.233-2.491-4.092-4.907-4.84-3.957-1.223-8.157.99-9.382 4.947l-14.586 47.123-9.196-46.49c-.804-4.064-4.754-6.707-8.812-5.902-4.063.804-6.706 4.75-5.902 8.812z"></path><path d="m485.787.018c-.17-.007-.824-.018-.987-.018h-138.21c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h113.903c-1.85 3.671-2.893 7.816-2.893 12.2v170.3c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-170.3c-.051-6.594 5.645-12.292 12.429-12.212 6.319.081 11.966 5.868 11.971 12.682v438.93c0 16.763-14.309 30.4-31.896 30.4-.001 0-.001 0-.002 0s-.001 0-.002 0c-17.584 0-31.89-13.637-31.89-30.4v-56.63h11.69c15.274 0 27.7-12.426 27.7-27.7v-149.77c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v149.77c0 7.003-5.697 12.7-12.7 12.7h-11.69v-304.64c0-15.274-12.431-27.7-27.71-27.7h-349.08v-35.43c0-6.727 5.468-12.2 12.19-12.2h242.98c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-242.98c-14.993 0-27.19 12.202-27.19 27.2v35.43h-13.72c-15.274 0-27.7 12.426-27.7 27.7v221.14c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-221.14c0-7.003 5.697-12.7 12.7-12.7h377.8c7.008 0 12.71 5.697 12.71 12.7v376.27c0 11.681 4.58 22.346 12.093 30.4h-383.403c-17.59 0-31.9-13.637-31.9-30.4v-120.13c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v120.13c0 25.034 21.039 45.4 46.9 45.4h418.2.002s.001 0 .002 0c25.858 0 46.896-20.367 46.896-45.4v-438.93c0-14.983-11.515-27.13-26.213-27.652z"></path>
                                    </g>
                                </g></svg></span>
                                    <h4 className="u-align-center u-text u-text-default u-text-grey-60 u-text-3">NEWS</h4>

                                </div>
                            </div></Link>
                            <Link to="/covid/Home">  <div className="u-align-center u-container-style u-list-item u-repeater-item u-video-cover u-white u-list-item-2">
                                <div className="u-container-layout u-similar-container u-valign-top u-container-layout-3"><span className="u-grey-10 u-icon u-icon-circle u-spacing-25 u-icon-2"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512.019 512.019" style={{}}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-c3a9"></use></svg><svg className="u-svg-content" viewBox="0 0 512.019 512.019" id="svg-c3a9"><g id="XMLID_629_"><ellipse id="XMLID_494_" cx="255.798" cy="204.54" fill="#ff9171" rx="119.097" ry="119.097" transform="matrix(.707 -.707 .707 .707 -69.71 240.785)"></ellipse><g id="XMLID_2843_"><circle id="XMLID_2844_" cx="128.791" cy="331.546" fill="#b7eabc" r="21.123"></circle>
                                </g><g id="XMLID_2841_"><circle id="XMLID_2842_" cx="128.791" cy="331.546" fill="#b7eabc" r="21.123"></circle>
                                    </g><g fill="#b7eabc"><circle id="XMLID_2830_" cx="255.798" cy="372.013" r="18.105"></circle><circle id="XMLID_1797_" cx="255.798" cy="372.013" r="18.105"></circle><ellipse id="XMLID_1768_" cx="255.798" cy="32.59" rx="22.581" ry="22.581" transform="matrix(.987 -.16 .16 .987 -1.917 41.395)"></ellipse><ellipse id="XMLID_1614_" cx="255.798" cy="32.59" rx="22.581" ry="22.581" transform="matrix(.987 -.16 .16 .987 -1.917 41.395)"></ellipse><ellipse id="XMLID_1822_" cx="88.324" cy="204.54" rx="18.105" ry="18.105" transform="matrix(.23 -.973 .973 .23 -131.037 243.507)"></ellipse><ellipse id="XMLID_1821_" cx="88.324" cy="204.54" rx="18.105" ry="18.105" transform="matrix(.23 -.973 .973 .23 -131.037 243.507)"></ellipse><ellipse id="XMLID_1798_" cx="423.271" cy="204.54" rx="18.105" ry="18.105" transform="matrix(.707 -.707 .707 .707 -20.658 359.206)"></ellipse><ellipse id="XMLID_1796_" cx="423.271" cy="204.54" rx="18.105" ry="18.105" transform="matrix(.707 -.707 .707 .707 -20.658 359.206)"></ellipse>
                                    </g><g id="XMLID_1788_"><ellipse id="XMLID_1791_" cx="374.895" cy="323.637" fill="#b7eabc" rx="21.123" ry="21.123" transform="matrix(.987 -.16 .16 .987 -47 64.23)"></ellipse>
                                    </g><g id="XMLID_1786_"><ellipse id="XMLID_1787_" cx="374.895" cy="323.637" fill="#b7eabc" rx="21.123" ry="21.123" transform="matrix(.987 -.16 .16 .987 -47 64.23)"></ellipse>
                                    </g><g id="XMLID_179_"><circle id="XMLID_181_" cx="201.117" cy="204.54" fill="#b7eabc" r="21.123"></circle>
                                    </g><g id="XMLID_177_"><circle id="XMLID_178_" cx="201.117" cy="204.54" fill="#b7eabc" r="21.123"></circle>
                                    </g><g id="XMLID_204_"><ellipse id="XMLID_207_" cx="277.047" cy="162.294" fill="#b7eabc" rx="21.123" ry="21.123" transform="matrix(.987 -.16 .16 .987 -22.419 46.474)"></ellipse>
                                    </g><g id="XMLID_185_"><ellipse id="XMLID_186_" cx="277.047" cy="162.294" fill="#b7eabc" rx="21.123" ry="21.123" transform="matrix(.987 -.16 .16 .987 -22.419 46.474)"></ellipse>
                                    </g><g id="XMLID_212_"><circle id="XMLID_213_" cx="268.406" cy="259.221" fill="#b7eabc" r="21.123"></circle>
                                    </g><g id="XMLID_210_"><circle id="XMLID_211_" cx="268.406" cy="259.221" fill="#b7eabc" r="21.123"></circle>
                                    </g><g id="XMLID_1843_"><circle id="XMLID_1844_" cx="136.039" cy="84.781" fill="#b7eabc" r="21.123"></circle>
                                    </g><g id="XMLID_1833_"><circle id="XMLID_1842_" cx="136.039" cy="84.781" fill="#b7eabc" r="21.123"></circle>
                                    </g><g id="XMLID_1545_"><g id="XMLID_1828_"><ellipse id="XMLID_1829_" cx="386.757" cy="73.58" fill="#b7eabc" rx="21.123" ry="21.123" transform="matrix(.924 -.383 .383 .924 1.282 153.607)"></ellipse>
                                    </g><g id="XMLID_1826_"><ellipse id="XMLID_1827_" cx="386.757" cy="73.58" fill="#b7eabc" rx="21.123" ry="21.123" transform="matrix(.924 -.383 .383 .924 1.282 153.607)"></ellipse>
                                        </g>
                                    </g><g id="XMLID_624_"><path id="XMLID_626_" d="m279.132 420.01c-5.523 0-10 4.478-10 10v72c0 5.523 4.477 10 10 10s10-4.478 10-10v-72c0-5.523-4.477-10-10-10z"></path><path id="XMLID_1032_" d="m58.031 487.455c-3.332 3.022-7.599 4.555-12.682 4.555-13.977 0-25.349-11.663-25.349-26s11.372-26 25.349-26c4.431 0 8.787 1.187 12.598 3.432 4.757 2.801 10.889 1.218 13.692-3.541 2.803-4.758 1.218-10.888-3.541-13.691-6.885-4.056-14.751-6.199-22.749-6.199-25.005-.001-45.349 20.634-45.349 45.999 0 25.364 20.344 46 45.349 46 10.062 0 19.094-3.369 26.12-9.742 4.091-3.711 4.398-10.035.688-14.125-3.711-4.091-10.035-4.4-14.126-.688z"></path><path id="XMLID_1033_" d="m242.285 420.651c-5.241-1.741-10.901 1.096-12.643 6.338l-15.731 47.354-16.527-47.613c-1.812-5.217-7.509-7.981-12.727-6.168-5.217 1.812-7.979 7.509-6.168 12.727l24.641 70.985c1.645 4.636 6.041 7.735 10.954 7.735h.077c4.944-.033 9.336-3.199 10.952-7.949l23.509-70.767c1.741-5.24-1.096-10.9-6.337-12.642z"></path><path id="XMLID_1036_" d="m131.211 420.085c-19.152 0-34.734 15.581-34.734 34.733v22.458c0 19.152 15.582 34.733 34.734 34.733s34.733-15.581 34.733-34.733v-22.458c.001-19.152-15.581-34.733-34.733-34.733zm14.734 57.191c0 8.124-6.609 14.733-14.733 14.733s-14.734-6.609-14.734-14.733v-22.458c0-8.124 6.609-14.733 14.734-14.733 8.124 0 14.733 6.609 14.733 14.733z"></path><path id="XMLID_1037_" d="m417.048 420.01h-12.64c-5.523 0-10 4.478-10 10 0 5.523 4.477 10 10 10h2.64v62c0 5.523 4.477 10 10 10s10-4.478 10-10v-72c0-5.523-4.477-10-10-10z"></path><path id="XMLID_1040_" d="m512.019 451.42c0-16.995-13.826-30.821-30.821-30.821-16.994 0-30.82 13.826-30.82 30.821 0 16.83 13.562 30.544 30.331 30.808-5.26 7.479-10.367 11.474-10.538 11.605-4.396 3.305-5.302 9.544-2.016 13.962 1.963 2.639 4.978 4.033 8.032 4.033 2.075 0 4.167-.644 5.96-1.978 1.035-.77 25.237-19.148 29.487-53.577.251-1.581.385-3.202.385-4.853zm-41.641 0c0-5.967 4.854-10.821 10.82-10.821 5.967 0 10.821 4.854 10.821 10.821s-4.854 10.82-10.821 10.82c-5.966 0-10.82-4.853-10.82-10.82z"></path><path id="XMLID_1043_" d="m423.272 176.435c-11.976 0-22.22 7.532-26.26 18.105h-12.496c-1.083-14.226-4.485-28.03-10.155-41.155-2.191-5.07-8.077-7.405-13.146-5.214-5.07 2.19-7.404 8.076-5.214 13.146 5.902 13.663 8.895 28.205 8.895 43.224 0 26.485-9.49 50.793-25.244 69.711l-6.297-6.297c-3.905-3.903-10.237-3.904-14.142 0-3.905 3.905-3.906 10.237-.001 14.142l6.297 6.297c-18.918 15.754-43.226 25.244-69.711 25.244s-50.794-9.49-69.711-25.244l.978-.978c3.905-3.905 3.905-10.237 0-14.143-3.905-3.904-10.237-3.904-14.143 0l-.978.978c-15.754-18.918-25.244-43.226-25.244-69.711s9.49-50.793 25.244-69.711l8.226 8.226c1.953 1.953 4.512 2.929 7.071 2.929s5.119-.976 7.071-2.929c3.905-3.905 3.905-10.237 0-14.143l-8.226-8.226c18.918-15.754 43.226-25.244 69.711-25.244 14.865 0 29.27 2.934 42.814 8.719 5.081 2.17 10.955-.19 13.124-5.268 2.17-5.079-.189-10.955-5.268-13.124-12.982-5.545-26.623-8.876-40.671-9.946v-12.228c13.087-4.231 22.58-16.527 22.58-31.005 0-17.965-14.616-32.581-32.58-32.581-17.965 0-32.581 14.616-32.581 32.581 0 14.477 9.494 26.773 22.581 31.005v12.232c-28.091 2.162-53.689 13.358-73.895 30.675l-7.959-7.959c2.056-4.152 3.218-8.823 3.218-13.762 0-17.161-13.961-31.123-31.123-31.123-17.161 0-31.123 13.962-31.123 31.123s13.962 31.123 31.123 31.123c4.939 0 9.61-1.162 13.762-3.218l7.959 7.959c-17.317 20.206-28.513 45.804-30.675 73.895h-12.501c-4.04-10.573-14.284-18.105-26.26-18.105-15.498 0-28.105 12.608-28.105 28.105s12.608 28.105 28.105 28.105c11.976 0 22.22-7.532 26.26-18.105h12.5c2.162 28.091 13.359 53.689 30.676 73.895l-15.207 15.207c-4.152-2.056-8.823-3.218-13.762-3.218-17.161 0-31.123 13.961-31.123 31.122s13.962 31.123 31.123 31.123 31.123-13.962 31.123-31.123c0-4.939-1.162-9.61-3.218-13.762l15.207-15.207c20.207 17.317 45.804 28.513 73.895 30.675v12.501c-10.574 4.04-18.105 14.285-18.105 26.26 0 15.497 12.608 28.105 28.105 28.105s28.105-12.608 28.105-28.105c0-11.976-7.532-22.22-18.105-26.26v-12.501c28.091-2.162 53.688-13.359 73.895-30.675l7.297 7.298c-2.056 4.152-3.218 8.823-3.218 13.762 0 17.161 13.962 31.123 31.123 31.123s31.123-13.962 31.123-31.123-13.961-31.122-31.123-31.122c-4.939 0-9.61 1.162-13.762 3.218l-7.298-7.298c17.317-20.206 28.513-45.804 30.675-73.895h12.5c4.04 10.574 14.284 18.105 26.261 18.105 15.497 0 28.105-12.608 28.105-28.105.002-15.498-12.605-28.105-28.102-28.105zm-167.474-156.425c6.937 0 12.58 5.644 12.58 12.581s-5.643 12.581-12.58 12.581-12.581-5.644-12.581-12.581 5.644-12.581 12.581-12.581zm-119.759 75.894c-6.133 0-11.123-4.99-11.123-11.123s4.99-11.123 11.123-11.123 11.123 4.99 11.123 11.123-4.99 11.123-11.123 11.123zm-47.715 116.741c-4.469 0-8.105-3.636-8.105-8.105s3.636-8.105 8.105-8.105 8.105 3.636 8.105 8.105-3.635 8.105-8.105 8.105zm40.468 130.024c-6.133 0-11.123-4.99-11.123-11.123s4.99-11.122 11.123-11.122 11.123 4.989 11.123 11.122c-.001 6.133-4.991 11.123-11.123 11.123zm127.006 37.45c-4.469 0-8.105-3.636-8.105-8.105s3.636-8.105 8.105-8.105 8.105 3.636 8.105 8.105-3.636 8.105-8.105 8.105zm119.097-67.604c6.133 0 11.123 4.989 11.123 11.122s-4.99 11.123-11.123 11.123-11.123-4.99-11.123-11.123 4.99-11.122 11.123-11.122zm48.377-99.87c-4.469 0-8.106-3.636-8.106-8.105s3.636-8.105 8.106-8.105c4.469 0 8.105 3.636 8.105 8.105-.001 4.469-3.636 8.105-8.105 8.105z"></path><path id="XMLID_1052_" d="m169.994 204.54c0 17.161 13.962 31.123 31.123 31.123s31.123-13.962 31.123-31.123-13.962-31.123-31.123-31.123-31.123 13.961-31.123 31.123zm42.245 0c0 6.133-4.99 11.123-11.123 11.123s-11.123-4.99-11.123-11.123 4.99-11.123 11.123-11.123 11.123 4.99 11.123 11.123z"></path><path id="XMLID_1055_" d="m277.047 131.171c-17.161 0-31.123 13.961-31.123 31.123 0 17.161 13.961 31.123 31.123 31.123 17.161 0 31.123-13.962 31.123-31.123s-13.962-31.123-31.123-31.123zm0 42.246c-6.133 0-11.123-4.99-11.123-11.123s4.99-11.123 11.123-11.123 11.123 4.99 11.123 11.123-4.989 11.123-11.123 11.123z"></path><path id="XMLID_1058_" d="m268.406 228.098c-17.161 0-31.123 13.961-31.123 31.122s13.962 31.123 31.123 31.123 31.122-13.962 31.122-31.123c0-17.16-13.961-31.122-31.122-31.122zm0 42.246c-6.133 0-11.123-4.99-11.123-11.123s4.99-11.122 11.123-11.122 11.122 4.99 11.122 11.122c0 6.133-4.989 11.123-11.122 11.123z"></path><path id="XMLID_1061_" d="m386.757 104.703c17.161 0 31.123-13.961 31.123-31.123s-13.962-31.123-31.123-31.123-31.122 13.962-31.122 31.123 13.961 31.123 31.122 31.123zm0-42.245c6.133 0 11.123 4.99 11.123 11.123s-4.99 11.123-11.123 11.123-11.122-4.99-11.122-11.123c-.001-6.134 4.989-11.123 11.122-11.123z"></path><path id="XMLID_1062_" d="m339.84 130.16c2.63 0 5.21-1.07 7.07-2.93s2.93-4.44 2.93-7.08c0-2.63-1.07-5.21-2.93-7.07s-4.44-2.93-7.07-2.93-5.21 1.07-7.07 2.93-2.93 4.44-2.93 7.07c0 2.64 1.07 5.22 2.93 7.08 1.86 1.859 4.44 2.93 7.07 2.93z"></path><path id="XMLID_1065_" d="m335.332 420.01h-16.2c-2.655 0-5.202 1.057-7.078 2.936-1.876 1.88-2.927 4.428-2.922 7.083v72.017c.01 2.655 1.221 5.197 3.106 7.066 1.873 1.857 4.404 2.898 7.04 2.898h.052c.445-.003 10.964-.059 16.773-.16 22.195-.388 38.304-19.667 38.304-45.84.001-27.514-15.702-46-39.075-46zm.422 71.844c-1.823.031-4.165.059-6.51.082-.027-8.445-.079-43.13-.094-51.926h6.182c17.7 0 19.076 19.9 19.076 26 0 12.701-5.768 25.618-18.654 25.844z"></path>
                                    </g>
                                </g></svg></span>
                                    <h4 className="u-align-center u-text u-text-default u-text-grey-60 u-text-5"> COVID-19</h4>

                                </div>
                            </div></Link>
                            <Link to="/spacex"><div className="u-align-center u-container-style u-list-item u-repeater-item u-video-cover u-white u-list-item-3">
                                <div className="u-container-layout u-similar-container u-valign-top u-container-layout-4"><span className="u-grey-10 u-icon u-icon-circle u-spacing-25 u-icon-3"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 480 480" style={{}}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-e4ba"></use></svg><svg className="u-svg-content" viewBox="0 0 480 480" x="0px" y="0px" id="svg-e4ba" style={{ enableBackground: "0 0 480 480" }}  ><polygon style={{ fill: "#CCCCCC" }} points="168,280 200,248 200,120 280,120 280,248 312,280 312,424 168,424 "></polygon><polygon style={{ fill: "#999999" }} points="312,280 280,248 280,120 240,120 240,424 312,424 "></polygon><polygon style={{ fill: "#E7B900" }} points="184,424 152,424 136,448 200,448 "></polygon><rect x="136" y="448" style={{ fill: "#FFD422" }} width="64" height="24"></rect><polygon style={{ fill: "#E7B900" }} points="328,424 296,424 280,448 344,448 "></polygon><rect x="280" y="448" style={{ fill: "#FFD422" }} width="64" height="24"></rect><path style={{ fill: "#5AAAE7" }} d="M240,96c-32,0-40,24-40,24v32c0,0,8-24,40-24s40,24,40,24v-32C280,120,272,96,240,96z"></path><path style={{ fill: "#EBE5DD" }} d="M11.926,355.485C9.395,358.396,8,362.125,8,365.983V376h117.138l13.042-40.717  C141.6,321.6,153.895,312,168,312v-32V176L11.926,355.485z"></path><path style={{ fill: "#F40E34" }} d="M274.733,29.466C268.155,16.31,254.709,8,240,8s-28.155,8.31-34.733,21.466L192,56h96L274.733,29.466  z"></path><path style={{ fill: "#A6001E" }} d="M288,56h-24l-13.28-26.56C246,20,237.76,13.04,228,9.92C231.84,8.64,235.84,8,240,8  c14.72,0,28.16,8.32,34.72,21.44L288,56z"></path><path style={{ fill: "#5AAAE7" }} d="M125.138,376H8v32c0,8.836,7.164,16,16,16h96v-31.96L125.138,376z"></path><g><path style={{ fill: "#EBE5DD" }} d="M138.179,335.283L125.138,376H128h-2.862L120,392.04V424h96v-31.96l-18.179-56.756   C194.4,321.6,182.105,312,168,312S141.6,321.6,138.179,335.283z"></path><path style={{ fill: "#EBE5DD" }} d="M312,141.771c0-24.839-5.783-49.337-16.892-71.554L288,56h-96l-7.108,14.217   C173.783,92.434,168,116.932,168,141.771V176v104l32-32v-96v-32c0,0,8-24,40-24s40,24,40,24v32v96l32,32V176V141.771z"></path><path style={{ fill: "#EBE5DD" }} d="M468.074,355.485L312,176v104v32c14.105,0,26.4,9.6,29.821,23.283L354.862,376H472v-10.017   C472,362.125,470.605,358.396,468.074,355.485z"></path><path style={{ fill: "#EBE5DD" }} d="M354.862,376h-2.863H354.862l-13.042-40.717C338.4,321.6,326.105,312,312,312   s-26.4,9.6-29.821,23.283L264,392.04V424h96v-31.96L354.862,376z"></path>
                                </g><g><path style={{ fill: "#D4C8B8" }} d="M360,392v32h-96v-24h72v-32l-5.12-16l-12.64-39.36c11.36,2.32,20.72,11.04,23.6,22.64L354.88,376   L360,392z"></path><path style={{ fill: "#D4C8B8" }} d="M216,392v32h-96v-24h72v-32l-5.12-16l-12.64-39.36c11.36,2.32,20.72,11.04,23.6,22.64L210.88,376   L216,392z"></path>
                                    </g><path style={{ fill: "#5AAAE7" }} d="M360,392.04V424h96c8.836,0,16-7.164,16-16v-32H354.862L360,392.04z"></path><path style={{ fill: "#F40E34" }} d="M216,424v-31.96l14.784-96.133c0.7-4.549,4.614-7.907,9.216-7.907h0c4.602,0,8.516,3.358,9.216,7.907  L264,392.04V424H216z"></path><path style={{ fill: "#A6001E" }} d="M264,392.04l-14.784-96.133C248.517,291.358,244.603,288,240,288v136h24V392.04z"></path><g><rect x="64" y="328" style={{ fill: "#F40E34" }} width="16" height="24"></rect><rect x="96" y="328" style={{ fill: "#F40E34" }} width="16" height="24"></rect><rect x="368" y="328" style={{ fill: "#F40E34" }} width="16" height="24"></rect><rect x="400" y="328" style={{ fill: "#F40E34" }} width="16" height="24"></rect>
                                    </g><g><rect x="368" y="96" style={{ fill: "#5AAAE7" }} width="16" height="16"></rect><rect x="368" y="128" style={{ fill: "#5AAAE7" }} width="16" height="16"></rect><rect x="384" y="112" style={{ fill: "#5AAAE7" }} width="16" height="16"></rect><rect x="352" y="112" style={{ fill: "#5AAAE7" }} width="16" height="16"></rect><rect x="24" y="8" style={{ fill: "#5AAAE7" }} width="16" height="16"></rect><rect x="24" y="40" style={{ fill: "#5AAAE7" }} width="16" height="16"></rect><rect x="40" y="24" style={{ fill: "#5AAAE7" }} width="16" height="16"></rect><rect x="8" y="24" style={{ fill: "#5AAAE7" }} width="16" height="16"></rect>
                                    </g><g><path style={{ fill: "#FFD422" }} d="M80.023,216c-3.375,0-6.664-0.516-9.813-1.523l4.906-15.234c3.125,1.008,6.695,1.008,9.883-0.039   l4.953,15.219C86.766,215.461,83.422,215.992,80.023,216z M54.211,202.945c-4.016-5.461-6.164-11.945-6.203-18.75l16-0.094   c0.023,3.406,1.086,6.641,3.094,9.359L54.211,202.945z M105.914,202.781l-12.953-9.391C94.953,190.648,96,187.398,96,184l16-0.281   V184C112,190.797,109.898,197.289,105.914,202.781z M66.992,174.688l-13.016-9.313c3.906-5.453,9.539-9.617,15.875-11.734   l5.078,15.172C71.766,169.875,68.945,171.961,66.992,174.688z M92.859,174.477c-2.047-2.742-4.828-4.727-8.055-5.742l4.797-15.266   c6.453,2.031,12.016,5.984,16.086,11.445L92.859,174.477z"></path><rect x="464" y="200" style={{ fill: "#FFD422" }} width="16" height="24"></rect><rect x="464" y="16" style={{ fill: "#FFD422" }} width="16" height="24"></rect>
                                    </g><g><path style={{ fill: "#1E81CE" }} d="M8,408c0,8.836,7.164,16,16,16h96v-24H8V408z"></path><path style={{ fill: "#1E81CE" }} d="M360,400v24h96c8.836,0,16-7.164,16-16v-8H360z"></path><path style={{ fill: "#1E81CE" }} d="M240,96v24v8c32,0,40,24,40,24v-32C280,120,272,96,240,96z"></path>
                                    </g><g><path style={{ fill: "#FFFFFF" }} d="M56,400H40v-40c0-1.977,0.734-3.883,2.055-5.352l72-80l11.891,10.703L56,363.07V400z"></path><rect x="132.719" y="247.996" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 426.8939 335.1674)" style={{ fill: "#FFFFFF" }} width="22.624" height="16"></rect><rect x="144" y="400" style={{ fill: "#FFFFFF" }} width="16" height="24"></rect><rect x="144" y="336" style={{ fill: "#FFFFFF" }} width="16" height="48"></rect><rect x="288" y="400" style={{ fill: "#FFFFFF" }} width="16" height="24"></rect><rect x="288" y="336" style={{ fill: "#FFFFFF" }} width="16" height="48"></rect><rect x="219.055" y="32.003" transform="matrix(-0.4472 0.8944 -0.8944 -0.4472 365.7425 -146.0367)" style={{ fill: "#FFFFFF" }} width="17.888" height="16"></rect><path style={{ fill: "#FFFFFF" }} d="M200,192h-16v-54.633c0-18.047,4.906-35.758,14.188-51.234l10.953-18.25l13.719,8.234l-10.953,18.25   c-7.789,12.984-11.906,27.852-11.906,43V192z"></path><rect x="256" y="160" style={{ fill: "#FFFFFF" }} width="16" height="16"></rect><rect x="256" y="192" style={{ fill: "#FFFFFF" }} width="16" height="56"></rect><rect x="384" y="392" style={{ fill: "#FFFFFF" }} width="16" height="16"></rect><rect x="416" y="392" style={{ fill: "#FFFFFF" }} width="56" height="16"></rect>
                                    </g><path d="M474.109,350.234L320,173.008v-31.234c0-25.953-6.133-51.938-17.734-75.133l-20.375-40.75C273.906,9.922,257.852,0,240,0  s-33.906,9.922-41.891,25.891l-20.375,40.75C166.133,89.836,160,115.82,160,141.773v31.234L5.898,350.227  C2.094,354.594,0,360.188,0,365.984V408c0,13.234,10.766,24,24,24h96h17.052l-7.708,11.563C128.469,444.875,128,446.422,128,448v24  c0,4.422,3.578,8,8,8h64c4.422,0,8-3.578,8-8v-24c0-1.578-0.469-3.125-1.344-4.438L198.948,432H216h48h17.052l-7.708,11.563  C272.469,444.875,272,446.422,272,448v24c0,4.422,3.578,8,8,8h64c4.422,0,8-3.578,8-8v-24c0-1.578-0.469-3.125-1.344-4.438  L342.948,432H360h96c13.234,0,24-10.766,24-24v-42.016C480,360.188,477.906,354.594,474.109,350.234z M462.039,360.742  c1.266,1.445,1.961,3.313,1.961,5.242V368H360.69l-11.112-34.656c-3.656-14.625-15.289-25.516-29.578-28.516V280v-82.605  L462.039,360.742z M266.745,357.251l-9.62-62.564C255.813,286.172,248.609,280,240,280s-15.813,6.172-17.125,14.688l-9.624,62.587  l-7.673-23.931c-3.656-14.625-15.289-25.516-29.578-28.516v-21.516l29.656-29.656c1.5-1.5,2.344-3.531,2.344-5.656v-94.459  c1.739-3.817,9.55-17.541,32-17.541c22.346,0,30.224,13.696,32,17.548V248c0,2.125,0.844,4.156,2.344,5.656L304,283.313v21.516  c-14.281,2.984-25.898,13.813-29.438,28.016L266.745,357.251z M240,120h8v-15.333c16.266,2.76,22.458,13.532,24,16.888v7.945  C264.739,124.242,254.444,120,240,120s-24.739,4.242-32,9.5v-7.96c1.529-3.344,7.682-14.124,24-16.877V120H240z M212.422,33.047  C217.68,22.531,228.242,16,240,16s22.32,6.531,27.578,17.047L275.055,48h-70.109L212.422,33.047z M176,141.773  c0-23.484,5.547-46.992,16.047-67.977L196.945,64h86.109l4.898,9.797C298.453,94.781,304,118.289,304,141.773V176v84.688l-16-16V120  c0-0.859-0.141-1.711-0.414-2.531c-0.368-1.112-8.857-25.278-39.586-28.956V88h-16v0.513c-30.729,3.678-39.218,27.844-39.586,28.956  c-0.273,0.82-0.414,1.672-0.414,2.531v124.688l-16,16V176V141.773z M17.969,360.734L160,197.395V280v24.828  c-14.281,2.984-25.898,13.813-29.438,28.016L119.302,368H16v-2.016C16,364.055,16.695,362.188,17.969,360.734z M16,408v-24h98.177  l-1.794,5.602c-0.258,0.789-0.383,1.609-0.383,2.438V416H24C19.586,416,16,412.414,16,408z M128,393.289l17.938-56.07  C148.477,327.086,157.547,320,168,320s19.523,7.086,22.203,17.719L208,393.289V416h-24h-32h-24V393.289z M144,464v-8h48v8H144z   M185.052,440h-34.104l5.333-8h23.438L185.052,440z M224,392.648l14.688-95.523c0.203-1.281,2.422-1.281,2.625,0L256,392.648V416  h-32V392.648z M288,464v-8h48v8H288z M329.052,440h-34.104l5.333-8h23.438L329.052,440z M352,416h-24h-32h-24v-22.711l17.938-56.07  C292.477,327.086,301.547,320,312,320s19.523,7.086,22.203,17.719L352,393.289V416z M456,416h-88v-23.961  c0-0.828-0.125-1.648-0.383-2.438L365.821,384H464v24C464,412.414,460.414,416,456,416z"></path><rect x="64" y="328" width="16" height="24"></rect><rect x="96" y="328" width="16" height="24"></rect><rect x="368" y="328" width="16" height="24"></rect><rect x="400" y="328" width="16" height="24"></rect><rect x="360" y="88" width="16" height="16"></rect><rect x="360" y="120" width="16" height="16"></rect><rect x="376" y="104" width="16" height="16"></rect><rect x="344" y="104" width="16" height="16"></rect><rect x="16" width="16" height="16"></rect><rect x="16" y="32" width="16" height="16"></rect><rect x="32" y="16" width="16" height="16"></rect><rect y="16" width="16" height="16"></rect><path d="M58.992,166.688c1.953-2.727,4.773-4.813,7.938-5.875l-5.078-15.172c-6.336,2.117-11.969,6.281-15.875,11.734  L58.992,166.688z"></path><path d="M84.961,185.391l12.953,9.391C101.898,189.289,104,182.797,104,176v-0.281L88,176C88,179.398,86.953,182.648,84.961,185.391  z"></path><path d="M40.008,176.195c0.039,6.805,2.188,13.289,6.203,18.75l12.891-9.484c-2.008-2.719-3.07-5.953-3.094-9.359L40.008,176.195z"></path><path d="M72.023,208c3.398-0.008,6.742-0.539,9.93-1.578L77,191.203c-3.188,1.047-6.758,1.047-9.883,0.039l-4.906,15.234  C65.359,207.484,68.648,208,72.023,208z"></path><path d="M97.688,156.914c-4.07-5.461-9.633-9.414-16.086-11.445l-4.797,15.266c3.227,1.016,6.008,3,8.055,5.742L97.688,156.914z"></path><rect x="456" y="192" width="16" height="24"></rect><rect x="456" y="8" width="16" height="24"></rect></svg></span>
                                    <h4 className="u-align-center u-text u-text-default u-text-grey-60 u-text-7"> SPACEX</h4>

                                </div>
                            </div></Link>
                            <Link to="/weather"><div className="u-align-center u-container-style u-list-item u-repeater-item u-video-cover u-white u-list-item-4">
                                <div className="u-container-layout u-similar-container u-valign-top u-container-layout-5"><span className="u-grey-10 u-icon u-icon-circle u-spacing-25 u-icon-4"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512" style={{}}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-b23f"></use></svg><svg className="u-svg-content" viewBox="0 0 512 512" x="0px" y="0px" id="svg-b23f" style={{ enableBackground: "new 0 0 512 512" }}><path style={{ fill: "#CCCCCC" }} d="M253.992,503.969V253.992h249.976V463.31c0,22.42-18.239,40.659-40.659,40.659H253.992z   M378.98,324.272c-7.034,13.361-32.637,63.091-32.637,79.054c0,17.996,14.641,32.638,32.637,32.638  c17.996,0,32.638-14.641,32.638-32.638C411.618,387.363,386.015,337.632,378.98,324.272z"></path><path style={{ fill: "#FBC640" }} d="M253.992,258.008V8.031H463.31c22.42,0,40.659,18.239,40.659,40.659v209.318H253.992z   M349.581,163.488c7.928,7.659,18.339,11.867,29.4,11.867c11.308,0,21.942-4.401,29.944-12.393c7.99-8,12.391-18.635,12.391-29.942  c0-11.152-4.278-21.643-12.057-29.594l-0.344-0.339c-8.008-7.997-18.64-12.402-29.934-12.402c-11.304,0-21.935,4.405-29.933,12.402  c-7.997,7.999-12.402,18.63-12.402,29.933c0,11.294,4.405,21.926,12.402,29.934L349.581,163.488z"></path><path style={{ fill: "#FF4F4F" }} d="M378.98,179.371c-12.384,0-24.023-4.819-32.773-13.569l-0.588-0.588v-0.021  c-8.384-8.695-12.99-20.087-12.99-32.174c0-12.376,4.823-24.016,13.578-32.773c8.757-8.756,20.396-13.578,32.773-13.578  c12.086,0,23.479,4.607,32.174,12.99h0.011l0.598,0.588c8.75,8.75,13.569,20.389,13.569,32.773c0,12.379-4.819,24.022-13.568,32.781  C403.002,174.552,391.36,179.371,378.98,179.371z"></path><path style={{ fill: "#8CE0FF" }} d="M378.98,439.979c-20.211,0-36.653-16.442-36.653-36.653c0-19.419,33.462-81.649,34.886-84.289  l1.767-3.274l1.767,3.274c1.425,2.64,34.886,64.87,34.886,84.289C415.634,423.536,399.191,439.979,378.98,439.979z"></path><path style={{ fill: "#EFEFEF" }} d="M48.69,503.969c-22.42,0-40.659-18.239-40.659-40.659V253.992h249.977v249.976H48.69z"></path><path style={{ fill: "#8CE0FF" }} d="M8.031,258.008V48.69c0-22.42,18.239-40.659,40.659-40.659h209.318v249.977H8.031z M140.027,74.993  c-24.626,0-45.151,19.229-46.727,43.778l-0.117,1.823l-1.826,0.056c-19.14,0.576-34.133,16.034-34.133,35.189  c0,19.413,15.794,35.207,35.208,35.207h81.177c19.413,0,35.208-15.794,35.208-35.207c0-13.832-8.157-26.441-20.782-32.121  l-1.184-0.533v-1.298C186.85,95.998,165.845,74.993,140.027,74.993z"></path><path style={{ fill: "#EFEFEF" }} d="M92.431,195.062c-21.627,0-39.223-17.596-39.223-39.223c0-20.738,15.773-37.585,36.231-39.109  c2.567-25.799,24.45-45.753,50.589-45.753c27.627,0,50.178,22.153,50.825,49.628c13.394,6.566,21.98,20.256,21.98,35.234  c0,21.627-17.596,39.222-39.223,39.222H92.431V195.062z"></path><path d="M198.585,115.723c-3.058-29.61-28.153-52.777-58.558-52.777c-28.103,0-51.958,19.925-57.606,46.688  c-21.459,4.556-37.244,23.434-37.244,46.204c0,26.056,21.198,47.254,47.255,47.254h81.177c26.057,0,47.255-21.198,47.255-47.254  C220.863,139.413,212.293,124.272,198.585,115.723z M173.608,183.015H92.431c-14.985,0-27.176-12.192-27.176-27.176  c0-14.787,11.571-26.716,26.344-27.162c5.176-0.156,9.385-4.224,9.717-9.391c1.305-20.333,18.31-36.262,38.712-36.262  c21.39,0,38.792,17.402,38.792,38.862c0,3.951,2.317,7.534,5.919,9.155c9.747,4.386,16.046,14.12,16.046,24.798  C200.784,170.823,188.593,183.015,173.608,183.015z"></path><path d="M307.792,143.059h17.739c1.38,7.421,4.286,14.43,8.564,20.659l-12.55,12.55c-3.92,3.92-3.92,10.277,0,14.198  c1.961,1.96,4.53,2.94,7.099,2.94s5.139-0.981,7.099-2.94l12.544-12.545c6.222,4.272,13.231,7.173,20.654,8.55v17.746  c0,5.544,4.496,10.039,10.039,10.039c5.544,0,10.039-4.496,10.039-10.039V186.47c7.423-1.377,14.432-4.28,20.661-8.553  l12.548,12.548c1.961,1.96,4.53,2.94,7.099,2.94s5.138-0.981,7.099-2.94c3.92-3.92,3.92-10.277,0-14.198l-12.548-12.548  c4.273-6.226,7.175-13.237,8.552-20.661h17.746c5.544,0,10.039-4.496,10.039-10.039s-4.496-10.039-10.039-10.039H432.43  c-1.377-7.424-4.279-14.432-8.55-20.655l12.544-12.544c3.92-3.92,3.92-10.277,0-14.198c-3.92-3.918-10.275-3.92-14.198,0  l-12.547,12.552c-6.228-4.278-13.238-7.184-20.659-8.564V61.832c0-5.544-4.496-10.039-10.039-10.039  c-5.544,0-10.039,4.496-10.039,10.039V79.57c-7.422,1.378-14.43,4.283-20.655,8.558l-12.543-12.543  c-3.921-3.919-10.276-3.919-14.198,0c-3.92,3.92-3.92,10.277,0,14.198l12.543,12.543c-4.276,6.224-7.179,13.233-8.558,20.655  h-17.737c-5.544,0-10.039,4.496-10.039,10.039C297.753,138.564,302.248,143.059,307.792,143.059z M354.727,108.766  c0.002-0.002,0.004-0.005,0.006-0.007c6.481-6.476,15.092-10.043,24.248-10.043c9.151,0,17.766,3.571,24.259,10.055  c0.022,0.022,0.046,0.04,0.068,0.061c6.433,6.467,9.977,15.053,9.977,24.187c0,9.133-3.543,17.721-9.969,24.189  c-0.025,0.024-0.052,0.044-0.076,0.069c-0.023,0.023-0.043,0.05-0.066,0.073c-6.476,6.43-15.063,9.972-24.193,9.972  c-9.135,0-17.72-3.544-24.187-9.977c-0.021-0.022-0.04-0.046-0.061-0.068c-6.484-6.492-10.055-15.108-10.055-24.259  c0-9.156,3.567-17.767,10.043-24.248C354.722,108.77,354.725,108.768,354.727,108.766z"></path><path d="M378.98,309.951c-3.69,0-7.083,2.025-8.836,5.272c-5.986,11.093-35.849,67.478-35.849,88.103  c0,24.639,20.045,44.685,44.685,44.685s44.685-20.045,44.685-44.685c0-20.626-29.863-77.01-35.849-88.103  C386.063,311.976,382.671,309.951,378.98,309.951z M378.98,427.932c-13.568,0-24.606-11.038-24.606-24.606  c0-9.145,12.498-37.433,24.606-61.561c12.108,24.128,24.606,52.417,24.606,61.561C403.587,416.894,392.548,427.932,378.98,427.932z"></path><path d="M463.31,0H256H48.69C21.842,0,0,21.842,0,48.69V256v207.31C0,490.158,21.842,512,48.69,512H256h207.31  c26.848,0,48.69-21.842,48.69-48.69V256V48.69C512,21.842,490.158,0,463.31,0z M491.922,48.69v197.271H266.039V20.078H463.31  C479.086,20.078,491.922,32.914,491.922,48.69z M20.078,48.69c0-15.777,12.835-28.612,28.612-28.612h197.271v225.882H20.078V48.69z   M20.078,463.31V266.039h225.882v225.882H48.69C32.914,491.922,20.078,479.086,20.078,463.31z M463.31,491.922H266.039V266.039  h225.882V463.31C491.922,479.086,479.086,491.922,463.31,491.922z"></path><path d="M191.42,378.978l15.607-14.16c4.106-3.727,4.414-10.075,0.689-14.181c-3.726-4.106-10.074-4.413-14.18-0.69l-20.933,18.993  h-29.545v-29.547l18.992-20.931c3.726-4.106,3.417-10.455-0.689-14.181c-4.106-3.725-10.456-3.417-14.18,0.69l-14.161,15.607  l-14.161-15.607c-3.726-4.106-10.074-4.415-14.18-0.689c-4.106,3.726-4.414,10.074-0.689,14.18l18.991,20.93v29.548H93.434  l-20.933-18.993c-4.106-3.725-10.456-3.417-14.18,0.69c-3.726,4.106-3.417,10.455,0.689,14.181l15.607,14.16L59.01,393.141  c-4.106,3.726-4.414,10.074-0.689,14.18c1.982,2.184,4.704,3.293,7.438,3.293c2.406,0,4.821-0.859,6.743-2.605l20.929-18.991h29.547  v29.546l-18.991,20.93c-3.726,4.106-3.417,10.455,0.689,14.18c4.105,3.726,10.454,3.417,14.18-0.689l14.161-15.607l14.161,15.607  c1.982,2.184,4.704,3.293,7.438,3.293c2.406,0,4.821-0.859,6.743-2.604c4.106-3.727,4.414-10.075,0.689-14.181l-18.992-20.931  v-29.545h29.548l20.929,18.991c1.923,1.745,4.336,2.605,6.743,2.605c2.733,0,5.456-1.109,7.438-3.293  c3.726-4.106,3.417-10.455-0.689-14.18L191.42,378.978z"></path><path d="M106.082,361.969c12.919,0,12.941-20.078,0-20.078C93.163,341.891,93.141,361.969,106.082,361.969z"></path><path d="M157.92,341.891c-12.919,0-12.941,20.078,0,20.078C170.839,361.969,170.86,341.891,157.92,341.891z"></path><path d="M106.082,396.907c-12.919,0-12.941,20.078,0,20.078C119.002,416.986,119.023,396.907,106.082,396.907z"></path><path d="M157.92,416.986c12.919,0,12.941-20.078,0-20.078C145,396.907,144.978,416.986,157.92,416.986z"></path><path d="M467.158,351.518c-5.544,0-10.039,4.496-10.039,10.039v61.57c0,5.544,4.496,10.039,10.039,10.039  c5.544,0,10.039-4.496,10.039-10.039v-61.571C477.197,356.013,472.702,351.518,467.158,351.518z"></path><path d="M467.158,342.654c12.919,0,12.941-20.078,0-20.078C454.238,322.575,454.217,342.654,467.158,342.654z"></path></svg></span>
                                    <h4 className="u-align-center u-text u-text-default u-text-grey-60 u-text-9"> WEATHER</h4>

                                </div>
                            </div></Link>
                        </div>
                    </div>
                </div>
            </section>
        </body>
    )
}



