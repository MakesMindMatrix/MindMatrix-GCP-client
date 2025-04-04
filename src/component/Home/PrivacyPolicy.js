import React from 'react'
import './PrivacyPolicy.css'
import Footer from '../layout/Footer/Footer'
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <>
      <div className='privacyPolicy_container'>
        <div className="navbar">
          <div className="logo"></div>
          <div className="nav_right">

            <Link
              to="/login"
              className="btnOne auth_btn"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btnTwo auth_btn"
            >
              Sign Up
            </Link>
          </div>
        </div>
        <h1>Privacy Policy</h1>

        <h2 className='privacy_heading'>1. Introduction</h2>
        <p className='privacy_subHeading_child'>At MindMatrix.io, we value your trust and are committed to protecting your privacy. This Privacy Policy explains how we collect, use, share, and safeguard your information when you use our website, services, and related tools.</p>

        <h2 className='privacy_heading'>2. Information We Collect</h2>

        <h3 className='privacy_subHeading'>Personal Data You Provide:</h3>
        <p className='privacy_subHeading_child'>When you create an account, register for a course, or interact with us, you may provide personal information such as your name, email address, phone number, payment information, and other contact details.</p>
        <p className='privacy_subHeading_child'>You may also share information by filling out forms, participating in surveys, or engaging in forums on our platform.</p>

        <h3 className='privacy_subHeading'>Usage Data Automatically Collected:</h3>
        <p className='privacy_subHeading_child'>Information about your interactions with our website, such as IP address, browser type, device type, operating system, pages viewed, and time spent on our site, may be collected using cookies, tracking technologies, and analytics tools.</p>

        <h3 className='privacy_subHeading'>Third-Party Data:</h3>
        <p className='privacy_subHeading_child'>We may receive information from third-party services if you link or integrate these services with our platform.</p>

        <h2 className='privacy_heading'>3. How We Use Your Information</h2>
        <h3 className='privacy_subHeading'>We use your information to:</h3>
        <p className='privacy_subHeading_child'>Deliver and improve our services, including course content, workshops, and website functionality.</p>
        <p className='privacy_subHeading_child'>Manage your account, process payments, and provide customer support.</p>
        <p className='privacy_subHeading_child'>Communicate with you about updates, promotions, and new offerings.</p>
        <p className='privacy_subHeading_child'>Analyze user behavior to enhance user experience and develop new features.</p>
        <p className='privacy_subHeading_child'>Comply with legal obligations, resolve disputes, and enforce agreements.</p>

        <h3 className='privacy_subHeading'>Learning and Activity Data</h3>
        <p className='privacy_subHeading_child'>When you use MindMatrix.io, we collect data about your learning activity, including the number of assignments completed, quiz scores, time spent on lessons, and other engagement metrics.</p>

        <h3 className='privacy_subHeading'>How We Use Learning Data</h3>
        <h4 className='privacy_subHeading'>We use this data to:</h4>
        <p className='privacy_subHeading_child'>Track and report your progress.</p>
        <p className='privacy_subHeading_child'>Provide personalized feedback and recommendations.</p>
        <p className='privacy_subHeading_child'>Improve course content and learning outcomes.</p>
        <p className='privacy_subHeading_child'>Conduct research and analytics to enhance our platform.</p>
        <p className='privacy_subHeading_child'>Profiling: We may use your learning data to create a personalized profile that helps us better understand your learning preferences, strengths, and areas for improvement. This profile may be used to provide tailored course recommendations, identify potential learning challenges, or predict your future learning success.</p>

        <h2 className='privacy_heading'>4. Sharing and Disclosure of Information</h2>
        <h3 className='privacy_subHeading'>We do not sell or rent your personal information. However, we may share your data in the following situations:</h3>
        <p className='privacy_subHeading_child'>Service Providers: With trusted third parties who perform services on our behalf, such as payment processing, hosting, and analytics.</p>
        <p className='privacy_subHeading_child'>Legal Compliance: When required by law or in response to valid legal processes.</p>
        <p className='privacy_subHeading_child'>Business Transactions: In the event of a merger, acquisition, or sale of assets, your data may be transferred as part of the transaction.</p>

        <h2 className='privacy_heading'>5. Your Rights and Choices</h2>
        <h3 className='privacy_subHeading'>Depending on your location, you may have certain rights regarding your personal data, including:</h3>
        <p className='privacy_subHeading_child'>Accessing, correcting, or deleting your information.</p>
        <p className='privacy_subHeading_child'>Restricting or objecting to certain data processing activities.</p>
        <p className='privacy_subHeading_child'>Withdrawing consent for marketing communications.</p>

        <h2 className='privacy_heading'>6. Cookies and Tracking Technologies</h2>
        <h3 className='privacy_subHeading'>We use cookies and similar technologies to:</h3>
        <p className='privacy_subHeading_child'>Understand and improve site performance.</p>
        <p className='privacy_subHeading_child'>Personalize your user experience.</p>
        <p className='privacy_subHeading_child'>Deliver targeted advertising (if applicable).</p>
        <h3 className='privacy_subHeading_child'>You can control or disable cookies through your browser settings.</h3>

        <h2 className='privacy_heading'>7. Data Retention and Security</h2>
        <p className='privacy_subHeading_child'>We retain your data only as long as necessary for the purposes outlined in this policy or as required by law.</p>
        <p className='privacy_subHeading_child'>We implement robust technical and organizational measures to protect your data from unauthorized access, loss, or misuse.</p>

        <h2 className='privacy_heading'>8. International Data Transfers</h2>
        <p className='privacy_subHeading_child'>If you are located outside the region where our servers are based, your data may be transferred internationally. We ensure such transfers comply with applicable laws.</p>

        <h2 className='privacy_heading'>9. Children’s Privacy</h2>
        <p className='privacy_subHeading_child'>Our services are not intended for individuals under 16 years of age. If we learn that we have collected personal data from a child under 16 without verification of parental consent, we will delete it promptly.</p>

        <h2 className='privacy_heading'>10. Links to Third-Party Websites</h2>
        <p className='privacy_subHeading_child'>Our website may include links to third-party websites. We are not responsible for their content or privacy practices.</p>

        <h2 className='privacy_heading'>11. Changes to This Privacy Policy</h2>
        <p className='privacy_subHeading_child'>We may update this Privacy Policy periodically. The "Effective Date" at the top of this page reflects the date of the latest revision. We encourage you to review this page for updates.</p>

        <h2 className='privacy_heading'>12. Contact Us</h2>
        <h3 className='privacy_subHeading'>For questions, concerns, or requests regarding this Privacy Policy, please contact us at:</h3>
        <p className='privacy_subHeading_child'>Email: mindmatrix1@clinf.com</p>
        <p className='privacy_subHeading_child'>Phone: +91 96115 46444</p>
        <p className='privacy_subHeading_child'>Address: #149, 14th Main, 4th Block, Koramangala, Bengaluru - 560034</p>

        <Footer />
      </div>
    </>
  )
}

export default PrivacyPolicy
