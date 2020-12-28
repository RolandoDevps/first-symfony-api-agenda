import React from 'react';
import close from "../../../images/close-button.svg";
import search from "../../../images/search.svg";

// Composant formulaire de recherche du bloc header
const HeaderSearchForm = (props) => {
    return ( 
        <div className="col-10 header-search toggle-display-flex">
            <div className="search-form">
                <form action>
                    <button type="submit"> 
                        <span>
                            <img src={search} alt="Search" />
                        </span>
                    </button>
                    <input type="text" name id placeholder="Search" />
                </form>
            </div>
            <div className="close-search-form" onClick={props.handleClickHide}>
                <span>
                    <img src={close} alt="Close"/>
                </span>
            </div>
        </div>
    );
}
 
export default HeaderSearchForm;