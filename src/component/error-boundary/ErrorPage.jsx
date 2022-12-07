import React from "react";
export const ErrorPage = () => {
  return (
    <div className='error-page'>
      <h1>Error Occurred 
        <img 
           draggable="false" 
           role="img" 
           class="emoji" 
           alt="🚨" 
           src="https://s.w.org/images/core/emoji/14.0.0/svg/1f6a8.svg" 
        />
      </h1>
      <p>Can't render page. Please try again</p>
    </div>
  );
};