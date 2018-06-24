import React from 'react';
import {
    Card, CardHeader, CardBody, Row, Col
} from 'reactstrap';
import axios from 'axios';

import { PanelHeader, FormInputs, CardAuthor, CardSocials } from 'components';

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
                                    <h5 className="title"><i className='now-ui-icons files_paper mr-2'></i>Submit Script</h5>
                                </CardHeader>
                                <CardBody>
                                    <form>
                                        <FormInputs
                                            ncols = {["col-md-6 pr-1" , "col-md-6 pl-1"]}
                                            proprieties = {[
                                                {
                                                    label : "Article URL",
                                                    inputProps : {
                                                        type : "text",
                                                        placeholder: "https://yourblog.com/your-example",
                                                        defaultValue: ""
                                                    }
                                                },
                                                {
                                                    label : "Podcast Title",
                                                    inputProps : {
                                                        type : "text",
                                                        placeholder: "1 - My Awesome Podcast",
                                                        defaultValue: ""
                                                    }
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols = {["col-md-12"]}
                                            proprieties = {[
                                                {
                                                    label : "Intro Script",
                                                    inputProps : {
                                                        type : "textarea",
                                                        rows: "8",
                                                        cols: "80",
                                                        placeholder: "The script for how you want your podcast to start. How do you want to make your first impression? What are you all about?",
                                                    }
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols = {["col-md-12"]}
                                            proprieties = {[
                                                {
                                                    label : "Main Script",
                                                    inputProps : {
                                                        type : "textarea",
                                                        rows: "8",
                                                        cols: "80",
                                                        placeholder: "The heart of your message. This is where you expose your story to new ears.",
                                                    }
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols = {["col-md-12"]}
                                            proprieties = {[
                                                {
                                                    label : "Intro Script",
                                                    inputProps : {
                                                        type : "textarea",
                                                        rows: "8",
                                                        cols: "80",
                                                        placeholder: "The script for how you want your podcast to end. What final words do you want said? What is your call to action?",
                                                    }
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols = {["col-md-12"]}
                                            proprieties = {[
                                                {
                                                    label : "Feedback & Preferences",
                                                    inputProps : {
                                                        type : "textarea",
                                                        rows: "4",
                                                        cols: "80",
                                                    }
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols = {["col-md-12"]}
                                            proprieties = {[
                                                {
                                                    label : "Feedback & Preferences",
                                                    inputProps : {
                                                        type : "textarea",
                                                        rows: "4",
                                                        cols: "80",
                                                    }
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            onSubmit={this.onSubmit}
                                            ncols = {["col-md-12"]}
                                            proprieties = {[
                                                {
                                                    label : "",
                                                    inputProps : {
                                                        type : "submit",
                                                        value: 'Submit'
                                                    }
                                                }
                                            ]}
                                        />
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
