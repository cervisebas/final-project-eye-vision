import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import React, { Component } from 'react';
import './calculadora.scss';

type IProps = {};
type IState = {};
export default class Calculadora extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }
    render() {
        return(<IonPage>
            <IonContent>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>My Navigation Bar</IonTitle>
                    </IonToolbar>
                </IonHeader>  
            </IonContent>
        </IonPage>);
        
    }
}