import { LegacyRef } from "react";

export default class EyeTracking {
    constructor(canvas: HTMLCanvasElement, video: HTMLVideoElement) {
        this.canvas = canvas;
        this.video = video;
    }
    private constraints = { audio: false, video: { facingMode: "user", width: 640, height: 360, frameRate: { max: 60 } } };
    private canvas: HTMLCanvasElement;
    private video: HTMLVideoElement;
    async initialize() {
        var stream = await navigator.mediaDevices.getUserMedia(this.constraints);
        this.video.srcObject = stream;
        this.video.play();

    }
}