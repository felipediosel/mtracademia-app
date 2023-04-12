export function isEmailInvalid(email: string): boolean {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  return regex.test(email) === false;
}

export function formatCpf(cpf: string): string {
  return cpf.replace(
    /(\d{3})(\d{3})(\d{3})(\d{2})/,
    function (regex, arg1, arg2, arg3, arg4) {
      return arg1 + '.' + arg2 + '.' + arg3 + '-' + arg4;
    },
  );
}

export function formatPhone(phone: string): string {
  if (!phone) return '';

  phone = phone.replace(/\D/g, '');
  phone = phone.replace(/(\d{2})(\d)/, '($1) $2');
  phone = phone.replace(/(\d)(\d{4})$/, '$1-$2');

  return phone;
}
