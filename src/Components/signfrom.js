import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";
import LoginForm from "./loginform";

const SignupForm = () => {
  const [emails, setEmail] = useState({
    email1: "",
    email2: "",
  });
  const emailChangeHandler = (e) => {
    setEmail({ ...emails, [e.target.name]: e.target.value });
  };
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const matchCheck = emails.email1 !== emails.email2;
  const validationCheck = emailRegex.test(emails.email1);

  return (
    <div className="h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-12 w-auto" src={logo} alt="" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Criar nova conta
        </h2>
        <p className="mt-2 text-center text-base">
          Ou{" "}
          <Link
            to="/loginform"
            element={<LoginForm />}
            className="font-medium text-primary hover:text-indigo-500 text-indigo-500 font-semibold"
          >
            entrar na sua conta existente
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
                  name="email1"
                  type="name"
                  maxLength={35}
                  minLength={5}
                  autoComplete="name"
                  required
                  onChange={(e) => emailChangeHandler(e)}
                  className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 sm:text-sm 
                  ${
                    validationCheck
                      ? "focus:border-indigo-500"
                      : "focus:border-red-500"
                  }`}
                />
              </div>
              <div class="text-xs text-red-500">
                {" "}
                {  validationCheck ? "" : "O e-mail deve ser válido"}
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Repetir e-mail
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email2"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={(e) => emailChangeHandler(e)}
                  className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm
                   ${
                     matchCheck
                       ? "focus:border-red-500"
                       : "focus:border-indigo-500"
                   }`}
                />
              </div>
              <div class="text-xs text-red-500">
                {" "}
                {matchCheck ? "Esse campo é obrigatório" : ""}
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
                  required
                  className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  ${
                    matchCheck
                      ? "focus:border-red-500"
                      : "focus:border-indigo-500"
                  }`}
                />
              </div>
              <div class="text-xs text-red-500">
                {" "}
                {matchCheck ? "Esse campo é obrigatório" : ""}
              </div>
            </div>
            <label className="relative flex items-start mt-2">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  className={`"form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer"
                  ${
                    matchCheck
                      ? "focus:border-red-500"
                      : "focus:border-indigo-500"
                  }`}
                />
              </div>
              <div className="ml-2 text-sm leading-5">
                <span className="font-medium text-gray-700">
                  Eu li e aceito os
                  <a href="https://google" className="underline">
                    termos de uso,
                  </a>
                  <a href="https://google" className="underline">
                    termos de licença de uso de software, política de conteúdo
                  </a>
                  <a href="https://google" className="underline">
                    da Kiwify (Esse campo é obrigatório)
                  </a>
                </span>
              </div>
            </label>
            <div class="text-xs text-red-500">
              {" "}
              {matchCheck ? "Esse campo é obrigatório" : ""}
            </div>
            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                  Criar conta
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignupForm;