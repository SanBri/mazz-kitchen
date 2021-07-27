import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setAlert } from "../../actions/alert";
import { editUserSettings } from "../../actions/user";

import Input from "../common/input";
import Submit from "../common/submit";

const Register = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);

  const initialState = {
    mail: user.mail,
    oldPassword: "",
    newPassword: "",
    newPassword2: "",
  };
  const [formData, setFormData] = useState(initialState);

  const { mail, oldPassword, newPassword, newPassword2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== newPassword2) {
      dispatch(
        setAlert("Les 2 mots de passe doivent être identiques !", "danger")
      );
    } else {
      dispatch(editUserSettings(formData, user._id));
      setFormData({
        ...formData,
        oldPassword: "",
        newPassword: "",
        newPassword2: "",
      });
    }
  };

  return (
    <div className='user-settings__form'>
      <form id='userSettingsForm' onSubmit={(e) => onSubmit(e)}>
        <Input
          name='mail'
          label='Adresse e-mail'
          placeholder='Votre adresse e-mail'
          type='email'
          value={mail}
          onChange={(e) => onChange(e)}
        />
        <Input
          name='oldPassword'
          label='Mot de passe'
          placeholder='Votre mot de passe actuel'
          type='password'
          id='password'
          value={oldPassword}
          onChange={(e) => onChange(e)}
        />
        <Input
          name='newPassword'
          label='Nouveau mot de passe'
          placeholder='Votre nouveau mot de passe'
          type='password'
          id='newPassword'
          value={newPassword}
          onChange={(e) => onChange(e)}
        />
        <Input
          name='newPassword2'
          label='Confirmation du nouveau mot de passe'
          placeholder='Confirmez votre nouveau mot de passe'
          type='password'
          id='newPassword2'
          value={newPassword2}
          onChange={(e) => onChange(e)}
        />
        <Submit />
      </form>
    </div>
  );
};

export default Register;
