import React from 'react';
import { Box, Typography, Card, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { prefixRoute } from '../utils/utils.routing';
import { ROUTES } from '../constants';
import { testIds } from '../components/testIds';
import { PluginPage } from '@grafana/runtime';

function PageOne() {
  return (
    <PluginPage>
      <Card sx={{ p: 3 }}>
        <Box data-testid={testIds.pageOne.container}>
          <Typography variant="h5" gutterBottom>
            This is page one.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button
              component={Link}
              to={prefixRoute(ROUTES.Four)}
              variant="contained"
              data-testid={testIds.pageOne.navigateToFour}
            >
              Full-width page example
            </Button>
          </Box>
        </Box>
      </Card>
    </PluginPage>
  );
}

export default PageOne;
