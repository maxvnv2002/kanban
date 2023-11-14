import {FC} from "react";
import {Box, Center, ColorSwatch} from "@mantine/core";

interface PriorityLabelProps {
    color: string,
    text: string
}

const PriorityLabel: FC<PriorityLabelProps> = ({color, text}) => {
    return (
        <Center>
            <ColorSwatch color={color} />
            <Box ml={'xs'}>{text}</Box>
        </Center>
    );
};

export default PriorityLabel;