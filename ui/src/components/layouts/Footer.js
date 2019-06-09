import React, { Fragment } from "react";

import { styled } from "@material-ui/styles";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const StyledDivider = styled(Divider)({
  margin: "0px"
});

export default () => (
  <Fragment>
    <StyledDivider variant="middle" />
    <Typography variant="h6">News</Typography>
  </Fragment>
);
