import { useEffect, useState } from "react";

export const useBpm = (src: string) => {
  const [bpm, setBpm] = useState<number>(null);

  useEffect(() => {
    // We need to lazy import this for nextjs
    import("web-audio-beat-detector").then(({ analyze }) => {
      const offlineAudioContext = new OfflineAudioContext(1, 1, 44100);
      fetch(src)
        .then((response) => response.arrayBuffer())
        .then((arrayBuffer) => offlineAudioContext.decodeAudioData(arrayBuffer))
        .then((audioBuffer) => {
          analyze(audioBuffer)
            .then((tempo) => {
              setBpm(tempo);
            })
            .catch((err) => {
              throw `wtf ${err}`;
            });
        });
    });
  }, [src]);

  return bpm;
};
