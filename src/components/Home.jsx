import React from 'react';

function Home() {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '40%', backgroundColor: 'white' }}>
                <div style={{ heigth: "200px", backgroundColor: "orange" }}>
                    <img src="../images/profile.jpg" alt="profile" style={{ width: "100px", height: "100px", borderRadius: "50px", position: "relative", left: "90px", top: "30px" }} />
                    <h4 style={{ textAlign: "center" }}>Jagadeesh Sammeta</h4>
                    <p style={{ position: "relative", bottom: "20px", left: "80px" }}>Joined at Dec 2023</p>
                    <button style={{ backgroundColor: "black", color: "white", position: "relative", bottom: "30px", left: "100px" }}>package</button>
                    <h5 style={{ position: "relative", bottom: "50px", left: "80px" }}>Speaking & Writing</h5>
                    <h5 style={{ position: "relative", bottom: "60px", left: "70px" }}>Intermediate Package 002</h5>
                </div>
                <div style={{ height: "50px", textAlign: "center", backgroundColor: "bisque", borderRadius: "30px", margin: "10px" }}>Dashboard</div>
                <div style={{ height: "50px", textAlign: "center", backgroundColor: "bisque", borderRadius: "30px", margin: "10px" }}>Online Classes</div>
                <div style={{ height: "50px", textAlign: "center", backgroundColor: "bisque", borderRadius: "30px", margin: "10px" }}>IELTS Calender</div>
                <div style={{ height: "50px", textAlign: "center", backgroundColor: "bisque", borderRadius: "30px", margin: "10px" }}>Book Test</div>
                <div style={{ height: "50px", textAlign: "center", backgroundColor: "bisque", borderRadius: "30px", margin: "10px" }}>Coursre Material</div>
                <div style={{ height: "50px", textAlign: "center", backgroundColor: "bisque", borderRadius: "30px", margin: "10px" }}>Practice Test</div>
                <div style={{ height: "50px", textAlign: "center", backgroundColor: "bisque", borderRadius: "30px", margin: "10px" }}>Mock Test</div>
                <div style={{ height: "50px", textAlign: "center", backgroundColor: "bisque", borderRadius: "30px", margin: "10px" }}>Videos</div>

            </div>
            <div style={{ width: '60%', backgroundColor: 'lightgrey', padding: "15px" }}>
                <h1>Online Classes</h1>
                <h3>You <span style={{ color: "orange" }}> Do Not Have Any Upcoming Online Classes </span> It Will Be Updated Once <br></br> We Will Get The Information</h3>
                <img src="../images/banner.jpg" alt="banner" style={{ width: "800px", height: "400px", borderRadius: "35px" }} />
                <h3>Quick Links</h3>
                <div style={{ display: "flex" }} >
                    <div style={{ width: "350px", display: "flex", height: "100px", backgroundColor: "lightgreen", borderRadius: "20px", marginLeft: "40px", marginBottom: "30px" }}>
                        <img src="../images/view.webp" alt="view" width="40px" height="40px" style={{ position: "relative", bottom: "-30px", left: "30px", borderRadius: "10px" }} />
                        <h4 style={{ position: "relative", left: "60px", top: "5px" }}>View <br></br>Purchace Package</h4>

                    </div>

                    <div style={{ width: "350px", display: "flex", height: "100px", backgroundColor: "lightpink", borderRadius: "20px", marginLeft: "20px", marginBottom: "30px" }}>
                        <img src="../images/desk.png" alt="view" width="40px" height="40px" style={{ position: "relative", bottom: "-30px", left: "30px", borderRadius: "10px" }} />
                        <h4 style={{ position: "relative", left: "60px", top: "5px" }}>View <br></br>Course Material</h4>
                    </div>
                </div>
                <div style={{ display: "flex" }} >
                    <div style={{ width: "350px", display: "flex", height: "100px", backgroundColor: "orange", borderRadius: "20px", marginLeft: "40px", }}>
                        <img src="../images/mock.png" alt="view" width="40px" height="40px" style={{ position: "relative", bottom: "-30px", left: "30px", borderRadius: "10px" }} />
                        <h4 style={{ position: "relative", left: "60px", top: "10px" }}>Mock Test</h4>

                    </div>

                    <div style={{ width: "350px", display: "flex", height: "100px", backgroundColor: "lightblue", borderRadius: "20px", marginLeft: "20px" }}>
                        <img src="../images/prac.jpg" alt="view" width="40px" height="40px" style={{ position: "relative", bottom: "-30px", left: "30px", borderRadius: "10px" }} />
                        <h4 style={{ position: "relative", left: "60px", top: "10px", }}>Practice Test</h4>
                    </div>
                </div>

                <h2>Trending Packages</h2>
                <div style={{ display: "flex" }}>
                    <div style={{ width: "400px", backgroundColor: "white", margin: "30px" }}>
                        <img src="../images/exam.webp" alt="exam" width="400px" height="300px" />
                        <h6>Duration:<span style={{ color: "orange" }}>9 Hrs 30 Min</span></h6>
                        <h3>Speaking & Writing <br /> Intermediate Package 003</h3>
                        <hr />
                        <p>This Package includes</p>
                        <div>
                            <ul>6 Test Papers</ul>
                            <ul>4 cheat Sheets</ul>
                            <ul>2 Live Mock Test</ul>
                            <ul>12 Lessons</ul>
                            <ul>2 Councelling Session</ul>
                        </div>
                        <hr />
                        <div style={{ display: "flex" }}>
                            <h3>299.00/-</h3>
                            <button style={{ backgroundColor: "orange", color: "white", height: "30px", marginLeft: "60px", marginTop: "15px" }}>Buy Now</button>
                        </div>
                    </div>
                    <div style={{ width: "400px", backgroundColor: "white", margin: "30px" }}>
                        <img src="../images/girl.jpg" alt="exam" width="400px" height="300px" />
                        <h6>Duration:<span style={{ color: "orange" }}>9 Hrs 30 Min</span></h6>
                        <h3>Speaking & Writing <br /> Intermediate Package 003</h3>
                        <hr />
                        <p>This Package includes</p>
                        <div>
                            <ul>6 Test Papers</ul>
                            <ul>4 cheat Sheets</ul>
                            <ul>2 Live Mock Test</ul>
                            <ul>12 Lessons</ul>
                            <ul>2 Councelling Session</ul>
                        </div>
                        <hr />
                        <div style={{ display: "flex" }}>
                            <h3>299.00/-</h3>
                            <button style={{ backgroundColor: "orange", color: "white", height: "30px", marginLeft: "60px", marginTop: "15px" }}>Buy Now</button>
                        </div>
                    </div>
                </div>

            </div>
            <div style={{width:"40%", backgroundColor:"white", margin:"30px"}}>
            <div style={{ borderRadius: "10px", backgroundColor: "lightblue" }}>
                <div style={{ display: "flex", }}>
                    <div style={{ height: "40px" }}>
                        <img src="../images/boy.jpg" alt="boy" width="70px" height="70px" style={{ borderRadius: "40px" }} />
                    </div>
                    <div>
                        <button style={{ backgroundColor: "pink", position: "relative", top: "20px", left: "30px", borderRadius:"4px" }} >IELTS Coordinator</button>
                        <h4 style={{ position: "relative", left: "30px" }}>Vivek Sharma</h4>
                    </div>
                </div>
                <hr />
                <h5>vikas@ielts.com</h5>
                <hr />
                <h5>+91 9927522022</h5>


            </div>
            <div style={{ borderRadius: "10px", backgroundColor: "lightblue" }}>
                <div style={{ display: "flex", }}>
                    <div style={{ height: "40px" }}>
                        <img src="../images/forgirl.jpg" alt="boy" width="70px" height="70px" style={{ borderRadius: "40px" }} />
                    </div>
                    <div>
                        <button style={{ backgroundColor: "lightyellow", position: "relative", top: "20px", left: "30px", borderRadius:"4px" }} >IELTS Coordinator</button>
                        <h4 style={{ position: "relative", left: "30px" }}>Swetha Tiwari</h4>
                    </div>
                </div>
                <hr />
                <h5>swetha@ielts.com</h5>
                <hr />
                <h5>+91 9957522022</h5>


            </div>
            <div style={{ borderRadius: "10px", backgroundColor: "lightblue" }}>
                <div style={{ display: "flex", }}>
                    <div style={{ height: "40px" }}>
                        <img src="../images/forboy.jpg" alt="boy" width="70px" height="70px" style={{ borderRadius: "40px" }} />
                    </div>
                    <div>
                        <button style={{ backgroundColor: "lightgreen", position: "relative", top: "20px", left: "30px", borderRadius:"4px" }} >Education Coordinator</button>
                        <h4 style={{ position: "relative", left: "30px" }}>Vikas Kohekar</h4>
                    </div>
                </div>
                <hr />
                <h5>vivek@ielts.com</h5>
                <hr />
                <h5>+91 9927522022</h5>


            </div>
            </div>
        </div>
    );
}

export default Home;


