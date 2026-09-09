import { calendlyEmbedSrc } from "@/lib/teaching";

export function ScheduleEmbed({ src, description }: { src: string; description: string }) {
  return (
    <iframe
      className="schedule-iframe"
      src={calendlyEmbedSrc(src)}
      title={description}
      loading="lazy"
      allowFullScreen
    />
  );
}
