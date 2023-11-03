import { ReactElement, createElement, useCallback, useState, useEffect } from "react";

import { BadgeStyle } from "./ui/styles";
import { BjdvNFCProps } from "../typings/BjdvNFCProps";
import { Button, Alert } from 'react-native';
import NfcManager, { NfcTech } from 'react-native-nfc-manager';

export function BjdvNFC({value,onClick }: BjdvNFCProps<BadgeStyle>): ReactElement {
    const buttonValue = "读取NFC";
    const buttonColor = "#4096ff";
    async function go(){
        showMessage("请靠近设备");

        const deviceIsSupported = await NfcManager.isSupported()
        if (deviceIsSupported) {
            await NfcManager.start();
            await NfcManager.requestTechnology(NfcTech.Ndef);
            const tag = await NfcManager.getTag();
            NfcManager.cancelTechnologyRequest();
            value?.setValue(tag.id);
           
        }else
            showMessage("不支持");
        if (onClick) {
            await onClick.execute();
        }
    }
    
    



    function showMessage(str:string) {

        Alert.alert(
            "Alert Title",
            str,
            [
                {
                    text: "Cancel", onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    }








    return <Button onPress={() => go()}
        title={buttonValue}
        color={buttonColor}
    />;
}
