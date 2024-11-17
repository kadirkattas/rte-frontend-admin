import { useState, useRef, useEffect } from "react";

const VideoRecorderMobile = ({
  isRecording,
  onStartRecording,
  onStopRecording,
}) => {
  const mimeType = "video/webm";
  const [permission, setPermission] = useState(false);
  const mediaRecorder = useRef(null);
  const liveVideoFeed = useRef(null);
  const [stream, setStream] = useState(null);
  const [videoChunks, setVideoChunks] = useState([]);
  const [recordedVideo, setRecordedVideo] = useState(null);

  useEffect(() => {
    // When permission is granted and the component is rendered, attach the stream
    if (permission && liveVideoFeed.current && stream) {
      liveVideoFeed.current.srcObject = stream;
      liveVideoFeed.current.muted = true; // Mute the microphone
    }
  }, [permission, stream]);

  const getCameraPermission = async () => {
    if ("MediaRecorder" in window) {
      try {
        const videoConstraints = { audio: false, video: true };
        const audioConstraints = { audio: true };

        // Request audio and video streams
        const audioStream = await navigator.mediaDevices.getUserMedia(
          audioConstraints
        );
        const videoStream = await navigator.mediaDevices.getUserMedia(
          videoConstraints
        );

        // Combine both audio and video streams
        const combinedStream = new MediaStream([
          ...videoStream.getVideoTracks(),
          ...audioStream.getAudioTracks(),
        ]);
        setStream(combinedStream);
        setPermission(true);
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert("The MediaRecorder API is not supported in your browser.");
    }
  };

  const startRecording = () => {
    if (!permission) {
      getCameraPermission(); // Ask for permission if not granted
      return;
    }

    // Set up MediaRecorder and start recording
    const media = new MediaRecorder(stream, { mimeType });
    mediaRecorder.current = media;
    mediaRecorder.current.start();
    let localVideoChunks = [];

    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined") return;
      if (event.data.size === 0) return;
      localVideoChunks.push(event.data);
    };

    mediaRecorder.current.onstop = () => {
      const videoBlob = new Blob(localVideoChunks, { type: mimeType });
      const videoUrl = URL.createObjectURL(videoBlob);
      setRecordedVideo(videoUrl);
      setVideoChunks([]);
      onStopRecording(); // Notify that recording has stopped
    };

    mediaRecorder.current.onstart = () => {
      onStartRecording(); // Notify that recording has started
    };

    setVideoChunks(localVideoChunks);
  };

  const stopRecording = () => {
    mediaRecorder.current.stop();
    setPermission(false); // Reset permission status after stopping
  };

  // Automatically start recording if isRecording is true
  useEffect(() => {
    if (isRecording) {
      startRecording();
    } else {
      if (
        mediaRecorder.current &&
        mediaRecorder.current.state === "recording"
      ) {
        stopRecording();
      }
    }
  }, [isRecording]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black p-4">
      <main className="w-full h-full flex flex-col items-center justify-center">
        <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden">
          <video
            ref={liveVideoFeed}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            autoPlay
          ></video>
        </div>

        {recordedVideo && (
          <div className="video-player mt-4">
            <a
              download
              href={recordedVideo}
              className="block mt-2 text-center text-blue-500"
            >
              Download Recording
            </a>
          </div>
        )}
      </main>
    </div>
  );
};

export default VideoRecorderMobile;
