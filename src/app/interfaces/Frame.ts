export interface Frame {
  type: 'jaero' | 'dumphfdl' | 'dumpvdl2' | 'acarsdec'
  channel: string
  receiver: string
  timestamp: number
  label: string
  text: string
  reg: string
  flight: string
  icao: string
}
