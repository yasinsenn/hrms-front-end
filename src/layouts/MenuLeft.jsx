import React from "react";
import {Menu} from "semantic-ui-react"

export default function MenuLeft() {
  return (
    <div>
      <Menu inverted pointing vertical>
        <Menu.Item name="Employers" />
        <Menu.Item name="Job Positions" />
      </Menu>
    </div>
  );
}
