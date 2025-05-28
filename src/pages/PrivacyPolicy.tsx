
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-screenwise-navy mb-8 text-center">Privacy Policy</h1>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-8 text-gray-700 leading-relaxed">
              
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-screenwise-navy mb-4">YumEats</h2>
                <h3 className="text-2xl font-bold text-screenwise-navy mb-4">Privacy Policy</h3>
                <p className="text-lg font-semibold text-gray-600">Last Updated: 5/25/2025</p>
              </div>

              {/* Introduction */}
              <div className="space-y-4">
                <p>
                  This online Privacy Policy (the "Policy") describes how Screenwise Eating, LLC and its affiliates and subsidiaries (collectively "YumEats," "we," "us," or "our") collect, use, disclose, and secure the personal information we gather about you through our website, https://screenwiseeating.com/ (the "Site"), when you use our Site, apps, and when you otherwise interact with us (collectively, the "Services").
                </p>
                <p>
                  For purposes of this Policy, personal information means data that classifies as personal information, personal data, personally identifiable information, or similar terms under applicable data privacy and security laws and regulations. It does not include data excluded or exempted from those laws and regulations, such as aggregated, anonymized, or deidentified data. Nothing in this Policy will constitute an admission or evidence that any particular data privacy or information security law or regulation applies to YumEats generally or in any specific context.
                </p>
                <p>
                  In providing our Services, YumEats may collect personal information on behalf and as a service provider for third parties. This Policy does not govern any information we collect on behalf of third parties, and you should consult their privacy policies to become familiar with their data collection and usage practices.
                </p>
              </div>

              {/* YOU CONSENT TO THIS POLICY */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-screenwise-navy">YOU CONSENT TO THIS POLICY</h2>
                <p>
                  By accessing, browsing, downloading, or otherwise using the Services, you confirm that you have read, understood, and agreed with this Policy. Beyond this Policy, your use of the Services is subject to our <Link to="/terms-of-use" className="text-blue-600 hover:text-blue-800 underline">Terms of Use</Link>. If you do not agree to this Policy or our Terms of Use, you may not use the Services.
                </p>
                <p>
                  This Policy and the Terms of Use apply regardless of how the Services are accessed and will cover any technologies or devices by which we make the Services available to you.
                </p>
                <p>
                  If you have any questions or concerns about our personal information policies or practices, you can contact us in the methods described in the "Contact Us" section below.
                </p>
              </div>

              {/* TYPES OF PERSONAL INFORMATION WE COLLECT */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-screenwise-navy">TYPES OF PERSONAL INFORMATION WE COLLECT</h2>
                <p>
                  We collect information you voluntarily provide directly to us, information that we collect automatically when you interact with the Services, and information collected from third parties. The categories of personal information that we collect and the purposes for which we collect that information are described below.
                </p>

                <h3 className="text-xl font-bold text-screenwise-navy mt-6">Personal Information You Provide to Us</h3>
                <p>The following list describes the categories of personal information we may collect directly from you:</p>
                
                <div className="space-y-4 ml-4">
                  <p>
                    <strong>Account Information</strong> includes first name, last name, email address, and password. This also includes information about the user including date of birth, height, weight, and additional metrics used to provide the Services. We collect this information when you provide it directly to us such as when you sign up for the Services, creating an account through the Site, or fill out a form. We collect this information for providing the Services, administrative purposes, and marketing and advertising our products and services.
                  </p>
                  <p>
                    <strong>Contact Information</strong> includes name, telephone number, and e-mail address. We collect this information when you provide it directly to us, such as when you sign up for newsletters, request information about our Services, create an account, or fill out a form. We collect this information for providing the Services, administrative purposes, and marketing and advertising our products and services.
                  </p>
                  <p>
                    <strong>Payment and Commercial Information</strong> includes name, address, phone number, third party payment service provider-related information, debit or credit card information, purchase and participation history, or other payment processing information. We collect this information for providing the Services and for administrative purposes.
                  </p>
                  <p>
                    <strong>Responses to Surveys and Questionnaires</strong> includes information you provide to us when you respond to marketing materials, promotions, contests, or other surveys. We collect this information for administrative purposes and marketing and advertising our products and services
                  </p>
                  <p>
                    <strong>Social Media Information</strong> includes information that you post by sharing on a blog or another social media platform. We collect this information for administrative purposes and marketing and advertising our products and services. Please note that your comments will be visible to the public, so you should never share personal information that you would like to keep private.
                  </p>
                  <p>
                    <strong>User-Generated Content</strong> includes information about you included in content you upload, comment, or otherwise submit on the Services, such as your name and email address and products you may have purchased. Be aware that as a default, any information you post on the Services, including without limitation reviews, comments, and text, may be available to and searchable by all users of the Services. We collect this information for providing the Services and administrative purposes.
                  </p>
                </div>

                <p>The purposes for which we use your personal information are described in further detail in the "How We Use Personal Information We Collect" section below.</p>
              </div>

              {/* Personal Information Collected Automatically */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-screenwise-navy">Personal Information Collected Automatically Through "Cookies" or Other Tracking Technologies</h3>
                <p>
                  We may send one or more cookies to your computer or other device. We may also use other similar technologies such as tracking pixels, tags, or similar tools when you visit our Services. These technologies can collect data regarding your operating system, browser type, device type, screen resolution, IP address, and other technical information, as well as navigation events and session information as you interact with our Services. This information allows us to understand how you use the Services.
                </p>

                <div className="space-y-4">
                  <p>
                    <strong>Cookies.</strong> Cookies are small files created by websites, including our Services, that reside on your computer's hard drive and that store information about your use of a particular website. When you access our Services, we use cookies and other tracking technologies to:
                  </p>
                  <ul className="list-disc ml-8 space-y-2">
                    <li>Estimate our audience size and usage patterns;</li>
                    <li>Store information about your preferences, allowing us to customize our Services according to your individual needs;</li>
                    <li>Contact you to provide you with information or services that you request from us;</li>
                    <li>Advertise new content, events, and services that relate to your interests;</li>
                    <li>Provide you with more personalized content that is most relevant to your interest areas; and</li>
                    <li>Recognize when you return to our Services.</li>
                  </ul>
                  <p>
                    We set some cookies ourselves and others are set by third parties. You can manage your cookies preference as described in the "Your Privacy Options and Configurations" section below.
                  </p>
                </div>

                <div className="space-y-4">
                  <p>
                    <strong>Types of Cookies and Their Functions.</strong> The following chart lists the different types of cookies that we and our service providers use on the Services, examples of who serves those cookies and links to the privacy notices and opt-out information of those cookie servers. Because the specific cookies we use may vary over time, as well as differ by the specific page you are browsing, the below chart is illustrative only.
                  </p>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 mt-4">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left font-bold">Types of Cookies</th>
                          <th className="border border-gray-300 p-3 text-left font-bold">Purpose</th>
                          <th className="border border-gray-300 p-3 text-left font-bold">Who Serves (for example)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 font-semibold">Essential</td>
                          <td className="border border-gray-300 p-3">These cookies are required for the operation of the Services and enable you to move around the Services and use its features. Disabling these cookies can negatively impact the performance of Services.</td>
                          <td className="border border-gray-300 p-3">YumEats<br />Google</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-semibold">Functionality</td>
                          <td className="border border-gray-300 p-3">These cookies are used to recognize you when you return to the Services. This enables us to personalize content for you and remember your preferences. These cookies also enable your interactions with the Services such as emailing us and customer support chat.</td>
                          <td className="border border-gray-300 p-3">Google</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-semibold">Analytics, Performance, and Research</td>
                          <td className="border border-gray-300 p-3">These cookies, beacons, and pixels allow us to analyze activities on the Services. They can be used to improve the functioning of the Services. For example, these cookies recognize and count the number of visitors and see how they move around the Services. Analytics cookies also help us measure the performance of our advertising campaigns to help us improve them and to optimize the content on the Services for those who engage with our advertising.</td>
                          <td className="border border-gray-300 p-3"></td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-semibold">Social Networking</td>
                          <td className="border border-gray-300 p-3">These cookies are used to enable you to share pages and content that you find interesting on our Services through third-party social networking and other websites. These cookies may also be used for advertising purposes.</td>
                          <td className="border border-gray-300 p-3">Google<br />Meta<br />TikTok<br />LinkedIn<br />Kickstarter</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-semibold">Advertising</td>
                          <td className="border border-gray-300 p-3">These cookies and pixels are used to deliver relevant ads, track ad campaign performance, or track email marketing.</td>
                          <td className="border border-gray-300 p-3"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p>We do not use analytical tools in a manner that discloses to third parties that a specific person viewed specific video materials.</p>
                </div>

                <div className="space-y-4">
                  <p>
                    <strong>Cookie Retention Period.</strong> Some cookies operate from the time you visit the Services until the end of that particular browsing session. These cookies, which are called "session cookies," expire and are automatically deleted when you close your internet browser.
                  </p>
                  <p>
                    Some cookies will stay on your device between browsing sessions and will not expire or automatically delete when you close your Internet browser. These cookies are called "persistent cookies" and the length of time they will remain on your device will vary from cookie to cookie. Persistent cookies are used for a number of purposes, such as storing your preferences so that they are available for your next visit and to keep a more accurate account of how often you visit the Services, how your use of the Services may change over time, and the effectiveness of advertising efforts.
                  </p>
                </div>

                <div className="space-y-4">
                  <p>
                    <strong>Mobile App Information.</strong> When you use our mobile app, we will collect certain information regarding your usage, the specifics of which will depend on how you use the application. We collect this information for the purposes of providing the services, analytics and research, and customer service.
                  </p>
                  <p>
                    Our mobile app may also use certain third party APIs, which will allow you additional functionality if you choose to use them. You should refer to the privacy policies of those third parties to determine how they may use your personal information.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-screenwise-navy">Personal Information We Receive From Third Parties</h3>
                  <p>
                    We may receive additional information about you from third parties or marketing partners and combine it with other information we have about you.
                  </p>
                </div>
              </div>

              {/* HOW WE USE PERSONAL INFORMATION WE COLLECT */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-screenwise-navy">HOW WE USE PERSONAL INFORMATION WE COLLECT</h2>
                <p>
                  We use your personal information for a variety of business purposes, including to provide our Services, for administrative purposes, and to market our products and Services, as described below.
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-screenwise-navy">Providing Our Services</h3>
                  <p>We use your information to fulfill our contract with you and provide you with our Services, such as:</p>
                  <ul className="list-disc ml-8 space-y-2">
                    <li>Managing your information and accounts;</li>
                    <li>Providing access to certain areas, functionalities, and features of our Services;</li>
                    <li>Answering requests for customer or technical support;</li>
                    <li>Communicating with you about your account, activities on our Services, and policy changes;</li>
                    <li>Processing your financial information and other payment methods for products or Services purchased or used;</li>
                    <li>Processing applications if you apply for a job we post on our Services; and</li>
                    <li>Allowing you to register for events.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-screenwise-navy">Administrative Purposes</h3>
                  <p>We use your information for various administrative purposes, such as:</p>
                  <ul className="list-disc ml-8 space-y-2">
                    <li>Pursuing our legitimate interests such as direct marketing, research and development (including marketing research), network and information security, and fraud prevention;</li>
                    <li>Detecting security incidents, protecting against malicious, deceptive, fraudulent or illegal activity, and prosecuting those responsible for that activity;</li>
                    <li>Measuring interest and engagement in our Services;</li>
                    <li>Improving, upgrading, or enhancing our Services;</li>
                    <li>Developing new products and services;</li>
                    <li>Ensuring internal quality control and safety;</li>
                    <li>Authenticating and verifying individual identities, including requests to exercise your rights under this Privacy Policy;</li>
                    <li>Debugging to identify and repair errors with our Services;</li>
                    <li>Auditing relating to interactions, transactions, and other compliance activities;</li>
                    <li>Sharing personal information with third parties as needed to provide the Services;</li>
                    <li>Enforcing our agreements and policies; and</li>
                    <li>Carrying out activities that are required to comply with our legal obligations.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-screenwise-navy">Marketing and Advertising our Products and Services</h3>
                  <p>
                    We may use personal information to tailor and provide you with content and advertisements. We may provide you with these materials as permitted by applicable law. Some of the ways we market to you include email campaigns, custom audiences advertising, and "interest-based" or "personalized advertising," including through cross-device tracking.
                  </p>
                  <p>
                    If you have any questions about our marketing practices or if you would like to opt out of the use of your personal information for marketing purposes, you may contact us at any time as set forth in "Contact Us" section below.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-screenwise-navy">With Your Consent</h3>
                  <p>
                    We may use personal information for other purposes that are clearly disclosed to you at the time you provide personal information or with your consent.
                  </p>
                </div>
              </div>

              {/* HOW WE DISCLOSE PERSONAL INFORMATION WE COLLECT */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-screenwise-navy">HOW WE DISCLOSE PERSONAL INFORMATION WE COLLECT</h2>
                <p>We may collect, use, or disclose personal information for a variety of business purposes, including the following:</p>
                
                <div className="space-y-4 ml-4">
                  <p>
                    <strong>Business Partners and Affiliates.</strong> We may collect personal information from and disclose personal information with our business partners and affiliates, including legal advisors and financial advisors, co-branded partners, and other third parties. We may combine that information with other information we collect about you, but we will always use the information as described in this Policy. We may also disclose personal information to our affiliates, subsidiaries, joint ventures or other companies under common control.
                  </p>
                  <p>
                    <strong>Business Transactions or Mergers.</strong> We reserve the right to disclose your personal information to third parties as part of any potential business or asset sale, merger, acquisition, investment, round of funding, or similar type of transaction. Additionally, if we are entering into a corporate transaction with a third party, we may receive personal information in connection with the diligence. If we close a transaction, the third party may transfer personal information, which we would use as described in this Policy.
                  </p>
                  <p>
                    <strong>Bankruptcy or Insolvency.</strong> In the event of bankruptcy, insolvency, or dissolution proceedings, we may disclose your personal information with third parties as part of the sale or reorganization process.
                  </p>
                  <p>
                    <strong>Service Providers.</strong> We use service providers to perform various functions on our behalf. We may also receive personal information from service providers.
                  </p>
                </div>
              </div>

              {/* YOUR PRIVACY OPTIONS AND CONFIGURATIONS */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-screenwise-navy">YOUR PRIVACY OPTIONS AND CONFIGURATIONS</h2>
                <p>Depending on the device(s) you use to access the Services, you may be able to select certain privacy choices or configuration, which are further described below:</p>
                
                <div className="space-y-4 ml-4">
                  <p>
                    <strong>Email Communications.</strong> If you receive an unwanted email from us, you can use the unsubscribe link found at the bottom of the email to opt out of receiving future emails. Note that you will continue to receive transaction-related emails regarding products or Services you have requested. We may also send you certain non-promotional communications regarding us and our Services, and you will not be able to opt out of those communications (e.g., communications regarding our Services or updates to our Terms of Use or this Privacy Policy).
                  </p>
                  <p>
                    <strong>Mobile Devices.</strong> We may send you push notifications through our mobile application. You may opt out from receiving these push notifications by changing the settings on your mobile device.
                  </p>
                  <p>
                    <strong>Do Not Track ("DNT").</strong> DNT is a privacy preference that users can set in certain web browsers. Please note that we do not respond to or honor DNT signals. At this time, our Site responds to the Global Privacy Control.
                  </p>
                  <p>
                    <strong>Cookies and Personalized Advertising.</strong> You may stop or restrict the placement of cookies and tracking technologies on your device or remove them by adjusting your preferences as your browser or device permits. However, if you adjust your preferences, our Services may not work properly. Please note that cookie-based opt-outs are not effective on mobile applications. However, you may opt out of personalized advertisements on some mobile applications by following the instructions provided by Android or iOS. You can find out more about cookies and how to manage them by visiting https://ico.org.uk/for-the-public/online/cookies/.
                  </p>
                </div>
              </div>

              {/* CROSS-BORDER TRANSFERS OF PERSONAL INFORMATION */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-screenwise-navy">CROSS-BORDER TRANSFERS OF PERSONAL INFORMATION</h2>
                <p>
                  We process personal information on our servers in the United States of America, which does not have an adequacy decision, and may do so in other countries. If you use our Services or otherwise provide us with information from outside of the United States, you expressly consent to the transfer of your data to the United States, the processing of your data in the United States, and the storage of your data in the United States.
                </p>
                <p>
                  Personal information about you provide while in another country, including an EEA member state, the UK, or Switzerland may be transferred to the United States. Applicable data protection laws may permit such transfers when necessary for the performance of a contract between you and us, if we obtain your explicit consent to such transfer, or if it is in our legitimate interest to transfer the personal information. The laws in the United States may not be as protective as the applicable data protection laws in the EEA, UK, and Switzerland or the laws of other jurisdictions where you may be located. If we transfer personal information from the EEA, UK, or Switzerland, or another country with cross-border transfer obligations, we will provide an appropriate safeguard, such as using standard contractual clauses.
                </p>
                <p>
                  For more information, please contact us using the information provided in the "Contact Us" section below.
                </p>
              </div>

              {/* HOW LONG YOUR PERSONAL INFORMATION IS KEPT */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-screenwise-navy">HOW LONG YOUR PERSONAL INFORMATION IS KEPT</h2>
                <p>
                  We will retain your personal information until the personal information is no longer necessary to accomplish the purpose for which it was provided. We may retain your personal information for longer periods for specific purposes to the extent that we are obliged to do so in accordance with applicable laws and regulations, to protect you, other people, and us from fraud, abuse, an unauthorized access, as necessary to protect our legal rights, or for certain business requirements.
                </p>
                <p>
                  We will delete your personal information when it is no longer necessary for the purpose for which it was collected, or upon your request, subject to exceptions as discussed in this Policy or under applicable law, contract, or regulation.
                </p>
              </div>

              {/* OUR COMMITMENT TO DATA SECURITY */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-screenwise-navy">OUR COMMITMENT TO DATA SECURITY</h2>
                <p>
                  The security of your personal information is important to us. We take various reasonable organizational, administrative, and technical measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. If required by law to do so, we will notify you and/or the relevant supervisory authority in the event of a data breach.
                </p>
                <p>
                  However, we cannot and do not guarantee complete security, as it does not exist on the internet.
                </p>
              </div>

              {/* THIRD PARTY LINKS */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-screenwise-navy">THIRD PARTY LINKS</h2>
                <p>
                  Our Services may contain links to third-party websites. When we provide links, we do so only as a convenience and we are not responsible for any content of any third-party website or any links contained within. It is important to note that this Policy only applies to our Services. We are not responsible and assume no responsibility for any personal information collected, stored, or used by any third party as a result of you visiting third-party websites. We also advise that you carefully read the privacy notice of any third-party websites you choose to visit.
                </p>
              </div>

              {/* CHILDREN'S PRIVACY */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-screenwise-navy">CHILDREN'S PRIVACY</h2>
                <p>
                  We do not knowingly collect or otherwise process personal information from children without first obtaining legally permission from that child's parent or legal guardian, such as through the attestations during account registration. This Policy, along with any additional parental consent forms provided as part of the provision of the Services to children, describes our privacy practices including the way we collect and process your child's information.
                </p>
              </div>

              {/* POLICY CHANGES */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-screenwise-navy">POLICY CHANGES</h2>
                <p>
                  This Policy may change from time to time. If we need to change this Policy at some point in the future, we will post any changes on this page. If we make a significant or material change to this Policy we will notify you as required by applicable law. You should check these terms when you use the Services. Your continued use of the Services constitutes acceptance of the most current version of this Policy.
                </p>
              </div>

              {/* CONTACT US */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-screenwise-navy">CONTACT US</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us by email at screenwiseeating@gmail.com or at 4432 Vera Cruz Road, Center Valley, Pennsylvania 18034.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
