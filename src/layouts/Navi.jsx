import React from "react";
import { Container, Menu, Button, Input, Icon } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Menu stackable size="small" inverted fixed="top" color="blue">
        <Container>
          <Menu.Item icon>
            <Icon name="bullhorn" size="large" />
          </Menu.Item>

          <Menu.Item>Home</Menu.Item>
          <Menu.Item>Job Postings</Menu.Item>
          <Menu.Item>Job Seekers</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Input className="icon" icon="search" placeholder="Search..." />
            </Menu.Item>
            <Menu.Item>
              <Button color="black">Sign Up</Button>
            </Menu.Item>
            <Menu.Item>
              <Button color="black">Sign In</Button>
            </Menu.Item>
            <Menu.Item icon>
              <Button color="blue">
                <Icon
                  name="user circle"
                  size="big"
                  color="black"
                  fixed="top"
                ></Icon>
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
