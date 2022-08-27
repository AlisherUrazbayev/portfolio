import React from 'react';
import style from './Contact.module.css';

const Contact = () => {
    return (
        <div id="contactSection" className={style.mainWrapper}>
            <div className={style.container}>
                <h4>Contacts</h4>
                <form action="" className={style.formContainer}>
                    <input placeholder={"Some text here"} type="text"/>
                    <input placeholder={"Some text here"} type="text"/>
                    <textarea placeholder={"Some text here"} name="" id="" cols="30" rows="10"></textarea>
                </form>
                <button>Send</button>
            </div>
        </div>
    );
};

export default Contact;