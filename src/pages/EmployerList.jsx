import React, { useState, useEffect } from "react";
import EmployerService from "../services/employerService";
import {Table} from "semantic-ui-react";



export default function EmployerList() {
    const [employers, setEmployers] = useState([]);
  
    useEffect(() => {
       let employerService = new EmployerService()
       employerService.getEmployers().then(result=>setEmployers(result.data.data)) 
    })

    return (
      <div>
        <Table fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>id</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Website</Table.HeaderCell>
              <Table.HeaderCell>Phone Number</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
  
          <Table.Body>
              {employers.map((employer) => (
            <Table.Row>
               <Table.Cell>{employer.id}</Table.Cell>
              <Table.Cell>{employer.companyName}</Table.Cell>
              <Table.Cell>{employer.email}</Table.Cell>
              <Table.Cell>{employer.website}</Table.Cell>
              <Table.Cell>{employer.phoneNumber}</Table.Cell>
            </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </div>
    );
  }