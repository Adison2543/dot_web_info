import React from 'react';
import { useTranslation } from 'react-i18next';


const CourseDetailC2 = () => {
    const {t} = useTranslation();
    let publicUrl = process.env.PUBLIC_URL + '/';
    let course_code="C2";

    return <div>
        <div className="pd-top-60">
            <div className="container">
                <div className="row pd-bottom-70" >
                    <div className="col-12 col-md-3">
                    <img className="" src={publicUrl+'assets/img/course/'+course_code+'.jpg'} style={{objectFit: 'cover'}} width={180}  alt={"img-" + course_code} />
                    </div>
                    <div className="col-12 col-md-9 py-2">
                        <h3 className="fw-bold fs-4">C2 - ລົດຂົນສົ່ງສິນຄ້ານ້ຳໜັກລວມ ເກີນກວ່າ 15000 ກິໂລກຣາມ
                            <br/> Cargo truck total weight exceed 15000 kilograms
                        </h3>
                        <br/>
                        <div className='fs-5 fw-bold'>ໄລຍະເວລາ ການຝຶກອົບຮົມຫຼັກສູດ 40 ຊົ່ວໂມງ</div>
                            <p>
                                -ພາກທິດສະດີ 15 ຊົ່ວໂມງ
                                <br/>-ພາກປະຕິບັດ 25 ຊົ່ວໂມງ.
                            </p>
                            <p>
                                * ບັນຍາຍໃນຫ້ອງສຳລັບທິດສະດີ
                                <br/>* ຝຶກຊ້ອມໃນສະໜາມຝຶກຊ້ອມ ແລະ ຝຶກຂັບຂີ່ໃນຖະໜົນຈິງ.
                            </p>
                    </div>
                </div>
                <div className="row justify-content-center" >
                    <div className='fs-5 col-12 col-md-3 fw-bold'>ວິທີການປະເມີນຜົນ :</div>
                    <div className="col-12 col-md-9 py-2">
                        -ການທົດສອບຄວາມຮູ້ຫຼັງຝຶກອົບຮົມ
                        <br/>-ການທົດສອບທັກສະປະຕິບັດ.
                        <br/>-ກວດເວລາໃນການເຂົ້າຮ່ວມຝຶກອົບຮົມ.
                        
                    </div>
                </div>
                <div className="row justify-content-center" >
                    <div className='fs-5 col-12 col-md-3 fw-bold'>ເກນການປະເມີນຜົນ :</div>
                    <div className="col-12 col-md-9 py-2">
                        -ມີຄະແນນສອບເສັງຄວາມຮູ້ພາຍຫຼັງການຝຶກອົບຮົມ. ບໍ່ຕ່ຳກວ່າ 90 ເປີເຊັນ.
                            <br/>-ຜ່ານການສອບເສັງພາກປະຕິບັດ ບໍ່ຕ່ຳກວ່າ 3 ທ່າບັງຄັບ
                    </div>
                </div>
                <div className="row justify-content-center" >
                    <div className='fs-5 col-12 col-md-3 fw-bold'>ຄຸນສົມບັດຂອງນັກຮຽນ :</div>
                    <div className="col-12 col-md-9 py-2">
                    - ອາຍຸ 28 ປີຂື້ນໄປ
                    <br/> -ມີໃບຂັບຂີ່ປະເພດ C1 ມາກ່ອນຢ່າງໜ້ອຍ 2 ປີ
    <br/> -ສາມາດອ່ານ ແລະ ຂຽນໄດ້
    <br/> -ມີຄວາມຮູ້ຕາມຂໍ້ບັງຄັບຂອງກົດໝາຍກ່ຽວກັບການຂົນສົ່ງ ແລະ ກົດຈະລາຈອນ
    <br/> -ບໍ່ເປັນຄົນພິການທາງຮ່າງກາຍ ຂັ້ນບໍ່ສາມາດຂີ່ລົດໄດ້.
    <br/> -ບໍ່ມີພະຍາດປະຈຳຕົວທີ່ແພດພິຈາລະນາວ່າອາດເປັນອັນຕະລາຍໃນເວລາຂັບຂີ່.
    <br/> -ບໍ່ເປັນຄົນເຈັບປ່ວຍທາງຈິດ
    <br/> -ບໍ່ເປັນຜູ້ທີ່ຢູ່ລະຫວ່າງ ຖືກຍຶດຫຼືຖືກໂຈະ ໃບຂັບຂີ່.
    <br/> -ບໍ່ເຄີຍຖືກຖອນໃບຂັບຂີ່ ພາຍໃນ3 ປີຜ່ານມາ, ຍ້ອນເຫດຜົນອື່ນໆ ທີ່ບໍ່ແມ່ນຂາດຄຸນສົມບັດກ່ຽວກັບອາຍຸ. ທັງນີ້ຜູ້ອໍານວຍການຈະຕ້ອງກໍານົດເງື່ອນໄຂໃນການພິຈາລະນາອອກໃບຂັບຂີ່.

                    </div>
                </div>
                <div className="row justify-content-center" >
                    <div className='fs-5 col-12 col-md-3 fw-bold'>ຈຸດປະສົງຂອງຫຼັກສູດ :</div>
                    <div className="col-12 col-md-9 py-2">
                    - ມີທັດສະນະຄະຕິ ແລະ ຈິດສໍານຶກ ທີ່ດີໃນການຂັບລົດຂົນສົ່ງສິນຄ້າໃຫ້ປອດໄພ
    <br/> -ມີຄວາມຮູ້ໃນການກະກຽມສະພາບຮ່າງກາຍ ແລະ ຈິດໃຈຂອງຜູ້ຂັບຂີ່ລົດບັນທຸກ.
    <br/> -ມີຄວາມຮູ້ ແລະ ຄວາມສາມາດໃນການກະກຽມລົດບັນທຸກເພື່ອຂົນສົ່ງສິນຄ້າ.
   <br/> -ມີຄວາມຮູ້ ແລະ ຄວາມສາມາດ ໃນການຂັບຂີ່ລົດບັນທຸກສິນຄ້າຢ່າງປອດໄພ
   <br/> -ມີຄວາມຊໍານານໃນການປະເມີນ, ຄວບຄຸມ, ແລະແກ້ໄຂສະຖານະການສຸກເສີນ.
   <br/> -ສາມາດບໍລິຫານຈັດການຄວາມເມື່ອຍລ້າ
   <br/> -ມີຄວາມສາມາດໃນການປະເມີນຄວາມສ່ຽງທີ່ສົ່ງຜົນ ຕໍ່ການເກີດອຸປະຕິເຫດ.
   <br/> -ມີຄວາມຮູ້ ແລະ ຄວາມເຂົ້າໃຈກ່ຽວກັບການບໍລິການຂົນສົ່ງສາທາລະນະ.
   <br/> -ເພື່ອໃຫ້ມີຄວາມຮູ້ກ່ຽວກັບກົດລະບຽບຈະລາຈອນ ແລະກົດໝາຍທີ່ກ່ຽວຂ້ອງ
  <br/> -ເພື່ອໃຫ້ມີລະບຽບວິໄນ ແລະ ມາລະຍາດໃນການຂັບລົດ.
  <br/> -ເພື່ອໃຫ້ມີຄວາມຮູ້ໃນການບັນທຸກ ແລະ ມັດຕຶງສິນຄ້າ
   <br/> -ເພື່ອໃຫ້ມີຄວາມຮູ້ ດ້ານການປະຖົມພະຍາບານ ແລະ ຊ່ວຍເຫຼືອເບື້ອງຕົ້ນ.



                    </div>
                </div>

                <table className='table table-bordered'>
                    <thead className='thead-light'>
                    <tr>
                        <th rowSpan={2}>ຫົວຂໍ້ວິຊາ</th>
                        <th colSpan={2} style={{"text-align":"center"}}>ຊົ່ວໂມງ</th>
                    </tr>
                    <tr>
                        <th width={30}>ທິດສະດີ</th>
                        <th width={30}>ປະຕິບັດ</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1. ທັດສະນະຄະຕິ ແລະ ຈິດສໍານຶກ ໃນການຂັບລົດຂົນສົ່ງສິນຄ້າຢ່າງປອດໄພ
       <ul>
       - ສະພາບອຸບັດເຫດ ຂອງປະເທດລາວ
   <br/> -ປັດໄຈທີ່ສົ່ງຜົນຕໍ່ການເກີດອຸປະຕິເຫດ
   <br/> -ສາເຫດຂອງການເກີດອຸບັດຕິເຫດ
   <br/> -ປັດຊະຍາ, ແນວຄວາມຄິດ ແລະ ທັດສະນະຄະຕິ ໃນການຂັບຂີ່ປອດໄພ

       </ul>

                        </td>
                        <td>0.5</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>2. ການກຽມຄວາມພ້ອມດ້ານຮ່າງກາຍແລະຈິດໃຈ ແລະການບໍລິຫານຈັດການຄວາມເມື່ອຍລ້າສໍາລັບຜູ້ຂັບລົດບັນທຸກ
                           <ul>
                           - ສະມາທິ ແລະ ຄວາມພ້ອມຂອງຮ່າງກາຍ ແລະ ຈິດໃຈ
   <br/> -ການບໍລິຫານຈັດການຄວາມເມື່ອຍລ້າ
   <br/> -ກວດກາຄວາມພ້ອມຂອງຮ່າງກາຍກ່ອນປະຕິບັດງານ.

                           </ul>
                        </td>
                        <td>0.5</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>3. ການກະກຽມລົດບັນທຸກຂົນສົ່ງສິນຄ້າ ການກວດສອບສະພາບລົດກ່ອນການນໍາໃຊ້ (Check Before Driving)
<ul>
 -ກວດສອບລະບົບເບກ ແລະ clutch
    <br/> -ກວດສອບລະບົບໄຟຟ້າ
    <br/> -ກວດສອບລະດັບນ້ໍາໃນ ໝໍ້ນ້ຳ ແລະໝໍ້ພັກ.
    <br/> -ກວດສອບຄວາມດັນຂອງຢາງລົດ, ຄວາມດັນເບກ
    <br/> -ກວດສອບລະບົບນໍ້າມັນເຊື້ອໄຟ
    <br/> -ກວດສອບນ້ໍາມັນລໍ່ລື້ນ
<br/> -ກວດສອບສຽງດັງຕາມຈຸດຕ່າງໆ
<br/> 3.1 ລະບົບການຈັດການກວດເຊັກລົດປະຈໍາວັນ ແລະການບໍາລຸງຮັກສາຕາມໄລຍະ

</ul>
                        </td>
                        <td>1</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>4. ພື້ນຖານການຂັບລົດຂົນສົ່ງສິນຄ້າຢ່າງປອດໄພ
<ul>
- ການກຽມຕົວກ່ອນການອອກລົດ 8 ຂັ້ນຕອນ
    <br/> -ທິດສະດີການຂັບລົດຢ່າງປອດໄພ
    <br/> -ການໃຊ້ອຸປະກອນຄວບຄຸມລົດ
    <br/> -ທ່ານັ່ງຂັບລົດ
    <br/> -ການໃສ່ເຂັມຂັດນິລະໄພ
    <br/> -ການສະຕາດເຄື່ອງຈັກ
    <br/> -ເຕັກນິກການກວາດສາຍຕາຢ່າງປອດໄພ
    <br/> -ການໃຊ້ຕາເບິ່ງໃນຂະນະຂັບລົດ
    <br/> -ການປັບມຸມກະຈົກ
    <br/> -ເຕັກນິກການເບິ່ງຢູ່ໃນກະຈົກ / ຈຸດບອດ, ຈຸດອັບ ຂອງສາຍຕາ
    <br/> -ການກວດສອບການຈະລາຈອນ
    <br/> -ການອອກລົດທີ່ປອດໄພ
    <br/> -ການຄວບຄຸມພວງມາໄລ
    <br/> -ການຈອດແລະຢຸດລົດ
    <br/> -ກາມຈອດລົດແຄມທາງ
    <br/> -ການເບກ
    <br/> -ໄລຍະຕາມລົດ 
    <br/> -ເຕັກນິກການຂັບລົດເຂົ້າໂຄ້ງ ຫຼື ວົງລ້ຽວ
    <br/> -ການຂັບລົດເຂົ້າທາງໂຄ້ງ
    <br/> -ການຂັບລົດຢູ່ເທິງທາງຄ້ອຍຊັນ
    <br/> -ການແຊງທີ່ປອດໄພ
<br/> -ການນໍາໃຊ້ ທາງຕັດ ທາງແຍກ / ການລ້ຽວກັບລົດ / ການລ້ຽວກັບລົດໃນຊຸມຊົນ

</ul>

                        </td>
                        <td>3</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>5. ການປະເມີນ, ຄວບຄຸມ ແລະ ແກ້ໄຂສະຖານະການບໍ່ປົກກະຕິ
        <ul>
        - ການຂັບລົດຖອຍຫຼັງຈາກທີ່ແອອັດ
    <br/> -ການຂັບລົດໃນເວລາຝົນຕົກໜັກ
    <br/> -ການຂັບລົດຫຼັງຝົນຢຸດຕົກ
    <br/> -ການຂັບລົດໃນຕອນກາງຄືນ
    <br/> -ການຂັບລົດເມື່ອມີສັນຍານນໍ້າຖ້ວມທາງກະທັນຫັນ
    <br/> -ການຂັບລົດຢູ່ທາງດິນ ຫຼື ຕົມ
    <br/> -ການຂັບລົດຢູ່ທາງເປັນຫຼຸມເປັນບໍ
    <br/> -ການຂັບລົດປະເຊີນກັບລົມແຮງ
    <br/> -ການຂັບລົດຜ່ານພະຍຸຝຸ່ນແລະກຸ່ມຄວັນໄຟ
    <br/> -ການຂັບລົດໃນລະດູໜາວທີ່ມີໝອກໜາ
    <br/> -ການຂັບລົດໃນເວລານໍ້າຖ້ວມຂັງ
    <br/> -ການຂັບລົດຖອຍຫຼັງໃນທາງຊື່
    <br/> -ການຂັບລົດຂຶ້ນ ແລະ ລົງ ຄ້ອຍຊັນ
    <br/> -ການປະຕິບັດການຢູ່ຈຸດເກີດເຫດ

        </ul>
                           
                        </td>
                        <td>4</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>6. ແຮງທີ່ກະທໍາກັບຕົວລົດ, ການບັນທຸກ ແລະ ມັດຕຶງສິນຄ້າ
                       <ul>
                       - ຄວາມຫມາຍແລະຫຼັກການຂອງຄວາມແຮງ
    <br/> -ອັດຕາສ່ວນຂອງແຮງທີ່ກະທຳຕໍ່ລົດ / ທິດທາງທີ່ກະທຳຕໍ່ລົດ
    <br/> -ການກະຈາຍນ້ໍາໜັກບັນທຸກ
    <br/> -ຈຸດສູນຖ່ວງຂອງລົດບັນທຸກຂອງແຫຼວ
    <br/> -ການບັນທຸກ ແລະ ມັດຕຶງສິນຄ້າ
    <br/> -ນ້ໍາໜັກລົງໃສ່ເພົາຂອງລົດບັນທຸກ
    <br/> -ອຸປະກອນ ສາຍມັດ ສິນຄ້າ

                       </ul>
                        </td>
                        <td>3</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>7. ການຂົນສົ່ງສິນຄ້າອັນຕະລາຍ  
                            <ul>
                            - ຄວາມໝາຍ ອັກສອນຫຍໍ້ຂອງ ວັດຖຸອັນຕະລາຍ
     <br/> -ສະຖານະ ແລະ ຮູບແບບຂອງ ວັດຖຸອັນຕະລາຍ
     <br/> -ປະເພດຂອງວັດຖຸອັນຕະລາຍ
     <br/> -ການຈັດແຍກຂົນສົ່ງວັດຖຸອັນຕະລາຍ
     <br/> -ການຈໍາແນກປະເພດສິນຄ້າວັດຖຸອັນຕະລາຍ
     <br/> -ການບັນຈຸຫີບຫໍ່
     <br/> -ລະຫັດການບັນຈຸຫີບຫໍ່ / ຮູບແບບບັນຈຸພັນ
     <br/> -ລົດ ແລະ ຊະນິດຂອງການຂົນສົ່ງ
     <br/> -ການຕິດເຄື່ອງໝາຍສັນຍາຫີບຫໍ່ / ຄວາມຫມາຍຕົວເລກ
     <br/> -ເອກະສານທີ່ຕ້ອງມີໄວ້ໃນລົດ /TREMCARD/MSDS
     <br/> -ຂໍ້ຄວນປະຕິບັດຂອງຜູ້ຂັບລົດຂົນສົ່ງສິນຄ້າອັນຕະລາຍ
     <br/> -ການທໍາຄວາມສະອາດລົດຂົນສົ່ງວັດຖຸອັນຕະລາຍ
     <br/> -ການຈັດການເມື່ອເກີດອຸປະຕິເຫດ


                            </ul>
                            </td>
                        <td>2</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>8. ສັນຍານຈະລາຈອນ ແລະ ເຄື່ອງໝາຍຈະລາຈອນ
                            <ul>
                            - ສັນຍານຈະລາຈອນ
    <br/> -ເຄື່ອງໝາຍຈະລາຈອນ
    <br/> -ກົດຫມາຍຈະລາຈອນ, ການກະທໍາຜິດ, ບົດລົງໂທດ, ທິດສະດີແບບປະຕິບັດ, ອະທິບາຍພ້ອມທົດສອບ


                            </ul>
                        </td>
                        <td>1</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>9. ທົດສອບການຂັບລົດໃນທ່າຕ່າງໆ ແລະທົດສອບການຂັບລົດໃນຖະໜົນຈິງ</td>
                        <td>-</td>
                        <td>23</td>
                    </tr>

                    </tbody>
                </table>

                <hr className='mt-5 border border-dark' />
            </div>
        </div>

    </div>
}

export default CourseDetailC2

