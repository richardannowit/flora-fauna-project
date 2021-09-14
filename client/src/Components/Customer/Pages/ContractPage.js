import React, { Component } from 'react';
import Contract from '../Contract/Contract';
import Social from '../Social/Social';
import Footer from '../Footer/Footer';

class ContractPage extends Component {

    render() {
        return (
            <>
                <Contract></Contract>
                <Social></Social>
                <Footer></Footer>
            </>
        );
    }
}

export default ContractPage;