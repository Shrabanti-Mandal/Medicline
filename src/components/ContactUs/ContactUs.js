import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="full-body">
      {/* contact details */}
      
      <div className="contact-details  ">
        <div className="contact-info text-center">
          <h4>Our contact details are : </h4>
          <p>
            {" "}
            <i class="fas fa-phone-square-alt"></i> 477 3700
          </p>
          <p>
            <i class="fas fa-fax"></i> 477 3701
          </p>
          <p>
            <i class="fas fa-envelope-open"></i> mediclie@gmail.com
          </p>
        </div>
      </div>
      
      {/* ---------------------------------------- */}

      {/* more info */}

<div>
<div className="moreInfo">
       <h4 className="moreInfo-heading">
          Electronic communication with our medical practice
        </h4>
        <h5>
          We have an online patient portal called ManageMyHealth which enables
         you to request request repeat prescriptions, view your test results
          and medical notes, and send a question to your doctor (there is a fee
          with this question service as it involves the doctor's time to respond
          to you). Click here to be taken to the login page (note: you will need
          to register with the practice before you can login).
         </h5>
       </div>
      <div className="moreInfo">
         <h4 className="moreInfo-heading"> Communication with your doctor</h4>
         <h5>
           Our receptionists transfer messages to the appropriate person via an
          internal messaging system. Doctors are unable to accept calls while
          consulting and are not routinely available to return calls. You can
           speak to a nurse or have a nurse return your call at a convenient time
           during the day. Alternatively, you can communicate with your doctor or
           nurse at any time via ManageMyHealth patient portal once you are
          registered (click here to go to the login screen). They will respond
           to you within a few days (this is not to be used for urgent matters).

         </h5>

       </div>

       <div className="moreInfo">

         <h4 className="moreInfo-heading"> Communication by text</h4>

         <h5>

           Communication by text We regularly use text messaging to communicate
           with our patients regarding recalls, test result notification, and
          appointment reminders. If you are happy to be contacted via this
           method please ensure we have your current mobile phone number.
         </h5>
       </div>
       <div className="moreInfo">
         <h4 className="moreInfo-heading"> Making a payment</h4>
         <h5>
           Payment is expected on the day of service. If you have an outstanding
          account with us, you may settle this by paying via internet banking.
           Our bank account number is 03-1322-0156475-00. Please put your name
          and/or chart number in the reference box so we can allocate the
           payment against your account. Thank you.
         </h5>
       </div>
       </div>
    </div>



    
  );
};

export default ContactUs;

// import React from "react";
// import "./ContactUs.css";

// const ContactUs = () => {
//   return (
//     <div className="contact">
//       <div className="contact-details">
//         <h4>Our contact details are :</h4>

//         <h3>
//           <i class="fas fa-phone-square-alt"></i> 477 3700
//         </h3>
//         <h3>
//           <i class="fas fa-fax"></i> 477 3701
//         </h3>
//         <h3>
//           <i class="fas fa-envelope-open"></i> mediclie@gmail.com
//         </h3>
//       </div>

//       <div class="card text-center">
//         <div class="card-body ">
//           <h4>Our contact details are :</h4>

//           <h3>
//             <i class="fas fa-phone-square-alt"></i> 477 3700
//           </h3>
//           <h3>
//             <i class="fas fa-fax"></i> 477 3701
//           </h3>
//           <h3>
//             <i class="fas fa-envelope-open"></i> mediclie@gmail.com
//           </h3>
//         </div>
//       </div>

//       <div className="moreInfo">
//         <h4 className="moreInfo-heading">
//           Electronic communication with our medical practice
//         </h4>
//         <h5>
//           We have an online patient portal called ManageMyHealth which enables
//           you to request request repeat prescriptions, view your test results
//           and medical notes, and send a question to your doctor (there is a fee
//           with this question service as it involves the doctor's time to respond
//           to you). Click here to be taken to the login page (note: you will need
//           to register with the practice before you can login).
//         </h5>
//       </div>
//       <div className="moreInfo">
//         <h4 className="moreInfo-heading"> Communication with your doctor</h4>
//         <h5>
//           Our receptionists transfer messages to the appropriate person via an
//           internal messaging system. Doctors are unable to accept calls while
//           consulting and are not routinely available to return calls. You can
//           speak to a nurse or have a nurse return your call at a convenient time
//           during the day. Alternatively, you can communicate with your doctor or
//           nurse at any time via ManageMyHealth patient portal once you are
//           registered (click here to go to the login screen). They will respond
//           to you within a few days (this is not to be used for urgent matters).
//         </h5>
//       </div>
//       <div className="moreInfo">
//         <h4 className="moreInfo-heading"> Communication by text</h4>
//         <h5>
//           Communication by text We regularly use text messaging to communicate
//           with our patients regarding recalls, test result notification, and
//           appointment reminders. If you are happy to be contacted via this
//           method please ensure we have your current mobile phone number.
//         </h5>
//       </div>
//       <div className="moreInfo">
//         <h4 className="moreInfo-heading"> Making a payment</h4>
//         <h5>
//           Payment is expected on the day of service. If you have an outstanding
//           account with us, you may settle this by paying via internet banking.
//           Our bank account number is 03-1322-0156475-00. Please put your name
//           and/or chart number in the reference box so we can allocate the
//           payment against your account. Thank you.
//         </h5>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
