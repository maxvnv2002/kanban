import {ComponentPropsWithoutRef, forwardRef} from "react";
import {IconSettings2} from "@tabler/icons-react";
import classes from './TargetButton.module.scss';

const TargetButton = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'span'>>((props, ref) => {
    return (
        <span ref={ref} {...props} className={classes.target}>
            <IconSettings2/>
        </span>
    )
});

export default TargetButton;