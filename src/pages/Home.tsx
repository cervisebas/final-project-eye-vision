import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Component, ReactNode } from 'react';
import EyeTracking from '../scripts/EyeTacking';
import './Home.css';

type IProps = {};
type IState = {};
export default class Home extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  private videoRef: HTMLVideoElement | any = null;
  private canvasRef: HTMLCanvasElement | any = null;
  private styleComun: React.CSSProperties = { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%' };
  componentDidMount() {
    setTimeout(() => {
      var tracking = new EyeTracking(this.canvasRef, this.videoRef);
      tracking.initialize();
    }, 2000);
  }
  render(): ReactNode {
    return(<IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div style={{ position: 'relative', width: 640, height: 360, transform: 'rotateY(180deg)' }}>
          <video ref={(e)=>this.videoRef = e} style={this.styleComun} />
          <canvas ref={(e)=>this.canvasRef = e} style={this.styleComun} />
        </div>
      </IonContent>
    </IonPage>);
  }
}

//export default Home;
