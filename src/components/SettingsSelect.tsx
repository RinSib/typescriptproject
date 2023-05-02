import React, {FC} from 'react';

export interface SettingsSelectProps {
    defaultValue: string;
    options: string[];
}

interface IOption{
    value: string
}

const options = [];


const SettingsSelect: FC<SettingsSelectProps> = ({options, defaultValue}) => {
    return (

        <select>
            <option>{defaultValue}</option>
            <option>Recommented</option>
            <option>High price</option>
            <option>Low Price</option>
        </select>

    );
};

export default SettingsSelect;