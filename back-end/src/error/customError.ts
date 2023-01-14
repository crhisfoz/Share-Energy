export class CustomError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

export class ExpiredToken extends CustomError {
  constructor() {
    super(405, "Token Expired, please verify and make a new Login");
  }
}

export class InvalidPassword extends CustomError {
  constructor() {
    super(401, "Invalid Password format, please verify and try again");
  }
}

export class InvalidCPF extends CustomError {
  constructor() {
    super(405, "Invalid CPF format, please verify and try again");
  }
}

export class InvalidId extends CustomError {
  constructor() {
    super(422, "Invalid Id, please verify and try again");
  }
}

export class InvalidEmail extends CustomError {
  constructor() {
    super(422, "Invalid Email, please verify and try again");
  }
}

export class InvalidRole extends CustomError {
  constructor() {
    super(
      401,
      "Invalid Role format, must be 'NORMAL' OR 'ADMIN' verify and try again"
    );
  }
}

export class InvalidToken extends CustomError {
  constructor() {
    super(400, "Invalid Token, please verify and try again");
  }
}

export class InvalidParametersId extends CustomError {
  constructor() {
    super(400, "Invalid or ID SENT, please verify and try again");
  }
}

export class MissingParameters extends CustomError {
  constructor() {
    super(
      422,
      "Missing or incorrect information. Consult the documentation and correctly fill the Body of the Request"
    );
  }
}

export class MissingParametersToken extends CustomError {
  constructor() {
    super(
      422,
      "Missing Token. Consult the documentation and fill in headers authorization"
    );
  }
}

export class MissingParametersId extends CustomError {
  constructor() {
    super(422, "Missing id. Consult the documentation and fill in url params");
  }
}

export class MissingParametersLogin extends CustomError {
  constructor() {
    super(
      422,
      "Missing or incorrect information. Consult the documentation and fill email and password correctly"
    );
  }
}

export class NotUpdated extends CustomError {
  constructor() {
    super(304, "User Not Updated");
  }
}

export class NotFoundUser extends CustomError {
  constructor() {
    super(404, "Not Found, please verify Id Sent");
  }
}

export class NotFoundUsers extends CustomError {
  constructor() {
    super(404, "Not Found Users in Database");
  }
}

export class NotFoundAuthentication extends CustomError {
  constructor() {
    super(
      404,
      "Not Found Authentication in TokenData, please verify and try again"
    );
  }
}

export class NotFoundUsername extends CustomError {
  constructor() {
    super(404, "Not Found, please verify UserName User Sent");
  }
}

export class NotAllowedToCreateEmail extends CustomError {
  constructor() {
    super(405, "E-mail already exists in Database");
  }
}

export class NotAllowedToCreateCPF extends CustomError {
  constructor() {
    super(405, "CPF already exists in Database");
  }
}

export class NotAllowedToCreateUsername extends CustomError {
  constructor() {
    super(405, "Username already exists in Database");
  }
}

export class NotAllowedToUpdate extends CustomError {
  constructor() {
    super(405, "Some received field is not allowed to update");
  }
}

export class Unauthorized extends CustomError {
  constructor() {
    super(401, "User not Authorized, id or token are from different users ");
  }
}
