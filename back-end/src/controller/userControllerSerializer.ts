import {
  InvalidEmail,
  InvalidId,
  InvalidRole,
  MissingParameters,
  MissingParametersId,
  MissingParametersLogin,
  MissingParametersToken,
  NotAllowedToUpdate,
} from "../error/customError";
import {
  CreateUserInput,
  LoginInput,
  ROLE_TYPE,
  UpdateUser,
  UpdateUserInput,
} from "../model/userTypes";

export const validateUserInput = (input: CreateUserInput): void => {
  if (
    !input.username ||
    !input.name ||
    !input.email ||
    !input.password ||
    !input.phone ||
    !input.address ||
    !input.cpf
  ) {
    throw new MissingParameters();
  }
};


export const validateLoginInput = (input: LoginInput): void => {
  if (!input.username || !input.password) {
    throw new MissingParametersLogin();
  } 
};


export const validateToken = (token: string): void => {
  if (!token) {
    throw new MissingParametersToken();
  }
};

export const validateFieldsUpdate = (input: UpdateUserInput): UpdateUser => {
  const { id, token, ...rest } = input;

  const dataUser: any = { ...rest };

  if (!id) {
    throw new MissingParametersId();
  }

  if(id.length < 24){
    throw new InvalidId();
  }
  
  // Se e-mail for o campo enviado, verificação de e-mail com regex
  if (dataUser.email) {
    const regeEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const isValidEmail = regeEmail.test(dataUser.email);

    if (!isValidEmail) {
      throw new InvalidEmail();
    }
  }

  //criação de um loop para verificar se alguma propriedade enviada no body está vindo com algum campo vazio
  const getProps = Object.getOwnPropertyNames(dataUser);

// pra não iterar toda o tamanho do array crio uma variável

const getPropsLength =  getProps.length

  for (let i = 0; i < getPropsLength; i++) {
    const prop = getProps[i];
    if (dataUser[prop] === undefined) {
      delete dataUser[prop];
    }
  }

  //criação de função para verificar se alguma propriedade enviada no body está vindo com algum campo não permitido para atualizar
  const allowedFieldsToUpdate: (keyof UpdateUser)[] = [
    "username",
    "email",
    "phone",
    "address",
  ];

  const someFieldsNotAllowedToUpdate = Object.keys(dataUser).some(
    (key) => !allowedFieldsToUpdate.includes(key as keyof UpdateUser)
  );

  if (someFieldsNotAllowedToUpdate) {
    throw new NotAllowedToUpdate();
  }

 return dataUser 
};

export const validateRole = (role: ROLE_TYPE): void => {
  if (role !== ROLE_TYPE.NORMAL && role !== ROLE_TYPE.ADMIN) {
    throw new InvalidRole();
  }
};