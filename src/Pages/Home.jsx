import { useState } from 'react';
import Otp from './Otp';
import Sigin from './Sigin';
import Success from './Success'
import { Box } from '@chakra-ui/react'
import { auth } from './firebaseConfig';
import toast, { Toaster } from 'react-hot-toast';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

export default function Home() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOTP, setShowOTP] = useState(true);
  const [user, setUser] = useState(null);

  const captchaVerifier = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        'recaptcha-container',
        {
          'size': "invisible",
          'callback': (response) => {
            onSignup();
          },
          "expired-callback": () => { },
        }, auth);
    }
  }

  function onSignup() {
    captchaVerifier();
    const appVerifier = window.recaptchaVerifier;
    const formatPh = "+" + phone;
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setShowOTP(false);
        toast.success("OTP sent successfully!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong.");
      });
  }

  function handleOtpVerification() {
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        setUser(res.user);
        toast.success("OTP verified.");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Invalid OTP");
      });
  }

  return (
    <>
      <Toaster toastOptions={{ duration: 3000 }} />
      <div id='recaptcha-container'></div>
      {
        user ?
          <Success />
          :
          <Box>
            {
              showOTP ?
                <Sigin
                  phone={phone}
                  setPhone={setPhone}
                  onSignup={onSignup}
                />
                :
                <Otp
                  otp={otp}
                  setOtp={setOtp}
                  handleOtpVerification={handleOtpVerification}
                />
            }
          </Box>
      }
    </>
  )
}