import React from 'react'

const Mainpage = () => {
  return (
<main>
            <h1>Mobile App Landing Page</h1>
            <p>Start focusing on your goals and get more things done with Sync mobile application. It´s the first app to harness the power of social connections to help you stay focused and get organized.</p>
            <div className="button_container">
                <button onClick={() => window.location.href='https://factoriaf5.org/'} className="button_2"><i className="fa fa-apple"></i> <strong>DOWNLOAD</strong></button>
                <button onClick={() => window.location.href='https://factoriaf5.org/'} className="button_3"><i className="fa fa-play"></i><strong>DOWNLOAD</strong></button>
            </div>
            <div> 
                <img src="./Images/header-iphone.png" alt="iphone_image" className="iphone_image" />
            </div>
            <section>
  <div class="section_container">
    <button type="button" class="button_4"><i class="fa fa-users"></i></button>
    <h2>Identify Goals</h2>
    <button type="button" class="button_5"><i class="fa fa-code"></i></button>
    <h2>Situation Analysis</h2>
    <button type="button" class="button_6"><i class="fa fa-cog"></i></button>
    <h2>Tasks Settings</h2>
    <button type="button" class="button_7"><i class="fa fa-comments"></i></button>
    <h2>Social Interaction</h2>
    <button type="button" class="button_8"><i class="fa fa-rocket"></i></button>
    <h2>Get Things Done</h2>
</div>
</section>
        </main>
    );
}

export default Mainpage