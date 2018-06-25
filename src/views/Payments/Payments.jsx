import React from 'react';
import {
    Card, CardHeader, CardBody, Row, Col
} from 'reactstrap';
import axios from 'axios';

import { PanelHeader, FormInputs, CardAuthor, CardSocials, Button } from 'components';
import CustomButton from '../../components/CustomButton/CustomButton'

import userBackground from 'assets/img/bg5.jpg';
import userAvatar from 'assets/img/mike.jpg';

class User extends React.Component{

    submit = values => {
        // print the form values to the console
        console.log(values);
        var that = this;
        alert('In Progress');

        let message = "New Scripts Submitted\n\nURL: "+values.url+"\n\nTitle: "+values.title+"\n\nIntro Script: "+values.introScript+"\n\nMain Script: "+values.mainScript+"\n\nOutro Script: "+values.outroScript+"\n\nNotes: "+values.scriptNotes;

        //Send script rest request	
        // axios.post('https://api.audivity.com/user/submit_scripts', {
        //     // key: this.props.match.params.ReqID,
        //     // url: values.url,
        //     // title: values.title,
        //     // introScript: values.introScript,
        //     // mainScript: values.mainScript,
        //     // outroScript: values.outroScript,
        //     // scriptNotes: values.scriptNotes
        //     'text': message
        // })
        axios.post("https://hooks.slack.com/services/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",{
            data: '{"text": "'+message+'"}',
        })
            .then(function (response) {
                console.log(response);
                console.log('Posted to Slack!')
                //Request success
                that.setState({ success: true })

            })
            .catch(function (error) {
                console.log(error);
            });

    }

    render(){
        return (
            <div>
                <PanelHeader size="sm"/>
                <div className="content">
                    <Row>
                        <Col xs={12}>
                            <Card>
                                <CardHeader>
                                    <h5 className="title"><i className='now-ui-icons business_money-coins mr-2'></i>Payments</h5>
                                </CardHeader>
                                <CardBody>
                                <form action="your-server-side-code" method="POST">
                                    <script
                                        src="https://checkout.stripe.com/checkout.js" class="stripe-button"
                                        data-key="pk_test_g6do5S237ekq10r65BnxO6S0"
                                        data-amount="999"
                                        data-name="Stripe.com"
                                        data-description="Example charge"
                                        data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
                                        data-locale="auto"
                                        data-zip-code="true">
                                    </script>
                                </form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default User;
