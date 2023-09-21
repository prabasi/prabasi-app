import React from "react";
export default function useAudio(url: string): [() => void, boolean] {
  const [audio] = React.useState(new Audio(url));
  const [playing, setPlaying] = React.useState(false);

  const toggle = () => setPlaying(!playing);

  React.useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  React.useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  return [toggle, playing];
}
