import React from 'react';
import Icon from '@material-ui/core/Icon';
import { Card, Button } from '@material-ui/core';
import TextArea from '@material-ui/core/TextareaAutosize';
import { connect } from 'react-redux';
import { addList, addCard } from '../actions';



class ActionButton extends React.Component {

    state = {
        formOpen: false,
        text: ""
    };

    openForm = () => {
        this.setState({
            formOpen: true
        });
    };

    closeForm = e => {
        this.setState({
            formOpen: false
        });
    };

    handleInputChange = e => {
        this.setState({
            text: e.target.value
        });
    };

    handleAddList = () => {
        const { dispatch } = this.props;
        const { text } = this.state;

        if (text) {
            this.setState({
                text: ""
            })
            dispatch(addList(text));

        }

        return;
    }

    handleAddCard = () => {
        const { dispatch, listID } = this.props;
        const { text } = this.state;

        if (text) {
            this.setState({
                text: ""
            })
            dispatch(addCard(listID, text));
        }

        return;
    }

    renderAddButton = () => {
        const { list } = this.props;

        const btnText = list ? "Add another list" : "Add another card";
        const btnTextOpacity = list ? 1 : 0.5;
        const btnTextColor = list ? "white" : "inherit";
        const btnTextBackground = list ? "rgba(0,15.3,30.2,.15)" : "inherit";
        
        return (
            <div className="formBtn" onClick={this.openForm} 
                style={{
                    ...styles.openFormBtnGroup,
                    opacity: btnTextOpacity, 
                    color: btnTextColor, 
                    backgroundColor: btnTextBackground
                }}>
                <Icon>add</Icon>
                <p>{ btnText }</p>
            </div>
        )
    }

    renderForm = () => {

        const { list } = this.props;
        const placeholder = list ? "Enter list title..." : "Enter a title for this card...";
        const btnTitle = list ? "Add List" : "Add Card";

        return <div>
            <Card style={{
                overflow: "visible",
                minHeight: 80,
                minWidth: 272,
                padding: "6px 8px 2px"
            }}>
                <TextArea 
                    placeholder={placeholder}
                    autoFocus
                    onBlur={this.closeForm}
                    value={this.state.text}
                    onChange={this.handleInputChange}
                    style={{
                        resize: "none",
                        width: "100%",
                        overflow: "hidden",
                        outline: "none",
                        border: "none"
                    }}
                />
            </Card>
            <div style={styles.formBtnGroup}>
                <Button 
                    variant="contained" 
                    style={{color: "white", backgroundColor: "#5aac44"}}
                    onMouseDown={list ? this.handleAddList : this.handleAddCard}>
                    {btnTitle}
                </Button>
                <Icon style={{marginLeft: 8, cursor: "pointer"}}>close</Icon>
            </div>
        </div>
    }

    render () {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}

const styles = {
    openFormBtnGroup: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10,
        userSelect: 'none'
    },
    formBtnGroup: {
        marginTop: 8,
        display: "flex",
        alignItems: "center"
    }
}

export default connect() (ActionButton);