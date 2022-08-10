import React from "react";
import "./file.css";

function File() {
  return (
    <div className="file-wrapper">
      <div className="inner-wrapper">
        <div>
          <img className="picture" src="person.jpg"></img>
        </div>
        <div className="date-wrapper">
          <div>Date:</div>
          <div>
            <select>
              <option value="0">January</option>
              <option value="1">February</option>
              <option value="2">March</option>
              <option value="3">April</option>
              <option value="4">May</option>
              <option value="5">June</option>
              <option value="6">July</option>
              <option value="7">August</option>
              <option value="8">September</option>
              <option value="9">October</option>
              <option value="10">November</option>
              <option value="11">December</option>
            </select>
          </div>

          <div>
            <select>
              <option value="0">Photo</option>
              <option value="1">Video</option>
              <option value="2">Text</option>
              <option value="3">A Thing he liked</option>
            </select>
          </div>

          <div>
            <select>
              <option value="0">Photo</option>
              <option value="1">Video</option>
              <option value="2">Text</option>
              <option value="3">A Thing he liked</option>
            </select>
          </div>
        </div>

        <div className="description">
          <label className="lable" htmlFor="description">
            Description
          </label>
          <textarea></textarea>
        </div>

        <div className="timeline-textbook">
          <div className="timeline">
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ViewTimelineSharpIcon"
            >
              <path d="M21 3H3v18h18V3zm-9 14H6v-2h6v2zm3-4H9v-2h6v2zm3-4h-6V7h6v2z"></path>
            </svg>
            <div>Show in TimeLine</div>
          </div>

          <div className="TextBook">
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="MenuBookSharpIcon"
            >
              <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v15.5C2.45 20.4 4.55 20 6.5 20s4.05.4 5.5 1.5c1.45-1.1 3.55-1.5 5.5-1.5 1.17 0 2.39.15 3.5.5.75.25 1.4.55 2 1V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"></path>
              <path d="M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99zM13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83zm4.5 1.84c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24z"></path>
            </svg>
            <div>Show in TextBook</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default File;
