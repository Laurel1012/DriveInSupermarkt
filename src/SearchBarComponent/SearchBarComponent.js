import React from "react";
//import SortableTbl from "react-sort-search-table/src/SortableTbl";

class SearchBarComponent extends React.Component {
    /*render(){
        const tblData=
            [
                {
                    "name" : "Lisa",
                    "age" : 22,
                },
                {
                    "name" : "Frieda",
                    "age" : 45,
                }
            ];
        const header = ["name", "age"];
        const col = ["name", "age"];
        return (
            <div>
                <p>This is the Search bar</p>
                <SortableTbl tblData={tblData}

                />
            </div>*/
    render(){
        return(
            <div>
                <p>SearchBar</p>
                <input type="text" value="Enter your PLZ"></input>
            </div>

        )
    }
}
export default SearchBarComponent;