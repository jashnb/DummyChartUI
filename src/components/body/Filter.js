import React from 'react';
import Select from 'react-select';
/*
    https://github.com/JedWatson/react-select
*/

const filter = (props) => {
    return(
        <div>
            <Select
            // value = {props.values[0]}
            options = {props.values}
            valueKey = "value"
            labelKey = "value"
            name = "Select Stock"
            onValueClick = {props.onChanged}
            />
        </div>
    );
};

export default filter;