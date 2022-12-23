import * as yup from "yup";

export const registerValidation = yup.object().shape({
    firstName: yup.string().required("Tast inn fornavn "),
    lastName: yup.string().required("Tast inn etternavn "),
    age: yup.string().required("Sett in alder "),
    gender: yup.string().required("velg kjønn"),
    termsOfService: yup
        .bool()
        .oneOf([true], "You must accept the terms and conditions"),
});

export const formInitialValues = {
    firstName: "",
    lastName: "",
    age: undefined,
    gender: "",
    termsOfService: false,
};

export const genderRadioOptions = [
    { label: "Mann", value: "male" },
    { label: "Kvinne", value: "female" },
];