import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";
import SignupForm from "./signfrom";


const LoginForm = () => {
  const initialValues = {email:"", password: ""};
  const [formValues ,setFormValues] = useState(initialValues);
  const [formErrors , setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() =>{
    if(Object.keys(formErrors).length === 0 && isSubmit){
    }

  },[formErrors,formValues,isSubmit]);

  const validate =(values) =>{
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!values.email){
      errors.email = "Esse campo é obrigatório";
    } else if (!regex.test(values.email)){
      errors.email = "O e-mail deve ser válido";
    }
    if (!values.password) {
      errors.password = "Esse campo é obrigatório";
    } else if (!regex.test(values.password.length < 4)) {
      errors.password = "{Password must be more than 4 characters!";
    } else if (!regex.test(values.password.length > 10)) {
      errors.password = "{Password cannot exceed more than 10 characters!";
    }
    return errors;
  };

  

  return (
    <div className="h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-12 w-auto" src={logo} alt="" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Entrar na sua conta
        </h2>
        <p className="mt-2 text-center text-medium">
          Ou{" "}
          <Link
            to="/signfrom"
            element={<SignupForm />}
            className="font-medium text-primary hover:text-indigo-500 text-indigo-500"
          >
            fazer cadastro
          </Link>
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                E-mail
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div class="text-xs text-red-500">
                <p>{formErrors.email}</p>
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Senha
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={formValues.password}
                  onChange={handleChange}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm ] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div class="text-xs text-red-500">
                <p>{formErrors.password}</p>
              </div>
            </div>
            <div className="text-right ">
              <a
                href="/ResetPassword"
                class="text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
              >
                Esqueceu a senha?
              </a>
            </div>
            <div>
              <button
                type="button"
                onClick={handleSubmit}
                class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
