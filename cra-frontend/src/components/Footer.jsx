export default function Footer() {
  return (
    <footer className="w-100 white bg-cyan flex justify-between align-center fixed-bottom p-5-0">
      <span className="m-sides">© 2022 Digital Booking</span>

      <div className="flex m-sides">
        {/* <img src="https://imagenesg4c7.s3.us-east-2.amazonaws.com/public/social-media/logo-fb.png" alt="" className="socialMediaIcon m-sides m-display-none" />
        <img src="https://imagenesg4c7.s3.us-east-2.amazonaws.com/public/social-media/logo-ig.png" alt="" className="socialMediaIcon m-sides m-display-none" />
        <img src="https://imagenesg4c7.s3.us-east-2.amazonaws.com/public/social-media/logo-linkedin.png" alt="" className="socialMediaIcon m-sides m-display-none" />
        <img src="https://imagenesg4c7.s3.us-east-2.amazonaws.com/public/social-media/logo-tw.png" alt="" className="socialMediaIcon m-sides m-display-none" /> */}

        <img src="/social-media/logo-fb.png" alt="" className="socialMediaIcon m-sides m-display-none" />
        <img src="/social-media/logo-ig.png" alt="" className="socialMediaIcon m-sides m-display-none" />
        <img src="/social-media/logo-linkedin.png" alt="" className="socialMediaIcon m-sides m-display-none" />
        <img src="/social-media/logo-tw.png" alt="" className="socialMediaIcon m-sides m-display-none" />

      </div>
    </footer>
  )
}