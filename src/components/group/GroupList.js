import React from "react";
import Group from "./Group";

function GroupList(props) {

    const groupList = props.groups.map(item =>
        <Group key={item.id} groupName={item.name} />
    );

    return (
        <ul>
            {groupList}
        </ul>
    );
};

export default GroupList;
