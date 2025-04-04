import React from 'react'
import './Terms.css'
import Footer from '../layout/Footer/Footer'
import { Link } from "react-router-dom";

const Terms = () => {
    return (
        <>
            <div>
                {/* Navbar */}
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

                {/* Terms & conditions body */}
                <h1 className='terms_heading'>Terms and Conditions</h1>
                <p className='terms_subHeading'>Welcome to MindMatrix.io, your trusted partner in advanced technology learning. By accessing and using our platform, you agree to comply with the following Terms and Conditions. Please read them carefully before utilizing our services.</p>
                
                <h1 className='terms_heading'>1. General Terms :</h1>
                <p className='terms_subHeading'>MindMatrix is an online platform offering learning materials, courses, and resources for advanced technology learning.</p>
                <p className='terms_subHeading'>MindMatrix also offer learning on Soft Skills and there are set of activities defined for various activities</p>
                <p className='terms_subHeading'>Users must be at least 18 years old or have parental consent to access and use the platform.</p>
                <p className='terms_subHeading'>By enrolling in our courses or using our services, you confirm that you have read, understood, and agreed to these Terms and Conditions.</p>

                <h1 className='terms_heading'>2. Service Information</h1>
                <p className='terms_subHeading'>MindMatrix aims to provide full descriptions of all courses and materials. However, we do not guarantee absolute accuracy and reserve the right to make changes without prior notice.</p>
                <p className='terms_subHeading'>Course content and material availability are subject to updates to reflect advancements in technology and education.</p>
                <p className='terms_subHeading'>Some information or content on the platform may become outdated or may contain inaccuracies. MindMatrix does not guarantee the completeness or current relevance of the material and shall not be held liable for any losses resulting from reliance on such content.</p>

                <h1 className='terms_heading'>3. Pricing and Payments</h1>
                <p className='terms_subHeading'>All prices displayed are in Indian Rupees and are inclusive of applicable taxes unless stated otherwise.</p>
                <p className='terms_subHeading'>MindMatrix reserves the right to change prices at any time without prior notice.</p>
                <p className='terms_subHeading'>Payment methods accepted will be displayed during the checkout process. Users are required to provide accurate payment details and authorize transactions.</p>

                <h1 className='terms_heading'>4. Subscription and Access</h1>
                <p className='terms_subHeading'>Access to courses and materials is subject to the subscription plan chosen. Subscription details, including duration and renewal, are outlined on the platform from time to time.</p>
                <p className='terms_subHeading'>MindMatrix reserves the right to modify or terminate access to specific services for violations of these Terms and Conditions.</p>

                <h1 className='terms_heading'>5. Intellectual Property</h1>
                <p className='terms_subHeading'>All content on MindMatrix, including course materials, videos, text, and graphics, is protected by copyright and other intellectual property laws.</p>
                <p className='terms_subHeading'>Users may not reproduce, modify, distribute, or use any content without explicit written permission from MindMatrix.</p>

                <h1 className='terms_heading'>6. User Conduct</h1>
                <p className='terms_subHeading'>Users agree to use MindMatrix.com only for lawful and authorized purposes.</p>
                <p className='terms_subHeading'>The following actions are strictly prohibited:</p>
                <h3 className='terms_subHeading_child'>Uploading obscene, abusive, or offensive content on the platform.</h3>
                <h3 className='terms_subHeading_child'>Using abusive language or making statements that harm the feelings or dignity of others.</h3>
                <h3 className='terms_subHeading_child'>Posting content related to caste, race, religion, politics, or any topic that could incite division or discrimination.</h3>
                <h3 className='terms_subHeading_child'>Engaging in behavior that disrupts or compromises the integrity of the platform.</h3>
                <p className='terms_subHeading'>Any violations will result in immediate suspension or termination of access, and MindMatrix reserves the right to take legal action if necessary.</p>

                <h1 className='terms_heading'>7. Limitation of Responsibility</h1>
                <p className='terms_subHeading'>MindMatrix does not guarantee specific outcomes from the use of its courses, tools, or techniques.</p>
                <p className='terms_subHeading'>The application of tools, techniques, or methods provided on the platform is solely at the discretion of the user. MindMatrix is not liable for any damages, losses, or issues that may arise from the use or misuse of any information or tools provided.</p>
                <p className='terms_subHeading'>Users acknowledge that there may be inaccuracies or outdated information on the platform. No compensation or claims will be entertained for losses or damages arising from reliance on such content.</p>

                <h1 className='terms_heading'>8. Privacy Policy</h1>
                <p className='terms_subHeading'>Use of the platform is governed by our Privacy Policy, which outlines how user data is collected, stored, and used. Please review the policy for details.</p>

                <h1 className='terms_heading'>9. Refund and Cancellation Policy</h1>
                <p className='terms_subHeading'>Refunds are not entertained once payment is made. Refunds are initiated only in the case of Course Delivery Cancellation by MindMatrix before the beginning of the Course.</p>

                <h1 className='terms_heading'>10. Limitation of Liability</h1>
                <p className='terms_subHeading'>MindMatrix is not liable for any indirect, incidental, or consequential damages arising from the use of the platform or any content accessed through it.</p>

                <h1 className='terms_heading'>11. Governing Law and Jurisdiction</h1>
                <p className='terms_subHeading'>These Terms and Conditions are governed by the laws of India.</p>
                <p className='terms_subHeading'>Any disputes will be resolved exclusively by the courts in Bangalore.</p>

                <h1 className='terms_heading'>12. Modifications to Terms and Conditions</h1>
                <p className='terms_subHeading'>MindMatrix reserves the right to update these Terms and Conditions at any time. Changes will be effective upon posting on the platform.</p>
                <p className='terms_subHeading'>Continued use of the platform following updates constitutes acceptance of the revised terms.</p>

                <h1 className='bottom_term'>This website is managed by CL INFOTECH PVT LTD</h1>
                <Footer />
            </div>
        </>
    )
}

export default Terms
