const axios = require("axios")

const CustomAxios = (urlLocation, formData, successMessage) => {
  
  
  return new Promise((resolve, reject) => {
    axios
      .post(
        urlLocation,
        formData,
        {
          headers: {
            Accept: "application/json, text/plain, /",
            "Content-Type": "multipart/form-data; charset=UTF-8",
          },
        }
      )
      .then((res) => {
        if(res.data === "success"){
          resolve(successMessage)
        }
        else{
          resolve(res.data)
        }
      })
  })
}

export default CustomAxios