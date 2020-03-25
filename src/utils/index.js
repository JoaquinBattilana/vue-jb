const ERRORS = {
  required: 'El campo es obligatorio',
  email: 'El email es incorrecto'
}

export const generateErrorsMessages = validationInfo => Object.keys(validationInfo).filter(elem => ERRORS[elem] && !validationInfo[elem]).map(elem => ERRORS[elem])
