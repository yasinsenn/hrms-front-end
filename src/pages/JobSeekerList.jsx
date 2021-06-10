import React, { useState, useEffect } from "react";
import JobSeekerService from "../services/jobSeekerService";
import {Table} from "semantic-ui-react";


export default function JobSeekerList() {
    const [jobSeekers, setJobSeekers] = useState([]);

    useEffect(() => {
        let jobSeekerService = new JobSeekerService()
        jobSeekerService.getJobSeekers().then(result => setJobSeekers(result.data.data))

    })

    return (
        <div>
          <Table fixed>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>id</Table.HeaderCell>
                <Table.HeaderCell>First Name</Table.HeaderCell>
                <Table.HeaderCell>Last Name</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Birth Date</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
    
            <Table.Body>
                {jobSeekers.map((jobSeeker) => (
              <Table.Row>
                 <Table.Cell>{jobSeeker.id}</Table.Cell>
                <Table.Cell>{jobSeeker.firstName}</Table.Cell>
                <Table.Cell>{jobSeeker.lastName}</Table.Cell>
                <Table.Cell>{jobSeeker.email}</Table.Cell>
                <Table.Cell>{jobSeeker.identityNumber}</Table.Cell>
                <Table.Cell>{jobSeeker.dateOfBirth}</Table.Cell>
              </Table.Row>
                ))}
            </Table.Body>
          </Table>
        </div>
      );











}