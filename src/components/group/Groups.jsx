import React from 'react';
import { NavLink } from 'react-router-dom';
import './Groups.scss'; // Import file SCSS
// import Group from "./Group";

const Groups = () => {
    const groups = [
        { id: 1, name: 'Nhóm A' },
        { id: 2, name: 'Nhóm B' },
        { id: 3, name: 'Nhóm C' },
      ];
  return (
    <div>
    <h2> Danh sách các nhóm</h2>
      <div className="group-container"> {/* Thêm className cho div cha */}
        {groups.map((group) => (
          <NavLink to="group" end>
            <div className="group">
              {group.name}
            </div>
            
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Groups;

