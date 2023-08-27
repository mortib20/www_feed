export interface Frame {
  type: 'ACARS' | 'VDL2' | 'HFDL' | 'SATCOM';
  src: { addr: string; type: string; };
  dst: { addr: string; type: string; };
  t: { sec: number; usec: number; };
  acars: {
    reg: string;
    flight: string;
    mode: string;
    msg_num: string;
    msg_num_seq: string;
    msg_text: string;
  };
}
