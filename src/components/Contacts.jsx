import React from 'react'
import style from '../assets/styles/contacts.module.css'

const Contacts = () => {
  return (
    <section>
        <div className={style.container}>
            <div className={style.title_block}>
                <div className={style.title_info}>
                    <h1 className={style.title_head}>
                        Contact Us. It’s Easy.
                    </h1>
                    <p className={style.title_description}>
                        Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative.
                    </p>
                </div>
                <div className={style.title_contact}>
                    <div className={style.contact_item}>
                        <img src="/7.svg" alt="Телефон" />
                        <div className={style.contact_text}>
                            <p className={style.contact_description}>
                                Call Today
                            </p>
                            <h1 className={style.contact_head}>
                                +1 800 100 900
                            </h1>
                        </div>
                    </div>
                    <div className={style.contact_item}>
                        <img src="/8.svg" alt="Время работы" />
                        <div className={style.contact_text}>
                            <p className={style.contact_description}>
                                Monday To Friday
                            </p>
                            <h1 className={style.contact_head}>
                                9AM - 5PM
                            </h1>
                        </div>
                    </div>
                    <div className={style.contact_item}>
                        <img src="/9.svg" alt="Офис" />
                        <div className={style.contact_text}>
                            <p className={style.contact_description}>
                                USA Office
                            </p>
                            <h1 className={style.contact_head}>
                                195 Devonshire St Boston, MA 02110
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <form action="#" className={style.form_block}>
                <div className={style.form_fields}>
                    <div className={style.form_field}>
                        <label className={style.field_head} htmlFor="name">Full Name</label>
                        <input id='name' name='name' type="text" placeholder='John David' required className={style.field_input} />
                    </div>
                    <div className={style.form_field}>
                        <label className={style.field_head} htmlFor="email">Email</label>
                        <input id='email' name='email' type='email' placeholder='consult@mail.com' required className={style.field_input} />
                    </div>
                </div>
                <div className={style.form_fields}>
                    <div className={style.form_field}>
                        <label className={style.field_head} htmlFor="phone">Phone</label>
                        <input id='phone' name='phone' type="tel" placeholder='+008 654 231' required className={style.field_input} />
                    </div>
                    <div className={style.form_field}>
                        <label className={style.field_head} htmlFor="company">Company(optional)</label>
                        <input id='company' name='company' type='text' placeholder='yourcompany.com' required className={style.field_input} />
                    </div>
                </div>
                <div className={style.form_area}>
                    <label className={style.field_head} htmlFor="area">Message</label>
                    <textarea name="message" id="area" required placeholder='Briefly tell us about your project and your current goals. How can we help you?' minLength={80} className={style.message_area}></textarea>
                </div>
                <button type="submit" className={style.form_button}>Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contacts