import React from "react";
import Slider from "@mui/material/Slider";
import {Typography} from "@mui/material";
import {Stack} from "@mui/system";

const SliderComponent = ({
    defaultValue,
    min,
    max,
    label,
    unit,
    onChange,
    amount,
    value,
    steps
}) => {
    return (
        //Stack component is used to position items vertically or horizontally, all children follow the pattern (default = vertical)
        <Stack my={1.4}>
            {/* Displays the unit amount and label of the data that is being provided */}
            <Stack gap={1}>
                <Typography variant="subtitle2">{label}</Typography>
                <Typography variant="h5">
                    {unit} {amount}
                </Typography>
            </Stack>
            {/* Slider component that is passed values from the params of the function*/}
            <Slider
                min={min}
                max={max}
                defaultValue={defaultValue}
                aria-label="Default"
                valueLabelDisplay="auto"
                onChange={onChange}
                value={value}
                marks
                step={steps}
            />
            {/* Direction=row is short hand for flex-direction:row (meaning display horiztal), justifyContent="space-between" is shorthand for 
            justify space between*/ }
            <Stack direction="row" justifyContent="space-between">
                <Typography variant="caption" color="text.secondary">
                    {unit} {min}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    {unit} {max}
                </Typography>
            </Stack>
        </Stack>

    )
}

export default SliderComponent;