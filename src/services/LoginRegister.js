import { api, SECURITY_KEY } from "../utils/api-utils";

export async function GenerateOTPFunction(
  payload,
  setResponseMessage,
  setShowModal
) {

  
  try {
    const response = await api.get(
      `FormmData/Generate_Otp_Process?SecurityKey=${SECURITY_KEY}&mobile=${payload?.mobile}&PANNO=${payload?.PANNO}&Success=1`,{mode:'cors'}
    
    
    );
    const Status = JSON.parse(response?.data?.Status);
    if (Status == "0") {
      setResponseMessage("Mobile, Name, Email, PAN No. Required");
    } else if (Status == "1") {
      setResponseMessage("Security Key Required");
    } else if (Status == "2") {
      setResponseMessage("Invalid Security Key");
    } else if (Status == "3") {
      setResponseMessage("Mobile Number Already Exist");
    } else if (Status == "4") {
      setResponseMessage("PAN No. Required");
    } else if (Status == "5") {
      setResponseMessage("PAN No. Already Exist");
    } else if (Status == "6") {
      setResponseMessage("PAN No. Not Verified");
    } else {
      setResponseMessage("OTP Sent Successfully");
      localStorage.setItem("otp", Status);
      localStorage.setItem("user", JSON.stringify(payload));
      setShowModal(true);
    }
    console.log("response", Status);
  } catch (error) {
    console.log(error);
  }
}
export async function VerifyOTPFunction(
  OTP,
  payload,
  setResponseMessage,
  setShowModal
) {
  try {
    const response = await api.get(
      `FormmData/Verify_Otp?SecurityKey=${SECURITY_KEY}&mobile=${payload?.mobile}&OTP=${OTP}&Name=${payload?.Name}&Email=${payload?.Email}&PANNO=${payload?.PANNO}`
      , { mode: 'cors' } );
    const Status = response?.data?.Status;
    if (Status == "0") {
      setResponseMessage("Mobile Name Required");
    } else if (Status == "1") {
      setResponseMessage("Security Key Required");
    } else if (Status == "2") {
      setResponseMessage("Invalid Security Key");
    } else if (Status == "3") {
      setResponseMessage("Mobile Number Already Exist");
    } else if (Status == "matched") {
      setResponseMessage("OTP matched");
      setShowModal(false);
    }
    //  else if (Status == "5") {
    //   setResponseMessage("PAN No. Already Exist");
    // } else if (Status == "6") {
    //   setResponseMessage("PAN No. Not Verified");
    // } else {
    //   setResponseMessage("otp generated");
    //   localStorage.setItem("otp", Status);
    //   // localStorage.setItem("user", JSON.stringify(payload));
    // }
    console.log("response", Status);
  } catch (error) {
    console.log(error);
  }
}
