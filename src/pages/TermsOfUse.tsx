import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const TermsOfUse = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-screenwise-navy mb-8 text-center">Terms of Use</h1>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-8 text-gray-700 leading-relaxed">
              
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-screenwise-navy mb-4">YumEats</h2>
                <h3 className="text-2xl font-bold text-screenwise-navy mb-4">Terms of Use</h3>
                <p className="text-lg font-semibold text-gray-600">Last Updated: 5/25/2025</p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                <p className="font-semibold text-gray-800">
                  PLEASE READ THESE TERMS OF USE CAREFULLY BEFORE USING THIS SITE. IF YOU DO NOT AGREE TO BE BOUND BY THESE TERMS OF USE, PLEASE DO NOT ACCESS THIS SITE, USE THE SITE, OR INDICATE ACCEPTANCE OF THESE TERMS.
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    These Terms of Use ("<b>Terms</b>b>" or "<b>Terms of Use</b>") constitute an agreement between you ("<b>you</b>" or the "<b>user</b>") and Screenwise Eating, LLC and its affiliates, subsidiaries or assigns (collectively, "<b>YumEats</b>," "<b>we</b>," "<b>us</b>" or "<b>our</b>"). This website (the "<b>Site</b>") is owned and operated by YumEats. Access and use of this Site and our services provided through the Site, application, and offline (together, the "<b>Services</b>") are provided by YumEats to you on condition that you accept these Terms of Use. By accessing or using the Services, you signify that you have read, understand, and agree to be bound by these Terms of Use. If you do not agree to accept these Terms of Use, you may not access or use the Services.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We reserve the right at any time to change: (i) the terms and conditions of these Terms of Use; (ii) the Services, including terminating, eliminating, supplementing, modifying, adding or discontinuing any content or feature or data or service on or available through the Services or the hours that they are available; (iii) any fees or charges, if any, related to the use of the Services; and (iv) the equipment, hardware or software required to use and access the Services.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Any changes we make to these Terms of Use will be effective immediately upon posting on this Site. Please return to this Site periodically to ensure you are familiar with the most current version of these Terms of Use.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-screenwise-navy mb-4">DISPUTE RESOLUTION</h3>
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                    <p className="font-semibold text-gray-800">
                      PLEASE READ THIS SECTION CAREFULLY BECAUSE IT LIMITS THE MANNER IN WHICH YOU AND YUMEATS CAN SEEK RELIEF FROM EACH OTHER AND REQUIRES ALL DISPUTES TO BE BROUGHT SOLELY ON AN INDIVIDUAL BASIS AND NOT AS A CLASS ACTION OR ANY OTHER KIND OF REPRESENTATIVE PROCEEDING.
                    </p>
                  </div>

                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Governing Law and Venue</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    These Terms, and all matters relating to the Services, and any disputes and claims arising therefrom or related thereto between you and YumEats (in each case, including non-contractual disputes or claims) will be governed by Pennsylvania law, without regard to its principles of conflicts of law that might require the application of the laws of another jurisdiction. You and YumEats agree to the exclusive jurisdiction of the federal and state courts located in Pennsylvania, and you and YumEats agree to submit to the exercise of personal jurisdiction of such courts for the purposes of litigating any applicable Dispute.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    "<b>Disputes</b>" are any disputes, claims, actions, and other controversies between you and YumEats or between you and the affiliates or agents of YumEats that, in either case, arise out of or relate to these Terms, the Services, or any other products or services related thereto, whether based in contract, tort, warranty, fraud, misrepresentation, statute, regulation, or another legal or equitable basis.
                  </p>

                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Informal Dispute Resolution Prior to Litigation</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you have a Dispute with YumEats or if YumEats has a Dispute with you, you or YumEats must first attempt to resolve the Dispute through informal negotiation for a period of sixty (60) days, or such longer period as mutually agreed in writing (email suffices) by the parties ("<b>Informal Resolution Period</b>") from the day either party receives a written notice of a Dispute from the other party (a "<b>Claimant Notice</b>") in accordance with these Terms. The Informal Resolution Period is designed to allow the party who has received a Claimant Notice to make a fair, fact-based offer of settlement if it chooses to do so. The statute of limitations and any filing fee deadlines for a Dispute will be tolled for the duration of the Informal Resolution Period for that Dispute so that the parties can engage in this informal dispute-resolution process.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A valid Claimant Notice must be in writing and include all of the following: (i) the name, address and email address of the party giving notice, (ii) a description of the nature and facts of the Dispute, (iii) the relief requested, including the damages sought, if any, and a detailed calculation of them, (iv) an acknowledgement that the Dispute is subject to these Terms, and (v) a personally signed statement from the claimant (and not their counsel) verifying the accuracy of the contents of the notice. A Claimant Notice must be individualized, meaning it can only concern yours or YumEats' Dispute and no other person's or entity's Dispute.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You will send any Claimant Notice to YumEats at the following address:
                  </p>
                  <div className="bg-gray-100 p-4 rounded mb-4">
                    <p className="text-gray-800 font-medium">
                      YumEats<br/>
                      Re: Notice of Dispute<br/>
                      4432 Vera Cruz Road<br/>
                      Center Valley, Pennsylvania 18034
                    </p>
                    <p className="text-gray-800 mt-2">
                      with a copy by email to screenwiseeating@gmail.com with the subject heading: "Notice of Dispute."
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We will send any Claimant Notice to you at the contact information we have for you.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If a party receives a Claimant Notice, the receiving party will acknowledge receipt of the Claimant Notice and make a good faith effort during the Informal Resolution Period to either resolve the Dispute or explain why the claimant is not entitled to relief. Neither you nor YumEats may commence any court action or other legal proceeding regarding a Dispute before the end of the Informal Resolution Period. If you or YumEats file a court action or other legal proceeding regarding a Dispute without complying with the requirements in Section 1, including waiting until the conclusion of the Informal Resolution Period, the other party may (i) seek relief from a court to enjoin the filing until the requirements in this Section are fully met and (ii) seek damages from the party that has not followed the requirements in this Section to reimburse it for any costs incurred as a foreseeable consequence of that breach.
                  </p>

                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Meet and Confer</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The recipient of a Claimant Notice may request an individualized telephone or video settlement conference, and both parties shall personally attend (with counsel, if represented) any conference that is held. You and YumEats agree to work cooperatively to schedule the conference at the earliest mutually convenient time (with the Informal Resolution Period being extended as needed until that time) and to seek to reach a resolution during any such conference.
                  </p>

                  <h4 className="text-xl font-semibold text-gray-800 mb-3">CLASS ACTION WAIVER</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    This Section 1(e) will apply to the fullest extent permitted by applicable law. NO DISPUTE SHALL BE JOINED TO ANY OTHER DISPUTE, INCLUDING ANY DISPUTE INVOLVING ANY OTHER CURRENT OR FORMER USER OF THE SERVICES. NO CLASS ACTION PROCEEDINGS OR ANY PROCEEDINGS IN WHICH EITHER YOU OR YUMEATS ACTS OR PROPOSES TO ACT IN A REPRESENTATIVE CAPACITY SHALL BE PERMITTED, AND NEITHER YOU NOR YUMEATS WILL PARTICIPATE AS A CLASS MEMBER IN ANY LEGAL PROCEEDINGS ARISING OUT OF OR RELATING TO THESE TERMS, THE SITE, THE SERVICES OR ANY OTHER PRODUCTS OR SERVICES RELATED THERETO. ANY RELIEF MAY BE AWARDED ONLY INDIVIDUALLY AND ONLY TO THE EXTENT NECESSARY TO REDRESS YOUR OR YUMEATS'S INDIVIDUAL CLAIM(S); RELIEF MAY NOT BE AWARDED ON BEHALF OF OTHERS OR THE GENERAL PUBLIC.
                  </p>

                  <h4 className="text-xl font-semibold text-gray-800 mb-3">One Year to Assert Claims</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    In no event shall you or YumEats send a Claimant Notice or commence litigation over any Dispute more than one (1) year after the Dispute first arose. After such time, the Dispute is permanently barred, which means that you or YumEats will no longer have the right to assert that Dispute.
                  </p>

                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Severability</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If any part of this Section 1 is found to be unlawful or unenforceable for any reason, including but not limited to because it is found to be unconscionable, (i) the unenforceable or unlawful provision will be severed from these Terms and (ii) the remainder of these Terms will remain in effect. If the class action waiver in Section 1(e) is found to be unlawful or unenforceable in a state for any reason, to the fullest extent allowed by applicable law, claimants may seek certification only of a class composed of residents of that state. Further, if any part of this Section 1 is found to unlawfully prohibit an individual claim seeking public injunctive relief that provision will have no effect to the extent such relief is allowed to be sought, and the remainder of this Section 1 will be enforceable.
                  </p>

                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Third-Party Beneficiaries</h4>
                  <p className="text-gray-700 leading-relaxed">
                    You must resolve Disputes with our past, present, and future affiliates and agents as though they were or are YumEats. Such affiliates and agents are third-party beneficiaries of this Section 1 and can enforce this Section 1 as though they were or are YumEats in the event they become involved in a Dispute with you. Otherwise, these Terms are only for the benefit of, and will only be enforceable by, you and YumEats only and do not give rights to any third parties.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-screenwise-navy mb-4">YOU AGREE TO OUR PRIVACY POLICY</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Please review our Privacy Policy, which is incorporated by reference in these Terms of Use. By using the Services, you are consenting to and agreeing to be bound by the Privacy Policy.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    When you use the Services, you consent to receive communications from us electronically via the Services, email, or otherwise. You agree to provide accurate, current, and complete information about yourself when you use the Services and to update such information while you continue to use the Services.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-screenwise-navy mb-4">USE OF THIS SITE AND APPLICATION</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you access this Site or application from outside of the United States, you do so at your own risk and are responsible for compliance with local, national, or international laws. In particular, you understand that this Site, the Services, or both may not be available in all countries and that you are responsible for ensuring that it is lawful for you to use this Site and receive the Services in your location.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Some countries may have laws that forbid participating in the activities we offer on the Site or Services. These restrictions might include a minimum age for using the Internet or entering into contracts like these Terms of Use. You are responsible for making sure you can use this Site and the Services in the location you reside in. Continuing to use the Services represents and warrants to us that you have verified that you are permitted to use the Services in your jurisdiction.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-screenwise-navy mb-4">ELIGIBILITY</h3>
                  <p className="text-gray-700 leading-relaxed">
                    You represent and warrant that you: (a) are above the legal age of majority in your jurisdiction of residence; (b) have not previously been suspended or removed from the Site or our Services; and (c) have full power and authority to enter into these Terms, and in doing so will not violate any other agreement to which you are a party.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-screenwise-navy mb-4">MOBILE DEVICES</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you use a mobile device to access the Services optimized for mobile viewing, or use a mobile application, the following additional terms and conditions also apply.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    You understand that wireless service through Wi-Fi or a participating mobile service provider may not be available in all areas at all times and may be affected by product, software, coverage, or other service changes made by your mobile service provider or otherwise. You agree that you are solely responsible for all message and data charges that apply to use of your mobile device to access the Services. All such charges are billed by and payable to your mobile service provider. Please contact your participating mobile service provider for pricing plans, participation status and details.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-screenwise-navy mb-4">SERVICES AND YOUR ACCOUNT</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    In order to access and use certain Services available, you may need to sign up for, open and maintain an account (your "Account") with us. Prior to completing the signup process for your Account, you may be required to confirm your acceptance of all of the terms and conditions of these Terms of Use. If you do not agree to these Terms of Use, you may not sign up for an Account and you shall not have the right to use such Services.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You represent and warrant that at all times you will: (i) provide accurate, current and complete information about yourself as prompted by our registration form or otherwise; and (ii) maintain and promptly update your information (including your e-mail address) to keep it accurate, current and complete. If you provide any information that is untrue, inaccurate, not current or incomplete, or if we have reasonable grounds to suspect that such information is untrue, inaccurate, not current or incomplete, we shall have the right to suspend or terminate your account and any or all privileges on the Services and to refuse any and all current or future use of the Services.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    During the registration process, you may be required to choose a username and enter your email address. You acknowledge and agree that YumEats may rely on this email address or username to identify you. You shall be responsible for protecting the confidentiality of your username(s) and/or password(s), if any. You are responsible for all use of your Account, regardless of whether you authorized such access or use, and for ensuring that all use of your Account complies fully with the provisions of these Terms of Use. You must not choose a username that infringes the rights of any third party or which is offensive, racist, obscene, hurtful, unlawful, or otherwise inappropriate. You agree not to transfer your right to use or access the Sites or the Services via your username or password to any third person.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4 font-semibold">
                    WE HEREBY DISCLAIM ANY AND ALL LIABILITY FOR ANY UNAUTHORIZED USE OF YOUR ACCOUNT FOR WHICH WE ARE NOT RESPONSIBLE.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Any conduct that in our sole discretion restricts or inhibits anyone else from using or enjoying the Services will not be permitted. We reserve the right in our sole discretion to remove or edit any content and to terminate your Account for any reason. If you wish to delete your account or terminate your Account, you can do so at any time. In the event of termination, you will still be bound by your obligations under these Terms.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-screenwise-navy mb-4">ELECTRONIC MESSAGES</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    By accessing our Site, signing up for Services, creating an account with us, or typing your name into any of our electronic forms and indicating your acceptance or submission of information by clicking a box, you consent to (i) us communicating with you electronically; (ii) receiving all applications, notices, disclosures, and authorizations from us (collectively, "Records") electronically; and (iii) entering into agreements and transactions using electronic Records and signatures. Please note that federal law treats electronic signatures as having the same legal force and effect as if they were signed on paper by hand, and online contracts have the same legal force as signing an equivalent paper contract in ink. You agree that any notices, agreements, disclosures, or other communications that we send to you electronically will satisfy any legal communication requirements, including that such communications be in writing. You must have a computer or other web-enabled device, an internet connection, an active email account, and the ability to receive and read PDF files to conduct business with us electronically. You agree to be responsible for keeping your own Records. If you require assistance with your Records or if you wish to receive Records in paper format or to withdraw your consent to receiving electronic Records from us, please contact us at screenwiseeating@gmail.com. Agreements and transactions executed prior to this request will remain valid and enforceable.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-screenwise-navy mb-4">NO MEDICAL ADVICE</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    YumEats does not provide health or medical advice through the Services. The services that you obtain or receive from YumEats, its employees, contractors, partners, sponsors, advertisers, licensors or otherwise through the Services, is for informational and educational purposes only. All medically related information, including, without limitation, information shared via the Site, application, YumEats emails and text messages, and YumEats advertising is for informational and communicative purposes only.
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                    <p className="font-semibold text-gray-800">
                      WHILE WE HOPE THE SERVICES ARE USEFUL, THEY ARE NOT INTENDED AS A SUBSTITUTE FOR, NOR DOES THEY REPLACE, PROFESSIONAL MEDICAL ADVICE, DIAGNOSIS, OR TREATMENT. DO NOT USE THE SERVICES FOR EMERGENCY MEDICAL NEEDS. IF YOU EXPERIENCE A MEDICAL OR MENTAL HEALTH EMERGENCY, ARE THINKING ABOUT SUICIDE OR TAKING ACTIONS THAT MAY CAUSE HARM TO YOU OR TO OTHERS, IMMEDIATELY CALL A HEALTHCARE PROFESSIONAL AND/OR AN EMERGENCY SYSTEM. THE USE OF THE SERVICES IS SOLELY AT YOUR OWN RISK. NOTHING STATED, POSTED, OR AVAILABLE THROUGH ANY SERVICES IS INTENDED TO BE, AND MUST NOT BE TAKEN TO BE, THE PRACTICE OF MEDICINE, DENTISTRY, NURSING, PHARMACY, OR OTHER PROFESSIONAL HEALTHCARE ADVICE, OR THE PROVISION OF MEDICAL CARE. ONLY LICENSED HEALTHCARE PROVIDERS MAY PROVIDE HEALTHCARE ADVICE. YOU ARE SOLELY RESPONSIBLE FOR THE DECISION TO OBTAIN TREATMENT FROM A HEALTHCARE PROFESSIONAL.
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    If you rely on any content provided by the Site or Services, you do so solely at your own risk. We encourage you to independently confirm any content on the Services relevant to you with other sources, including your healthcare provider, medical associations relevant to the applicable specialty, your state medical boards, and the appropriate licensing or certification authorities to verify listed credentials and education.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-screenwise-navy mb-4">OUR MATERIALS</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    YumEats may make certain digital reproductions of materials, information, content, software, or other materials (including but not limited to intellectual property, database rights, graphics, videos, text, and logos) available to you from this Site from time to time (collectively, the "YumEats Materials").
                  </p>
                  
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Intellectual Property</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Services, YumEats Materials, information downloaded, and all intellectual property pertaining to or contained on the Services (including but not limited to copyrights, patents, database rights, graphics, designs, text, logos, trade dress, trademarks, and service marks) are owned by YumEats or third parties; all rights, title, and interest will remain the property of YumEats and/or such third-party owner, as applicable. All YumEats Materials are protected by trade dress, copyright, patent, and trademark laws, as well as various other intellectual property and unfair competition laws.
                  </p>

                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Copies of YumEats Materials</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You are authorized to view and retain a copy of pages of the Services only for your own personal, non-commercial use. You may also view and make copies of relevant documents, pages, images, or other materials on the Services for the purpose of transacting business with us. You may not tokenize copies of the pages of the Services or any other content on the Services. You agree that you will not duplicate, publish, modify, create derivative works from, participate in the transfer of, or in any way distribute or exploit the Services, or any portion of the Services, for any public or commercial use, without our prior express written consent. Additionally, you agree that you: (a) will not remove or alter any author, trademark, other proprietary notice, or legend displayed on the Services (or printed pages produced from the Services), and (b) will not make any other modifications to any documents obtained from the Services other than in connection with completing information required to transact business with YumEats.
                  </p>

                  <h4 className="text-xl font-semibold text-gray-800 mb-3">License to Use YumEats Materials</h4>
                  <p className="text-gray-700 leading-relaxed">
                    By using the Services, we grant you a non-exclusive, non-transferrable, non-sublicensable right and license to use the YumEats Materials for your personal use only. If you download, access or use any YumEats Materials, you agree that such materials: (i) may only be used for your personal use; (ii) may not be modified, used to create a derivative work, incorporated into any other work or otherwise exploited without YumEats's prior written permission; (iii) shall not be submitted to, processed by, or otherwise fed into any artificial intelligence or automated processing software; and (iv) shall only be used in compliance with any additional license terms accompanying such materials.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-screenwise-navy mb-4">USER CONTENT</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You are solely responsible for the content and information (collectively referred to as "User Content") that you post or upload on the Services including feedback or questions.
                  </p>

                  <h4 className="text-xl font-semibold text-gray-800 mb-3">License for YumEats for User Content</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    By submitting User Content to the Services, you automatically grant YumEats the royalty-free, perpetual, worldwide, irrevocable, non-exclusive right and license, but not the obligation, to use, publish, reproduce, modify, adapt, edit, translate, create derivative works from, incorporate into other works, distribute, sub-license and otherwise exploit such User Content (in whole or in part) worldwide in any form, media or technology now known or hereafter developed for the full term of any copyright that may exist in such User Content, without payment to you or to any third parties. You acknowledge and agree that this license includes the right to reproduce User Content, including any personal information or your likeness, for marketing and advertising purposes.
                  </p>

                  <h4 className="text-xl font-semibold text-gray-800 mb-3">YumEats's Use of User Content</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You agree that we may access, preserve and disclose your account and any User Content posted, uploaded, received or otherwise communicated if required to do so by law or with the good faith belief that such access, preservation or disclosure is reasonably necessary to: (i) comply with an enforceable subpoena or other legal process; (ii) enforce these Terms; (iii) respond to claims that any information violates the rights of third parties; (iv) respond to your requests for customer service or allow you to use the Services in the future; or (v) protect the rights, property or personal safety of YumEats or its members, employees, agents, affiliates, partners, communities or any other person.
                  </p>

                  <h4 className="text-xl font-semibold text-gray-800 mb-3">User Content is Non-Confidential</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    User Content submitted by you will be considered non-confidential and YumEats is under no obligation to treat such User Content as proprietary information. Without limiting the foregoing, we reserve the right to use any User Content as it deems appropriate, including, without limitation, deleting, editing, modifying, rejecting, or refusing to post it. YumEats is under no obligation to edit, delete or otherwise modify User Content once it has been submitted to us. We shall have no duty to attribute authorship of User Content to you, and shall not be obligated to enforce any form of attribution by third parties.
                  </p>

                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Moral Rights</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If it is determined that you retain moral rights (including rights of attribution or integrity) in the User Content, you hereby declare that (a) you do not require that any personal data, personal information, personally identifying information, or equivalent term be used in connection with the User Content, or any derivative works of or upgrades or updates thereto; (b) you have no objection to the publication, use, modification, deletion and exploitation of the User Content by YumEats or its licensees, successors and assigns; (c) you forever waive and agree not to claim or assert any entitlement to any and all moral rights of an author in any of the User Content; and (d) you forever release YumEats, and its licensees, successors and assigns, from any claims that you could otherwise assert against YumEats, or any of its assigns or affiliates, by virtue of any such moral rights. You also permit any other user to access, view, store, or reproduce the User Content for that user's personal use.
                  </p>

                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Disclaimer</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Please note that we do not make any representations, warranties or guarantees that: (i) the Site, the Services, or any portion thereof, will be monitored (e.g., for accuracy or unacceptable use); (ii) apparent statements of fact will be authenticated; or (iii) we will take any specific action (or any action at all) in the event of a challenge or dispute regarding compliance or non-compliance with these Terms of Use. We generally do not pre-screen any communications, content or other materials before it is posted, uploaded, transmitted, sent or otherwise made available on the Site or through the Services by users, so you may be exposed to certain communications, content or other materials that is opinionated, offensive, inappropriate, and/or violates these Terms of Use.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-screenwise-navy mb-4">USE OF THE SERVICES AND USER CONTENT RESTRICTIONS</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You represent and warrant that you will use the Services and any User Content solely for lawful purposes in a manner consistent with these Terms and any and all applicable laws, regulations, or other legally enforceable obligations (including contractual obligations) you may have with us and any third parties, all of which you are responsible for knowing and understanding.
                  </p>
                  
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Use of the Services</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    By using the Services, you agree that User Content will comply with the User Content Guidelines in Section 11(b) of these Terms.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    By using the Services, you further agree that you will not:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-4">
                    <li>Impersonate another person, or his or her email address, or misrepresent your current or former affiliation with an employer;</li>
                    <li>Create user accounts under false or fraudulent pretenses, create or use an account for anyone other than yourself, or create multiple active user accounts to post multiple reviews for the same company;</li>
                    <li>Promote, endorse, or further illegal activities;</li>
                    <li>Disclose information in violation of any legally enforceable confidentiality, nondisclosure or other contractual restrictions or rights of any third party, including any current or former employers or potential employers;</li>
                    <li>Violate the privacy, publicity, copyright, patent, trademark, trade secret, or other intellectual property or proprietary rights of any third party;</li>
                    <li>Except as expressly approved by us, and subject to applicable laws, use the Services for commercial activities and/or promotions such as contests, sweepstakes, barter, pyramid schemes, advertising, affiliate links, or other forms of solicitation;</li>
                    <li>Imply a YumEats endorsement or partnership of any kind without our prior express written permission;</li>
                    <li>Introduce software or automated agents to the Services, or access YumEats or the Services so as to produce multiple accounts, generate automated messages, or to scrape, strip or mine data from YumEats or the Services without our express written permission;</li>
                    <li>"Frame" or "mirror" or otherwise incorporate part of the Services into any website, or "deep-link" to any portion of YumEats or the Services without our express written permission;</li>
                    <li>Copy or use the information, content, or data on the Services in connection with a competitive service, as determined by YumEats;</li>
                    <li>Sell, resell, rent, lease, loan, trade, or otherwise monetize access to YumEats or the Services posted on the Site without our express written permission;</li>
                    <li>Interfere with, disrupt, modify, reverse engineer, or decompile any data or functionality of YumEats or the Services;</li>
                    <li>Interfere with, disrupt, or create an undue burden on YumEats or the Services or the networks or services connected to YumEats or the Services; or</li>
                    <li>Introduce any viruses, Trojan horses, worms, time bombs, cancelbots, corrupted files, or similar software to YumEats or the Services or attempt to circumvent any security feature of YumEats or the Services;</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-gray-800 mb-3">User Content Guidelines</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    By submitting User Content or using the Services, you further agree that you will not, in connection with User Content, submit material that is contrary to the following guidelines, which may be updated from time to time, or contrary to applicable local, national, and international laws and regulations:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-4">
                    <li>You will not submit any User Content that does not generally pertain to the designated topic or theme of the Site or the Services.</li>
                    <li>You will not post images or comments that include: (i) pornographic or sexually explicit content; or (ii) showing graphic or gratuitous violence; and</li>
                    <li>You will not submit User Content that is harassing, threatening, abusive, racist, incomplete, obscene, intimidating, offensive, bigoted, constitutes hate speech, infringes, violates another party's rights (including intellectual property rights, and rights of privacy and publicity), contains private information of any third party, or is otherwise objectionable (all as determined by us).</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-gray-800 mb-3">YumEats's Removal of User Content</h4>
                  <p className="text-gray-700 leading-relaxed">
                    You understand and agree that we, without any obligation to do so, may monitor or review any User Content you post, upload or otherwise communicate through the Services. We reserve the right to remove any such User Content, in whole or in part, at our sole discretion, that violates these Terms, is likely to harm our reputation, is deemed inappropriate or otherwise poses a risk of harm to any other person. We reserve the right to deactivate your account or otherwise prevent your use and/or participation on Services at any time and for any reason.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-screenwise-navy mb-4">INTELLECTUAL PROPERTY INFRINGEMENT</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    YumEats respects the intellectual property rights of others, and we ask you to do the same. This section discusses infringement of intellectual property, including under the Digital Millennium Copyright Act, 17 USC Section 512 et seq. ("DMCA").
                  </p>
                  
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Notice of Infringement</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you believe that your work is the subject of copyright infringement and/or trademark infringement and appears on the Site and/or in the Services, please provide YumEats's designated agent the following information:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-4">
                    <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed;</li>
                    <li>Identification of the copyrighted and/or trademarked work claimed to have been infringed, or if multiple works at a single online location are covered by a single notification, a representative list of such works at that location;</li>
                    <li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled at the Site, and information reasonably sufficient to permit YumEats to locate the material;</li>
                    <li>Information reasonably sufficient to permit YumEats to contact you as the complaining party, such as an address, telephone number, and, if available, an e-mail address at which you may be contacted;</li>
                    <li>A statement that you have a good-faith belief that use of the material in the manner complained of is not authorized by the copyright and/or trademark owner, its agent, or the law; and</li>
                    <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    YumEats's agent for notice of claims of copyright or trademark infringement can be reached at [insert copyright agent's institutional email address].
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Please also note that for copyright infringements under Section 512(f) of the DMCA, any person who knowingly materially misrepresents that material or activity is infringing may be subject to liability.
                  </p>

                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Submitting a DMCA Counter-Notification</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We will notify you that we have removed or disabled access to copyright-protected material that you provided if such removal is pursuant to a valid DMCA take-down notice that we have received. If you receive such notice from us, you may provide us with a counter-notification, in writing, to YumEats's designated agent that includes all of the following information:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-4">
                    <li>Your physical or electronic signature;</li>
                    <li>Identification of the material that has been removed or to which access has been disabled, and the location at which the material appeared before it was removed or access to it was disabled;</li>
                    <li>A statement from you, under penalty of perjury, that you have a good-faith belief that the material was removed or disabled as a result of a mistake or misidentification of the material to be removed or disabled; and</li>
                    <li>Your name, physical address, and telephone number, and a statement that you consent to the jurisdiction of a court for the judicial district in which your physical address is located, or if your physical address is outside of the United States, for any judicial district in which YumEats may be located, and that you will accept service of process from the person who provided notification of allegedly infringing material or an agent of such person.</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Termination of Infringers</h4>
                  <p className="text-gray-700 leading-relaxed">
                    YumEats reserves the right, at its sole discretion, to terminate the account or access of any user of the Site who is the subject of DMCA or other infringement notifications.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-screenwise-navy mb-4">AVAILABILITY</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We cannot and do not promise that the Site or the Services will be uninterrupted, secure, or error-free. We reserve the right to interrupt/suspend this Site or the Services, or any part thereof, with or without prior notice for any reason.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-screenwise-navy mb-4">ACCESS TO THE INTERNET</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You are solely responsible for obtaining and maintaining all internet, computer hardware and other equipment needed to access and use this Site and the Services, and you shall be solely responsible for all charges and fees related thereto.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Please note that the Internet is not a fully secure medium and any communication may be lost, intercepted or altered. YumEats is not liable for any damages related to communications to, or from, this Site or the Services.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-screenwise-navy mb-4">CURRENCY OF SITE</h3>
                  <p className="text-gray-700 leading-relaxed">
                    YumEats cannot and does not guarantee or accept any responsibility or liability for the accuracy, currency or completeness of the information on this Site and the Services. We have the right, but not the obligation, to correct any errors, inaccuracies or omissions and to change or update this Site (including the YumEats Materials) and the Services at any time, without prior notice to you.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-screenwise-navy mb-4">LINKS TO OTHER SITES AND SERVICES</h3>
                  <p className="text-gray-700 leading-relaxed">
                    This Site or the Services may contain links to outside services and resources, the availability and content of which YumEats does not control. The inclusion of these links does not imply that YumEats monitors or endorses these sites. We are not responsible for examining or evaluating, and we do not warrant the offering of these services and resources or the content of these websites. We do not assume any responsibility or liability for the actions, products, and content of these and any other websites. Any concerns regarding any such services or resources should be directed to the service or resource.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-screenwise-navy mb-4">SECURITY</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    YumEats makes no warranty whatsoever to you, express or implied, regarding the security of the Services, including with respect to the ability of unauthorized persons to intercept or access information transmitted by you through the Services. YumEats is not responsible for any losses resulting from the loss or theft of your device, the loss or theft of your information transmitted from or stored on your devices, or any losses arising from the use of your device by someone whom you have given access. You are required to notify us of any unauthorized use of the Services by using the contact information in the "Contact Information" section below.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Due to technical difficulties with the internet, internet software or transmission problems could produce inaccurate or incomplete copies of information contained on this Site or the Services. Due to the ability to share certain content and materials, computer viruses or other destructive programs may also be inadvertently downloaded from this Site or the Services. YumEats recommends that you install appropriate anti-virus or other protective software.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                    <p className="font-semibold text-gray-800">
                      YUMEATS SHALL NOT BE RESPONSIBLE OR LIABLE FOR ANY SOFTWARE, COMPUTER VIRUSES OR OTHER DESTRUCTIVE, HARMFUL OR DISRUPTIVE FILES OR PROGRAMS THAT MAY INFECT OR OTHERWISE IMPACT YOUR USE OF YOUR COMPUTER EQUIPMENT OR OTHER PROPERTY ON ACCOUNT OF YOUR ACCESS TO, USE OF, OR BROWSING ON THE SITE OR THE SERVICES OR YOUR DOWNLOADING OF ANY USER MATERIALS OR OTHER CONTENT FROM THIS WEBSITE.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-screenwise-navy mb-4">SEVERABILITY/NO WAIVER</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If any provision of these Terms of Use is found to be unenforceable, then that provision shall be deemed severable from these Terms of Use and shall not affect the validity and enforceability of any remaining provisions. YumEats's failure to enforce the strict performance of any provision of these Terms or the additional terms and conditions for any Service will not constitute a waiver of our right to subsequently enforce such provision or any other provisions of these Terms or the additional terms and conditions.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Sections 1 (Dispute Resolution) 17 (Security), 19 (Disclaimers: Site and Services and Materials Provided "As-Is"), 20 (Limitation of Liability), 21 (Indemnification), and 22 (Term and Termination) will survive any termination of expiry of these Terms.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-screenwise-navy mb-4">DISCLAIMERS: SITE, SERVICES AND MATERIALS PROVIDED "AS-IS"</h3>
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                    <p className="font-semibold text-gray-800">
                      THIS SITE, THE SERVICES AND THE YUMEATS MATERIALS ARE PROVIDED "AS IS," "WHERE IS," AND "WITH ALL FAULTS," WITHOUT REPRESENTATION, WARRANTY OR CONDITION OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED REPRESENTATIONS, WARRANTIES OR CONDITIONS OF MERCHANTABILITY, NON-INFRINGEMENT, OR FITNESS FOR A PARTICULAR PURPOSE. YUMEATS DOES NOT REPRESENT OR WARRANT THAT THIS SITE, THE SERVICES, OR THE YUMEATS MATERIALS WILL MEET YOUR REQUIREMENTS. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM YUMEATS, OR THROUGH THE SITE SHALL CREATE ANY WARRANTY REGARDING THE SERVICES NOT EXPRESSLY STATED IN THESE TERMS. YOU UNDERSTAND AND ACKNOWLEDGE THAT ADDITIONAL DISCLAIMERS, LIMITATIONS, AND NOTICES REGARDING THE SERVICES AND ITS CONTENT AND DATA MAY BE PROVIDED BY YUMEATS FROM TIME TO TIME WITHIN THE SERVICES.
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    These Terms were written in English (US). Any translated version is provided solely for your convenience using third party translation services such as Google Translate.
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                    <p className="font-semibold text-gray-800">
                      WE DO NOT WARRANT THAT THE WEBSITE AND ITS SERVERS ARE FREE OF COMPUTER VIRUSES OR OTHER HARMFUL CONTENT. IF YOUR USE OF THE SERVICES, THE MATERIAL, OR THE SOFTWARE RESULTS IN THE NEED FOR SERVICING OR REPLACING EQUIPMENT OR DATA, WE ARE NOT RESPONSIBLE FOR THOSE COSTS.
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Please note that some jurisdictions do not allow the disclaimer of certain representations or warranties, so the disclaimer in this Section 19 will apply to you to the extent permitted by applicable law.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-screenwise-navy mb-4">LIMITATION OF LIABILITY</h3>
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                    <p className="font-semibold text-gray-800">
                      YOU AGREE THAT NONE OF THE PROTECTED PARTIES (AS DEFINED BELOW) SHALL HAVE ANY LIABILITY TO YOU UNDER ANY THEORY OF LIABILITY OR INDEMNITY IN CONNECTION WITH YOUR USE OF THE SITE AND/OR SERVICES. YOU HEREBY RELEASE AND FOREVER WAIVE ANY AND ALL CLAIMS YOU MAY HAVE AGAINST THE PROTECTED PARTIES (INCLUDING BUT NOT LIMITED TO CLAIMS BASED UPON THE NEGLIGENCE OF ANY OF THE PROTECTED PARTIES) FOR LOSSES OR DAMAGES YOU SUSTAIN IN CONNECTION WITH YOUR USE OF THE SITE AND/OR SERVICES. IN NO EVENT SHALL THE PROTECTED PARTIES BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY LOST PROFIT OR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF SERVICES, EVEN IF YOU HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                    </p>
                  </div>
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                    <p className="font-semibold text-gray-800">
                      NOTWITHSTANDING THE FOREGOING PARAGRAPH AND TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE TOTAL LIABILITY OF THE PROTECTED PARTIES, FOR ANY CLAIM, COST, DAMAGE, OR LOSS ARISING OUT OF OR RELATING TO THE SERVICES, INCLUDING FOR ANY WARRANTIES THAT MAY NOT BE EXCLUDED, SHALL NOT EXCEED THE LESSER OF THE AMOUNT YOU PAID TO US DURING THE TWELVE (12) MONTHS PRIOR TO THE EVENT GIVING RISE TO THE LIABILITY OR $10.00 (TEN DOLLARS) (USD) (THE "LIABILITY CAP").
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Some jurisdictions do not allow the exclusion or limitation of liability for certain types of damages. In such jurisdictions, our liability is limited to the greatest extent permitted by law.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-screenwise-navy mb-4">INDEMNIFICATION</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You will defend, indemnify, and hold YumEats, each third-party service provider, their respective affiliates, subsidiaries, and parent companies, and their respective officers, directors, employees, agents, information providers, and partners (collectively, the "Protected Parties") harmless from and against any actual or threatened suit, actions, proceedings (at law or in equity), claims, damages, payments, deficiencies, fines, judgments, settlements, liabilities, losses, costs, and expenses (including reasonable attorneys' fees, costs, penalties, interest, and disbursements) arising from or related to (a) your conduct with respect to the Services and/or (b) violation (or alleged violation) of these Terms by you or any other person accessing the Site or Services on your behalf. Under no circumstance will YumEats be liable for damages of any kind that result from your use of, or the inability to use, the Services.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Please note that some jurisdictions limit the extent to which a party may indemnify another. As such, this provision will apply to you to the extent permitted by applicable law.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-screenwise-navy mb-4">TERM & TERMINATION</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    YumEats may, from time to time, but is in no way obligated to, permit you to access and use this Site and the Services in accordance with these Terms of Use and in the manner more particularly set out herein. You acknowledge and agree (i) that access to this Site and the Services may not be available from time to time, may be amended, revised, replaced, suspended or terminated in whole or in part at any time and without notice, and (ii) that YumEats shall not, in any event, be responsible to you in any way should you be unable to access this Site and the Services at any time or from time to time. We may terminate these Terms of Use for convenience with no notice to you.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Upon termination of these Terms of Use, you shall immediately cease and desist from all use of this Site and the Services.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-screenwise-navy mb-4">CHANGES</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You are responsible for reviewing these Terms regularly. YumEats reserves the right, at any time, without notice to you, and in its sole discretion, to modify or discontinue the Services, these Terms, or any of our policies related to use of the Services. We will not amend Section 1 (Dispute Resolution), in a manner that adversely affects your rights or responsibilities in a material manner unless we give you a right to reject the amendment and/or the Class Action Waiver in its entirety. Revisions to these Terms or our policies may be provided through the Services, including by posting the revisions on the Services and updating the "Last Updated" date. Continued use of the Services following such modifications to the Services, these Terms, additional terms and conditions for any service, or our other policies will constitute your acceptance of such modifications and revisions.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-screenwise-navy mb-4">MISCELLANEOUS</h3>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Entire Agreement</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    These Terms constitute the entire agreement of the parties with respect to the subject matter hereof and supersede all previous written or oral agreements between the parties with respect to such subject matter. No waiver by either party of any breach or default hereunder shall be deemed to be a waiver of any preceding or subsequent breach or default.
                  </p>
                  
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Headings</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The section headings used in these Terms shall not be given any legal import.
                  </p>
                  
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Assignment</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    These Terms of Use are not assignable, transferable, or sublicensable by you except with YumEats's prior written consent. YumEats may assign its rights and duties under these Terms of Use at any time without notice to you.
                  </p>
                  
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Waiver</h4>
                  <p className="text-gray-700 leading-relaxed">
                    No waiver by either party of any breach or default hereunder shall be deemed to be a waiver of any preceding or subsequent breach or default.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-screenwise-navy mb-4">CONTACT INFORMATION</h3>
                  <p className="text-gray-700 leading-relaxed">
                    If you need to contact us regarding this Site, the Services or these Terms of Use you can contact YumEats at screenwiseeating@gmail.com.
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

export default TermsOfUse;
