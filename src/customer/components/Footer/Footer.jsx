import { Button, Grid, Link, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: 'black', color: 'white', py: 3 }}
      >
        {/* Company */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <Button className="pb-5" variant="gutterBottom">
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="gutterBottom">
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="gutterBottom">
              Press
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="gutterBottom">
              Jobs
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="gutterBottom">
              Partners
            </Button>
          </div>
        </Grid>
        {/* Solution */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solution
          </Typography>
          <div>
            <Button className="pb-5" variant="gutterBottom">
              Marketing
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="gutterBottom">
              Analytics
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="gutterBottom">
              Commerece
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="gutterBottom">
              Insights
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="gutterBottom">
              Support
            </Button>
          </div>
        </Grid>
        {/* Documentation */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>
          <div>
            <Button className="pb-5" variant="gutterBottom">
              Guides
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="gutterBottom">
              API Status
            </Button>
          </div>
        </Grid>
        {/* Legal */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <div>
            <Button className="pb-5" variant="gutterBottom">
              Claim
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="gutterBottom">
              Privacy
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="gutterBottom">
              Terms
            </Button>
          </div>
        </Grid>
        {/* CopyRight */}
        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2023 Zero To One Smart IT Solution. All rights reserved.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made with Company Group.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Icons Made By{''}
            <Link
              href="https://www.freepik.com"
              color="inherit"
              underline="always"
            >
              Freepik
            </Link>{' '}
            from{' '}
            <Link
              href="https://www.flaticon.com/"
              color="inherit"
              underline="always"
            >
              www.flaticon.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
