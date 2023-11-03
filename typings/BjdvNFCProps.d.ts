/**
 * This file was generated from BjdvNFC.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";
import { Big } from "big.js";

export interface BjdvNFCProps<Style> {
    name: string;
    style: Style[];
    value?: EditableValue<string | Big>;
    onClick?: ActionValue;
}

export interface BjdvNFCPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    value: string;
    onClick: {} | null;
}
