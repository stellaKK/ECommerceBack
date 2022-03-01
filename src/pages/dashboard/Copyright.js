import Typography from '@material-ui/core/Typography';
import React from "react";
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import {companyName} from "../../components/Constants";

export function Copyright() {
  return (
      <Box pt={4}>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://material-ui.com/">
            {companyName}
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
  );
}