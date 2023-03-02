import { api, SECURITY_KEY } from "../utils/api-utils";

export async function GetAllLoanCategories() {
  var result = null;
  try {
    const response = await api.get(
      `FormmData/Get_Loan_Category?SecurityKey=${SECURITY_KEY}`
    );
    if (response?.status === 200) {
    }
    result = response.data;
  } catch (error) {
    console.log(error);
  }
  console.log("loan category", result);
}
export async function GetAllBenifitCategories() {
  var result = null;
  try {
    const response = await api.get(
      `FormmData/Get_Benifit_Category?SecurityKey=${SECURITY_KEY}`
    );
    if (response?.status === 200) {
    }
    result = response.data;
  } catch (error) {
    console.log(error);
  }
  console.log("benefit category", result);
}
