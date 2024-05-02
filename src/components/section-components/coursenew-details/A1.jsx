import React from 'react';
import { useTranslation } from 'react-i18next';


const CourseDetailA1 = () => {
    const {t} = useTranslation();
    let publicUrl = process.env.PUBLIC_URL + '/';
    let course_code="A1";

    return <div>
        <div className="pd-top-60">
            <div className="container">
                <div className="row pd-bottom-70" >
                    <div className="col-12 col-md-3">
                    <img className="" src={publicUrl+'assets/img/course/'+course_code+'.jpg'} style={{objectFit: 'cover'}} width={180}  alt={"img-" + course_code} />
                    </div>
                    <div className="col-12 col-md-9 py-2">
                        <h3 className="fw-bold fs-4">A1 - ລົດຈັກສອງລໍ້ ຄວາມແຮງ ແຕ່ 125 cc ຂື້ນໄປ
                            <br/> Two-wheels motorcycle engine 125 cc and above
                        </h3>
                        <br/>
                        <div className='fs-5 fw-bold'>ໄລຍະເວລາ ການຝຶກອົບຮົມຫຼັກສູດ 15 ຊົ່ວໂມງ</div>
                            <p>
                                -ພາກທິດສະດີ 5 ຊົ່ວໂມງ
                                <br/>-ພາກປະຕິບັດ 10 ຊົ່ວໂມງ, ຝຶກຊ້ອມຢູ່ສະໜາມຝຶກ 9 ຊົ່ວໂມງ, ຝຶກຢູ່ຖະໜົນຈິງ 1 ຊົ່ວໂມງ.
                            </p>
                       

                    </div>
                </div>
                <div className="row justify-content-center" >
                    <div className='fs-5 col-12 col-md-3 fw-bold'>ວິທີການປະເມີນຜົນ :</div>
                    <div className="col-12 col-md-9 py-2">
                    -ທົດສອບທິດສະດີ ແບບປາລະໄນ ໂດຍໃຊ້ຄຳຖາມທີ່ກົມຂົນສົ່ງສ້າງໄວ້
                                <br/>-ສອບເສັງພາກປະຕິບັດ ຢ່າງນ້ອຍ 3 ທ່າເສັງ ຕາມທີ່ກົມຂົນສົ່ງກຳນົດ.
                    </div>
                </div>
                <div className="row justify-content-center" >
                    <div className='fs-5 col-12 col-md-3 fw-bold'>ເກນການປະເມີນຜົນ :</div>
                    <div className="col-12 col-md-9 py-2">
                    -ນັກຮຽນຕ້ອງມີເວລາຮຽນຄົບ 100 ເປີເຊັນ.
                            <br/>-ອັດຕາສ່ວນລະຫວ່າງທິດສະດີ : ພາກປະຕິບັດແມ່ນ 1:2
                            <br/>-ເງື່ອນໄຂການເສັງຜ່ານຫຼັກສູດ: 90 ເປີເຊັນ
                    </div>
                </div>
                <div className="row justify-content-center" >
                    <div className='fs-5 col-12 col-md-3 fw-bold'>ຄຸນສົມບັດຂອງນັກຮຽນ :</div>
                    <div className="col-12 col-md-9 py-2">
                            -ອາຍຸ 18 ປີ ຂື້ນໄປ
                            <br/>-ບໍ່ເປັນຄົນພິການທາງຮ່າງກາຍ ຂັ້ນບໍ່ສາມາດຂີ່ລົດໄດ້.
                            <br/>-ບໍ່ມີພະຍາດປະຈຳຕົວທີ່ແພດພິຈາລະນາວ່າອາດເປັນອັນຕະລາຍໃນເວລາຂັບຂີ່.
                            <br/>-ບໍ່ເປັນຄົນເຈັບປ່ວຍທາງຈິດ
                            <br/>-ບໍ່ເປັນພະຍາດຕິດຕໍ່ທີ່ເປັນໜ້າລັງກຽດຕໍ່ຜູ້ພົບເຫັນ
                            <br/>-ສາມາດອ່ານ ແລະ ຂຽນໄດ້
                    </div>
                </div>
                <div className="row justify-content-center" >
                    <div className='fs-5 col-12 col-md-3 fw-bold'>ຈຸດປະສົງຂອງຫຼັກສູດ :</div>
                    <div className="col-12 col-md-9 py-2">
                        - ເພື່ອໃຫ້ມີຄວາມຮູ້ດ້ານກົດໝາຍຈະລາຈອນ ແລະກົດໝາຍທີ່ກ່ຽວຂ້ອງ
                            <br/>- ເພື່ອໃຫ້ມີທັກສະການຂັບຂີ່ທີ່ດີ, ທີ່ຖືກຕາມຫຼັກວິສະວະກຳ
                            <br/>- ເພື່ອນຳໃຊ້ຄວາມຮູ້ໃນການຂັບຂີ່ທີ່ປອດໄພ ແລະ ສາມາດສອບເສັງເອົາໃບຂັບຂີ່ໄດ້.
                            <br/>- ເພື່ອນຳໃຊ້ຄວາມຮູ້ໃນການປະຕິບັດ, ເມື່ອມີອຸປະຕິເຫດສຸກເສີນ ແລະ ຮູ້ຊ່ວຍເຫຼືອແລະປະຖົມພະຍາບານຂັ້ນຕົ້ນ.
                            <br/>- ເພື່ອຮຽນຮູ້ກ່ຽວກັບຈຸດບອດແລະຈຸດອັນຕະລາຍຕ່າງໆ.
                            <br/>- ເພື່ອໃຫ້ຮູ້ວິທີການຮັກສາລົດໃຫ້ຖືກຕ້ອງ ແລະປອດໄພ.
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
                        <td>1. ຄວາມຮູ້ກ່ຽວກັບກົດໝາຍຈະລາຈອນ ກົດໝາຍວ່າດ້ວຍລົດຈັກ ແລະ ກົດໝາຍທີ່ກ່ຽວຂ້ອງ</td>
                        <td>1</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>2. ຄວາມຮູ້ກ່ຽວກັບໂຄງສ້າງການຂັບຂີ່ ມາລະຍາດ ແລະຫຼັກພື້ນຖານ ຂອງການຂັບຂີ່, ການຄາດຄະເນ, ຈຸດອັບ, ຈຸດບອດ</td>
                        <td>2.5</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>3. ຄວາມຮູ້ກ່ຽວກັບການບຳລຸງຮັກສາລົດຈັກ ແລະ ອຸປະກອນຄວບຄຸມລົດ</td>
                        <td>1</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>4. ຂໍ້ປະຕິບັດເມື່ອເກີດເຫດສຸກເສີນ, ການຊ່ວຍເຫຼືອ ແລະ ການປະຖົມພະຍາບານ</td>
                        <td>0.5</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>5. ຄວາມຮູ້ເບື້ອງຕົ້ນກ່ຽວກັບລົດ ແລະ ພື້ນຖານການຂັບຂີ່ລົດຈັກ
                            <ul>
                            - ການກຽມຕົວກ່ອນຂັບລົດ + ກວດກາ ແລະ ບຳລຸງຮັກສາ
                        <br/>- ຄວບຄຸມລົດໃນຂະນະທີ່ບໍ່ເຄື່ອນທີ່
                        <br/>- ຄວບຄຸມລົດໃນຂະນະເຄື່ອນທີ່
                        <br/>- ການອອກລົດ ແລະ ເລັ່ງລົດຢ່າງນິ້ມນວນ
                        <br/>- ການປ່ຽນເກຍ
                        <br/>- ການເບກ
                        <br/>- ການຄວບຄຸມຄວາມໄວ
                            </ul>
                        </td>
                        <td></td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>6. ການຝຶກຊ້ອມການຂັບຂີ່ຕາມທ່າປະຕິບັດຕ່າງໆ
                        <br/>- ການເບກ + ການເບກສຸກເສີນ
                        <br/>- ການຂັບລົດເຂົ້າທາງໂຄ້ງຮູບ S ຫຼື ຮູບເລກ 8
                        <br/>- ການຄວບຄຸມຄັນເລ່ງ ແລະການຊົງໂຕຢູ່ທາງຄົດຄ້ຽວທີ່ມີສິ່ງກີດຂວາງ
                        <br/>- ການຊົງໂຕຢູ່ທາງໄມ້ລູກລະນາດ
                        <br/>- ການຂັບລົດໂດຍປະຕິບັດຕາມກົດໝາຍຈະລາຈອນທາງບົກ
                        <br/>- ການຂັບລົດແລະຈອດລົດຢູ່ເທິງຄ້ອຍຫຼືຂົວ
                        <br/>- ການຂັບລົດເມື່ອມີຄົນຂີ່ຊ້ອນທ້າຍ
                        <br/>- ການຂັບລົດໃນເສັ້ນທາງແຄບທີ່ຈໍາກັດ
                        </td>
                        <td>-</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>7. ການຝຶກຂັບລົດໃນຖະໜົນຈິງ                                                                                              </td>
                        <td>-</td>
                        <td>1</td>
                    </tr>

                    </tbody>
                </table>

                <hr className='mt-5 border border-dark' />
            </div>
        </div>

    </div>
}

export default CourseDetailA1

