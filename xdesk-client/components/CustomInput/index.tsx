import React from "react";
import classNames from "classnames";
import { DefaultTheme, makeStyles } from "@mui/styles";
import { FormControl, InputLabel, Input } from "@mui/material";
import { Clear, Check } from "@mui/icons-material";
import { customInputStyle } from "theme/ts/components";

interface CustomInputProps {
  labelText?: React.ReactNode;
  labelProps?: object;
  id?: string;
  inputProps?: object;
  formControlProps?: any;
  error?: boolean;
  success?: boolean;
}
export default function CustomInput(props: CustomInputProps) {
  const useStyles: Function = makeStyles(customInputStyle as DefaultTheme);
  const classes = useStyles();
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    success,
  } = props;

  const labelClasses = classNames({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error,
  });
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
  });
  const marginTop = classNames({
    [classes.marginTop]: labelText === undefined,
  });
  return (
    <FormControl
      {...formControlProps}
      className={formControlProps.className + " " + classes.formControl}
    >
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        classes={{
          root: marginTop,
          disabled: classes.disabled,
          underline: underlineClasses,
        }}
        id={id}
        {...inputProps}
      />
      {
        error ? <Clear className={classes.feedback + " " + classes.labelRootError} /> : (success ? <Check className={classes.feedback + " " + classes.labelRootSuccess} /> : null)
      }
    </FormControl>
  );
}
