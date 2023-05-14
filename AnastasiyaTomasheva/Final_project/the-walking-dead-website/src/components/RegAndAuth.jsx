import React from 'react';

function RegAndAuth(props) {
    
    return (
        <div className='wrapperForForm' onClick={e => (e.currentTarget === e.target) && props.setRegAndAuth(false)}>
            <section className='forms_section'>
                <div className='forms'>
                
                    <div className={`form_wrapper ${props.login && 'is_active'}`}>
                        <button type='button' className={`switcher ${props.login && 'is_active'} switcher_login`} onClick={() => {props.setLogin(!props.login); props.setSignup(!props.signup)}}>
                            Войти
                            <span className='underline'></span>
                        </button>
                        <form className='form form_login'>
                            <fieldset>
                                <legend>Пожалуйста, укажите электронную почту и пароль чтобы войти</legend>
                                <div className='input_block'>
                                    <label htmlFor='login-email'>E-mail</label>
                                    <input id='login_email' type="email" required />
                                </div>
                                <div className='input_block'>
                                    <label htmlFor='login_password'>Пароль</label>
                                    <input id='login_password' type="password" required />
                                </div>
                            </fieldset>
                            <button type='submit' className='btn_login'>Войти</button>
                        </form>
                    </div>

                    <div className={`form_wrapper ${props.signup && 'is_active'}`}>
                        <button type='button' className={`switcher ${props.signup && 'is_active'} switcher_signup`} onClick={() => {props.setSignup(!props.signup); props.setLogin(!props.login)}}>
                            Примкнуть
                            <span className='underline'></span>
                        </button>
                        <form className='form form_signup'>
                            <fieldset>
                                <legend>Пожалуйста, введите электронную почту, пароль и подтверждение пароля для регистрации</legend>
                                <div className='input_block'>
                                    <label htmlFor='signup_email'>Email</label>
                                    <input id='signup_email' type="email" required></input>
                                </div>
                                <div className='input_block'>
                                    <label htmlFor='signup_password'>Пароль</label>
                                    <input id='signup_password' type="password" required></input>
                                </div>
                                <div className='input_block'>
                                    <label htmlFor='signup_password_confirm'>Подтверждение пароля</label>
                                    <input id='signup_password_confirm' type="password" required></input>
                                </div>
                            </fieldset>
                            <button type='submit' className='btn_signup'>Отправить</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RegAndAuth