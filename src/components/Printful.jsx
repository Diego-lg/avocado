import React, { useState } from "react";
import axios from "axios";
import CustomButton from "./CustomButton";
const Printful = () => {
  const [accessToken, setAccessToken] = useState("");

  const handleAuthorize = async () => {
    try {
      // Step 1: Get the client ID and client secret from the Printful Developer Portal
      const clientId = "your_client_id";
      const clientSecret = "your_client_secret";

      // Step 2: Construct the authorization URL
      const authUrl = "https://api.printful.com/oauth/authorize";
      const params = new URLSearchParams({
        response_type: "code",
        client_id: clientId,
        redirect_uri: "https://your-app.com/callback",
        scope: "orders_read orders_write products_read products_write",
      });
      const authorizeUrl = `${authUrl}?${params.toString()}`;

      // Step 3: Redirect the user to the authorization URL
      window.location.href = authorizeUrl;
    } catch (error) {
      console.error("Error authorizing with Printful:", error);
    }
  };

  const handleCallback = async (code) => {
    try {
      // Step 4: Exchange the authorization code for an access token
      const tokenUrl = "https://api.printful.com/oauth/token";
      const tokenParams = new URLSearchParams({
        grant_type: "authorization_code",
        client_id: "your_client_id",
        client_secret: "your_client_secret",
        redirect_uri: "https://your-app.com/callback",
        code,
      });

      const response = await axios.post(tokenUrl, tokenParams.toString(), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      // Step 5: Store the access token
      setAccessToken(response.data.access_token);
    } catch (error) {
      console.error(
        "Error exchanging authorization code for access token:",
        error
      );
    }
  };

  return (
    <>
      <CustomButton
        type="filled"
        title="Buy"
        handleClick={handleAuthorize}
        customStyles="text-s"
      />
      {accessToken && <p>Access Token: {accessToken}</p>}
    </>
  );
};

export default Printful;
