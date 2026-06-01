"use client";

import { useEffect, useRef } from "react";
import Pusher from "pusher-js";

const PUSHER_KEY = process.env.NEXT_PUBLIC_PUSHER_KEY;
const PUSHER_CLUSTER = process.env.NEXT_PUBLIC_PUSHER_CLUSTER;

export function useImposterRealtime(roomId: string | null, onUpdate: () => void) {
  const onUpdateRef = useRef(onUpdate);

  useEffect(() => {
    onUpdateRef.current = onUpdate;
  }, [onUpdate]);

  useEffect(() => {
    if (!roomId) return;
    if (typeof window === "undefined") return;
    if (!PUSHER_KEY || !PUSHER_CLUSTER) return;

    const pusher = new Pusher(PUSHER_KEY, {
      cluster: PUSHER_CLUSTER,
    });

    const channelName = `imposter-room-${roomId}`;
    const channel = pusher.subscribe(channelName);
    const handler = () => {
      onUpdateRef.current();
    };

    channel.bind("room-updated", handler);

    return () => {
      channel.unbind("room-updated", handler);
      if (pusher.connection.state === "connected") {
        pusher.unsubscribe(channelName);
      }
      if (pusher.connection.state !== "disconnected") {
        pusher.disconnect();
      }
    };
  }, [roomId]);
}
