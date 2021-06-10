import React, { useState, useEffect } from "react";
import JobPositionService from "../services/jobPositionService";
import {Table} from "semantic-ui-react";


export default function JobPositionList() {
  const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
     let jobPositionService = new JobPositionService()
     jobPositionService.getJobPositions().then(result=>setJobPositions(result.data.data)) 
  })

  return (
    <div>
      <Table fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>id</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
            {jobPositions.map((jobPosition) => (
          <Table.Row>
            <Table.Cell>{jobPosition.id}</Table.Cell>
            <Table.Cell>{jobPosition.positionName}</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
          </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
  );
}
