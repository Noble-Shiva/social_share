import React, { useEffect } from "react";

const Otp = ({ otp }) => {
  const $otp_length = 6;

  useEffect(() => {
    const element = document.getElementById("OTPInput");
    for (let i = 0; i < $otp_length; i++) {
      let inputField = document.createElement("input"); // Creates a new input element
      if (i === 0) {
        inputField.className =
          "w-full h-10 md:h-12 bg-gray-200 border-gray-2 outline-none focus:bg-gray-200 ml-0 m-2 text-center rounded focus:border-blue-400 focus:shadow-outline";
      } else {
        inputField.className =
          "w-full h-10 md:h-12 bg-gray-200 border-gray-100 outline-none focus:bg-gray-200 m-2 text-center rounded focus:border-blue-400 focus:shadow-outline";
      }
      // Do individual OTP input styling here;
      inputField.style.cssText = "color: transparent; text-shadow: 0 0 0 gray;"; // Input field text styling. This css hides the text caret
      inputField.id = "otp-field" + i; // Don't remove
      inputField.maxLength = 1; // Sets individual field length to 1 char
      inputField.type = "tel";
      element.appendChild(inputField); // Adds the input field to the parent div (OTPInput)
    }

    /*  This is for switching back and forth the input box for user experience */
    const inputs = document.querySelectorAll("#OTPInput > *[id]");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("keydown", function (event) {
        if (event.key === "Backspace") {
          if (inputs[i].value == "") {
            if (i != 0) {
              inputs[i - 1].focus();
            }
          } else {
            inputs[i].value = "";
          }
        } else if (event.key === "Enter") {
          document.getElementById("otpSubmit").click();
          return false;
        } else if (event.key === "ArrowLeft" && i !== 0) {
          inputs[i - 1].focus();
        } else if (event.key === "ArrowRight" && i !== inputs.length - 1) {
          inputs[i + 1].focus();
        } else if (event.key != "ArrowLeft" && event.key != "ArrowRight") {
          inputs[i].setAttribute("type", "text");
          inputs[i].value = ""; // Bug Fix: allow user to change a random otp digit after pressing it
          setTimeout(function () {
            inputs[i].setAttribute("type", "password");
          }, 1000); // Hides the text after 1 sec
        }
      });
      inputs[i].addEventListener("input", function () {
        inputs[i].value = inputs[i].value.toUpperCase(); // Converts to Upper case. Remove .toUpperCase() if conversion isnt required.
        if (i === inputs.length - 1 && inputs[i].value !== "") {
          // Gether the OTP Values, once last input box is reached
          onSubmit();
          inputs[i].blur();
          return true;
        } else if (inputs[i].value !== "") {
          inputs[i + 1].focus();
        }
      });
    }
  }, []);

  const onChange = () => {
    // console.log(event.target.value);
    console.log("OnChange");
  };

  const onSubmit = () => {
    const inputs = document.querySelectorAll("#OTPInput > *[id]");
    let compiledOtp = "";
    for (let i = 0; i < inputs.length; i++) {
      compiledOtp += inputs[i].value;
    }
    otp(compiledOtp);
  };

  return (
    <div className="flex flex-col justify-start text-center">
      <div className="flex justify-start " id="OTPInput"></div>
      <input
        hidden
        id="otp"
        name="otp"
        value=""
        type="tel"
        onChangeCapture={onChange}
      />
    </div>
  );
};

export default Otp;
