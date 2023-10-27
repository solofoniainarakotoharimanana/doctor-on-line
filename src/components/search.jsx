import React from "react";
import { Search as SearchIcon } from "react-bootstrap-icons";

const Search = () => {
  const options = [
    { value: "test", label: "Test" },
    { value: "test", label: "Test" },
    { value: "test", label: "Test" },
  ];

  return (
    <div>
      <form>
        <div>
          <div className="row"></div>
          <div className="row div-search">
            <div className="col-md-3 form-group">
              <input
                type="text"
                className="form-control input-search"
                name="name"
                value=""
                onChange={() => {}}
                placeholder="Spécialité"
              />
            </div>
            <div className="col-md-3 form-group ">
              <select
                className="form-control input-search"
                value=""
                onChange={() => {}}
                name="speciality"
              >
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="orange">Orange</option>
              </select>
            </div>
            <div className="col-md-3 form-group">
              <input
                type="text"
                className="form-control input-search"
                name="address"
                value=""
                onChange={() => {}}
                placeholder="Adresse"
              />
            </div>
            <div className="form-group col-md-3">
              <button type="button" className="btn btn-success">
                <SearchIcon />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
