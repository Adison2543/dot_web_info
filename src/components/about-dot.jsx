import React from 'react';
import Navbar from './global-components/navbar-use2';
import PageHeader from './global-components/page-header';
import Footer from './global-components/footer-use';

const about_this_project = () => {
    let publicUrl = process.env.PUBLIC_URL + '/'
    return <div>
        <Navbar />
        <PageHeader headertitle={'Department of Transport'}  />

        <div className="contact-list pd-top-100">
            <div className="container">
                <div className="row mb-4">
                    <p className='fw-bold fs-5'>ພາລະບົດບາດ</p>
                    <p>ກົມຂົນສົ່ງ ມີພາລະບົດບາດ ມີພາລະບົດບາດເປັນເສນາທິການໃຫ້ແກ່ລັດຖະມົນຕີ ກະຊວງໂຍທາທິການ ແລະ ຂົນສົ່ງ ໃນການຄົ້ນຄວ້າ,ວາງແຜນ ແລະ ຄຸ້ມຄອງມະຫາພາກ ວຽກງານຂົນສົ່ງທາງບົກ ໃນຂອບເຂດທົ່ວປະເທດ. ພ້ອມທັງປະສານງານກັບ ພະແນກໂຍທາທິການແລະຂົນສົ່ງ ຂອງແຕ່ລະແຂວງ ໃນການປະຕິບັດໜ້າວຽກຕົວຈິງ</p>
                </div>
                <div className="row">
                    <p className='fw-bold fs-5'>ໂຄງຮ່າງການຈັດຕັ້ງ</p>
                    <img className='mx-2' src={publicUrl + "assets/img/aboutdot.png"} alt="img" />
                    <p>Last update: 01/03/2024</p>
                </div>

                <hr className='mt-5 border border-dark' />
            </div>
        </div>

        <Footer />
    </div>
}

export default about_this_project

