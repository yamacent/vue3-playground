import dayjs from "dayjs";

export function formatTime(unixtime: number): string {
  return dayjs.unix(unixtime).format();
}
