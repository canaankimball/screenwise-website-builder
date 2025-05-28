import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const ConsumerHealthDataPrivacyPolicy = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-screenwise-navy mb-8 text-center">Consumer Health Data Privacy Policy</h1>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="prose prose-lg max-w-none">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-screenwise-navy mb-2">YumEats</h2>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Consumer Health Data Privacy Policy</h3>
                <p className="text-gray-600 font-medium">Last Updated: 5/25/2025</p>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    This consumer health data privacy policy ("<b>Consumer Health Data Privacy Policy</b>" or "<b>Policy</b>") outlines how and Screenwise Eating, LLC. (collectively, "<b>YumEats</b>," "<b>we</b>," "<b>us</b>" or "<b>our</b>") handle Consumer Health Data in compliance with Washington's My Health My Data ("<b>MHMD</b>") law, Nevada's Senate Bill 370 ("<b>SB370</b>"), the Connecticut Data Privacy Act ("<b>CDPA</b>"), and other applicable privacy regulations.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    This Policy applies to residents of the Washington State, Nevada, Connecticut, and other individuals whose Consumer Health Data we collect in those states, consistent with the definition of "<b>Consumer</b>" in the applicable regulations. "<b>Consumer Health Data</b>" in this Policy means personal information that is linked to, or reasonably linkable to, a consumer and that identifies the consumer's past, present, or future physical or mental health status, diagnosis, or other similar terms as defined under applicable heath data laws and regulations. Consumer Health Data does not include personal health data regulated by the federal Health Insurance Portability and Accountability Act of 1996 and related regulations.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    This Policy covers Consumer Health Data we collect through our website, when you use our site, apps, and when you otherwise interact with us (collectively, the "<b>Services</b>"). This Policy does not apply to other types of personal information. For more information on our collection or processing of personal information, please review our <Link to="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</Link>.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-screenwise-navy mb-4">CONSUMER HEALTH DATA WE COLLECT</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We collect Consumer Health Data for the purpose of providing the Services. This may include:
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Measurements of Bodily Functions, Vital Signs, and Other Related Information</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We may receive data from you and your profile, including related health data collected and shared with the Services by you, including, for example, information about eating habits, weight gain or loss, and vital signs.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Other Information That Could Be Used to Make Inferences About or Detect the Health Status of an Individual</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Depending on how you use our features and the information saved to your account, this could include health-related information.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Medical Records</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Relevant medical documentation provided by you or your healthcare provider. This may include diagnoses or the result of diagnostic testing, medical interventions, treatments, or medication-related information.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Eating Habits</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Information about the usage, frequency, and success of services or applications.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-screenwise-navy mb-4">SOURCES OF CONSUMER HEALTH DATA</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We may collect Consumer Health Data directly from you, from your interactions with Services, and from third parties acting at your direction.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We collect Consumer Health Data from the following sources:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                    <li>Directly from you;</li>
                    <li>From your healthcare provider;</li>
                    <li>Our business partners and other third parties; and</li>
                    <li>Those authorized to provide the information on your behalf such as a caregiver or authorized representative</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-screenwise-navy mb-4">HOW WE USE YOUR CONSUMER HEALTH DATA</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We use Consumer Health Data for the following purposes:
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Providing the Services</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      To provide you with the products and features of the Services you have requested. This may include using Consumer Health Data to power our Services, to communicate with you, and to comply with law.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">For Quality Assurance</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      To assess the quality and performance of the products and the Services.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Legal and Compliance</h4>
                    <p className="text-gray-700 leading-relaxed">
                      To comply with legal requirements and resolve disputes.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-screenwise-navy mb-4">HOW WE DISCLOSE YOUR CONSUMER HEALTH DATA</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Your Consumer Health Data is disclosed only in the following circumstances:
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">With Service Providers</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We may share your Consumer Health Data with third-party service providers who assist us in processing claims, preventing fraud, and those that provide information security and technology programs.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">For Legal Compliance</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We may disclose your Consumer Health Data if required by law, such as in response to a legal request or to protect our legal rights. This may include sharing with YumEats lawyers, auditors, and consultants, as well as authorized legal representatives, family member, and anyone you authorize.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">With Your Consent</h4>
                    <p className="text-gray-700 leading-relaxed">
                      We may disclose your Consumer Health Data for other purposes that are clearly disclosed to you at the time you provide personal information or with your consent.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-screenwise-navy mb-4">DATA SECURITY</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We implement reasonable security measures to protect your Consumer Health Data from unauthorized access, use, or disclosure. However, while we strive to protect your data, no method of electronic transmission or storage is completely secure.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-screenwise-navy mb-4">YOUR RIGHTS</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    To the extent afforded to you under MHMD, SB370, and CDPA, we will honor the following rights regarding your health data as a Consumer:
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Access</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      You have the right to request access to the Consumer Health Data we hold about you.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Correction</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      You can request corrections to any inaccurate or incomplete Consumer Health Data.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Withdraw Consent</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      You may withdraw your consent from our collection and sharing of your Consumer Health Data at any time.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Deletion</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      You may request the deletion of your health data, subject to any legal and contractual obligations we have to retain it.
                    </p>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    To exercise these rights, please contact us using the information in the "Contact Us" section below.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We may require identification verification before granting any request to access, withdraw consent, or delete your Consumer Health Data. We take special precautions to help ensure the security of your information when processing requests. We cannot respond to your request or provide you with Consumer Health Data if we cannot verify your identity or authority to make the request and confirm that the Consumer Health Data relates to you. We will only use personal information collected in connection with a verifiable consumer request to verify the requestor's identity or authority to make the request.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    If your request to exercise a right under MHMD, SB370, or CDPA is denied, you may appeal that decision by contacting us using the information below. If your appeal is unsuccessful, you may raise a concern or lodge a complaint with the Washington State Attorney General at www.atg.wa.gov/file-complaint, the Nevada State Attorney General at https://ag.nv.gov/Complaints/CSU_Complaints___FAQ/, or the Connecticut State Attorney General at https://portal.ct.gov/ag/contact-the-attorney-generals-office/contact-the-attorney-generals-office.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-screenwise-navy mb-4">CONTACT US</h3>
                  <p className="text-gray-700 leading-relaxed">
                    If you have any questions or concerns about this Consumer Health Data Privacy Policy or how we handle your Consumer Health Data, please contact us at screenwiseeating@gmail.com
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-screenwise-navy mb-4">CHANGES TO THIS POLICY</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We may update this Consumer Health Data Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on our website with an updated effective date. We encourage you to review this Policy periodically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ConsumerHealthDataPrivacyPolicy;
