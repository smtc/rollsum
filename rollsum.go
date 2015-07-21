package rollsum

// librsync rollsum alg

const (
	ROLLSUM_CHAR_OFFSET uint64 = 31
)

/* the Rollsum struct type*/
type Rollsum struct {
	count uint64 /* count of bytes included in sum */
	s1    uint64 /* s1 part of sum */
	s2    uint64 /* s2 part of sum */
}

func (rs *Rollsum) Init() {
	rs.count = 0
	rs.s1 = 0
	rs.s2 = 0
}

// golang: byte is an alias for uint8 and is equivalent to uint8 in all ways.
//         It is used, by convention, to distinguish byte values from 8-bit
//         unsigned integer values.
func (rs *Rollsum) Rotate(out, in byte) {
	rs.s1 += uint64(in)
	rs.s1 -= uint64(out)
	rs.s2 += rs.s1
	rs.s2 -= rs.count * (uint64(out) + ROLLSUM_CHAR_OFFSET)
}

func (rs *Rollsum) Rollin(c byte) {
	rs.s1 += uint64(c) + ROLLSUM_CHAR_OFFSET
	rs.s2 += rs.s1
	rs.count++
}

func (rs *Rollsum) Rollout(c byte) {
	rs.s1 -= uint64(c) + ROLLSUM_CHAR_OFFSET
	rs.s2 -= rs.count * (uint64(c) + ROLLSUM_CHAR_OFFSET)
	rs.count--
}

func (rs *Rollsum) Digest() uint32 {
	return uint32((rs.s2 << 16) | (rs.s1 & 0xffff))
}

/*
librsync rollsum.c

#define DO1(buf,i)  {s1 += buf[i]; s2 += s1;}
#define DO2(buf,i)  DO1(buf,i); DO1(buf,i+1); => {s1+=buf[i]; s2+=s1;}    {s1+=buf[i+1]; s2+=s1;}
#define DO4(buf,i)  DO2(buf,i); DO2(buf,i+2); => {s1+=buf[i]; s2+=s1; s1+=buf[i+1]; s2+=s1;}    {s1+=buf[i+2]; s2+=s1; s1+=buf[i+3]; s2+=s1;}
#define DO8(buf,i)  DO4(buf,i); DO4(buf,i+4); =>
						{s1+=buf[i]; s2+=s1; s1+=buf[i+1]; s2+=s1;}    {s1+=buf[i+2]; s2+=s1; s1+=buf[i+3]; s2+=s1;}
						{s1+=buf[i+4]; s2+=s1; s1+=buf[i+5]; s2+=s1;}    {s1+=buf[i+6]; s2+=s1; s1+=buf[i+7]; s2+=s1;}
#define DO16(buf)   DO8(buf,0); DO8(buf,8); =>
						{s1+=buf[i]; s2+=s1; s1+=buf[i+1]; s2+=s1;}    {s1+=buf[i+2]; s2+=s1; s1+=buf[i+3]; s2+=s1;
						s1+=buf[i+4]; s2+=s1; s1+=buf[i+5]; s2+=s1;}    {s1+=buf[i+6]; s2+=s1; s1+=buf[i+7]; s2+=s1;}

						{s1+=buf[i+8]; s2+=s1; s1+=buf[i+9]; s2+=s1;}    {s1+=buf[i+10]; s2+=s1; s1+=buf[i+11]; s2+=s1;
						s1+=buf[i+12]; s2+=s1; s1+=buf[i+13]; s2+=s1;}    {s1+=buf[i+14]; s2+=s1; s1+=buf[i+15]; s2+=s1;}
#define OF16(off)  {s1 += 16*off; s2 += 136*off;}

void RollsumUpdate(Rollsum *sum,const unsigned char *buf,unsigned int len) {
    // ANSI C says no overflow for unsigned.
    // zlib's adler 32 goes to extra effort to avoid overflow
    unsigned long s1 = sum->s1;
    unsigned long s2 = sum->s2;

    sum->count+=len;                   // increment sum count
    while (len >= 16) {
        DO16(buf);
        OF16(ROLLSUM_CHAR_OFFSET);
        buf += 16;
        len -= 16;
    }
    while (len != 0) {
        s1 += (*buf++ + ROLLSUM_CHAR_OFFSET);
        s2 += s1;
        len--;
    }
    sum->s1=s1;
    sum->s2=s2;
}
*/

func (rs *Rollsum) Update(p []byte) {
	var (
		s1, s2 uint64
		i      = 0
		l      = len(p)
	)

	rs.count += uint64(l)
	for l >= 16 {
		s1 += uint64(p[i])
		s2 += s1
		s1 += uint64(p[i+1])
		s2 += s1
		s1 += uint64(p[i+2])
		s2 += s1
		s1 += uint64(p[i+3])
		s2 += s1
		s1 += uint64(p[i+4])
		s2 += s1
		s1 += uint64(p[i+5])
		s2 += s1
		s1 += uint64(p[i+6])
		s2 += s1
		s1 += uint64(p[i+7])
		s2 += s1
		s1 += uint64(p[i+8])
		s2 += s1
		s1 += uint64(p[i+9])
		s2 += s1
		s1 += uint64(p[i+10])
		s2 += s1
		s1 += uint64(p[i+11])
		s2 += s1
		s1 += uint64(p[i+12])
		s2 += s1
		s1 += uint64(p[i+13])
		s2 += s1
		s1 += uint64(p[i+14])
		s2 += s1
		s1 += uint64(p[i+15])
		s2 += s1

		s1 += 16 * ROLLSUM_CHAR_OFFSET
		s2 += 136 * ROLLSUM_CHAR_OFFSET
		i += 16
		l -= 16
	}

	for l > 0 {
		s1 += ROLLSUM_CHAR_OFFSET + uint64(p[i])
		s2 += s1
		i++
		l--
	}

	rs.s1 = s1
	rs.s2 = s2
}
