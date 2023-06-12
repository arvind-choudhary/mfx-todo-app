import React from "react";

interface IProps {
    list: Array<any>;
    renderItem: (input: any, index: number) => any;
}

export const RenderList = ({ list, renderItem }: IProps): any => {
    if (Array.isArray(list)) {
        return list.map((item, index) => React.cloneElement(renderItem(item, index), { key: index }));
    }
    return null;
};
