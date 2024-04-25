import React from "react";
import Navbar from "./global-components/navbar-use2";
import PageHeader from "./global-components/page-header";
import Footer from "./global-components/footer-use";
import { useTranslation } from 'react-i18next';


const Policy = () => {
  const {t} = useTranslation();
  if(t("cur_lang")=='lo'){
    return (
      <div>
        <Navbar />
        <PageHeader headertitle={t('lnk_term_policy')} />
  
        <div className="contact-list">
          <div className="container">
            <div className="p-4">
              <strong>ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວ</strong>
              <p className="px-3">
                ກົມຂົນສົ່ງ, ກະຊວງໂຍທາທີການແລະຂົນສົ່ງ ສປປ ລາວ, ໄດ້ສ້າງ ເວັບໄຊທ໌ ແລະ ແອັບ DoT Smart App ນີ້ໃຫ້ເປັນແອັບຟຣີ. 
                ບໍລິການນີ້ແມ່ນເຮັດຂື້ນມາໃຫ້ທ່ານໄດ້ໃຊ້ງານໄດ້ໂດຍບໍ່ເສຍຄ່າ ເຊິ່ງຈະໃຊ້ໄດ້ຕາມຄວາມສາມາດທີ່ມັນມີເທົ່ານັ້ນ. 
                ເວັບໜ້ານີ້ໃຊ້ສຳລັບແຈ້ງບອກຜູ້ທີ່ເຂົ້າມາເບິ່ງ ແລະ ເຂົ້າມາໃຊ້ ເວັບແລະແອັບຂອງພວກເຮົາ ກ່ຽວກັບນະໂຍບາຍໃນການເກັບຂໍ້ມູນ, ການນຳໃຊ້ຂໍ້ມູນ, ແລະ ການເປີດເຜີຍຂໍ້ມູນ ທີ່ເປັນຂໍ້ມູນສ່ວນຕົວ
                ຂອງຜູ້ທີ່ເລືອກທີ່ຈະໃຊ້ບໍລິການຂອງພວກເຮົາແລ້ວ. ຖ້າທ່ານເລືອກທີ່ຈະໃຊ້ບໍລິການຂອງພວກເຮົາ, ນັ້ນໝາຍຄວາມວ່າ ທ່ານໄດ້ຕົກລົງໃນການເກັບຂໍ້ມູນ, ນຳໃຊ້ຂໍ້ມູນ ແລະ ເປີດເຜີຍຂໍ້ມູນ ທີ່ໄດ້ຂຽນໄວ້ໃນນະໂຍບາຍນີ້.
                ຂໍ້ມູນສ່ວນຕົວ ທີ່ພວກເຮົາເກັບນີ້ ແມ່ນໃຊ້ສຳລັບກັນໃຫ້ບໍລິການແກ່ທ່ານ ແລະ ປັບປຸງການບໍລິການຂອງເຮົາໃຫ້ດີຂື້ນ. 
                ພວກເຮົາຈະບໍ່ເປີດເຜີຍຂໍ້ມູນສ່ວນຕົວ ໃຫ້ບຸກຄົນທີສາມໂດຍບໍ່ຈຳເປັນ ແລະ ນອກເໜືອຈາກທີ່ໄດ້ລະບຸໄວ້ໃນນະໂຍບາຍຄວາມເປັນສ່ວນຕົວນີ້. 
                ຄຳສັບທີ່ໃຊ້ໃນນະໂຍບາຍຄວາມເປັນສ່ວນຕົວນີ້ ຈະມີຄວາມໝາຍອັນດຽວກັນກັບ ຄຳສັບທີ່ໃຊ້ໃນ ເງືອນໄຂການນຳໃຊ້ຂອງ ເວັບ ຫຼື ແອັບ DoT Smart App
                ນອກຈາກວ່າມັນຈະຖືກນິຍາມຕື່ມໃນນະໂຍບາຍນີ້.
              </p>
  
              <p><strong>ການເກັບກຳ ແລະ ການນຳໃຊ້ ຂໍ້ມູນ</strong></p>
  
              <p className="px-3">
                ເພື່ອໃຫ້ສາມາດນຳໃຊ້ໄດ້ສະດວກ ແລະ ມີປະສົບການທີ່ດີຂື້ນ, ໃນຕອນທີ່ທ່ານໃຊ້ບໍລິການຂອງພວກເຮົາ, ພວກເຮົາອາດຈະໃຫ້ທ່ານປ້ອນຂໍ້ມູນທີ່ເປັນສ່ວນຕົວ
                ທີ່ສາມາດຢັ້ງຢືນວ່າເປັນຕົວທ່ານແທ້, ເຊິ່ງອາດຈະລວມມີ ຊື່, ນາມສະກຸນ, ເບີໂທ, ອີເມລ, ເລກປະຈຳຕົວ. ເຊິ່ງເຮົາຈະເກັບຮັກສາຂໍ້ມູນສຳຄັນດັ່ງກ່າວໄວ້ ຕາມທີ່ໄດ້ອະທິບາຍໄວ້ໃນນະໂຍບາຍຄວາມເປັນສ່ວນຕົວນີ້.
              </p>
  
              <p><strong>ຂໍ້ມູນ Log</strong></p>
  
              <p className="px-3">
                ພວກເຮົາຂໍແຈ້ງໄວ້ວ່າ ໃນຂະນະທີ່ທ່ານນຳໃຊ້ບໍລິການຂອງພວກເຮົາ, ໂດຍສະເພາະເວລາເກີດມີບັນຫາຂອງລະບົບ ຕົວຢ່າງ ເປັນ Error ໃນເວັບ ຫຼື ແອັບ, 
                ພວກເຮົາຈະໄດ້ເກັບຂໍ້ມູນຂອງເຄື່ອງ ຫຼື ຂອງມືຖື (ຜ່ານບໍລິການຂອງຜູ້ໃຫ້ບໍລິການທີສາມ) ເຊິ່ງເອີ້ນວ່າ ຂໍ້ມູນLog. ຂໍ້ມູນLog ນີ້ ອາດຈະລວມມີຂໍ້ມູນເຊັ່ນ: ທີ່ຢູ່ IP ຂອງເຄື່ອງຂອງທ່ານ, ຊື່ເຄື່ອງ, 
                ລະບົບປະຕິບັດການທີ່ໃຊ້, ການຕັ້ງຄ່າຂອງແອັບໃນຂະນະໃຊ້ງານ, ວັນ ເວລາ ທີ່ທ່ານໃຊ້, ແລະ ຂໍ້ມູນສະຖິຕິອື່ນໆ.
              </p>
  
              <p><strong>ການໃຊ້ Cookies</strong></p>
  
              <p className="px-3">
                Cookies ເປັນໄຟລ໌ຂໍ້ມູນນ້ອຍໆ ທີ່ໃຊ້ໃນການຈຳແນກຕົວຕົນຂອງເຄື່ອງຫຼືຜູ້ໃຊ້ ໂດຍບໍ່ຈຳເປັນຕ້ອງຮູ້ຕົວຈິງ. 
                ມັນຖືກໃຊ້ໃນ ເວັບ browser ຂອງທ່ານ ຈາກເວັບທີ່ທ່ານເຂົ້າເບິ່ງ ແລະ ເກັບໄວ້ໃນຄວາມຈຳຂອງເຄື່ອງຂອງທ່ານ. ບໍລິການຂອງພວກເຮົາກໍ່ໄດ້ນຳໃຊ້ມັນເຊັນກັນ, ນອກນີ້ມັນຍັງອາດຈະຖືກນຳໃຊ້ໂດຍ
                code ແລະ libraries ທີ່ເຮົາຕໍ່ຫາ, ເຊິ່ງອາດຖືກໃຊ້ໃນການເກັບຂໍ້ມູນ ແລະ ປັບປຸງບໍລິການຂອງເຂົາເຈົ້າ.
                ທ່ານສາມາດເລືອກໄດ້ທີ່ຈະຍ້ອມຮັບ ຫຼື ປະຕິເສດ cookies ໃນຕອນທີ່ມັນຖືກສົ່ງໄປຫາເຄື່ອງຂອງທ່ານ. 
                ຖ້າທ່ານປະຕິເສດ cookies ຂອງພວກເຮົາ, ບາງພາກສ່ວນຂອງເວັບ ຫຼື ແອັບ ອາດຈະເຮັດວຽກບໍ່ໄດ້ຕາມທີ່ຄາດໝາຍ.
              </p>
  
              <p><strong>ຜູ້ໃຫ້ບໍລິການເສີມ</strong></p>
  
              <p className="px-3">
                ພວກເຮົາອາດຈະໃຊ້ບໍລິການຂອງບຸກຄົນທີສາມ ຫຼື ບໍລິສັດອື່ນ ເພື່ອໃຫ້ບໍລິການ, ຍ້ອນເຫດຜົນຕໍ່ໄປນີ້:
                <ul>
                  <li>ເພື່ອອຳນວຍຄວາມສະດວກໃຫ້ບໍລິການຂອງພວກເຮົາ;</li>
                  <li>ເພື່ອໃຫ້ເຂົາເຈົ້າບໍລິການບາງພາກສ່ວນແທນພວກເຮົາ;</li>
                  <li>ເພື່ອເຮັດວຽກອັນສະເພາະເຈາະຈົງໃດໜຶ່ງກ່ຽວກັບບໍລິການຂອງພວກເຮົາ; ຫຼື</li>
                  <li>ເພື່ອຊ່ວຍພວກເຮົາວິເຄາະ ການນຳໃຊ້ບໍລິການຂອງພວກເຮົາ.</li>
                </ul>
                ພວກເຮົາຂໍ້ແຈ້ງໄວ້ວ່າ ບໍລິການຂອງບຸກຄົນທີສາມທີ່ເຮົາໃຊ້ ກໍ່ສາມາດເຂົ້າເຖິງຂໍ້ມູນສ່ວນຕົວຂອງທ່ານເຊັ່ນກັນ, 
                ເຫດຜົນຫຼັກແມ່ນຍ້ອນ ມັນຕ້ອງໄດ້ເຮັດວຽກກ່ຽວຂໍ້ມູນນັ້ນ ແທນພວກເຮົາ, ແຕ່ພວກເຂົາກໍ່ມີຂໍ້ບັງຄັບ ບໍ່ເປີດເຜີຍ ແລະ 
                ນຳໃຊ້ໄດ້ສຳລັບຈຸດປະສົງສະເພາະເທົ່ານັ້ນ.
              </p>
              
              <p><strong>ຄວາມປອດໄພ</strong></p>
  
              <p className="px-3">
                ພວກເຮົາໃຫ້ຄວາມສຳຄັນໃນຄວາມເຊື່ອໃຈທີ່ທ່ານໃຫ້ຂໍ້ມູນສ່ວນຕົວແກ່ພວກເຮົາ, ພວກເຮົາຈະເກັບຮັກສາມັນໄວ້ເປັນຢ່າງດີ. 
                ແຕ່ແນວໃດກໍ່ຕາມ ໃນໂລກອິນເຕີນັດ ຍັງບໍ່ມີວິທີໃດທີ່ສາມາດ ສົ່ງ-ຮັບ ແລະ ເກັບຮັກສາ ຂໍ້ມູນໄວ້ໄດ້ດີ  100%, 
                ສະນັ້ນພວກເຮົາຈຶ່ງບໍ່ສາມາດກະລັນຕີຄວາມປອດໄພໄດ້ 100%.
              </p>
  
              <p>
                <strong>ລິງຄ໌ເຊື່ອມຕໍ່ໄປເວັບອື່ນ</strong>
              </p>
  
              <p className="px-3">
                ການບໍລິການນີ້ ອາດຈະມີລິງຄ໌ເຊື່ອມຕໍ່ອອກໄປເວັບອື່ນໆ, ຖ້າທ່ານກົດລິງຄ໌ຂອງເວັບອື່ນ ທ່ານກໍ່ຈະຖືກເປີດໄປເວັບນັ້ນໆ, 
                ກະລຸນາຮັບຮູ້ໄວ້ວ່າເວັບອື່ນໆແມ່ນຢູ່ນອກເໜືອຈາກທີ່ເຮົາຈັດການໄດ້, ສະນັ້ນທ່ານຄວນຈະເຂົ້າໃຈກ່ຽວກັບ ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວຂອງເຂົາເຈົ້າເຊັ່ນກັນ.
                ພວກເຮົາບໍ່ສາມາດຄວບຄຸມ ແລະ ບໍ່ສາມາດຮັບຜິດຊອບຜົນທີ່ເກີດຈາກການນຳໃຊ້ ເນື້ອຫາ ຫຼື ເວັບໄຊທ໌ ຫຼື ບໍລິການ ຂອງເວັບບຸກຄົນທີສາມອື່ນໆ.
              </p>
  
              <p>
                <strong>ຄວາມເປັນສ່ວນຕົວຂອງເດັກນ້ອຍ</strong>
              </p>
  
              <p className="px-3">
                  ພວກເຮົາບໍ່ສາມາດຮູ້ໄດ້ວ່າ ຂໍ້ມູນສ່ວນຕົວທີ່ເກັບນັ້ນເປັນຂອງເດັກນ້ອຍຫຼື ບໍ, ພວກເຮົາແນະນຳບໍ່ໃຫ້ຜູ້ທີ່ເປັນເດັກນ້ອຍ ສະໜອງຂໍ້ມູນສ່ວນຕົວໃດໆທີ່ໃຫ້ແກ່ແອັບ ຫຼື ບໍລິການ. 
                  ພໍ່ ແມ່ນ ຫຼື ຜູ້ປົກຄອງ ຕ້ອງຊ່ວຍເບິ່ງແຍງ ແລະ ລະວັງ ການນຳໃຊ້ອິນເຕີເນັດຂອງເດັກນ້ອຍ ແລະ ບໍ່ໃຫ້ເຂົາເຈົ້າປ້ອນຂໍ້ມູນສ່ວນຕົວເຂົ້າ ແອັບ ຫຼື ບໍລິການໃດໆໃນອິນເຕີເນັດ ໂດຍພະລະການ.
                  ຖ້າທ່ານເຫັນວ່າ ລູກຂອງທ່ານໄດ້ປ້ອນຂໍ້ມູນສ່ວນຕົວເຂົ້າ ແອັບ ຫຼື ເວັບຂອງພວກເຮົາ, ທ່ານສາມາດຕິດຕໍ່ພວກເຮົາໃຫ້ ປັບປຸງ ຫຼື ລຶບອອກ.
                  ຢ່າງນ້ອຍຕ້ອງອາຍຸ 15 ປີ ຈຶ່ງຖືວ່າສາມາດປ້ອນຂໍ້ມູນສ່ວນຕົວໄດ້ເອງ.
                </p>
  
              <p>
                <strong>ການປ່ຽນແປງ ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວນີ້</strong>
              </p>
  
              <p className="px-3">
                ພວກເຮົາອາດມີການດັດແກ້ ປັບປຸງ ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວຂອງເຮົາ ໃນແຕ່ລະໄລຍະ. ສະນັ້ນ ຈິ່ງແນະນຳໃຫ້ທ່ານຮັບຮູ້ ແລະ ເຂົ້າມາອ່ານໜ້ານີ້ເປັນແຕ່ລະໄລຍະ, 
                ພວກເຮົາຈະອັບເດດ ແລະ ແຈ້ງລາຍລະອຽດໃນໜ້າ ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວ ນີ້.
              </p>
            </div>
            <hr className='mt-5 border border-dark' />
          </div>
        </div>
  
        <Footer />
      </div>
    );
  }
  else
    return (
    <div>
      <Navbar />
      <PageHeader headertitle={t('lnk_term_policy')} />

      <div className="contact-list">
        <div className="container">
          <div className="p-4">
            <strong>Privacy Policy</strong>
            <p className="px-3">
              Department of Transport, Ministry of Public Works and Transport Lao PDR, has built this website and the DoT Smart App as a
              Free app. This SERVICE is provided by Department of Transport, Lao PDR at no cost and is intended for use as is. 
              This page is used to inform visitors regarding our policies with
              the collection, use, and disclosure of Personal Information if
              anyone decided to use our Service. If you choose to use our Service, then you agree to the collection
              and use of information in relation to this policy. The Personal
              Information that we collect is used for providing and improving
              the Service. We will not use or share your information with anyone
              except as described in this Privacy Policy. The terms used in this Privacy Policy have the same meanings as in
              our Terms and Conditions, which are accessible at DoT Smart App
              unless otherwise defined in this Privacy Policy.
            </p>

            <p><strong>Information Collection and Use</strong></p>

            <p className="px-3">
              For a better experience, while using our Service, we may require
              you to provide us with certain personally identifiable
              information, including but not limited to Name, Phone number,
              email, ID number. The information that we request will be retained
              by us and used as described in this privacy policy.
            </p>

            <p><strong>Log Data</strong></p>

            <p className="px-3">
              We want to inform you that whenever you use our Service, in a case
              of an error in the app we collect data and information (through
              third-party products) on your phone called Log Data. This Log Data
              may include information such as your device Internet Protocol (IP)
              address, device name, operating system version, the configuration
              of the app when utilizing our Service, the time and date of your
              use of the Service, and other statistics.
            </p>

            <p><strong>Cookies</strong></p>

            <p className="px-3">
              Cookies are files with a small amount of data that are commonly
              used as anonymous unique identifiers. These are sent to your
              browser from the websites that you visit and are stored on your
              device's internal memory. This Service does not use these cookies explicitly. However, the
              app may use third-party code and libraries that use cookies to
              collect information and improve their services. You have the
              option to either accept or refuse these cookies and know when a
              cookie is being sent to your device. If you choose to refuse our
              cookies, you may not be able to use some portions of this Service.
            </p>

            <p><strong>Service Providers</strong></p>

            <p className="px-3">
              We may employ third-party companies and individuals due to the
              following reasons:
              <ul>
                <li>To facilitate our Service;</li>
                <li>To provide the Service on our behalf;</li>
                <li>To perform Service-related services; or</li>
                <li>To assist us in analyzing how our Service is used.</li>
              </ul>
              We want to inform users of this Service that these third parties
              have access to their Personal Information. The reason is to
              perform the tasks assigned to them on our behalf. However, they
              are obligated not to disclose or use the information for any other
              purpose.
            </p>
            
            <p><strong>Security</strong></p>

            <p className="px-3">
              We value your trust in providing us your Personal Information,
              thus we are striving to use commercially acceptable means of
              protecting it. But remember that no method of transmission over
              the internet, or method of electronic storage is 100% secure and
              reliable, and we cannot guarantee its absolute security.
            </p>

            <p>
              <strong>Links to Other Sites</strong>
            </p>

            <p className="px-3">
              This Service may contain links to other sites. If you click on a
              third-party link, you will be directed to that site. Note that
              these external sites are not operated by us. Therefore, we
              strongly advise you to review the Privacy Policy of these
              websites. We have no control over and assume no responsibility for
              the content, privacy policies, or practices of any third-party
              sites or services.
            </p>

            <p>
              <strong>Childrens Privacy</strong>
            </p>

            <p className="px-3">
                We do not knowingly collect personally identifiable information
                from children. We encourage all children to never submit any
                personally identifiable information through the Application
                and/or Services. We encourage parents and legal guardians to
                monitor their children's Internet usage and to help enforce this
                Policy by instructing their children never to provide personally
                identifiable information through the Application and/or Services
                without their permission. If you have reason to believe that a
                child has provided personally identifiable information to us
                through the Application and/or Services, please contact us. You
                must also be at least 15 years of age to consent to the
                processing of your personally identifiable information. This app is intended to use in Laos only.
              </p>

            <p>
              <strong>Changes to This Privacy Policy</strong>
            </p>

            <p className="px-3">
              We may update our Privacy Policy from time to time. Thus, you are
              advised to review this page periodically for any changes. We will
              notify you of any changes by posting the new Privacy Policy on
              this page.
            </p>
          </div>
          <hr className='mt-5 border border-dark' />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Policy;
