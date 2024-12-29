import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { PiPersonArmsSpreadBold } from "react-icons/pi";
import { FaHeartbeat } from "react-icons/fa";

const URL = "http://127.0.0.1:3000/";

function App() {
  const [shortURL, setShortURL] = useState("");
  const [longURL, setLongURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleShorten = async () => {
    if (!longURL.trim()) {
      alert("Please enter a valid URL");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ longURL }),
      });

      if (!res.ok) {
        throw new Error("Failed to shorten the URL");
      }

      const data = await res.json();
      const value = data.data.shortURL;

      setShortURL(value);
    } catch (error) {
      console.error("Error:", error.message);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  const handleCopy = () => {
    const copyshortURL = `${URL}${shortURL}`;
    navigator.clipboard
      .writeText(copyshortURL)
      .then(() => {
        alert("copied to clipboard");
        console.log("copied successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black min-h-screen flex justify-center items-center flex-col px-4">
      {/* Outer container */}
      <div className="text-yellow-300 flex flex-col p-8 gap-8 w-full max-w-4xl rounded-lg shadow-lg justify-center items-center">
        {/* Header section */}
        <div className="flex flex-col w-full px-4">
          <p className="text-3xl sm:text-5xl font-extrabold text-start tracking-wide">
            Short the URL
          </p>
          <p className="text-3xl sm:text-5xl font-extrabold text-end tracking-wide">
            Live Long 🌟
          </p>
        </div>
        {/* Input field */}
        <input
          placeholder="Enter your URL here"
          className="p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition shadow-md text-black w-full max-w-[800px]"
          value={longURL}
          onChange={(e) => setLongURL(e.target.value)}
        />
        {/* Button */}
        <button
          className="p-3 sm:p-4 rounded-md bg-yellow-400 text-black font-bold hover:bg-yellow-500 transition shadow-lg"
          onClick={handleShorten}
          disabled={isLoading}
        >
          {isLoading ? "Shortening it ..." : "Shorten It!"}
        </button>
        {/* Short URL display */}
        {shortURL && (
          <div className="text-lg sm:text-2xl p-3 m-4 text-red-500 flex flex-col justify-center items-center gap-3">
            <div>
              <strong>Short URL :</strong> {`${URL}${shortURL}`}
            </div>
            <ul className=" p-4 gap-y-2 flex flex-col text-[#FCCB06]">
              <li
                className="flex gap-3 hover:cursor-pointer hover:text-red-300"
                onClick={handleCopy}
              >
                <IoCopyOutline /> Copy it{" "}
              </li>
              <li className="flex gap-3">
                Spread It <PiPersonArmsSpreadBold />
              </li>
              <li className="flex gap-3">
                Live long <FaHeartbeat />
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
