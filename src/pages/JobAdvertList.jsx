import React, { useState , useEffect} from "react";
import JobAdvertService from "../services/jobAdvertService";
import {Table} from "semantic-ui-react";

export default function JobAdvertList() {
    const [jobAdverts,setJobAdverts] = useState([]);

    useEffect(() => {
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getJobAdverts().then(result => setJobAdverts(result.data.data))
    })

    return (
        <div>
          <Table fixed>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Description</Table.HeaderCell>
                <Table.HeaderCell>Salary</Table.HeaderCell>
                <Table.HeaderCell>Open Positions</Table.HeaderCell>
                <Table.HeaderCell>Employer Name</Table.HeaderCell>
                <Table.HeaderCell>Employer Email</Table.HeaderCell>
                <Table.HeaderCell>Employer Website</Table.HeaderCell>
                <Table.HeaderCell>Employer Phone Number</Table.HeaderCell>
                <Table.HeaderCell>City</Table.HeaderCell>
                <Table.HeaderCell>Position Name</Table.HeaderCell> 
              </Table.Row>
            </Table.Header>
    
            <Table.Body>
                {jobAdverts.map((jobAdvert) => (
              <Table.Row>
                 <Table.Cell>{jobAdvert.description}</Table.Cell>
                <Table.Cell>{jobAdvert.salaryMin} - {jobAdvert.salaryMax}</Table.Cell>
                <Table.Cell>{jobAdvert.openPositions}</Table.Cell>
                <Table.Cell>{jobAdvert.employer.companyName}</Table.Cell>
                <Table.Cell>{jobAdvert.employer.email}</Table.Cell>
                <Table.Cell>{jobAdvert.employer.website}</Table.Cell>
                <Table.Cell>{jobAdvert.employer.phoneNumber}</Table.Cell>
                <Table.Cell>{jobAdvert.city.cityName}</Table.Cell>
                <Table.Cell>{jobAdvert.jobPosition.positionName}</Table.Cell>
              </Table.Row>
                ))}
            </Table.Body>
          </Table>
        </div>
      );

}