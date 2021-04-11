import React, { Component } from 'react'
import Contact from './Contact';

class Contacts extends Component {

state = {
    contacts: [
        {
            id: 1,
            name: "Krzysztof Ptak",
            email: "krzysztof@gmail.com",
            phone: "111-111-111"
        },
        {
            id: 2,
            name: "Dawid Ptak",
            email: "DF3FQER2f@gmail.com",
            phone: "111-131-111"
        },
        {
            id: 3,
            name: "Agnieszka Ptak",
            email: "kGEEf@gmail.com",
            phone: "111-111-111"
        },
    ]
}
    render() {
        const {contacts} = this.state
        return (
            <div>
                {
                    contacts.map(contact => {
                        return <Contact id={contact.id} contact={contact}/>
                    })
                }
            </div>
        )
    }
}

export default Contacts;
