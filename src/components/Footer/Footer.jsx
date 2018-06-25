import React from 'react';
import { Container } from 'reactstrap';
// used for making the prop types of this component
import PropTypes from 'prop-types';

class Footer extends React.Component{
    render(){
        return (
            <footer className={"footer"
                + (this.props.default ? " footer-default":"")
            }>
                <Container fluid={this.props.fluid ? true:false}>
                    <nav>
                        <ul>
                            <li>
                                <a href="https://audivity.com">
                                    Audivity.com
                                </a>
                            </li>
                            <li>
                                <a href="http://beta.audivity.com/team">
                                   About Us
                                </a>
                            </li>
                            <li>
                                <a href="http://beta.audivity.com/contact">
                                   Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="">
                                   Leave us feedback
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="copyright">
                        &copy; {1900 + (new Date()).getYear()} Audivity
                    </div>
                </Container>
            </footer>
        );
    }
}

Footer.propTypes = {
    default: PropTypes.bool,
    fluid: PropTypes.bool
}

export default Footer;
