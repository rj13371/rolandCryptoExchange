import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Section = styled.section`
    border: 1px solid red;
    font-size: 3rem;
`


export default class AccountBalance extends Component {
    render() {
        return (
            <Section>
                Wallet Balance: ${this.props.amount}
            </Section>
        )
    }
}

AccountBalance.propTypes = {
    balance: PropTypes.number.isRequired,
}