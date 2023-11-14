import {SegmentedControl} from "@mantine/core";
import {priorities} from "../../../../../../constants/priorities";
import {FC} from "react";
import PriorityLabel from "./PriorityLabel/PriorityLabel";

type TPriorityKeys = Array<keyof typeof priorities>

interface SegmentedPriorityControlProps {
    error?: string | undefined,
    onBlur?: () => void,
    onChange: (value: string) => void,
    onFocus?: () => void,
    checked?: boolean,
    value: string
}

const SegmentedPriorityControl: FC<SegmentedPriorityControlProps> = (props) => {
    const prioritiesKeys: TPriorityKeys = Object.keys(priorities) as TPriorityKeys
    //const [controlState, setControlState] = useState<TPriorityKeys[number]>(prioritiesKeys[0])

    const controlItems = prioritiesKeys.map(key => {
        return {
            value: JSON.stringify(priorities[key]),
            label: (
                <PriorityLabel
                    color={priorities[key].color}
                    text={priorities[key].content}
                />
            )
        }
    })

    return (
        <SegmentedControl
            {...props}
            data={controlItems}
            mb={'md'}
        />
    );
};

export default SegmentedPriorityControl;