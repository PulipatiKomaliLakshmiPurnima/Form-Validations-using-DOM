import { useState } from "react";

function Mainform() {
  const offShoreValues = [
    { name: "chennai" },
    { name: "Bangalore" },
    { name: "Hyderabad" },
    { name: "Pune" },
    { name: "Kochi" },
  ];
  const onShoreValues = [{ name: "US" }, { name: "Non US" }];
  let [bool, setBool] = useState(false);

  let [dropDownOptions, setDropDownOptions] = useState("");

  function forAssociateName() {
    document.getElementById("entername").className =
      "form-control border border-danger";

    let e = document.getElementById("entername").value;
    let matchString = "^[a-zA-Z ]*$";
    if (e.length !== 0) {
      if (e.match(matchString)) {
        document.getElementById("returnassociatename").innerHTML = "";
        document.getElementById("entername").className = "form-control";

        return true;
      } else {
        document.getElementById("returnassociatename").innerHTML =
          "Invalid Associate Name.";

        return false;
      }
    } else {
      document.getElementById("entername").className =
        "form-control border border-danger";
      document.getElementById("returnassociatename").innerHTML =
        "Please enter the Associate Name.";

      return false;
    }
  }

  //for associate id mainform
  function forAssociateId() {
    document.getElementById("enterid").className =
      "form-control border border-danger";

    let a = document.getElementById("enterid").value;
    if (a.length === 0) {
      document.getElementById("returnassociateid").innerHTML =
        "Please enter the Associate id.";
    } else {
      if (a.length === 6) {
        document.getElementById("returnassociateid").innerHTML = "";
        for (var i = 0; i < a.length; i++) {
          let x = a.charCodeAt(i);
          if (x >= 48 && x <= 57) {
            document.getElementById("returnassociateid").innerHTML = "";
            document.getElementById("enterid").className = "form-control";

            return true;
          } else {
            document.getElementById("returnassociateid").innerHTML =
              "Invalid Associate Id";
            return false;
          }
        }
      } else {
        document.getElementById("returnassociateid").innerHTML =
          "Invalid Associate Id";
        return false;
      }
    }
  }

  function forProjectId() {
    document.getElementById("enterprojectid").className =
      "form-control border border-danger";
    let b = document.getElementById("enterprojectid").value;
    let matchString = "^[a-zA-Z0-9]*$";
    if (b.length === 0) {
      document.getElementById("returnprojectid").innerHTML =
        "Please Enter Project Id";
    } else {
      if (b.length === 12) {
        if (b.match(matchString)) {
          document.getElementById("returnprojectid").innerHTML = "";
          document.getElementById("enterprojectid").className = "form-control";
          return true;
        } else {
          document.getElementById("returnprojectid").innerHTML =
            "Invalid Project Id";
          document.getElementById("enterprojectid").className =
            "form-control border border-danger";
          return false;
        }
      } else {
        document.getElementById("returnprojectid").innerHTML =
          "Invalid Project Id";
        document.getElementById("enterprojectid").className =
          "form-control border border-danger";
        return false;
      }
    }
  }

  function forRadio1() {
    let locationsArray = offShoreValues.map((i) => (
      <option key={i.name}>{i.name}</option>
    ));
    setDropDownOptions(locationsArray);
    document.getElementById("fordropdown").innerHTML = "";
    document.getElementById("fordropdown").value = "";
    setBool(true);
    return true;
  }

  function forRadio2() {
    let newArray = onShoreValues.map((i) => (
      <option key={i.name}>{i.name}</option>
    ));
    setDropDownOptions(newArray);
    document.getElementById("fordropdown").innerHTML = "";
    document.getElementById("fordropdown").value = "";
    setBool(true);
    return true;
  }

  function forCheckBox() {
    var count = 0;
    if (document.getElementById("checkbox1").checked === true) {
      count += 1;
    }
    if (document.getElementById("checkbox2").checked === true) {
      count += 1;
    }
    if (document.getElementById("checkbox3").checked === true) {
      count += 1;
    }
    if (document.getElementById("checkbox4").checked === true) {
      count += 1;
    }
    if (document.getElementById("checkbox5").checked === true) {
      count += 1;
    }
    if (document.getElementById("checkbox6").checked === true) {
      count += 1;
    }
    if (document.getElementById("checkbox7").checked === true) {
      count += 1;
    }
    if (document.getElementById("checkbox8").checked === true) {
      count += 1;
    }
    if (document.getElementById("checkbox9").checked === true) {
      count += 1;
    }
    if (document.getElementById("checkbox10").checked === true) {
      count += 1;
    }
    if (document.getElementById("checkbox11").checked === true) {
      count += 1;
    }

    if (count < 5) {
      document.getElementById("forcheckbox").innerHTML =
        "Please select Min 5 skills.";
    } else {
      document.getElementById("forcheckbox").innerHTML = "";
    }
    return count;
  }

  function forChooseFile() {
    if (document.getElementById("uploadfile").value !== "") {
      document.getElementById("returnchoosefile").innerHTML = "";
      // document.getElementById("uploadfile").value=""
      return true;
    } else {
      document.getElementById("returnchoosefile").innerHTML =
        "Please Upload a File.";
      return false;
    }
  }

  function forTextArea() {
    document.getElementById("fortextarea").className =
      "form-control border border-danger";
    let a = document.getElementById("fortextarea").value;
    if (a !== "") {
      document.getElementById("fortextarea").className = "form-control";
      // console.log("returning tru in text area")
      document.getElementById("returntextarea").innerHTML = "";
      return true;
    } else {
      document.getElementById("returntextarea").innerHTML =
        "Please enter Comments";
      return false;
    }
  }

  function forSubmit() {
    // if all the error values are null then submit is activated
    if (
      forAssociateName() &&
      forAssociateId() &&
      forProjectId() &&
      forChooseFile() &&
      bool &&
      forCheckBox() >= 5 &&
      forTextArea()
    ) {
      document.getElementById("submit").disabled = false;
      alert(
        document.getElementById("entername").value,
        document.getElementById("enterid").value
      );
    } else {
      document.getElementById("submit").disabled = true;
    }
    if (
      document.getElementById("Radios1").checked === false &&
      document.getElementById("Radios2").checked === false
    ) {
      document.getElementById("fordropdown").innerHTML =
        "Please Select a location";
    }
  }

  function forReset() {
    document.getElementById("enterid").value = "";
    document.getElementById("entername").value = "";
    document.getElementById("enterprojectid").value = "";
    // document.getElementById("forchoosefile").value=""
    setDropDownOptions("");
    document.getElementById("submit").disabled = true;
    document.getElementById("Radios1").checked = false;
    document.getElementById("Radios2").checked = false;
    document.getElementById("checkbox1").checked = false;
    document.getElementById("checkbox2").checked = false;
    document.getElementById("checkbox3").checked = false;
    document.getElementById("checkbox4").checked = false;
    document.getElementById("checkbox5").checked = false;
    document.getElementById("checkbox6").checked = false;
    document.getElementById("checkbox7").checked = false;
    document.getElementById("checkbox8").checked = false;
    document.getElementById("checkbox9").checked = false;
    document.getElementById("checkbox10").checked = false;
    document.getElementById("checkbox11").checked = false;
    document.getElementById("fortextarea").innerHTML = "";
  }

  return (
    <div>
      <form row g-3>
        <div className="maindiv col-md-10">
          <h1>Form Mainform *</h1>

          <input
            className="form-control"
            id="entername"
            type="text"
            onChange={() => {
              forAssociateName();
              forSubmit();
            }}
            onClick={forAssociateName}
            placeholder="Associate Name"
          />

          <p className="text-danger" id="returnassociatename"></p>

          <input
            className="form-control"
            id="enterid"
            onClick={() => {
              forAssociateId();
              forAssociateName();
            }}
            onChange={() => {
              forAssociateName();
              forAssociateId();
              forSubmit();
            }}
            placeholder="Associate Id"
          />

          <p className="text-danger" id="returnassociateid"></p>

          <input
            className="form-control"
            id="enterprojectid"
            placeholder="Project Id"
            onClick={() => {
              forAssociateName();
              forAssociateId();
              forProjectId();
            }}
            onChange={() => {
              forAssociateName();
              forAssociateId();
              forProjectId();
              forSubmit();
            }}
          />

          <p className="text-danger" id="returnprojectid"></p>

          {/* radio buttons */}

          {/* <div classNamee="form-check">

                    <input className="form-check-input" type="radio" name="exampleRadios" id="Radios1" onClick={() => {forRadio1();forSubmit()}} value="option1" unchecked /><label className="form-check-label">off shore</label>

                    <input className="form-check-input" type="radio" name="exampleRadios" id="Radios2" onClick={() => {forRadio2();forSubmit()}} value="option2" unchecked /><label className="form-check-label">on shore</label>

                </div> */}

          <div classNamee="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="Radios1"
              onClick={() => {
                forRadio1();
                forSubmit();
              }}
              value="option1"
              unchecked
            />
            <label className="form-check-label">off shore</label>

            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="Radios2"
              onClick={() => {
                forRadio2();
                forSubmit();
              }}
              value="option2"
              unchecked
            />
            <label className="form-check-label">on shore</label>
          </div>

          {/* drop down */}

          <select
            id="dropdown"
            className="form-select mt-2"
            aria-label="Floating label select example"
            onChange={() => {
              forAssociateName();
              forAssociateId();
              forProjectId();
              forSubmit();
            }}
            onClick={() => {
              forAssociateName();
              forAssociateId();
              forProjectId();
              forSubmit();
            }}
          >
            <option selected>choose location</option>
            {dropDownOptions}
          </select>

          <p className="text-danger" id="fordropdown"></p>

          {/* check boxes */}

          <div className="dropdowngroup">
            <div className="form-check-inline">
              <input
                className="form-check-input m-2"
                onClick={() => {
                  forAssociateId();
                  forProjectId();
                  forCheckBox();
                  forSubmit();
                }}
                type="checkbox"
                id="checkbox1"
                name="vehicle1"
                value=" HTML5,CSS3,js"
              />
              <label className="checksame"> HTML5,CSS3,js</label>

              <input
                className="form-check-input m-2"
                onClick={() => {
                  forAssociateId();
                  forProjectId();
                  forCheckBox();
                  forSubmit();
                }}
                type="checkbox"
                id="checkbox2"
                name="vehicle2"
                value="Angular 8"
              />
              <label className="checksame"> Angular 8</label>

              <input
                className="form-check-input m-2"
                onClick={() => {
                  forAssociateId();
                  forProjectId();
                  forCheckBox();
                  forSubmit();
                }}
                type="checkbox"
                id="checkbox3"
                name="vehicle3"
                value="Express js"
              />
              <label className="check3"> Express js</label>
              <br />
            </div>
            <br />
            <div className="form-check-inline">
              <input
                className="form-check-input m-2"
                onClick={() => {
                  forAssociateId();
                  forProjectId();
                  forCheckBox();
                  forSubmit();
                }}
                type="checkbox"
                id="checkbox4"
                name="vehicle1"
                value=" SAAS"
              />
              <label className="check4"> SAAS</label>

              <input
                className="form-check-input m-2"
                onClick={() => {
                  forAssociateId();
                  forProjectId();
                  forCheckBox();
                  forSubmit();
                }}
                type="checkbox"
                id="checkbox5"
                name="vehicle2"
                value=" React  JS"
              />
              <label className="check5"> React JS</label>

              <input
                className="form-check-input m-2"
                onClick={() => {
                  forAssociateId();
                  forProjectId();
                  forCheckBox();
                  forSubmit();
                }}
                type="checkbox"
                id="checkbox6"
                name="vehicle3"
                value="Node JS"
              />
              <label className="check6"> Node JS</label>
              <br />
            </div>
            <br />
            <div className="form-check-inline">
              <input
                className="form-check-input m-2"
                onClick={() => {
                  forAssociateId();
                  forProjectId();
                  forCheckBox();
                  forSubmit();
                }}
                type="checkbox"
                id="checkbox7"
                name="vehicle1"
                value="ES5,ES6,ES7..."
              />
              <label className="check7"> ES5,ES6,ES7...</label>

              <input
                className="form-check-input m-2"
                onClick={() => {
                  forAssociateId();
                  forProjectId();
                  forCheckBox();
                  forSubmit();
                }}
                type="checkbox"
                id="checkbox8"
                name="vehicle2"
                value="Veu JS"
              />
              <label className="check8"> Veu JS</label>

              <input
                className="form-check-input m-2"
                onClick={() => {
                  forAssociateId();
                  forProjectId();
                  forCheckBox();
                  forSubmit();
                }}
                type="checkbox"
                id="checkbox9"
                name="vehicle3"
                value="Mango DB"
              />
              <label className="check9"> Mango DB</label>
              <br />
            </div>
            <br />
            <input
              className="form-check-input m-2"
              onClick={() => {
                forAssociateId();
                forProjectId();
                forCheckBox();
                forSubmit();
              }}
              type="checkbox"
              id="checkbox10"
              name="vehicle1"
              value="Boot starp 4"
            />
            <label className="check10"> Boot starp 4</label>

            <input
              className="form-check-input m-2"
              onClick={() => {
                forAssociateId();
                forProjectId();
                forCheckBox();
                forSubmit();
              }}
              type="checkbox"
              id="checkbox11"
              name="vehicle2"
              value="Car"
            />
            <label className="check11"> Type Scripts</label>

            <p id="forcheckbox" className="text-danger"></p>
          </div>

          <div className="mb-3">
            <input
              type="file"
              id="uploadfile"
              onChange={() => {
                forAssociateName();
                forAssociateId();
                forProjectId();
                forChooseFile();
                forSubmit();
              }}
              onClick={() => {
                forAssociateName();
                forAssociateId();
                forProjectId();
                forChooseFile();
                forSubmit();
              }}
              className="form-control"
              aria-label="file example"
            />

            <p className="text-danger" id="returnchoosefile"></p>
          </div>

          {/* Text area */}

          <textarea
            className="form-control"
            id="fortextarea"
            placeholder="Comments"
            onClick={() => {
              forAssociateName();
              forAssociateId();
              forProjectId();
              forTextArea();
              forChooseFile();
              forSubmit();
            }}
            onChange={() => {
              forAssociateName();
              forAssociateId();
              forProjectId();
              forTextArea();
              forSubmit();
            }}
          ></textarea>
          <p id="returntextarea" className="text-danger"></p>

          <div className="mb-3">
            <button
              className="btn btn-primary m-2"
              type="submit"
              id="submit"
              disabled
            >
              Submit
            </button>

            <button
              className="btn btn-danger"
              type="Reset"
              onClick={() => {
                forReset();
                forChooseFile();
              }}
              disabled={false}
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Mainform;
