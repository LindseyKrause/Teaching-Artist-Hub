import React from 'react';


const Forms = () => (
    <form id="container" className="form-btn">
        <br></br>
        <h3>Please click below to access forms.</h3>
        <br></br>
        <a href="https://drive.google.com/drive/folders/1mb3Lq3XdxE8r-Rkys3MtyeKOSxZ-R5Tm?usp=sharing">
            <div className="form-btn" type="submit"></div>
           <p>📝 Download Administrator Forms</p> 
        </a>
        <br></br>

        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfVIjyg-9rd_VmKDW3cGzsYBxYZZgq4GGLVSAkAm-m2bMQFNw/viewform?usp=sf_link">
            <div className="form-btn" type="submit"></div>
            <p>📝 Upload Administrator Forms</p>
        </a>
        <br></br>

        <a href="https://drive.google.com/drive/folders/1-dSjyb0Ocr50-8aAVhCJ1Ft_SDBuap8s?usp=sharing">
            <div className="form-btn" style="hover: width 16%" type="submit"></div>
            <p>📝 Class Calls and Proposals</p>
        </a>
        <br></br>
        
        <a href="mailto:centralartsalliance@bill.com, krause@phoenixcenterforthearts.org,
                 j.valiente@phoenixcenterforthearts.org">
            <div className="form-btn" type="submit"></div>
            <p>📧 Submit Finance Forms</p>
        </a>
        </form>
);

export default Forms;