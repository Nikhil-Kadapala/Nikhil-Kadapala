export function ScheduleEmbed({ src, description }: { src: string; description: string }) {
  return <iframe className="schedule-iframe" src={src} title={description} loading="lazy" allowFullScreen />;
}
