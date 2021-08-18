/** @format */

import React from "react";
import EventNoteIcon from "@material-ui/icons/EventNote";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import EmailIcon from "@material-ui/icons/Email";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";

const Forms = () => {
	return (
		<div id="container">
			<form id="container" className="form-btn">
				<br></br>
				<h3>Please click below to access forms.</h3>
				<br></br>
				<a
					href="https://drive.google.com/drive/folders/1mb3Lq3XdxE8r-Rkys3MtyeKOSxZ-R5Tm?usp=sharing"
                    target="_blank" rel="noopener noreferrer"
				>
					<div className="form-btn" type="submit"></div>
					<p>
						{" "}
						<ChromeReaderModeIcon /> Download Administrator Forms
					</p>
				</a>
				<br></br>

				<a
					href="https://docs.google.com/forms/d/e/1FAIpQLSfVIjyg-9rd_VmKDW3cGzsYBxYZZgq4GGLVSAkAm-m2bMQFNw/viewform?usp=sf_link"
                    target="_blank" rel="noopener noreferrer"
				>
					<div className="form-btn" type="submit"></div>
					<p>
						<OpenInBrowserIcon /> Upload Administrator Forms
					</p>
				</a>
				<br></br>

				<a
					href="https://drive.google.com/drive/folders/1-dSjyb0Ocr50-8aAVhCJ1Ft_SDBuap8s?usp=sharing"
                    target="_blank" rel="noopener noreferrer"
				>
					<div className="form-btn" type="submit"></div>
					<p>
						<EventNoteIcon /> Class Calls and Proposals
					</p>
				</a>
				<br></br>

				<a
					href="mailto:centralartsalliance@bill.com, krause@phoenixcenterforthearts.org,
                 j.valiente@phoenixcenterforthearts.org"
				>
					<div className="form-btn" type="submit"></div>
					<p>
						<EmailIcon /> Submit Finance Forms
					</p>
				</a>
			</form>
		</div>
	);
};

export default Forms;
