import React from 'react';

const HeaderCenter = (props) => {
    return ( 
        <div className="col-6 header-center toggle-display-none menu-mobile-display-none">
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                    <a className="nav-link" href>
                        <span className="menu-title">Accueil</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href>
                        <span className="menu-title">Services</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href>
                        <span className="menu-title">Pricing</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href>
                        <span className="menu-title">Training</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href>
                        <span className="menu-title">About</span>
                    </a>
                </li>
            </ul>
        </div>
     );
}
 
export default HeaderCenter;