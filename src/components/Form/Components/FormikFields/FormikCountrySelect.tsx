import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { countries } from "../../constants/countries";
import { FormikProps } from "../../validation/formikProps";

interface Props {
    name: string;
    label: string;
    width?: any;
}

const FormikCountrySelect: React.FC<Props & FormikProps> = ({
    name,
    label,
    width = "auto",
    formik,
}) => {
    return (
        <Autocomplete
            id="country-select-demo"
            sx={{ width: width }}
            options={countries}
            autoHighlight
            getOptionLabel={(option) => option.label}
            onChange={(e, value) => formik.setFieldValue(name, value)}
            renderOption={(props, option) => (
                <Box
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    {...props}
                >
                    <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        alt=""
                    />
                    {option.label} ({option.code}) +{option.phone}
                </Box>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password", // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
};

export default FormikCountrySelect;
