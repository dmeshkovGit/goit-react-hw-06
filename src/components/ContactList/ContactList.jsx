import css from './ContactList.module.css'
import Contact from '../Contact/Contact'
import { useSelector } from 'react-redux'
import { selectContacts } from '../../redux/contactsSlice'
import { selectNameFilter } from '../../redux/filtersSlice'



export default function ContactList({  }) {
    const filter = useSelector(selectNameFilter);
    const contacts = useSelector(selectContacts)
    const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
    return (
        <ul className={css.contactsList}>
            {visibleContacts.map((contact) => {
                return <li key={contact.id}>
                    <Contact contact={contact}/>
             </li>
         })}
        </ul>
    )
}