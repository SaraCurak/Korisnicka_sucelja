.cover3-container {
    background-color: grey;
    padding: 20px;
    width: 100%;
    margin: 0 auto;
  }
  
  .circle3-image {
    flex: 1;
    display: flex;
    justify-content: center; /* Center icons horizontally */
    align-items: center; /* Center vertically */
    transition: transform 0.3s ease;
    margin-bottom: 120px;
  }
  
  .circle3 {
    width: 500px;
    height: 500px;
    background-color: #78bdec;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  
  .rotating-image {
    width: 100%;
    height: auto;
    animation: spin 150s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  .icon3-container {
    margin-right: 800px;
    flex-direction: column; /* Align icons in a column */
    align-items: center; /* Center horizontally */
    gap: 40px;
     /* Increase the space between icons */
  }
  
  .icon3 {
    
    align-items: center;
    transform: translateX(1); /* Initial position */
    transition: transform 0.3s ease; /* Smooth slide transition */
  }
  
  .icon3 img {
    width: 64px;
    height: 64px;
  }
  
  .icon3 p {
    margin-left: 20px;
    font-size: 16px;
    color: #000;
  }
  
  /* .icon3::before {
    content: "";
    width: 80px;
    height: 80px;
    background-color: #fff;
    border: 2px dotted #3498db;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: background-color 0.3s ease;
  } */
  
  .icon3:hover::before {
    background-color: orange;
  }
  
  .icon3:hover {
    transform: translateX(20px); /* Slide icons to the right on hover */
  }
  