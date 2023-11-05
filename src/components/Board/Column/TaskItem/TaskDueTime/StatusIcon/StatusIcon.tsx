import {FC} from 'react';
import {Statuses} from "../../../../../../constants/statuses";
import {IconAlertTriangle, IconCircleDot, IconClockHour4} from "@tabler/icons-react";

interface StatusIconProps {
    status: Statuses
    className: string
}

const StatusIcon: FC<StatusIconProps> = ({status, className}) => {
    switch (status) {
        case Statuses.warning:
            return <IconAlertTriangle className={className}/>
        case Statuses.average:
            return <IconClockHour4 className={className}/>
        case Statuses.calm:
            return <IconCircleDot className={className}/>
    }

    return <IconCircleDot className={className}/>
};

export default StatusIcon;