import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID fbba4f03ab412d60973ff02b35b1ceda49fba9610989f54526468cd8b22eae9a"
  }
});
