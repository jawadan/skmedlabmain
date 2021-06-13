import React from 'react';

function TopHeader() {


    return (
        <div class="top-header">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-7">
                        <ul class="top-header-contact-info">
                            <li><i class="bx bx-phone-call"></i> <a href="tel:+1234567898">(+123) 456-7898</a></li>
                            <li><i class="bx bx-map"></i> <a href="#" target="_blank">6890 Blvd, The Bronx, NY 1058,
                                    USA</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-6 col-md-5">
                        <ul class="top-header-menu">
                            <li>
                                <div class="dropdown language-switcher d-inline-block"><button class="dropdown-toggle"
                                    type="button" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false"><img src="img/flag/us-flag.jpg" class="shadow-sm"
                                        alt="image" /><span>Eng <i class="bx bx-chevron-down"></i></span></button>
                                    <div class="dropdown-menu"><a class="dropdown-item d-flex align-items-center"
                                        href="#"><img src="img/flag/germany-flag.jpg" class="shadow-sm"
                                            alt="flag" /><span>Ger</span></a><a
                                                class="dropdown-item d-flex align-items-center" href="#"><img
                                                src="img/flag/france-flag.jpg" class="shadow-sm"
                                                alt="flag" /><span>Fre</span></a><a
                                                    class="dropdown-item d-flex align-items-center" href="#"><img
                                                src="img/flag/spain-flag.jpg" class="shadow-sm"
                                                alt="flag" /><span>Spa</span></a><a
                                                    class="dropdown-item d-flex align-items-center" href="#"><img
                                                src="img/flag/russia-flag.jpg" class="shadow-sm"
                                                alt="flag" /><span>Rus</span></a><a
                                                    class="dropdown-item d-flex align-items-center" href="#"><img
                                                src="img/flag/italy-flag.jpg" class="shadow-sm"
                                                alt="flag" /><span>Ita</span></a></div>
                                </div>
                            </li>
                            <li>
                                <div class="dropdown currency-switcher d-inline-block"><button class="dropdown-toggle"
                                    type="button" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false"><span>USD <i
                                        class="bx bx-chevron-down"></i></span></button>
                                    <div class="dropdown-menu"><a class="dropdown-item" href="#">USD</a><a
                                        class="dropdown-item" href="#">INR</a><a class="dropdown-item"
                                            href="#">GBP</a></div>
                                </div>
                            </li>
                            <li><a href="auth.html">My Account</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default TopHeader;
