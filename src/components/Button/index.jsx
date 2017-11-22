import React from "react";
import PropTypes from "prop-types";
import OrdinaryButton from "./OrdinaryButton";
import SubmitButton from "./SubmitButton";

/*
Denna ersätter SubmitButton. Se det som en container som innehåller 2 andra compontenter
SubmitButton och OrdinaryButton.

Denna har en prop form. Är form true så renderar den submit button, annars button.
i react så förkortas boolean props till ingen prop = false, en prop = true. Så
istället för att skriva form="true" så kan vi endast skriva form. Detta gör att vi kan rendera 2 olika komponenter
med antingen:

<Button>Klicka</Button>
eller
<Button form>Klicka</Button>

Nu finns inte "SubmitButton längre" så alla andra komponenter som tidigare använda <SubmitButton>klicka</SubmitButton> måste
bytas ut mot <Button form>klicka</Button form>
 */

const defaultProps = {
  children: "submit",
  form: false
};

const propTypes = {
  children: PropTypes.string,
  form: PropTypes.bool
};

const Button = ({ children, form }) => {
  if (form) {
    return <SubmitButton type="submit" value={children} />;
  }
  return <OrdinaryButton>${children}</OrdinaryButton>;
};

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;

export default Button;
