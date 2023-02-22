import styles from "./styles.module.css";
import Logo from "./1024px-Blue_double_ticks.svg.png"
import QRCode from 'react-qr-code';

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
	

	 

	return (
		
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>CHKFKE</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			{/* <div className="container-2">
           </div> */}
		    {/* <div className={styles.container_2}>
               <p>Enter yor text or URL</p>
			   <input type="text" placeholder="Text or URL" id={styles.qrText}></input>
			   <div id={styles.imgBox}>
				<img src="" alt="" id={styles.qrImage}></img>
			   </div>
			   <button onClick={generateQR}>Generate QR Code</button>
            </div> */}
            <div className={styles.container_0}> 
			<div className={styles.container_3}>
			    <img src={Logo} alt="" />
				<h2>Anti-Counterfeiting Verification Certificate</h2>
				<h6>Certificate ID : 7788665544</h6>
			</div>
			
			<div className={styles.container_1}>
				<h3>Beneficiary Details</h3>
				<h5>Beneficiary Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;John Doe</h5>
				<h5>Date of Birth(YYYY-MM-DD): &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2023-09-12</h5>
				<h5>Gender:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Male</h5>
				<h5>Unique Identification Id:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8899776655443399</h5>
			</div>
			<div className={styles.container_2}>
				<h3>Verification Details: </h3>
				<h5>Generation Limit: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10</h5>
				<h5>Location: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lucknow</h5>
				<h5>Date Of Manufacturing:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Male</h5>
				<h5>Artstyle:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;XXXXXXXXXX</h5>
			</div>
			<div className={styles.qrcode}>
               <QRCode
				title= "anti-counterfeiting"
				value= "geeks for geeks"
				bgColor="white"
				fgColor="black"
				size ={170}
			   /> 
			</div>


		</div>
	</div>
	);
};

export default Main;
