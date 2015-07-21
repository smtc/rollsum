package rollsum

import (
	"io"
	"os"
	"testing"
)

func TestRollsum(t *testing.T) {
	blockLen := 16
	for blockLen <= 8192 {
		rollsumFile(t, blockLen, "./testdata/tanx.js")
		blockLen <<= 1
	}
}

func rollsumFile(t *testing.T, blen int, fn string) {
	var (
		rs1  Rollsum
		rs2  Rollsum
		pos  = blen
		buf1 = make([]byte, blen)
		buf2 = make([]byte, blen)
	)

	f, err := os.Open(fn)
	if err != nil {
		t.Fatal(err)
	}

	_, err = io.ReadFull(f, buf1)
	if err != nil {
		t.Logf("file %s lenght less than %d, ignored.\n", fn, blen)
		return
	}

	rs1.Init()
	rs1.Update(buf1)
	for {
		pos++
		copy(buf2, buf1[1:blen])
		_, err = io.ReadFull(f, buf2[blen-1:blen])

		rs2.Init()
		rs2.Update(buf2)

		rs1.Rotate(buf1[0], buf2[blen-1])
		if rs1.s1 != rs2.s1 || rs1.s2 != rs2.s2 {
			t.Fatalf("pos: %d rs1.s1:%d rs1.s2: %d rs2.s1: %d rs2.s2: %d out: %d in: %d\n",
				pos, rs1.s1, rs1.s2, rs2.s1, rs2.s2, buf1[0], buf2[blen-1])
		}
		copy(buf1, buf2)
		if err != nil {
			break
		}
	}
}
