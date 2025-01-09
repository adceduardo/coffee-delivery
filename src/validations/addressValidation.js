import * as yup from 'yup';

export const addressSchema = yup.object().shape({
    cep: yup
        .string()
        .required('O CEP é obrigatório')
        .matches(/^\d{5}-\d{3}$/, 'CEP inválido'),
    rua: yup
        .string()
        .required('Rua é obrigatória'),
    numero: yup
        .number()
        .typeError('Número inválido')
        .required('Número é obrigatório'),
    bairro: yup
        .string()
        .required('Bairro é obrigatório'), 

    cidade: yup
        .string()
        .required('Cidade é obrigatória'), 
    uf: yup
        .string()
        .length(2, 'UF deve ter 2 caracteres')
        .required('UF é obrigatório'),

    complemento: yup
        .string(),
});