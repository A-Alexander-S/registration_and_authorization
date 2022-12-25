import InputField from '../InputField';
import InputPassword from '../InputPassword';
import Button from '../Button';
import './form-sign-up.scss';

const FormSignUp = () => {
  return (
    <div className='form-sign-up'>
      <div className="form-sign-up__title">
        Регистрация
      </div>
      <div className="form-sign-up__name">
        <label className='form-sign-up__label' htmlFor='sign-up-name'>
          Имя
        </label>
        <InputField
          id='sign-up-name'
          type='text'
          placeholder='Артур'
          width='468px'
        // width='100%'
        />
      </div>
      <div className="form-sign-up__email">
        <label className='form-sign-up__label' htmlFor='sign-up-email'>
          Электронная почта
        </label>
        <InputField
          id='sign-up-email'
          type='email'
          placeholder='example@mail.ru'
          width='100%'
        />
      </div>
      <div className="form-sign-up__password">
        <label className='form-sign-up__label' htmlFor='sign-up-password'>
          Пароль
        </label>
        <InputPassword
          id='sign-up-password'
          type='password'
          placeholder='Пароль'
          width='100%'
        />
      </div>
      <div className="form-sign-up__wrapp-button">
        <Button
          width='100%'
          height='48px'
        >
          Зарегестрироваться
        </Button >
      </div>
    </div>
  )
}

export default FormSignUp;