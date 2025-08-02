import {React, useState} from 'react'
import style from '../assets/styles/header.module.css'

const Header = () => {

    const [active, setActive] = useState(1);

    const handleActive = (e, id) => {
        e.preventDefault();
        setActive(id);
    }

    const isActive = (id) => active === id ? style.active : '';

  return (
    <>
        <header>
            <div className={style.container}>
                <div className={style.links_list}>
                    <a href='#all' className={`${style.link} ${isActive(1)}`} onClick={(e) => handleActive(e, 1)}>
                        All
                    </a>
                    <a href='#taxes' className={`${style.link} ${isActive(2)}`} onClick={(e) => handleActive(e, 2)}>
                        Taxes & Efficiency
                    </a>
                    <a href='#investment' className={`${style.link} ${isActive(3)}`} onClick={(e) => handleActive(e, 3)}>
                        Investment banking
                    </a>
                    <a href='#plan' className={`${style.link} ${isActive(4)}`} onClick={(e) => handleActive(e, 4)}>
                        Financial Plan
                    </a>
                    <a href='#audit' className={`${style.link} ${isActive(5)}`} onClick={(e) => handleActive(e, 5)}>
                        Audit & Evaluation
                    </a>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header