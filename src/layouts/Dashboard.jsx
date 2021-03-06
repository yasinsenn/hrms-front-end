import React from "react";
import { Grid } from "semantic-ui-react";
import CreateJobAdvert from "../pages/CreateJobAdvert";
//import JobAdvertList from "../pages/JobAdvertList";
//import EmployerList from "../pages/EmployerList";
//import JobSeekerList from "../pages/JobSeekerList";
//import JobPositionList from "../pages/JobPositionList";
import MenuLeft from "./MenuLeft";


export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <MenuLeft />
          </Grid.Column>
          <Grid.Column width={13}>
           <CreateJobAdvert/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
