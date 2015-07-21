# rollsum

## Rollsum
    type Rollsum struct {	
	}

## Count()
    func (rs *Rollsum) Count() uint64

return Rollsum length

## S1()
    func (rs *Rollsum) S1() uint64

value of rollsum s1.

## S2()
    func (rs *Rollsum) S2() uint64

value of rollsum s2.

## Update()
     func (rs *Rollsum) Update(p []byte)

checksum bytes p.

## Init()
    func (rs *Rollsum) Init()

initialize rollsum.

## Rotate()
    func (rs *Rollsum) Rotate(out, in byte)

rotate rollsum. remove out, sum in.

## Rollin()
    func (rs *Rollsum) Rollin(c byte)

add byte c checksum.

## Rollout()
    func (rs *Rollsum) Rollout(c byte)

remove byte c's checksum.

## Digest()
    func (rs *Rollsum) Digest() uint32
	
return Rollsum digest.
